export function createAboutSection(content, currentLang) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const m = (content[currentLang] && content[currentLang].mission) || {};
  const l = (content[currentLang] && content[currentLang].leadership) || {};
  const s = (content[currentLang] && content[currentLang].school) || {};

  const pillars = m.pillars || [
    {
      title: isMr ? "शिक्षणाचा हक्क" : isHi ? "शिक्षा का अधिकार" : "Grassroots Education",
      desc: isMr ? "मालवणीतील वंचित विद्यार्थ्यांसाठी आधुनिक आणि गुणवत्तापूर्ण शिक्षण." : isHi ? "मालवणी के वंचित बच्चों के लिए आधुनिक और गुणवत्तापूर्ण शिक्षा।" : "Full school management delivering modern pedagogy and digital learning in Malvani."
    },
    {
      title: isMr ? "आरोग्य आणि पोषण" : isHi ? "स्वास्थ्य और पोषण" : "Holistic Health & Wellness",
      desc: isMr ? "मोफत नेत्र तपासणी शिबिरे आणि संपूर्ण आरोग्य साहाय्य." : isHi ? "निःशुल्क नेत्र जांच शिविर और संपूर्ण स्वास्थ्य सहायता।" : "Comprehensive eye checkups, mental wellness counseling, and nutrition initiatives."
    },
    {
      title: isMr ? "चारित्र्य आणि राष्ट्र उभारणी" : isHi ? "चरित्र और राष्ट्र निर्माण" : "Character & Civic Duty",
      desc: isMr ? "आत्मसंरक्षण, मार्शल आर्ट्स आणि राष्ट्रीय उत्सवांच्या माध्यमातून सक्षमीकरण." : isHi ? "आत्मरक्षा, मार्शल आर्ट्स और राष्ट्रीय पर्वों के माध्यम से सशक्तिकरण।" : "Cultivating leadership, martial arts discipline, and patriotic pride."
    }
  ];

  const founderBio = [l.bio1, l.bio2].filter(Boolean).join(' ') || 
    (isMr ? "१९९८ पासून समाजसेवेत समर्पित, मालवणी आणि मालाड परिसरातील वंचित घटकांच्या उत्थानासाठी अविरत कार्यरत." : isHi ? "1998 से सामाजिक सेवा में समर्पित, मालवणी और मलाड के वंचित वर्ग के उत्थान के लिए निरंतर प्रयासरत।" : "Dedicated volunteer since 1998, working tirelessly for the upliftment and welfare of underprivileged families in Mumbai.");

  const councilItems = s.council || [];

  return `
    <section class="section-padding" id="about" style="background: var(--surface-alt); position: relative;">
      <div class="container">
        
        <!-- Section Header -->
        <div style="text-align: center; max-width: 780px; margin: 0 auto 3.5rem;">
          <span class="glass-badge" style="margin-bottom: 0.75rem;">
            ${m.tagline || (isMr ? 'आमचे उद्दिष्ट व ध्येय' : isHi ? 'हमारा उद्देश्य व मिशन' : 'Our Purpose & Mission')}
          </span>
          <h2 class="font-display font-bold text-foreground" style="font-size: clamp(2rem, 3.5vw, 2.85rem); margin-bottom: 1rem;">
            ${m.heading || (isMr ? 'सामूहिक प्रयत्नांतून जीवन परिवर्तन' : isHi ? 'सामूहिक प्रयास से जीवन परिवर्तन' : 'Transforming Lives Through Collective Action')}
          </h2>
          <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.6;">
            ${m.desc || ''}
          </p>
        </div>

        <!-- 3 Core Pillars -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 2rem; margin-bottom: 4.5rem;">
          ${pillars.map((pillar, idx) => `
            <div class="liquid-glass-card hover-lift" style="padding: 2.25rem 1.75rem; display: flex; flex-direction: column;">
              <div style="width: 56px; height: 56px; border-radius: var(--radius-lg); background: ${idx === 0 ? 'var(--primary-subtle)' : idx === 1 ? 'var(--secondary-light)' : 'var(--accent-light)'}; color: ${idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : 'var(--accent)'}; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; margin-bottom: 1.25rem; box-shadow: var(--shadow-sm);">
                ${idx === 0 ? '🎓' : idx === 1 ? '🍲' : '🩺'}
              </div>
              <h3 class="font-display font-bold text-foreground" style="font-size: 1.25rem; margin-bottom: 0.6rem;">
                ${pillar.title}
              </h3>
              <p class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.6; margin: 0; flex: 1;">
                ${pillar.desc}
              </p>
            </div>
          `).join('')}
        </div>

        <!-- Founder Spotlight Banner -->
        <div class="liquid-glass-card" style="padding: 3rem 2.25rem; margin-bottom: 4.5rem; background: var(--gradient-card);">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2.5rem;">
            
            <div style="position: relative; flex-shrink: 0; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
              <div style="width: 145px; height: 145px; border-radius: 50%; padding: 4px; background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); box-shadow: var(--shadow-lg);">
                <div style="width: 100%; height: 100%; border-radius: 50%; overflow: hidden; background: var(--surface-card);">
                  <img src="./assets/brijesh-singh.png" alt="${l.name || 'Shri Brijesh Singh'}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
                </div>
              </div>
              <span style="display: inline-block; margin-top: -12px; z-index: 10; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff !important; font-weight: 800; font-size: 0.78rem; padding: 0.25rem 0.85rem; border-radius: 999px; border: 2.5px solid var(--surface-card); box-shadow: 0 4px 12px rgba(0,0,0,0.25); white-space: nowrap;">
                ${isMr ? 'संस्थापक' : isHi ? 'संस्थापक' : 'Founder'}
              </span>
            </div>

            <div style="flex: 1; min-width: 290px;">
              <span class="glass-badge" style="margin-bottom: 0.5rem;">
                ${l.tagline || (isMr ? 'दूरदर्शी नेतृत्व' : isHi ? 'दूरदर्शी नेतृत्व' : 'Visionary Leadership')}
              </span>
              <h3 class="font-display font-bold text-foreground" style="font-size: clamp(1.4rem, 2.5vw, 1.85rem); margin-bottom: 0.25rem;">
                ${l.name || 'Brijesh Singh'}
              </h3>
              <p style="font-size: 0.925rem; color: var(--primary); font-weight: 700; margin-bottom: 1rem;">
                ${l.role || (isMr ? 'संस्थापक व अध्यक्ष, प्रयास फाउंडेशन' : isHi ? 'संस्थापक एवं अध्यक्ष, प्रयास फाउंडेशन' : 'Founder & Chairman, Prayas Foundation')}
              </p>
              <p class="text-foreground-muted" style="font-size: 0.975rem; line-height: 1.6; margin-bottom: 1.25rem;">
                ${founderBio}
              </p>
              ${l.quote ? `
                <blockquote style="font-style: italic; font-size: 0.92rem; color: var(--foreground); font-weight: 600; margin: 0 0 1.25rem; padding-left: 1rem; border-left: 3px solid var(--primary);">
                  "${l.quote}"
                </blockquote>
              ` : ''}
              <div>
                <a href="./about.html" class="btn btn-secondary btn-sm" style="text-decoration: none;">
                  ${isMr ? 'सविस्तर नेतृत्व माहिती वाचा →' : isHi ? 'विस्तृत नेतृत्व प्रोफ़ाइल पढ़ें →' : 'Read Full Leadership Profile →'}
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Rounded Squircle Section End Divider -->
        <div class="section-squircle-divider">
          <div class="squircle-line"></div>
          <div class="squircle-chip">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div class="squircle-line"></div>
        </div>

      </div>
    </section>
  `;
}

