export function createContactSection(content, currentLang, showHeader = true) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const c = content[currentLang].contact;
  const f = c.form;
  const faqs = content[currentLang].faq;

  return `
    <section id="contact" class="section-padding" style="background: var(--surface-alt); position: relative;">
      <div class="container">
        
        ${showHeader ? `
          <!-- Header -->
          <div style="text-align: center; max-width: 750px; margin: 0 auto 3.5rem;">
            <span class="glass-badge" style="margin-bottom: 0.75rem;">
              ${c.tagline}
            </span>
            <h2 class="font-display font-bold text-foreground" style="font-size: clamp(1.85rem, 3.5vw, 2.75rem); margin-bottom: 1rem;">
              ${c.heading}
            </h2>
            <p class="text-foreground-muted" style="font-size: 1.1rem; line-height: 1.6;">
              ${c.desc}
            </p>
          </div>
        ` : ''}

        <div style="display: grid; grid-template-columns: 1fr; gap: 3rem;" class="lg:grid-cols-12">
          
          <!-- Left Column: Contact Cards & Direct Reach -->
          <div class="lg:col-span-5" style="display: flex; flex-direction: column; gap: 1.5rem;">
            
            <!-- Quick Contact Information Card -->
            <div class="glass-card" style="padding: 2rem; background: var(--surface-card);">
              <h3 class="font-display font-bold text-foreground text-xl" style="margin-bottom: 1.5rem;">
                ${isMr ? 'थेट संपर्क माहिती' : isHi ? 'सीधे संपर्क विवरण' : 'Direct Contact Channels'}
              </h3>

              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                
                <!-- Phone -->
                <a href="tel:+919820500726" class="hover-lift" style="display: flex; align-items: flex-start; gap: 1rem; color: inherit; padding: 0.75rem; border-radius: var(--radius-md); background: var(--surface-subtle);">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--primary-light-bg); color: var(--primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <span style="display: block; font-size: 0.95rem; font-weight: 800; color: var(--primary); text-transform: uppercase; margin-bottom: 0.2rem;">
                      ${isMr ? 'फोन / थेट संपर्क' : isHi ? 'फोन / डायरेक्ट कॉल' : 'Phone / Direct Hotline'}
                    </span>
                    <span class="font-bold text-foreground" style="font-size: 1.25rem;">
                      ${c.phone}
                    </span>
                  </div>
                </a>

                <!-- WhatsApp -->
                <a href="https://wa.me/919820500726" target="_blank" rel="noopener noreferrer" class="hover-lift" style="display: flex; align-items: flex-start; gap: 1rem; color: inherit; padding: 0.75rem; border-radius: var(--radius-md); background: var(--surface-subtle);">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(37, 211, 102, 0.15); color: #16a34a; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <span style="display: block; font-size: 0.95rem; font-weight: 800; color: #16a34a; text-transform: uppercase; margin-bottom: 0.2rem;">
                      WhatsApp Direct
                    </span>
                    <span class="font-bold text-foreground" style="font-size: 1.25rem;">
                      ${c.phone}
                    </span>
                  </div>
                </a>

                <!-- Email -->
                <a href="mailto:${c.email}" class="hover-lift" style="display: flex; align-items: flex-start; gap: 1rem; color: inherit; padding: 0.75rem; border-radius: var(--radius-md); background: var(--surface-subtle);">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: hsla(38, 95%, 48%, 0.15); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <span style="display: block; font-size: 0.95rem; font-weight: 800; color: var(--accent); text-transform: uppercase; margin-bottom: 0.2rem;">
                      ${isMr ? 'ईमेल पत्ता' : isHi ? 'ईमेल पता' : 'Email Address'}
                    </span>
                    <span class="font-bold text-foreground" style="font-size: 1.15rem; word-break: break-all;">
                      ${c.email}
                    </span>
                  </div>
                </a>

                <!-- Address -->
                <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 0.75rem; border-radius: var(--radius-md); background: var(--surface-subtle);">
                  <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: hsla(162, 70%, 25%, 0.15); color: var(--secondary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <span style="display: block; font-size: 0.95rem; font-weight: 800; color: var(--secondary); text-transform: uppercase; margin-bottom: 0.2rem;">
                      ${isMr ? 'शाळा व कार्यालय पत्ता' : isHi ? 'स्कूल व कार्यालय पता' : 'Campus & Office Address'}
                    </span>
                    <p style="font-size: 1.05rem; color: var(--foreground); line-height: 1.5; margin: 0.2rem 0 0; font-weight: 600;">
                      ${c.address}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Visible Embedded Interactive Map & Location Card -->
            <div class="liquid-glass-card" style="padding: 1.75rem; background: var(--surface-card); border-radius: 28px; border: 1.5px solid var(--border);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.65rem;">
                  <span style="font-size: 1.5rem;">📍</span>
                  <div>
                    <span class="font-bold text-foreground" style="font-size: 1.15rem; display: block; line-height: 1.2;">
                      ${isMr ? 'मुंबई पब्लिक स्कूल (BMC)' : isHi ? 'मुंबई पब्लिक स्कूल (BMC)' : 'Mumbai Public School (BMC)'}
                    </span>
                    <span style="font-size: 0.95rem; color: var(--primary); font-weight: 700;">
                      ${isMr ? 'गेट क्र. ८, मालवणी, मालाड (प.)' : isHi ? 'गेट नं. 8, मालवणी, मालाड (प.)' : 'Gate No. 8, Malvani, Malad (W)'}
                    </span>
                  </div>
                </div>

                <a href="https://maps.google.com/?q=Mumbai+Public+School+Malvani+Township+Malad+West" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary hover-lift" style="padding: 0.5rem 1rem; font-size: 0.9rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.4rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  ${isMr ? 'दिशा-मार्ग पहा' : isHi ? 'दिशा-निर्देश देखें' : 'Get Directions'}
                </a>
              </div>

              <!-- Interactive Map Frame with Fallback Mechanism -->
              <div class="map-embed-wrapper" style="position: relative; width: 100%; height: 280px; border-radius: 18px; overflow: hidden; background: var(--surface-subtle); border: 1px solid var(--border);">
                <iframe 
                  id="campus-location-map"
                  title="Mumbai Public School Location Map"
                  src="https://maps.google.com/maps?q=Mumbai+Public+School,+Gate+No.+8,+Malvani+Township,+Malad+West,+Mumbai+400095&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style="border: 0; width: 100%; height: 100%; display: block;" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  allowfullscreen>
                </iframe>
              </div>

              <!-- Landmark Guidance & Transit Help -->
              <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: space-between; align-items: center; font-size: 0.95rem; font-weight: 600; color: var(--foreground-muted);">
                <span>🚌 ${isMr ? 'मालाड स्टेशनवरून बस: २७१ / २७२' : isHi ? 'मालाड स्टेशन से बस: 271 / 272' : 'From Malad Station: Bus 271 / 272'}</span>
                <span>📌 ${isMr ? 'पिनकोड: ४०००९५' : isHi ? 'पिनकोड: 400095' : 'Pincode: 400095'}</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Multi-Purpose Inquiry Form -->
          <div class="lg:col-span-7">
            <div class="glass-card" style="padding: 2.25rem; background: var(--surface-card);">
              <h3 class="font-display font-bold text-foreground text-2xl" style="margin-bottom: 0.5rem;">
                ${isMr ? 'संदेश किंवा अर्ज पाठवा' : isHi ? 'संदेश या आवेदन भेजें' : 'Send an Enquiry or Application'}
              </h3>
              <p class="text-foreground-muted text-sm" style="margin-bottom: 1.75rem;">
                ${isMr ? 'स्वयंसेवा, प्रवेश साहाय्य, CSR भागीदारी किंवा कोणत्याही विचारणेसाठी फॉर्म भरा.' : isHi ? 'स्वयंसेवा, प्रवेश सहायता, CSR साझेदारी या अन्य किसी पूछताछ के लिए फॉर्म भरें।' : 'Fill out the form for volunteering, admissions, CSR partnerships, or general enquiries.'}
              </p>

              <form id="contact-form" novalidate>
                
                <!-- Name & Phone Row -->
                <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 1.25rem;" class="sm:grid-cols-2">
                  <div>
                    <label for="contact-name" class="form-label">${f.nameLabel} *</label>
                    <input type="text" id="contact-name" class="form-input" placeholder="${f.namePlaceholder}" required />
                  </div>
                  <div>
                    <label for="contact-phone" class="form-label">${f.phoneLabel} *</label>
                    <input type="tel" id="contact-phone" class="form-input" placeholder="${f.phonePlaceholder}" pattern="[0-9]{10}" maxlength="10" required />
                  </div>
                </div>

                <!-- Email & Interest Row -->
                <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 1.25rem;" class="sm:grid-cols-2">
                  <div>
                    <label for="contact-email" class="form-label">${f.emailLabel} *</label>
                    <input type="email" id="contact-email" class="form-input" placeholder="${f.emailPlaceholder}" required />
                  </div>
                  <div>
                    <label for="contact-interest" class="form-label">${f.interestLabel}</label>
                    <select id="contact-interest" class="form-select">
                      ${f.interests.map(i => `
                        <option value="${i.val}">${i.label}</option>
                      `).join('')}
                    </select>
                  </div>
                </div>

                <!-- Dynamic Availability / Working Hours Field (For Volunteering / NGO Work) -->
                <div id="contact-availability-group" class="form-group" style="margin-bottom: 1.25rem;">
                  <label for="contact-availability" class="form-label" style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600;">
                      <span>⏳</span>
                      <span>${f.availabilityLabel || 'Your Availability / Working Hours'}</span>
                    </span>
                    <span style="font-size: 0.72rem; color: var(--primary); font-weight: 600; background: rgba(16, 185, 129, 0.1); padding: 0.15rem 0.5rem; border-radius: 999px;">
                      ${isMr ? 'स्वयंसेवा / एनजीओ कार्य' : isHi ? 'स्वयंसेवा / एनजीओ कार्य' : 'Volunteering & NGO Work'}
                    </span>
                  </label>
                  <select id="contact-availability" class="form-select">
                    ${(f.availabilities || [
                      { val: "weekends", label: "Weekends Only (Saturday & Sunday)" },
                      { val: "weekdays", label: "Weekdays (Monday to Friday)" },
                      { val: "fulltime", label: "Full-Time (Daily On-Site / Regular)" },
                      { val: "parttime", label: "Part-Time (4 to 8 hours / week)" },
                      { val: "flexible", label: "Flexible / Remote Mentorship" },
                      { val: "events", label: "Events & Special Drives Only" }
                    ]).map(a => `
                      <option value="${a.label}">${a.label}</option>
                    `).join('')}
                  </select>
                </div>

                <!-- Message Box -->
                <div class="form-group">
                  <label for="contact-message" class="form-label">${f.messageLabel} *</label>
                  <textarea id="contact-message" rows="4" class="form-textarea" placeholder="${f.messagePlaceholder}" required></textarea>
                </div>

                <!-- Resume / Document Attachment (Optional) -->
                <div class="form-group">
                  <label for="contact-resume" class="form-label">${f.resumeLabel}</label>
                  <input type="file" id="contact-resume" class="form-input" accept=".pdf,.doc,.docx" style="padding: 0.5rem;" />
                  <span style="font-size: 0.725rem; color: var(--foreground-subtle); display: block; margin-top: 0.25rem;">
                    ${isMr ? 'कमाल १०MB (PDF, DOCX)' : isHi ? 'अधिकतम 10MB (PDF, DOCX)' : 'Max 10MB (PDF, DOCX accepted)'}
                  </span>
                </div>

                <!-- Consent Agreement Checkbox -->
                <div style="display: flex; align-items: flex-start; gap: 0.6rem; margin-bottom: 1.5rem;">
                  <input type="checkbox" id="contact-consent" required style="margin-top: 0.25rem; accent-color: var(--primary); width: 16px; height: 16px; cursor: pointer;" />
                  <label for="contact-consent" style="font-size: 0.85rem; color: var(--foreground-muted); cursor: pointer;">
                    ${f.consentText}
                  </label>
                </div>

                <!-- Submit Button -->
                <button type="submit" id="contact-submit-btn" class="btn btn-primary btn-lg" style="width: 100%;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  ${f.submitBtn}
                </button>

                <!-- Feedback Area -->
                <div id="form-feedback-message" style="display: none; margin-top: 1.25rem; padding: 1rem; border-radius: var(--radius-md); font-size: 0.9rem; font-weight: 600;"></div>

              </form>

            </div>
          </div>

        </div>

        <!-- FAQ Section Accordion -->
        <div style="margin-top: 5rem; max-width: 900px; margin-left: auto; margin-right: auto;">
          <div style="text-align: center; margin-bottom: 2.5rem;">
            <span class="glass-badge" style="margin-bottom: 0.5rem;">FAQ</span>
            <h3 class="font-display font-bold text-foreground text-2xl">
              ${isMr ? 'नेहमी विचारले जाणारे प्रश्न' : isHi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${faqs.map((faq, idx) => `
              <div class="glass-card" style="padding: 1.25rem 1.5rem; background: var(--surface-card);">
                <details style="cursor: pointer;">
                  <summary class="font-bold text-foreground" style="font-size: 1.05rem; list-style: none; display: flex; align-items: center; justify-content: space-between;">
                    <span>${faq.q}</span>
                    <span style="color: var(--primary); font-size: 1.25rem; font-weight: 700; margin-left: 0.5rem;">+</span>
                  </summary>
                  <p style="margin-top: 0.85rem; color: var(--foreground-muted); font-size: 0.95rem; line-height: 1.6; border-top: 1px solid var(--border); padding-top: 0.75rem;">
                    ${faq.a}
                  </p>
                </details>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
