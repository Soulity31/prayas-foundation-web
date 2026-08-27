import { siteContent } from '../data/content.js';
import { createNavbar, createNavigationDrawer } from '../components/Navbar.js';
import { createSchoolSection } from '../components/SchoolSection.js';
import { createPersonModal } from '../components/PersonModal.js';
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

  const s = siteContent[currentLang].school;
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'school')}
    
    <main style="flex: 1;">
      
      <!-- School Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="/index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${isMr ? 'मुख्य पृष्ठ' : isHi ? 'मुख्य पृष्ठ' : 'Home'}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${isMr ? 'मुंबई पब्लिक स्कूल' : isHi ? 'मुंबई पब्लिक स्कूल' : 'Mumbai Public School'}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${s.tagline}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1rem; line-height: 1.2;">
            ${s.heading}
          </h1>
          <p class="font-bold" style="color: var(--primary); font-size: 1.25rem; margin-bottom: 1.25rem;">
            📍 ${s.location}
          </p>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${s.desc}
          </p>
        </div>
      </section>

      <!-- Campus Image & Facility Pillars Section -->
      <section class="section-padding" style="background: var(--surface);">
        <div class="container">
          
          <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: center; margin-bottom: 4rem;" class="lg:grid-cols-2">
            
            <div class="liquid-glass-card" style="padding: 1rem; border-radius: 28px;">
              <div style="aspect-ratio: 16/10; border-radius: var(--radius-xl); overflow: hidden;">
                <img 
                  src="/assets/hero-prayas.jpg" 
                  alt="Mumbai Public School Building, Malvani Township" 
                  style="width: 100%; height: 100%; object-fit: cover;" 
                />
              </div>
            </div>

            <div>
              <span class="glass-badge" style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">
                ${isMr ? 'शैक्षणिक उत्कृष्टता' : isHi ? 'शैक्षणिक उत्कृष्टता' : 'Academic Excellence'}
              </span>
              <h2 class="font-display font-bold text-foreground text-2xl md:text-3xl" style="margin-bottom: 1.25rem; line-height: 1.3;">
                ${isMr ? 'CBSE व SSC दोन्ही माध्यमांमध्ये दर्जेदार शिक्षण' : isHi ? 'CBSE एवं SSC दोनों धाराओं में गुणवत्तापूर्ण शिक्षा' : 'Holistic Development across CBSE & SSC Streams'}
              </h2>
              <p class="text-foreground-muted text-base" style="line-height: 1.7; margin-bottom: 1.75rem; font-size: 1.12rem;">
                ${isMr
                  ? 'प्रयास फाउंडेशनच्या सक्षम मार्गदर्शनाखाली, मुंबई पब्लिक स्कूल मालवणी येथे वंचित घटकातील बालकांसाठी डिजिटल वर्ग, अनुभवी शिक्षक, वैयक्तिक मार्गदर्शन आणि क्रीडा सुविधा उपलब्ध केल्या जात आहेत.'
                  : isHi 
                  ? 'प्रयास फाउंडेशन के कुशल प्रबंधन के अंतर्गत, मुंबई पब्लिक स्कूल मालवणी में वंचित पृष्ठभूमि के बच्चों को आधुनिक डिजिटल कक्षाएं, अनुभवी शिक्षक, व्यक्तिगत मार्गदर्शन और खेल सुविधाएं सुलभ कराई जा रही हैं।' 
                  : 'Under the dedicated stewardship of Prayas Foundation, Mumbai Public School delivers modern digital pedagogy, expert faculty, personalized remedial support, and comprehensive sports training to local students.'}
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div class="liquid-glass-card" style="padding: 1.5rem; border-radius: 20px; border: 1.5px solid var(--border);">
                  <h4 class="font-bold text-primary font-display" style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 0.35rem;">${isMr ? '४८७+' : '487+'}</h4>
                  <span style="font-size: 1.05rem; font-weight: 700; color: var(--foreground);">${isMr ? 'सक्षम विद्यार्थी' : isHi ? 'पंजीकृत छात्र' : 'Active Students'}</span>
                </div>
                <div class="liquid-glass-card" style="padding: 1.5rem; border-radius: 20px; border: 1.5px solid var(--border);">
                  <h4 class="font-bold text-accent font-display" style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 0.35rem;">${isMr ? '१००%' : '100%'}</h4>
                  <span style="font-size: 1.05rem; font-weight: 700; color: var(--foreground);">${isMr ? 'बोर्ड निकाल उत्तीर्णता' : isHi ? 'बोर्ड उत्तीर्ण दर' : 'Board Exam Success'}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- School Pillars & Council -->
          ${createSchoolSection(siteContent, currentLang)}

        </div>
      </section>

    </main>

    ${createFooter(siteContent, currentLang)}
    ${createDonateModal(siteContent, currentLang)}
    ${createLegalModals(siteContent, currentLang)}
    ${createChatbot(siteContent, currentLang)}
    ${createPersonModal()}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${createNavigationDrawer(siteContent, currentLang, 'school')}
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
    console.warn('School page listener setup warning:', err);
  }

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

  // 6. Person Full Detail Modal (Pillars of Strength)
  setupPersonFullDetailModal();

  setupChatbot();
  updateThemeIcons();
}

function setupPersonFullDetailModal() {
  const modal = document.getElementById('person-full-detail-modal');
  const content = document.getElementById('person-full-modal-content');
  const closeBtn = document.getElementById('close-person-modal-btn');
  const wrappers = document.querySelectorAll('.person-wrapper[data-person-full]');

  if (!modal || !content || !wrappers.length) return;

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      try {
        const raw = wrapper.dataset.personFull;
        if (!raw) return;
        const person = JSON.parse(decodeURIComponent(raw));

        content.innerHTML = `
          <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem;">
            <div style="width: 96px; height: 96px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); flex-shrink: 0; box-shadow: var(--shadow-md);">
              <div style="width: 100%; height: 100%; border-radius: 50%; overflow: hidden; background: var(--surface-subtle); display: flex; align-items: center; justify-content: center;">
                ${person.image ? `
                  <img src="${person.image}" alt="${person.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
                ` : person.logo ? `
                  <img src="${person.logo}" alt="${person.name}" style="width: 80%; height: auto; object-fit: contain;" />
                ` : `
                  <div class="liquid-avatar-gradient-icon" style="width: 100%; height: 100%;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #ffffff;">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                `}
              </div>
            </div>

            <div style="flex: 1;">
              <span class="glass-badge" style="font-size: 0.72rem; padding: 0.25rem 0.65rem; margin-bottom: 0.4rem; display: inline-block;">
                ${person.badge || 'Pillar of Strength'}
              </span>
              <h3 class="font-display font-bold text-foreground" style="font-size: 1.45rem; line-height: 1.15; margin: 0 0 0.25rem 0;">
                ${person.name}
              </h3>
              <span style="font-size: 0.9rem; color: var(--primary); font-weight: 700;">
                ${person.role}
              </span>
            </div>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-subtle); margin-bottom: 0.4rem;">
              ${currentLang === 'hi' ? 'जीवन परिचय एवं योगदान' : 'Biography & Governance Overview'}
            </h4>
            <p class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.6; margin: 0;">
              ${person.bio}
            </p>
          </div>

          ${person.achievements ? `
            <div style="background: var(--primary-subtle); border-left: 4px solid var(--primary); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--foreground); display: block; margin-bottom: 0.2rem;">
                ⭐ ${currentLang === 'hi' ? 'प्रमुख उपलब्धि' : 'Key Grassroots Achievement'}:
              </span>
              <span style="font-size: 0.85rem; color: var(--foreground-muted);">
                ${person.achievements}
              </span>
            </div>
          ` : ''}

          ${person.quote ? `
            <blockquote style="font-style: italic; font-size: 0.92rem; color: var(--foreground); font-weight: 600; margin: 0; border-top: 1px solid var(--border); padding-top: 0.85rem;">
              "${person.quote}"
            </blockquote>
          ` : ''}
        `;

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      } catch (err) {
        console.error('Modal error:', err);
      }
    });
  });
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

