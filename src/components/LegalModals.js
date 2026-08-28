/**
 * Prayas Foundation - Legal Modals (Privacy Policy & Terms of Use)
 * Robust, mobile-optimized, cross-browser supported:
 * - Immediate global availability on window
 * - Dedicated cross close buttons and sticky bottom action buttons
 * - Sticky headers on scroll
 * - Click backdrop to dismiss & ESC key support
 * - Document event delegation
 */

// Define global helpers immediately so any button on the page can invoke them at any moment
export function openPrivacyModal(e) {
  if (e && e.preventDefault) e.preventDefault();
  let modal = document.getElementById('privacy-modal');
  if (!modal) return;
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
  modal.classList.add('open');
  modal.style.setProperty('display', 'flex', 'important');
  modal.style.setProperty('opacity', '1', 'important');
  modal.style.setProperty('pointer-events', 'auto', 'important');
  document.body.style.overflow = 'hidden';
}

export function closePrivacyModal(e) {
  if (e && e.preventDefault) e.preventDefault();
  let modal = document.getElementById('privacy-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.style.setProperty('display', 'none', 'important');
  modal.style.setProperty('opacity', '0', 'important');
  modal.style.setProperty('pointer-events', 'none', 'important');
  const otherOpen = document.querySelector('.modal-backdrop.open, .modal-overlay.open, .lightbox-modal.open');
  if (!otherOpen) {
    document.body.style.overflow = '';
  }
}

export function openTermsModal(e) {
  if (e && e.preventDefault) e.preventDefault();
  let modal = document.getElementById('terms-modal');
  if (!modal) return;
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
  modal.classList.add('open');
  modal.style.setProperty('display', 'flex', 'important');
  modal.style.setProperty('opacity', '1', 'important');
  modal.style.setProperty('pointer-events', 'auto', 'important');
  document.body.style.overflow = 'hidden';
}

export function closeTermsModal(e) {
  if (e && e.preventDefault) e.preventDefault();
  let modal = document.getElementById('terms-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.style.setProperty('display', 'none', 'important');
  modal.style.setProperty('opacity', '0', 'important');
  modal.style.setProperty('pointer-events', 'none', 'important');
  const otherOpen = document.querySelector('.modal-backdrop.open, .modal-overlay.open, .lightbox-modal.open');
  if (!otherOpen) {
    document.body.style.overflow = '';
  }
}

// Bind to window immediately
if (typeof window !== 'undefined') {
  window.openPrivacyModal = openPrivacyModal;
  window.closePrivacyModal = closePrivacyModal;
  window.openTermsModal = openTermsModal;
  window.closeTermsModal = closeTermsModal;
}

export function createLegalModals(content, currentLang) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  const t = {
    privacyTitle: isMr ? 'गोपनीयता धोरण' : isHi ? 'गोपनीयता नीति' : 'Privacy Policy',
    privacyBadge: isMr ? 'माहिती सुरक्षा व गोपनीयता' : isHi ? 'डेटा सुरक्षा व गोपनीयता' : 'Data Privacy & Security',
    termsTitle: isMr ? 'वापराच्या अटी व शर्ती' : isHi ? 'उपयोग की शर्तें और नियम' : 'Terms & Conditions',
    termsBadge: isMr ? 'अधिकृत सेवा अटी' : isHi ? 'आधिकारिक सेवा शर्तें' : 'Official Terms of Service',
    closeBtnText: isMr ? 'बंद करा' : isHi ? 'बंद करें' : 'Close',
    closeAria: isMr ? 'विंडो बंद करा' : isHi ? 'विंडो बंद करें' : 'Close Window',
    lastUpdated: isMr ? 'शेवटचे अद्यतन: ऑगस्ट २०२४' : isHi ? 'अंतिम अद्यतन: अगस्त २०२४' : 'Last Updated: August 2024',
    contactTitle: isMr ? 'संपर्क व अधिकृत नोंदणी' : isHi ? 'संपर्क एवं आधिकारिक पंजीकरण' : 'Contact & Trust Registration'
  };

  return `
    <!-- Privacy Policy Modal -->
    <div id="privacy-modal" class="modal-backdrop legal-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title" onclick="if(event.target === this) window.closePrivacyModal(event);">
      <div class="modal-panel legal-modal-panel" onclick="event.stopPropagation();">
        
        <!-- Sticky Header with Title and Cross Button -->
        <div class="legal-modal-header">
          <div style="padding-right: 3.5rem;">
            <span class="glass-badge-gold" style="font-size: 0.75rem; padding: 0.2rem 0.65rem; margin-bottom: 0.35rem; display: inline-flex; align-items: center; gap: 0.35rem;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              ${t.privacyBadge}
            </span>
            <h3 id="privacy-modal-title" class="font-display font-bold text-foreground" style="font-size: clamp(1.25rem, 3.5vw, 1.55rem); margin: 0; line-height: 1.25;">
              🛡️ ${t.privacyTitle}
            </h3>
          </div>
          <button id="close-privacy-modal-btn" class="modal-close-corner-btn hover-lift" type="button" aria-label="${t.closeAria}" title="${t.closeBtnText}" onclick="window.closePrivacyModal(event); return false;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <!-- Scrollable Content Body -->
        <div class="legal-modal-body">
          <p class="text-foreground" style="font-weight: 500; font-size: 0.95rem; line-height: 1.65; margin: 0 0 1rem 0;">
            ${isMr 
              ? 'प्रयास फाउंडेशन (नोंदणीकृत चॅरिटेबल ट्रस्ट, मुंबई) आपल्या वैयक्तिक गोपनीयतेचा आदर करतो. हे धोरण स्पष्ट करते की जेव्हा आपण आमच्या वेबसाइटचा वापर करता किंवा देणगी/स्वयंसेवक म्हणून जुळता तेव्हा आपली माहिती कशी संरक्षित केली जाते.'
              : isHi 
              ? 'प्रयास फाउंडेशन (पंजीकृत चैरिटेबल ट्रस्ट, मुंबई) आपकी व्यक्तिगत गोपनीयता का सम्मान करता है। यह नीति बताती है कि जब आप हमारी वेबसाइट का उपयोग करते हैं या दान/स्वयंसेवक के रूप में जुड़ते हैं, तो आपकी जानकारी कैसे सुरक्षित रखी जाती है।' 
              : 'Prayas Foundation (Registered Charitable Non-Profit Trust, Mumbai) is committed to protecting your personal privacy. This policy outlines how your information is collected, used, and safeguarded when visiting our website or supporting our grassroots programs.'}
          </p>

          <div class="legal-section-card">
            <h4 class="font-bold text-foreground" style="display: flex; align-items: center; gap: 0.4rem; font-size: 1rem; margin: 0 0 0.5rem 0;">
              📌 ${isMr ? '१. आम्ही कोणती माहिती गोळा करतो?' : isHi ? '१. हम कौन सी जानकारी एकत्र करते हैं?' : '1. Information We Collect'}
            </h4>
            <ul style="margin: 0; padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.9rem; color: var(--foreground-muted); line-height: 1.55;">
              <li>${isMr ? 'संपर्क व चौकशी फॉर्मद्वारे दिलेले नाव, ईमेल, आणि फोन नंबर.' : isHi ? 'संपर्क व पूछताछ फॉर्म द्वारा दिया गया नाम, ईमेल, और फोन नंबर।' : 'Contact details (name, email address, mobile number) provided voluntarily through forms.'}</li>
              <li>${isMr ? '८०G कर सवलत पावतीसाठी आवश्यक पॅन कार्ड आणि पत्ता (फक्त देणगीदारांसाठी).' : isHi ? '80G टैक्स छूट रसीद हेतु आवश्यक पैन नंबर और पता (केवल दानदाताओं के लिए)।' : 'PAN number and address strictly for generating official 80G tax exemption donation certificates.'}</li>
              <li>${isMr ? 'वेबसाइट सुरक्षा आणि विश्लेषणासाठी तांत्रिक लॉग्स (ब्राउझर प्रकार, IP).' : isHi ? 'वेबसाइट सुरक्षा और विश्लेषण के लिए तकनीकी लॉग्स।' : 'Anonymous website traffic and security telemetry to improve performance.'}</li>
            </ul>
          </div>

          <div class="legal-section-card">
            <h4 class="font-bold text-foreground" style="display: flex; align-items: center; gap: 0.4rem; font-size: 1rem; margin: 0 0 0.5rem 0;">
              🔒 ${isMr ? '२. माहितीचा वापर आणि सुरक्षा' : isHi ? '२. जानकारी का उपयोग और सुरक्षा' : '2. How We Use & Safeguard Your Data'}
            </h4>
            <p style="margin: 0; font-size: 0.9rem; color: var(--foreground-muted); line-height: 1.6;">
              ${isMr 
                ? 'आम्ही आपली माहिती फक्त शैक्षणिक उपक्रम, देणगी पावती पाठवणे आणि संवाद साधण्यासाठी वापरतो. <strong>आम्ही तुमची वैयक्तिक माहिती कोणत्याही तृतीय पक्षाला विकत नाही, भाड्याने देत नाही किंवा शेअर करत नाही.</strong> सर्व डेटा SSL/TLS २५६-बिट एनक्रिप्शनने सुरक्षित केला जातो.'
                : isHi 
                ? 'हम आपकी जानकारी का उपयोग केवल शैक्षिक पहलों, दान रसीदें भेजने और संचार के लिए करते हैं। <strong>हम आपकी व्यक्तिगत जानकारी किसी भी तीसरे पक्ष को बेचते, किराए पर या साझा नहीं करते हैं।</strong> संपूर्ण डेटा SSL/TLS 256-बिट एन्क्रिप्शन द्वारा सुरक्षित रहता है।' 
                : 'Your information is used strictly to process inquiries, deliver official donation receipts, and coordinate community programs. <strong>We do not sell, rent, or trade your personal data to any third party.</strong> All communication is encrypted via industry-standard SSL/TLS protocols.'}
            </p>
          </div>

          <div class="legal-section-card" style="background: var(--surface-subtle); border-left: 3px solid var(--primary);">
            <h4 class="font-bold text-foreground" style="font-size: 0.95rem; margin: 0 0 0.35rem 0;">
              🏛️ ${t.contactTitle}
            </h4>
            <p style="margin: 0; font-size: 0.85rem; color: var(--foreground-muted); line-height: 1.5;">
              <strong>Prayas Foundation NGO Trust</strong><br />
              📍 Room No. 2, Shivkripa Chawl, Rathodi Village, Marve Road, Malvani, Malad West, Mumbai - 400095<br />
              ✉️ Email: <a href="mailto:info@prayasfoundation.co.in" style="color: var(--primary); font-weight: 700;">info@prayasfoundation.co.in</a> | 📞 Phone: <a href="tel:+919820500726" style="color: var(--primary); font-weight: 700;">+91-9820500726</a>
            </p>
          </div>

          <div style="font-size: 0.8rem; color: var(--foreground-subtle); text-align: center; margin-top: 0.5rem;">
            ${t.lastUpdated}
          </div>
        </div>

        <!-- Sticky Bottom Actions Bar (Mobile Friendly) -->
        <div class="legal-modal-footer">
          <button id="close-privacy-bottom-btn" class="btn btn-secondary hover-lift" type="button" onclick="window.closePrivacyModal(event); return false;" style="padding: 0.55rem 1.4rem; font-weight: 700; font-size: 0.9rem; border-radius: 999px; display: inline-flex; align-items: center; gap: 0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <span>${t.closeBtnText}</span>
          </button>
        </div>

      </div>
    </div>

    <!-- Terms of Use Modal -->
    <div id="terms-modal" class="modal-backdrop legal-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="terms-modal-title" onclick="if(event.target === this) window.closeTermsModal(event);">
      <div class="modal-panel legal-modal-panel" onclick="event.stopPropagation();">
        
        <!-- Sticky Header with Title and Cross Button -->
        <div class="legal-modal-header">
          <div style="padding-right: 3.5rem;">
            <span class="glass-badge-gold" style="font-size: 0.75rem; padding: 0.2rem 0.65rem; margin-bottom: 0.35rem; display: inline-flex; align-items: center; gap: 0.35rem;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              ${t.termsBadge}
            </span>
            <h3 id="terms-modal-title" class="font-display font-bold text-foreground" style="font-size: clamp(1.25rem, 3.5vw, 1.55rem); margin: 0; line-height: 1.25;">
              📜 ${t.termsTitle}
            </h3>
          </div>
          <button id="close-terms-modal-btn" class="modal-close-corner-btn hover-lift" type="button" aria-label="${t.closeAria}" title="${t.closeBtnText}" onclick="window.closeTermsModal(event); return false;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <!-- Scrollable Content Body -->
        <div class="legal-modal-body">
          <p class="text-foreground" style="font-weight: 500; font-size: 0.95rem; line-height: 1.65; margin: 0 0 1rem 0;">
            ${isMr 
              ? 'प्रयास फाउंडेशनच्या वेबसाइटवर आपले स्वागत आहे. या वेबसाइटचा वापर करून आपण खालील अटी व शर्तींचे पालन करण्यास सहमती दर्शवता.'
              : isHi 
              ? 'प्रयास फाउंडेशन की वेबसाइट पर आपका स्वागत है। इस वेबसाइट का उपयोग करके आप निम्नलिखित नियमों और सेवा शर्तों का पालन करने के लिए सहमत होते हैं।' 
              : 'Welcome to Prayas Foundation. By browsing this website or participating in our initiatives, you agree to comply with and be bound by the following terms of use.'}
          </p>

          <div class="legal-section-card">
            <h4 class="font-bold text-foreground" style="display: flex; align-items: center; gap: 0.4rem; font-size: 1rem; margin: 0 0 0.5rem 0;">
              📖 ${isMr ? '१. बौद्धिक संपदा व साहित्य' : isHi ? '१. बौद्धिक संपदा व सामग्री' : '1. Intellectual Property & Fair Use'}
            </h4>
            <p style="margin: 0; font-size: 0.9rem; color: var(--foreground-muted); line-height: 1.6;">
              ${isMr 
                ? 'या वेबसाइटवरील सर्व छायाचित्रे, उपक्रम नोंदी, लोगो आणि मजकूर प्रयास फाउंडेशनची मालमत्ता आहेत. शैक्षणिक आणि सामाजिक जनजागृतीसाठी उचित संदर्भासह वापर करण्यास परवानगी आहे, परंतु व्यावसायिक गैरवापर करण्यास सक्त मनाई आहे.'
                : isHi 
                ? 'इस वेबसाइट पर मौजूद सभी तस्वीरें, कार्यक्रम विवरण, लोगो और सामग्री प्रयास फाउंडेशन की संपत्ति हैं। गैर-व्यावसायिक शैक्षिक एवं सामाजिक जागरूकता के लिए उचित संदर्भ के साथ उपयोग अनुमत है।' 
                : 'All photographs, event records, trademarks, and curriculum content published on this website are the intellectual property of Prayas Foundation. Non-commercial sharing for educational awareness is permitted with attribution.'}
            </p>
          </div>

          <div class="legal-section-card">
            <h4 class="font-bold text-foreground" style="display: flex; align-items: center; gap: 0.4rem; font-size: 1rem; margin: 0 0 0.5rem 0;">
              🤝 ${isMr ? '२. देणगी व ८०G कर सवलत नियम' : isHi ? '२. दान एवं 80G टैक्स छूट नियम' : '2. Charitable Donations & 80G Exemption'}
            </h4>
            <p style="margin: 0; font-size: 0.9rem; color: var(--foreground-muted); line-height: 1.6;">
              ${isMr 
                ? 'सर्व देणग्या १००% थेट मुंबई पब्लिक स्कूल मालवणी येथील विद्यार्थी शिक्षण, डिजिटल लॅब आणि अन्नदान उपक्रमांसाठी वापरल्या जातात. आयकर कलम ८०G अंतर्गत कर सवलत पावती मिळवण्यासाठी वैध पॅन नंबर देणे आवश्यक आहे.'
                : isHi 
                ? 'सभी दान 100% सीधे मुंबई पब्लिक स्कूल मालवणी के विद्यार्थियों की शिक्षा, डिजिटल लैब और अन्नदान हेतु उपयोग किए जाते हैं। आयकर धारा 80G के तहत कर छूट रसीद के लिए वैध पैन नंबर आवश्यक है।' 
                : 'All charitable contributions directly fund student education, digital Khan Academy labs, and social welfare programs at Mumbai Public School Malvani. Valid PAN submission is mandatory to receive official Section 80G tax benefit receipts.'}
            </p>
          </div>

          <div class="legal-section-card">
            <h4 class="font-bold text-foreground" style="display: flex; align-items: center; gap: 0.4rem; font-size: 1rem; margin: 0 0 0.5rem 0;">
              ⚖️ ${isMr ? '३. कायदेशीर कार्यक्षेत्र' : isHi ? '३. कानूनी क्षेत्राधिकार' : '3. Legal Jurisdiction'}
            </h4>
            <p style="margin: 0; font-size: 0.9rem; color: var(--foreground-muted); line-height: 1.6;">
              ${isMr 
                ? 'या अटी व शर्ती भारतीय कायद्यांनुसार नियंत्रित केल्या जातात. कोणतेही कायदेशीर वाद केवळ मुंबई, महाराष्ट्र न्यायालयाच्या अखत्यारीत असतील.'
                : isHi 
                ? 'ये नियम एवं शर्तें भारतीय कानूनों के अधीन हैं। किसी भी विवाद का समाधान केवल मुंबई, महाराष्ट्र के न्यायालयों के अधिकार क्षेत्र में होगा।' 
                : 'These terms are governed by the laws of India. Any legal dispute or claim arising from website usage shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.'}
            </p>
          </div>

          <div class="legal-section-card" style="background: var(--surface-subtle); border-left: 3px solid var(--primary);">
            <h4 class="font-bold text-foreground" style="font-size: 0.95rem; margin: 0 0 0.35rem 0;">
              🏛️ ${t.contactTitle}
            </h4>
            <p style="margin: 0; font-size: 0.85rem; color: var(--foreground-muted); line-height: 1.5;">
              <strong>Prayas Foundation (Malvani, Malad West, Mumbai)</strong><br />
              ✉️ Email: <a href="mailto:info@prayasfoundation.co.in" style="color: var(--primary); font-weight: 700;">info@prayasfoundation.co.in</a> | 📞 Phone: <a href="tel:+919820500726" style="color: var(--primary); font-weight: 700;">+91-9820500726</a>
            </p>
          </div>

          <div style="font-size: 0.8rem; color: var(--foreground-subtle); text-align: center; margin-top: 0.5rem;">
            ${t.lastUpdated}
          </div>
        </div>

        <!-- Sticky Bottom Actions Bar (Mobile Friendly) -->
        <div class="legal-modal-footer">
          <button id="close-terms-bottom-btn" class="btn btn-secondary hover-lift" type="button" onclick="window.closeTermsModal(event); return false;" style="padding: 0.55rem 1.4rem; font-weight: 700; font-size: 0.9rem; border-radius: 999px; display: inline-flex; align-items: center; gap: 0.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <span>${t.closeBtnText}</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

/**
 * Universal Event Listener and Controller Setup for Legal Modals
 */
export function setupLegalModalsComponent() {
  if (typeof window === 'undefined') return;

  window.openPrivacyModal = openPrivacyModal;
  window.closePrivacyModal = closePrivacyModal;
  window.openTermsModal = openTermsModal;
  window.closeTermsModal = closeTermsModal;

  // Global document click delegation for all legal modal triggers
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target) return;

    const privacyTrigger = target.closest('#open-privacy-btn, .open-privacy-btn, a[href="#privacy"]');
    if (privacyTrigger) {
      e.preventDefault();
      openPrivacyModal(e);
      return;
    }

    const termsTrigger = target.closest('#open-terms-btn, .open-terms-btn, a[href="#terms"]');
    if (termsTrigger) {
      e.preventDefault();
      openTermsModal(e);
      return;
    }

    const closePrivacy = target.closest('#close-privacy-modal-btn, #close-privacy-bottom-btn');
    if (closePrivacy) {
      e.preventDefault();
      closePrivacyModal(e);
      return;
    }

    const closeTerms = target.closest('#close-terms-modal-btn, #close-terms-bottom-btn');
    if (closeTerms) {
      e.preventDefault();
      closeTermsModal(e);
      return;
    }
  });

  // ESC Key listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const pm = document.getElementById('privacy-modal');
      const tm = document.getElementById('terms-modal');
      if (pm && (pm.classList.contains('open') || pm.style.display === 'flex')) closePrivacyModal(e);
      if (tm && (tm.classList.contains('open') || tm.style.display === 'flex')) closeTermsModal(e);
    }
  });
}
