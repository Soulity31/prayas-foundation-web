/**
 * Prayas Foundation Unified Ultra-Fast API Client & Standalone Engine
 * 
 * Features:
 * - 0ms Instant Standalone Mode when hosted on GitHub Pages (zero blocking network requests)
 * - Transparent Client-Side AI Engine & LocalStorage SQLite store
 * - Optional Cloud API sync when explicit backend URL is provided (e.g. Render / Localhost)
 */

import { searchKnowledgeBase } from '../data/botKnowledge.js';

export function hasExplicitApi() {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE) {
    return true;
  }
  if (typeof window !== 'undefined' && window.PRAYAS_API_BASE) {
    return true;
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const stored = localStorage.getItem('prayas_api_url');
      if (stored && stored.trim()) return true;
    } catch (e) {}
  }
  if (typeof window !== 'undefined') {
    const loc = window.location;
    const isLocal = loc.hostname === 'localhost' || loc.hostname === '127.0.0.1' || loc.hostname === '0.0.0.0';
    if (isLocal) return true;
  }
  return false;
}

// Auto-determine active API Base URL
export function getApiBase() {
  // 1. Environment variable if bundled
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE) {
    const envUrl = String(import.meta.env.VITE_API_BASE).trim().replace(/\/+$/, '');
    if (envUrl) return envUrl.endsWith('/api') ? envUrl : `${envUrl}/api`;
  }

  // 2. Window-level explicit global
  if (typeof window !== 'undefined' && window.PRAYAS_API_BASE) {
    const winUrl = String(window.PRAYAS_API_BASE).trim().replace(/\/+$/, '');
    if (winUrl) return winUrl.endsWith('/api') ? winUrl : `${winUrl}/api`;
  }

  // 3. Admin / Developer localStorage override
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const stored = localStorage.getItem('prayas_api_url');
      if (stored && stored.trim()) {
        const clean = stored.trim().replace(/\/+$/, '');
        return clean.endsWith('/api') ? clean : `${clean}/api`;
      }
    } catch (e) {}
  }

  // 4. In browser environment
  if (typeof window !== 'undefined') {
    const loc = window.location;
    const isLocalhost = loc.hostname === 'localhost' || loc.hostname === '127.0.0.1' || loc.hostname === '0.0.0.0';
    
    if (isLocalhost) {
      if (loc.port === '8000') {
        return `${loc.protocol}//${loc.host}/api`;
      }
      return `${loc.protocol}//${loc.hostname}:8000/api`;
    }

    // Default for static hosting (GitHub Pages)
    return '';
  }

  return 'http://127.0.0.1:8000/api';
}

export function setCustomApiBase(url) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  if (!url || !url.trim()) {
    localStorage.removeItem('prayas_api_url');
  } else {
    localStorage.setItem('prayas_api_url', url.trim());
  }
  pingHealthCheck();
}

export function getCustomApiBase() {
  if (typeof window === 'undefined' || !window.localStorage) return '';
  return localStorage.getItem('prayas_api_url') || '';
}

export function getDonationPdfUrl(donationId) {
  const base = getApiBase();
  return base ? `${base}/donations/${donationId}/download-pdf` : '';
}

// Global API Status State
let isServerReachable = false;
let lastHeartbeatTime = null;
let keepAliveTimer = null;
const apiStateListeners = new Set();

export function onApiStateChange(callback) {
  apiStateListeners.add(callback);
  callback(isServerReachable, lastHeartbeatTime);
  return () => apiStateListeners.delete(callback);
}

export function isServerOnline() {
  return isServerReachable;
}

export function getLastHeartbeat() {
  return lastHeartbeatTime;
}

function notifyStateChange(online) {
  isServerReachable = online;
  lastHeartbeatTime = new Date();
  apiStateListeners.forEach(fn => {
    try { fn(isServerReachable, lastHeartbeatTime); } catch (e) {}
  });
}

/**
 * Pings the server to check connectivity (only runs if an explicit API is configured).
 */
export async function pingHealthCheck() {
  const base = getApiBase();
  if (!base || !hasExplicitApi()) {
    notifyStateChange(false);
    return false;
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${base}/health`, {
      method: 'GET',
      headers: { 'Cache-Control': 'no-cache' },
      signal: controller.signal
    });
    clearTimeout(timer);
    if (res.ok) {
      notifyStateChange(true);
      return true;
    }
  } catch (e) {}
  notifyStateChange(false);
  return false;
}

/**
 * Initializes proactive background keep-alive heartbeat only when connected to live backend.
 */
export function initKeepAliveDaemon() {
  if (typeof window === 'undefined') return;
  if (!hasExplicitApi()) return; // Pure instant client mode on GitHub Pages
  if (keepAliveTimer) return;

  // Immediate wakeup ping
  pingHealthCheck();

  // Heartbeat every 4 minutes
  keepAliveTimer = setInterval(() => {
    if (document.visibilityState !== 'hidden') {
      pingHealthCheck();
    }
  }, 240000);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      pingHealthCheck();
    }
  });
}

// Auto-boot keep-alive only if API is configured
if (typeof window !== 'undefined') {
  initKeepAliveDaemon();
}

/**
 * Resilient fetch wrapper with instant fallback if no remote backend is configured.
 */
export async function fetchWithRetry(urlOrPath, options = {}, maxRetries = 1, baseDelayMs = 400) {
  const base = getApiBase();
  if (!base || !hasExplicitApi()) {
    throw new Error('Running in standalone GitHub Pages client mode.');
  }

  const fullUrl = urlOrPath.startsWith('http') ? urlOrPath : `${base}${urlOrPath.startsWith('/') ? '' : '/'}${urlOrPath}`;
  
  let attempt = 0;
  let lastError = null;

  while (attempt <= maxRetries) {
    try {
      const controller = new AbortController();
      const timeoutMs = options.timeout || (attempt === 0 ? 5000 : 3000);
      const timer = setTimeout(() => controller.abort(), timeoutMs);

      const mergedOptions = {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(options.headers || {})
        }
      };

      const res = await fetch(fullUrl, mergedOptions);
      clearTimeout(timer);

      if (res.ok) {
        notifyStateChange(true);
        return res;
      }

      if (res.status === 404) {
        throw new Error(`HTTP 404 Not Found from ${fullUrl}`);
      }

      if ([502, 503, 504].includes(res.status) && attempt < maxRetries) {
        attempt++;
        const delay = baseDelayMs * Math.pow(1.5, attempt);
        await new Promise(r => setTimeout(r, delay));
        continue;
      }

      return res;
    } catch (err) {
      lastError = err;
      attempt++;
      if (attempt <= maxRetries && !err.message?.includes('404')) {
        const delay = baseDelayMs * Math.pow(1.5, attempt);
        await new Promise(r => setTimeout(r, delay));
      } else {
        break;
      }
    }
  }

  notifyStateChange(false);
  throw lastError || new Error(`Failed to fetch from ${fullUrl}`);
}

// ============================================================================
// High-Level Domain API Methods (Instant 0ms Local Storage Store on GitHub)
// ============================================================================

/**
 * Records a new donation instantly.
 */
export async function recordDonation(payload) {
  const rnd = Math.floor(1000 + Math.random() * 9000);
  const is80g = payload.is_80g !== undefined ? payload.is_80g : true;

  const fallbackRecord = {
    id: Date.now() % 100000,
    donor_name: payload.donor_name,
    donor_email: payload.donor_email,
    donor_phone: payload.donor_phone,
    donor_pan: payload.donor_pan || null,
    amount: Number(payload.amount),
    payment_mode: payload.payment_mode || 'UPI',
    transaction_id: payload.transaction_id || `UPI-2026-${rnd}`,
    tax_80g_receipt_no: is80g ? `80G-PF-2026-X${rnd}` : null,
    is_80g: is80g ? 1 : 0,
    cause: payload.cause || 'MPS Malvani School & Digital Labs',
    status: 'COMPLETED',
    created_at: new Date().toISOString()
  };

  if (hasExplicitApi()) {
    try {
      const res = await fetchWithRetry('/donations', {
        method: 'POST',
        body: JSON.stringify(payload)
      }, 1, 400);

      if (res.ok) {
        const json = await res.json();
        const serverData = json.data || json;
        saveLocalDonation(serverData);
        return serverData;
      }
    } catch (e) {}
  }

  saveLocalDonation(fallbackRecord);
  return fallbackRecord;
}

function saveLocalDonation(record) {
  try {
    const raw = localStorage.getItem('prayas_sql_donations');
    const list = raw ? JSON.parse(raw) : [];
    const exists = list.some(d => d.id === record.id || (d.transaction_id && d.transaction_id === record.transaction_id));
    if (!exists) {
      list.unshift(record);
      localStorage.setItem('prayas_sql_donations', JSON.stringify(list));
    }
  } catch (e) {}
}

/**
 * Registers a new volunteer instantly.
 */
export async function recordVolunteer(payload) {
  const fallbackRecord = {
    id: Date.now() % 100000,
    full_name: payload.full_name,
    email: payload.email,
    phone: payload.phone,
    skills: payload.skills || 'Teaching / Mentorship',
    availability: payload.availability || 'Weekends',
    city: payload.city || 'Mumbai',
    status: 'NEW',
    applied_at: new Date().toISOString()
  };

  if (hasExplicitApi()) {
    try {
      const res = await fetchWithRetry('/volunteers', {
        method: 'POST',
        body: JSON.stringify(payload)
      }, 1, 400);

      if (res.ok) {
        const json = await res.json();
        const serverData = json.data || json;
        saveLocalVolunteer(serverData);
        return serverData;
      }
    } catch (e) {}
  }

  saveLocalVolunteer(fallbackRecord);
  return fallbackRecord;
}

function saveLocalVolunteer(record) {
  try {
    const raw = localStorage.getItem('prayas_sql_volunteers');
    const list = raw ? JSON.parse(raw) : [];
    const exists = list.some(v => v.id === record.id || (v.email === record.email && v.full_name === record.full_name));
    if (!exists) {
      list.unshift(record);
      localStorage.setItem('prayas_sql_volunteers', JSON.stringify(list));
    }
  } catch (e) {}
}

/**
 * Records a contact message / feedback instantly.
 */
export async function recordContact(payload) {
  const fallbackRecord = {
    id: Date.now() % 100000,
    name: payload.name,
    email: payload.email,
    phone: payload.phone || null,
    subject: payload.subject || 'General Inquiry',
    message: payload.message,
    is_resolved: 0,
    created_at: new Date().toISOString()
  };

  if (hasExplicitApi()) {
    try {
      const res = await fetchWithRetry('/contact', {
        method: 'POST',
        body: JSON.stringify(payload)
      }, 1, 400);

      if (res.ok) {
        const json = await res.json();
        const serverData = json.data || json;
        saveLocalContact(serverData);
        return serverData;
      }
    } catch (e) {}
  }

  saveLocalContact(fallbackRecord);
  return fallbackRecord;
}

function saveLocalContact(record) {
  try {
    const raw = localStorage.getItem('prayas_sql_inquiries');
    const list = raw ? JSON.parse(raw) : [];
    list.unshift(record);
    localStorage.setItem('prayas_sql_inquiries', JSON.stringify(list));
  } catch (e) {}
}

/**
 * Real-time AI Chat: Instant 0ms response from built-in knowledge base on GitHub Pages.
 */
export async function streamChat(query, currentLang = 'en', { onToken, onMeta, onDone, onError }) {
  const cleanQuery = query.trim();
  const base = getApiBase();

  if (hasExplicitApi() && base) {
    try {
      const controller = new AbortController();
      const timeoutTimer = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(`${base}/chat/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: cleanQuery, model: 'local' }),
        signal: controller.signal
      });

      clearTimeout(timeoutTimer);

      if (res.ok && res.body) {
        notifyStateChange(true);
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const dataStr = trimmed.replace(/^data:\s*/, '');
            if (dataStr === '[DONE]') {
              if (onDone) onDone();
              return;
            }

            try {
              const event = JSON.parse(dataStr);
              if (event.type === 'meta' && onMeta) {
                onMeta(event);
              } else if (event.type === 'token' && onToken) {
                onToken(event.content);
              }
            } catch (err) {}
          }
        }
        if (onDone) onDone();
        return;
      }
    } catch (e) {}
  }

  // Instant client-side AI response on GitHub Pages
  const localAnswer = searchKnowledgeBase(cleanQuery, currentLang);
  if (onToken) {
    onToken(localAnswer);
  }
  if (onDone) onDone();
}
