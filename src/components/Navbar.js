export function createNavbar(content, currentLang, activePage = 'home') {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const t = (content[currentLang] || content['mr']).nav;

  const pages = [
    { id: 'home', href: './index.html', label: t.home, icon: '🏠' },
    { id: 'about', href: './about.html', label: t.about, icon: '📖' },
    { id: 'school', href: './school.html', label: t.school, icon: '🏫' },
    { id: 'programs', href: './programs.html', label: t.programs, icon: '🎯' },
    { id: 'work', href: './work.html', label: t.work || (isMr ? 'आमचे कार्य' : isHi ? 'हमारा कार्य' : 'Our Work'), icon: '🌟' },
    { id: 'impact', href: './impact.html', label: t.impact, icon: '📊' },
    { id: 'contact', href: './contact.html', label: t.contact, icon: '📞' }
  ];

  const langBtnText = isMr ? 'भाषा' : isHi ? 'भाषा' : 'Language';

  return `
    <header class="header-sticky glass-nav" id="main-header" style="z-index: 1000;">
      <div class="nav-inner-container flex items-center justify-between" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
        
        <!-- Brand Logo & Name -->
        <a href="./index.html" class="nav-brand flex items-center hover-scale" style="display: flex; align-items: center; text-decoration: none; min-width: 0;">
          <img src="./assets/prayas-logo.png" alt="Prayas Foundation Logo" class="nav-brand-logo" />
          <span class="nav-brand-text font-display font-bold text-foreground block">Prayas Foundation</span>
        </a>

        <!-- Right Tools: Home, Donate, Language, Theme, Menu -->
        <div class="nav-tools-wrap flex items-center" style="display: flex; align-items: center;">
          
          <!-- Home Button (Icon-only on mobile, Icon+Text on desktop) -->
          <a href="./index.html" class="nav-btn nav-home-btn hover-lift ${activePage === 'home' ? 'active' : ''}" title="${isMr ? 'मुख्य पृष्ठ' : isHi ? 'मुख्य पृष्ठ' : 'Home'}" aria-label="Home">
            <span class="nav-btn-icon" style="font-size: 1.05rem; line-height: 1;">🏠</span>
            <span class="nav-btn-text nav-home-text">${isMr ? 'होम' : isHi ? 'होम' : 'Home'}</span>
          </a>

          <!-- Donate CTA Button (Icon-only on mobile, Icon+Text on desktop) -->
          <button id="nav-donate-btn" type="button" class="nav-btn nav-donate-btn btn-accent hover-lift" title="${t.donate}" aria-label="Donate" onclick="window.openDonateModal ? window.openDonateModal() : null">
            <span class="nav-btn-icon" style="font-size: 0.95rem; line-height: 1;">❤️</span>
            <span class="nav-btn-text nav-donate-text">${t.donate}</span>
          </button>

          <!-- Language Selection Trigger Button (Opens Language Pop-up Modal) -->
          <button id="lang-toggle-btn" class="nav-btn nav-lang-btn glass-badge hover-scale" type="button" title="Select Language / भाषा निवडा" aria-label="Language" onclick="window.openLanguageModal && window.openLanguageModal()" style="padding: 0.45rem 0.85rem; display: flex; align-items: center; justify-content: center;">
            <span class="nav-btn-text font-bold" id="lang-label" style="font-size: 0.95rem; font-family: var(--font-display);">${langBtnText}</span>
          </button>

          <!-- Theme Switcher (Icon-only) -->
          <button id="theme-toggle-btn" class="nav-btn nav-theme-btn glass-badge hover-scale" type="button" title="Toggle Dark/Light Mode" aria-label="Toggle Theme">
            <svg id="theme-icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="hidden">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg id="theme-icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <!-- Pop-up 3-Line Menu Button (Icon-only on mobile, Icon+Text on desktop) -->
          <button id="mobile-menu-btn" type="button" class="nav-btn menu-squircle-btn" aria-label="Open Navigation Menu" title="Menu" onclick="window.openPrayasMenu ? window.openPrayasMenu() : (window.togglePrayasMenu && window.togglePrayasMenu(true))">
            <svg class="nav-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary); flex-shrink: 0;">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span class="nav-btn-text menu-btn-text font-bold" style="color: var(--foreground); font-family: var(--font-display);">${isMr ? 'मेनू' : isHi ? 'मेनू' : 'Menu'}</span>
          </button>

        </div>
      </div>
    </header>

    <!-- Navigation Pop-Up Modal -->
    <div id="drawer-overlay" class="drawer-overlay" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.78); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 99998;" onclick="window.closePrayasMenu ? window.closePrayasMenu() : (window.togglePrayasMenu && window.togglePrayasMenu(false))"></div>

    <div id="mobile-drawer" class="mobile-drawer" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 92%; max-width: 450px; max-height: 88vh; background: #ffffff; color: #0f172a; border-radius: 20px; border: 2px solid #10b981; z-index: 99999; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55); padding: 1.5rem; flex-direction: column; overflow-y: auto;" onclick="event.stopPropagation()">
      
      <!-- Modal Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; padding-bottom: 0.85rem; border-bottom: 2px solid #e2e8f0;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="./assets/prayas-logo.png" alt="Prayas Logo" style="height: 38px; width: auto;" />
          <span class="font-display font-bold block" style="font-size: 1.2rem; line-height: 1.2; color: #0f172a;">Prayas Foundation</span>
        </div>
        <button id="close-drawer-btn" type="button" class="hover-lift" style="width: 36px; height: 36px; border-radius: 50%; background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; font-weight: 800;" aria-label="Close Menu" onclick="window.closePrayasMenu ? window.closePrayasMenu() : (window.togglePrayasMenu && window.togglePrayasMenu(false))">
          ✕
        </button>
      </div>

      <!-- Navigation Links -->
      <nav style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.25rem;">
        ${pages.map(p => `
          <a href="${p.href}" class="hover-lift" style="display: flex; align-items: center; gap: 0.85rem; padding: 0.75rem 1rem; border-radius: 12px; font-size: 1rem; font-weight: 700; text-decoration: none; transition: all 0.15s ease; ${activePage === p.id ? 'background: #10b981; color: #ffffff; box-shadow: 0 4px 12px rgba(16,185,129,0.25);' : 'background: #f8fafc; color: #1e293b; border: 1px solid #e2e8f0;'}">
            <span style="font-size: 1.2rem;">${p.icon}</span>
            <span style="flex: 1;">${p.label}</span>
            ${activePage === p.id ? '<span style="font-size: 0.7rem; font-weight: 800; background: rgba(255,255,255,0.25); padding: 0.2rem 0.5rem; border-radius: 999px; text-transform: uppercase;">Active</span>' : '<span style="color: #94a3b8; font-size: 0.9rem;">→</span>'}
          </a>
        `).join('')}
      </nav>

      <!-- Bottom Actions & Contact Links -->
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.65rem; padding-top: 1rem; border-top: 2px solid #e2e8f0;">
        <button id="mobile-donate-btn" type="button" class="btn btn-accent" style="width: 100%; justify-content: center; font-weight: 800; padding: 0.75rem; font-size: 1rem; border-radius: 12px;" onclick="window.openDonateModal ? window.openDonateModal() : null">
          ❤️ ${t.donate}
        </button>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
          <a href="tel:+919820500726" style="padding: 0.65rem 0.5rem; background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; border-radius: 10px; font-weight: 700; font-size: 0.85rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
            📞 ${t.callUs}
          </a>
          <a href="https://wa.me/919820500726" target="_blank" rel="noopener noreferrer" style="padding: 0.65rem 0.5rem; background: #25d366; color: #ffffff; border-radius: 10px; font-weight: 700; font-size: 0.85rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
            💬 ${t.whatsapp}
          </a>
        </div>
      </div>

    </div>

    <!-- Dedicated Language Selection Pop-Up Modal (Center Staged) -->
    <div id="language-modal-overlay" class="modal-backdrop" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.78); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); z-index: 999998;" onclick="window.closeLanguageModal && window.closeLanguageModal()">
      <div id="language-modal-card" class="modal-panel" style="max-width: 420px; padding: 1.5rem; border-radius: 24px; border: 2px solid #10b981; background: var(--surface-card); box-shadow: 0 25px 60px rgba(0,0,0,0.6);" onclick="event.stopPropagation()">
        
        <!-- Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1.5px solid var(--border);">
          <div>
            <h3 class="font-display font-bold text-foreground" style="font-size: 1.15rem; margin: 0; line-height: 1.2;">
              ${isMr ? 'भाषा निवडा' : isHi ? 'भाषा चुनें' : 'Choose Language'}
            </h3>
            <p style="font-size: 0.78rem; color: var(--foreground-muted); margin: 0;">
              ${isMr ? 'आपली पसंतीची भाषा निवडा' : isHi ? 'अपनी पसंदीदा भाषा चुनें' : 'Select your preferred language'}
            </p>
          </div>
          <button type="button" class="hover-lift" style="width: 34px; height: 34px; border-radius: 50%; background: var(--surface-subtle); color: var(--foreground); border: 1px solid var(--border); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 800;" onclick="window.closeLanguageModal && window.closeLanguageModal()">
            ✕
          </button>
        </div>

        <!-- Language Options -->
        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          
          <!-- Marathi (Default) -->
          <button type="button" class="lang-select-option hover-lift ${currentLang === 'mr' ? 'is-active-lang' : ''}" data-lang="mr" style="display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.15rem; border-radius: 14px; border: 1.5px solid ${currentLang === 'mr' ? 'var(--primary)' : 'var(--border)'}; background: ${currentLang === 'mr' ? 'var(--primary-light-bg)' : 'var(--surface)'}; cursor: pointer; text-align: left; transition: all 0.2s ease;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <strong style="font-size: 1.05rem; color: ${currentLang === 'mr' ? 'var(--primary)' : 'var(--foreground)'}; font-weight: 800;">मराठी (Marathi)</strong>
            </div>
            ${currentLang === 'mr' ? '<span style="background: var(--primary); color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 999px;">✓ Active</span>' : ''}
          </button>

          <!-- Hindi -->
          <button type="button" class="lang-select-option hover-lift ${currentLang === 'hi' ? 'is-active-lang' : ''}" data-lang="hi" style="display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.15rem; border-radius: 14px; border: 1.5px solid ${currentLang === 'hi' ? 'var(--primary)' : 'var(--border)'}; background: ${currentLang === 'hi' ? 'var(--primary-light-bg)' : 'var(--surface)'}; cursor: pointer; text-align: left; transition: all 0.2s ease;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <strong style="font-size: 1.05rem; color: ${currentLang === 'hi' ? 'var(--primary)' : 'var(--foreground)'}; font-weight: 800;">हिन्दी (Hindi)</strong>
            </div>
            ${currentLang === 'hi' ? '<span style="background: var(--primary); color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 999px;">✓ Active</span>' : ''}
          </button>

          <!-- English -->
          <button type="button" class="lang-select-option hover-lift ${currentLang === 'en' ? 'is-active-lang' : ''}" data-lang="en" style="display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.15rem; border-radius: 14px; border: 1.5px solid ${currentLang === 'en' ? 'var(--primary)' : 'var(--border)'}; background: ${currentLang === 'en' ? 'var(--primary-light-bg)' : 'var(--surface)'}; cursor: pointer; text-align: left; transition: all 0.2s ease;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <strong style="font-size: 1.05rem; color: ${currentLang === 'en' ? 'var(--primary)' : 'var(--foreground)'}; font-weight: 800;">English</strong>
            </div>
            ${currentLang === 'en' ? '<span style="background: var(--primary); color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 999px;">✓ Active</span>' : ''}
          </button>

        </div>

      </div>
    </div>
  `;
}

export function createNavigationDrawer(content, currentLang, activePage = 'home') {
  return '';
}
