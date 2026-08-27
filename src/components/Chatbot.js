import { searchKnowledgeBase, quickQuestions } from '../data/botKnowledge.js';
import { streamChat } from '../utils/apiClient.js';

export function createChatbot(content, currentLang) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const questions = isMr ? quickQuestions.mr : isHi ? quickQuestions.hi : quickQuestions.en;

  return `
    <!-- Floating Action Stack (Strictly Screen Viewport Bottom Rightmost) -->
    <div id="floating-action-stack" class="floating-action-stack" aria-label="Quick Actions">
      
      <!-- WhatsApp Floating Trigger (PCs / Desktops only, placed vertically above chatbot) -->
      <a 
        href="https://wa.me/919820500726?text=Hi%20Prayas%20Foundation%2C%20I%20would%20like%20to%20connect%20with%20your%20team." 
        target="_blank" 
        rel="noopener" 
        id="floating-whatsapp-btn" 
        class="floating-btn whatsapp-desktop-btn" 
        aria-label="WhatsApp Prayas Foundation" 
        title="${isMr ? 'WhatsApp वर संपर्क करा (+91-9820500726)' : isHi ? 'व्हाट्सएप पर संपर्क करें (+91-9820500726)' : 'Connect on WhatsApp (+91-9820500726)'}"
      >
        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.77 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.14.12-3.69-.93-2.18-.9-3.58-3.13-3.69-3.27-.11-.15-.88-1.17-.88-2.23s.55-1.58.75-1.8c.2-.21.43-.27.58-.27.15 0 .3.003.43.01.14.007.32-.05.5.38.19.45.64 1.57.7 1.69.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.5.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-1.02.76-1.37.16-.35.32-.29.54-.21.22.08 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.58-.18 1.25z"/>
        </svg>
      </a>

      <!-- AI Chatbot Floating Trigger -->
      <button 
        id="chatbot-toggle-btn" 
        class="floating-btn chatbot-toggle-btn" 
        aria-label="Open Prayas AI Assistant" 
        title="Prayas AI Assistant"
      >
        <div class="chatbot-pulse"></div>
        <svg id="bot-icon-open" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 8V4H8"></path>
          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
          <path d="M2 14h2"></path>
          <path d="M20 14h2"></path>
          <path d="M15 13v2"></path>
          <path d="M9 13v2"></path>
        </svg>
        <svg id="bot-icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="hidden">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Chatbot Window -->
    <div id="chatbot-window" class="chatbot-window" role="dialog" aria-modal="true" aria-label="Prayas AI Chatbot">
      
      <!-- Chat Header -->
      <div style="background: linear-gradient(135deg, var(--primary) 0%, hsl(154, 75%, 22%) 100%); color: #ffffff; padding: 0.9rem 1.15rem; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
          </div>
          <div>
            <h4 style="font-weight: 700; font-size: 0.95rem; line-height: 1.1; margin: 0;">Prayas AI Assistant</h4>
            <span style="font-size: 0.72rem; color: #a7f3d0; display: flex; align-items: center; gap: 0.3rem;">
              <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; display: inline-block;"></span>
              ${isMr ? 'ऑनलाइन • डोमेन सहाय्यक' : isHi ? 'ऑनलाइन • डोमेन सहायक' : 'Online • Domain Assistant'}
            </span>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <!-- Quick Human Support Link in Header -->
          <a 
            href="https://wa.me/919820500726?text=Hi%2C%20I%20need%20assistance%20from%20a%20real%20person" 
            target="_blank" 
            rel="noopener" 
            title="${isMr ? 'थेट व्यक्तीशी बोला' : isHi ? 'सीधे व्यक्ति से बात करें' : 'Talk to a real person'}" 
            style="color: #ffffff; background: rgba(255,255,255,0.2); border-radius: 20px; padding: 0.25rem 0.6rem; font-size: 0.7rem; text-decoration: none; display: flex; align-items: center; gap: 0.3rem;"
          >
            <span>💬 ${isMr ? 'थेट मदत' : isHi ? 'सीधी मदद' : 'Human Help'}</span>
          </a>

          <button id="chatbot-close-btn" style="color: #ffffff; padding: 0.25rem; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center;" aria-label="Close Chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      <!-- Messages Stream -->
      <div id="chat-messages-container" class="chat-messages">
        
        <!-- Welcome Greeting -->
        <div class="chat-bubble-bot">
          <p style="margin-bottom: 0.5rem;">
            ${isMr
              ? 'नमस्कार! 🙏 मी <strong>प्रयास एआय सहाय्यक</strong> आहे. आपण मला मुंबई पब्लिक स्कूल, उपक्रम, प्रवेश, स्वयंसेवा, किंवा ८०G देणगीबद्दल विचारू शकता.'
              : isHi 
              ? 'नमस्ते! 🙏 मैं <strong>प्रयास एआई सहायक</strong> हूँ। आप मुझसे मुंबई पब्लिक स्कूल, हमारे कार्यक्रमों, प्रवेश, स्वयंसेवा या दान के बारे में कुछ भी पूछ सकते हैं।' 
              : 'Hello! 🙏 I am the <strong>Prayas AI Assistant</strong>. Ask me anything about Mumbai Public School, our programs, admissions, volunteering, or 80G donations.'}
          </p>
          <span style="font-size: 0.7rem; color: var(--foreground-subtle); display: block; text-align: right;">Just now</span>
        </div>

        <!-- Suggestion Chips Row -->
        <div id="chat-suggestions-wrap" style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.25rem;">
          <span style="font-size: 0.72rem; font-weight: 700; color: var(--foreground-muted); text-transform: uppercase;">
            ${isMr ? 'सुचवलेले प्रश्न:' : isHi ? 'सुझाए गए प्रश्न:' : 'Suggested Inquiries:'}
          </span>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
            ${questions.map(q => `
              <button class="chat-suggestion-chip" data-query="${q}">
                ${q}
              </button>
            `).join('')}
            
            <!-- Direct Human Escalation Chip -->
            <button class="chat-suggestion-chip human-chip" data-query="${isMr ? 'मला थेट व्यक्तीशी बोलायचे आहे' : isHi ? 'मुझे सीधे व्यक्ति से बात करनी है' : 'I want to talk to a real person'}">
              💬 ${isMr ? 'थेट व्यक्तीशी बोला (WhatsApp/Phone)' : isHi ? 'सीधे व्यक्ति से बात करें (WhatsApp/Phone)' : 'Talk to a real person'}
            </button>
          </div>
        </div>

      </div>

      <!-- Chat Input Toolbar -->
      <div style="padding: 0.75rem 1rem; border-top: 1px solid var(--border); background: var(--surface-card); display: flex; align-items: center; gap: 0.5rem;">
        <input 
          type="text" 
          id="chat-input-field" 
          class="form-input" 
          placeholder="${isMr ? 'आपला प्रश्न येथे विचारा...' : isHi ? 'अपना प्रश्न यहाँ लिखें...' : 'Ask about Prayas Foundation...'}" 
          style="padding: 0.6rem 0.85rem; font-size: 0.875rem; border-radius: var(--radius-full);"
        />
        <button id="chat-send-btn" class="btn btn-primary btn-sm" style="width: 40px; height: 40px; border-radius: 50%; padding: 0; flex-shrink: 0;" aria-label="Send Message">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>

    </div>
  `;
}

export function setupChatbotComponent(currentLang = 'en') {
  const stack = document.getElementById('floating-action-stack');
  const chatWindow = document.getElementById('chatbot-window');

  // Ensure elements are attached directly to document.body so position: fixed is always anchored to the viewport
  if (stack && stack.parentElement !== document.body) {
    document.body.appendChild(stack);
  }
  if (chatWindow && chatWindow.parentElement !== document.body) {
    document.body.appendChild(chatWindow);
  }

  const toggleBtn = document.getElementById('chatbot-toggle-btn');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const inputField = document.getElementById('chat-input-field');
  const sendBtn = document.getElementById('chat-send-btn');
  const messagesContainer = document.getElementById('chat-messages-container');
  const openIcon = document.getElementById('bot-icon-open');
  const closeIcon = document.getElementById('bot-icon-close');

  let isChatbotOpen = false;

  // Inactivity auto-fade timer (15 seconds)
  let inactivityTimer = null;
  const INACTIVITY_MS = 15000;

  function resetInactivity() {
    if (stack) stack.classList.remove('is-inactive');
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      if (chatWindow && !chatWindow.classList.contains('open') && stack) {
        stack.classList.add('is-inactive');
      }
    }, INACTIVITY_MS);
  }

  ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'wheel'].forEach(evt => {
    window.addEventListener(evt, resetInactivity, { passive: true });
  });
  resetInactivity();

  function toggleBot(open) {
    isChatbotOpen = open !== undefined ? open : !isChatbotOpen;
    if (chatWindow) {
      if (isChatbotOpen) {
        chatWindow.classList.add('open');
        if (openIcon) openIcon.style.display = 'none';
        if (closeIcon) closeIcon.style.display = 'block';
        if (inputField) setTimeout(() => inputField.focus(), 150);
        if (stack) stack.classList.remove('is-inactive');
      } else {
        chatWindow.classList.remove('open');
        if (openIcon) openIcon.style.display = 'block';
        if (closeIcon) closeIcon.style.display = 'none';
        resetInactivity();
      }
    }
  }

  if (toggleBtn) toggleBtn.addEventListener('click', () => toggleBot());
  if (closeBtn) closeBtn.addEventListener('click', () => toggleBot(false));

  function getHumanEscalationCard() {
    const isMr = currentLang === 'mr';
    const isHi = currentLang === 'hi';
    return `
      <div class="human-escalation-card">
        <div class="escalation-header">
          <strong>${isMr ? '💬 अधिक मदतीसाठी थेट आमच्या समन्वयकांशी बोला:' : isHi ? '💬 अधिक सहायता के लिए सीधे हमारी टीम से बात करें:' : '💬 Need direct help from our team?'}</strong>
          <span>${isMr ? 'खालील बटणावर क्लिक करून WhatsApp किंवा फोनवर थेट संपर्क साधा:' : isHi ? 'नीचे क्लिक करके व्हाट्सएप या फोन पर सीधे संपर्क करें:' : 'Click below to talk to a real person on WhatsApp or Phone Call:'}</span>
        </div>
        <div class="escalation-btn-group">
          <a href="https://wa.me/919820500726?text=Hi%20Prayas%20Foundation%2C%20I%20need%20human%20assistance." target="_blank" rel="noopener" class="escalate-action-btn wa-action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.77 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.14.12-3.69-.93-2.18-.9-3.58-3.13-3.69-3.27-.11-.15-.88-1.17-.88-2.23s.55-1.58.75-1.8c.2-.21.43-.27.58-.27.15 0 .3.003.43.01.14.007.32-.05.5.38.19.45.64 1.57.7 1.69.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.5.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-1.02.76-1.37.16-.35.32-.29.54-.21.22.08 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.58-.18 1.25z"/></svg>
            ${isMr ? 'WhatsApp वर थेट बोला' : isHi ? 'व्हाट्सएप पर बात करें' : 'Click to talk on WhatsApp (+91-9820500726)'}
          </a>
          <a href="tel:+919820500726" class="escalate-action-btn phone-action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            ${isMr ? 'थेट फोन कॉल करा (+91-9820500726)' : isHi ? 'सीधे फोन कॉल करें (+91-9820500726)' : 'Click to make a Phone Call'}
          </a>
        </div>
      </div>
    `;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function appendMessage(text, isUser = false) {
    if (!messagesContainer) return;
    const bubble = document.createElement('div');
    bubble.className = isUser ? 'chat-bubble-user' : 'chat-bubble-bot';
    const safeText = escapeHtml(text).replace(/\n/g, '<br/>');
    bubble.innerHTML = `
      <p style="margin: 0;">${safeText}</p>
      <span style="font-size: 0.68rem; opacity: 0.75; display: block; text-align: ${isUser ? 'right' : 'left'}; margin-top: 0.35rem;">
        ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    `;
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  async function handleUserQuery(query) {
    if (!query || !query.trim()) return;
    const cleanQuery = query.trim();
    appendMessage(cleanQuery, true);
    if (inputField) inputField.value = '';

    const isHumanRequest = /(person|human|real|whatsapp|call|talk to|agent|support|व्यक्ति|मदत|बात करनी)/i.test(cleanQuery);

    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble-bot';
    botBubble.innerHTML = `
      <div class="typing-loader">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
      <div class="bot-stream-content" style="display: none;"></div>
      <span style="font-size: 0.68rem; opacity: 0.75; display: block; text-align: left; margin-top: 0.35rem;">
        ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    `;
    messagesContainer.appendChild(botBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    const loader = botBubble.querySelector('.typing-loader');
    const contentEl = botBubble.querySelector('.bot-stream-content');

    if (isHumanRequest) {
      setTimeout(() => {
        loader.style.display = 'none';
        contentEl.style.display = 'block';
        contentEl.innerHTML = `
          <p>${currentLang === 'mr' ? 'नक्कीच! आपण आमच्या समन्वयकांशी थेट संपर्क साधू शकता:' : currentLang === 'hi' ? 'बिल्कुल! आप सीधे हमारी टीम से व्हाट्सएप या फोन पर संपर्क कर सकते हैं:' : 'Of course! You can connect with our coordinators directly below:'}</p>
          ${getHumanEscalationCard()}
        `;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 350);
      return;
    }

    let accumulated = '';
    let sourcesInfo = '';
    let isFirstToken = true;

    await streamChat(cleanQuery, currentLang, {
      onMeta: (event) => {
        if (event.sources && event.sources.length > 0) {
          sourcesInfo = `<br/><span style="font-size: 0.75rem; color: var(--primary); display: inline-block; margin-top: 0.35rem;">📌 <em>Source: ${event.sources[0].title || event.sources[0].source}</em></span>`;
        }
      },
      onToken: (token) => {
        if (isFirstToken) {
          loader.style.display = 'none';
          contentEl.style.display = 'block';
          isFirstToken = false;
        }
        accumulated += token;
        contentEl.innerHTML = accumulated
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\n/g, '<br/>') + sourcesInfo;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      },
      onDone: () => {
        loader.style.display = 'none';
        contentEl.style.display = 'block';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    });
  }

  if (sendBtn && inputField) {
    sendBtn.addEventListener('click', () => handleUserQuery(inputField.value));
    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserQuery(inputField.value);
      }
    });
  }

  document.querySelectorAll('.chat-suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      handleUserQuery(chip.dataset.query);
    });
  });
}
