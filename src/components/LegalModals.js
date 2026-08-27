export function createLegalModals(content, currentLang) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  return `
    <!-- Privacy Policy Modal -->
    <div id="privacy-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title">
      <div class="modal-panel">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3 id="privacy-modal-title" class="font-display font-bold text-foreground text-2xl">
            ${isMr ? 'गोपनीयता धोरण' : isHi ? 'गोपनीयता नीति' : 'Privacy Policy'}
          </h3>
          <button id="close-privacy-modal-btn" class="lightbox-btn" style="background: var(--surface-subtle); color: var(--foreground);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.65; display: flex; flex-direction: column; gap: 1rem;">
          <p>
            ${isMr 
              ? 'हे गोपनीयता धोरण स्पष्ट करते की जेव्हा आपण आमच्या वेबसाइटला भेट देता किंवा आमच्या सेवांचा वापर करता तेव्हा प्रयास फाउंडेशन आपली वैयक्तिक माहिती कशी गोळा, वापर आणि सुरक्षित करते.'
              : isHi 
              ? 'यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर आते हैं या हमारी सेवाओं का उपयोग करते हैं तो प्रयास फाउंडेशन आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है।' 
              : 'This privacy policy describes how Prayas Foundation collects, uses, and protects your personal information when you visit our website or interact with our services.'}
          </p>
          <h4 class="font-bold text-foreground">${isMr ? 'आम्ही कोणती माहिती गोळा करतो' : isHi ? 'हम कौन सी जानकारी एकत्र करते हैं' : 'Information We Collect'}</h4>
          <p>
            ${isMr 
              ? 'आम्ही आपले नाव, ईमेल पत्ता, फोन नंबर आणि संपर्क फॉर्मद्वारे आपण स्वेच्छेने दिलेली इतर कोणतीही माहिती गोळा करू शकतो.'
              : isHi 
              ? 'हम आपका नाम, ईमेल पता, फोन नंबर, और कोई भी अन्य जानकारी एकत्र कर सकते हैं जो आप हमारे संपर्क फॉर्म के माध्यम से स्वेच्छा से प्रदान करते हैं।' 
              : 'We may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide through our contact forms.'}
          </p>
          <h4 class="font-bold text-foreground">${isMr ? 'आम्ही आपल्या माहितीचा वापर कसा करतो' : isHi ? 'हम आपकी जानकारी का उपयोग कैसे करते हैं' : 'How We Use Your Information'}</h4>
          <p>
            ${isMr 
              ? 'आपल्या माहितीचा वापर आपल्या चौकशीला उत्तर देण्यासाठी, शैक्षणिक सेवा पुरवण्यासाठी आणि सामाजिक उपक्रम सुधारण्यासाठी केला जातो. आम्ही आपली वैयक्तिक माहिती कोणालाही विकत किंवा शेअर करत नाही.'
              : isHi 
              ? 'आपकी जानकारी का उपयोग आपकी पूछताछ का जवाब देने, सेवाएं प्रदान करने और हमारी वेबसाइट अनुभव को बेहतर बनाने के लिए किया जाता है। हम आपकी व्यक्तिगत जानकारी को किसी तीसरे पक्ष को नहीं बेचते या साझा नहीं करते।' 
              : 'Your information is used to respond to your inquiries, provide educational services, and improve our community programs. We do not sell or share your personal information with third parties.'}
          </p>
          <p style="font-size: 0.85rem; border-top: 1px solid var(--border); padding-top: 0.75rem;">
            Contact: <strong>info@prayasfoundation.co.in</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- Terms of Use Modal -->
    <div id="terms-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="terms-modal-title">
      <div class="modal-panel">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3 id="terms-modal-title" class="font-display font-bold text-foreground text-2xl">
            ${isMr ? 'वापराच्या अटी' : isHi ? 'उपयोग की शर्तें' : 'Terms of Use'}
          </h3>
          <button id="close-terms-modal-btn" class="lightbox-btn" style="background: var(--surface-subtle); color: var(--foreground);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.65; display: flex; flex-direction: column; gap: 1rem;">
          <p>
            ${isMr 
              ? 'प्रयास फाउंडेशनच्या वेबसाइटवर प्रवेश करून आपण या वापराच्या अटी आणि सर्व लागू कायद्यांचे पालन करण्यास सहमती दर्शवता.'
              : isHi 
              ? 'प्रयास फाउंडेशन की वेबसाइट का उपयोग करके आप इन सेवा शर्तों और सभी लागू कानूनों का पालन करने के लिए सहमत होते हैं।' 
              : 'By accessing the website of Prayas Foundation, you agree to be bound by these terms of service and all applicable laws and regulations.'}
          </p>
          <h4 class="font-bold text-foreground">${isMr ? 'बौद्धिक संपदा' : isHi ? 'बौद्धिक संपदा' : 'Intellectual Property'}</h4>
          <p>
            ${isMr 
              ? 'या वेबसाइटवरील सर्व मजकूर, चित्रे, लोगो आणि शैक्षणिक साहित्य प्रयास फाउंडेशनची मालमत्ता आहे.'
              : isHi 
              ? 'इस वेबसाइट पर मौजूद सभी सामग्री, चित्र, लोगो और शैक्षणिक संसाधन प्रयास फाउंडेशन की बौद्धिक संपदा हैं।' 
              : 'All materials, images, logos, and content on this site are the property of Prayas Foundation and protected by copyright and intellectual property laws.'}
          </p>
          <p style="font-size: 0.85rem; border-top: 1px solid var(--border); padding-top: 0.75rem;">
            Registration: <strong>Prayas Foundation NGO (Malvani, Malad West, Mumbai)</strong>
          </p>
        </div>
      </div>
    </div>
  `;
}
