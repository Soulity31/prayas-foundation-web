import { siteContent } from './data/content.js';
import { createNavbar, createNavigationDrawer } from './components/Navbar.js';
import { createHero } from './components/Hero.js';
import { createAboutSection } from './components/AboutSection.js';
import { createOrgStructure } from './components/OrgStructure.js';
import { createSchoolSection } from './components/SchoolSection.js';
import { createImpactChart, setupImpactChartComponent } from './components/ImpactChart.js';
import { createProgramsSection } from './components/ProgramsSection.js';
import { createPartnersSection } from './components/PartnersSection.js';
import { createContactSection } from './components/ContactSection.js';
import { createGalleryModal } from './components/GalleryModal.js';
import { createPersonModal } from './components/PersonModal.js';
import { createDonateModal, setupDonateModalComponent } from './components/DonateModal.js';
import { createLegalModals } from './components/LegalModals.js';
import { createChatbot, setupChatbotComponent } from './components/Chatbot.js';
import { createFooter } from './components/Footer.js';
import { searchKnowledgeBase } from './data/botKnowledge.js';
import { initPerformanceOptimizer, triggerPageLoadProgress, throttleRAF } from './utils/performance.js';
import { initScrollAnimations } from './utils/scrollObserver.js';
import { recordVolunteer, recordContact } from './utils/apiClient.js';

let currentLang = localStorage.getItem('prayas_lang');
if (!currentLang) {
  currentLang = 'mr';
  localStorage.setItem('prayas_lang', 'mr');
}
let currentTheme = localStorage.getItem('prayas_theme') || 'light';
let activeLightboxIndex = 0;
let isChatbotOpen = false;
let userHasReachedOrg = false;
let isOrgStructureLocked = false;

function getNextLanguage(lang) {
  if (lang === 'mr') return 'hi';
  if (lang === 'hi') return 'en';
  return 'mr';
}

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


export function renderHome() {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App container #app not found');
    return;
  }

  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const imp = siteContent[currentLang].impact;

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'home')}
    
    <main style="flex: 1;">
      <!-- Unified Starting Section: Hero + Explore Navigation (Single Whole Div) -->
      <section class="home-focus-section" id="section-hero-explore" style="margin: 0; padding: 0;">
        ${createHero(siteContent, currentLang)}

        <!-- Explore Navigation Bar embedded in same div -->
        <div style="background: var(--surface-subtle); padding: 1.75rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
          <div class="container">
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.85rem;">
              <a href="/about.html" class="glass-badge hover-lift" style="padding: 0.55rem 1.1rem; font-weight: 700; color: var(--foreground); font-size: 0.875rem;">
                🏛️ ${isMr ? 'आमच्याबद्दल आणि नेतृत्व' : isHi ? 'हमारे बारे में एवं नेतृत्व' : 'About Us & Leadership Tree'}
              </a>
              <a href="/school.html" class="glass-badge hover-lift" style="padding: 0.55rem 1.1rem; font-weight: 700; color: var(--foreground); font-size: 0.875rem;">
                🏫 ${isMr ? 'मुंबई पब्लिक स्कूल मालवणी' : isHi ? 'मुंबई पब्लिक स्कूल मालवणी' : 'Mumbai Public School Campus'}
              </a>
              <a href="/impact.html" class="glass-badge hover-lift" style="padding: 0.55rem 1.1rem; font-weight: 700; color: var(--foreground); font-size: 0.875rem;">
                📊 ${isMr ? 'खान अकादमी मूल्यमापन विश्लेषण' : isHi ? 'खान अकादमी मूल्यांकन विश्लेषण' : 'Khan Academy Score Analytics'}
              </a>
              <a href="/programs.html" class="glass-badge hover-lift" style="padding: 0.55rem 1.1rem; font-weight: 700; color: var(--foreground); font-size: 0.875rem;">
                🎯 ${isMr ? '१६ प्रमुख कार्यक्रम व उपक्रम' : isHi ? '16 प्रमुख कार्यक्रम व गतिविधियाँ' : '16 Flagship Programs'}
              </a>
              <a href="/contact.html" class="glass-badge hover-lift" style="padding: 0.55rem 1.1rem; font-weight: 700; color: var(--foreground); font-size: 0.875rem;">
                🤝 ${isMr ? 'स्वयंसेवक आणि 80G देणगी' : isHi ? 'स्वयंसेवक व 80G दान' : 'Volunteer & 80G Donation'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Leadership Section -->
      <section class="home-focus-section" id="section-about" style="margin: 0; padding: 0;">
        ${createAboutSection(siteContent, currentLang)}
      </section>

      <!-- Step-by-Step Scroll-Driven Organisational Structure Section -->
      <section class="home-focus-section section-padding" id="section-org-structure" style="background: var(--surface); position: relative; margin: 0;">
        <div class="container">
          ${createOrgStructure(siteContent, currentLang)}
        </div>
      </section>

      <!-- Pillars of Strength (Governance & Advisory Council) Section -->
      <section class="home-focus-section" id="section-school" style="margin: 0; padding: 0;">
        ${createSchoolSection(siteContent, currentLang)}
      </section>

      <!-- Double-Size Width & Height Interactive Khan Academy Assessment Chart Section -->
      <section class="home-focus-section section-padding" id="section-impact-chart" style="background: var(--surface-alt); position: relative; overflow: visible; margin: 0;">
        <div style="width: 100%; max-width: 1860px; margin: 0 auto; padding: 0 1.25rem; display: flex; flex-direction: column; align-items: center; position: relative;">
          <div style="text-align: center; max-width: 720px; margin: 0 auto 3rem; position: relative; z-index: 20;">
            <span class="glass-badge-gold" style="margin-bottom: 0.75rem;">
              ${imp.tagline}
            </span>
            <h2 class="font-display font-bold text-foreground" style="font-size: clamp(1.75rem, 3.2vw, 2.35rem); margin-bottom: 0.75rem;">
              ${imp.heading}
            </h2>
            <p class="text-foreground-muted" style="font-size: 1rem; line-height: 1.65; margin: 0;">
              ${imp.desc}
            </p>
          </div>

          <div style="width: 100%; display: flex; justify-content: center; position: relative;">
            ${createImpactChart(siteContent, currentLang)}
          </div>
        </div>
      </section>

      <!-- 16 Flagship Programs & Events (Single Unified Div) -->
      <section class="home-focus-section" id="section-programs" style="margin: 0; padding: 0;">
        ${createProgramsSection(siteContent, currentLang)}
      </section>

      <!-- Partners Section -->
      <section class="home-focus-section" id="section-partners" style="margin: 0; padding: 0;">
        ${createPartnersSection(siteContent, currentLang)}
      </section>

      <!-- Contact & FAQ Section (Always 100% Unblurred) -->
      <section id="section-contact" style="margin: 0; padding: 0;">
        ${createContactSection(siteContent, currentLang)}
      </section>
    </main>

    ${createFooter(siteContent, currentLang)}
    ${createGalleryModal()}
    ${createDonateModal(siteContent, currentLang)}
    ${createLegalModals(siteContent, currentLang)}
    ${createChatbot(siteContent, currentLang)}
    ${createPersonModal()}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${createNavigationDrawer(siteContent, currentLang, 'home')}
  `;

  attachHomeListeners();
  initScrollAnimations();
}

function attachHomeListeners() {
  try {
    // 1. Language Modal Triggers & Option Selection
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

    // 2. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('prayas_theme', currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcons();
      });
    }

    // 3. Navigation Drawer Listeners
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const drawerOverlay = document.getElementById('drawer-overlay');

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => window.togglePrayasMenu(true));
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', () => window.togglePrayasMenu(false));
    if (drawerOverlay) drawerOverlay.addEventListener('click', () => window.togglePrayasMenu(false));
  } catch (err) {
    console.warn('Navbar listener setup warning:', err);
  }

  // 4. Donation Modal
  window.openDonateModal = function() {
    window.closePrayasMenu && window.closePrayasMenu();
    let dm = document.getElementById('donate-modal');
    if (dm) {
      if (dm.parentElement !== document.body) {
        document.body.appendChild(dm);
      }
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

  const allDonateBtns = document.querySelectorAll('#nav-donate-btn, #mobile-donate-btn, .hero-donate-btn, .action-donate-btn, #hero-donate-cta-btn, #stat-donate-cta-btn, .nav-donate-btn, [data-action="donate"]');
  const donateModal = document.getElementById('donate-modal');
  const closeDonateModalBtn = document.getElementById('close-donate-modal-btn');

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

  // 5. Legal Modals
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');
  const openPrivacyBtn = document.getElementById('open-privacy-btn');
  const openTermsBtn = document.getElementById('open-terms-btn');
  const closePrivacyBtn = document.getElementById('close-privacy-modal-btn');
  const closeTermsBtn = document.getElementById('close-terms-modal-btn');

  if (openPrivacyBtn && privacyModal) {
    openPrivacyBtn.addEventListener('click', () => {
      if (privacyModal.parentElement !== document.body) document.body.appendChild(privacyModal);
      privacyModal.classList.add('open');
      privacyModal.style.setProperty('display', 'flex', 'important');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closePrivacyBtn && privacyModal) {
    closePrivacyBtn.addEventListener('click', () => {
      privacyModal.classList.remove('open');
      privacyModal.style.setProperty('display', 'none', 'important');
      document.body.style.overflow = '';
    });
  }
  if (openTermsBtn && termsModal) {
    openTermsBtn.addEventListener('click', () => {
      if (termsModal.parentElement !== document.body) document.body.appendChild(termsModal);
      termsModal.classList.add('open');
      termsModal.style.setProperty('display', 'flex', 'important');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeTermsBtn && termsModal) {
    closeTermsBtn.addEventListener('click', () => {
      termsModal.classList.remove('open');
      termsModal.style.setProperty('display', 'none', 'important');
      document.body.style.overflow = '';
    });
  }

  // 6. Click-to-Open Full Person Detail Modal
  setupPersonFullDetailModal();

  // 7. Dynamic Org Tier Zoom & Reliable Post-Completion Lock
  setupDynamicOrgScrollTiers();

  // 8. Fluid Iridescent Gradient Mouse Sheen on All Non-Photo Avatars
  setupFluidGradientAvatarSheen();

  // 9. Interactive Assessment Chart (Hover, Filters, Tooltips & Smooth GPU Zoom)
  setupImpactChartComponent(currentLang);

  // 9b. Hero Stats Box Scroll Zoom
  setupHeroStatsScrollZoom();

  // 10. Step-by-Step Program Event Focus
  setupStepByStepProgramEvents();

  // 13. Contact Form
  setupContactForm();

  // 14. Chatbot
  setupChatbot();
  updateThemeIcons();
}

/**
 * Click-to-Open Full Person Detail Modal
 */
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
                ${person.badge || 'Prayas Council'}
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

        if (modal.parentElement !== document.body) {
          document.body.appendChild(modal);
        }
        modal.classList.add('open');
        modal.style.setProperty('display', 'flex', 'important');
        document.body.style.overflow = 'hidden';
      } catch (err) {
        console.error('Error opening person detail modal:', err);
      }
    });
  });
}

/**
 * Dynamic Org Tier Zoom: Smooth, Bidirectional Scroll Focus & Quote Reveal (60+ FPS)
 */
function setupDynamicOrgScrollTiers() {
  const container = document.getElementById('org-structure-container');
  const tierSteps = Array.from(document.querySelectorAll('.org-tier-step'));
  const fullTreeBanner = document.getElementById('org-full-revealed-banner');
  if (!container || !tierSteps.length) return;

  let isIntersecting = false;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      isIntersecting = entries[0].isIntersecting;
      if (isIntersecting) updateTierFocus();
    }, { rootMargin: '100px 0px' });
    observer.observe(container);
  } else {
    isIntersecting = true;
  }

  function updateTierFocus() {
    if (!isIntersecting) return;
    const windowH = window.innerHeight;
    const focusPoint = windowH * 0.50;

    let closestTier = null;
    let minDiff = Infinity;

    tierSteps.forEach(tier => {
      const rect = tier.getBoundingClientRect();
      const isVisible = rect.top < windowH * 0.90 && rect.bottom > windowH * 0.10;
      tier.classList.toggle('is-active', isVisible);

      const tierCenter = rect.top + rect.height / 2;
      const diff = Math.abs(focusPoint - tierCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestTier = tier;
      }
    });

    tierSteps.forEach(tier => {
      const isFocused = tier === closestTier && minDiff < windowH * 0.38;
      tier.classList.toggle('is-focused-tier', isFocused);
    });

    if (fullTreeBanner) {
      const contRect = container.getBoundingClientRect();
      fullTreeBanner.classList.toggle('revealed', contRect.bottom < windowH * 0.95 && contRect.top < windowH * 0.3);
    }
  }

  window.addEventListener('scroll', throttleRAF(updateTierFocus), { passive: true });
  window.addEventListener('resize', throttleRAF(updateTierFocus), { passive: true });
  updateTierFocus();
}

/**
 * Fluid Iridescent Gradient Mouse Sheen on All Non-Photo Avatars
 */
function setupFluidGradientAvatarSheen() {
  const gradientIcons = document.querySelectorAll('.liquid-avatar-gradient-icon');
  gradientIcons.forEach(icon => {
    const parent = icon.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', (e) => {
        const rect = icon.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        icon.style.setProperty('--mouse-x', `${x}%`);
        icon.style.setProperty('--mouse-y', `${y}%`);
      }, { passive: true });
    }
  });
}



/**
 * Hero Stats Scroll Zoom: Default Double-Size Large Width at top, drastically shrinks on scroll past, returns to large default on scroll back.
 */
function setupHeroStatsScrollZoom() {
  const wrapper = document.getElementById('hero-stats-wrapper');
  const statsBox = document.getElementById('hero-dynamic-zoom-stats');
  if (!wrapper || !statsBox) return;

  function updateHeroStatsZoom() {
    const isMobile = window.innerWidth < 640;
    const windowH = window.innerHeight;
    const rect = wrapper.getBoundingClientRect();

    let shrinkFactor = 0;
    const triggerThreshold = windowH * 0.45;
    
    if (rect.top < triggerThreshold) {
      const travel = triggerThreshold - rect.top;
      const maxTravel = (rect.height || 450) + triggerThreshold;
      shrinkFactor = Math.min(1, Math.max(0, travel / maxTravel));
    }

    // Shrinks down to scale(0.58) on PC, scale(0.68) on mobile as user scrolls past!
    const maxShrink = isMobile ? 0.32 : 0.42;
    const scale = (1.0 - shrinkFactor * maxShrink).toFixed(4);
    const opacity = (1.0 - shrinkFactor * 0.45).toFixed(3);

    statsBox.style.transform = `translate3d(0, 0, 0) scale(${scale})`;
    statsBox.style.opacity = opacity;
    statsBox.style.transformOrigin = 'center center';

    if (shrinkFactor < 0.2) {
      statsBox.style.boxShadow = '0 40px 100px -10px rgba(0,0,0,0.7), 0 0 50px rgba(52, 211, 153, 0.3)';
      statsBox.style.borderColor = 'rgba(52, 211, 153, 0.45)';
    } else {
      statsBox.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
      statsBox.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    }
  }

  window.addEventListener('scroll', throttleRAF(updateHeroStatsZoom), { passive: true });
  window.addEventListener('resize', throttleRAF(updateHeroStatsZoom), { passive: true });
  updateHeroStatsZoom();
}

/**
 * Step-by-Step Program Event Zoom: Ultra-Smooth 60 FPS Native IntersectionObserver
 */
function setupStepByStepProgramEvents() {
  const section = document.getElementById('programs') || document.getElementById('section-programs');
  const eventCards = Array.from(document.querySelectorAll('.program-card-step'));
  if (!eventCards.length || !section) return;

  // On mobile screens, use native IntersectionObserver to magnify ONE card in center view. PC uses :hover
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (window.innerWidth <= 768) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-focused-event');
          } else {
            entry.target.classList.remove('is-focused-event');
          }
        } else {
          entry.target.classList.remove('is-focused-event', 'is-focused-row');
        }
      });
    }, {
      rootMargin: '-22% 0px -22% 0px',
      threshold: 0.35
    });

    eventCards.forEach(card => observer.observe(card));
  }

  // Filter Bar Functionality
  const programFilterBtns = document.querySelectorAll('.program-filter-btn');
  programFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      programFilterBtns.forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-secondary');
      });
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');

      const category = btn.dataset.category;
      eventCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Integration
  const lightboxModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-main-img');
  const lightboxTitle = document.getElementById('lightbox-caption-title');
  const lightboxDesc = document.getElementById('lightbox-caption-desc');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');

  const programList = (siteContent[currentLang] && siteContent[currentLang].programs && siteContent[currentLang].programs.items) || [];

  function updateLightbox(index) {
    if (!programList.length) return;
    if (index < 0) index = programList.length - 1;
    if (index >= programList.length) index = 0;
    activeLightboxIndex = index;

    const item = programList[activeLightboxIndex];
    if (lightboxImg && item) {
      lightboxImg.onerror = function() {
        this.onerror = null;
        this.src = '/assets/celebrations.jpg';
      };
      lightboxImg.src = item.img || '/assets/celebrations.jpg';
      lightboxImg.alt = item.title || 'Program Preview';
      if (lightboxTitle) lightboxTitle.textContent = item.title || '';
      if (lightboxDesc) lightboxDesc.textContent = item.desc || '';
    }
  }

  function openLightbox(index) {
    updateLightbox(index);
    const modal = document.getElementById('gallery-lightbox-modal');
    if (modal) {
      if (modal.parentElement !== document.body) {
        document.body.appendChild(modal);
      }
      modal.classList.add('open');
      modal.style.setProperty('display', 'flex', 'important');
      modal.style.setProperty('align-items', 'center', 'important');
      modal.style.setProperty('justify-content', 'center', 'important');
      modal.style.setProperty('position', 'fixed', 'important');
      modal.style.setProperty('inset', '0', 'important');
      modal.style.setProperty('z-index', '9999999', 'important');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    const modal = document.getElementById('gallery-lightbox-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.style.setProperty('display', 'none', 'important');
      document.body.style.overflow = '';
    }
  }

  window.openProgramLightbox = function(index) {
    openLightbox(index);
  };
  window.closeProgramLightbox = function() {
    closeLightbox();
  };

  eventCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const trueIdx = parseInt(card.dataset.eventIndex || idx, 10);
      openLightbox(trueIdx);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(activeLightboxIndex - 1);
  });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightbox(activeLightboxIndex + 1);
  });
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('gallery-lightbox-modal');
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeLightbox();
    }
  });
}



function setupContactForm() {
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

// Ensure single clean initialization without duplicate executions or window load DOM resets
function init() {
  triggerPageLoadProgress();
  renderHome();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}

