function g(r,l,a=!0){const t=l==="mr",o=l==="hi",e=r[l]&&r[l].programs||r.en&&r.en.programs||{},n=e.categories||[{id:"all",label:e.filterAll||(t?"सर्व उपक्रम":o?"सभी कार्यक्रम":"All Programs")},{id:"Education",label:e.filterEducation||(t?"शिक्षण":o?"शिक्षा":"Education")},{id:"Health & Wellbeing",label:e.filterHealth||(t?"आरोग्य आणि निरोगी जीवन":o?"स्वास्थ्य एवं पोषण":"Health & Wellbeing")},{id:"Sports & Fitness",label:e.filterSports||(t?"क्रीडा आणि स्वसंरक्षण":o?"खेल एवं आत्मरक्षा":"Sports & Fitness")},{id:"Life Skills & Civic",label:e.filterLifeSkills||(t?"जीवन कौशल्ये व नागरिक":o?"जीवन कौशल व नागरिक":"Life Skills & Civic")}],d=e.items||r.en&&r.en.programs&&r.en.programs.items||[];return`
    <section class="section-padding" id="programs" style="background: var(--surface); position: relative;">
      <div class="container">
        
        ${a?`
          <!-- Section Header -->
          <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
            <span class="glass-badge" style="margin-bottom: 0.75rem;">
              ${e.tagline||(t?"वर्गाच्या पलीकडे":o?"कक्षा के परे":"Beyond The Classroom")}
            </span>
            <h2 class="font-display font-bold text-foreground" style="font-size: clamp(2rem, 3.5vw, 2.85rem); margin-bottom: 1rem;">
              ${e.heading||(t?"उज्ज्वल भविष्याला आकार देणारे उपक्रम":o?"भविष्य को आकार देने वाले कार्यक्रम":"Programs That Shape Bright Futures")}
            </h2>
            <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.6;">
              ${e.desc||""}
            </p>
          </div>
        `:""}

        <!-- Filter Buttons -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-bottom: 3.5rem;" id="programs-filter-bar">
          ${n.map((i,s)=>`
            <button class="btn btn-sm ${s===0?"btn-primary":"btn-secondary"} program-filter-btn" data-category="${i.id}">
              ${i.label}
            </button>
          `).join("")}
        </div>

        <!-- 16 Programs Cards Grid with Step-by-Step Scroll Focus -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;" id="programs-grid-container" class="programs-3col-grid">
          ${d.map((i,s)=>`
            <div class="liquid-glass-card program-card program-card-step" data-category="${i.category||"all"}" data-event-index="${s}" onclick="window.openProgramLightbox ? window.openProgramLightbox(${s}) : null" style="display: flex; flex-direction: column; cursor: pointer; overflow: hidden; border-radius: 20px;">
              
              <!-- Image Preview Frame (Scales on Row Focus) -->
              <div class="program-img-frame" style="position: relative; height: 190px; width: 100%; overflow: hidden; background: var(--surface-subtle);">
                <img src="${i.img||"./assets/celebrations.jpg"}" alt="${i.title||""}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='./assets/celebrations.jpg';" style="width: 100%; height: 100%; object-fit: cover;" />
                <span class="glass-badge" style="position: absolute; top: 0.85rem; left: 0.85rem; font-size: 0.85rem; font-weight: 800; padding: 0.35rem 0.8rem; background: rgba(0, 0, 0, 0.7); color: #ffffff; border-color: rgba(255, 255, 255, 0.3); z-index: 2;">
                  ${(i.category||"").toUpperCase()}
                </span>
              </div>

              <!-- Content Body (Enlarged Legible Typography) -->
              <div style="padding: 1.5rem 1.35rem; display: flex; flex-direction: column; flex: 1;">
                <h3 class="font-display font-bold text-foreground program-card-title" style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; line-height: 1.3; transition: font-size 0.4s ease, color 0.3s ease;">
                  ${i.title||""}
                </h3>
                <p class="text-foreground-muted program-card-desc" style="font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.25rem; flex: 1; transition: font-size 0.4s ease, color 0.3s ease;">
                  ${i.desc||""}
                </p>
                <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.85rem; border-top: 1px solid var(--border);">
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 0.4rem;">
                    <span>📸</span> ${t?"गॅलरी पहा":o?"गैलरी देखें":"View Gallery"}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--primary);">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

            </div>
          `).join("")}
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
  `}function c(){return`
    <div id="gallery-lightbox-modal" class="lightbox-modal" role="dialog" aria-modal="true" aria-label="Image Preview Lightbox" style="position: fixed; inset: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.92); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 9999999; display: none; align-items: center; justify-content: center; padding: 1.25rem; box-sizing: border-box;" onclick="window.closeProgramLightbox && window.closeProgramLightbox()">
      
      <!-- Top Fixed Close Button (Always visible on all screen sizes) -->
      <button id="lightbox-close-btn" class="lightbox-btn lightbox-close-btn" aria-label="Close Lightbox" title="Close (Esc)" onclick="window.closeProgramLightbox && window.closeProgramLightbox()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <!-- Navigation Buttons (Fixed on Left & Right) -->
      <button id="lightbox-prev-btn" class="lightbox-btn lightbox-nav-prev" aria-label="Previous Image" title="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <button id="lightbox-next-btn" class="lightbox-btn lightbox-nav-next" aria-label="Next Image" title="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <!-- Centered Display Card Container -->
      <div class="lightbox-content liquid-glass-card" style="position: relative; width: 100%; max-width: 860px; max-height: 88vh; background: var(--surface-card); border-radius: 24px; border: 2px solid var(--border); overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 35px 100px rgba(0,0,0,0.8); margin: auto; z-index: 9999999;" onclick="event.stopPropagation()">
        
        <!-- Main Display Image Frame -->
        <div class="lightbox-img-frame" style="width: 100%; max-height: 58vh; overflow: hidden; background: #000000; display: flex; align-items: center; justify-content: center;">
          <img id="lightbox-main-img" src="./assets/celebrations.jpg" alt="Program Detail" class="lightbox-image" onerror="this.onerror=null; this.src='./assets/celebrations.jpg';" style="width: 100%; height: 100%; max-height: 58vh; object-fit: contain; display: block;" />
        </div>

        <!-- Caption Box (High Contrast) -->
        <div id="lightbox-caption" class="lightbox-caption" style="padding: 1.25rem 1.75rem; width: 100%; box-sizing: border-box; background: var(--surface-card); border-top: 1.5px solid var(--border); text-align: center;">
          <h3 id="lightbox-caption-title" class="font-display font-bold text-foreground" style="font-size: 1.35rem; font-weight: 800; margin: 0 0 0.4rem 0; color: var(--foreground);"></h3>
          <p id="lightbox-caption-desc" class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.6; margin: 0; color: var(--foreground-muted);"></p>
        </div>

      </div>
    </div>
  `}export{c as a,g as c};
