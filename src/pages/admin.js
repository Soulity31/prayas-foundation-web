import { siteContent } from '../data/content.js';
import { createNavbar, createNavigationDrawer } from '../components/Navbar.js';
import { createFooter } from '../components/Footer.js';
import { createLegalModals } from '../components/LegalModals.js';
import { createDonateModal, setupDonateModalComponent } from '../components/DonateModal.js';
import { createChatbot, setupChatbotComponent } from '../components/Chatbot.js';
import { initPerformanceOptimizer } from '../utils/performance.js';
import {
  generate80GReceiptText,
  generate80GReceiptHtml,
  openEmailReceipt,
  getReceiptEmailLinks,
  openWhatsAppReceipt,
  printOfficial80GReceipt,
  downloadOfficial80GPdf,
  PRAYAS_TRUST_DETAILS
} from '../utils/receiptService.js';
import {
  getApiBase,
  setCustomApiBase,
  getCustomApiBase,
  fetchWithRetry,
  recordDonation,
  recordVolunteer,
  getDonationPdfUrl,
  onApiStateChange,
  pingHealthCheck,
  isServerOnline
} from '../utils/apiClient.js';

let currentLang = localStorage.getItem('prayas_lang') || 'en';
let currentTheme = localStorage.getItem('prayas_theme') || 'light';
let activeTab = 'donations';

document.documentElement.setAttribute('data-theme', currentTheme);
document.documentElement.setAttribute('lang', currentLang);
initPerformanceOptimizer();

// Global Language Modal Controllers
window.openLanguageModal = function() {
  let overlay = document.getElementById('language-modal-overlay');
  if (overlay && overlay.parentElement !== document.body) {
    document.body.appendChild(overlay);
  }
  if (overlay) {
    overlay.style.setProperty('display', 'flex', 'important');
    overlay.style.setProperty('opacity', '1', 'important');
    overlay.style.setProperty('visibility', 'visible', 'important');
    overlay.style.setProperty('pointer-events', 'auto', 'important');
    overlay.classList.add('open');
  }
  document.body.style.overflow = 'hidden';
};

window.closeLanguageModal = function() {
  const overlay = document.getElementById('language-modal-overlay');
  if (overlay) {
    overlay.style.setProperty('display', 'none', 'important');
    overlay.style.setProperty('opacity', '0', 'important');
    overlay.style.setProperty('visibility', 'hidden', 'important');
    overlay.style.setProperty('pointer-events', 'none', 'important');
    overlay.classList.remove('open');
  }
  document.body.style.overflow = '';
};

window.setPrayasLanguage = function(lang) {
  currentLang = lang || 'en';
  localStorage.setItem('prayas_lang', currentLang);
  document.documentElement.setAttribute('lang', currentLang);
  window.closeLanguageModal && window.closeLanguageModal();
  window.location.reload();
};

// Global Menu Open / Close Controllers
window.openPrayasMenu = function() {
  let overlay = document.getElementById('drawer-overlay');
  let drawer = document.getElementById('mobile-drawer');
  if (overlay && overlay.parentElement !== document.body) {
    document.body.appendChild(overlay);
  }
  if (drawer && drawer.parentElement !== document.body) {
    document.body.appendChild(drawer);
  }
  if (overlay) {
    overlay.style.setProperty('display', 'block', 'important');
    overlay.style.setProperty('opacity', '1', 'important');
    overlay.style.setProperty('visibility', 'visible', 'important');
    overlay.style.setProperty('pointer-events', 'auto', 'important');
  }
  if (drawer) {
    drawer.style.setProperty('display', 'flex', 'important');
    drawer.style.setProperty('opacity', '1', 'important');
    drawer.style.setProperty('visibility', 'visible', 'important');
    drawer.style.setProperty('pointer-events', 'auto', 'important');
    drawer.style.setProperty('z-index', '999999', 'important');
  }
  document.body.style.overflow = 'hidden';
};

window.closePrayasMenu = function() {
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('mobile-drawer');
  if (overlay) {
    overlay.style.setProperty('display', 'none', 'important');
    overlay.style.setProperty('opacity', '0', 'important');
    overlay.style.setProperty('visibility', 'hidden', 'important');
    overlay.style.setProperty('pointer-events', 'none', 'important');
  }
  if (drawer) {
    drawer.style.setProperty('display', 'none', 'important');
    drawer.style.setProperty('opacity', '0', 'important');
    drawer.style.setProperty('visibility', 'hidden', 'important');
    drawer.style.setProperty('pointer-events', 'none', 'important');
  }
  document.body.style.overflow = '';
};

window.togglePrayasMenu = function(open) {
  if (open) {
    window.openPrayasMenu();
  } else {
    window.closePrayasMenu();
  }
};

const getApiBaseUrl = () => getApiBase();

// Verified Clean State (No dummy placeholder records)
const DEFAULT_SQL_DONATIONS = [];
const DEFAULT_SQL_VOLUNTEERS = [];
const DEFAULT_SQL_INQUIRIES = [];

// Clear any legacy seed dummy data from localStorage
(function cleanLegacySeedData() {
  try {
    const rawDonations = localStorage.getItem('prayas_sql_donations');
    if (rawDonations && (rawDonations.includes('Aarav Mehta') || rawDonations.includes('Sunita Patil'))) {
      localStorage.removeItem('prayas_sql_donations');
    }
    const rawVolunteers = localStorage.getItem('prayas_sql_volunteers');
    if (rawVolunteers && (rawVolunteers.includes('Rohit Kulkarni') || rawVolunteers.includes('Ananya Sharma'))) {
      localStorage.removeItem('prayas_sql_volunteers');
    }
    const rawInquiries = localStorage.getItem('prayas_sql_inquiries');
    if (rawInquiries && (rawInquiries.includes('Rajesh Gupte') || rawInquiries.includes('Kavita Rao'))) {
      localStorage.removeItem('prayas_sql_inquiries');
    }
  } catch (e) {}
})();

function getStoredDonations() {
  try {
    const raw = localStorage.getItem('prayas_sql_donations');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

function saveStoredDonations(donations) {
  localStorage.setItem('prayas_sql_donations', JSON.stringify(donations));
}

function getStoredVolunteers() {
  try {
    const raw = localStorage.getItem('prayas_sql_volunteers');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

function saveStoredVolunteers(volunteers) {
  localStorage.setItem('prayas_sql_volunteers', JSON.stringify(volunteers));
}

function getStoredInquiries() {
  try {
    const raw = localStorage.getItem('prayas_sql_inquiries');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

function saveStoredInquiries(inquiries) {
  localStorage.setItem('prayas_sql_inquiries', JSON.stringify(inquiries));
}

async function fetchMetrics() {
  const donations = await fetchTableData('donations');
  const volunteers = await fetchTableData('volunteers');
  const inquiries = await fetchTableData('contact');

  const totalDonations = donations.reduce((sum, d) => sum + Number(d.amount || 0), 0);
  const donations80g = donations.filter(d => d.is_80g || d.tax_80g_receipt_no);
  const donations80gTotal = donations80g.reduce((sum, d) => sum + Number(d.amount || 0), 0);

  const normalDonations = donations.filter(d => !d.is_80g && !d.tax_80g_receipt_no);
  const normalDonationsTotal = normalDonations.reduce((sum, d) => sum + Number(d.amount || 0), 0);

  const pendingInquiries = inquiries.filter(i => !i.is_resolved).length;

  return {
    total_donations: totalDonations,
    total_donations_formatted: `₹${totalDonations.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    donations_80g_total_formatted: `₹${donations80gTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    donations_80g_count: donations80g.length,
    normal_donations_total_formatted: `₹${normalDonationsTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    normal_donations_count: normalDonations.length,
    donor_count: donations.length,
    volunteer_count: volunteers.length,
    total_inquiries: inquiries.length,
    pending_inquiries: pendingInquiries
  };
}

async function fetchTableData(tab) {
  let serverRows = [];
  try {
    let endpoint = '/donations';
    if (tab === 'donations_80g') endpoint = '/donations?filter_type=80g';
    else if (tab === 'donations_normal') endpoint = '/donations?filter_type=normal';
    else if (tab === 'volunteers') endpoint = '/volunteers';
    else if (tab === 'contact') endpoint = '/contact';

    const res = await fetchWithRetry(endpoint, { method: 'GET' }, 2, 800);
    if (res.ok) {
      const data = await res.json();
      serverRows = data[tab] || data.donations || data.volunteers || data.inquiries || [];
    }
  } catch (e) {}

  if (tab === 'donations') {
    const local = getStoredDonations();
    const map = new Map();
    [...local, ...serverRows].forEach(d => {
      const key = d.id || `${d.donor_email}-${d.amount}`;
      if (!map.has(key)) map.set(key, d);
    });
    return Array.from(map.values());
  } else if (tab === 'donations_80g') {
    const all = await fetchTableData('donations');
    return all.filter(d => d.is_80g || d.tax_80g_receipt_no);
  } else if (tab === 'donations_normal') {
    const all = await fetchTableData('donations');
    return all.filter(d => !d.is_80g && !d.tax_80g_receipt_no);
  } else if (tab === 'volunteers') {
    const local = getStoredVolunteers();
    const map = new Map();
    [...local, ...serverRows].forEach(v => {
      const key = v.id || `${v.email}-${v.full_name}`;
      if (!map.has(key)) map.set(key, v);
    });
    return Array.from(map.values());
  } else if (tab === 'contact') {
    const local = getStoredInquiries();
    const map = new Map();
    [...local, ...serverRows].forEach(c => {
      const key = c.id || `${c.email}-${c.name}`;
      if (!map.has(key)) map.set(key, c);
    });
    return Array.from(map.values());
  }
  return [];
}

export async function renderAdmin() {
  const app = document.getElementById('app');
  if (!app) return;

  const metrics = await fetchMetrics();

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'admin')}

    <main class="admin-container" style="flex: 1; padding: 2.5rem 1.5rem; max-width: 1320px; margin: 0 auto; width: 100%; box-sizing: border-box;">
      
      <!-- Top Title & Controls Header -->
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1.25rem; margin-bottom: 2rem; border-bottom: 1.5px solid var(--border); padding-bottom: 1.5rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
            <span style="background: rgba(16, 185, 129, 0.15); color: #059669; border: 1px solid #10b981; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; display: inline-flex; align-items: center; gap: 0.35rem;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; animation: pulse-ring 2s infinite;"></span>
              SQL RELATIONAL DB ACTIVE
            </span>
            <span style="font-size: 0.82rem; color: var(--foreground-muted); font-family: monospace; background: var(--surface-subtle); padding: 0.2rem 0.5rem; border-radius: 6px; border: 1px solid var(--border);">SQLite • prayas.db</span>
            <span id="header-api-badge" style="font-size: 0.82rem; color: #0284c7; font-family: monospace; background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(2, 132, 199, 0.3); padding: 0.2rem 0.5rem; border-radius: 6px;">API: ${getApiBase()}</span>
          </div>
          <h1 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 800; font-family: var(--font-display); margin: 0; color: var(--foreground);">
            Executive SQL Database & Operations Dashboard
          </h1>
          <p style="color: var(--foreground-muted); margin: 0.35rem 0 0 0; font-size: 1rem;">
            Real-time management for 80G Tax-Deductible Contributions, Direct Bank Payments, and Volunteer Rosters.
          </p>
        </div>

        <!-- Real Executive Action Buttons -->
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <button id="btn-manual-donor" class="btn btn-sm btn-primary hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700;">
            <span>💳 + Log Donation (Offline/Wire)</span>
          </button>
          <button id="btn-manual-volunteer" class="btn btn-sm hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700; border: 1.5px solid var(--primary); color: var(--primary); background: var(--surface-card);">
            <span>🤝 + Register Volunteer / Staff</span>
          </button>
          <button id="btn-refresh-dashboard" class="btn btn-sm btn-secondary hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700;">
            <span>🔄 Refresh DB</span>
          </button>
          <a href="./index.html" class="btn btn-sm btn-secondary hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700; text-decoration: none;">
            <span>🏠 Back to Website</span>
          </a>
        </div>
      </div>

      <!-- KPI Executive Metrics Cards (3 Clean Cards) -->
      <div class="kpi-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
        
        <div class="kpi-card hover-lift" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">💰 Total Funds Raised</span>
          <span style="font-size: 2.1rem; font-weight: 800; color: #059669; font-family: var(--font-display);">${metrics.total_donations_formatted}</span>
          <span style="font-size: 0.82rem; color: var(--foreground-muted);">Registered in SQL across ${metrics.donor_count} active donor contributions</span>
        </div>

        <div class="kpi-card hover-lift" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">🛡️ 80G Tax-Exempt Funds</span>
          <span style="font-size: 2.1rem; font-weight: 800; color: var(--primary); font-family: var(--font-display);">${metrics.donations_80g_total_formatted || '₹0.00'}</span>
          <span style="font-size: 0.82rem; color: var(--foreground-muted);">${metrics.donations_80g_count || 0} official PAN certificates issued</span>
        </div>

        <div class="kpi-card hover-lift" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">⚡ Normal Direct Donations</span>
          <span style="font-size: 2.1rem; font-weight: 800; color: #d97706; font-family: var(--font-display);">${metrics.normal_donations_total_formatted || '₹0.00'}</span>
          <span style="font-size: 0.82rem; color: var(--foreground-muted);">${metrics.normal_donations_count || 0} direct contributions</span>
        </div>

      </div>

      <!-- Database Navigation Tabs -->
      <div style="display: flex; gap: 0.65rem; margin-bottom: 1.5rem; flex-wrap: wrap; align-items: center;">
        <button class="tab-btn ${activeTab === 'donations' ? 'active' : ''}" data-tab="donations">
          💳 All Donations (${metrics.donor_count})
        </button>
        <button class="tab-btn ${activeTab === 'donations_80g' ? 'active' : ''}" data-tab="donations_80g">
          🛡️ 80G Tax Receipts (${metrics.donations_80g_count || 0})
        </button>
        <button class="tab-btn ${activeTab === 'donations_normal' ? 'active' : ''}" data-tab="donations_normal">
          ⚡ Normal (${metrics.normal_donations_count || 0})
        </button>
        <button class="tab-btn ${activeTab === 'volunteers' ? 'active' : ''}" data-tab="volunteers">
          🤝 Volunteers (${metrics.volunteer_count})
        </button>
        <button class="tab-btn ${activeTab === 'contact' ? 'active' : ''}" data-tab="contact">
          📬 Inquiries (${metrics.total_inquiries})
        </button>
        <button class="tab-btn ${activeTab === 'email_settings' ? 'active' : ''}" data-tab="email_settings" style="background: rgba(16, 185, 129, 0.1); border-color: #10b981; color: #047857;">
          ⚙️ Email & Receipts
        </button>
      </div>

      <!-- Data Table Card Container -->
      <div class="sql-table-wrapper glass-card" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; overflow-x: auto; box-shadow: var(--shadow-md);">
        <div id="table-content-mount">
          <div style="text-align: center; padding: 2.5rem; color: var(--foreground-muted);">
            <div class="animate-spin" style="display: inline-block; width: 28px; height: 28px; border: 3px solid var(--primary); border-top-color: transparent; border-radius: 50%;"></div>
            <p style="margin-top: 1rem; font-weight: 600;">Fetching live SQL records...</p>
          </div>
        </div>
      </div>

    </main>

    <!-- Modal 1: Manual Real Donation Entry -->
    <div id="modal-log-donation" style="display: none; position: fixed; inset: 0; z-index: 999999; background: rgba(0,0,0,0.65); backdrop-filter: blur(6px); align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; max-width: 520px; width: 100%; padding: 2rem; box-shadow: 0 25px 60px rgba(0,0,0,0.4); max-height: 90vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3 style="margin: 0; font-weight: 800; font-family: var(--font-display);">💳 Log Offline / Wire Donation</h3>
          <button type="button" id="close-modal-donation-btn" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--foreground);">&times;</button>
        </div>
        <form id="form-log-donation" style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Donor Full Name *</label>
            <input type="text" id="manual-donor-name" required placeholder="e.g. Ramesh Kulkarni" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Email Address *</label>
              <input type="email" id="manual-donor-email" required placeholder="name@domain.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Phone Number *</label>
              <input type="tel" id="manual-donor-phone" required placeholder="+91-9820000000" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Amount (₹ INR) *</label>
              <input type="number" id="manual-donor-amount" required min="10" placeholder="5000" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Payment Mode</label>
              <select id="manual-donor-mode" class="form-select" style="width: 100%; box-sizing: border-box;">
                <option value="Direct Bank Transfer (NEFT/IMPS)">Direct Bank Transfer (NEFT/IMPS)</option>
                <option value="Cheque / DD">Cheque / Demand Draft</option>
                <option value="UPI / QR Code">UPI / QR Code</option>
                <option value="Cash / Receipt">Cash with Receipt</option>
              </select>
            </div>
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">PAN Number (Optional, for 80G Tax Exemption)</label>
            <input type="text" id="manual-donor-pan" maxlength="10" placeholder="ABCDE1234F" class="form-input" style="width: 100%; text-transform: uppercase; font-weight: 700; box-sizing: border-box;" />
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">UTR / Cheque / Transaction No.</label>
            <input type="text" id="manual-donor-txn" placeholder="e.g. UTR423891028341 or CHQ-092831" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Cause / Purpose</label>
            <input type="text" id="manual-donor-cause" value="MPS Malvani Educational Kits & Digital Labs" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <button type="submit" id="btn-submit-manual-donation" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%; padding: 0.75rem;">
            💾 Save Donation to SQLite Database
          </button>
        </form>
      </div>
    </div>

    <!-- Modal 2: Manual Real Volunteer Entry -->
    <div id="modal-log-volunteer" style="display: none; position: fixed; inset: 0; z-index: 999999; background: rgba(0,0,0,0.65); backdrop-filter: blur(6px); align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; max-width: 520px; width: 100%; padding: 2rem; box-shadow: 0 25px 60px rgba(0,0,0,0.4); max-height: 90vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3 style="margin: 0; font-weight: 800; font-family: var(--font-display);">🤝 Register Volunteer / Staff</h3>
          <button type="button" id="close-modal-vol-btn" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--foreground);">&times;</button>
        </div>
        <form id="form-log-volunteer" style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Full Name *</label>
            <input type="text" id="manual-vol-name" required placeholder="e.g. Dr. Shraddha Kadam" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Email Address *</label>
              <input type="email" id="manual-vol-email" required placeholder="name@domain.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Phone Number *</label>
              <input type="tel" id="manual-vol-phone" required placeholder="+91-9820000000" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Domain / Contribution Area *</label>
            <input type="text" id="manual-vol-skills" required placeholder="e.g. Teaching Math, Sports Coaching, Health Camps" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Availability</label>
              <select id="manual-vol-avail" class="form-select" style="width: 100%; box-sizing: border-box;">
                <option value="Weekends Only (Saturday & Sunday)">Weekends Only (Saturday & Sunday)</option>
                <option value="Weekdays (Monday to Friday)">Weekdays (Monday to Friday)</option>
                <option value="Full-Time (Daily On-Site / Regular)">Full-Time (Daily On-Site / Regular)</option>
                <option value="Part-Time (4 to 8 hours / week)">Part-Time (4 to 8 hours / week)</option>
                <option value="Flexible / Remote Mentorship">Flexible / Remote Mentorship</option>
                <option value="Events & Special Drives Only">Events & Special Drives Only</option>
              </select>
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">City / Location</label>
              <input type="text" id="manual-vol-city" value="Mumbai" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
          </div>
          <button type="submit" id="btn-submit-manual-vol" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%; padding: 0.75rem;">
            💾 Register Volunteer in SQLite Database
          </button>
        </form>
      </div>
    </div>

    ${createFooter(siteContent, currentLang)}
    ${createNavigationDrawer(siteContent, currentLang, 'admin')}
    ${createLegalModals(currentLang)}
    ${createDonateModal(currentLang)}
    ${createChatbot(currentLang)}
  `;

  setupDonateModalComponent(currentLang);
  setupChatbotComponent(currentLang);
  await loadActiveTable(activeTab);
  attachAdminListeners();
}

async function loadActiveTable(tab) {
  const mount = document.getElementById('table-content-mount');
  if (!mount) return;

  if (tab === 'email_settings') {
    mount.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 960px; margin: 0 auto;">
        
        <!-- 0. Backend REST API Connectivity & Cloud Server Control -->
        <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.35rem;">🌐</span>
              <h3 style="margin: 0; font-weight: 800; font-size: 1.15rem; font-family: var(--font-display);">FastAPI Backend Server & Cloud Endpoint</h3>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span id="api-live-indicator" style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block;"></span>
              <span id="api-live-text" style="font-size: 0.82rem; font-weight: 700; color: var(--foreground-muted);">Checking...</span>
            </div>
          </div>
          <p style="font-size: 0.88rem; color: var(--foreground-muted); margin: 0 0 1rem 0; line-height: 1.5;">
            Configure the live API URL connecting the website to your FastAPI / SQLite backend (e.g. Render, Railway, or Localhost).
          </p>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <input type="url" id="custom-api-input" value="${getCustomApiBase() || getApiBase()}" placeholder="https://your-backend.onrender.com/api" class="form-input" style="flex: 1; min-width: 280px; padding: 0.65rem 1rem; border-radius: 10px; border: 1.5px solid var(--border);" />
            <button type="button" id="btn-save-api-url" class="btn btn-primary" style="padding: 0.65rem 1.25rem; font-weight: 700;">
              💾 Save & Reconnect
            </button>
            <button type="button" id="btn-test-api-ping" class="btn btn-secondary" style="padding: 0.65rem 1.1rem; font-weight: 700;">
              ⚡ Test Ping
            </button>
            <button type="button" id="btn-reset-api-url" class="btn btn-secondary" style="padding: 0.65rem 0.9rem; font-weight: 700;" title="Reset to Auto-Detection">
              🔄 Reset
            </button>
          </div>
          <div id="api-feedback-msg" style="display: none; margin-top: 0.85rem; padding: 0.65rem 1rem; border-radius: 8px; font-size: 0.84rem; font-weight: 600;"></div>
        </div>

        <!-- 1. Live SMTP Connection Status Header -->
        <div id="smtp-live-status-container" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div id="smtp-status-indicator" style="width: 15px; height: 15px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 12px #f59e0b;"></div>
            <div>
              <div id="smtp-status-heading" style="font-weight: 800; font-size: 1.1rem; color: var(--foreground);">Checking Live SMTP Status...</div>
              <div id="smtp-status-subtext" style="font-size: 0.84rem; color: var(--foreground-muted);">Querying FastAPI high-deliverability email engine</div>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" id="btn-refresh-smtp" class="btn btn-secondary" style="padding: 0.45rem 0.9rem; font-size: 0.82rem; font-weight: 700;">
              🔄 Refresh Status
            </button>
            <button type="button" id="btn-run-deep-diag" class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.82rem; font-weight: 700; background: #059669; border-color: #059669;">
              ⚡ Run Socket & TLS Test
            </button>
          </div>
        </div>

        <!-- Real-Time Diagnostic Terminal Console (Appears on test) -->
        <div id="smtp-diag-console" style="display: none; background: #0f172a; color: #38bdf8; border: 1.5px solid #1e293b; border-radius: 14px; padding: 1.25rem; font-family: monospace; font-size: 0.85rem; line-height: 1.6; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; margin-bottom: 0.75rem; color: #94a3b8; font-size: 0.78rem; font-weight: bold; text-transform: uppercase;">
            <span>🔬 Live SMTP Socket & Handshake Diagnostics</span>
            <span id="diag-status-badge" style="color: #4ade80;">Running...</span>
          </div>
          <div id="diag-console-output" style="white-space: pre-wrap; color: #e2e8f0;"></div>
        </div>

        <!-- 2. Instant Test 80G Receipt Sender (Live Verification) -->
        <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-size: 1.35rem;">🚀</span>
            <h3 style="margin: 0; font-weight: 800; font-size: 1.15rem; font-family: var(--font-display);">Send Live Test 80G Tax Receipt to Your Inbox</h3>
          </div>
          <p style="font-size: 0.88rem; color: var(--foreground-muted); margin: 0 0 1.25rem 0; line-height: 1.5;">
            Type your personal email address below and click <strong>"Send Test 80G Receipt"</strong>. The engine will dispatch an authentic Section 80G certificate with full RFC 5322 compliance directly to your real inbox.
          </p>

          <form id="form-send-test-receipt" style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <input type="email" id="test-receipt-target-email" required placeholder="Enter your email (e.g. name@gmail.com)" class="form-input" style="flex: 1; min-width: 260px; padding: 0.65rem 1rem; border-radius: 10px; border: 1.5px solid var(--border);" />
            <button type="submit" id="btn-submit-test-receipt" class="btn btn-primary" style="padding: 0.65rem 1.4rem; font-weight: 700; white-space: nowrap;">
              ✉️ Send Test 80G Receipt
            </button>
          </form>

          <div id="test-receipt-result-box" style="margin-top: 1rem; display: none; padding: 0.85rem 1.1rem; border-radius: 10px; font-size: 0.88rem; font-weight: 600; line-height: 1.5;">
          </div>
        </div>

        <!-- 3. SMTP Server Configuration Editor & 1-Click Presets -->
        <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.25rem;">⚙️</span>
                <h3 style="margin: 0; font-weight: 800; font-size: 1.15rem; font-family: var(--font-display);">SMTP Credentials Configuration</h3>
              </div>
              <p style="font-size: 0.86rem; color: var(--foreground-muted); margin: 0.35rem 0 0 0;">
                Configure your outgoing email server. Choose a 1-click preset below or enter custom SMTP credentials.
              </p>
            </div>
          </div>

          <!-- 1-Click Provider Quick-Fill Presets -->
          <div style="margin-bottom: 1.25rem; background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 12px; padding: 0.85rem 1rem;">
            <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted); display: block; margin-bottom: 0.5rem;">
              ⚡ 1-Click Provider Quick-Presets:
            </span>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.gmail.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟢 Gmail</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp-relay.brevo.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🔵 Brevo (Sendinblue)</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.sendgrid.net" data-port="587" data-user="apikey" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟣 SendGrid</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.office365.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟠 Outlook / 365</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.zoho.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🔴 Zoho Mail</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.mailgun.org" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟡 Mailgun</button>
            </div>
          </div>

          <form id="form-save-smtp-config" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">SMTP Host *</label>
              <input type="text" id="cfg-smtp-host" required value="smtp.gmail.com" placeholder="e.g. smtp.gmail.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">SMTP Port *</label>
              <input type="number" id="cfg-smtp-port" required value="587" placeholder="587 or 465" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">SMTP User / Email *</label>
              <input type="text" id="cfg-smtp-user" required placeholder="your-email@gmail.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">App Password / SMTP Password *</label>
              <input type="password" id="cfg-smtp-pass" required placeholder="16-character Google App Password" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div style="grid-column: 1 / -1;">
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">Sender Display Name</label>
              <input type="text" id="cfg-smtp-from-name" value="Prayas Foundation Trust" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div style="grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem;">
              <button type="button" id="btn-quick-test-form" class="btn btn-secondary" style="padding: 0.65rem 1.25rem; font-weight: 700;">
                ⚡ Test These Credentials
              </button>
              <button type="submit" id="btn-save-smtp-config" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-weight: 700;">
                💾 Save & Apply SMTP Configuration
              </button>
            </div>
          </form>

          <div id="smtp-config-feedback" style="margin-top: 1rem; display: none; padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.85rem; font-weight: 600;">
          </div>
        </div>

        <!-- 4. Quick Gmail 16-Char App Password Guide -->
        <div style="background: rgba(59, 130, 246, 0.06); border: 1.5px solid rgba(59, 130, 246, 0.2); border-radius: 16px; padding: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem 0; color: #2563eb; font-weight: 800; font-size: 1rem;">💡 How to get a free Gmail App Password (1 minute):</h4>
          <ol style="font-size: 0.88rem; color: var(--foreground); line-height: 1.6; margin: 0; padding-left: 1.25rem;">
            <li>Go to <a href="https://myaccount.google.com/security" target="_blank" style="color: #2563eb; font-weight: 700; text-decoration: underline;">Google Account Security</a> and make sure <strong>2-Step Verification</strong> is ON.</li>
            <li>Open <a href="https://myaccount.google.com/apppasswords" target="_blank" style="color: #2563eb; font-weight: 700; text-decoration: underline;">Google App Passwords</a>.</li>
            <li>Enter app name <code>Prayas Web</code> and click <strong>Create</strong>.</li>
            <li>Copy the 16-character code (e.g. <code>abcd efgh ijkl mnop</code>) and paste it into the <strong>App Password</strong> field above without spaces.</li>
          </ol>
        </div>

        <!-- 5. Email Dispatch History Logs -->
        <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.25rem;">📋</span>
              <h3 style="margin: 0; font-weight: 800; font-size: 1.15rem; font-family: var(--font-display);">Recent Email Dispatch Telemetry</h3>
            </div>
            <button type="button" id="btn-refresh-email-logs" class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem; font-weight: 700;">
              🔄 Refresh Logs
            </button>
          </div>
          <div id="email-logs-table-container" style="overflow-x: auto;">
            <div style="text-align: center; padding: 1.5rem; color: var(--foreground-muted); font-size: 0.85rem;">
              Loading dispatched email records...
            </div>
          </div>
        </div>

      </div>
    `;

    // Load Live SMTP Status
    async function refreshSmtpStatus() {
      const heading = document.getElementById('smtp-status-heading');
      const subtext = document.getElementById('smtp-status-subtext');
      const ind = document.getElementById('smtp-status-indicator');
      const userField = document.getElementById('cfg-smtp-user');
      const hostField = document.getElementById('cfg-smtp-host');
      const portField = document.getElementById('cfg-smtp-port');
      const fromField = document.getElementById('cfg-smtp-from-name');

      try {
        const res = await fetchWithRetry('/admin/smtp-status', { method: 'GET' }, 2, 800);
        if (res.ok) {
          const json = await res.json();
          const d = json.data || {};
          if (d.is_configured) {
            if (ind) { ind.style.background = '#10b981'; ind.style.boxShadow = '0 0 12px #10b981'; }
            if (heading) heading.textContent = `🟢 Live SMTP Active (${d.smtp_user})`;
            if (subtext) subtext.textContent = `Connected to ${d.smtp_host}:${d.smtp_port} • Ready to deliver 80G tax receipts directly to donor inboxes`;
          } else {
            if (ind) { ind.style.background = '#f59e0b'; ind.style.boxShadow = '0 0 12px #f59e0b'; }
            if (heading) heading.textContent = `🟡 SMTP Unconfigured (Client Fallback Active)`;
            if (subtext) subtext.textContent = `Add your Gmail App Password below to enable automated server email delivery.`;
          }
          if (userField && d.raw_user && !userField.value) userField.value = d.raw_user;
          if (hostField && d.smtp_host) hostField.value = d.smtp_host;
          if (portField && d.smtp_port) portField.value = d.smtp_port;
          if (fromField && d.from_name) fromField.value = d.from_name;
        }
      } catch (err) {
        if (heading) heading.textContent = `🟡 Python API Server Offline (Client Mode)`;
        if (subtext) subtext.textContent = `Frontend 1-click Email & PDF dispatch is operational.`;
      }
    }

    // Load Dispatched Email Logs
    async function loadEmailLogs() {
      const container = document.getElementById('email-logs-table-container');
      if (!container) return;

      try {
        const res = await fetchWithRetry('/admin/email-logs', { method: 'GET' }, 2, 800);
        if (res.ok) {
          const json = await res.json();
          const logs = json.logs || [];
          if (logs.length === 0) {
            container.innerHTML = `
              <div style="text-align: center; padding: 2rem; color: var(--foreground-muted); font-size: 0.88rem;">
                No dispatched emails logged yet. Send a test email above or complete a donation to see delivery logs.
              </div>
            `;
            return;
          }

          container.innerHTML = `
            <table class="sql-table" style="font-size: 0.85rem;">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Recipient</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Provider / Host</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                ${logs.map(l => {
                  const isSuccess = l.status === 'DELIVERED';
                  const isFailed = l.status === 'FAILED';
                  const badgeClass = isSuccess ? 'badge-success' : isFailed ? 'badge' : 'badge-info';
                  const badgeStyle = isFailed ? 'background: rgba(239, 68, 68, 0.15); color: #dc2626; border: 1px solid #ef4444;' : '';
                  return `
                    <tr>
                      <td><span class="code-pill">#${l.id}</span></td>
                      <td style="font-weight: 700; color: var(--foreground);">${l.recipient}</td>
                      <td style="max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l.subject}</td>
                      <td><span class="code-pill">${l.email_type}</span></td>
                      <td><span class="badge ${badgeClass}" style="${badgeStyle}">${l.status}</span></td>
                      <td style="font-size: 0.8rem; color: var(--foreground-muted);">${l.provider || 'SMTP'}</td>
                      <td style="font-size: 0.8rem; color: var(--foreground-muted);">${l.created_at || ''}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          `;
        }
      } catch (e) {
        container.innerHTML = `
          <div style="text-align: center; padding: 1.5rem; color: var(--foreground-muted); font-size: 0.85rem;">
            Could not fetch email logs. Check that Python API server is running on port 8000.
          </div>
        `;
      }
    }

    // Run Deep Diagnostics Test
    async function runDiagnostics(customCredentials = null) {
      const consoleBox = document.getElementById('smtp-diag-console');
      const consoleOut = document.getElementById('diag-console-output');
      const badge = document.getElementById('diag-status-badge');

      if (!consoleBox || !consoleOut) return;

      consoleBox.style.display = 'block';
      badge.textContent = 'Running Diagnostics...';
      badge.style.color = '#38bdf8';
      consoleOut.textContent = 'Initiating socket handshake diagnostics...\n';

      const payload = customCredentials || {
        host: document.getElementById('cfg-smtp-host')?.value?.trim(),
        port: Number(document.getElementById('cfg-smtp-port')?.value?.trim()),
        user: document.getElementById('cfg-smtp-user')?.value?.trim(),
        password: document.getElementById('cfg-smtp-pass')?.value?.trim()
      };

      try {
        const res = await fetchWithRetry('/admin/smtp-test-connection', {
          method: 'POST',
          body: JSON.stringify(payload)
        }, 1, 1000);

        const json = await res.json();
        const d = json.data || {};

        let out = '';
        if (d.steps && d.steps.length > 0) {
          out += d.steps.join('\n') + '\n\n';
        }

        if (json.status === 'success' && d.success) {
          badge.textContent = '✓ SMTP Diagnostic Passed';
          badge.style.color = '#10b981';
          out += `✅ SUCCESS: Socket established, TLS handshake complete, and SMTP authentication succeeded.\nServer is fully prepared to deliver 80G tax exemption receipts directly to donor inboxes.`;
        } else {
          badge.textContent = '⚠️ SMTP Issue Detected';
          badge.style.color = '#f87171';
          out += `❌ DIAGNOSTIC FAILED:\n${d.error || 'Unknown connection error'}\n\nTroubleshooting Tip:\n• For Gmail, ensure 2-Step Verification is ON.\n• Use a 16-character App Password, NOT your regular account password.`;
        }
        consoleOut.textContent = out;
      } catch (err) {
        badge.textContent = '⚠️ Connection Error';
        badge.style.color = '#f87171';
        consoleOut.textContent = `Could not connect to FastAPI server: ${err.message}\nMake sure 'python rag/api.py' is running.`;
      }
    }

    // Initialize SMTP info on load
    refreshSmtpStatus();
    loadEmailLogs();

    // Preset Provider Buttons
    document.querySelectorAll('.btn-preset-provider').forEach(btn => {
      btn.addEventListener('click', () => {
        const host = btn.dataset.host;
        const port = btn.dataset.port;
        const user = btn.dataset.user;
        if (host && document.getElementById('cfg-smtp-host')) document.getElementById('cfg-smtp-host').value = host;
        if (port && document.getElementById('cfg-smtp-port')) document.getElementById('cfg-smtp-port').value = port;
        if (user && document.getElementById('cfg-smtp-user')) document.getElementById('cfg-smtp-user').value = user;
      });
    });

    // API Server Config Controls
    const saveApiBtn = document.getElementById('btn-save-api-url');
    const testApiBtn = document.getElementById('btn-test-api-ping');
    const resetApiBtn = document.getElementById('btn-reset-api-url');
    const apiInput = document.getElementById('custom-api-input');
    const apiFeedback = document.getElementById('api-feedback-msg');
    const apiIndicator = document.getElementById('api-live-indicator');
    const apiLiveText = document.getElementById('api-live-text');

    async function checkApiHealth() {
      if (apiLiveText) apiLiveText.textContent = 'Pinging...';
      const ok = await pingHealthCheck();
      if (apiIndicator) apiIndicator.style.background = ok ? '#10b981' : '#f59e0b';
      if (apiLiveText) {
        apiLiveText.textContent = ok ? '🟢 Online & Connected' : '🟡 Offline / LocalStorage Mode';
        apiLiveText.style.color = ok ? '#059669' : '#d97706';
      }
    }
    checkApiHealth();

    if (saveApiBtn) {
      saveApiBtn.addEventListener('click', async () => {
        const val = apiInput?.value?.trim();
        setCustomApiBase(val);
        if (apiFeedback) {
          apiFeedback.style.display = 'block';
          apiFeedback.style.background = 'rgba(16, 185, 129, 0.15)';
          apiFeedback.style.color = '#047857';
          apiFeedback.textContent = `Saved API Base: ${getApiBase()}. Testing connection...`;
        }
        await checkApiHealth();
      });
    }

    if (testApiBtn) {
      testApiBtn.addEventListener('click', async () => {
        testApiBtn.disabled = true;
        testApiBtn.textContent = '⏳ Pinging...';
        const ok = await pingHealthCheck();
        testApiBtn.disabled = false;
        testApiBtn.textContent = '⚡ Test Ping';
        if (apiFeedback) {
          apiFeedback.style.display = 'block';
          apiFeedback.style.background = ok ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.12)';
          apiFeedback.style.color = ok ? '#047857' : '#dc2626';
          apiFeedback.textContent = ok 
            ? `✅ Server reached successfully at ${getApiBase()}! Health: OK (200)`
            : `⚠️ Server unreachable at ${getApiBase()}. The website will automatically use instant client-side fallback.`;
        }
        await checkApiHealth();
      });
    }

    if (resetApiBtn) {
      resetApiBtn.addEventListener('click', async () => {
        setCustomApiBase('');
        if (apiInput) apiInput.value = getApiBase();
        if (apiFeedback) {
          apiFeedback.style.display = 'block';
          apiFeedback.style.background = 'rgba(59, 130, 246, 0.1)';
          apiFeedback.style.color = '#2563eb';
          apiFeedback.textContent = `Reset to default: ${getApiBase()}`;
        }
        await checkApiHealth();
      });
    }

    const refreshSmtpBtn = document.getElementById('btn-refresh-smtp');
    if (refreshSmtpBtn) refreshSmtpBtn.addEventListener('click', () => {
      refreshSmtpStatus();
      loadEmailLogs();
    });

    const deepDiagBtn = document.getElementById('btn-run-deep-diag');
    if (deepDiagBtn) deepDiagBtn.addEventListener('click', () => runDiagnostics());

    const quickTestBtn = document.getElementById('btn-quick-test-form');
    if (quickTestBtn) quickTestBtn.addEventListener('click', () => runDiagnostics());

    const refreshLogsBtn = document.getElementById('btn-refresh-email-logs');
    if (refreshLogsBtn) refreshLogsBtn.addEventListener('click', loadEmailLogs);

    // Handle Test Receipt Submission
    const testForm = document.getElementById('form-send-test-receipt');
    if (testForm) {
      testForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('test-receipt-target-email').value.trim();
        const submitBtn = document.getElementById('btn-submit-test-receipt');
        const resBox = document.getElementById('test-receipt-result-box');

        if (!email) return;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Dispatching Test Email...';
        resBox.style.display = 'none';

        try {
          const res = await fetchWithRetry('/admin/send-test-receipt', {
            method: 'POST',
            body: JSON.stringify({ recipient_email: email })
          }, 1, 1000);

          const json = await res.json();
          const d = json.data || {};

          resBox.style.display = 'block';
          if (json.status === 'success' && d.sent_live_smtp) {
            resBox.style.background = 'rgba(16, 185, 129, 0.15)';
            resBox.style.borderColor = '#10b981';
            resBox.style.color = '#047857';
            resBox.innerHTML = `✅ <strong>Success!</strong> Live test 80G tax receipt was dispatched to <u>${email}</u>. Please check your inbox (and spam/promotions folder).`;
            loadEmailLogs();
          } else {
            resBox.style.background = 'rgba(239, 68, 68, 0.12)';
            resBox.style.borderColor = '#fca5a5';
            resBox.style.color = '#dc2626';
            resBox.innerHTML = `⚠️ <strong>Delivery Note:</strong> ${d.smtp_error || 'SMTP not configured or authentication failed. Make sure to use a 16-char Gmail App Password.'}`;
          }
        } catch (err) {
          resBox.style.display = 'block';
          resBox.style.background = 'rgba(239, 68, 68, 0.12)';
          resBox.style.borderColor = '#fca5a5';
          resBox.style.color = '#dc2626';
          resBox.innerHTML = `⚠️ <strong>Server Note:</strong> ${err.message}. Check that the backend server is running on port 8000.`;
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '✉️ Send Test 80G Receipt';
        }
      });
    }

    // Handle SMTP Config Save
    const configForm = document.getElementById('form-save-smtp-config');
    if (configForm) {
      configForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const host = document.getElementById('cfg-smtp-host').value.trim();
        const port = Number(document.getElementById('cfg-smtp-port').value.trim());
        const user = document.getElementById('cfg-smtp-user').value.trim();
        const password = document.getElementById('cfg-smtp-pass').value.trim();
        const fromName = document.getElementById('cfg-smtp-from-name').value.trim();
        const saveBtn = document.getElementById('btn-save-smtp-config');
        const feedback = document.getElementById('smtp-config-feedback');

        saveBtn.disabled = true;
        saveBtn.innerHTML = '⏳ Saving Credentials...';

        try {
          const res = await fetchWithRetry('/admin/smtp-config', {
            method: 'POST',
            body: JSON.stringify({ host, port, user, password, from_name: fromName })
          }, 1, 1000);

          if (res.ok) {
            feedback.style.display = 'block';
            feedback.style.background = 'rgba(16, 185, 129, 0.15)';
            feedback.style.color = '#047857';
            feedback.innerHTML = '✓ SMTP configuration saved and reloaded successfully! Testing connection...';
            await refreshSmtpStatus();
            await runDiagnostics({ host, port, user, password });
          } else {
            feedback.style.display = 'block';
            feedback.style.background = 'rgba(239, 68, 68, 0.12)';
            feedback.style.color = '#dc2626';
            feedback.innerHTML = 'Failed to save configuration.';
          }
        } catch (err) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(239, 68, 68, 0.12)';
          feedback.style.color = '#dc2626';
          feedback.innerHTML = `Error saving configuration: ${err.message}`;
        } finally {
          saveBtn.disabled = false;
          saveBtn.innerHTML = '💾 Save & Apply SMTP Configuration';
        }
      });
    }

    return;
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  const records = await fetchTableData(tab);

  if (!records || records.length === 0) {
    mount.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--foreground-muted);">
        <p style="font-size: 1.1rem; font-weight: 700; margin: 0 0 0.5rem 0;">No records found in this view.</p>
        <p style="font-size: 0.85rem; margin: 0;">Submit a transaction on the website or use the buttons above to add entries.</p>
      </div>
    `;
    return;
  }

  if (tab.startsWith('donations')) {
    mount.innerHTML = `
      <table class="sql-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date & Time</th>
            <th>Donor Name</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Tax Type</th>
            <th>Payment Mode</th>
            <th>80G Receipt No</th>
            <th>PAN</th>
            <th>Status</th>
            <th style="text-align: right;">Receipt Actions</th>
          </tr>
        </thead>
        <tbody>
          ${records.map(d => {
            const formattedDate = d.created_at ? new Date(d.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : 'Recorded recently';
            const safeName = escapeHtml(d.donor_name);
            const safeEmail = escapeHtml(d.donor_email);
            const safePhone = escapeHtml(d.donor_phone);
            const safeReceipt = escapeHtml(d.tax_80g_receipt_no);
            const safePan = escapeHtml(d.donor_pan);
            const safeMode = escapeHtml(d.payment_mode);

            return `
              <tr>
                <td><span class="code-pill">#${d.id}</span></td>
                <td style="font-size: 0.82rem; color: var(--foreground-muted); white-space: nowrap;">📅 ${formattedDate}</td>
                <td style="font-weight: 700; color: var(--foreground);">${safeName}</td>
                <td style="font-size: 0.85rem; color: var(--foreground-muted);">${safeEmail}<br/>${safePhone || ''}</td>
                <td style="font-weight: 800; color: #059669; font-size: 1.05rem;">
                  ₹${Number(d.amount).toLocaleString('en-IN')}.00
                </td>
                <td>
                  ${d.tax_80g_receipt_no 
                    ? '<span class="badge badge-success" style="font-weight: 700;">🛡️ 80G Tax Exempt</span>' 
                    : '<span class="badge badge-info" style="background: rgba(217, 119, 6, 0.15); color: #d97706; border: 1px solid #f59e0b;">⚡ Normal Direct</span>'}
                </td>
                <td><span class="code-pill">${safeMode || 'UPI'}</span></td>
                <td><span class="code-pill" style="color: #059669; font-weight: 700;">${safeReceipt || '<span style="color: var(--foreground-muted);">None</span>'}</span></td>
                <td><span class="code-pill">${safePan || '<span style="color: var(--foreground-muted);">N/A</span>'}</span></td>
                <td><span class="badge badge-success">COMPLETED</span></td>
                <td style="text-align: right;">
                  <div style="display: flex; gap: 0.4rem; justify-content: flex-end; align-items: center;">
                    <button type="button" class="btn-resend-receipt-action" data-id="${d.id}" data-email="${safeEmail}" title="Open 80G receipt dispatch hub for ${safeEmail}" style="background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid #10b981; padding: 0.35rem 0.65rem; border-radius: 8px; font-weight: 700; font-size: 0.78rem; cursor: pointer; transition: all 0.2s ease;">
                      ✉️ Receipt Hub
                    </button>
                    <button type="button" class="btn-direct-print-pdf" data-id="${d.id}" title="Download Official PDF" style="background: var(--surface-subtle); color: var(--foreground); border: 1px solid var(--border); padding: 0.35rem 0.55rem; border-radius: 8px; font-weight: 700; font-size: 0.78rem; cursor: pointer;">
                      🖨️ PDF
                    </button>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Attach Receipt Dispatch Click Handlers (Opens Multi-Channel Modal)
    mount.querySelectorAll('.btn-resend-receipt-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.id);
        const donation = records.find(r => r.id === id) || {
          id: id,
          donor_name: "Donor",
          donor_email: btn.dataset.email,
          amount: 5000,
          transaction_id: `TXN-${id}`,
          tax_80g_receipt_no: `80G-PF-2026-X${id}`
        };
        openAdminReceiptDispatchModal(donation);
      });
    });

    // Attach Direct PDF Download Handlers
    mount.querySelectorAll('.btn-direct-print-pdf').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.id);
        const donation = records.find(r => r.id === id);
        if (donation) {
          downloadOfficial80GPdf(donation);
        }
      });
    });

  } else if (tab === 'volunteers') {
    mount.innerHTML = `
      <table class="sql-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date Registered</th>
            <th>Full Name</th>
            <th>Contact</th>
            <th>Skills / Domain</th>
            <th>Availability</th>
            <th>Location</th>
            <th>Status</th>
            <th style="text-align: right;">Operational Action</th>
          </tr>
        </thead>
        <tbody>
          ${records.map(v => {
            const status = v.status || 'NEW';
            const statusColor = status === 'ACTIVE' ? 'badge-success' : status === 'ONBOARDED' ? 'badge-primary' : 'badge-info';
            const formattedDate = v.created_at ? new Date(v.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : 'Recently registered';
            const safeName = escapeHtml(v.full_name);
            const safeEmail = escapeHtml(v.email);
            const safePhone = escapeHtml(v.phone);
            const safeSkills = escapeHtml(v.skills);
            const safeAvail = escapeHtml(v.availability);
            const safeCity = escapeHtml(v.city);

            return `
              <tr>
                <td><span class="code-pill">#${v.id}</span></td>
                <td style="font-size: 0.82rem; color: var(--foreground-muted); white-space: nowrap;">📅 ${formattedDate}</td>
                <td style="font-weight: 700;">${safeName}</td>
                <td style="font-size: 0.85rem; color: var(--foreground-muted);">${safeEmail}<br/>${safePhone}</td>
                <td style="font-weight: 600;">${safeSkills || 'Teaching'}</td>
                <td><span class="code-pill">${safeAvail || 'Weekends'}</span></td>
                <td>${safeCity || 'Mumbai'}</td>
                <td><span class="badge ${statusColor}">${status}</span></td>
                <td style="text-align: right;">
                  <select class="form-select select-vol-status" data-id="${v.id}" style="font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 6px;">
                    <option value="NEW" ${status === 'NEW' ? 'selected' : ''}>NEW</option>
                    <option value="CONTACTED" ${status === 'CONTACTED' ? 'selected' : ''}>CONTACTED</option>
                    <option value="ONBOARDED" ${status === 'ONBOARDED' ? 'selected' : ''}>ONBOARDED</option>
                    <option value="ACTIVE" ${status === 'ACTIVE' ? 'selected' : ''}>ACTIVE</option>
                  </select>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Attach Volunteer Status Change Handlers
    mount.querySelectorAll('.select-vol-status').forEach(select => {
      select.addEventListener('change', async (e) => {
        const id = select.dataset.id;
        const newStatus = select.value;
        try {
          await fetchWithRetry(`/volunteers/${id}/status?status=${encodeURIComponent(newStatus)}`, { method: 'PATCH' }, 1, 800);
        } catch (err) {}

        const list = getStoredVolunteers();
        const item = list.find(x => x.id === Number(id));
        if (item) {
          item.status = newStatus;
          saveStoredVolunteers(list);
        }
        await renderAdmin();
      });
    });

  } else if (tab === 'contact') {
    mount.innerHTML = `
      <table class="sql-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date Submitted</th>
            <th>Visitor Name</th>
            <th>Contact</th>
            <th>Subject</th>
            <th>Message & Availability</th>
            <th>Status</th>
            <th style="text-align: right;">Resolution Action</th>
          </tr>
        </thead>
        <tbody>
          ${records.map(c => {
            const formattedDate = c.created_at ? new Date(c.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : 'Recently submitted';
            const safeName = escapeHtml(c.name);
            const safeEmail = escapeHtml(c.email);
            const safePhone = escapeHtml(c.phone);
            const safeSubject = escapeHtml(c.subject);
            const safeMessage = escapeHtml(c.message);

            return `
              <tr>
                <td><span class="code-pill">#${c.id}</span></td>
                <td style="font-size: 0.82rem; color: var(--foreground-muted); white-space: nowrap;">📅 ${formattedDate}</td>
                <td style="font-weight: 700;">${safeName}</td>
                <td style="font-size: 0.85rem; color: var(--foreground-muted);">${safeEmail}<br/>${safePhone || ''}</td>
                <td style="font-weight: 600;">${safeSubject || 'General Inquiry'}</td>
                <td style="max-width: 320px; font-size: 0.88rem; line-height: 1.4; white-space: pre-wrap;">${safeMessage}</td>
                <td>
                  <span class="badge ${c.is_resolved ? 'badge-success' : 'badge-warning'}">
                    ${c.is_resolved ? 'RESOLVED' : 'PENDING'}
                  </span>
                </td>
                <td style="text-align: right;">
                  <button class="btn-resolve-action" data-id="${c.id}" data-resolved="${c.is_resolved ? 0 : 1}" style="background: ${c.is_resolved ? 'var(--surface-subtle)' : 'rgba(16, 185, 129, 0.15)'}; color: ${c.is_resolved ? 'var(--foreground-muted)' : '#059669'}; border: 1px solid ${c.is_resolved ? 'var(--border)' : '#10b981'}; padding: 0.35rem 0.75rem; border-radius: 8px; font-weight: 700; font-size: 0.78rem; cursor: pointer;">
                    ${c.is_resolved ? '↩️ Re-open' : '✓ Mark Resolved'}
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Attach Inquiry Resolve Toggle Handlers
    mount.querySelectorAll('.btn-resolve-action').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id;
        const nextResolved = Number(btn.dataset.resolved);
        try {
          await fetchWithRetry(`/contact/${id}/resolve?is_resolved=${nextResolved}`, { method: 'PATCH' }, 1, 800);
        } catch (err) {}

        const list = getStoredInquiries();
        const item = list.find(x => x.id === Number(id));
        if (item) {
          item.is_resolved = nextResolved;
          saveStoredInquiries(list);
        }
        await renderAdmin();
      });
    });
  }
}

function attachAdminListeners() {
  // 1. Language Modal & Options
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openLanguageModal();
    });
  }

  document.querySelectorAll('.lang-select-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenLang = btn.dataset.lang || 'en';
      window.setPrayasLanguage(chosenLang);
    });
  });

  // 2. Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('prayas_theme', currentTheme);
      updateThemeIcons();
    });
  }

  // 3. Mobile Drawer Controls
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openPrayasMenu();
    });
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.closePrayasMenu();
    });
  }
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      window.closePrayasMenu();
    });
  }

  // 4. Donate Modal
  const navDonateBtn = document.getElementById('nav-donate-btn');
  const mobileDonateBtn = document.getElementById('drawer-donate-btn');
  const donateModal = document.getElementById('donate-modal');
  const closeDonateModalBtn = document.getElementById('close-donate-modal-btn');

  function toggleDonateModal(open) {
    if (donateModal) {
      if (open) {
        if (donateModal.parentElement !== document.body) {
          document.body.appendChild(donateModal);
        }
        donateModal.style.setProperty('display', 'flex', 'important');
        donateModal.style.setProperty('opacity', '1', 'important');
        donateModal.style.setProperty('visibility', 'visible', 'important');
        donateModal.style.setProperty('pointer-events', 'auto', 'important');
        donateModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        donateModal.style.setProperty('display', 'none', 'important');
        donateModal.style.setProperty('opacity', '0', 'important');
        donateModal.style.setProperty('visibility', 'hidden', 'important');
        donateModal.style.setProperty('pointer-events', 'none', 'important');
        donateModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  }

  if (navDonateBtn) navDonateBtn.addEventListener('click', () => toggleDonateModal(true));
  if (mobileDonateBtn) mobileDonateBtn.addEventListener('click', () => {
    window.closePrayasMenu();
    toggleDonateModal(true);
  });
  if (closeDonateModalBtn) closeDonateModalBtn.addEventListener('click', () => toggleDonateModal(false));
  if (donateModal) {
    donateModal.addEventListener('click', (e) => {
      if (e.target === donateModal) toggleDonateModal(false);
    });
  }

  // 5. Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      loadActiveTable(activeTab);
    });
  });

  // 6. Refresh Button
  const refreshBtn = document.getElementById('btn-refresh-dashboard');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      refreshBtn.textContent = '🔄 Loading...';
      await renderAdmin();
    });
  }

  // 7. Manual Real Donation Entry Modal
  const btnManualDonor = document.getElementById('btn-manual-donor');
  const modalLogDonation = document.getElementById('modal-log-donation');
  const closeModalDonationBtn = document.getElementById('close-modal-donation-btn');
  const formLogDonation = document.getElementById('form-log-donation');

  if (btnManualDonor && modalLogDonation) {
    btnManualDonor.addEventListener('click', () => {
      if (modalLogDonation.parentElement !== document.body) document.body.appendChild(modalLogDonation);
      modalLogDonation.style.display = 'flex';
    });
  }
  if (closeModalDonationBtn && modalLogDonation) {
    closeModalDonationBtn.addEventListener('click', () => {
      modalLogDonation.style.display = 'none';
    });
  }
  if (formLogDonation) {
    formLogDonation.addEventListener('submit', async (e) => {
      e.preventDefault();
      const donorName = document.getElementById('manual-donor-name').value.trim();
      const donorEmail = document.getElementById('manual-donor-email').value.trim();
      const donorPhone = document.getElementById('manual-donor-phone').value.trim();
      const amount = Number(document.getElementById('manual-donor-amount').value.trim());
      const paymentMode = document.getElementById('manual-donor-mode').value;
      const pan = document.getElementById('manual-donor-pan').value.trim().toUpperCase();
      const customTxn = document.getElementById('manual-donor-txn').value.trim();
      const cause = document.getElementById('manual-donor-cause').value.trim();
      const is80g = Boolean(pan && pan.length >= 10);

      const rnd = Math.floor(1000 + Math.random() * 9000);
      const newRec = await recordDonation({
        donor_name: donorName,
        donor_email: donorEmail,
        donor_phone: donorPhone,
        donor_pan: pan,
        amount: amount,
        payment_mode: paymentMode,
        transaction_id: customTxn || undefined,
        cause: cause || 'General School Welfare',
        is_80g: is80g
      });

      modalLogDonation.style.display = 'none';
      formLogDonation.reset();
      activeTab = 'donations';
      await renderAdmin();
    });
  }

  // 8. Manual Real Volunteer Entry Modal
  const btnManualVol = document.getElementById('btn-manual-volunteer');
  const modalLogVol = document.getElementById('modal-log-volunteer');
  const closeModalVolBtn = document.getElementById('close-modal-vol-btn');
  const formLogVol = document.getElementById('form-log-volunteer');

  if (btnManualVol && modalLogVol) {
    btnManualVol.addEventListener('click', () => {
      if (modalLogVol.parentElement !== document.body) document.body.appendChild(modalLogVol);
      modalLogVol.style.display = 'flex';
    });
  }
  if (closeModalVolBtn && modalLogVol) {
    closeModalVolBtn.addEventListener('click', () => {
      modalLogVol.style.display = 'none';
    });
  }
  if (formLogVol) {
    formLogVol.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fullName = document.getElementById('manual-vol-name').value.trim();
      const email = document.getElementById('manual-vol-email').value.trim();
      const phone = document.getElementById('manual-vol-phone').value.trim();
      const skills = document.getElementById('manual-vol-skills').value.trim();
      const availability = document.getElementById('manual-vol-avail').value;
      const city = document.getElementById('manual-vol-city').value.trim();

      await recordVolunteer({
        full_name: fullName,
        email: email,
        phone: phone,
        skills: skills,
        availability: availability,
        city: city || 'Mumbai'
      });

      modalLogVol.style.display = 'none';
      formLogVol.reset();
      activeTab = 'volunteers';
      await renderAdmin();
    });
  }

  updateThemeIcons();
}

function intTimestamp() {
  return Math.floor(Date.now() / 1000);
}

function updateThemeIcons() {
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  if (sunIcon && moonIcon) {
    if (currentTheme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

function openAdminReceiptDispatchModal(donation) {
  let modal = document.getElementById('modal-admin-receipt-hub');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-admin-receipt-hub';
    modal.style.cssText = 'position: fixed; inset: 0; z-index: 9999999; background: rgba(0,0,0,0.7); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 1rem;';
    document.body.appendChild(modal);
  }

  const is80g = Boolean(donation.is_80g || (donation.tax_80g_receipt_no && String(donation.tax_80g_receipt_no).startsWith('80G')));
  const rawNo = donation.tax_80g_receipt_no || (is80g ? `80G-PF-2026-X${donation.id}` : `RCP-PF-2026-N${donation.id}`);
  const receiptNo = (!is80g && rawNo.startsWith('80G-PF-')) ? rawNo.replace('80G-PF-', 'RCP-PF-') : rawNo;
  const amountFmt = Number(donation.amount || 0).toLocaleString('en-IN');
  const donorEmail = donation.donor_email || '';

  modal.innerHTML = `
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 16px; max-width: 580px; width: 92%; padding: 1.75rem; box-shadow: var(--shadow-xl); position: relative; max-height: 90vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
        <div>
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${is80g ? '#059669' : '#0284c7'};">
            ${is80g ? '🛡️ Section 80G Tax Exemption Receipt' : '⚡ Official Direct Donation Receipt'}
          </span>
          <h3 style="margin: 0.25rem 0 0 0; font-size: 1.35rem; font-weight: 800;">
            Receipt #${receiptNo}
          </h3>
        </div>
        <button type="button" id="close-admin-receipt-modal" style="background: none; border: none; font-size: 1.75rem; cursor: pointer; color: var(--foreground); line-height: 1;">&times;</button>
      </div>

      <div style="background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Donor Name:</span>
          <strong>${donation.donor_name || 'Donor'}</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Email Address:</span>
          <strong>${donorEmail}</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Amount Contributed:</span>
          <strong style="color: #059669; font-size: 1rem;">₹${amountFmt}.00</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Transaction Ref:</span>
          <code>${donation.transaction_id || 'UPI-REF'}</code>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Category:</span>
          <strong>${is80g ? '80G Tax Exempt (50% Deduction)' : 'General Support (Normal Direct)'}</strong>
        </div>
      </div>

      <div id="admin-dispatch-live-feedback" style="display: none; padding: 0.75rem 1rem; border-radius: 10px; margin-bottom: 1.25rem; font-size: 0.85rem; font-weight: 600;"></div>

      <h4 style="margin: 0 0 0.75rem 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">Choose Dispatch Method:</h4>

      <div style="display: flex; flex-direction: column; gap: 0.65rem;">
        <!-- Option 1: Live SMTP Dispatch -->
        <button type="button" id="btn-admin-smtp-dispatch" class="btn btn-primary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center;">
          <span>🚀 Send Live SMTP Email to Donor</span>
          <span style="font-size: 0.78rem; opacity: 0.9; font-weight: 500;">Server to Inbox</span>
        </button>

        <!-- Option 2: 1-Click Multi-Webmail Dispatch -->
        <div style="background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 12px; padding: 0.75rem 1rem;">
          <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted); display: block; margin-bottom: 0.5rem;">
            📧 1-Click Webmail Bridges:
          </span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <a href="${getReceiptEmailLinks(donation, donorEmail).gmail}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              🟢 Open Gmail Web
            </a>
            <a href="${getReceiptEmailLinks(donation, donorEmail).outlook}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              🟠 Open Outlook Web
            </a>
            <a href="${getReceiptEmailLinks(donation, donorEmail).yahoo}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              🟣 Open Yahoo Mail
            </a>
            <a href="${getReceiptEmailLinks(donation, donorEmail).mailto}" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              📩 Default Mail App
            </a>
          </div>
        </div>

        <!-- Option 3: Print / Download PDF -->
        <button type="button" id="btn-admin-print-cert" class="btn btn-secondary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; border-color: var(--primary); color: var(--primary);">
          <span>🖨️ Print / Download Official ${is80g ? '80G' : 'Donation'} PDF</span>
          <span style="font-size: 0.78rem; font-weight: 500;">High-Res Certificate</span>
        </button>

        <!-- Option 4: Share / Copy Receipt Link -->
        <button type="button" id="btn-admin-share-link" class="btn btn-secondary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; border-color: #6366f1; color: #4f46e5; background: rgba(99, 102, 241, 0.08);">
          <span>🔗 Copy / Share Direct PDF Link</span>
          <span style="font-size: 0.78rem; font-weight: 500;">Direct Link</span>
        </button>

        <!-- Option 5: WhatsApp -->
        <button type="button" id="btn-admin-wa-dispatch" class="btn btn-secondary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; background: rgba(37, 211, 102, 0.1); border-color: #25d366; color: #15803d;">
          <span>💬 Send via WhatsApp</span>
          <span style="font-size: 0.78rem; font-weight: 500;">Direct Message</span>
        </button>
      </div>

      <div style="margin-top: 1.25rem; text-align: right;">
        <button type="button" id="btn-admin-close-modal" class="btn btn-secondary" style="padding: 0.45rem 1.25rem; font-size: 0.85rem; border-radius: 999px;">
          Close
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';

  const closeBtn = document.getElementById('close-admin-receipt-modal');
  const closeBtn2 = document.getElementById('btn-admin-close-modal');
  const liveFeedback = document.getElementById('admin-dispatch-live-feedback');

  const closeModal = () => { modal.style.display = 'none'; };
  if (closeBtn) closeBtn.onclick = closeModal;
  if (closeBtn2) closeBtn2.onclick = closeModal;

  // Bind Option 1: Live SMTP Dispatch
  const btnSmtp = document.getElementById('btn-admin-smtp-dispatch');
  if (btnSmtp) {
    btnSmtp.onclick = async () => {
      btnSmtp.disabled = true;
      btnSmtp.innerHTML = '<span>⏳ Dispatching Live Email via SMTP...</span>';
      liveFeedback.style.display = 'none';

      try {
        const res = await fetchWithRetry(`/donations/${donation.id}/email-receipt?recipient_email=${encodeURIComponent(donorEmail)}`, {
          method: 'POST'
        }, 1, 1000);
        const json = await res.json();
        const d = json.data || {};

        liveFeedback.style.display = 'block';
        if (json.status === 'success' && d.sent_live_smtp) {
          liveFeedback.style.background = 'rgba(16, 185, 129, 0.15)';
          liveFeedback.style.color = '#047857';
          liveFeedback.style.border = '1px solid #10b981';
          liveFeedback.innerHTML = `✅ <strong>Dispatched!</strong> Official receipt was delivered to <u>${donorEmail}</u> over live SMTP.`;
          btnSmtp.innerHTML = '<span>✓ Dispatched to Inbox</span>';
        } else {
          liveFeedback.style.background = 'rgba(239, 68, 68, 0.12)';
          liveFeedback.style.color = '#dc2626';
          liveFeedback.style.border = '1px solid #fca5a5';
          liveFeedback.innerHTML = `⚠️ <strong>SMTP Note:</strong> ${d.smtp_error || 'SMTP credentials missing in .env. Use the 1-click webmail buttons below, or configure SMTP in Settings.'}`;
          btnSmtp.innerHTML = '<span>⚠️ SMTP Offline - Use Webmail Below</span>';
        }
      } catch (err) {
        liveFeedback.style.display = 'block';
        liveFeedback.style.background = 'rgba(239, 68, 68, 0.12)';
        liveFeedback.style.color = '#dc2626';
        liveFeedback.style.border = '1px solid #fca5a5';
        liveFeedback.innerHTML = `⚠️ <strong>API Note:</strong> ${err.message}. Use the 1-click webmail buttons below to send via Gmail/Outlook directly.`;
        btnSmtp.innerHTML = '<span>⚠️ Error - Use Webmail Below</span>';
      } finally {
        setTimeout(() => {
          btnSmtp.disabled = false;
        }, 3000);
      }
    };
  }

  // Bind Option 3: Print / PDF
  const btnPrint = document.getElementById('btn-admin-print-cert');
  if (btnPrint) {
    btnPrint.onclick = () => {
      downloadOfficial80GPdf(donation);
    };
  }

  // Bind Option 4: Share Link
  const btnAdminShare = document.getElementById('btn-admin-share-link');
  if (btnAdminShare) {
    const pdfUrl = getDonationPdfUrl(donation.id);
    btnAdminShare.onclick = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `Prayas Foundation Receipt #${receiptNo}`,
            text: `Official donation receipt for ${donation.donor_name || 'Donor'} - Prayas Foundation`,
            url: pdfUrl
          });
          return;
        } catch (e) {}
      }
      try {
        await navigator.clipboard.writeText(pdfUrl);
        btnAdminShare.innerHTML = '<span>✓ Link Copied to Clipboard!</span>';
        btnAdminShare.style.background = '#10b981';
        btnAdminShare.style.color = '#ffffff';
        btnAdminShare.style.borderColor = '#10b981';
        setTimeout(() => {
          btnAdminShare.innerHTML = '<span>🔗 Copy / Share Direct PDF Link</span><span style="font-size: 0.78rem; font-weight: 500;">Direct Link</span>';
          btnAdminShare.style.background = 'rgba(99, 102, 241, 0.08)';
          btnAdminShare.style.color = '#4f46e5';
          btnAdminShare.style.borderColor = '#6366f1';
        }, 2500);
      } catch (err) {
        prompt('Direct PDF URL (Ctrl+C, Enter):', pdfUrl);
      }
    };
  }

  // Bind Option 5: WhatsApp
  const btnWa = document.getElementById('btn-admin-wa-dispatch');
  if (btnWa) {
    btnWa.onclick = () => {
      openWhatsAppReceipt(donation, donation.donor_phone);
    };
  }
}

// Auto-run when mounted
if (document.getElementById('app')) {
  renderAdmin();
}

