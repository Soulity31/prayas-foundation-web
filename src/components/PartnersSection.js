export function createPartnersSection(content, currentLang, showHeader = true) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const p = (content[currentLang] && content[currentLang].partners) || (content['en'] && content['en'].partners) || {};
  const partnerList = p.list || (content['en'] && content['en'].partners && content['en'].partners.list) || [];

  return `
    <section id="partners" class="section-padding" style="background: var(--surface); position: relative;">
      <div class="container">
        
        ${showHeader ? `
          <!-- Header (Enlarged Text & Prominent Hierarchy) -->
          <div style="text-align: center; max-width: 850px; margin: 0 auto 3.5rem;">
            <span class="glass-badge" style="margin-bottom: 0.85rem; font-size: 0.85rem; padding: 0.35rem 0.95rem;">
              ${p.tagline || (isMr ? 'प्रगतीत भागीदार' : isHi ? 'प्रगति में सहयोगी' : 'Partners in Progress')}
            </span>
            <h2 class="font-display font-bold text-foreground" style="font-size: clamp(2.1rem, 3.8vw, 3.1rem); margin-bottom: 1.15rem; line-height: 1.2;">
              ${p.heading || (isMr ? 'जमिनी स्तरावर परिवर्तनासाठी सहकार्य' : isHi ? 'जमीनी स्तर पर प्रभाव के लिए सहयोग' : 'Collaborating for Grassroots Impact')}
            </h2>
            <p class="text-foreground-muted" style="font-size: 1.2rem; line-height: 1.7; max-width: 780px; margin: 0 auto;">
              ${p.desc || ''}
            </p>
          </div>
        ` : ''}

        <!-- Partners Grid (Enlarged Logos & Prominent Cards) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem;" class="partners-large-grid">
          ${partnerList.map(partner => `
            <div class="liquid-glass-card partner-logo-card hover-lift" style="padding: 2rem 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between; text-align: center; border: 1.5px solid var(--border); border-radius: 28px;">
              
              <!-- Large Logo Container -->
              <div class="partner-logo-frame" style="height: 120px; width: 100%; display: flex; align-items: center; justify-content: center; padding: 1rem; background: var(--surface-subtle); border-radius: var(--radius-lg); margin-bottom: 1.35rem; border: 1px solid var(--divider);">
                <img 
                  src="${partner.logo}" 
                  alt="${partner.name}" 
                  class="partner-logo-img-large"
                  loading="lazy"
                  decoding="async"
                  style="max-height: 90px; height: 90px; width: auto; max-width: 220px; object-fit: contain; transition: transform 0.35s ease;"
                />
              </div>

              <!-- Partner Info (Bigger Typography) -->
              <div style="display: flex; flex-direction: column; align-items: center; gap: 0.45rem; width: 100%;">
                <h3 class="font-display font-bold text-foreground" style="font-size: 1.22rem; line-height: 1.35; margin: 0;">
                  ${partner.name}
                </h3>
                <span class="glass-badge" style="font-size: 0.85rem; font-weight: 600; color: var(--primary); padding: 0.25rem 0.75rem; display: inline-block;">
                  ${partner.type}
                </span>
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

