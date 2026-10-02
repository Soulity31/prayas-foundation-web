import { workAlbumsData } from '../data/workContent.js';

export function createWorkSection(content, currentLang, showHeader = true) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  const categories = [
    { id: 'all', label: isMr ? 'सर्व कार्य व उपक्रम' : isHi ? 'सभी कार्य एवं पहल' : 'All Initiatives' },
    { id: 'Cultural & Spiritual', label: isMr ? 'सांस्कृतिक व आध्यात्मिक' : isHi ? 'सांस्कृतिक एवं आध्यात्मिक' : 'Cultural & Spiritual' },
    { id: 'Women Welfare & Festivities', label: isMr ? 'महिला कल्याण व सण-उत्सव' : isHi ? 'महिला कल्याण एवं उत्सव' : 'Women Welfare' },
    { id: 'Youth & Sports', label: isMr ? 'युवा व क्रीडा उपक्रम' : isHi ? 'युवा एवं क्रीड़ा' : 'Youth & Sports' },
    { id: 'Community Welfare', label: isMr ? 'सामुदायिक सेवा' : isHi ? 'सामुदायिक सेवा' : 'Community Welfare' },
    { id: 'Social Welfare & Food Relief', label: isMr ? 'अन्नदान व समाज सेवा' : isHi ? 'अन्नदान एवं समाज सेवा' : 'Food Relief & Seva' }
  ];

  return `
    <section class="section-padding" id="our-work" style="background: var(--surface); position: relative;">
      <div class="container">
        
        ${showHeader ? `
          <!-- Section Header -->
          <div style="text-align: center; max-width: 850px; margin: 0 auto 3.5rem;">
            <span class="glass-badge-gold" style="margin-bottom: 0.85rem; font-size: 1rem; padding: 0.4rem 1.15rem;">
              ${isMr ? 'तळागाळातील प्रत्यक्ष जनसेवा' : isHi ? 'जमीनी स्तर पर प्रत्यक्ष सेवा' : 'Grassroots Social Action & Events'}
            </span>
            <h2 class="font-display font-bold text-foreground" style="font-size: clamp(2.2rem, 4vw, 3.2rem); margin-bottom: 1.15rem; line-height: 1.2;">
              ${isMr ? 'आमचे कार्य: सेवा, संस्कृती आणि जनकल्याण' : isHi ? 'हमारा कार्य: सेवा, संस्कृति एवं जन-कल्याण' : 'Our Work: Initiatives, Welfare & Gatherings'}
            </h2>
            <p class="text-foreground-muted" style="font-size: 1.15rem; line-height: 1.7;">
              ${isMr 
                ? 'प्रयास फाउंडेशनद्वारे मुंबईत शिक्षणासोबतच अन्नदान, सांस्कृतिक उत्सव, महिला सन्मान आणि जनकल्याणाच्या क्षेत्रात आयोजित प्रमुख उपक्रमांची सचित्र झलक.'
                : isHi 
                ? 'प्रयास फाउंडेशन द्वारा मुंबई में शिक्षा के साथ-साथ अन्नदान, सांस्कृतिक उत्सव, महिला सम्मान और जन-कल्याण के क्षेत्र में आयोजित प्रमुख कार्यक्रमों की सचित्र झलकियाँ।' 
                : 'Browse photo and video albums of Prayas Foundation grassroots initiatives: cultural celebrations, Annadaan, women empowerment, sports, and community welfare in Mumbai.'}
            </p>
          </div>
        ` : ''}

        <!-- Filter Categories Bar -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-bottom: 3.5rem;" id="work-filter-bar">
          ${categories.map((cat, idx) => `
            <button class="btn btn-sm ${idx === 0 ? 'btn-primary' : 'btn-secondary'} work-filter-btn" data-category="${cat.id}" style="font-size: 0.95rem; font-weight: 700; padding: 0.55rem 1.15rem; border-radius: 999px; cursor: pointer;">
              ${cat.label}
            </button>
          `).join('')}
        </div>

        <!-- Work Albums Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2.25rem;" id="work-albums-grid">
          ${workAlbumsData.map((album, idx) => {
            const title = isMr ? (album.title_mr || album.title_hi) : isHi ? album.title_hi : album.title_en;
            const desc = isMr ? (album.desc_mr || album.desc_hi) : isHi ? album.desc_hi : album.desc_en;
            const catLabel = isMr ? (album.category_mr || album.category_hi) : isHi ? album.category_hi : album.category;
            const photoCount = (album.photos || []).length;

            return `
              <div class="liquid-glass-card work-album-card hover-lift" data-album-id="${album.id}" data-category="${album.category}" onclick="window.openAlbumDetail ? window.openAlbumDetail('${album.id}') : null" style="display: flex; flex-direction: column; overflow: hidden; border-radius: 24px; border: 1.5px solid var(--border); cursor: pointer; transition: all 0.35s ease;">
                
                <!-- Album Cover Image Frame -->
                <div style="position: relative; height: 240px; width: 100%; overflow: hidden; background: var(--surface-subtle);">
                  <img 
                    src="${album.cover_image}" 
                    alt="${title}" 
                    loading="lazy" 
                    decoding="async" 
                    onerror="this.onerror=null; this.src='${album.remote_cover || './assets/celebrations.jpg'}';"
                    style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;" 
                    class="album-cover-img"
                  />
                  
                  <!-- Gradient Overlay -->
                  <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%); pointer-events: none;"></div>

                  <!-- Category Tag -->
                  <span class="glass-badge" style="position: absolute; top: 1rem; left: 1rem; font-size: 0.85rem; font-weight: 800; padding: 0.35rem 0.85rem; background: rgba(0, 0, 0, 0.7); color: #ffffff; border-color: rgba(255, 255, 255, 0.3); z-index: 2;">
                    ${catLabel}
                  </span>

                  <!-- Photos Count Floating Badge -->
                  <div style="position: absolute; bottom: 1rem; right: 1rem; z-index: 2; background: rgba(16, 185, 129, 0.9); color: #ffffff; padding: 0.35rem 0.85rem; border-radius: 999px; font-size: 0.85rem; font-weight: 800; display: inline-flex; align-items: center; gap: 0.4rem; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                    <span>📸</span> ${photoCount} ${isMr ? 'छायाचित्रे' : isHi ? 'तस्वीरें' : 'Photos'}
                  </div>
                </div>

                <!-- Album Details -->
                <div style="padding: 1.75rem 1.5rem; display: flex; flex-direction: column; flex: 1;">
                  <h3 class="font-display font-bold text-foreground" style="font-size: 1.35rem; margin-bottom: 0.65rem; line-height: 1.3;">
                    ${title}
                  </h3>
                  
                  <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem; flex: 1;">
                    ${desc}
                  </p>

                  <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border);">
                    <span style="font-size: 0.95rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 0.45rem;">
                      <span>🖼️</span> ${isMr ? 'संपूर्ण अल्बम पहा' : isHi ? 'एल्बम खोलें' : 'View Full Album'}
                    </span>
                    <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--primary-subtle); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 800;">
                      →
                    </div>
                  </div>
                </div>

              </div>
            `;
          }).join('')}
        </div>

      </div>
    </section>
  `;
}
