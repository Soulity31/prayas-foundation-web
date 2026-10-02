function g(o,r){const i=r==="mr",a=r==="hi",n=o[r]&&o[r].school||o.en&&o.en.school||{},l=n.council||o.en&&o.en.school&&o.en.school.council||[];return`
    <section id="school" class="section-padding" style="background: var(--surface-alt); position: relative;">
      <div class="container">
        
        <!-- Pillars of Strength Section Header (High Contrast, Clean & Readable) -->
        <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
          <span class="glass-badge" style="margin-bottom: 0.75rem;">
            ${i?"मार्गदर्शन आणि नेतृत्व":a?"मार्गदर्शन एवं नेतृत्व":"Governance & Guidance"}
          </span>
          <h2 class="font-display font-bold text-foreground" style="font-size: clamp(2rem, 4.2vw, 2.85rem); margin-bottom: 0.65rem; color: var(--foreground);">
            ${n.pillarsTitle||(i?"सामर्थ्याचे आधारस्तंभ":a?"शक्ति के आधार स्तंभ":"Pillars of Strength")}
          </h2>
          <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.65; max-width: 650px; margin: 0 auto; color: var(--foreground-muted);">
            ${n.pillarsSubtitle||(i?"मुंबई पब्लिक स्कूलच्या व्यवस्थापन आणि मार्गदर्शनासाठी समर्पित नेतृत्व.":a?"मुंबई पब्लिक स्कूल के प्रबंधन और मार्गदर्शन में समर्पित नेतृत्व।":"The dedicated individuals and patrons behind the governance and management of Mumbai Public School.")}
          </p>
        </div>

        <!-- Pillars of Strength Card Container (High Contrast Background & Crisp Typography) -->
        <div class="liquid-glass-card" style="padding: 3rem 2rem; background: var(--surface-card); border-radius: 28px; border: 1.5px solid var(--border); box-shadow: var(--shadow-lg);">
          
          <!-- Council Members Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 2rem; justify-items: center;">
            ${l.map(e=>{const t=e.logo||e.name&&(e.name.toLowerCase().includes("cg power")||e.name.includes("सीजी पॉवर")||e.name.includes("सीजी पावर"))?e.logo||"./assets/cg-power.png":null,s={name:e.name,role:e.role,image:e.image||null,logo:t,badge:i?"आधारस्तंभ":a?"आधार स्तंभ":"Pillar of Strength",bio:i?`${e.name} हे मुंबई पब्लिक स्कूल, मालवणीच्या शैक्षणिक आणि सर्वांगीण विकासासाठी समर्पित मार्गदर्शक आहेत.`:a?`${e.name} मुंबई पब्लिक स्कूल, मालवणी के शैक्षणिक और समग्र विकास में निरंतर समर्पित मार्गदर्शक हैं।`:`${e.name} serves as a key pillar in the governance, pedagogical excellence, and community mentorship of Mumbai Public School, Malvani.`,achievements:i?"समग्र शिक्षण आणि विद्यार्थी कल्याणात सातत्यपूर्ण योगदान":a?"समग्र शिक्षा और छात्र कल्याण में निरंतर योगदान":"Active leadership guiding holistic education and child welfare.",quote:i?"दर्जेदार शिक्षण हा प्रत्येक बालकाचा मूलभूत हक्क आहे.":a?"गुणवत्तापूर्ण शिक्षा प्रत्येक बच्चे का जन्मसिद्ध अधिकार है।":"Quality education and character building are the birthrights of every child."};return`
                <div class="person-wrapper hover-lift" data-person-full="${encodeURIComponent(JSON.stringify(s))}" style="display: flex; flex-direction: column; align-items: center; text-align: center; max-width: 150px; cursor: pointer;">
                  
                  <!-- Avatar Container with High Contrast Ring -->
                  <div class="person-avatar-large" style="width: 82px; height: 82px; margin-bottom: 0.85rem;">
                    <div class="person-avatar-inner" style="border: 2px solid var(--primary); background: var(--surface-subtle); display: flex; align-items: center; justify-content: center; overflow: hidden; padding: ${t?"4px":"0"};">
                      ${e.image?`
                        <img src="${e.image}" alt="${e.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
                      `:t?`
                        <img src="${t}" alt="${e.name}" style="width: 90%; height: auto; max-height: 90%; object-fit: contain;" />
                      `:`
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
                    ${e.name}
                  </h4>
                  <span style="font-size: 0.8rem; color: var(--foreground-muted); line-height: 1.35; font-weight: 500;">
                    ${e.role}
                  </span>
                  <span style="font-size: 0.72rem; color: var(--primary); font-weight: 700; margin-top: 0.5rem; display: inline-flex; align-items: center; gap: 0.25rem;">
                    ${i?"माहिती पहा":a?"विवरण देखें":"Click for profile"} &rarr;
                  </span>
                </div>
              `}).join("")}
          </div>

        </div>

      </div>
    </section>
  `}export{g as c};
