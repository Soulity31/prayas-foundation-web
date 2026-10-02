import{i as P,t as I,s as l,c as B,a as L,b as M,d as x,e as k,f as $,g as C}from"./performance-EIpoqvRw.js";import{c as D,s as z}from"./ImpactChart-a1_bBNRp.js";const S=[{value:"487",labelEn:"Students Registered",labelHi:"पंजीकृत छात्र",labelMr:"नोंदणीकृत विद्यार्थी"},{value:"96%",labelEn:"Active Accounts",labelHi:"सक्रिय खाते",labelMr:"सक्रिय खाती"},{value:"100%",labelEn:"Prelim Participation",labelHi:"प्रीलिम भागीदारी",labelMr:"पूर्वपरीक्षा सहभाग"},{value:"+30%",labelEn:"Average Score Growth",labelHi:"औसत स्कोर में वृद्धि",labelMr:"सरासरी गुणांत वाढ"}];let n=localStorage.getItem("prayas_lang");n||(n="mr",localStorage.setItem("prayas_lang","mr"));let d=localStorage.getItem("prayas_theme")||"light";document.documentElement.setAttribute("data-theme",d);document.documentElement.setAttribute("lang",n);P();window.openLanguageModal=function(){let e=document.getElementById("language-modal-overlay");e&&e.parentElement!==document.body&&document.body.appendChild(e),e&&(e.style.setProperty("display","flex","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important"),e.classList.add("open")),document.body.style.overflow="hidden"};window.closeLanguageModal=function(){const e=document.getElementById("language-modal-overlay");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important"),e.classList.remove("open")),document.body.style.overflow=""};window.setPrayasLanguage=function(e){n=e||"mr",localStorage.setItem("prayas_lang",n),document.documentElement.setAttribute("lang",n),window.closeLanguageModal&&window.closeLanguageModal(),window.location.reload()};window.openPrayasMenu=function(){let e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&e.parentElement!==document.body&&document.body.appendChild(e),t&&t.parentElement!==document.body&&document.body.appendChild(t),e&&(e.style.setProperty("display","block","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important")),t&&(t.style.setProperty("display","flex","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("pointer-events","auto","important"),t.style.setProperty("z-index","999999","important")),document.body.style.overflow="hidden"};window.closePrayasMenu=function(){const e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important")),t&&(t.style.setProperty("display","none","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("pointer-events","none","important")),document.body.style.overflow=""};window.togglePrayasMenu=function(e){e?window.openPrayasMenu():window.closePrayasMenu()};function H(){const e=document.getElementById("app");if(!e)return;const t=l[n].impact,a=n==="mr",s=n==="hi";e.innerHTML=`
    ${B(l,n,"impact")}
    
    <main style="flex: 1;">
      
      <!-- Impact Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="./index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${a||s?"मुख्य पृष्ठ":"Home"}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${a?"सिद्ध परिणाम":s?"सिद्ध प्रभाव":"Impact & Results"}
            </span>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 1rem; padding: 0.45rem 1.25rem;">
            ${t.tagline}
          </span>
          <h1 class="font-display font-bold text-foreground" style="font-size: clamp(2.4rem, 4.5vw, 3.5rem); margin-bottom: 1.25rem; line-height: 1.2;">
            ${t.heading}
          </h1>
          <p class="text-foreground-muted text-lg" style="line-height: 1.7; font-size: 1.2rem;">
            ${t.desc}
          </p>
        </div>
      </section>

      <!-- Key Quantitative Metrics -->
      <section class="section-padding" style="background: var(--surface); padding-bottom: 2.5rem;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 3.5rem;" class="md:grid-cols-4">
            ${S.map(o=>`
              <div class="liquid-glass-card hover-lift" style="padding: 2rem 1.5rem; text-align: center; border-radius: 24px; border: 1.5px solid var(--border);">
                <div class="font-display font-bold text-primary" style="font-size: 3rem; line-height: 1.1; margin-bottom: 0.5rem;">
                  ${a&&o.value==="487"?"४८७":a&&o.value==="96%"?"९६%":a&&o.value==="100%"?"१००%":a&&o.value==="+30%"?"+३०%":o.value}
                </div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--foreground);">
                  ${a?o.labelMr||o.labelHi:s?o.labelHi:o.labelEn}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Scroll-Expanding Interactive Chart Section -->
      <section class="section-padding" style="background: var(--surface-alt); padding-top: 2.5rem; position: relative;">
        <div class="container">
          
          <div style="max-width: 1080px; margin: 0 auto;">
            ${D(l,n)}
          </div>

          <!-- Impact Summary Narrative -->
          <div class="liquid-glass-card" style="padding: 2.5rem 3rem; border-left: 5px solid var(--primary); max-width: 1080px; margin: 3rem auto 0; text-align: center; border-radius: 24px;">
            <p class="text-foreground-muted text-base md:text-lg" style="line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.2rem;">
              ${t.summary}
            </p>
            <span class="font-bold text-primary" style="display: inline-flex; align-items: center; gap: 0.6rem; font-size: 1.15rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              ${t.ctaBanner}
            </span>
          </div>

        </div>
      </section>

    </main>

    ${L(l,n)}
    ${M(l,n)}
    ${x(l,n)}
    ${k(l,n)}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${$(l,n,"impact")}
  `,A()}function A(){try{const i=document.getElementById("lang-toggle-btn");i&&i.addEventListener("click",y=>{y.preventDefault(),window.openLanguageModal()}),document.querySelectorAll(".lang-select-option").forEach(y=>{y.addEventListener("click",()=>{const E=y.dataset.lang||"mr";window.setPrayasLanguage(E)})});const r=document.getElementById("theme-toggle-btn");r&&r.addEventListener("click",()=>{d=d==="light"?"dark":"light",localStorage.setItem("prayas_theme",d),document.documentElement.setAttribute("data-theme",d),T()});const f=document.getElementById("mobile-menu-btn"),b=document.getElementById("close-drawer-btn"),w=document.getElementById("drawer-overlay");f&&f.addEventListener("click",()=>window.togglePrayasMenu(!0)),b&&b.addEventListener("click",()=>window.togglePrayasMenu(!1)),w&&w.addEventListener("click",()=>window.togglePrayasMenu(!1))}catch(i){console.warn("Impact page listener setup warning:",i)}const e=document.getElementById("nav-donate-btn"),t=document.getElementById("mobile-donate-btn"),a=document.getElementById("donate-modal"),s=document.getElementById("close-donate-modal-btn");function o(i){let r=document.getElementById("donate-modal");r&&(r.parentElement!==document.body&&document.body.appendChild(r),i?(r.classList.add("open"),r.style.setProperty("display","flex","important"),document.body.style.overflow="hidden"):(r.classList.remove("open"),r.style.setProperty("display","none","important"),document.body.style.overflow=""))}e&&e.addEventListener("click",()=>o(!0)),t&&t.addEventListener("click",()=>{window.closePrayasMenu(),o(!0)}),s&&s.addEventListener("click",()=>o(!1)),a&&a.addEventListener("click",i=>{i.target===a&&o(!1)}),C(n);const c=document.getElementById("privacy-modal"),m=document.getElementById("terms-modal"),p=document.getElementById("open-privacy-btn"),g=document.getElementById("open-terms-btn"),u=document.getElementById("close-privacy-modal-btn"),v=document.getElementById("close-terms-modal-btn");p&&c&&p.addEventListener("click",()=>{c.classList.add("open"),document.body.style.overflow="hidden"}),u&&c&&u.addEventListener("click",()=>{c.classList.remove("open"),document.body.style.overflow=""}),g&&m&&g.addEventListener("click",()=>{m.classList.add("open"),document.body.style.overflow="hidden"}),v&&m&&v.addEventListener("click",()=>{m.classList.remove("open"),document.body.style.overflow=""}),z(n)}function T(){const e=document.getElementById("theme-icon-sun"),t=document.getElementById("theme-icon-moon");e&&t&&(d==="dark"?(e.style.display="block",t.style.display="none"):(e.style.display="none",t.style.display="block"))}function h(){I(),H()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h,{once:!0}):h();
