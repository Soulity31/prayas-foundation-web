export function createOrgStructure(content, currentLang) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';

  const members = [
    {
      id: "suresh-bhageria",
      tier: 1,
      name: isMr ? "श्री सुरेश भगेरिया" : isHi ? "श्री सुरेश भगेरिया" : "Shri Suresh Bhageria",
      role: isMr ? "मार्गदर्शक आणि मुख्य संरक्षक" : isHi ? "मार्गदर्शक एवं मुख्य संरक्षक" : "Chief Patron & Visionary Guide",
      bio: isMr ? "मुंबई पब्लिक स्कूलच्या विस्तारासाठी, शिष्यवृत्ती आणि वंचित मुलांच्या उत्थानासाठी आर्थिक व रणनीतिक संरक्षक." : isHi ? "मुंबई पब्लिक स्कूल के विस्तार, छात्रवृत्ति और वंचित बच्चों के उत्थान हेतु वित्तीय व रणनीतिक संरक्षक।" : "Philanthropic patron guiding institutional expansion, student scholarships, and governance ethics.",
      achievements: isMr ? "१०००+ विद्यार्थ्यांच्या वार्षिक शिष्यवृत्तीत सहकार्य" : isHi ? "1000+ छात्रों की वार्षिक छात्रवृत्ति में सहयोग" : "Supported 1,000+ annual student scholarships",
      quote: isMr ? "खरी सेवा तीच जी समाजातील शेवटच्या घटकापर्यंत पोहोचते." : isHi ? "सच्ची सेवा वही है जो समाज के अंतिम व्यक्ति तक पहुँचे।" : "True service is that which reaches the most vulnerable child.",
      badge: isMr ? "मुख्य संरक्षक" : isHi ? "मुख्य संरक्षक" : "Chief Patron"
    },
    {
      id: "sushil-jaju",
      tier: 2,
      name: isMr ? "श्री सुशील जाजू" : isHi ? "श्री सुशील जाजू" : "Shri Sushil Jaju",
      role: isMr ? "सल्लागार परिषद सदस्य" : isHi ? "सलाहकार परिषद सदस्य" : "Advisory Council Member",
      bio: isMr ? "शैक्षणिक धोरणे, आर्थिक पारदर्शकता आणि शाश्वत विकासात रणनीतिक मार्गदर्शन." : isHi ? "शैक्षणिक नीतियों, वित्तीय पारदर्शिता और सतत विकास में रणनीतिक मार्गदर्शन प्रदान करते हैं।" : "Provides strategic governance on academic policy, financial transparency, and community outreach.",
      achievements: isMr ? "वार्षिक वित्तीय ऑडिट व धोरण सल्लागार" : isHi ? "वार्षिक वित्तीय ऑडिट व नीति सलाहकार" : "Institutional governance & annual policy advisory",
      quote: isMr ? "शिक्षणातील पारदर्शकता हीच विश्वासाचा पाया आहे." : isHi ? "शिक्षा में पारदर्शिता ही विश्वास की नींव है।" : "Transparency in education builds community trust.",
      badge: isMr ? "सल्लागार" : isHi ? "सलाहकार" : "Advisor"
    },
    {
      id: "kamal-poddar",
      tier: 2,
      name: isMr ? "श्री कमल पोद्दार" : isHi ? "श्री कमल पोद्दार" : "Shri Kamal Poddar",
      role: isMr ? "सल्लागार परिषद सदस्य" : isHi ? "सलाहकार परिषद सदस्य" : "Advisory Council Member",
      bio: isMr ? "सामुदायिक कल्याण आणि साधनसंपत्ती उभारणीत सातत्यपूर्ण सहकार्य आणि मार्गदर्शन." : isHi ? "सामुदायिक कल्याण और संसाधन जुटाने में निरंतर सहयोग और मेंटरशिप।" : "Dedicated mentorship in community empowerment, school welfare programs, and partner coordination.",
      achievements: isMr ? "साधनसंपत्ती उभारणी आणि मार्गदर्शन" : isHi ? "संसाधन जुटाव और मार्गदर्शन" : "Resource mobilization & student mentoring",
      quote: isMr ? "प्रत्येक बालकाला प्रगतीची समान संधी मिळाली पाहिजे." : isHi ? "हर बच्चे को प्रगति का समान अवसर मिलना चाहिए।" : "Every child deserves an equal platform to excel.",
      badge: isMr ? "सल्लागार" : isHi ? "सलाहकार" : "Advisor"
    },
    {
      id: "brijesh-singh",
      tier: 3,
      name: isMr ? "श्री ब्रिजेश सिंह" : isHi ? "श्री ब्रिजेश सिंह" : "Shri Brijesh Singh",
      role: isMr ? "संस्थापक आणि अध्यक्ष" : isHi ? "संस्थापक एवं अध्यक्ष" : "Founder & Chairman",
      image: "./assets/brijesh-singh.png",
      bio: isMr ? "१४+ वर्षांपासून समर्पित समाजसेवा, रुईया कॉलेज पदवीधर, १०,०००+ नागरिकांना शासकीय योजनांचा लाभ मिळवून दिला." : isHi ? "14+ वर्षों से समर्पित जनसेवा, रुइया कॉलेज स्नातक, 10,000+ नागरिकों को सरकारी योजनाओं से लाभान्वित किया।" : "14+ years dedicated social service, Ruia College BSc alumnus, assisted 10,000+ beneficiaries with civic welfare.",
      achievements: isMr ? "फाउंडेशनचे प्रवर्तक व शिक्षण दूत" : isHi ? "फाउंडेशन के प्रवर्तक एवं शिक्षा दूत" : "Pioneered Mumbai Public School management",
      quote: isMr ? "मी समाजातील वंचित आणि सर्वसामान्य घटकांच्या उत्थानासाठी सदैव कार्यरत राहण्याचा संकल्प करतो." : isHi ? "मैं समाज के वंचित और आम आदमी के लिए संघर्ष जारी रखने का संकल्प लेता हूँ।" : "I vow to continue fighting for the underprivileged and the common man of our society.",
      badge: isMr ? "संस्थापक" : isHi ? "संस्थापक" : "Founder"
    },
    {
      id: "cg-power",
      tier: 3,
      name: isMr ? "सीजी पॉवर लिमिटेड" : isHi ? "सीजी पावर लिमिटेड" : "CG Power Limited",
      role: isMr ? "कॉर्पोरेट संस्थात्मक भागीदार" : isHi ? "कॉर्पोरेट संस्थागत भागीदार" : "CSR Institutional Partner",
      logo: "./assets/cg-power.png",
      bio: isMr ? "शाळेच्या पायाभूत सुविधा, संगणक लॅब आणि डिजिटल स्मार्ट वर्गांच्या आधुनिकीकरणात मुख्य भागीदार." : isHi ? "स्कूल के इंफ्रास्ट्रक्चर, कंप्यूटर लैब और डिजिटल स्मार्ट कक्षाओं के आधुनिकीकरण में प्रमुख सहयोगी।" : "Key CSR partner modernizing school labs, digital smart classrooms, and STEM infrastructure.",
      achievements: isMr ? "स्मार्ट क्लास व डिजिटल लॅब वित्तपुरवठा" : isHi ? "स्मार्ट क्लास व डिजिटल लैब वित्तपोषण" : "Smart classroom & computer lab financing",
      quote: isMr ? "डिजिटल सक्षमीकरणातून उज्ज्वल भविष्य." : isHi ? "डिजिटल सशक्तिकरण से उज्ज्वल भविष्य।" : "Empowering tomorrow with digital classrooms.",
      badge: "CSR Partner"
    },
    {
      id: "anil-kainya",
      tier: 3,
      name: isMr ? "श्री अनिल कैन्या" : isHi ? "श्री अनिल कैन्या" : "Shri Anil Kainya",
      role: isMr ? "व्यवस्थापन समिती सदस्य" : isHi ? "प्रबंध समिति सदस्य" : "Managing Committee Member",
      bio: isMr ? "दैनिक शाळा संचालन, शिक्षक सहकार्य आणि विद्यार्थी कल्याणाच्या अंमलबजावणीत सक्रिय." : isHi ? "दैनिक स्कूल संचालन, शिक्षक सहयोग और छात्र कल्याण के क्रियान्वयन में सक्रिय।" : "Active in day-to-day school operations, faculty coordination, and student welfare execution.",
      achievements: isMr ? "प्रशासकीय कार्यक्षमता व व्यवस्थापन" : isHi ? "प्रशासनिक उत्कृष्टता व प्रबंधन" : "Administrative operations leadership",
      quote: isMr ? "उत्कृष्ट व्यवस्थापनातूनच सर्वोत्तम निकाल मिळतात." : isHi ? "उत्कृष्ट प्रबंधन से ही उत्कृष्ट परिणाम मिलते हैं।" : "Operational rigor drives student excellence.",
      badge: isMr ? "व्यवस्थापन" : isHi ? "प्रबंधन" : "Management"
    },
    {
      id: "ruchi-mane",
      tier: 4,
      name: isMr ? "श्रीमती रुची माने" : isHi ? "श्रीमती रुचि माने" : "Smt. Ruchi Mane",
      role: isMr ? "शिक्षण व अभ्यासक्रम तज्ज्ञ" : isHi ? "शिक्षा एवं पाठ्यक्रम विशेषज्ञ" : "Education & Pedagogy Specialist",
      bio: isMr ? "खान अकादमी एकत्रीकरण, उपचारात्मक शिक्षण (Remedial Learning) आणि शिक्षक प्रशिक्षणाचे संयोजन." : isHi ? "खान अकादमी एकीकरण, उपचारात्मक शिक्षण (Remedial Learning) और शिक्षक प्रशिक्षण की देखरेख।" : "Oversees Khan Academy digital curriculum, remedial learning pipelines, and faculty pedagogy training.",
      achievements: isMr ? "४८७+ विद्यार्थ्यांचे डिजिटल मूल्यमापन व्यवस्थापन" : isHi ? "487+ छात्रों का डिजिटल मूल्यांकन प्रबंधन" : "Directed assessment analytics for 487+ students",
      quote: isMr ? "प्रत्येक संथ शिकणाऱ्या मुलामध्ये अफाट क्षमता असते." : isHi ? "हर धीमे सीखने वाले बच्चे में असीम क्षमता होती है।" : "Every learner has infinite potential with the right tools.",
      badge: isMr ? "शिक्षण प्रमुख" : isHi ? "शिक्षा प्रमुख" : "Academic Lead"
    },
    {
      id: "ankit-gupta",
      tier: 4,
      name: isMr ? "श्री अंकित गुप्ता" : isHi ? "श्री अंकित गुप्ता" : "Shri Ankit Gupta",
      role: isMr ? "संचालन आणि उपक्रम प्रमुख" : isHi ? "संचालन एवं कार्यक्रम प्रमुख" : "Operations & Field Programs Lead",
      bio: isMr ? "नेत्र तपासणी शिबिरे, क्रीडा, कुंग फू आणि सांस्कृतिक उपक्रमांचे यशस्वी आयोजन." : isHi ? "नेत्र शिविर, खेलकूद, कुंग फू और सांस्कृतिक कार्यक्रमों का सफल आयोजन।" : "Coordinates community health camps, martial arts training, sports, and civic events.",
      achievements: isMr ? "१६+ वार्षिक उपक्रमांचे यशस्वी संचालन" : isHi ? "16+ वार्षिक कार्यक्रमों का सफल संचालन" : "Executed 16+ annual activity programs",
      quote: isMr ? "आरोग्य आणि खेळांमुळे उत्तम चारित्र्य घडते." : isHi ? "स्वास्थ्य और खेल से चरित्र निर्माण होता है।" : "Physical health and discipline forge character.",
      badge: isMr ? "संचालन" : isHi ? "संचालन" : "Operations"
    },
    {
      id: "shriprakash-mishra",
      tier: 4,
      name: isMr ? "श्री श्रीप्रकाश मिश्रा" : isHi ? "श्री श्रीप्रकाश मिश्रा" : "Shri Shriprakash Mishra",
      role: isMr ? "समुदाय समन्वय प्रमुख" : isHi ? "सामुदायिक समन्वय प्रमुख" : "Community Outreach Coordinator",
      bio: isMr ? "मालवणी भागातील पालक, स्थानिक प्रशासन आणि विद्यार्थी यांच्यातील महत्त्वाचा दुवा." : isHi ? "मालवणी समुदाय के अभिभावकों, स्थानीय प्रशासन और विद्यार्थियों के बीच सेतु।" : "Liaison between Malvani parents, local community stakeholders, and school administration.",
      achievements: isMr ? "१०००+ पालकांशी संवाद व समन्वय" : isHi ? "1000+ अभिभावक संपर्क व समन्वय" : "Engaged 1,000+ parents via Postcard to Parents",
      quote: isMr ? "पालकांच्या सक्रिय सहभागामुळेच विद्यार्थ्यांचा सर्वांगीण विकास होतो." : isHi ? "अभिभावकों की सक्रिय भागीदारी से ही छात्र सफल होते हैं।" : "Parental engagement is the catalyst of growth.",
      badge: isMr ? "समुदाय" : isHi ? "सामुदायिक" : "Community"
    }
  ];

  function renderPersonItem(person) {
    const rawData = encodeURIComponent(JSON.stringify(person));

    return `
      <div class="person-wrapper" data-person-full="${rawData}">
        <div class="person-card-in-place">
          
          <!-- Avatar (Photo or Iridescent Liquid Gradient Icon) -->
          <div class="person-avatar-large">
            ${person.image ? `
              <div class="person-avatar-inner">
                <img src="${person.image}" alt="${person.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
              </div>
            ` : person.logo ? `
              <div class="person-avatar-inner" style="background: #ffffff;">
                <img src="${person.logo}" alt="${person.name}" style="width: 80%; height: auto; object-fit: contain;" />
              </div>
            ` : `
              <div class="liquid-avatar-gradient-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #ffffff; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            `}
          </div>

          <!-- Base Name & Role -->
          <h4 class="person-name-title">
            ${person.name}
          </h4>
          <span class="person-role-title">
            ${person.role}
          </span>

          <!-- Quote Box (Revealed when Tier is active/focused) -->
          ${person.quote ? `
            <div class="tier-quote-box">
              "${person.quote}"
            </div>
          ` : ''}

          <span style="font-size: 0.85rem; color: var(--primary); font-weight: 800; margin-top: 0.5rem;">
            ${isMr ? 'सविस्तर माहितीसाठी क्लिक करा' : isHi ? 'विवरण हेतु क्लिक करें' : 'Click for full profile'}
          </span>

        </div>
      </div>
    `;
  }

  function renderUnassignedSlot(label) {
    return `
      <div class="person-wrapper unassigned-slot" style="cursor: crosshair;">
        <div class="liquid-avatar-gradient-icon" style="width: 78px; height: 78px;" title="Position Open / Nominee Pending">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #ffffff; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <line x1="19" y1="8" x2="19" y2="14"></line>
            <line x1="22" y1="11" x2="16" y2="11"></line>
          </svg>
        </div>
        <h4 class="font-bold text-foreground-subtle text-center" style="font-size: 0.95rem; margin-top: 0.5rem;">
          ${isMr ? 'नामांकन प्रलंबित' : isHi ? 'नामांकन प्रतीक्षारत' : 'Nominee Pending'}
        </h4>
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--foreground-subtle);">
          ${label}
        </span>
      </div>
    `;
  }

  return `
    <div id="org-structure-container" class="liquid-glass-card" style="background: var(--gradient-card);">
      
      <!-- Top Title & Instructions -->
      <div style="text-align: center; margin-bottom: 2.5rem;">
        <span class="glass-badge-gold" style="margin-bottom: 1rem; font-size: 0.95rem;">
          ${isMr ? 'प्रशासकीय रचना' : isHi ? 'प्रशासनिक रूपरेखा' : 'Administrative Framework'}
        </span>
        <h3 class="font-display font-bold text-foreground" style="font-size: clamp(1.6rem, 3vw, 2.5rem); margin-bottom: 0.75rem;">
          ${isMr ? 'मुंबई पब्लिक स्कूलची चरणबद्ध नेतृत्व रचना' : isHi ? 'मुंबई पब्लिक स्कूल का चरणबद्ध नेतृत्व ढांचा' : 'Governing Council & Leadership Tree'}
        </h3>
        <p class="text-foreground-muted" style="max-width: 700px; margin: 0 auto; font-size: 1.05rem; line-height: 1.65;">
          ${isMr 
            ? 'स्क्रोल केल्यावर प्रत्येक स्तर मोठा होऊन त्यांची भूमिका व विचार स्पष्ट होतात. सविस्तर माहितीसाठी कोणत्याही सदस्यावर क्लिक करा.' 
            : isHi 
            ? 'स्क्रॉल करते ही प्रत्येक स्तर बड़ा होकर उनकी भूमिका व विचार प्रदर्शित करता है। संपूर्ण विवरण हेतु किसी भी सदस्य पर क्लिक करें।' 
            : 'Scroll down to expand each tier showcasing their leadership role and quote. Click any person card to view their full comprehensive profile.'}
        </p>
      </div>

      <!-- Step-by-Step Progressive Scroll Flow -->
      <div id="org-scroll-flow" style="display: flex; flex-direction: column; align-items: center; max-width: 920px; margin: 0 auto; width: 100%;">
        
        <!-- Step 1: Chief Patron & Guide -->
        <div class="org-tier-step" data-tier-step="1" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; text-align: center;">
            ${isMr ? 'स्तर १: मुख्य संरक्षक आणि मार्गदर्शक' : isHi ? 'स्तर 1: मुख्य संरक्षक एवं मार्गदर्शक' : 'Tier 1: Chief Patron & Visionary Guide'}
          </span>
          ${renderPersonItem(members[0])}
          <div class="org-stem-line"></div>
        </div>

        <!-- Step 2: Advisory Council -->
        <div class="org-tier-step" data-tier-step="2" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; text-align: center;">
            ${isMr ? 'स्तर २: रणनीतिक सल्लागार परिषद' : isHi ? 'स्तर 2: रणनीतिक सलाहकार परिषद' : 'Tier 2: Strategic Advisory Council'}
          </span>
          <div class="org-tier-cards-row">
            ${renderPersonItem(members[1])}
            ${renderPersonItem(members[2])}
          </div>
          <div class="org-stem-line"></div>
        </div>

        <!-- Step 3: Governing Executive & Founder -->
        <div class="org-tier-step" data-tier-step="3" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; text-align: center;">
            ${isMr ? 'स्तर ३: व्यवस्थापन कार्यकारिणी आणि संस्थापक' : isHi ? 'स्तर 3: प्रबंध कार्यकारिणी एवं संस्थापक' : 'Tier 3: Executive Governing Body'}
          </span>
          <div class="org-tier-cards-row">
            ${renderPersonItem(members[3])}
            ${renderPersonItem(members[4])}
            ${renderPersonItem(members[5])}
          </div>
          <div class="org-stem-line"></div>
        </div>

        <!-- Step 4: Education & Operations Leads -->
        <div class="org-tier-step" data-tier-step="4" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; text-align: center;">
            ${isMr ? 'स्तर ४: शिक्षण, संचालन आणि समुदाय समन्वय तज्ज्ञ' : isHi ? 'स्तर 4: शिक्षा, संचालन एवं सामुदायिक समन्वय विशेषज्ञ' : 'Tier 4: Academic & Operational Specialists'}
          </span>
          <div class="org-tier-cards-row">
            ${renderPersonItem(members[6])}
            ${renderPersonItem(members[7])}
            ${renderPersonItem(members[8])}
          </div>
          <div class="org-stem-line"></div>
        </div>

        <!-- Step 5: Expanded Nominee Seats -->
        <div class="org-tier-step" data-tier-step="5" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--foreground-subtle); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; text-align: center;">
            ${isMr ? 'स्तर ५: आगामी सल्लागार नामांकन (विस्तारित समिती)' : isHi ? 'स्तर 5: आगामी सलाहकार नामांकन (विस्तारित समिति)' : 'Tier 5: Expanded Council (Upcoming Nominees)'}
          </span>
          <div class="org-tier-cards-row">
            ${renderUnassignedSlot(isMr ? 'कायदेशीर सल्लागार' : isHi ? 'विधि सलाहकार' : 'Legal Advisor')}
            ${renderUnassignedSlot(isMr ? 'बाल आरोग्य प्रमुख' : isHi ? 'बाल स्वास्थ्य प्रमुख' : 'Child Health Lead')}
            ${renderUnassignedSlot(isMr ? 'डिजिटल नवोपक्रम' : isHi ? 'डिजिटल नवाचार' : 'Digital Innovation')}
          </div>
        </div>

      </div>

      <!-- Rounded Squircle Section End Divider -->
      <div class="section-squircle-divider">
        <div class="squircle-line"></div>
        <div class="squircle-chip">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <div class="squircle-line"></div>
      </div>

    </div>
  `;
}
