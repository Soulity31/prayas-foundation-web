import{i as S,t as _,s,c as q,a as T,b as O,d as j,e as z,f as A,l as H,q as F,g as N,j as V}from"./performance-EIpoqvRw.js";import{c as J}from"./ContactSection-VPz4lHdL.js";let n=localStorage.getItem("prayas_lang");n||(n="mr",localStorage.setItem("prayas_lang","mr"));let u=localStorage.getItem("prayas_theme")||"light";document.documentElement.setAttribute("data-theme",u);document.documentElement.setAttribute("lang",n);S();window.openLanguageModal=function(){let e=document.getElementById("language-modal-overlay");e&&e.parentElement!==document.body&&document.body.appendChild(e),e&&(e.style.setProperty("display","flex","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important"),e.classList.add("open")),document.body.style.overflow="hidden"};window.closeLanguageModal=function(){const e=document.getElementById("language-modal-overlay");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important"),e.classList.remove("open")),document.body.style.overflow=""};window.setPrayasLanguage=function(e){n=e||"mr",localStorage.setItem("prayas_lang",n),document.documentElement.setAttribute("lang",n),window.closeLanguageModal&&window.closeLanguageModal(),window.location.reload()};window.openPrayasMenu=function(){let e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&e.parentElement!==document.body&&document.body.appendChild(e),t&&t.parentElement!==document.body&&document.body.appendChild(t),e&&(e.style.setProperty("display","block","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important")),t&&(t.style.setProperty("display","flex","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("pointer-events","auto","important"),t.style.setProperty("z-index","999999","important")),document.body.style.overflow="hidden"};window.closePrayasMenu=function(){const e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important")),t&&(t.style.setProperty("display","none","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("pointer-events","none","important")),document.body.style.overflow=""};window.togglePrayasMenu=function(e){e?window.openPrayasMenu():window.closePrayasMenu()};function W(){const e=document.getElementById("app");if(!e)return;const t=s[n].contact,i=n==="mr",l=n==="hi";e.innerHTML=`
    ${q(s,n,"contact")}
    
    <main style="flex: 1;">
      
      <!-- Contact Hero Header with Breadcrumbs -->
      <section class="hero-gradient section-padding" style="padding-top: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--border);">
        <div class="container text-center" style="max-width: 850px; margin: 0 auto;">
          <div style="margin-bottom: 1rem;">
            <a href="./index.html" class="hover-lift" style="color: var(--primary); font-weight: 800; font-size: 1.05rem;">
              ${i||l?"मुख्य पृष्ठ":"Home"}
            </a>
            <span style="color: var(--foreground-subtle); margin: 0 0.65rem; font-size: 1.05rem;">/</span>
            <span style="color: var(--foreground-muted); font-size: 1.05rem; font-weight: 700;">
              ${i?"संपर्क आणि सहकार्य":l?"संपर्क एवं सहयोग":"Contact & Connect"}
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

      <!-- Interactive Contact & FAQ Section -->
      ${J(s,n,!1)}

    </main>

    ${T(s,n)}
    ${O(s,n)}
    ${j(s,n)}
    ${z(s,n)}

    <!-- Navigation Drawer as the Absolute Last Div in the DOM Tree -->
    ${A(s,n,"contact")}
  `,G()}function G(){try{const a=document.getElementById("lang-toggle-btn");a&&a.addEventListener("click",y=>{y.preventDefault(),window.openLanguageModal()}),document.querySelectorAll(".lang-select-option").forEach(y=>{y.addEventListener("click",()=>{const m=y.dataset.lang||"mr";window.setPrayasLanguage(m)})});const o=document.getElementById("theme-toggle-btn");o&&o.addEventListener("click",()=>{u=u==="light"?"dark":"light",localStorage.setItem("prayas_theme",u),document.documentElement.setAttribute("data-theme",u),$()});const r=document.getElementById("mobile-menu-btn"),d=document.getElementById("close-drawer-btn"),c=document.getElementById("drawer-overlay");r&&r.addEventListener("click",()=>window.togglePrayasMenu(!0)),d&&d.addEventListener("click",()=>window.togglePrayasMenu(!1)),c&&c.addEventListener("click",()=>window.togglePrayasMenu(!1))}catch(a){console.warn("Contact page listener setup warning:",a)}const e=document.getElementById("contact-form"),t=document.getElementById("form-feedback-message"),i=document.getElementById("contact-submit-btn");e&&e.addEventListener("submit",async a=>{a.preventDefault();const o=document.getElementById("contact-name").value.trim(),r=document.getElementById("contact-phone").value.trim(),d=document.getElementById("contact-email").value.trim(),c=document.getElementById("contact-message").value.trim(),y=document.getElementById("contact-consent").checked;if(!o||!r||!d||!c){l(n==="hi"?"कृपया सभी आवश्यक फ़ील्ड भरें।":"Please fill in all required fields.","error");return}if(!/^\d{10}$/.test(r)){l(n==="hi"?"कृपया 10 अंकों का वैध भारतीय फ़ोन नंबर दर्ज करें।":"Please enter a valid 10-digit mobile number.","error");return}if(!y){l(n==="hi"?"कृपया सहमति चेकबॉक्स पर टिक करें।":"Please agree to the consent checkbox.","error");return}i&&(i.disabled=!0,i.innerHTML=`
          <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
          ${s[n].contact.form.sendingBtn}
        `);const m=document.getElementById("contact-interest")?document.getElementById("contact-interest").value:"general",b=document.getElementById("contact-availability")?document.getElementById("contact-availability").value:"Flexible / Weekends",x=m==="volunteer"||m==="job"||/volunteer|join|member|mentor|career|job|काम|स्वयंसेवक|जुड़|सहभाग/i.test(c),w={id:Date.now()%1e5,name:o,email:d,phone:r,subject:x?`Request to Join (${b})`:`Interest: ${m}`,message:`${c}

[Availability: ${b}]`,is_resolved:0,created_at:new Date().toISOString()};try{const h=localStorage.getItem("prayas_sql_inquiries"),C=h?JSON.parse(h):[];C.unshift(w),localStorage.setItem("prayas_sql_inquiries",JSON.stringify(C))}catch{}x&&await H({full_name:o,email:d,phone:r,skills:m==="volunteer"?"Volunteering & Mentorship":m==="job"?"NGO Work & Operations":c.slice(0,60),availability:b,city:"Mumbai"}),await F({name:o,email:d,phone:r,subject:w.subject,message:w.message}),l(s[n].contact.form.successMsg,"success"),e.reset(),i&&(i.disabled=!1,i.innerHTML=`
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          ${s[n].contact.form.submitBtn}
        `)});function l(a,o){t&&(t.style.display="block",o==="success"?(t.style.background="rgba(16, 185, 129, 0.15)",t.style.color="#059669",t.style.border="1px solid #86efac"):(t.style.background="rgba(239, 68, 68, 0.15)",t.style.color="#dc2626",t.style.border="1px solid #fca5a5"),t.textContent=a)}const E=document.getElementById("nav-donate-btn"),B=document.getElementById("mobile-donate-btn"),v=document.getElementById("donate-modal"),I=document.getElementById("close-donate-modal-btn");function p(a){let o=document.getElementById("donate-modal");o&&(o.parentElement!==document.body&&document.body.appendChild(o),a?(o.classList.add("open"),o.style.setProperty("display","flex","important"),document.body.style.overflow="hidden"):(o.classList.remove("open"),o.style.setProperty("display","none","important"),document.body.style.overflow=""))}E&&E.addEventListener("click",()=>p(!0)),B&&B.addEventListener("click",()=>{window.closePrayasMenu(),p(!0)}),I&&I.addEventListener("click",()=>p(!1)),v&&v.addEventListener("click",a=>{a.target===v&&p(!1)}),N(n);const g=document.getElementById("privacy-modal"),f=document.getElementById("terms-modal"),P=document.getElementById("open-privacy-btn"),L=document.getElementById("open-terms-btn"),k=document.getElementById("close-privacy-modal-btn"),M=document.getElementById("close-terms-modal-btn");P&&g&&P.addEventListener("click",()=>{g.classList.add("open"),document.body.style.overflow="hidden"}),k&&g&&k.addEventListener("click",()=>{g.classList.remove("open"),document.body.style.overflow=""}),L&&f&&L.addEventListener("click",()=>{f.classList.add("open"),document.body.style.overflow="hidden"}),M&&f&&M.addEventListener("click",()=>{f.classList.remove("open"),document.body.style.overflow=""}),Q(),$()}function Q(){V(n)}function $(){const e=document.getElementById("theme-icon-sun"),t=document.getElementById("theme-icon-moon");e&&t&&(u==="dark"?(e.style.display="block",t.style.display="none"):(e.style.display="none",t.style.display="block"))}function D(){_(),W()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",D,{once:!0}):D();
