import{i as G,c as H,s as A,a as W,f as V,d as U,b as Q,e as J,g as K,j as X,k as O,r as Y,l as Z,m as _,n as N,o as ee,p as te}from"./performance-EIpoqvRw.js";let S=localStorage.getItem("prayas_lang")||"en",L=localStorage.getItem("prayas_theme")||"light",E="donations";document.documentElement.setAttribute("data-theme",L);document.documentElement.setAttribute("lang",S);G();window.openLanguageModal=function(){let e=document.getElementById("language-modal-overlay");e&&e.parentElement!==document.body&&document.body.appendChild(e),e&&(e.style.setProperty("display","flex","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important"),e.classList.add("open")),document.body.style.overflow="hidden"};window.closeLanguageModal=function(){const e=document.getElementById("language-modal-overlay");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important"),e.classList.remove("open")),document.body.style.overflow=""};window.setPrayasLanguage=function(e){S=e||"en",localStorage.setItem("prayas_lang",S),document.documentElement.setAttribute("lang",S),window.closeLanguageModal&&window.closeLanguageModal(),window.location.reload()};window.openPrayasMenu=function(){let e=document.getElementById("drawer-overlay"),o=document.getElementById("mobile-drawer");e&&e.parentElement!==document.body&&document.body.appendChild(e),o&&o.parentElement!==document.body&&document.body.appendChild(o),e&&(e.style.setProperty("display","block","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important")),o&&(o.style.setProperty("display","flex","important"),o.style.setProperty("opacity","1","important"),o.style.setProperty("visibility","visible","important"),o.style.setProperty("pointer-events","auto","important"),o.style.setProperty("z-index","999999","important")),document.body.style.overflow="hidden"};window.closePrayasMenu=function(){const e=document.getElementById("drawer-overlay"),o=document.getElementById("mobile-drawer");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important")),o&&(o.style.setProperty("display","none","important"),o.style.setProperty("opacity","0","important"),o.style.setProperty("visibility","hidden","important"),o.style.setProperty("pointer-events","none","important")),document.body.style.overflow=""};window.togglePrayasMenu=function(e){e?window.openPrayasMenu():window.closePrayasMenu()};(function(){try{const o=localStorage.getItem("prayas_sql_donations");o&&(o.includes("Aarav Mehta")||o.includes("Sunita Patil"))&&localStorage.removeItem("prayas_sql_donations");const a=localStorage.getItem("prayas_sql_volunteers");a&&(a.includes("Rohit Kulkarni")||a.includes("Ananya Sharma"))&&localStorage.removeItem("prayas_sql_volunteers");const s=localStorage.getItem("prayas_sql_inquiries");s&&(s.includes("Rajesh Gupte")||s.includes("Kavita Rao"))&&localStorage.removeItem("prayas_sql_inquiries")}catch{}})();function oe(){try{const e=localStorage.getItem("prayas_sql_donations");if(e)return JSON.parse(e)}catch{}return[]}function q(){try{const e=localStorage.getItem("prayas_sql_volunteers");if(e)return JSON.parse(e)}catch{}return[]}function ne(e){localStorage.setItem("prayas_sql_volunteers",JSON.stringify(e))}function F(){try{const e=localStorage.getItem("prayas_sql_inquiries");if(e)return JSON.parse(e)}catch{}return[]}function ae(e){localStorage.setItem("prayas_sql_inquiries",JSON.stringify(e))}async function re(){const e=await B("donations"),o=await B("volunteers"),a=await B("contact"),s=e.reduce((r,f)=>r+Number(f.amount||0),0),t=e.filter(r=>r.is_80g||r.tax_80g_receipt_no),l=t.reduce((r,f)=>r+Number(f.amount||0),0),m=e.filter(r=>!r.is_80g&&!r.tax_80g_receipt_no),i=m.reduce((r,f)=>r+Number(f.amount||0),0),y=a.filter(r=>!r.is_resolved).length;return{total_donations:s,total_donations_formatted:`₹${s.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`,donations_80g_total_formatted:`₹${l.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`,donations_80g_count:t.length,normal_donations_total_formatted:`₹${i.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`,normal_donations_count:m.length,donor_count:e.length,volunteer_count:o.length,total_inquiries:a.length,pending_inquiries:y}}async function B(e){let o=[];try{let a="/donations";e==="donations_80g"?a="/donations?filter_type=80g":e==="donations_normal"?a="/donations?filter_type=normal":e==="volunteers"?a="/volunteers":e==="contact"&&(a="/contact");const s=await _(a,{method:"GET"},2,800);if(s.ok){const t=await s.json();o=t[e]||t.donations||t.volunteers||t.inquiries||[]}}catch{}if(e==="donations"){const a=oe(),s=new Map;return[...a,...o].forEach(t=>{const l=t.id||`${t.donor_email}-${t.amount}`;s.has(l)||s.set(l,t)}),Array.from(s.values())}else{if(e==="donations_80g")return(await B("donations")).filter(s=>s.is_80g||s.tax_80g_receipt_no);if(e==="donations_normal")return(await B("donations")).filter(s=>!s.is_80g&&!s.tax_80g_receipt_no);if(e==="volunteers"){const a=q(),s=new Map;return[...a,...o].forEach(t=>{const l=t.id||`${t.email}-${t.full_name}`;s.has(l)||s.set(l,t)}),Array.from(s.values())}else if(e==="contact"){const a=F(),s=new Map;return[...a,...o].forEach(t=>{const l=t.id||`${t.email}-${t.name}`;s.has(l)||s.set(l,t)}),Array.from(s.values())}}return[]}async function $(){const e=document.getElementById("app");if(!e)return;const o=await re();e.innerHTML=`
    ${H(A,S,"admin")}

    <main class="admin-container" style="flex: 1; padding: 2.5rem 1.5rem; max-width: 1320px; margin: 0 auto; width: 100%; box-sizing: border-box;">
      
      <!-- Top Title & Controls Header -->
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1.25rem; margin-bottom: 2rem; border-bottom: 1.5px solid var(--border); padding-bottom: 1.5rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
            <span style="background: rgba(16, 185, 129, 0.15); color: #059669; border: 1px solid #10b981; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; display: inline-flex; align-items: center; gap: 0.35rem;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; animation: pulse-ring 2s infinite;"></span>
              SQL RELATIONAL DB ACTIVE
            </span>
            <span style="font-size: 0.82rem; color: var(--foreground-muted); font-family: monospace; background: var(--surface-subtle); padding: 0.2rem 0.5rem; border-radius: 6px; border: 1px solid var(--border);">SQLite • prayas.db</span>
          </div>
          <h1 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 800; font-family: var(--font-display); margin: 0; color: var(--foreground);">
            Executive SQL Database & Operations Dashboard
          </h1>
          <p style="color: var(--foreground-muted); margin: 0.35rem 0 0 0; font-size: 1rem;">
            Real-time management for 80G Tax-Deductible Contributions, Direct Bank Payments, and Volunteer Rosters.
          </p>
        </div>

        <!-- Real Executive Action Buttons -->
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <button id="btn-manual-donor" class="btn btn-sm btn-primary hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700;">
            <span>💳 + Log Donation (Offline/Wire)</span>
          </button>
          <button id="btn-manual-volunteer" class="btn btn-sm hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700; border: 1.5px solid var(--primary); color: var(--primary); background: var(--surface-card);">
            <span>🤝 + Register Volunteer / Staff</span>
          </button>
          <button id="btn-refresh-dashboard" class="btn btn-sm btn-secondary hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700;">
            <span>🔄 Refresh DB</span>
          </button>
          <a href="./index.html" class="btn btn-sm btn-secondary hover-lift" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1.2rem; border-radius: 999px; font-weight: 700; text-decoration: none;">
            <span>🏠 Back to Website</span>
          </a>
        </div>
      </div>

      <!-- KPI Executive Metrics Cards (3 Clean Cards) -->
      <div class="kpi-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
        
        <div class="kpi-card hover-lift" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">💰 Total Funds Raised</span>
          <span style="font-size: 2.1rem; font-weight: 800; color: #059669; font-family: var(--font-display);">${o.total_donations_formatted}</span>
          <span style="font-size: 0.82rem; color: var(--foreground-muted);">Registered in SQL across ${o.donor_count} active donor contributions</span>
        </div>

        <div class="kpi-card hover-lift" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">🛡️ 80G Tax-Exempt Funds</span>
          <span style="font-size: 2.1rem; font-weight: 800; color: var(--primary); font-family: var(--font-display);">${o.donations_80g_total_formatted||"₹0.00"}</span>
          <span style="font-size: 0.82rem; color: var(--foreground-muted);">${o.donations_80g_count||0} official PAN certificates issued</span>
        </div>

        <div class="kpi-card hover-lift" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.4rem;">
          <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">⚡ Normal Direct Donations</span>
          <span style="font-size: 2.1rem; font-weight: 800; color: #d97706; font-family: var(--font-display);">${o.normal_donations_total_formatted||"₹0.00"}</span>
          <span style="font-size: 0.82rem; color: var(--foreground-muted);">${o.normal_donations_count||0} direct contributions</span>
        </div>

      </div>

      <!-- Database Navigation Tabs -->
      <div style="display: flex; gap: 0.65rem; margin-bottom: 1.5rem; flex-wrap: wrap; align-items: center;">
        <button class="tab-btn ${E==="donations"?"active":""}" data-tab="donations">
          💳 All Donations (${o.donor_count})
        </button>
        <button class="tab-btn ${E==="donations_80g"?"active":""}" data-tab="donations_80g">
          🛡️ 80G Tax Receipts (${o.donations_80g_count||0})
        </button>
        <button class="tab-btn ${E==="donations_normal"?"active":""}" data-tab="donations_normal">
          ⚡ Normal (${o.normal_donations_count||0})
        </button>
        <button class="tab-btn ${E==="volunteers"?"active":""}" data-tab="volunteers">
          🤝 Volunteers (${o.volunteer_count})
        </button>
        <button class="tab-btn ${E==="contact"?"active":""}" data-tab="contact">
          📬 Inquiries (${o.total_inquiries})
        </button>
        <button class="tab-btn ${E==="email_settings"?"active":""}" data-tab="email_settings" style="background: rgba(16, 185, 129, 0.1); border-color: #10b981; color: #047857;">
          ⚙️ Email & Receipts
        </button>
      </div>

      <!-- Data Table Card Container -->
      <div class="sql-table-wrapper glass-card" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; padding: 1.5rem; overflow-x: auto; box-shadow: var(--shadow-md);">
        <div id="table-content-mount">
          <div style="text-align: center; padding: 2.5rem; color: var(--foreground-muted);">
            <div class="animate-spin" style="display: inline-block; width: 28px; height: 28px; border: 3px solid var(--primary); border-top-color: transparent; border-radius: 50%;"></div>
            <p style="margin-top: 1rem; font-weight: 600;">Fetching live SQL records...</p>
          </div>
        </div>
      </div>

    </main>

    <!-- Modal 1: Manual Real Donation Entry -->
    <div id="modal-log-donation" style="display: none; position: fixed; inset: 0; z-index: 999999; background: rgba(0,0,0,0.65); backdrop-filter: blur(6px); align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; max-width: 520px; width: 100%; padding: 2rem; box-shadow: 0 25px 60px rgba(0,0,0,0.4); max-height: 90vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3 style="margin: 0; font-weight: 800; font-family: var(--font-display);">💳 Log Offline / Wire Donation</h3>
          <button type="button" id="close-modal-donation-btn" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--foreground);">&times;</button>
        </div>
        <form id="form-log-donation" style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Donor Full Name *</label>
            <input type="text" id="manual-donor-name" required placeholder="e.g. Ramesh Kulkarni" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Email Address *</label>
              <input type="email" id="manual-donor-email" required placeholder="name@domain.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Phone Number *</label>
              <input type="tel" id="manual-donor-phone" required placeholder="+91-9820000000" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Amount (₹ INR) *</label>
              <input type="number" id="manual-donor-amount" required min="10" placeholder="5000" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Payment Mode</label>
              <select id="manual-donor-mode" class="form-select" style="width: 100%; box-sizing: border-box;">
                <option value="Direct Bank Transfer (NEFT/IMPS)">Direct Bank Transfer (NEFT/IMPS)</option>
                <option value="Cheque / DD">Cheque / Demand Draft</option>
                <option value="UPI / QR Code">UPI / QR Code</option>
                <option value="Cash / Receipt">Cash with Receipt</option>
              </select>
            </div>
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">PAN Number (Optional, for 80G Tax Exemption)</label>
            <input type="text" id="manual-donor-pan" maxlength="10" placeholder="ABCDE1234F" class="form-input" style="width: 100%; text-transform: uppercase; font-weight: 700; box-sizing: border-box;" />
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">UTR / Cheque / Transaction No.</label>
            <input type="text" id="manual-donor-txn" placeholder="e.g. UTR423891028341 or CHQ-092831" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Cause / Purpose</label>
            <input type="text" id="manual-donor-cause" value="MPS Malvani Educational Kits & Digital Labs" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <button type="submit" id="btn-submit-manual-donation" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%; padding: 0.75rem;">
            💾 Save Donation to SQLite Database
          </button>
        </form>
      </div>
    </div>

    <!-- Modal 2: Manual Real Volunteer Entry -->
    <div id="modal-log-volunteer" style="display: none; position: fixed; inset: 0; z-index: 999999; background: rgba(0,0,0,0.65); backdrop-filter: blur(6px); align-items: center; justify-content: center; padding: 1rem;">
      <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 20px; max-width: 520px; width: 100%; padding: 2rem; box-shadow: 0 25px 60px rgba(0,0,0,0.4); max-height: 90vh; overflow-y: auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3 style="margin: 0; font-weight: 800; font-family: var(--font-display);">🤝 Register Volunteer / Staff</h3>
          <button type="button" id="close-modal-vol-btn" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--foreground);">&times;</button>
        </div>
        <form id="form-log-volunteer" style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Full Name *</label>
            <input type="text" id="manual-vol-name" required placeholder="e.g. Dr. Shraddha Kadam" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Email Address *</label>
              <input type="email" id="manual-vol-email" required placeholder="name@domain.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Phone Number *</label>
              <input type="tel" id="manual-vol-phone" required placeholder="+91-9820000000" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
          </div>
          <div>
            <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Domain / Contribution Area *</label>
            <input type="text" id="manual-vol-skills" required placeholder="e.g. Teaching Math, Sports Coaching, Health Camps" class="form-input" style="width: 100%; box-sizing: border-box;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">Availability</label>
              <select id="manual-vol-avail" class="form-select" style="width: 100%; box-sizing: border-box;">
                <option value="Weekends Only (Saturday & Sunday)">Weekends Only (Saturday & Sunday)</option>
                <option value="Weekdays (Monday to Friday)">Weekdays (Monday to Friday)</option>
                <option value="Full-Time (Daily On-Site / Regular)">Full-Time (Daily On-Site / Regular)</option>
                <option value="Part-Time (4 to 8 hours / week)">Part-Time (4 to 8 hours / week)</option>
                <option value="Flexible / Remote Mentorship">Flexible / Remote Mentorship</option>
                <option value="Events & Special Drives Only">Events & Special Drives Only</option>
              </select>
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.25rem;">City / Location</label>
              <input type="text" id="manual-vol-city" value="Mumbai" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
          </div>
          <button type="submit" id="btn-submit-manual-vol" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%; padding: 0.75rem;">
            💾 Register Volunteer in SQLite Database
          </button>
        </form>
      </div>
    </div>

    ${W(A,S)}
    ${V(A,S,"admin")}
    ${U()}
    ${Q()}
    ${J()}
  `,K(S),X(S),await j(E),ie()}async function j(e){const o=document.getElementById("table-content-mount");if(!o)return;if(e==="email_settings"){o.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 960px; margin: 0 auto;">
        
        <!-- 1. Live SMTP Connection Status Header -->
        <div id="smtp-live-status-container" style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div id="smtp-status-indicator" style="width: 15px; height: 15px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 12px #f59e0b;"></div>
            <div>
              <div id="smtp-status-heading" style="font-weight: 800; font-size: 1.1rem; color: var(--foreground);">Checking Live SMTP Status...</div>
              <div id="smtp-status-subtext" style="font-size: 0.84rem; color: var(--foreground-muted);">Querying FastAPI high-deliverability email engine</div>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" id="btn-refresh-smtp" class="btn btn-secondary" style="padding: 0.45rem 0.9rem; font-size: 0.82rem; font-weight: 700;">
              🔄 Refresh Status
            </button>
            <button type="button" id="btn-run-deep-diag" class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.82rem; font-weight: 700; background: #059669; border-color: #059669;">
              ⚡ Run Socket & TLS Test
            </button>
          </div>
        </div>

        <!-- Real-Time Diagnostic Terminal Console (Appears on test) -->
        <div id="smtp-diag-console" style="display: none; background: #0f172a; color: #38bdf8; border: 1.5px solid #1e293b; border-radius: 14px; padding: 1.25rem; font-family: monospace; font-size: 0.85rem; line-height: 1.6; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; margin-bottom: 0.75rem; color: #94a3b8; font-size: 0.78rem; font-weight: bold; text-transform: uppercase;">
            <span>🔬 Live SMTP Socket & Handshake Diagnostics</span>
            <span id="diag-status-badge" style="color: #4ade80;">Running...</span>
          </div>
          <div id="diag-console-output" style="white-space: pre-wrap; color: #e2e8f0;"></div>
        </div>

        <!-- 2. Instant Test 80G Receipt Sender (Live Verification) -->
        <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-size: 1.35rem;">🚀</span>
            <h3 style="margin: 0; font-weight: 800; font-size: 1.15rem; font-family: var(--font-display);">Send Live Test 80G Tax Receipt to Your Inbox</h3>
          </div>
          <p style="font-size: 0.88rem; color: var(--foreground-muted); margin: 0 0 1.25rem 0; line-height: 1.5;">
            Type your personal email address below and click <strong>"Send Test 80G Receipt"</strong>. The engine will dispatch an authentic Section 80G certificate with full RFC 5322 compliance directly to your real inbox.
          </p>

          <form id="form-send-test-receipt" style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <input type="email" id="test-receipt-target-email" required placeholder="Enter your email (e.g. name@gmail.com)" class="form-input" style="flex: 1; min-width: 260px; padding: 0.65rem 1rem; border-radius: 10px; border: 1.5px solid var(--border);" />
            <button type="submit" id="btn-submit-test-receipt" class="btn btn-primary" style="padding: 0.65rem 1.4rem; font-weight: 700; white-space: nowrap;">
              ✉️ Send Test 80G Receipt
            </button>
          </form>

          <div id="test-receipt-result-box" style="margin-top: 1rem; display: none; padding: 0.85rem 1.1rem; border-radius: 10px; font-size: 0.88rem; font-weight: 600; line-height: 1.5;">
          </div>
        </div>

        <!-- 3. SMTP Server Configuration Editor & 1-Click Presets -->
        <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.25rem;">⚙️</span>
                <h3 style="margin: 0; font-weight: 800; font-size: 1.15rem; font-family: var(--font-display);">SMTP Credentials Configuration</h3>
              </div>
              <p style="font-size: 0.86rem; color: var(--foreground-muted); margin: 0.35rem 0 0 0;">
                Configure your outgoing email server. Choose a 1-click preset below or enter custom SMTP credentials.
              </p>
            </div>
          </div>

          <!-- 1-Click Provider Quick-Fill Presets -->
          <div style="margin-bottom: 1.25rem; background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 12px; padding: 0.85rem 1rem;">
            <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted); display: block; margin-bottom: 0.5rem;">
              ⚡ 1-Click Provider Quick-Presets:
            </span>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.gmail.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟢 Gmail</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp-relay.brevo.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🔵 Brevo (Sendinblue)</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.sendgrid.net" data-port="587" data-user="apikey" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟣 SendGrid</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.office365.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟠 Outlook / 365</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.zoho.com" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🔴 Zoho Mail</button>
              <button type="button" class="btn-preset-provider btn btn-secondary" data-host="smtp.mailgun.org" data-port="587" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; font-weight: 700;">🟡 Mailgun</button>
            </div>
          </div>

          <form id="form-save-smtp-config" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">SMTP Host *</label>
              <input type="text" id="cfg-smtp-host" required value="smtp.gmail.com" placeholder="e.g. smtp.gmail.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">SMTP Port *</label>
              <input type="number" id="cfg-smtp-port" required value="587" placeholder="587 or 465" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">SMTP User / Email *</label>
              <input type="text" id="cfg-smtp-user" required placeholder="your-email@gmail.com" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">App Password / SMTP Password *</label>
              <input type="password" id="cfg-smtp-pass" required placeholder="16-character Google App Password" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div style="grid-column: 1 / -1;">
              <label style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 0.35rem;">Sender Display Name</label>
              <input type="text" id="cfg-smtp-from-name" value="Prayas Foundation Trust" class="form-input" style="width: 100%; box-sizing: border-box;" />
            </div>
            <div style="grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem;">
              <button type="button" id="btn-quick-test-form" class="btn btn-secondary" style="padding: 0.65rem 1.25rem; font-weight: 700;">
                ⚡ Test These Credentials
              </button>
              <button type="submit" id="btn-save-smtp-config" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-weight: 700;">
                💾 Save & Apply SMTP Configuration
              </button>
            </div>
          </form>

          <div id="smtp-config-feedback" style="margin-top: 1rem; display: none; padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.85rem; font-weight: 600;">
          </div>
        </div>

        <!-- 4. Quick Gmail 16-Char App Password Guide -->
        <div style="background: rgba(59, 130, 246, 0.06); border: 1.5px solid rgba(59, 130, 246, 0.2); border-radius: 16px; padding: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem 0; color: #2563eb; font-weight: 800; font-size: 1rem;">💡 How to get a free Gmail App Password (1 minute):</h4>
          <ol style="font-size: 0.88rem; color: var(--foreground); line-height: 1.6; margin: 0; padding-left: 1.25rem;">
            <li>Go to <a href="https://myaccount.google.com/security" target="_blank" style="color: #2563eb; font-weight: 700; text-decoration: underline;">Google Account Security</a> and make sure <strong>2-Step Verification</strong> is ON.</li>
            <li>Open <a href="https://myaccount.google.com/apppasswords" target="_blank" style="color: #2563eb; font-weight: 700; text-decoration: underline;">Google App Passwords</a>.</li>
            <li>Enter app name <code>Prayas Web</code> and click <strong>Create</strong>.</li>
            <li>Copy the 16-character code (e.g. <code>abcd efgh ijkl mnop</code>) and paste it into the <strong>App Password</strong> field above without spaces.</li>
          </ol>
        </div>

        <!-- 5. Email Dispatch History Logs -->
        <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.25rem;">📋</span>
              <h3 style="margin: 0; font-weight: 800; font-size: 1.15rem; font-family: var(--font-display);">Recent Email Dispatch Telemetry</h3>
            </div>
            <button type="button" id="btn-refresh-email-logs" class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.78rem; font-weight: 700;">
              🔄 Refresh Logs
            </button>
          </div>
          <div id="email-logs-table-container" style="overflow-x: auto;">
            <div style="text-align: center; padding: 1.5rem; color: var(--foreground-muted); font-size: 0.85rem;">
              Loading dispatched email records...
            </div>
          </div>
        </div>

      </div>
    `;async function t(){const c=document.getElementById("smtp-status-heading"),u=document.getElementById("smtp-status-subtext"),p=document.getElementById("smtp-status-indicator"),n=document.getElementById("cfg-smtp-user"),b=document.getElementById("cfg-smtp-host"),w=document.getElementById("cfg-smtp-port"),d=document.getElementById("cfg-smtp-from-name");try{const g=await _("/admin/smtp-status",{method:"GET"},2,800);if(g.ok){const v=(await g.json()).data||{};v.is_configured?(p&&(p.style.background="#10b981",p.style.boxShadow="0 0 12px #10b981"),c&&(c.textContent=`🟢 Live SMTP Active (${v.smtp_user})`),u&&(u.textContent=`Connected to ${v.smtp_host}:${v.smtp_port} • Ready to deliver 80G tax receipts directly to donor inboxes`)):(p&&(p.style.background="#f59e0b",p.style.boxShadow="0 0 12px #f59e0b"),c&&(c.textContent="🟡 SMTP Unconfigured (Client Fallback Active)"),u&&(u.textContent="Add your Gmail App Password below to enable automated server email delivery.")),n&&v.raw_user&&!n.value&&(n.value=v.raw_user),b&&v.smtp_host&&(b.value=v.smtp_host),w&&v.smtp_port&&(w.value=v.smtp_port),d&&v.from_name&&(d.value=v.from_name)}}catch{c&&(c.textContent="🟡 Python API Server Offline (Client Mode)"),u&&(u.textContent="Frontend 1-click Email & PDF dispatch is operational.")}}async function l(){const c=document.getElementById("email-logs-table-container");if(c)try{const u=await _("/admin/email-logs",{method:"GET"},2,800);if(u.ok){const n=(await u.json()).logs||[];if(n.length===0){c.innerHTML=`
              <div style="text-align: center; padding: 2rem; color: var(--foreground-muted); font-size: 0.88rem;">
                No dispatched emails logged yet. Send a test email above or complete a donation to see delivery logs.
              </div>
            `;return}c.innerHTML=`
            <table class="sql-table" style="font-size: 0.85rem;">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Recipient</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Provider / Host</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                ${n.map(b=>{const w=b.status==="DELIVERED",d=b.status==="FAILED",g=w?"badge-success":d?"badge":"badge-info",k=d?"background: rgba(239, 68, 68, 0.15); color: #dc2626; border: 1px solid #ef4444;":"";return`
                    <tr>
                      <td><span class="code-pill">#${b.id}</span></td>
                      <td style="font-weight: 700; color: var(--foreground);">${b.recipient}</td>
                      <td style="max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${b.subject}</td>
                      <td><span class="code-pill">${b.email_type}</span></td>
                      <td><span class="badge ${g}" style="${k}">${b.status}</span></td>
                      <td style="font-size: 0.8rem; color: var(--foreground-muted);">${b.provider||"SMTP"}</td>
                      <td style="font-size: 0.8rem; color: var(--foreground-muted);">${b.created_at||""}</td>
                    </tr>
                  `}).join("")}
              </tbody>
            </table>
          `}}catch{c.innerHTML=`
          <div style="text-align: center; padding: 1.5rem; color: var(--foreground-muted); font-size: 0.85rem;">
            Could not fetch email logs. Check that Python API server is running on port 8000.
          </div>
        `}}async function m(c=null){var w,d,g,k,v,T,D,P;const u=document.getElementById("smtp-diag-console"),p=document.getElementById("diag-console-output"),n=document.getElementById("diag-status-badge");if(!u||!p)return;u.style.display="block",n.textContent="Running Diagnostics...",n.style.color="#38bdf8",p.textContent=`Initiating socket handshake diagnostics...
`;const b=c||{host:(d=(w=document.getElementById("cfg-smtp-host"))==null?void 0:w.value)==null?void 0:d.trim(),port:Number((k=(g=document.getElementById("cfg-smtp-port"))==null?void 0:g.value)==null?void 0:k.trim()),user:(T=(v=document.getElementById("cfg-smtp-user"))==null?void 0:v.value)==null?void 0:T.trim(),password:(P=(D=document.getElementById("cfg-smtp-pass"))==null?void 0:D.value)==null?void 0:P.trim()};try{const M=await(await _("/admin/smtp-test-connection",{method:"POST",body:JSON.stringify(b)},1,1e3)).json(),I=M.data||{};let C="";I.steps&&I.steps.length>0&&(C+=I.steps.join(`
`)+`

`),M.status==="success"&&I.success?(n.textContent="✓ SMTP Diagnostic Passed",n.style.color="#10b981",C+=`✅ SUCCESS: Socket established, TLS handshake complete, and SMTP authentication succeeded.
Server is fully prepared to deliver 80G tax exemption receipts directly to donor inboxes.`):(n.textContent="⚠️ SMTP Issue Detected",n.style.color="#f87171",C+=`❌ DIAGNOSTIC FAILED:
${I.error||"Unknown connection error"}

Troubleshooting Tip:
• For Gmail, ensure 2-Step Verification is ON.
• Use a 16-character App Password, NOT your regular account password.`),p.textContent=C}catch(z){n.textContent="⚠️ Connection Error",n.style.color="#f87171",p.textContent=`Could not connect to FastAPI server: ${z.message}
Make sure 'python rag/api.py' is running.`}}t(),l(),document.querySelectorAll(".btn-preset-provider").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.host,p=c.dataset.port,n=c.dataset.user;u&&document.getElementById("cfg-smtp-host")&&(document.getElementById("cfg-smtp-host").value=u),p&&document.getElementById("cfg-smtp-port")&&(document.getElementById("cfg-smtp-port").value=p),n&&document.getElementById("cfg-smtp-user")&&(document.getElementById("cfg-smtp-user").value=n)})});const i=document.getElementById("btn-refresh-smtp");i&&i.addEventListener("click",()=>{t(),l()});const y=document.getElementById("btn-run-deep-diag");y&&y.addEventListener("click",()=>m());const r=document.getElementById("btn-quick-test-form");r&&r.addEventListener("click",()=>m());const f=document.getElementById("btn-refresh-email-logs");f&&f.addEventListener("click",l);const h=document.getElementById("form-send-test-receipt");h&&h.addEventListener("submit",async c=>{c.preventDefault();const u=document.getElementById("test-receipt-target-email").value.trim(),p=document.getElementById("btn-submit-test-receipt"),n=document.getElementById("test-receipt-result-box");if(u){p.disabled=!0,p.innerHTML="⏳ Dispatching Test Email...",n.style.display="none";try{const w=await(await _("/admin/send-test-receipt",{method:"POST",body:JSON.stringify({recipient_email:u})},1,1e3)).json(),d=w.data||{};n.style.display="block",w.status==="success"&&d.sent_live_smtp?(n.style.background="rgba(16, 185, 129, 0.15)",n.style.borderColor="#10b981",n.style.color="#047857",n.innerHTML=`✅ <strong>Success!</strong> Live test 80G tax receipt was dispatched to <u>${u}</u>. Please check your inbox (and spam/promotions folder).`,l()):(n.style.background="rgba(239, 68, 68, 0.12)",n.style.borderColor="#fca5a5",n.style.color="#dc2626",n.innerHTML=`⚠️ <strong>Delivery Note:</strong> ${d.smtp_error||"SMTP not configured or authentication failed. Make sure to use a 16-char Gmail App Password."}`)}catch(b){n.style.display="block",n.style.background="rgba(239, 68, 68, 0.12)",n.style.borderColor="#fca5a5",n.style.color="#dc2626",n.innerHTML=`⚠️ <strong>Server Note:</strong> ${b.message}. Check that the backend server is running on port 8000.`}finally{p.disabled=!1,p.innerHTML="✉️ Send Test 80G Receipt"}}});const x=document.getElementById("form-save-smtp-config");x&&x.addEventListener("submit",async c=>{c.preventDefault();const u=document.getElementById("cfg-smtp-host").value.trim(),p=Number(document.getElementById("cfg-smtp-port").value.trim()),n=document.getElementById("cfg-smtp-user").value.trim(),b=document.getElementById("cfg-smtp-pass").value.trim(),w=document.getElementById("cfg-smtp-from-name").value.trim(),d=document.getElementById("btn-save-smtp-config"),g=document.getElementById("smtp-config-feedback");d.disabled=!0,d.innerHTML="⏳ Saving Credentials...";try{(await _("/admin/smtp-config",{method:"POST",body:JSON.stringify({host:u,port:p,user:n,password:b,from_name:w})},1,1e3)).ok?(g.style.display="block",g.style.background="rgba(16, 185, 129, 0.15)",g.style.color="#047857",g.innerHTML="✓ SMTP configuration saved and reloaded successfully! Testing connection...",await t(),await m({host:u,port:p,user:n,password:b})):(g.style.display="block",g.style.background="rgba(239, 68, 68, 0.12)",g.style.color="#dc2626",g.innerHTML="Failed to save configuration.")}catch(k){g.style.display="block",g.style.background="rgba(239, 68, 68, 0.12)",g.style.color="#dc2626",g.innerHTML=`Error saving configuration: ${k.message}`}finally{d.disabled=!1,d.innerHTML="💾 Save & Apply SMTP Configuration"}});return}function a(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const s=await B(e);if(!s||s.length===0){o.innerHTML=`
      <div style="text-align: center; padding: 3rem; color: var(--foreground-muted);">
        <p style="font-size: 1.1rem; font-weight: 700; margin: 0 0 0.5rem 0;">No records found in this view.</p>
        <p style="font-size: 0.85rem; margin: 0;">Submit a transaction on the website or use the buttons above to add entries.</p>
      </div>
    `;return}e.startsWith("donations")?(o.innerHTML=`
      <table class="sql-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date & Time</th>
            <th>Donor Name</th>
            <th>Contact</th>
            <th>Amount</th>
            <th>Tax Type</th>
            <th>Payment Mode</th>
            <th>80G Receipt No</th>
            <th>PAN</th>
            <th>Status</th>
            <th style="text-align: right;">Receipt Actions</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(t=>{const l=t.created_at?new Date(t.created_at).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"}):"Recorded recently",m=a(t.donor_name),i=a(t.donor_email),y=a(t.donor_phone),r=a(t.tax_80g_receipt_no),f=a(t.donor_pan),h=a(t.payment_mode);return`
              <tr>
                <td><span class="code-pill">#${t.id}</span></td>
                <td style="font-size: 0.82rem; color: var(--foreground-muted); white-space: nowrap;">📅 ${l}</td>
                <td style="font-weight: 700; color: var(--foreground);">${m}</td>
                <td style="font-size: 0.85rem; color: var(--foreground-muted);">${i}<br/>${y||""}</td>
                <td style="font-weight: 800; color: #059669; font-size: 1.05rem;">
                  ₹${Number(t.amount).toLocaleString("en-IN")}.00
                </td>
                <td>
                  ${t.tax_80g_receipt_no?'<span class="badge badge-success" style="font-weight: 700;">🛡️ 80G Tax Exempt</span>':'<span class="badge badge-info" style="background: rgba(217, 119, 6, 0.15); color: #d97706; border: 1px solid #f59e0b;">⚡ Normal Direct</span>'}
                </td>
                <td><span class="code-pill">${h||"UPI"}</span></td>
                <td><span class="code-pill" style="color: #059669; font-weight: 700;">${r||'<span style="color: var(--foreground-muted);">None</span>'}</span></td>
                <td><span class="code-pill">${f||'<span style="color: var(--foreground-muted);">N/A</span>'}</span></td>
                <td><span class="badge badge-success">COMPLETED</span></td>
                <td style="text-align: right;">
                  <div style="display: flex; gap: 0.4rem; justify-content: flex-end; align-items: center;">
                    <button type="button" class="btn-resend-receipt-action" data-id="${t.id}" data-email="${i}" title="Open 80G receipt dispatch hub for ${i}" style="background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid #10b981; padding: 0.35rem 0.65rem; border-radius: 8px; font-weight: 700; font-size: 0.78rem; cursor: pointer; transition: all 0.2s ease;">
                      ✉️ Receipt Hub
                    </button>
                    <button type="button" class="btn-direct-print-pdf" data-id="${t.id}" title="Download Official PDF" style="background: var(--surface-subtle); color: var(--foreground); border: 1px solid var(--border); padding: 0.35rem 0.55rem; border-radius: 8px; font-weight: 700; font-size: 0.78rem; cursor: pointer;">
                      🖨️ PDF
                    </button>
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `,o.querySelectorAll(".btn-resend-receipt-action").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation();const m=Number(t.dataset.id),i=s.find(y=>y.id===m)||{id:m,donor_name:"Donor",donor_email:t.dataset.email,amount:5e3,transaction_id:`TXN-${m}`,tax_80g_receipt_no:`80G-PF-2026-X${m}`};se(i)})}),o.querySelectorAll(".btn-direct-print-pdf").forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation();const m=Number(t.dataset.id),i=s.find(y=>y.id===m);i&&O(i)})})):e==="volunteers"?(o.innerHTML=`
      <table class="sql-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date Registered</th>
            <th>Full Name</th>
            <th>Contact</th>
            <th>Skills / Domain</th>
            <th>Availability</th>
            <th>Location</th>
            <th>Status</th>
            <th style="text-align: right;">Operational Action</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(t=>{const l=t.status||"NEW",m=l==="ACTIVE"?"badge-success":l==="ONBOARDED"?"badge-primary":"badge-info",i=t.created_at?new Date(t.created_at).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"}):"Recently registered",y=a(t.full_name),r=a(t.email),f=a(t.phone),h=a(t.skills),x=a(t.availability),c=a(t.city);return`
              <tr>
                <td><span class="code-pill">#${t.id}</span></td>
                <td style="font-size: 0.82rem; color: var(--foreground-muted); white-space: nowrap;">📅 ${i}</td>
                <td style="font-weight: 700;">${y}</td>
                <td style="font-size: 0.85rem; color: var(--foreground-muted);">${r}<br/>${f}</td>
                <td style="font-weight: 600;">${h||"Teaching"}</td>
                <td><span class="code-pill">${x||"Weekends"}</span></td>
                <td>${c||"Mumbai"}</td>
                <td><span class="badge ${m}">${l}</span></td>
                <td style="text-align: right;">
                  <select class="form-select select-vol-status" data-id="${t.id}" style="font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 6px;">
                    <option value="NEW" ${l==="NEW"?"selected":""}>NEW</option>
                    <option value="CONTACTED" ${l==="CONTACTED"?"selected":""}>CONTACTED</option>
                    <option value="ONBOARDED" ${l==="ONBOARDED"?"selected":""}>ONBOARDED</option>
                    <option value="ACTIVE" ${l==="ACTIVE"?"selected":""}>ACTIVE</option>
                  </select>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `,o.querySelectorAll(".select-vol-status").forEach(t=>{t.addEventListener("change",async l=>{const m=t.dataset.id,i=t.value;try{await _(`/volunteers/${m}/status?status=${encodeURIComponent(i)}`,{method:"PATCH"},1,800)}catch{}const y=q(),r=y.find(f=>f.id===Number(m));r&&(r.status=i,ne(y)),await $()})})):e==="contact"&&(o.innerHTML=`
      <table class="sql-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date Submitted</th>
            <th>Visitor Name</th>
            <th>Contact</th>
            <th>Subject</th>
            <th>Message & Availability</th>
            <th>Status</th>
            <th style="text-align: right;">Resolution Action</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(t=>{const l=t.created_at?new Date(t.created_at).toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"}):"Recently submitted",m=a(t.name),i=a(t.email),y=a(t.phone),r=a(t.subject),f=a(t.message);return`
              <tr>
                <td><span class="code-pill">#${t.id}</span></td>
                <td style="font-size: 0.82rem; color: var(--foreground-muted); white-space: nowrap;">📅 ${l}</td>
                <td style="font-weight: 700;">${m}</td>
                <td style="font-size: 0.85rem; color: var(--foreground-muted);">${i}<br/>${y||""}</td>
                <td style="font-weight: 600;">${r||"General Inquiry"}</td>
                <td style="max-width: 320px; font-size: 0.88rem; line-height: 1.4; white-space: pre-wrap;">${f}</td>
                <td>
                  <span class="badge ${t.is_resolved?"badge-success":"badge-warning"}">
                    ${t.is_resolved?"RESOLVED":"PENDING"}
                  </span>
                </td>
                <td style="text-align: right;">
                  <button class="btn-resolve-action" data-id="${t.id}" data-resolved="${t.is_resolved?0:1}" style="background: ${t.is_resolved?"var(--surface-subtle)":"rgba(16, 185, 129, 0.15)"}; color: ${t.is_resolved?"var(--foreground-muted)":"#059669"}; border: 1px solid ${t.is_resolved?"var(--border)":"#10b981"}; padding: 0.35rem 0.75rem; border-radius: 8px; font-weight: 700; font-size: 0.78rem; cursor: pointer;">
                    ${t.is_resolved?"↩️ Re-open":"✓ Mark Resolved"}
                  </button>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    `,o.querySelectorAll(".btn-resolve-action").forEach(t=>{t.addEventListener("click",async()=>{const l=t.dataset.id,m=Number(t.dataset.resolved);try{await _(`/contact/${l}/resolve?is_resolved=${m}`,{method:"PATCH"},1,800)}catch{}const i=F(),y=i.find(r=>r.id===Number(l));y&&(y.is_resolved=m,ae(i)),await $()})}))}function ie(){const e=document.getElementById("lang-toggle-btn");e&&e.addEventListener("click",d=>{d.preventDefault(),window.openLanguageModal()}),document.querySelectorAll(".lang-select-option").forEach(d=>{d.addEventListener("click",()=>{const g=d.dataset.lang||"en";window.setPrayasLanguage(g)})});const o=document.getElementById("theme-toggle-btn");o&&o.addEventListener("click",()=>{L=L==="dark"?"light":"dark",document.documentElement.setAttribute("data-theme",L),localStorage.setItem("prayas_theme",L),R()});const a=document.getElementById("mobile-menu-btn"),s=document.getElementById("drawer-close-btn"),t=document.getElementById("drawer-overlay");a&&a.addEventListener("click",d=>{d.preventDefault(),window.openPrayasMenu()}),s&&s.addEventListener("click",d=>{d.preventDefault(),window.closePrayasMenu()}),t&&t.addEventListener("click",d=>{d.preventDefault(),window.closePrayasMenu()});const l=document.getElementById("nav-donate-btn"),m=document.getElementById("drawer-donate-btn"),i=document.getElementById("donate-modal"),y=document.getElementById("close-donate-modal-btn");function r(d){i&&(d?(i.parentElement!==document.body&&document.body.appendChild(i),i.style.setProperty("display","flex","important"),i.style.setProperty("opacity","1","important"),i.style.setProperty("visibility","visible","important"),i.style.setProperty("pointer-events","auto","important"),i.classList.add("open"),document.body.style.overflow="hidden"):(i.style.setProperty("display","none","important"),i.style.setProperty("opacity","0","important"),i.style.setProperty("visibility","hidden","important"),i.style.setProperty("pointer-events","none","important"),i.classList.remove("open"),document.body.style.overflow=""))}l&&l.addEventListener("click",()=>r(!0)),m&&m.addEventListener("click",()=>{window.closePrayasMenu(),r(!0)}),y&&y.addEventListener("click",()=>r(!1)),i&&i.addEventListener("click",d=>{d.target===i&&r(!1)}),document.querySelectorAll(".tab-btn").forEach(d=>{d.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(g=>g.classList.remove("active")),d.classList.add("active"),E=d.dataset.tab,j(E)})});const f=document.getElementById("btn-refresh-dashboard");f&&f.addEventListener("click",async()=>{f.textContent="🔄 Loading...",await $()});const h=document.getElementById("btn-manual-donor"),x=document.getElementById("modal-log-donation"),c=document.getElementById("close-modal-donation-btn"),u=document.getElementById("form-log-donation");h&&x&&h.addEventListener("click",()=>{x.parentElement!==document.body&&document.body.appendChild(x),x.style.display="flex"}),c&&x&&c.addEventListener("click",()=>{x.style.display="none"}),u&&u.addEventListener("submit",async d=>{d.preventDefault();const g=document.getElementById("manual-donor-name").value.trim(),k=document.getElementById("manual-donor-email").value.trim(),v=document.getElementById("manual-donor-phone").value.trim(),T=Number(document.getElementById("manual-donor-amount").value.trim()),D=document.getElementById("manual-donor-mode").value,P=document.getElementById("manual-donor-pan").value.trim().toUpperCase(),z=document.getElementById("manual-donor-txn").value.trim(),M=document.getElementById("manual-donor-cause").value.trim(),I=!!(P&&P.length>=10);await Y({donor_name:g,donor_email:k,donor_phone:v,donor_pan:P,amount:T,payment_mode:D,transaction_id:z||void 0,cause:M||"General School Welfare",is_80g:I}),x.style.display="none",u.reset(),E="donations",await $()});const p=document.getElementById("btn-manual-volunteer"),n=document.getElementById("modal-log-volunteer"),b=document.getElementById("close-modal-vol-btn"),w=document.getElementById("form-log-volunteer");p&&n&&p.addEventListener("click",()=>{n.parentElement!==document.body&&document.body.appendChild(n),n.style.display="flex"}),b&&n&&b.addEventListener("click",()=>{n.style.display="none"}),w&&w.addEventListener("submit",async d=>{d.preventDefault();const g=document.getElementById("manual-vol-name").value.trim(),k=document.getElementById("manual-vol-email").value.trim(),v=document.getElementById("manual-vol-phone").value.trim(),T=document.getElementById("manual-vol-skills").value.trim(),D=document.getElementById("manual-vol-avail").value,P=document.getElementById("manual-vol-city").value.trim();await Z({full_name:g,email:k,phone:v,skills:T,availability:D,city:P||"Mumbai"}),n.style.display="none",w.reset(),E="volunteers",await $()}),R()}function R(){const e=document.getElementById("theme-icon-sun"),o=document.getElementById("theme-icon-moon");e&&o&&(L==="dark"?(e.style.display="block",o.style.display="none"):(e.style.display="none",o.style.display="block"))}function se(e){let o=document.getElementById("modal-admin-receipt-hub");o||(o=document.createElement("div"),o.id="modal-admin-receipt-hub",o.style.cssText="position: fixed; inset: 0; z-index: 9999999; background: rgba(0,0,0,0.7); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 1rem;",document.body.appendChild(o));const a=!!(e.is_80g||e.tax_80g_receipt_no&&String(e.tax_80g_receipt_no).startsWith("80G")),s=e.tax_80g_receipt_no||(a?`80G-PF-2026-X${e.id}`:`RCP-PF-2026-N${e.id}`),t=!a&&s.startsWith("80G-PF-")?s.replace("80G-PF-","RCP-PF-"):s,l=Number(e.amount||0).toLocaleString("en-IN"),m=e.donor_email||"";o.innerHTML=`
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 16px; max-width: 580px; width: 92%; padding: 1.75rem; box-shadow: var(--shadow-xl); position: relative; max-height: 90vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
        <div>
          <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${a?"#059669":"#0284c7"};">
            ${a?"🛡️ Section 80G Tax Exemption Receipt":"⚡ Official Direct Donation Receipt"}
          </span>
          <h3 style="margin: 0.25rem 0 0 0; font-size: 1.35rem; font-weight: 800;">
            Receipt #${t}
          </h3>
        </div>
        <button type="button" id="close-admin-receipt-modal" style="background: none; border: none; font-size: 1.75rem; cursor: pointer; color: var(--foreground); line-height: 1;">&times;</button>
      </div>

      <div style="background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 1.25rem; font-size: 0.88rem; line-height: 1.6;">
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Donor Name:</span>
          <strong>${e.donor_name||"Donor"}</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Email Address:</span>
          <strong>${m}</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Amount Contributed:</span>
          <strong style="color: #059669; font-size: 1rem;">₹${l}.00</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Transaction Ref:</span>
          <code>${e.transaction_id||"UPI-REF"}</code>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--foreground-muted);">Category:</span>
          <strong>${a?"80G Tax Exempt (50% Deduction)":"General Support (Normal Direct)"}</strong>
        </div>
      </div>

      <div id="admin-dispatch-live-feedback" style="display: none; padding: 0.75rem 1rem; border-radius: 10px; margin-bottom: 1.25rem; font-size: 0.85rem; font-weight: 600;"></div>

      <h4 style="margin: 0 0 0.75rem 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted);">Choose Dispatch Method:</h4>

      <div style="display: flex; flex-direction: column; gap: 0.65rem;">
        <!-- Option 1: Live SMTP Dispatch -->
        <button type="button" id="btn-admin-smtp-dispatch" class="btn btn-primary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center;">
          <span>🚀 Send Live SMTP Email to Donor</span>
          <span style="font-size: 0.78rem; opacity: 0.9; font-weight: 500;">Server to Inbox</span>
        </button>

        <!-- Option 2: 1-Click Multi-Webmail Dispatch -->
        <div style="background: var(--surface-subtle); border: 1px solid var(--border); border-radius: 12px; padding: 0.75rem 1rem;">
          <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground-muted); display: block; margin-bottom: 0.5rem;">
            📧 1-Click Webmail Bridges:
          </span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <a href="${N(e,m).gmail}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              🟢 Open Gmail Web
            </a>
            <a href="${N(e,m).outlook}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              🟠 Open Outlook Web
            </a>
            <a href="${N(e,m).yahoo}" target="_blank" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              🟣 Open Yahoo Mail
            </a>
            <a href="${N(e,m).mailto}" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem; text-align: center; text-decoration: none; font-weight: 700; display: block;">
              📩 Default Mail App
            </a>
          </div>
        </div>

        <!-- Option 3: Print / Download PDF -->
        <button type="button" id="btn-admin-print-cert" class="btn btn-secondary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; border-color: var(--primary); color: var(--primary);">
          <span>🖨️ Print / Download Official ${a?"80G":"Donation"} PDF</span>
          <span style="font-size: 0.78rem; font-weight: 500;">High-Res Certificate</span>
        </button>

        <!-- Option 4: Share / Copy Receipt Link -->
        <button type="button" id="btn-admin-share-link" class="btn btn-secondary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; border-color: #6366f1; color: #4f46e5; background: rgba(99, 102, 241, 0.08);">
          <span>🔗 Copy / Share Direct PDF Link</span>
          <span style="font-size: 0.78rem; font-weight: 500;">Direct Link</span>
        </button>

        <!-- Option 5: WhatsApp -->
        <button type="button" id="btn-admin-wa-dispatch" class="btn btn-secondary" style="padding: 0.75rem 1.25rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; background: rgba(37, 211, 102, 0.1); border-color: #25d366; color: #15803d;">
          <span>💬 Send via WhatsApp</span>
          <span style="font-size: 0.78rem; font-weight: 500;">Direct Message</span>
        </button>
      </div>

      <div style="margin-top: 1.25rem; text-align: right;">
        <button type="button" id="btn-admin-close-modal" class="btn btn-secondary" style="padding: 0.45rem 1.25rem; font-size: 0.85rem; border-radius: 999px;">
          Close
        </button>
      </div>
    </div>
  `,o.style.display="flex";const i=document.getElementById("close-admin-receipt-modal"),y=document.getElementById("btn-admin-close-modal"),r=document.getElementById("admin-dispatch-live-feedback"),f=()=>{o.style.display="none"};i&&(i.onclick=f),y&&(y.onclick=f);const h=document.getElementById("btn-admin-smtp-dispatch");h&&(h.onclick=async()=>{h.disabled=!0,h.innerHTML="<span>⏳ Dispatching Live Email via SMTP...</span>",r.style.display="none";try{const n=await(await _(`/donations/${e.id}/email-receipt?recipient_email=${encodeURIComponent(m)}`,{method:"POST"},1,1e3)).json(),b=n.data||{};r.style.display="block",n.status==="success"&&b.sent_live_smtp?(r.style.background="rgba(16, 185, 129, 0.15)",r.style.color="#047857",r.style.border="1px solid #10b981",r.innerHTML=`✅ <strong>Dispatched!</strong> Official receipt was delivered to <u>${m}</u> over live SMTP.`,h.innerHTML="<span>✓ Dispatched to Inbox</span>"):(r.style.background="rgba(239, 68, 68, 0.12)",r.style.color="#dc2626",r.style.border="1px solid #fca5a5",r.innerHTML=`⚠️ <strong>SMTP Note:</strong> ${b.smtp_error||"SMTP credentials missing in .env. Use the 1-click webmail buttons below, or configure SMTP in Settings."}`,h.innerHTML="<span>⚠️ SMTP Offline - Use Webmail Below</span>")}catch(p){r.style.display="block",r.style.background="rgba(239, 68, 68, 0.12)",r.style.color="#dc2626",r.style.border="1px solid #fca5a5",r.innerHTML=`⚠️ <strong>API Note:</strong> ${p.message}. Use the 1-click webmail buttons below to send via Gmail/Outlook directly.`,h.innerHTML="<span>⚠️ Error - Use Webmail Below</span>"}finally{setTimeout(()=>{h.disabled=!1},3e3)}});const x=document.getElementById("btn-admin-print-cert");x&&(x.onclick=()=>{O(e)});const c=document.getElementById("btn-admin-share-link");if(c){const p=ee(e.id);c.onclick=async()=>{if(navigator.share)try{await navigator.share({title:`Prayas Foundation Receipt #${t}`,text:`Official donation receipt for ${e.donor_name||"Donor"} - Prayas Foundation`,url:p});return}catch{}try{await navigator.clipboard.writeText(p),c.innerHTML="<span>✓ Link Copied to Clipboard!</span>",c.style.background="#10b981",c.style.color="#ffffff",c.style.borderColor="#10b981",setTimeout(()=>{c.innerHTML='<span>🔗 Copy / Share Direct PDF Link</span><span style="font-size: 0.78rem; font-weight: 500;">Direct Link</span>',c.style.background="rgba(99, 102, 241, 0.08)",c.style.color="#4f46e5",c.style.borderColor="#6366f1"},2500)}catch{prompt("Direct PDF URL (Ctrl+C, Enter):",p)}}}const u=document.getElementById("btn-admin-wa-dispatch");u&&(u.onclick=()=>{te(e,e.donor_phone)})}document.getElementById("app")&&$();
