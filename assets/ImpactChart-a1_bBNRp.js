function H(u,d){const o=d==="mr",i=d==="hi",c=(u[d]||u.mr).impact,b=o?"माउस किंवा टचने कोणत्याही रेषेवर जा - थेट गुण आणि प्रगती विश्लेषण पहा":i?"माउस या टच से किसी भी रेखा पर जाएं - लाइव स्कोर एवं विश्लेषण देखें":"Hover or tap anywhere along a curve to inspect live scores and cohort progression",w=o?"खालील गट निवडा किंवा थेट आलेखावर टॅप करा":i?"नीचे समूह चुनें या सीधे ग्राफ पर टैप करें":"Tap any cohort tab or curve to inspect live scores",k=o?"सर्व गट":i?"सभी समूह":"All",m=o||i?"अंकुर (40%)":"Ankur (40%)",L=o||i?"अरुण (55%)":"Arun (55%)",C=o||i?"अरुणोदय (60%)":"Arunuday (60%)",x=[{id:"arunuday",name:i||o?"अरुणोदय 2025":"Arunuday 2025",level:i?"उन्नत स्तर":o?"प्रगत गट":"Advanced Cohort",start:"35%",end:"60%",growth:"+25%",color:"#fbbf24",colorBg:"rgba(251, 191, 36, 0.12)",colorBorder:"rgba(251, 191, 36, 0.35)"},{id:"arun",name:i||o?"अरुण 2025":"Arun 2025",level:i?"मध्यम स्तर":o?"मध्यम गट":"Intermediate Cohort",start:"25%",end:"55%",growth:"+30%",color:"#34d399",colorBg:"rgba(52, 211, 153, 0.12)",colorBorder:"rgba(52, 211, 153, 0.35)"},{id:"ankur",name:i||o?"अंकुर 2025":"Ankur 2025",level:i?"बुनियादी स्तर":o?"पायाभूत गट":"Foundational Cohort",start:"20%",end:"40%",growth:"+20%",color:"#60a5fa",colorBg:"rgba(96, 165, 250, 0.12)",colorBorder:"rgba(96, 165, 250, 0.35)"}];return`
    <div id="impact-chart-scroll-track" style="width: 100%; max-width: 1400px; margin: 0 auto; position: relative; display: flex; justify-content: center;">
      <div id="dynamic-zoom-chart-container" class="liquid-glass-card" style="margin: 0 auto; transform-origin: center center; width: 100%; box-shadow: 0 30px 80px -15px rgba(0, 0, 0, 0.65);">
        
        <!-- Top Title & Filter Controls -->
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <img src="./assets/khan-academy.jpg" alt="Khan Academy" style="width: 44px; height: 44px; border-radius: 12px; object-fit: cover; box-shadow: 0 6px 16px rgba(0,0,0,0.35); flex-shrink: 0;" />
            <div>
              <h3 class="font-display font-bold text-lg md:text-2xl" style="margin-bottom: 0.15rem; color: #f8fafc; line-height: 1.25;">
                ${c.chartTitle}
              </h3>
              <p class="hidden md:block" style="font-size: 0.85rem; color: #94a3b8; margin: 0;">
                ${b}
              </p>
              <p class="block md:hidden" style="font-size: 0.8rem; color: #34d399; font-weight: 600; margin: 0;">
                ${w}
              </p>
            </div>
          </div>

          <!-- Filter Tabs (Touch-Friendly Responsive Buttons) -->
          <div style="display: flex; gap: 0.45rem; flex-wrap: wrap;" id="interactive-chart-filters">
            <button class="btn btn-sm btn-primary chart-filter-btn active-filter" data-group="all" style="padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${k}</button>
            <button class="btn btn-sm btn-secondary chart-filter-btn" data-group="arunuday" style="background: rgba(251, 191, 36, 0.12); color: #fbbf24; border-color: rgba(251, 191, 36, 0.35); padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${C}</button>
            <button class="btn btn-sm btn-secondary chart-filter-btn" data-group="arun" style="background: rgba(52, 211, 153, 0.12); color: #34d399; border-color: rgba(52, 211, 153, 0.35); padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${L}</button>
            <button class="btn btn-sm btn-secondary chart-filter-btn" data-group="ankur" style="background: rgba(96, 165, 250, 0.12); color: #60a5fa; border-color: rgba(96, 165, 250, 0.35); padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${m}</button>
          </div>
        </div>

        <!-- Dedicated Live Interactive Status Banner (Always Visible on Mobile & Desktop) -->
        <div id="chart-active-status-bar" style="background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(52, 211, 153, 0.3); border-radius: 14px; padding: 0.65rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span id="active-status-dot" style="width: 10px; height: 10px; border-radius: 50%; background: #34d399; display: inline-block; box-shadow: 0 0 8px #34d399;"></span>
            <strong id="active-status-title" style="color: #f8fafc; font-size: 0.92rem;">
              ${i?"सभी समूह (All Cohorts)":"All Cohorts Progression"}
            </strong>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.85rem;">
            <span id="active-status-score" style="color: #94a3b8; font-weight: 600;">Prelim 1 ➔ Prelim 5</span>
            <span id="active-status-growth" style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.4);">
              +30% Avg Jump
            </span>
          </div>
        </div>

        <!-- SVG Chart Canvas Frame -->
        <div style="position: relative; width: 100%; overflow-x: auto; display: flex; justify-content: center; touch-action: pan-y; padding: 0;" id="svg-chart-wrapper">
          
          <!-- Floating Interactive Tooltip (Desktop Mouse Track) -->
          <div id="chart-tooltip" class="chart-hover-tooltip" style="padding: 0.75rem 1.25rem; font-size: 0.875rem;">
            <strong id="tooltip-cohort" style="display: block; color: #34d399; font-size: 0.975rem; margin-bottom: 0.25rem;"></strong>
            <span id="tooltip-score" style="display: block; font-size: 0.875rem; font-weight: 700; color: #f8fafc; margin-bottom: 0.15rem;"></span>
            <span id="tooltip-desc" style="display: block; font-size: 0.8rem; color: #cbd5e1;"></span>
          </div>

          <svg id="live-interactive-svg" viewBox="0 0 1200 330" preserveAspectRatio="none" style="width: 100%; max-width: 100%; min-width: 100%; height: 310px; font-family: var(--font-sans); margin: 0 auto; display: block; overflow: visible;">
            
            <!-- Background Grid Lines -->
            <line x1="70" y1="35" x2="1140" y2="35" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="90" x2="1140" y2="90" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="145" x2="1140" y2="145" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="200" x2="1140" y2="200" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="255" x2="1140" y2="255" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5" />

            <!-- Y Axis Labels -->
            <text x="55" y="39" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">80%</text>
            <text x="55" y="94" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">60%</text>
            <text x="55" y="149" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">40%</text>
            <text x="55" y="204" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">20%</text>
            <text x="55" y="259" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">0%</text>

            <!-- X Axis Prelims Columns -->
            <text x="180" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 1</text>
            <text x="410" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 2</text>
            <text x="640" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 3</text>
            <text x="870" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 4</text>
            <text x="1080" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 5</text>

            <!-- Interactive Group 1: Arunuday 2025 (Golden Amber, Solid) -->
            <g class="chart-interactive-group" data-cohort="Arunuday 2025" data-start="35%" data-end="60%" data-growth="+25% (Advanced Cohort)" data-color="#fbbf24">
              <path d="M 180 148 L 410 108 L 640 108 L 870 108 L 1080 90" fill="none" stroke="#fbbf24" stroke-width="5.5" stroke-linecap="round" class="chart-interactive-path line-arunuday25" />
              <path d="M 180 148 L 410 108 L 640 108 L 870 108 L 1080 90" class="chart-hit-area" />
              <circle cx="180" cy="148" r="6" fill="#fbbf24" />
              <circle cx="410" cy="108" r="6" fill="#fbbf24" />
              <circle cx="640" cy="108" r="6" fill="#fbbf24" />
              <circle cx="870" cy="108" r="6" fill="#fbbf24" />
              <circle cx="1080" cy="90" r="9" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
              <text x="1080" y="72" font-size="15" font-weight="900" fill="#fbbf24" text-anchor="middle">60%</text>
            </g>

            <!-- Interactive Group 2: Arun 2025 (Emerald Green, Solid) -->
            <g class="chart-interactive-group" data-cohort="Arun 2025" data-start="25%" data-end="55%" data-growth="+30% (Intermediate Cohort)" data-color="#34d399">
              <path d="M 180 172 L 410 135 L 640 120 L 870 108 L 1080 102" fill="none" stroke="#34d399" stroke-width="5.5" stroke-linecap="round" class="chart-interactive-path line-arun25" />
              <path d="M 180 172 L 410 135 L 640 120 L 870 108 L 1080 102" class="chart-hit-area" />
              <circle cx="180" cy="172" r="6" fill="#34d399" />
              <circle cx="410" cy="135" r="6" fill="#34d399" />
              <circle cx="640" cy="120" r="6" fill="#34d399" />
              <circle cx="870" cy="108" r="6" fill="#34d399" />
              <circle cx="1080" cy="102" r="9" fill="#34d399" stroke="#0f172a" stroke-width="2" />
              <text x="1080" y="85" font-size="15" font-weight="900" fill="#34d399" text-anchor="middle">55%</text>
            </g>

            <!-- Interactive Group 3: Ankur 2025 (Royal Blue, Solid) -->
            <g class="chart-interactive-group" data-cohort="Ankur 2025" data-start="20%" data-end="40%" data-growth="+20% (Foundational Cohort)" data-color="#60a5fa">
              <path d="M 180 190 L 410 178 L 640 148 L 870 135 L 1080 135" fill="none" stroke="#60a5fa" stroke-width="5.5" stroke-linecap="round" class="chart-interactive-path line-ankur25" />
              <path d="M 180 190 L 410 178 L 640 148 L 870 135 L 1080 135" class="chart-hit-area" />
              <circle cx="180" cy="190" r="6" fill="#60a5fa" />
              <circle cx="410" cy="178" r="6" fill="#60a5fa" />
              <circle cx="640" cy="148" r="6" fill="#60a5fa" />
              <circle cx="870" cy="135" r="6" fill="#60a5fa" />
              <circle cx="1080" cy="135" r="9" fill="#60a5fa" stroke="#0f172a" stroke-width="2" />
              <text x="1080" y="118" font-size="15" font-weight="900" fill="#60a5fa" text-anchor="middle">40%</text>
            </g>

            <!-- 2024 Baseline Dashed Lines -->
            <g class="chart-baseline-2024">
              <path d="M 180 160 L 410 135 L 640 135 L 870 120 L 1080 120" fill="none" stroke="#fde68a" stroke-width="2.5" stroke-dasharray="6 6" opacity="0.45" />
              <path d="M 180 190 L 410 160 L 640 160 L 870 148 L 1080 135" fill="none" stroke="#a7f3d0" stroke-width="2.5" stroke-dasharray="6 6" opacity="0.45" />
              <path d="M 180 202 L 410 190 L 640 178 L 870 160 L 1080 148" fill="none" stroke="#bfdbfe" stroke-width="2.5" stroke-dasharray="6 6" opacity="0.45" />
            </g>

          </svg>
        </div>

        <!-- Cohort Quick Numbers Summary Cards Grid -->
        <div id="chart-mobile-data-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 1.25rem;">
          ${x.map(l=>`
            <div class="cohort-summary-card" data-group="${l.id}" style="background: ${l.colorBg}; border: 1.5px solid ${l.colorBorder}; border-radius: 16px; padding: 0.85rem 1rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <span style="font-weight: 800; color: ${l.color}; font-size: 0.95rem;">${l.name}</span>
                <span style="font-size: 0.75rem; font-weight: 700; background: rgba(0,0,0,0.3); color: #f8fafc; padding: 0.15rem 0.5rem; border-radius: 6px;">${l.level}</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="font-size: 0.82rem; color: #cbd5e1;">
                  Prelim 1 <strong style="color: #f8fafc;">${l.start}</strong> ➔ Prelim 5 <strong style="color: #f8fafc;">${l.end}</strong>
                </div>
                <span style="font-size: 0.88rem; font-weight: 900; color: ${l.color}; background: rgba(0,0,0,0.4); padding: 0.2rem 0.55rem; border-radius: 8px;">
                  ${l.growth}
                </span>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Legend -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.12); font-size: 0.82rem;">
          <div class="chart-legend-item" style="display: inline-flex; align-items: center; gap: 0.4rem;">
            <span class="legend-dot" style="background: #fbbf24; width: 10px; height: 10px; border-radius: 50%;"></span>
            <span style="color: #f8fafc; font-weight: 600;">${i?"अरुणोदय 2025 (60%)":"Arunuday 2025 (60%)"}</span>
          </div>
          <div class="chart-legend-item" style="display: inline-flex; align-items: center; gap: 0.4rem;">
            <span class="legend-dot" style="background: #34d399; width: 10px; height: 10px; border-radius: 50%;"></span>
            <span style="color: #f8fafc; font-weight: 600;">${i?"अरुण 2025 (55%)":"Arun 2025 (55%)"}</span>
          </div>
          <div class="chart-legend-item" style="display: inline-flex; align-items: center; gap: 0.4rem;">
            <span class="legend-dot" style="background: #60a5fa; width: 10px; height: 10px; border-radius: 50%;"></span>
            <span style="color: #f8fafc; font-weight: 600;">${i?"अंकुर 2025 (40%)":"Ankur 2025 (40%)"}</span>
          </div>
          <div class="chart-legend-item hidden md:inline-flex" style="align-items: center; gap: 0.4rem;">
            <span style="display: inline-block; width: 18px; border-bottom: 2px dashed #94a3b8;"></span>
            <span style="color: #94a3b8; font-weight: 500;">${i?"2024 आधार":"2024 Baseline"}</span>
          </div>
        </div>

      </div>
    </div>
  `}function X(u="en"){try{let A=function(t,e,a,r,s){x&&(x.style.background=s,x.style.boxShadow=`0 0 10px ${s}`),l&&(l.textContent=t,l.style.color=s),I&&(I.innerHTML=`Prelim 1: <strong style="color: #f8fafc;">${e}</strong> ➔ Prelim 5: <strong style="color: #f8fafc;">${a}</strong>`),v&&(v.textContent=r,v.style.color=s,v.style.borderColor=s,v.style.background=`${s}22`)},S=function(){A(D?"सभी समूह (All Cohorts)":O?"सर्व गट (All Cohorts)":"All Cohorts Progression","20%","60%","+30% Avg Jump","#34d399")},P=function(){const t=document.querySelector(".chart-filter-btn.btn-primary");return t?(t.dataset.group||"all").toLowerCase():"all"},z=function(t,e,a){if(!t)return;const r=t.dataset.cohort||"",s=t.dataset.start||"",f=t.dataset.end||"",p=t.dataset.growth||"",h=t.dataset.color||"#34d399";b&&(b.textContent=r,b.style.color=h),w&&(w.textContent=`Prelim 1: ${s} ➔ Prelim 5: ${f}`),k&&(k.textContent=`Progress: ${p}`),c&&c.classList.add("visible"),A(r,s,f,p,h);const M=P();if(m.forEach(n=>{const g=(n.dataset.cohort||"").toLowerCase();M==="all"||g.includes(M)?n===t?(n.style.opacity="1",n.style.display=""):(n.style.opacity="0.2",n.style.display=""):(n.style.display="none",n.style.opacity="0")}),c&&e!==void 0&&a!==void 0){const n=i.getBoundingClientRect(),g=e-n.left,j=a-n.top,R=Math.max(70,Math.min((n.width||800)-70,g)),q=Math.max(25,Math.min((n.height||300)-10,j));c.style.left=`${R}px`,c.style.top=`${q}px`}},G=function(){c&&c.classList.remove("visible");const t=P();m.forEach(e=>{const a=(e.dataset.cohort||"").toLowerCase();t==="all"||a.includes(t)?(e.style.display="",e.style.opacity="1"):(e.style.display="none",e.style.opacity="0")}),t==="all"&&S()},F=function(t){const e=(t||"all").toLowerCase();L.forEach(r=>{(r.dataset.group||"all").toLowerCase()===e?(r.classList.remove("btn-secondary"),r.classList.add("btn-primary"),r.style.boxShadow="0 0 12px rgba(16, 185, 129, 0.4)"):(r.classList.remove("btn-primary"),r.classList.add("btn-secondary"),r.style.boxShadow="none")}),C.forEach(r=>{const s=(r.dataset.group||"").toLowerCase();e==="all"||s===e?(r.style.opacity="1",r.style.transform=s===e?"scale(1.02)":"scale(1)",r.style.boxShadow=s===e?"0 10px 25px rgba(0,0,0,0.5)":"none"):(r.style.opacity="0.45",r.style.transform="scale(0.98)",r.style.boxShadow="none")});let a=null;if(m.forEach(r=>{const s=(r.dataset.cohort||"").toLowerCase();e==="all"||s.includes(e)?(r.style.display="",r.style.opacity="1",r.style.pointerEvents="all"):(r.style.display="none",r.style.opacity="0",r.style.pointerEvents="none"),s.includes(e)&&(a=r)}),a){const r=a.dataset.cohort||"",s=a.dataset.start||"",f=a.dataset.end||"",p=a.dataset.growth||"",h=a.dataset.color||"#34d399";A(r,s,f,p,h)}else S()},T=function(){if($=null,!o||!y)return;const t=E.getBoundingClientRect(),e=window.innerHeight||800;if(t.bottom<-50||t.top>e+50){o.style.transform="scale3d(1, 1, 1)",o.classList.remove("is-fullscreen-zoom");return}const a=t.top+t.height/2,r=e/2,s=Math.abs(a-r),f=e/2+t.height/2,p=Math.min(1,Math.max(0,s/f)),h=(Math.cos(p*Math.PI)+1)/2,n=window.innerWidth<=768?.04:.1,g=1+h*n;o.style.transform=`scale3d(${g.toFixed(4)}, ${g.toFixed(4)}, 1)`,h>=.35?o.classList.add("is-fullscreen-zoom"):o.classList.remove("is-fullscreen-zoom")},B=function(){!$&&y&&($=requestAnimationFrame(T))};const d=document.getElementById("impact-chart-scroll-track"),o=document.getElementById("dynamic-zoom-chart-container"),i=document.getElementById("svg-chart-wrapper"),c=document.getElementById("chart-tooltip"),b=document.getElementById("tooltip-cohort"),w=document.getElementById("tooltip-score"),k=document.getElementById("tooltip-desc"),m=Array.from(document.querySelectorAll(".chart-interactive-group")),L=Array.from(document.querySelectorAll(".chart-filter-btn")),C=Array.from(document.querySelectorAll(".cohort-summary-card")),x=document.getElementById("active-status-dot"),l=document.getElementById("active-status-title"),I=document.getElementById("active-status-score"),v=document.getElementById("active-status-growth");if(!o||!i||!m.length)return;const D=u==="hi",O=u==="mr";if("IntersectionObserver"in window){const t=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(o.classList.add("chart-draw-animate"),t.unobserve(a.target))})},{threshold:.15});t.observe(d||o)}else o.classList.add("chart-draw-animate");m.forEach(t=>{t.addEventListener("mouseenter",e=>z(t,e.clientX,e.clientY)),t.addEventListener("mousemove",e=>{const a=i.getBoundingClientRect(),r=e.clientX-a.left,s=e.clientY-a.top,f=Math.max(70,Math.min((a.width||800)-70,r)),p=Math.max(25,Math.min((a.height||300)-10,s));c&&(c.style.left=`${f}px`,c.style.top=`${p}px`)}),t.addEventListener("mouseleave",G),t.addEventListener("pointerdown",e=>{z(t,e.clientX,e.clientY)}),t.addEventListener("touchstart",e=>{if(e.touches&&e.touches.length){const a=e.touches[0];z(t,a.clientX,a.clientY)}},{passive:!0})}),L.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const a=(t.dataset.group||"all").toLowerCase();F(a)})}),C.forEach(t=>{t.addEventListener("click",()=>{const e=(t.dataset.group||"all").toLowerCase();F(e)})}),document.addEventListener("touchstart",t=>{!i.contains(t.target)&&!t.target.closest("#interactive-chart-filters")&&!t.target.closest("#chart-mobile-data-cards")&&G()},{passive:!0});let $=null,y=!1;const E=d||o.parentElement||o;"IntersectionObserver"in window&&E?new IntersectionObserver(e=>{y=e[0].isIntersecting,y&&B()},{rootMargin:"150px 0px"}).observe(E):y=!0,window.addEventListener("scroll",B,{passive:!0}),window.addEventListener("resize",B,{passive:!0}),document.addEventListener("visibilitychange",()=>{!document.hidden&&y&&T()})}catch(d){console.warn("setupImpactChartComponent recovered gracefully from error:",d)}}export{H as c,X as s};
