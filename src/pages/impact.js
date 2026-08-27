import { siteContent } from '../data/content.js';
import { assessmentMetrics } from '../data/examData.js';
import { createNavbar, createNavigationDrawer } from '../components/Navbar.js';
import { createImpactChart, setupImpactChartComponent } from '../components/ImpactChart.js';
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

  const imp = siteContent[currentLang].impact;
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'impact')}
    
    <main style="flex: 1;">
      
      <!-- Impact Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="/index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${isMr ? 'मुख्य पृष्ठ' : isHi ? 'मुख्य पृष्ठ' : 'Home'}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${isMr ? 'सिद्ध परिणाम' : isHi ? 'सिद्ध प्रभाव' : 'Impact & Results'}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${imp.tagline}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1.25rem; line-height: 1.2;">
            ${imp.heading}
          </h1>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${imp.desc}
          </p>
        </div>
      </section>

      <!-- Key Quantitative Metrics -->
      <section class="section-padding" style="background: var(--surface); padding-bottom: 2.5rem;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 3.5rem;" class="md:grid-cols-4">
            ${assessmentMetrics.map(m => `
              <div class="liquid-glass-card hover-lift" style="padding: 2rem 1.5rem; text-align: center; border-radius: 24px; border: 1.5px solid var(--border);">
                <div class="font-display font-bold text-primary" style="font-size: 3rem; line-height: 1.1; margin-bottom: 0.5rem;">
                  ${isMr && m.value === '487' ? '४८७' : isMr && m.value === '96%' ? '९६%' : isMr && m.value === '100%' ? '१००%' : isMr && m.value === '+30%' ? '+३०%' : m.value}
                </div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--foreground);">
                  ${isMr ? (m.labelMr || m.labelHi) : isHi ? m.labelHi : m.labelEn}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Scroll-Expanding Interactive Chart Section -->
      <section class="section-padding" style="background: var(--surface-alt); padding-top: 2.5rem; position: relative;">
        <div class="container">
          
          <div style="max-width: 1080px; margin: 0 auto;">
            ${createImpactChart(siteContent, currentLang)}
          </div>

          <!-- Impact Summary Narrative -->
          <div class="liquid-glass-card" style="padding: 2.5rem 3rem; border-left: 5px solid var(--primary); max-width: 1080px; margin: 3rem auto 0; text-align: center; border-radius: 24px;">
            <p class="text-foreground-muted text-base md:text-lg" style="line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.2rem;">
              ${imp.summary}
            </p>
            <span class="font-bold text-primary" style="display: inline-flex; align-items: center; gap: 0.6rem; font-size: 1.15rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              ${imp.ctaBanner}
            </span>
          </div>

        </div>
      </section>

    </main>

    ${createFooter(siteContent, currentLang)}
    ${createDonateModal(siteContent, currentLang)}
    ${createLegalModals(siteContent, currentLang)}
    ${createChatbot(siteContent, currentLang)}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${createNavigationDrawer(siteContent, currentLang, 'impact')}
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
    console.warn('Impact page listener setup warning:', err);
  }

  // 4. Donation Modal
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

  // 5. Legal Modals
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

  // 6. Interactive SVG Line Hover, Filters & Smooth Zoom
  setupImpactChartComponent(currentLang);

  // 7. Chatbot Setup
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

