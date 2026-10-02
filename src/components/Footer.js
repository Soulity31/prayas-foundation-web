export function createFooter(content, currentLang) {
  const f = content[currentLang].footer;
  const nav = content[currentLang].nav;
  const c = content[currentLang].contact;

  return `
    <footer style="background: var(--surface-card); border-top: 1px solid var(--border); padding-top: 4.5rem; padding-bottom: 3rem; position: relative;">
      <div class="container" style="max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; text-align: center;">
        
        <!-- Footer Columns: Completely Centered -->
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; margin-bottom: 3.5rem; width: 100%; text-align: center;" class="md:grid-cols-2 lg:grid-cols-12">
          
          <!-- Col 1: Brand & Bio Centered -->
          <div class="lg:col-span-5" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; justify-content: center;">
              <img src="/assets/prayas-logo.png" alt="Prayas Foundation" style="height: 48px; object-fit: contain;" />
              <span class="font-display font-bold text-foreground block" style="font-size: 1.35rem;">Prayas Foundation</span>
            </div>

            <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.65; max-width: 440px; margin: 0 auto 1.5rem; text-align: center;">
              ${f.aboutSummary}
            </p>

            <!-- Social Links Centered -->
            <div style="display: flex; gap: 0.85rem; justify-content: center;">
              <a href="https://www.facebook.com/prayasfoundation.co.in" target="_blank" rel="noopener noreferrer" class="glass-badge hover-scale" style="padding: 0.6rem; border-radius: 50%;" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/prayasfoundation.co.in/" target="_blank" rel="noopener noreferrer" class="glass-badge hover-scale" style="padding: 0.6rem; border-radius: 50%;" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://x.com/WeArePrayas" target="_blank" rel="noopener noreferrer" class="glass-badge hover-scale" style="padding: 0.6rem; border-radius: 50%;" aria-label="X / Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
              <a href="https://wa.me/919820500726" target="_blank" rel="noopener noreferrer" class="glass-badge hover-scale" style="padding: 0.6rem; border-radius: 50%;" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Navigation Links Centered -->
          <div class="lg:col-span-3" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <h4 class="font-display font-bold text-foreground" style="font-size: 1.15rem; margin-bottom: 1.25rem;">
              ${f.quickLinks}
            </h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem; font-weight: 600; padding: 0; margin: 0; align-items: center;">
              <li><a href="/index.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${nav.home}</a></li>
              <li><a href="/about.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${nav.about}</a></li>
              <li><a href="/school.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${nav.school}</a></li>
              <li><a href="/programs.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${nav.programs}</a></li>
              <li><a href="/work.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${nav.work || (currentLang === 'mr' ? 'आमचे कार्य' : currentLang === 'hi' ? 'हमारा कार्य' : 'Our Work')}</a></li>
              <li><a href="/impact.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${nav.impact}</a></li>
              <li><a href="/contact.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${nav.contact}</a></li>
            </ul>
          </div>

          <!-- Col 3: Contact & Legal Centered -->
          <div class="lg:col-span-4" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <h4 class="font-display font-bold text-foreground" style="font-size: 1.15rem; margin-bottom: 1.25rem;">
              ${currentLang === 'mr' ? 'कार्यालय आणि पारदर्शकता' : currentLang === 'hi' ? 'कार्यालय व कानूनी' : 'Office & Transparency'}
            </h4>
            <div style="font-size: 1.05rem; color: var(--foreground-muted); display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; align-items: center;">
              <p style="max-width: 320px; margin: 0;">📍 ${c.address}</p>
              <p style="margin: 0;">📞 <a href="tel:+919820500726" class="hover-lift font-bold" style="color: var(--primary);">+91-9820500726</a></p>
              <p style="margin: 0;">✉️ <a href="mailto:info@prayasfoundation.co.in" class="hover-lift font-bold" style="color: var(--primary);">info@prayasfoundation.co.in</a></p>
            </div>

            <!-- Legal Modals Trigger Buttons & Admin Link -->
            <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.95rem; justify-content: center; align-items: center;">
              <button id="open-privacy-btn" class="hover-lift" style="color: var(--primary); text-decoration: underline; cursor: pointer; background: none; border: none; font-weight: 700; font-size: 0.95rem;">
                ${f.privacyPolicy}
              </button>
              <button id="open-terms-btn" class="hover-lift" style="color: var(--primary); text-decoration: underline; cursor: pointer; background: none; border: none; font-weight: 700; font-size: 0.95rem;">
                ${f.termsOfUse}
              </button>
              <a href="/admin.html" class="hover-lift" style="color: #059669; background: rgba(5, 150, 105, 0.1); border: 1px solid #059669; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 700; font-size: 0.82rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>🗄️ SQL Admin</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright & Universally Working Back to Top Bar Centered -->
        <div style="border-top: 1px solid var(--border); padding-top: 2rem; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; font-size: 0.95rem; color: var(--foreground-muted); text-align: center;">
          <p style="margin: 0; font-weight: 600;">${f.copyright}</p>
          <button type="button" class="btn btn-sm btn-secondary hover-lift" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; font-weight: 800; cursor: pointer; padding: 0.55rem 1.35rem; border-radius: 999px; background: var(--surface); color: var(--foreground); border: 1.5px solid var(--border);" title="Scroll to Top">
            <span style="color: var(--primary); font-size: 1.1rem;">↑</span>
            <span>${currentLang === 'mr' ? 'वरती जा (Back to Top)' : currentLang === 'hi' ? 'शीर्ष पर जाएँ (Back to Top)' : 'Back to Top'}</span>
          </button>
        </div>

      </div>
    </footer>
  `;
}
