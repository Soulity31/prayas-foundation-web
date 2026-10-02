export function createProgramsSection(content, currentLang, showHeader = true) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const prog = (content[currentLang] && content[currentLang].programs) || (content['en'] && content['en'].programs) || {};

  const categories = prog.categories || [
    { id: 'all', label: prog.filterAll || (isMr ? 'सर्व उपक्रम' : isHi ? 'सभी कार्यक्रम' : 'All Programs') },
    { id: 'Education', label: prog.filterEducation || (isMr ? 'शिक्षण' : isHi ? 'शिक्षा' : 'Education') },
    { id: 'Health & Wellbeing', label: prog.filterHealth || (isMr ? 'आरोग्य आणि निरोगी जीवन' : isHi ? 'स्वास्थ्य एवं पोषण' : 'Health & Wellbeing') },
    { id: 'Sports & Fitness', label: prog.filterSports || (isMr ? 'क्रीडा आणि स्वसंरक्षण' : isHi ? 'खेल एवं आत्मरक्षा' : 'Sports & Fitness') },
    { id: 'Life Skills & Civic', label: prog.filterLifeSkills || (isMr ? 'जीवन कौशल्ये व नागरिक' : isHi ? 'जीवन कौशल व नागरिक' : 'Life Skills & Civic') }
  ];

  const items = prog.items || (content['en'] && content['en'].programs && content['en'].programs.items) || [];

  return `
    <section class="section-padding" id="programs" style="background: var(--surface); position: relative;">
      <div class="container">
        
        ${showHeader ? `
          <!-- Section Header -->
          <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
            <span class="glass-badge" style="margin-bottom: 0.75rem;">
              ${prog.tagline || (isMr ? 'वर्गाच्या पलीकडे' : isHi ? 'कक्षा के परे' : 'Beyond The Classroom')}
            </span>
            <h2 class="font-display font-bold text-foreground" style="font-size: clamp(2rem, 3.5vw, 2.85rem); margin-bottom: 1rem;">
              ${prog.heading || (isMr ? 'उज्ज्वल भविष्याला आकार देणारे उपक्रम' : isHi ? 'भविष्य को आकार देने वाले कार्यक्रम' : 'Programs That Shape Bright Futures')}
            </h2>
            <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.6;">
              ${prog.desc || ''}
            </p>
          </div>
        ` : ''}

        <!-- Filter Buttons -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-bottom: 3.5rem;" id="programs-filter-bar">
          ${categories.map((cat, idx) => `
            <button class="btn btn-sm ${idx === 0 ? 'btn-primary' : 'btn-secondary'} program-filter-btn" data-category="${cat.id}">
              ${cat.label}
            </button>
          `).join('')}
        </div>

        <!-- 16 Programs Cards Grid with Step-by-Step Scroll Focus -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;" id="programs-grid-container" class="programs-3col-grid">
          ${items.map((item, idx) => `
            <div class="liquid-glass-card program-card program-card-step" data-category="${item.category || 'all'}" data-event-index="${idx}" onclick="window.openProgramLightbox ? window.openProgramLightbox(${idx}) : null" style="display: flex; flex-direction: column; cursor: pointer; overflow: hidden; border-radius: 20px;">
              
              <!-- Image Preview Frame (Scales on Row Focus) -->
              <div class="program-img-frame" style="position: relative; height: 190px; width: 100%; overflow: hidden; background: var(--surface-subtle);">
                <img src="${item.img || './assets/celebrations.jpg'}" alt="${item.title || ''}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='./assets/celebrations.jpg';" style="width: 100%; height: 100%; object-fit: cover;" />
                <span class="glass-badge" style="position: absolute; top: 0.85rem; left: 0.85rem; font-size: 0.85rem; font-weight: 800; padding: 0.35rem 0.8rem; background: rgba(0, 0, 0, 0.7); color: #ffffff; border-color: rgba(255, 255, 255, 0.3); z-index: 2;">
                  ${(item.category || '').toUpperCase()}
                </span>
              </div>

              <!-- Content Body (Enlarged Legible Typography) -->
              <div style="padding: 1.5rem 1.35rem; display: flex; flex-direction: column; flex: 1;">
                <h3 class="font-display font-bold text-foreground program-card-title" style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; line-height: 1.3; transition: font-size 0.4s ease, color 0.3s ease;">
                  ${item.title || ''}
                </h3>
                <p class="text-foreground-muted program-card-desc" style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.25rem; flex: 1; transition: font-size 0.4s ease, color 0.3s ease;">
                  ${item.desc || ''}
                </p>
                <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.85rem; border-top: 1px solid var(--border);">
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 0.4rem;">
                    <span>📸</span> ${isMr ? 'गॅलरी पहा' : isHi ? 'गैलरी देखें' : 'View Gallery'}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--primary);">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

            </div>
          `).join('')}
        </div>

        <!-- Rounded Squircle Section End Divider -->
        <div class="section-squircle-divider">
          <div class="squircle-line"></div>
          <div class="squircle-chip">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          <div class="squircle-line"></div>
        </div>

      </div>
    </section>
  `;
}

