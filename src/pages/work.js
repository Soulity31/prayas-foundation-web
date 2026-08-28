import { siteContent } from '../data/content.js';
import { workAlbumsData } from '../data/workContent.js';
import { createNavbar, createNavigationDrawer } from '../components/Navbar.js';
import { createWorkSection } from '../components/WorkSection.js';
import { createWorkModal } from '../components/WorkModal.js';
import { createChatbot, setupChatbotComponent } from '../components/Chatbot.js';
import { createDonateModal, setupDonateModalComponent } from '../components/DonateModal.js';
import { createLegalModals, setupLegalModalsComponent } from '../components/LegalModals.js';
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
let activeAlbum = null;
let currentLightboxIndex = 0;
let currentLightboxPhotos = [];

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

// Work Modal and Lightbox Center Handlers
window.closeWorkModal = function() {
  const modal = document.getElementById('work-album-modal');
  if (modal) {
    modal.style.setProperty('display', 'none', 'important');
  }
  const lb = document.getElementById('work-fullscreen-lightbox');
  if (!lb || lb.style.display === 'none') {
    document.body.style.overflow = '';
  }
};

window.openWorkLightbox = function(index) {
  if (!activeAlbum) return;
  const photos = activeAlbum.photos || [];
  if (!photos.length) return;

  currentLightboxIndex = Math.max(0, Math.min(index, photos.length - 1));
  currentLightboxPhotos = photos;

  const lb = document.getElementById('work-fullscreen-lightbox');
  const img = document.getElementById('work-lb-img');
  const counter = document.getElementById('work-lb-counter');

  if (lb && img) {
    if (lb.parentElement !== document.body) {
      document.body.appendChild(lb);
    }
    const currentPhoto = currentLightboxPhotos[currentLightboxIndex];
    const remoteFallback = (activeAlbum.remote_photos && activeAlbum.remote_photos[currentLightboxIndex]) || './assets/celebrations.jpg';
    img.onerror = function() {
      this.onerror = function() { this.src = './assets/celebrations.jpg'; };
      this.src = remoteFallback;
    };
    img.src = currentPhoto;

    if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxPhotos.length}`;
    
    lb.style.setProperty('display', 'flex', 'important');
    lb.style.setProperty('align-items', 'center', 'important');
    lb.style.setProperty('justify-content', 'center', 'important');
    lb.style.setProperty('position', 'fixed', 'important');
    lb.style.setProperty('inset', '0', 'important');
    lb.style.setProperty('z-index', '1000000', 'important');
    document.body.style.overflow = 'hidden';
  }
};

window.closeWorkLightbox = function() {
  const lb = document.getElementById('work-fullscreen-lightbox');
  if (lb) {
    lb.style.setProperty('display', 'none', 'important');
  }
  const modal = document.getElementById('work-album-modal');
  if (!modal || modal.style.display === 'none') {
    document.body.style.overflow = '';
  }
};

window.nextWorkPhoto = function() {
  if (!currentLightboxPhotos.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxPhotos.length;
  const img = document.getElementById('work-lb-img');
  const counter = document.getElementById('work-lb-counter');
  if (img) {
    const currentPhoto = currentLightboxPhotos[currentLightboxIndex];
    const remoteFallback = (activeAlbum.remote_photos && activeAlbum.remote_photos[currentLightboxIndex]) || './assets/celebrations.jpg';
    img.onerror = function() {
      this.onerror = function() { this.src = './assets/celebrations.jpg'; };
      this.src = remoteFallback;
    };
    img.src = currentPhoto;
  }
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxPhotos.length}`;
};

window.prevWorkPhoto = function() {
  if (!currentLightboxPhotos.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxPhotos.length) % currentLightboxPhotos.length;
  const img = document.getElementById('work-lb-img');
  const counter = document.getElementById('work-lb-counter');
  if (img) {
    const currentPhoto = currentLightboxPhotos[currentLightboxIndex];
    const remoteFallback = (activeAlbum.remote_photos && activeAlbum.remote_photos[currentLightboxIndex]) || './assets/celebrations.jpg';
    img.onerror = function() {
      this.onerror = function() { this.src = './assets/celebrations.jpg'; };
      this.src = remoteFallback;
    };
    img.src = currentPhoto;
  }
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxPhotos.length}`;
};

function renderPage() {
  const app = document.getElementById('app');
  if (!app) return;

  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  app.innerHTML = `
    ${createNavbar(siteContent, currentLang, 'work')}
    
    <main style="flex: 1;">
      
      <!-- Work Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="./index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${isMr ? 'मुख्य पृष्ठ' : isHi ? 'मुख्य पृष्ठ' : 'Home'}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${isMr ? 'आमचे कार्य' : isHi ? 'हमारा कार्य' : 'Our Work'}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${isMr ? 'तळागाळातील प्रत्यक्ष जनसेवा' : isHi ? 'जमीनी स्तर पर प्रत्यक्ष सेवा' : 'Grassroots Action & Welfare Events'}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1.25rem; line-height: 1.2;">
            ${isMr ? 'आमचे कार्य: सेवा, संस्कृती आणि जनकल्याण' : isHi ? 'हमारा कार्य: जमीनी स्तर पर सेवा एवं कार्यक्रम' : 'Our Work: Initiatives & Social Welfare'}
          </h1>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${isMr
              ? 'प्रयास फाउंडेशनद्वारे मुंबईत शिक्षणासोबतच अन्नदान, सांस्कृतिक उत्सव, महिला सन्मान आणि जनकल्याणाच्या क्षेत्रात आयोजित प्रमुख उपक्रमांची सचित्र झलक.'
              : isHi 
              ? 'प्रयास फाउंडेशन द्वारा मुंबई में शिक्षा के साथ-साथ अन्नदान, सांस्कृतिक उत्सव, महिला सम्मान और जन-कल्याण के क्षेत्र में आयोजित प्रमुख कार्यक्रमों की सचित्र झलकियाँ।' 
              : 'Browse photo albums and stories of Prayas Foundation grassroots initiatives: cultural festivals, Annadaan, women empowerment, youth sports, and community welfare in Mumbai.'}
          </p>
        </div>
      </section>

      <!-- Work Albums Grid Section -->
      ${createWorkSection(siteContent, currentLang, false)}

    </main>

    ${createFooter(siteContent, currentLang)}
    ${createWorkModal()}
    ${createDonateModal(siteContent, currentLang)}
    ${createLegalModals(siteContent, currentLang)}
    ${createChatbot(siteContent, currentLang)}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${createNavigationDrawer(siteContent, currentLang, 'work')}
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

    // 2. Theme Switcher
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('prayas_theme', currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcons();
      });
    }

    // 3. Category Filter
    const filterBtns = document.querySelectorAll('.work-filter-btn');
    const albumCards = document.querySelectorAll('.work-album-card');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        filterBtns.forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
        });
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');

        albumCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // 4. Album Card Click -> Open Detail Modal
    albumCards.forEach(card => {
      card.addEventListener('click', () => {
        const albumId = card.getAttribute('data-album-id');
        const album = workAlbumsData.find(a => a.id === albumId);
        if (album) {
          openAlbumDetail(album);
        }
      });
    });

    // 5. Keyboard navigation for Modal and Lightbox
    window.addEventListener('keydown', (e) => {
      const lb = document.getElementById('work-fullscreen-lightbox');
      if (lb && lb.style.display === 'flex') {
        if (e.key === 'Escape') window.closeWorkLightbox();
        if (e.key === 'ArrowRight') window.nextWorkPhoto();
        if (e.key === 'ArrowLeft') window.prevWorkPhoto();
      } else {
        const modal = document.getElementById('work-album-modal');
        if (modal && modal.style.display === 'flex') {
          if (e.key === 'Escape') window.closeWorkModal();
        }
      }
    });

    // 6. Navigation Drawer Listeners
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const drawerOverlay = document.getElementById('drawer-overlay');

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => window.togglePrayasMenu(true));
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', () => window.togglePrayasMenu(false));
    if (drawerOverlay) drawerOverlay.addEventListener('click', () => window.togglePrayasMenu(false));

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

    const openDonateBtns = document.querySelectorAll('#nav-donate-btn, #mobile-donate-btn, .hero-donate-btn, .action-donate-btn');
    const donateModal = document.getElementById('donate-modal');

    openDonateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.closePrayasMenu();
        toggleDonateModal(true);
      });
    });

    const closeDonateBtn = document.getElementById('close-donate-modal-btn');
    if (closeDonateBtn && donateModal) {
      closeDonateBtn.addEventListener('click', () => {
        donateModal.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
    if (donateModal) {
      donateModal.addEventListener('click', (e) => {
        if (e.target === donateModal) {
          donateModal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }
    setupDonateModalComponent(currentLang);
    setupLegalModalsComponent();

    // 8. Chatbot Listeners
    setupChatbotComponent(currentLang);

    updateThemeIcons();
    triggerPageLoadProgress();
  } catch (err) {
    console.warn('Work page listener setup warning:', err);
  }
}

function openAlbumDetail(albumOrId) {
  const album = typeof albumOrId === 'string' ? workAlbumsData.find(a => a.id === albumOrId) : albumOrId;
  if (!album) return;
  activeAlbum = album;

  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const modal = document.getElementById('work-album-modal');
  const catEl = document.getElementById('work-modal-category');
  const titleEl = document.getElementById('work-modal-title');
  const descEl = document.getElementById('work-modal-desc');
  const countEl = document.getElementById('work-modal-photo-count');
  const gridEl = document.getElementById('work-modal-photo-grid');

  if (!modal || !gridEl) return;

  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  if (catEl) catEl.textContent = isMr ? (album.category_mr || album.category_hi) : isHi ? album.category_hi : album.category;
  if (titleEl) titleEl.textContent = isMr ? (album.title_mr || album.title_hi) : isHi ? album.title_hi : album.title_en;
  if (descEl) descEl.textContent = isMr ? (album.desc_mr || album.desc_hi) : isHi ? album.desc_hi : album.desc_en;

  const photos = album.photos || [];
  const remotePhotos = album.remote_photos || [];
  if (countEl) countEl.textContent = photos.length;

  gridEl.innerHTML = photos.map((p, idx) => {
    const fallback = remotePhotos[idx] || p;
    return `
      <div class="hover-lift" style="position: relative; aspect-ratio: 1; border-radius: 16px; overflow: hidden; background: var(--surface-subtle); cursor: pointer; border: 1.5px solid var(--border);" onclick="window.openWorkLightbox(${idx})">
        <img 
          src="${p}" 
          alt="${album.title_en} - Photo ${idx + 1}" 
          loading="lazy" 
          decoding="async" 
          onerror="this.onerror=null; this.src='${fallback}';"
          style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" 
        />
        <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 1.5rem;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0">
          🔍
        </div>
      </div>
    `;
  }).join('');

  modal.classList.add('open');
  modal.style.setProperty('display', 'flex', 'important');
  modal.style.setProperty('align-items', 'center', 'important');
  modal.style.setProperty('justify-content', 'center', 'important');
  modal.style.setProperty('position', 'fixed', 'important');
  modal.style.setProperty('inset', '0', 'important');
  modal.style.setProperty('z-index', '999990', 'important');
  document.body.style.overflow = 'hidden';
}

window.openAlbumDetail = function(albumOrId) {
  openAlbumDetail(albumOrId);
};

function updateThemeIcons() {
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  if (sunIcon && moonIcon) {
    if (currentTheme === 'dark') {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }
}

// Render on load
renderPage();
