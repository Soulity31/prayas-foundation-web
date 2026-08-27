export function createSchoolSection(content, currentLang) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const s = (content[currentLang] && content[currentLang].school) || (content['en'] && content['en'].school) || {};
  const council = s.council || (content['en'] && content['en'].school && content['en'].school.council) || [];

  return `
    <section id="school" class="section-padding" style="background: var(--surface-alt); position: relative;">
      <div class="container">
        
        <!-- Pillars of Strength Section Header (High Contrast, Clean & Readable) -->
        <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
          <span class="glass-badge" style="margin-bottom: 0.75rem;">
            ${isMr ? 'मार्गदर्शन आणि नेतृत्व' : isHi ? 'मार्गदर्शन एवं नेतृत्व' : 'Governance & Guidance'}
          </span>
          <h2 class="font-display font-bold text-foreground" style="font-size: clamp(2rem, 4.2vw, 2.85rem); margin-bottom: 0.65rem; color: var(--foreground);">
            ${s.pillarsTitle || (isMr ? 'सामर्थ्याचे आधारस्तंभ' : isHi ? 'शक्ति के आधार स्तंभ' : 'Pillars of Strength')}
          </h2>
          <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.65; max-width: 650px; margin: 0 auto; color: var(--foreground-muted);">
            ${s.pillarsSubtitle || (isMr ? 'मुंबई पब्लिक स्कूलच्या व्यवस्थापन आणि मार्गदर्शनासाठी समर्पित नेतृत्व.' : isHi ? 'मुंबई पब्लिक स्कूल के प्रबंधन और मार्गदर्शन में समर्पित नेतृत्व।' : 'The dedicated individuals and patrons behind the governance and management of Mumbai Public School.')}
          </p>
        </div>

        <!-- Pillars of Strength Card Container (High Contrast Background & Crisp Typography) -->
        <div class="liquid-glass-card" style="padding: 3rem 2rem; background: var(--surface-card); border-radius: 28px; border: 1.5px solid var(--border); box-shadow: var(--shadow-lg);">
          
          <!-- Council Members Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 2rem; justify-items: center;">
            ${council.map(c => {
              const isCgPower = c.logo || (c.name && (c.name.toLowerCase().includes('cg power') || c.name.includes('सीजी पॉवर') || c.name.includes('सीजी पावर')));
              const logoPath = isCgPower ? (c.logo || './assets/cg-power.png') : null;
              const personData = {
                name: c.name,
                role: c.role,
                image: c.image || null,
                logo: logoPath,
                badge: isMr ? 'आधारस्तंभ' : isHi ? 'आधार स्तंभ' : 'Pillar of Strength',
                bio: isMr ? `${c.name} हे मुंबई पब्लिक स्कूल, मालवणीच्या शैक्षणिक आणि सर्वांगीण विकासासाठी समर्पित मार्गदर्शक आहेत.` : isHi ? `${c.name} मुंबई पब्लिक स्कूल, मालवणी के शैक्षणिक और समग्र विकास में निरंतर समर्पित मार्गदर्शक हैं।` : `${c.name} serves as a key pillar in the governance, pedagogical excellence, and community mentorship of Mumbai Public School, Malvani.`,
                achievements: isMr ? 'समग्र शिक्षण आणि विद्यार्थी कल्याणात सातत्यपूर्ण योगदान' : isHi ? 'समग्र शिक्षा और छात्र कल्याण में निरंतर योगदान' : 'Active leadership guiding holistic education and child welfare.',
                quote: isMr ? 'दर्जेदार शिक्षण हा प्रत्येक बालकाचा मूलभूत हक्क आहे.' : isHi ? 'गुणवत्तापूर्ण शिक्षा प्रत्येक बच्चे का जन्मसिद्ध अधिकार है।' : 'Quality education and character building are the birthrights of every child.'
              };
              const rawData = encodeURIComponent(JSON.stringify(personData));

              return `
                <div class="person-wrapper hover-lift" data-person-full="${rawData}" style="display: flex; flex-direction: column; align-items: center; text-align: center; max-width: 150px; cursor: pointer;">
                  
                  <!-- Avatar Container with High Contrast Ring -->
                  <div class="person-avatar-large" style="width: 82px; height: 82px; margin-bottom: 0.85rem;">
                    <div class="person-avatar-inner" style="border: 2px solid var(--primary); background: var(--surface-subtle); display: flex; align-items: center; justify-content: center; overflow: hidden; padding: ${logoPath ? '4px' : '0'};">
                      ${c.image ? `
                        <img src="${c.image}" alt="${c.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
                      ` : logoPath ? `
                        <img src="${logoPath}" alt="${c.name}" style="width: 90%; height: auto; max-height: 90%; object-fit: contain;" />
                      ` : `
                        <div class="liquid-avatar-gradient-icon" style="width: 100%; height: 100%;">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #ffffff; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                      `}
                    </div>
                  </div>

                  <!-- High Contrast Name & Role -->
                  <h4 class="font-bold text-foreground" style="font-size: 0.95rem; line-height: 1.3; margin-bottom: 0.3rem; color: var(--foreground); font-weight: 700;">
                    ${c.name}
                  </h4>
                  <span style="font-size: 0.8rem; color: var(--foreground-muted); line-height: 1.35; font-weight: 500;">
                    ${c.role}
                  </span>
                  <span style="font-size: 0.72rem; color: var(--primary); font-weight: 700; margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.25rem;">
                    ${isMr ? 'माहिती पहा' : isHi ? 'विवरण देखें' : 'Click for profile'} &rarr;
                  </span>
                </div>
              `;
            }).join('')}
          </div>

        </div>

      </div>
    </section>
  `;
}

