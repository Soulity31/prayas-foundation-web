import{i as B,t as x,s as c,c as L,a as I,b as M,d as $,e as k,f as S,g as z,j as C}from"./performance-DZO106Pg.js";import{c as D}from"./SchoolSection-o126Arh_.js";import{c as q}from"./PersonModal-BGG8VCTR.js";let o=localStorage.getItem("prayas_lang");o||(o="mr",localStorage.setItem("prayas_lang","mr"));let p=localStorage.getItem("prayas_theme")||"light";document.documentElement.setAttribute("data-theme",p);document.documentElement.setAttribute("lang",o);B();window.openLanguageModal=function(){let e=document.getElementById("language-modal-overlay");e&&e.parentElement!==document.body&&document.body.appendChild(e),e&&(e.style.setProperty("display","flex","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important"),e.classList.add("open")),document.body.style.overflow="hidden"};window.closeLanguageModal=function(){const e=document.getElementById("language-modal-overlay");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important"),e.classList.remove("open")),document.body.style.overflow=""};window.setPrayasLanguage=function(e){o=e||"mr",localStorage.setItem("prayas_lang",o),document.documentElement.setAttribute("lang",o),window.closeLanguageModal&&window.closeLanguageModal(),window.location.reload()};window.openPrayasMenu=function(){let e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&e.parentElement!==document.body&&document.body.appendChild(e),t&&t.parentElement!==document.body&&document.body.appendChild(t),e&&(e.style.setProperty("display","block","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important")),t&&(t.style.setProperty("display","flex","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("pointer-events","auto","important"),t.style.setProperty("z-index","999999","important")),document.body.style.overflow="hidden"};window.closePrayasMenu=function(){const e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important")),t&&(t.style.setProperty("display","none","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("pointer-events","none","important")),document.body.style.overflow=""};window.togglePrayasMenu=function(e){e?window.openPrayasMenu():window.closePrayasMenu()};function A(){const e=document.getElementById("app");if(!e)return;const t=c[o].school,r=o==="mr",a=o==="hi";e.innerHTML=`
    ${L(c,o,"school")}
    
    <main style="flex: 1;">
      
      <!-- School Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="./index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${r||a?"मुख्य पृष्ठ":"Home"}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${r||a?"मुंबई पब्लिक स्कूल":"Mumbai Public School"}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${t.tagline}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1rem; line-height: 1.2;">
            ${t.heading}
          </h1>
          <p class="font-bold" style="color: var(--primary); font-size: 1.25rem; margin-bottom: 1.25rem;">
            📍 ${t.location}
          </p>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${t.desc}
          </p>
        </div>
      </section>

      <!-- Campus Image & Facility Pillars Section -->
      <section class="section-padding" style="background: var(--surface);">
        <div class="container">
          
          <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: center; margin-bottom: 4rem;" class="lg:grid-cols-2">
            
            <div class="liquid-glass-card" style="padding: 1rem; border-radius: 28px;">
              <div style="aspect-ratio: 16/10; border-radius: var(--radius-xl); overflow: hidden;">
                <img 
                  src="./assets/hero-prayas.jpg" 
                  alt="Mumbai Public School Building, Malvani Township" 
                  style="width: 100%; height: 100%; object-fit: cover;" 
                />
              </div>
            </div>

            <div>
              <span class="glass-badge" style="margin-bottom: 1rem; font-size: 0.95rem; font-weight: 700;">
                ${r||a?"शैक्षणिक उत्कृष्टता":"Academic Excellence"}
              </span>
              <h2 class="font-display font-bold text-foreground text-2xl md:text-3xl" style="margin-bottom: 1.25rem; line-height: 1.3;">
                ${r?"CBSE व SSC दोन्ही माध्यमांमध्ये दर्जेदार शिक्षण":a?"CBSE एवं SSC दोनों धाराओं में गुणवत्तापूर्ण शिक्षा":"Holistic Development across CBSE & SSC Streams"}
              </h2>
              <p class="text-foreground-muted text-base" style="line-height: 1.7; margin-bottom: 1.75rem; font-size: 1.12rem;">
                ${r?"प्रयास फाउंडेशनच्या सक्षम मार्गदर्शनाखाली, मुंबई पब्लिक स्कूल मालवणी येथे वंचित घटकातील बालकांसाठी डिजिटल वर्ग, अनुभवी शिक्षक, वैयक्तिक मार्गदर्शन आणि क्रीडा सुविधा उपलब्ध केल्या जात आहेत.":a?"प्रयास फाउंडेशन के कुशल प्रबंधन के अंतर्गत, मुंबई पब्लिक स्कूल मालवणी में वंचित पृष्ठभूमि के बच्चों को आधुनिक डिजिटल कक्षाएं, अनुभवी शिक्षक, व्यक्तिगत मार्गदर्शन और खेल सुविधाएं सुलभ कराई जा रही हैं।":"Under the dedicated stewardship of Prayas Foundation, Mumbai Public School delivers modern digital pedagogy, expert faculty, personalized remedial support, and comprehensive sports training to local students."}
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div class="liquid-glass-card" style="padding: 1.5rem; border-radius: 20px; border: 1.5px solid var(--border);">
                  <h4 class="font-bold text-primary font-display" style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 0.35rem;">${r?"४८७+":"487+"}</h4>
                  <span style="font-size: 1.05rem; font-weight: 700; color: var(--foreground);">${r?"सक्षम विद्यार्थी":a?"पंजीकृत छात्र":"Active Students"}</span>
                </div>
                <div class="liquid-glass-card" style="padding: 1.5rem; border-radius: 20px; border: 1.5px solid var(--border);">
                  <h4 class="font-bold text-accent font-display" style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 0.35rem;">${r?"१००%":"100%"}</h4>
                  <span style="font-size: 1.05rem; font-weight: 700; color: var(--foreground);">${r?"बोर्ड निकाल उत्तीर्णता":a?"बोर्ड उत्तीर्ण दर":"Board Exam Success"}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- School Pillars & Council -->
          ${D(c,o)}

        </div>
      </section>

    </main>

    ${I(c,o)}
    ${M(c,o)}
    ${$(c,o)}
    ${k(c,o)}
    ${q()}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${S(c,o,"school")}
  `,T()}function T(){try{const d=document.getElementById("lang-toggle-btn");d&&d.addEventListener("click",g=>{g.preventDefault(),window.openLanguageModal()}),document.querySelectorAll(".lang-select-option").forEach(g=>{g.addEventListener("click",()=>{const P=g.dataset.lang||"mr";window.setPrayasLanguage(P)})});const s=document.getElementById("theme-toggle-btn");s&&s.addEventListener("click",()=>{p=p==="light"?"dark":"light",localStorage.setItem("prayas_theme",p),document.documentElement.setAttribute("data-theme",p),w()});const v=document.getElementById("mobile-menu-btn"),h=document.getElementById("close-drawer-btn"),b=document.getElementById("drawer-overlay");v&&v.addEventListener("click",()=>window.togglePrayasMenu(!0)),h&&h.addEventListener("click",()=>window.togglePrayasMenu(!1)),b&&b.addEventListener("click",()=>window.togglePrayasMenu(!1))}catch(d){console.warn("School page listener setup warning:",d)}const e=document.getElementById("nav-donate-btn"),t=document.getElementById("mobile-donate-btn"),r=document.getElementById("donate-modal"),a=document.getElementById("close-donate-modal-btn");function l(d){let s=document.getElementById("donate-modal");s&&(s.parentElement!==document.body&&document.body.appendChild(s),d?(s.classList.add("open"),s.style.setProperty("display","flex","important"),document.body.style.overflow="hidden"):(s.classList.remove("open"),s.style.setProperty("display","none","important"),document.body.style.overflow=""))}e&&e.addEventListener("click",()=>l(!0)),t&&t.addEventListener("click",()=>{window.closePrayasMenu(),l(!0)}),a&&a.addEventListener("click",()=>l(!1)),r&&r.addEventListener("click",d=>{d.target===r&&l(!1)}),z(o);const i=document.getElementById("privacy-modal"),y=document.getElementById("terms-modal"),m=document.getElementById("open-privacy-btn"),n=document.getElementById("open-terms-btn"),u=document.getElementById("close-privacy-modal-btn"),f=document.getElementById("close-terms-modal-btn");m&&i&&m.addEventListener("click",()=>{i.classList.add("open"),document.body.style.overflow="hidden"}),u&&i&&u.addEventListener("click",()=>{i.classList.remove("open"),document.body.style.overflow=""}),n&&y&&n.addEventListener("click",()=>{y.classList.add("open"),document.body.style.overflow="hidden"}),f&&y&&f.addEventListener("click",()=>{y.classList.remove("open"),document.body.style.overflow=""}),H(),j(),w()}function H(){const e=document.getElementById("person-full-detail-modal"),t=document.getElementById("person-full-modal-content"),r=document.getElementById("close-person-modal-btn"),a=document.querySelectorAll(".person-wrapper[data-person-full]");if(!e||!t||!a.length)return;function l(){e.classList.remove("open"),document.body.style.overflow=""}r&&r.addEventListener("click",l),e.addEventListener("click",i=>{i.target===e&&l()}),window.addEventListener("keydown",i=>{i.key==="Escape"&&e.classList.contains("open")&&l()}),a.forEach(i=>{i.addEventListener("click",y=>{y.stopPropagation();try{const m=i.dataset.personFull;if(!m)return;const n=JSON.parse(decodeURIComponent(m));t.innerHTML=`
          <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem;">
            <div style="width: 96px; height: 96px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); flex-shrink: 0; box-shadow: var(--shadow-md);">
              <div style="width: 100%; height: 100%; border-radius: 50%; overflow: hidden; background: var(--surface-subtle); display: flex; align-items: center; justify-content: center;">
                ${n.image?`
                  <img src="${n.image}" alt="${n.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
                `:n.logo?`
                  <img src="${n.logo}" alt="${n.name}" style="width: 80%; height: auto; object-fit: contain;" />
                `:`
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
                ${n.badge||"Pillar of Strength"}
              </span>
              <h3 class="font-display font-bold text-foreground" style="font-size: 1.45rem; line-height: 1.15; margin: 0 0 0.25rem 0;">
                ${n.name}
              </h3>
              <span style="font-size: 0.9rem; color: var(--primary); font-weight: 700;">
                ${n.role}
              </span>
            </div>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-subtle); margin-bottom: 0.4rem;">
              ${o==="hi"?"जीवन परिचय एवं योगदान":"Biography & Governance Overview"}
            </h4>
            <p class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.6; margin: 0;">
              ${n.bio}
            </p>
          </div>

          ${n.achievements?`
            <div style="background: var(--primary-subtle); border-left: 4px solid var(--primary); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--foreground); display: block; margin-bottom: 0.2rem;">
                ⭐ ${o==="hi"?"प्रमुख उपलब्धि":"Key Grassroots Achievement"}:
              </span>
              <span style="font-size: 0.85rem; color: var(--foreground-muted);">
                ${n.achievements}
              </span>
            </div>
          `:""}

          ${n.quote?`
            <blockquote style="font-style: italic; font-size: 0.92rem; color: var(--foreground); font-weight: 600; margin: 0; border-top: 1px solid var(--border); padding-top: 0.85rem;">
              "${n.quote}"
            </blockquote>
          `:""}
        `,e.classList.add("open"),document.body.style.overflow="hidden"}catch(m){console.error("Modal error:",m)}})})}function j(){C(o)}function w(){const e=document.getElementById("theme-icon-sun"),t=document.getElementById("theme-icon-moon");e&&t&&(p==="dark"?(e.style.display="block",t.style.display="none"):(e.style.display="none",t.style.display="block"))}function E(){x(),A()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E,{once:!0}):E();
