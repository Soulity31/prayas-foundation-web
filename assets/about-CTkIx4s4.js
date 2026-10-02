import{i as k,t as $,s as l,c as w,a as x,b as I,d as M,e as S,f as C,g as z,h as E,j as D}from"./performance-DZO106Pg.js";import{c as q,a as A}from"./PartnersSection-DgnNLH7I.js";import{c as R}from"./PersonModal-BGG8VCTR.js";let a=localStorage.getItem("prayas_lang");a||(a="mr",localStorage.setItem("prayas_lang","mr"));let u=localStorage.getItem("prayas_theme")||"light";document.documentElement.setAttribute("data-theme",u);document.documentElement.setAttribute("lang",a);k();window.openLanguageModal=function(){let e=document.getElementById("language-modal-overlay");e&&e.parentElement!==document.body&&document.body.appendChild(e),e&&(e.style.setProperty("display","flex","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important"),e.classList.add("open")),document.body.style.overflow="hidden"};window.closeLanguageModal=function(){const e=document.getElementById("language-modal-overlay");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important"),e.classList.remove("open")),document.body.style.overflow=""};window.setPrayasLanguage=function(e){a=e||"mr",localStorage.setItem("prayas_lang",a),document.documentElement.setAttribute("lang",a),window.closeLanguageModal&&window.closeLanguageModal(),window.location.reload()};window.openPrayasMenu=function(){let e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&e.parentElement!==document.body&&document.body.appendChild(e),t&&t.parentElement!==document.body&&document.body.appendChild(t),e&&(e.style.setProperty("display","block","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important")),t&&(t.style.setProperty("display","flex","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("pointer-events","auto","important"),t.style.setProperty("z-index","999999","important")),document.body.style.overflow="hidden"};window.closePrayasMenu=function(){const e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important")),t&&(t.style.setProperty("display","none","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("pointer-events","none","important")),document.body.style.overflow=""};window.togglePrayasMenu=function(e){e?window.openPrayasMenu():window.closePrayasMenu()};function H(){const e=document.getElementById("app");if(e)try{const t=l[a]||l.mr||l.en,s=t.mission||t.about||l.en.mission,r=t.leadership||l.en.leadership,i=a==="mr",o=a==="hi",c=s&&s.pillars||t.about&&t.about.pillars||l.en.mission&&l.en.mission.pillars||[];e.innerHTML=`
      ${w(l,a,"about")}
      
      <main style="flex: 1;">
        
        <!-- Page Hero Header with Breadcrumbs -->
        <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
          <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
            <div style="margin-bottom: 1rem;">
              <a href="./index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
                ${i||o?"मुख्य पृष्ठ":"Home"}
              </a>
              <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
              <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
                ${i?"आमच्याबद्दल":o?"हमारे बारे में":"About Us"}
              </span>
            </div>

            <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
              ${s.tagline||(i?"आमचा उद्देश आणि ध्येय":o?"हमारा उद्देश्य व मिशन":"Our Purpose & Mission")}
            </span>
            <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1.25rem; line-height: 1.2;">
              ${i?"आमची यशोगाथा, ध्येय आणि नेतृत्व रचना":o?"हमारी कहानी, मिशन और संगठनात्मक नेतृत्व":"Our Story, Mission & Leadership"}
            </h1>
            <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
              ${s.desc||""}
            </p>
          </div>
        </section>

        <!-- 3 Core Pillars Section -->
        <section class="section-padding" style="background: var(--surface);">
          <div class="container">
            <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;" class="md:grid-cols-3">
              ${c.map((d,n)=>`
              <div class="liquid-glass-card hover-lift" style="padding: 2.25rem; border-radius: 24px;">
                <div style="width: 56px; height: 56px; border-radius: var(--radius-lg); background: ${n===0?"rgba(16, 185, 129, 0.15)":n===1?"rgba(245, 158, 11, 0.15)":"rgba(13, 148, 136, 0.15)"}; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: ${n===0?"var(--primary)":n===1?"var(--accent)":"var(--secondary)"};">
                  ${n===0?`
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
                  `:n===1?`
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  `:`
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  `}
                </div>
                <h3 class="font-display font-bold text-foreground" style="font-size: 1.35rem; margin-bottom: 0.85rem;">
                  ${d.title}
                </h3>
                <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.65;">
                  ${d.desc}
                </p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Founder Brijesh Singh Feature Section -->
      <section class="section-padding" style="background: var(--surface-alt);">
        <div class="container">
          <div class="liquid-glass-card" style="padding: 3rem; background: var(--gradient-card); border-radius: 28px;">
            <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;" class="lg:grid-cols-12">
              
              <div class="lg:col-span-4 text-center" style="display: flex; flex-direction: column; align-items: center;">
                <div style="position: relative; width: 230px; height: 230px; border-radius: 50%; padding: 6px; background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%); box-shadow: var(--shadow-lg); margin-bottom: 1.5rem;">
                  <img 
                    src="./assets/brijesh-singh.png" 
                    alt="Shri Brijesh Singh - Founder & Chairman, Prayas Foundation" 
                    style="width: 100%; height: 100%; object-fit: cover; object-position: top; border-radius: 50%; background: var(--surface-card);"
                    loading="lazy"
                  />
                </div>
                <h3 class="font-display font-bold text-foreground" style="font-size: 1.35rem; margin-bottom: 0.35rem;">
                  ${r.name}
                </h3>
                <p class="font-bold uppercase tracking-wider" style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.85rem;">
                  ${r.role}
                </p>
                <div class="glass-badge" style="font-size: 0.9rem; font-weight: 700; padding: 0.4rem 1rem;">
                  ${i?"१४+ वर्षांची समर्पित जनसेवा":o?"14+ वर्षों का समर्पित जनसेवा":"14+ Years Grassroots Service"}
                </div>
              </div>

              <div class="lg:col-span-8">
                <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 0.95rem;">
                  ${r.tagline}
                </span>
                <h2 class="font-display font-bold text-foreground" style="font-size: clamp(1.8rem, 3vw, 2.35rem); margin-bottom: 1.25rem;">
                  ${r.heading}
                </h2>
                
                <div style="display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 1.75rem; color: var(--foreground-muted); font-size: 1.08rem; line-height: 1.7;">
                  <p>${r.bio1}</p>
                  <p>${r.bio2}</p>
                  <p>${r.bio3}</p>
                </div>

                <blockquote style="border-left: 4px solid var(--primary); padding-left: 1.5rem; font-style: italic; color: var(--foreground); font-weight: 700; font-size: 1.12rem; background: var(--primary-subtle); padding-top: 1rem; padding-bottom: 1rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
                  "${r.quote}"
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Scroll-Driven Progressive Organisational Structure Section -->
      <section class="section-padding" style="background: var(--surface); position: relative;">
        <div class="container">
          ${q(l,a)}
        </div>
      </section>

      <!-- Integrated Partners in Progress Section -->
      ${A(l,a,!0)}

      <!-- CSR Collaboration Information Banner -->
      <section class="section-padding" style="background: var(--surface-alt); padding-top: 0;">
        <div class="container">
          <div class="liquid-glass-card" style="padding: 3rem; background: var(--gradient-card); text-align: center; max-width: 900px; margin: 0 auto; border-radius: 28px; border: 1.5px solid var(--border);">
            <h3 class="font-display font-bold text-foreground" style="font-size: clamp(1.6rem, 2.5vw, 2.2rem); margin-bottom: 1rem;">
              ${i?"कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) भागीदारी":o?"कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) साझेदारी":"Corporate Social Responsibility (CSR) Partnerships"}
            </h3>
            <p class="text-foreground-muted" style="font-size: 1.15rem; line-height: 1.75; margin-bottom: 2rem;">
              ${i?"प्रयास फाउंडेशन कंपनी कायद्याच्या कलम १३५ अंतर्गत कॉर्पोरेट CSR प्रकल्पांच्या अंमलबजावणीसाठी पूर्णतः नोंदणीकृत व पात्र आहे. आम्ही पारदर्शक अहवाल आणि ऑडिट प्रमाणपत्रे प्रदान करतो.":o?"प्रयास फाउंडेशन कंपनी अधिनियम की धारा 135 के तहत कॉर्पोरेट सीएसआर परियोजनाओं के क्रियान्वयन हेतु पूर्णतः पंजीकृत और अनुपालन योग्य है। हम पारदर्शी रिपोर्टिंग और ऑडिट प्रमाणन प्रदान करते हैं।":"Prayas Foundation is fully compliant with Section 135 of the Companies Act for CSR implementations. We provide detailed impact reporting, utilization certificates, and annual audits."}
            </p>
            <div style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap;">
              <a href="./contact.html" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.75rem 1.75rem;">
                ${i?"CSR भागीदारीसाठी संपर्क साधा":o?"CSR साझेदारी हेतु संपर्क करें":"Contact for CSR Collaboration"}
              </a>
              <a href="tel:+919820500726" class="btn btn-secondary" style="font-size: 1.05rem; padding: 0.75rem 1.75rem;">
                📞 +91-9820500726
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    ${x(l,a)}
    ${I(l,a)}
    ${M(l,a)}
    ${S(l,a)}
    ${R()}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${C(l,a,"about")}
  `,T()}catch(t){console.error("About page rendering error:",t),e&&!e.innerHTML.trim()&&(e.innerHTML=`
        ${w(l,a,"about")}
        <main style="flex: 1; padding: 4rem 1rem; text-align: center;">
          <h2 style="font-size: 2rem; margin-bottom: 1rem;">Prayas Foundation</h2>
          <p style="color: var(--foreground-muted); max-width: 600px; margin: 0 auto 2rem;">Dedicated to quality education at Mumbai Public School Malvani, health, digital literacy, and community welfare.</p>
          <a href="./index.html" class="btn btn-primary">Return to Home / मुख्य पृष्ठ</a>
        </main>
        ${x(l,a)}
      `)}}function T(){try{const g=document.getElementById("lang-toggle-btn");g&&g.addEventListener("click",v=>{v.preventDefault(),window.openLanguageModal()}),document.querySelectorAll(".lang-select-option").forEach(v=>{v.addEventListener("click",()=>{const B=v.dataset.lang||"mr";window.setPrayasLanguage(B)})});const p=document.getElementById("theme-toggle-btn");p&&p.addEventListener("click",()=>{u=u==="light"?"dark":"light",localStorage.setItem("prayas_theme",u),document.documentElement.setAttribute("data-theme",u),P()});const f=document.getElementById("mobile-menu-btn"),h=document.getElementById("close-drawer-btn"),b=document.getElementById("drawer-overlay");f&&f.addEventListener("click",()=>window.togglePrayasMenu(!0)),h&&h.addEventListener("click",()=>window.togglePrayasMenu(!1)),b&&b.addEventListener("click",()=>window.togglePrayasMenu(!1))}catch(g){console.warn("About page listener setup warning:",g)}const e=document.getElementById("nav-donate-btn"),t=document.getElementById("mobile-donate-btn"),s=document.getElementById("donate-modal"),r=document.getElementById("close-donate-modal-btn");function i(g){let p=document.getElementById("donate-modal");p&&(p.parentElement!==document.body&&document.body.appendChild(p),g?(p.classList.add("open"),p.style.setProperty("display","flex","important"),document.body.style.overflow="hidden"):(p.classList.remove("open"),p.style.setProperty("display","none","important"),document.body.style.overflow=""))}e&&e.addEventListener("click",()=>i(!0)),t&&t.addEventListener("click",()=>{window.closePrayasMenu(),i(!0)}),r&&r.addEventListener("click",()=>i(!1)),s&&s.addEventListener("click",g=>{g.target===s&&i(!1)}),z(a);const o=document.getElementById("privacy-modal"),c=document.getElementById("terms-modal"),d=document.getElementById("open-privacy-btn"),n=document.getElementById("open-terms-btn"),m=document.getElementById("close-privacy-modal-btn"),y=document.getElementById("close-terms-modal-btn");d&&o&&d.addEventListener("click",()=>{o.classList.add("open"),document.body.style.overflow="hidden"}),m&&o&&m.addEventListener("click",()=>{o.classList.remove("open"),document.body.style.overflow=""}),n&&c&&n.addEventListener("click",()=>{c.classList.add("open"),document.body.style.overflow="hidden"}),y&&c&&y.addEventListener("click",()=>{c.classList.remove("open"),document.body.style.overflow=""}),O(),F(),j(),_(),P()}function j(){const e=document.getElementById("person-full-detail-modal"),t=document.getElementById("person-full-modal-content"),s=document.getElementById("close-person-modal-btn"),r=document.querySelectorAll(".person-wrapper[data-person-full]");if(!e||!t||!r.length)return;function i(){e.classList.remove("open"),document.body.style.overflow=""}s&&s.addEventListener("click",i),e.addEventListener("click",o=>{o.target===e&&i()}),window.addEventListener("keydown",o=>{o.key==="Escape"&&e.classList.contains("open")&&i()}),r.forEach(o=>{o.addEventListener("click",c=>{c.stopPropagation();try{const d=o.dataset.personFull;if(!d)return;const n=JSON.parse(decodeURIComponent(d));t.innerHTML=`
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
                ${n.badge||"Prayas Council"}
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
              ${a==="hi"?"जीवन परिचय एवं योगदान":"Biography & Governance Overview"}
            </h4>
            <p class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.6; margin: 0;">
              ${n.bio}
            </p>
          </div>

          ${n.achievements?`
            <div style="background: var(--primary-subtle); border-left: 4px solid var(--primary); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem;">
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--foreground); display: block; margin-bottom: 0.2rem;">
                ⭐ ${a==="hi"?"प्रमुख उपलब्धि":"Key Grassroots Achievement"}:
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
        `,e.parentElement!==document.body&&document.body.appendChild(e),e.classList.add("open"),e.style.setProperty("display","flex","important"),document.body.style.overflow="hidden"}catch(d){console.error("Modal error:",d)}})})}function O(){const e=Array.from(document.querySelectorAll(".org-tier-step")),t=document.getElementById("org-full-revealed-banner"),s=document.getElementById("org-structure-container");if(!e.length||!s)return;let r=!1;"IntersectionObserver"in window?new IntersectionObserver(c=>{r=c[0].isIntersecting,r&&i()},{rootMargin:"100px 0px"}).observe(s):r=!0;function i(){if(!r)return;const o=window.innerHeight,c=o*.5;let d=null,n=1/0;if(e.forEach(m=>{const y=m.getBoundingClientRect(),g=y.top<o*.9&&y.bottom>o*.1;m.classList.toggle("is-active",g);const p=y.top+y.height/2,f=Math.abs(c-p);f<n&&(n=f,d=m)}),e.forEach(m=>{const y=m===d&&n<o*.38;m.classList.toggle("is-focused-tier",y)}),t&&s){const m=s.getBoundingClientRect();m.bottom<o*.95&&m.top<o*.3?t.classList.add("revealed"):t.classList.remove("revealed")}}window.addEventListener("scroll",E(i),{passive:!0}),window.addEventListener("resize",E(i),{passive:!0}),i()}function F(){document.querySelectorAll(".liquid-glass-empty").forEach(t=>{t.addEventListener("mousemove",s=>{const r=t.getBoundingClientRect(),i=(s.clientX-r.left)/r.width*100,o=(s.clientY-r.top)/r.height*100;t.style.setProperty("--mouse-x",`${i}%`),t.style.setProperty("--mouse-y",`${o}%`)})})}function _(){D(a)}function P(){const e=document.getElementById("theme-icon-sun"),t=document.getElementById("theme-icon-moon");e&&t&&(u==="dark"?(e.style.display="block",t.style.display="none"):(e.style.display="none",t.style.display="block"))}function L(){$(),H()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L,{once:!0}):L();
