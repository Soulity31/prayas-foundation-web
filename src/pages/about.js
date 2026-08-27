import { siteContent } from '../data/content.js';
import { createNavbar, createNavigationDrawer } from '../components/Navbar.js';
import { createOrgStructure } from '../components/OrgStructure.js';
import { createPartnersSection } from '../components/PartnersSection.js';
import { createPersonModal } from '../components/PersonModal.js';
import { createChatbot, setupChatbotComponent } from '../components/Chatbot.js';
import { createDonateModal, setupDonateModalComponent } from '../components/DonateModal.js';
import { createLegalModals } from '../components/LegalModals.js';
import { createFooter } from '../components/Footer.js';
import { searchKnowledgeBase } from '../data/botKnowledge.js';
import { initPerformanceOptimizer, triggerPageLoadProgress, throttleRAF } from '../utils/performance.js';

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

  const m = siteContent[currentLang].mission;
  const l = siteContent[currentLang].leadership;
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'about')}
    
    <main style="flex: 1;">
      
      <!-- Page Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="./index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${isMr ? 'मुख्य पृष्ठ' : isHi ? 'मुख्य पृष्ठ' : 'Home'}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${isMr ? 'आमच्याबद्दल' : isHi ? 'हमारे बारे में' : 'About Us'}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${m.tagline}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1.25rem; line-height: 1.2;">
            ${isMr ? 'आमची यशोगाथा, ध्येय आणि नेतृत्व रचना' : isHi ? 'हमारी कहानी, मिशन और संगठनात्मक नेतृत्व' : 'Our Story, Mission & Leadership'}
          </h1>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${m.desc}
          </p>
        </div>
      </section>

      <!-- 3 Core Pillars Section -->
      <section class="section-padding" style="background: var(--surface);">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;" class="md:grid-cols-3">
            ${m.pillars.map((p, i) => `
              <div class="liquid-glass-card hover-lift" style="padding: 2.25rem; border-radius: 24px;">
                <div style="width: 56px; height: 56px; border-radius: var(--radius-lg); background: ${i === 0 ? 'rgba(16, 185, 129, 0.15)' : i === 1 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(13, 148, 136, 0.15)'}; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: ${i === 0 ? 'var(--primary)' : i === 1 ? 'var(--accent)' : 'var(--secondary)'};">
                  ${i === 0 ? `
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
                  ` : i === 1 ? `
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  ` : `
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  `}
                </div>
                <h3 class="font-display font-bold text-foreground" style="font-size: 1.35rem; margin-bottom: 0.85rem;">
                  ${p.title}
                </h3>
                <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.65;">
                  ${p.desc}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Founder Brijesh Singh Feature Section -->
      <section class="section-padding" style="background: var(--surface-alt);">
        <div class="container">
          <div class="liquid-glass-card" style="padding: 3rem; background: var(--gradient-card); border-radius: 28px;">
            <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;" class="lg:grid-cols-12">
              
              <div class="lg:col-span-4 text-center" style="display: flex; flex-direction: column; align-items: center;">
                <div style="position: relative; width: 230px; height: 230px; border-radius: 50%; padding: 6px; background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); box-shadow: var(--shadow-lg); margin-bottom: 1.5rem;">
                  <img 
                    src="./assets/brijesh-singh.png" 
                    alt="Shri Brijesh Singh - Founder & Chairman, Prayas Foundation" 
                    style="width: 100%; height: 100%; object-fit: cover; object-position: top; border-radius: 50%; background: var(--surface-card);"
                    loading="lazy"
                  />
                </div>
                <h3 class="font-display font-bold text-foreground" style="font-size: 1.35rem; margin-bottom: 0.35rem;">
                  ${l.name}
                </h3>
                <p class="font-bold uppercase tracking-wider" style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.85rem;">
                  ${l.role}
                </p>
                <div class="glass-badge" style="font-size: 0.9rem; font-weight: 700; padding: 0.4rem 1rem;">
                  ${isMr ? '१४+ वर्षांची समर्पित जनसेवा' : isHi ? '14+ वर्षों का समर्पित जनसेवा' : '14+ Years Grassroots Service'}
                </div>
              </div>

              <div class="lg:col-span-8">
                <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 0.95rem;">
                  ${l.tagline}
                </span>
                <h2 class="font-display font-bold text-foreground" style="font-size: clamp(1.8rem, 3vw, 2.35rem); margin-bottom: 1.25rem;">
                  ${l.heading}
                </h2>
                
                <div style="display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 1.75rem; color: var(--foreground-muted); font-size: 1.08rem; line-height: 1.7;">
                  <p>${l.bio1}</p>
                  <p>${l.bio2}</p>
                  <p>${l.bio3}</p>
                </div>

                <blockquote style="border-left: 4px solid var(--primary); padding-left: 1.5rem; font-style: italic; color: var(--foreground); font-weight: 700; font-size: 1.12rem; background: var(--primary-subtle); padding-top: 1rem; padding-bottom: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  "${l.quote}"
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Scroll-Driven Progressive Organisational Structure Section -->
      <section class="section-padding" style="background: var(--surface); position: relative;">
        <div class="container">
          ${createOrgStructure(siteContent, currentLang)}
        </div>
      </section>

      <!-- Integrated Partners in Progress Section -->
      ${createPartnersSection(siteContent, currentLang, true)}

      <!-- CSR Collaboration Information Banner -->
      <section class="section-padding" style="background: var(--surface-alt); padding-top: 0;">
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
              <a href="./contact.html" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.75rem 1.75rem;">
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
    ${createPersonModal()}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${createNavigationDrawer(siteContent, currentLang, 'about')}
  `;

  attachPageListeners();
}

function attachPageListeners() {
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
    console.warn('About page listener setup warning:', err);
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

  // 6. Scroll-Driven Progressive Step-by-Step Organisational Hierarchy
  setupOrgScrollTiers();

  // 7. Interactive White-Blue Mouse Sheen on Unassigned Liquid Glass Profiles
  setupEmptyProfileSheen();

  // 8. Person Full Detail Modal
  setupPersonFullDetailModal();

  // 9. Chatbot Setup
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
        console.error('Modal error:', err);
      }
    });
  });
}

function setupOrgScrollTiers() {
  const tierSteps = Array.from(document.querySelectorAll('.org-tier-step'));
  const fullTreeBanner = document.getElementById('org-full-revealed-banner');
  const container = document.getElementById('org-structure-container');
  if (!tierSteps.length || !container) return;

  let isIntersecting = false;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      isIntersecting = entries[0].isIntersecting;
      if (isIntersecting) updateTiers();
    }, { rootMargin: '100px 0px' });
    observer.observe(container);
  } else {
    isIntersecting = true;
  }

  function updateTiers() {
    if (!isIntersecting) return;
    const windowH = window.innerHeight;
    const focalY = windowH * 0.50;

    let closestTier = null;
    let minDiff = Infinity;

    tierSteps.forEach(step => {
      const rect = step.getBoundingClientRect();
      const isVisible = rect.top < windowH * 0.90 && rect.bottom > windowH * 0.10;
      step.classList.toggle('is-active', isVisible);
      
      const tierCenter = rect.top + rect.height / 2;
      const diff = Math.abs(focalY - tierCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestTier = step;
      }
    });

    tierSteps.forEach(step => {
      const isFocused = step === closestTier && minDiff < windowH * 0.38;
      step.classList.toggle('is-focused-tier', isFocused);
    });

    if (fullTreeBanner && container) {
      const cRect = container.getBoundingClientRect();
      if (cRect.bottom < windowH * 0.95 && cRect.top < windowH * 0.3) {
        fullTreeBanner.classList.add('revealed');
      } else {
        fullTreeBanner.classList.remove('revealed');
      }
    }
  }

  window.addEventListener('scroll', throttleRAF(updateTiers), { passive: true });
  window.addEventListener('resize', throttleRAF(updateTiers), { passive: true });
  updateTiers();
}

function setupEmptyProfileSheen() {
  const emptySlots = document.querySelectorAll('.liquid-glass-empty');
  emptySlots.forEach(slot => {
    slot.addEventListener('mousemove', (e) => {
      const rect = slot.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      slot.style.setProperty('--mouse-x', `${x}%`);
      slot.style.setProperty('--mouse-y', `${y}%`);
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

