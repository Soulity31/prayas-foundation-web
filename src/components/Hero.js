export function createHero(content, currentLang) {
  const h = content[currentLang].hero;
  const isHi = currentLang === 'hi';

  const statsList = [
    { num: "487+", label: isHi ? "सशक्त विद्यार्थी" : "Students Empowered", color: "#34d399" },
    { num: "100%", label: isHi ? "बोर्ड परीक्षा उत्तीर्ण" : "Pass Rate in Board Exams", color: "#fbbf24" },
    { num: "15+", label: isHi ? "प्रमुख कल्याण कार्यक्रम" : "Flagship Welfare Programs", color: "#38bdf8" },
    { num: "14+", label: isHi ? "वर्षों की सेवा" : "Years of Community Service", color: "#c084fc" }
  ];

  return `
    <!-- Top Hero Section: School Picture Background with Generous Text Line Spacing -->
    <section class="hero-gradient hero-main-section" id="hero" style="position: relative; padding: 8.5rem 1.5rem 6.5rem; overflow: hidden; background: linear-gradient(180deg, rgba(15, 23, 42, 0.36) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.72) 100%), url('./assets/hero-prayas.jpg') center center/cover no-repeat; min-height: 85vh; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 0 100px rgba(0,0,0,0.5);">
      
      <!-- Subtle Top & Bottom Soft Gradient Edge Blends -->
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 100px; background: linear-gradient(to bottom, rgba(15, 23, 42, 0.8), transparent); pointer-events: none;"></div>
      <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 120px; background: linear-gradient(to top, var(--surface-alt, #0f172a), transparent); pointer-events: none;"></div>

      <div class="container" style="position: relative; z-index: 10; width: 100%; max-width: 1240px; margin: 0 auto; text-align: center;">
        
        <!-- Main Heading: Mumbai Public School - Centered, Extra Bold, Generous Line Spacing -->
        <h1 class="font-display font-extrabold tracking-tight" style="font-size: clamp(2.8rem, 7.5vw, 5.25rem); font-weight: 900; line-height: 1.25; margin-bottom: 1.5rem; color: #ffffff; text-align: center; letter-spacing: -0.02em; text-shadow: 0 6px 35px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.9);">
          ${isHi ? 'मुंबई पब्लिक स्कूल' : 'Mumbai Public School'}
        </h1>

        <!-- (CBSE & SSC) - Centered, Bold, Generous Spacing -->
        <h2 class="font-display font-bold" style="font-size: clamp(2rem, 5vw, 3.85rem); font-weight: 800; line-height: 1.25; margin-bottom: 0; color: #f8fafc; text-align: center; letter-spacing: -0.01em; text-shadow: 0 5px 30px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.9);">
          (CBSE & SSC)
        </h2>

        <!-- 2-3 Lines Below: Managed by Prayas Foundation - Multicolor Text with Ample Line Spacing -->
        <div class="school-managed-by-wrap" style="text-align: center; margin-top: 2.75rem; margin-bottom: 2.75rem;">
          <span class="school-managed-by-rgb" style="font-size: clamp(1.4rem, 3.8vw, 2.75rem); font-weight: 900; line-height: 1.35; letter-spacing: 0.02em; display: inline-block;">
            ${isHi ? 'प्रयास फाउंडेशन द्वारा संचालित' : 'Managed by Prayas Foundation'}
          </span>
        </div>

        <!-- Location Badge: Malvani Township, Malad-W, Mumbai -->
        <div class="hero-location-badge-wrap" style="margin-bottom: 3.25rem;">
          <div style="display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem; background: rgba(15, 23, 42, 0.65); border: 1.5px solid rgba(52, 211, 153, 0.5); padding: 0.75rem 2.25rem; border-radius: 9999px; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); box-shadow: 0 8px 25px rgba(0,0,0,0.45);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.4">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span style="font-size: clamp(1rem, 2.3vw, 1.35rem); font-weight: 700; color: #f8fafc; letter-spacing: 0.03em; line-height: 1.3;">
              Malvani Township, Malad-W, Mumbai
            </span>
          </div>
        </div>

        <!-- CTA Actions: Call Us & WhatsApp (Centered with Generous Spacing) -->
        <div class="hero-actions-wrap" style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem;">
          <a href="tel:+919820500726" class="btn btn-primary btn-lg hover-lift" style="text-decoration: none; box-shadow: 0 12px 30px rgba(16, 185, 129, 0.5); padding: 0.9rem 2.25rem; font-weight: 700; font-size: 1.05rem; line-height: 1.3; display: inline-flex; align-items: center; gap: 0.65rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>${isHi ? 'हमें कॉल करें' : 'Call Us'}</span>
          </a>
          <a href="https://wa.me/919820500726?text=Hello%20Prayas%20Foundation,%20I%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" class="btn btn-lg hover-lift" style="text-decoration: none; background: #25D366; color: #ffffff; border: 1.5px solid #20ba59; box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45); padding: 0.9rem 2.25rem; font-weight: 700; font-size: 1.05rem; line-height: 1.3; display: inline-flex; align-items: center; gap: 0.65rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>${isHi ? 'व्हाट्सएप' : 'WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>

    <!-- Lower Extended Background Color Section: Stats Bar with Scroll-Linked Zoom -->
    <section id="hero-stats-wrapper" style="background: var(--surface-alt, #0f172a); padding: 2.5rem 1.5rem 3.5rem; position: relative; overflow: visible; display: flex; justify-content: center; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
      <div class="container" style="width: 100%; max-width: 1550px; margin: 0 auto; display: flex; justify-content: center;">
        
        <!-- Stats Bar: Doubled Width, Halved Low-Profile Height, Smooth Scroll Linked Contraction/Expansion -->
        <div id="hero-dynamic-zoom-stats" class="stats-grid-card" style="width: 100%; max-width: 1480px; margin: 0 auto; background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%); border: 1.8px solid rgba(52, 211, 153, 0.4); border-radius: 26px; padding: 1.5rem 2.5rem; box-shadow: 0 25px 70px -10px rgba(0,0,0,0.7), 0 0 45px rgba(52, 211, 153, 0.25); transform: translate3d(0, 0, 0) scale(1); transform-origin: center center; transition: box-shadow 0.25s ease, border-color 0.25s ease; will-change: transform, opacity;">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.75rem;" class="md:grid-cols-4">
            ${statsList.map((st) => `
              <div class="stat-item" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0.25rem 0.5rem;">
                <span class="stat-value font-display font-extrabold block" style="font-size: clamp(2.2rem, 3.8vw, 3.4rem); font-weight: 900; line-height: 1; margin-bottom: 0.35rem; color: ${st.color}; text-shadow: 0 3px 16px ${st.color}77, 0 2px 6px rgba(0,0,0,0.85);">
                  ${st.num}
                </span>
                <span class="stat-label block" style="font-size: clamp(0.88rem, 1.3vw, 1.05rem); font-weight: 800; color: #ffffff; line-height: 1.35; letter-spacing: 0.01em; text-shadow: 0 2px 8px rgba(0,0,0,0.8); max-width: 260px;">
                  ${st.label}
                </span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
