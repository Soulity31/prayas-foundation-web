import { siteContent } from '../data/content.js';
import { createNavbar, createNavigationDrawer } from '../components/Navbar.js';
import { createContactSection } from '../components/ContactSection.js';
import { createChatbot, setupChatbotComponent } from '../components/Chatbot.js';
import { createDonateModal, setupDonateModalComponent } from '../components/DonateModal.js';
import { createLegalModals } from '../components/LegalModals.js';
import { createFooter } from '../components/Footer.js';
import { searchKnowledgeBase } from '../data/botKnowledge.js';
import { initPerformanceOptimizer, triggerPageLoadProgress } from '../utils/performance.js';
import { recordVolunteer, recordContact } from '../utils/apiClient.js';

let currentLang = localStorage.getItem('prayas_lang');
if (!currentLang) {
  currentLang = 'mr';
  localStorage.setItem('prayas_lang', 'mr');
}

function getNextLanguage(lang) {
  if (lang === 'mr') return 'hi';
  if (lang === 'hi') return 'en';
  return 'mr';
}
let currentTheme = localStorage.getItem('prayas_theme') || 'light';
let isChatbotOpen = false;

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
  currentLang = lang || 'mr';
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


function renderPage() {
  const app = document.getElementById('app');
  if (!app) return;

  const c = siteContent[currentLang].contact;
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'contact')}
    
    <main style="flex: 1;">
      
      <!-- Contact Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="/index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${isMr ? 'मुख्य पृष्ठ' : isHi ? 'मुख्य पृष्ठ' : 'Home'}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${isMr ? 'संपर्क आणि सहकार्य' : isHi ? 'संपर्क एवं सहयोग' : 'Contact & Connect'}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${c.tagline}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1.25rem; line-height: 1.2;">
            ${c.heading}
          </h1>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${c.desc}
          </p>
        </div>
      </section>

      <!-- Interactive Contact & FAQ Section -->
      ${createContactSection(siteContent, currentLang, false)}

    </main>

    ${createFooter(siteContent, currentLang)}
    ${createDonateModal(siteContent, currentLang)}
    ${createLegalModals(siteContent, currentLang)}
    ${createChatbot(siteContent, currentLang)}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${createNavigationDrawer(siteContent, currentLang, 'contact')}
  `;

  attachPageListeners();
}

function attachPageListeners() {
  try {
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openLanguageModal();
      });
    }

    document.querySelectorAll('.lang-select-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosenLang = btn.dataset.lang || 'mr';
        window.setPrayasLanguage(chosenLang);
      });
    });

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('prayas_theme', currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcons();
      });
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const drawerOverlay = document.getElementById('drawer-overlay');

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => window.togglePrayasMenu(true));
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', () => window.togglePrayasMenu(false));
    if (drawerOverlay) drawerOverlay.addEventListener('click', () => window.togglePrayasMenu(false));
  } catch (err) {
    console.warn('Contact page listener setup warning:', err);
  }

  // Form Submission
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback-message');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();
      const consent = document.getElementById('contact-consent').checked;

      if (!name || !phone || !email || !message) {
        showFeedback(currentLang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill in all required fields.', 'error');
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        showFeedback(currentLang === 'hi' ? 'कृपया 10 अंकों का वैध भारतीय फ़ोन नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number.', 'error');
        return;
      }

      if (!consent) {
        showFeedback(currentLang === 'hi' ? 'कृपया सहमति चेकबॉक्स पर टिक करें।' : 'Please agree to the consent checkbox.', 'error');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
          ${siteContent[currentLang].contact.form.sendingBtn}
        `;
      }

      const interestVal = document.getElementById('contact-interest') ? document.getElementById('contact-interest').value : 'general';
      const availabilityVal = document.getElementById('contact-availability') ? document.getElementById('contact-availability').value : 'Flexible / Weekends';
      const isVolunteer = interestVal === 'volunteer' || interestVal === 'job' || /volunteer|join|member|mentor|career|job|काम|स्वयंसेवक|जुड़|सहभाग/i.test(message);

      const newInquiry = {
        id: Date.now() % 100000,
        name: name,
        email: email,
        phone: phone,
        subject: isVolunteer ? `Request to Join (${availabilityVal})` : `Interest: ${interestVal}`,
        message: `${message}\n\n[Availability: ${availabilityVal}]`,
        is_resolved: 0,
        created_at: new Date().toISOString()
      };

      // 1. Persist inquiry to local SQL storage
      try {
        const rawInq = localStorage.getItem('prayas_sql_inquiries');
        const inqList = rawInq ? JSON.parse(rawInq) : [];
        inqList.unshift(newInquiry);
        localStorage.setItem('prayas_sql_inquiries', JSON.stringify(inqList));
      } catch (e) {}

      // 2. If it's a join/volunteer request, also record into Volunteers roster
      if (isVolunteer) {
        await recordVolunteer({
          full_name: name,
          email: email,
          phone: phone,
          skills: interestVal === 'volunteer' ? 'Volunteering & Mentorship' : interestVal === 'job' ? 'NGO Work & Operations' : message.slice(0, 60),
          availability: availabilityVal,
          city: 'Mumbai'
        });
      }

      // 3. Sync contact message to backend SQLite & local storage
      await recordContact({
        name: name,
        email: email,
        phone: phone,
        subject: newInquiry.subject,
        message: newInquiry.message
      });

      showFeedback(siteContent[currentLang].contact.form.successMsg, 'success');
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          ${siteContent[currentLang].contact.form.submitBtn}
        `;
      }
    });
  }

  function showFeedback(text, type) {
    if (!formFeedback) return;
    formFeedback.style.display = 'block';
    if (type === 'success') {
      formFeedback.style.background = 'rgba(16, 185, 129, 0.15)';
      formFeedback.style.color = '#059669';
      formFeedback.style.border = '1px solid #86efac';
    } else {
      formFeedback.style.background = 'rgba(239, 68, 68, 0.15)';
      formFeedback.style.color = '#dc2626';
      formFeedback.style.border = '1px solid #fca5a5';
    }
    formFeedback.textContent = text;
  }

  // Donation Modal
  const navDonateBtn = document.getElementById('nav-donate-btn');
  const mobileDonateBtn = document.getElementById('mobile-donate-btn');
  const donateModal = document.getElementById('donate-modal');
  const closeDonateModalBtn = document.getElementById('close-donate-modal-btn');

  function toggleDonateModal(open) {
    let dm = document.getElementById('donate-modal');
    if (dm) {
      if (dm.parentElement !== document.body) {
        document.body.appendChild(dm);
      }
      if (open) {
        dm.classList.add('open');
        dm.style.setProperty('display', 'flex', 'important');
        document.body.style.overflow = 'hidden';
      } else {
        dm.classList.remove('open');
        dm.style.setProperty('display', 'none', 'important');
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
  setupDonateModalComponent(currentLang);

  // Legal Modals
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');
  const openPrivacyBtn = document.getElementById('open-privacy-btn');
  const openTermsBtn = document.getElementById('open-terms-btn');
  const closePrivacyBtn = document.getElementById('close-privacy-modal-btn');
  const closeTermsBtn = document.getElementById('close-terms-modal-btn');

  if (openPrivacyBtn && privacyModal) {
    openPrivacyBtn.addEventListener('click', () => {
      privacyModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closePrivacyBtn && privacyModal) {
    closePrivacyBtn.addEventListener('click', () => {
      privacyModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (openTermsBtn && termsModal) {
    openTermsBtn.addEventListener('click', () => {
      termsModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeTermsBtn && termsModal) {
    closeTermsBtn.addEventListener('click', () => {
      termsModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  setupChatbot();
  updateThemeIcons();
}

function setupChatbot() {
  setupChatbotComponent(currentLang);
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

function init() {
  triggerPageLoadProgress();
  renderPage();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}

