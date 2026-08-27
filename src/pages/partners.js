import { siteContent } from '../data/content.js';
import { createNavbar, createNavigationDrawer } from '../components/Navbar.js';
import { createPartnersSection } from '../components/PartnersSection.js';
import { createChatbot, setupChatbotComponent } from '../components/Chatbot.js';
import { createDonateModal, setupDonateModalComponent } from '../components/DonateModal.js';
import { createLegalModals } from '../components/LegalModals.js';
import { createFooter } from '../components/Footer.js';
import { searchKnowledgeBase } from '../data/botKnowledge.js';
import { initPerformanceOptimizer, triggerPageLoadProgress } from '../utils/performance.js';

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

  const p = siteContent[currentLang].partners;
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'partners')}
    
    <main style="flex: 1;">
      
      <!-- Partners Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="/index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${isMr ? 'मुख्य पृष्ठ' : isHi ? 'मुख्य पृष्ठ' : 'Home'}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${isMr ? 'प्रगतीत भागीदार' : isHi ? 'प्रगति में सहयोगी' : 'Partners in Progress'}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${p.tagline}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1.25rem; line-height: 1.2;">
            ${p.heading}
          </h1>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${p.desc}
          </p>
        </div>
      </section>

      <!-- Partners Grid Section -->
      ${createPartnersSection(siteContent, currentLang, false)}

      <!-- CSR Collaboration Information Banner -->
      <section class="section-padding" style="background: var(--surface-alt);">
        <div class="container">
          <div class="liquid-glass-card" style="padding: 3rem; background: var(--gradient-card); text-align: center; max-width: 900px; margin: 0 auto; border-radius: 28px; border: 1.5px solid var(--border);">
            <h3 class="font-display font-bold text-foreground" style="font-size: clamp(1.6rem, 2.5vw, 2.2rem); margin-bottom: 1rem;">
              ${isMr ? 'कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) भागीदारी' : isHi ? 'कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) साझेदारी' : 'Corporate Social Responsibility (CSR) Partnerships'}
            </h3>
            <p class="text-foreground-muted" style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 2rem;">
              ${isMr 
                ? 'प्रयास फाउंडेशन कंपनी कायद्याच्या कलम १३५ अंतर्गत कॉर्पोरेट CSR प्रकल्पांच्या अंमलबजावणीसाठी पूर्णतः नोंदणीकृत व पात्र आहे. आम्ही पारदर्शक अहवाल आणि ऑडिट प्रमाणपत्रे प्रदान करतो.' 
                : isHi 
                ? 'प्रयास फाउंडेशन कंपनी अधिनियम की धारा 135 के तहत कॉर्पोरेट सीएसआर परियोजनाओं के क्रियान्वयन हेतु पूर्णतः पंजीकृत और अनुपालन योग्य है। हम पारदर्शी रिपोर्टिंग और ऑडिट प्रमाणन प्रदान करते हैं।' 
                : 'Prayas Foundation is fully compliant with Section 135 of the Companies Act for CSR implementations. We provide detailed impact reporting, utilization certificates, and annual audits.'}
            </p>
            <div style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap;">
              <a href="/contact.html" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.75rem 1.75rem;">
                ${isMr ? 'CSR भागीदारीसाठी संपर्क साधा' : isHi ? 'CSR साझेदारी हेतु संपर्क करें' : 'Contact for CSR Collaboration'}
              </a>
              <a href="tel:+919820500726" class="btn btn-secondary" style="font-size: 1.05rem; padding: 0.75rem 1.75rem;">
                📞 +91-9820500726
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    ${createFooter(siteContent, currentLang)}
    ${createDonateModal(siteContent, currentLang)}
    ${createLegalModals(siteContent, currentLang)}
    ${createChatbot(siteContent, currentLang)}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${createNavigationDrawer(siteContent, currentLang, 'partners')}
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
    console.warn('Partners page listener setup warning:', err);
  }

  window.openDonateModal = function() {
    window.closePrayasMenu && window.closePrayasMenu();
    let dm = document.getElementById('donate-modal');
    if (dm) {
      if (dm.parentElement !== document.body) document.body.appendChild(dm);
      dm.classList.add('open');
      dm.style.setProperty('display', 'flex', 'important');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeDonateModal = function() {
    let dm = document.getElementById('donate-modal');
    if (dm) {
      dm.classList.remove('open');
      dm.style.setProperty('display', 'none', 'important');
      document.body.style.overflow = '';
    }
  };

  const allDonateBtns = document.querySelectorAll('#nav-donate-btn, #mobile-donate-btn, .hero-donate-btn, .action-donate-btn, .nav-donate-btn');
  allDonateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openDonateModal();
    });
  });

  if (closeDonateModalBtn) closeDonateModalBtn.addEventListener('click', () => window.closeDonateModal());
  if (donateModal) {
    donateModal.addEventListener('click', (e) => {
      if (e.target === donateModal) window.closeDonateModal();
    });
  }
  setupDonateModalComponent(currentLang);

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

