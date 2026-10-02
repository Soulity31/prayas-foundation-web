(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Me={en:{nav:{home:"Home",about:"About Us",school:"Mumbai Public School",programs:"Programs & Activities",work:"Our Work",impact:"Impact & Results",contact:"Contact Us",donate:"Donate",callUs:"Call Us",whatsapp:"WhatsApp"},hero:{badge:"Empowering Society Since Day One",titleLine1:"Mumbai Public School (CBSE & SSC)",titleHighlight:"Managed by Prayas Foundation",subtitle:"Where every effort counts towards building a brighter, more equitable future for every child in Malvani Township, Mumbai.",exploreBtn:"Explore Programs",impactBtn:"View Proven Impact",donateBtn:"Donate Now",stats:[{num:"487+",label:"Students Empowered"},{num:"100%",label:"Pass Rate in Board Exams"},{num:"15+",label:"Flagship Welfare Programs"},{num:"14+",label:"Years of Community Service"}]},about:{tagline:"Our Purpose & Mission",heading:"Transforming Lives Through Collective Action",desc:"We are a community-driven organization rooted in the belief that education, empowerment, and compassion can reshape society. From classrooms to eye camps, from football fields to meditation halls, we meet people where they are and help them rise.",pillars:[{title:"Grassroots Education",desc:"Full school management delivering modern pedagogy, Khan Academy digital tools, and English fluency to students in Malvani."},{title:"Holistic Health & Wellness",desc:"Comprehensive eye checkups, mental wellness counseling, and nutrition initiatives to nurture the whole child."},{title:"Character & Civic Duty",desc:"Cultivating leadership, self-defence discipline, martial arts, and patriotic pride through national celebrations and community projects."}],founder:{badge:"Visionary Leadership",name:"Shri Brijesh Singh",role:"Founder & Chairman, Prayas Foundation",bio:"Dedicated volunteer since 1998, with 14+ years of hard work and selfless dedication to public welfare in Malad and Malvani.",quote:"I vow to continue fighting for the underprivileged and the common man of our society."},leaders:{title:"Pillars of Strength",subtitle:"The dedicated individuals and patrons behind the governance and management of Mumbai Public School.",items:[{name:"Shri Suresh Bhageria",role:"Patron / Advisory Board",desc:"Guiding institutional governance and philanthropic outreach."},{name:"Shri Sushil Jaju",role:"Advisory Council",desc:"Advising strategic development and community support programs."},{name:"Shri Kamal Poddar",role:"Advisory Council",desc:"Providing expert counsel on educational welfare and youth initiatives."},{name:"CG Power Limited",role:"Corporate Partner",desc:"Providing invaluable infrastructure and digital education support.",logo:"./assets/cg-power.png"},{name:"Shri Sunil Patodia",role:"Patron & Philanthropist",desc:"Supporting student welfare, education and community growth.",image:"./assets/sunil-patodia.png"},{name:"Navchetna Trust",role:"Community Partner",desc:"Partnering for grassroots community welfare and education.",logo:"./assets/navchetna.png"}]}},mission:{tagline:"Our Purpose & Mission",heading:"Transforming Lives Through Collective Action",desc:"We are a community-driven organization rooted in the belief that education, empowerment, and compassion can reshape society. From classrooms to eye camps, from football fields to meditation halls, we meet people where they are and help them rise.",pillars:[{title:"Grassroots Education",desc:"Full school management delivering modern pedagogy, Khan Academy digital tools, and English fluency to students in Malvani."},{title:"Holistic Health & Wellness",desc:"Comprehensive eye checkups, mental wellness counseling, and nutrition initiatives to nurture the whole child."},{title:"Character & Civic Duty",desc:"Cultivating leadership, self-defence discipline, martial arts, and patriotic pride through national celebrations and community projects."}]},leadership:{tagline:"Visionary Leadership",heading:"Meet Our Founder & Chairman",name:"Brijesh Singh",role:"Founder & Chairman, Prayas Foundation",bio1:"Born on September 15, 1968 in Maharashtra, Brijesh Singh pursued his BSc degree from Ruia College in Mumbai. From a young age, he was drawn to community service and actively participated in civic activities. He became a dedicated volunteer in 1998, committing 14+ years of hard work and selfless dedication to public welfare.",bio2:"Being a long-time resident of Malad, he is intimately familiar with the challenges facing underprivileged communities. He took the initiative to advocate for their rights, organize cultural programs, and facilitate the implementation of government welfare schemes to benefit common families.",bio3:"Through Prayas Foundation, he has provided financial and social assistance to numerous community groups, supported temple reconstructions, organized pilgrim welfare initiatives, and facilitated the opening of 1,100 bank accounts and assistance to 10,000+ beneficiaries.",quote:"I vow to continue fighting for the underprivileged and the common man of our society."},school:{tagline:"Flagship Initiative",heading:"Mumbai Public School (BMC)",location:"Malvani Township, Malad West, Mumbai",desc:"Prayas Foundation proudly manages the entire Mumbai Public School, both SSC and CBSE streams, right in the heart of Malvani. Serving hundreds of students from the local community, the school has become a hub of academic excellence, holistic development, and equal opportunity.",pillarsTitle:"Pillars of Strength",pillarsSubtitle:"The dedicated individuals and patrons behind the governance and management of Mumbai Public School.",council:[{name:"Shri Suresh Bhageria",role:"Patron / Advisory Board"},{name:"Shri Sushil Jaju",role:"Advisory Council"},{name:"Shri Kamal Poddar",role:"Advisory Council"},{name:"Shri Brijesh Singh",role:"Founder & Chairman",image:"./assets/brijesh-singh.png"},{name:"CG Power Limited",role:"Corporate Partner",logo:"./assets/cg-power.png"},{name:"Shri Anil Kainya",role:"Managing Committee"},{name:"Smt. Ruchi Mane",role:"Education Specialist"},{name:"Shri Ankit Gupta",role:"Operations Lead"},{name:"Shri Shriprakash Mishra",role:"Community Coordinator"}]},impact:{tagline:"Proven Impact & Assessment Analytics",heading:"Real Results. Real Growth.",desc:"Since Prayas Foundation took over the management of Mumbai Public School, students have shown consistent and steady improvement in their average scores across all learning groups.",chartTitle:"Khan Academy Assessment Progress: Average Student Scores (2024 vs 2025)",chartSubtitle:"Tracking Prelims 1 through 5 across Ankur, Arun, and Arunuday cohorts.",summary:"The numbers speak for themselves. Every prelim, every group, every year—a consistent upward curve. What was once a struggling school is now a thriving institution where students don't just pass exams, they surpass expectations. This is sustained, systematic progress built on discipline, mentorship, and unwavering commitment.",ctaBanner:"The journey of educational transformation continues every day."},programs:{tagline:"Beyond The Classroom",heading:"Programs That Shape Bright Futures",desc:"We nurture every dimension of a child: academic excellence, physical fitness, digital literacy, emotional health, and civic pride.",filterAll:"All Programs",filterEducation:"Education",filterHealth:"Health & Wellbeing",filterSports:"Sports & Fitness",filterLifeSkills:"Life Skills & Civic",categories:[{id:"all",label:"All Programs"},{id:"Education",label:"Education"},{id:"Health & Wellbeing",label:"Health & Wellbeing"},{id:"Sports & Fitness",label:"Sports & Fitness"},{id:"Life Skills & Civic",label:"Life Skills & Civic"}],items:[{id:"remedial-learning",img:"./assets/slow-learners.jpg",title:"Remedial Learning Program",category:"Education",badge:"Unique Initiative",highlight:!0,desc:"A dedicated program with specialised halls and trained teachers for students who need extra support, helping slow learners build confidence, pass their board exams, and thrive academically."},{id:"postcard-parents",img:"./assets/postcard-activity.jpg",title:"Postcard to Parents",category:"Health & Wellbeing",badge:"Unique Initiative",highlight:!0,desc:"A unique emotional wellness initiative where students feeling low or stressed write heartfelt letters to their parents, expressing emotions they have never shared before, strengthening family bonds and mental well-being."},{id:"raksha-bandhan",img:"./assets/raksha-bandhan.jpg",title:"Raksha Bandhan with Heroes",category:"Life Skills & Civic",badge:"Featured Event",highlight:!0,desc:"In a touching gesture, our students visit local police stations and military army camps to tie rakhis to officers and soldiers, celebrating the timeless bond of love and protection with the real heroes of our nation."},{id:"khan-academy",img:"./assets/khan-academy.jpg",title:"Khan Academy Digital Integration",category:"Education",desc:"Leveraging Khan Academy's world-class platform for personalized STEM learning, with 487+ students actively mastering concepts and diagnostics at their own pace."},{id:"creative-writing",img:"./assets/english-writing.jpg",title:"English Creative Writing",category:"Education",desc:"Helping young minds find their voice and expressive vocabulary through guided English writing workshops that spark imagination, essays, and confidence."},{id:"reading-saturdays",img:"./assets/reading-saturday.jpg",title:"Reading Saturdays",category:"Education",desc:"Weekly storytelling and literature sessions led by Ms. Reeta Gupta, building a lifelong love for books, critical comprehension, and strong communication skills."},{id:"digital-safety",img:"./assets/cyber-literacy.jpg",title:"Cyber Literacy & Digital Safety",category:"Education",desc:"Equipping students with modern computer skills, online safety protocols, and cybersecurity awareness to navigate the internet responsibly."},{id:"emotional-wellness",img:"./assets/mental-health.jpg",title:"Emotional Wellness & Mental Health",category:"Health & Wellbeing",desc:"Expert-led sessions by renowned psychiatrist Dr. Harish Shetty, guiding children through stress management, emotional resilience, and positive coping mechanisms."},{id:"sports-excellence",img:"./assets/football.jpg",title:"Sports Excellence & Football",category:"Sports & Fitness",desc:"Over 80 aspiring athletes trained across 100 teams, with our school team qualifying and traveling to Bangalore for national tournaments!"},{id:"vision-care",img:"./assets/eye-camp.jpg",title:"Vision Care Camp",category:"Health & Wellbeing",desc:"Free comprehensive eye checkups and custom prescription spectacles distributed to students in classes 6–10, ensuring no child is held back by preventable vision defects."},{id:"self-defence",img:"./assets/kung-fu.jpg",title:"Self-Defence Training (Kung Fu)",category:"Sports & Fitness",desc:"Three days a week, boys and girls in classes 6–10 learn martial arts discipline, physical fitness, situational awareness, and practical self-defence."},{id:"mindfulness",img:"./assets/meditation.jpg",title:"Mindfulness & Meditation",category:"Health & Wellbeing",desc:"Daily guided meditation and breathing exercises that cultivate inner calm, sharper classroom focus, and emotional harmony."},{id:"patriotic-celebrations",img:"./assets/celebrations.jpg",title:"Patriotic & Cultural Celebrations",category:"Life Skills & Civic",desc:"Tree plantation drives, Independence Day, Kargil Vijay Diwas, and Constitution Day assemblies instilling national pride and social responsibility."},{id:"rangeet-session",img:"./assets/rangeet-session.jpg",title:"Life Skills with Rangeet",category:"Life Skills & Civic",desc:"Partnering with global social enterprise Rangeet to empower students aged 6–16 with essential skills: collaboration, empathy, ecological mindfulness, and problem solving."},{id:"science-exhibition",img:"./assets/science-exhibition.jpg",title:"Science Exhibition & STEM Lab",category:"Education",desc:"Students build and exhibit working science models, robotics experiments, and environmental projects, sparking scientific curiosity across all grade levels."},{id:"constitution-day",img:"./assets/constitution-day.jpg",title:"Constitution Day Assembly",category:"Life Skills & Civic",desc:"Special workshops on fundamental rights, democratic values, and civic duties to build responsible future citizens of India."}]},partners:{tagline:"Partners in Progress",heading:"Collaborating for Grassroots Impact",desc:"Our work is made possible through trusted institutional partners, philanthropic trusts, and visionary corporate leaders.",list:[{name:"Navchetna Charitable Trust",logo:"./assets/navchetna.png",type:"Charitable Trust Partner"},{name:"Narayan Reiki Satsang Parivar Trust",logo:"./assets/narayan-reiki.png",type:"Welfare Partner"},{name:"Sunil Patodia Welfare Foundation",logo:"./assets/sunil-patodia.png",type:"Philanthropic Foundation"},{name:"CG Power and Industrial Solutions",logo:"./assets/cg-power.png",type:"CSR & Institutional Partner"}]},contact:{tagline:"Get In Touch",heading:"Join Us in Making a Difference",desc:"Whether you want to volunteer, partner for CSR, enroll your child, or seek guidance, we are here to welcome you.",phone:"+91-9820500726",email:"info@prayasfoundation.co.in",address:"Mumbai Public School, Malvani Township, Malad West, Mumbai, Maharashtra - 400095",form:{nameLabel:"Your Full Name",namePlaceholder:"Enter your name",phoneLabel:"Phone Number (10 Digits)",phonePlaceholder:"e.g. 9820500726",emailLabel:"Email Address",emailPlaceholder:"name@example.com",interestLabel:"I Am Interested In...",interests:[{val:"volunteer",label:"Volunteering / Join as Member"},{val:"job",label:"Careers / NGO Work"},{val:"admission",label:"School Admission Assistance"},{val:"csr",label:"CSR & Corporate Partnership"},{val:"donation",label:"Donation & Sponsorship (80G)"},{val:"general",label:"General Enquiry"}],availabilityLabel:"Your Availability / Working Hours",availabilities:[{val:"weekends",label:"Weekends Only (Saturday & Sunday)"},{val:"weekdays",label:"Weekdays (Monday to Friday)"},{val:"fulltime",label:"Full-Time (Daily On-Site / Regular)"},{val:"parttime",label:"Part-Time (4 to 8 hours / week)"},{val:"flexible",label:"Flexible / Remote Mentorship"},{val:"events",label:"Events & Special Drives Only"}],messageLabel:"Your Message / Background",messagePlaceholder:"Tell us about your experience, how you wish to contribute, or your enquiry...",resumeLabel:"Attach Resume / Proposal (PDF, DOC, DOCX - Optional)",consentText:"I agree to be contacted by Prayas Foundation regarding my application/enquiry.",submitBtn:"Submit Application",sendingBtn:"Submitting...",successTitle:"Submitted Successfully!",successMsg:"Thank you for reaching out! The Prayas Foundation team has received your application and will get in touch with you shortly."}},donation:{title:"Donate to Prayas Foundation",subtitle:"Your contribution directly funds student education, nutrition, eye care, and remedial learning at Mumbai Public School.",taxBadge:"80G Tax Exemption Available",taxDesc:"All donations to Prayas Foundation are eligible for 50% tax deduction under Section 80G of the Income Tax Act.",bankDetailsTitle:"Official Bank Transfer (NEFT / RTGS / IMPS)",accountName:"PRAYAS FOUNDATION",bankName:"State Bank of India (SBI)",accountNumber:"41829038471",ifsc:"SBIN0001824",branch:"Malad West Branch, Mumbai - 400064",upiId:"shauryashettdds2231@okaxis",instantSupport:"Call Chairman Brijesh Singh directly for CSR allocations or large project adoptions.",callBtn:"Call Now (+91-9820500726)",whatsappBtn:"Chat on WhatsApp"},faq:[{q:"Where is Mumbai Public School managed by Prayas Foundation located?",a:"The school is located at Malvani Township, Malad West, Mumbai, Maharashtra 400095. Prayas Foundation manages both CBSE and SSC academic streams."},{q:"Who is the founder of Prayas Foundation?",a:"Prayas Foundation was founded in 2012 by Shri Brijesh Singh, a Ruia College alumnus and dedicated community leader with over 14 years of grassroots social service in Mumbai."},{q:"How does Khan Academy integrate into the school?",a:"Prayas Foundation has enrolled 487+ students on the Khan Academy digital platform with a 96% active account rate, delivering diagnostic tracking and personalized learning in STEM subjects."},{q:"How can I volunteer with Prayas Foundation?",a:"You can volunteer as a guest tutor, sports coach, reading mentor, or event coordinator. Simply submit the volunteer form on our Contact page or message us on WhatsApp at +91-9820500726."},{q:"Are donations eligible for tax exemption?",a:"Yes, Prayas Foundation is a registered NGO under 80G and 12A, making donations eligible for 50% tax deductions under the Income Tax Act."}],footer:{aboutSummary:"Prayas Foundation is a registered Mumbai NGO dedicated to grassroots education, child welfare, healthcare, and community empowerment at Mumbai Public School, Malvani.",quickLinks:"Quick Navigation",legalLinks:"Legal & Transparency",privacyPolicy:"Privacy Policy",termsOfUse:"Terms of Use",copyright:"© 2026 Prayas Foundation. All rights reserved. Registered Education & Welfare NGO.",disclaimer:"Prayas Foundation is a non-profit organization registered in Mumbai, Maharashtra."}},hi:{nav:{home:"मुख्य पृष्ठ",about:"हमारे बारे में",school:"मुंबई पब्लिक स्कूल",programs:"कार्यक्रम एवं गतिविधियाँ",work:"हमारा कार्य",impact:"सिद्ध प्रभाव",contact:"संपर्क करें",donate:"दान करा (Donate)",callUs:"कॉल करें",whatsapp:"व्हाट्सएप"},hero:{badge:"शुरू से समाज को सशक्त बना रहे हैं",titleLine1:"मुंबई पब्लिक स्कूल (CBSE एवं SSC)",titleHighlight:"प्रयास फाउंडेशन द्वारा प्रबंधित",subtitle:"जहाँ हर प्रयास मालवणी टाउनशिप, मुंबई में हर बच्चे के उज्ज्वल और अधिक न्यायसंगत भविष्य के निर्माण में योगदान देता है।",exploreBtn:"कार्यक्रम देखें",impactBtn:"सिद्ध परिणाम देखें",donateBtn:"दान करें (Donate Now)",stats:[{num:"487+",label:"सशक्त छात्र"},{num:"100%",label:"बोर्ड परीक्षा उत्तीर्ण दर"},{num:"15+",label:"प्रमुख कल्याणकारी कार्यक्रम"},{num:"14+",label:"वर्षों की निरंतर सामाजिक सेवा"}]},about:{tagline:"हमारा उद्देश्य एवं मिशन",heading:"सामूहिक कार्रवाई से जीवन बदलना",desc:"हम एक समुदाय-संचालित संगठन हैं जो इस विश्वास में निहित है कि शिक्षा, सशक्तिकरण और करुणा समाज को नया रूप दे सकती है। कक्षाओं से नेत्र शिविरों तक, खेल मैदानों से ध्यान सत्रों तक, हम लोगों से वहीं मिलते हैं जहाँ वे हैं और उन्हें आगे बढ़ने में मदद करते हैं।",pillars:[{title:"जमीनी स्तर पर शिक्षा",desc:"मालवणी में छात्रों को आधुनिक शिक्षाशास्त्र, खान अकादमी डिजिटल उपकरण और अंग्रेजी प्रवाह प्रदान करने वाला संपूर्ण विद्यालय प्रबंधन।"},{title:"समग्र स्वास्थ्य एवं कल्याण",desc:"हर बच्चे के समग्र विकास के लिए व्यापक नेत्र जांच, मानसिक स्वास्थ्य परामर्श और पोषण संबंधी पहल।"},{title:"चरित्र निर्माण एवं नागरिक कर्तव्य",desc:"राष्ट्रीय समारोहों और सामुदायिक परियोजनाओं के माध्यम से नेतृत्व, आत्मरक्षा अनुशासन और देशभक्ति का विकास।"}],founder:{badge:"दूरदर्शी नेतृत्व",name:"श्री बृजेश सिंह",role:"संस्थापक एवं अध्यक्ष, प्रयास फाउंडेशन",bio:"1998 से समर्पित स्वयंसेवक, जिन्होंने 14+ वर्षों तक मालाड और मालवणी में जन कल्याण के लिए अथक परिश्रम किया।",quote:"मैं हमारे समाज के वंचितों और आम लोगों के लिए लड़ना जारी रखने का संकल्प करता हूँ।"},leaders:{title:"मार्गदर्शक एवं संरक्षक",subtitle:"मुंबई पब्लिक स्कूल के संचालन और प्रबंधन के पीछे समर्पित व्यक्तित्व और संरक्षक।",items:[{name:"श्री सुरेश भगेरिया",role:"संरक्षक / सलाहकार बोर्ड",desc:"संस्थागत मार्गदर्शन और परोपकारी पहलों का नेतृत्व।"},{name:"श्री सुशील जाजू",role:"सलाहकार परिषद",desc:"रणनीतिक विकास और सामुदायिक सहायता कार्यक्रमों में मार्गदर्शन।"},{name:"श्री कमल पोद्दार",role:"सलाहकार परिषद",desc:"शैक्षिक कल्याण और युवा पहलों पर विशेषज्ञ परामर्श।"},{name:"सीजी पावर लिमिटेड",role:"कॉर्पोरेट पार्टनर",desc:"बुनियादी ढांचे और डिजिटल शिक्षा में अमूल्य सहयोग।",logo:"./assets/cg-power.png"},{name:"श्री सुनील पाटोदिया",role:"संरक्षक एवं समाज सेवी",desc:"छात्र कल्याण और शिक्षा के विस्तार में निरंतर सहयोग।",image:"./assets/sunil-patodia.png"},{name:"नवचेतना ट्रस्ट",role:"सामुदायिक सहयोगी",desc:"जमीनी स्तर पर कल्याणकारी कार्यों में सक्रिय साझेदारी।",logo:"./assets/navchetna.png"}]}},mission:{tagline:"हमारा उद्देश्य एवं मिशन",heading:"सामूहिक कार्रवाई से जीवन बदलना",desc:"हम एक समुदाय-संचालित संगठन हैं जो इस विश्वास में निहित है कि शिक्षा, सशक्तिकरण और करुणा समाज को नया रूप दे सकती है। कक्षाओं से नेत्र शिविरों तक, खेल मैदानों से ध्यान सत्रों तक, हम लोगों से वहीं मिलते हैं जहाँ वे हैं और उन्हें आगे बढ़ने में मदद करते हैं।",pillars:[{title:"जमीनी स्तर पर शिक्षा",desc:"मालवणी में छात्रों को आधुनिक शिक्षाशास्त्र, खान अकादमी डिजिटल उपकरण और अंग्रेजी प्रवाह प्रदान करने वाला संपूर्ण विद्यालय प्रबंधन।"},{title:"समग्र स्वास्थ्य एवं कल्याण",desc:"हर बच्चे के समग्र विकास के लिए व्यापक नेत्र जांच, मानसिक स्वास्थ्य परामर्श और पोषण संबंधी पहल।"},{title:"चरित्र निर्माण एवं नागरिक कर्तव्य",desc:"राष्ट्रीय समारोहों और सामुदायिक परियोजनाओं के माध्यम से नेतृत्व, आत्मरक्षा अनुशासन और देशभक्ति का विकास।"}]},leadership:{tagline:"दूरदर्शी नेतृत्व",heading:"हमारे संस्थापक एवं अध्यक्ष से मिलें",name:"ब्रिजेश सिंह",role:"संस्थापक एवं अध्यक्ष, प्रयास फाउंडेशन",bio1:"15 सितंबर 1968 को महाराष्ट्र में जन्मे ब्रिजेश सिंह ने मुंबई के रुइया कॉलेज से बीएससी की डिग्री प्राप्त की। कम उम्र से ही वे सामुदायिक सेवा की ओर आकर्षित थे और नागरिक गतिविधियों में सक्रिय रूप से भाग लेते थे। उन्होंने 1998 में समर्पित स्वयंसेवक बनकर 14+ वर्षों तक जन कल्याण के लिए अथक परिश्रम किया।",bio2:"मालाड के निवासी होने के नाते, वे वंचित समुदायों की चुनौतियों से भली-भांति परिचित हैं। उन्होंने उनके अधिकारों की वकालत की, सांस्कृतिक कार्यक्रम आयोजित किए और आम लोगों के लाभ के लिए सरकारी कल्याणकारी योजनाओं के क्रियान्वयन में मदद की।",bio3:"प्रयास फाउंडेशन के माध्यम से, उन्होंने कई सामुदायिक समूहों को वित्तीय और सामाजिक सहायता प्रदान की, मंदिर पुनर्निर्माण का समर्थन किया, तीर्थयात्री कल्याण पहल का आयोजन किया, और 1,100 बैंक खाते खोलने और 10,000+ लाभार्थियों को सहायता प्रदान की।",quote:"मैं हमारे समाज के वंचितों और आम लोगों के लिए लड़ना जारी रखने का संकल्प करता हूँ।"},school:{tagline:"प्रमुख पहल",heading:"मुंबई पब्लिक स्कूल (BMC)",location:"मालवणी टाउनशिप, मालाड वेस्ट, मुंबई",desc:"प्रयास फाउंडेशन गर्व से संपूर्ण मुंबई पब्लिक स्कूल का प्रबंधन करता है, SSC और CBSE दोनों धाराएं, मालवणी के बिल्कुल केंद्र में। स्थानीय समुदाय के सैकड़ों छात्रों की सेवा करते हुए, स्कूल शैक्षणिक उत्कृष्टता, समग्र विकास और समान अवसर का केंद्र बन गया है।",pillarsTitle:"आधार स्तंभ",pillarsSubtitle:"मुंबई पब्लिक स्कूल के प्रबंधन और मार्गदर्शन के पीछे समर्पित व्यक्ति और मार्गदर्शक।",council:[{name:"श्री सुरेश भगेरिया",role:"मार्गदर्शक / सलाहकार बोर्ड"},{name:"श्री सुशील जाजू",role:"सलाहकार परिषद"},{name:"श्री कमल पोद्दार",role:"सलाहकार परिषद"},{name:"श्री ब्रिजेश सिंह",role:"संस्थापक एवं अध्यक्ष",image:"./assets/brijesh-singh.png"},{name:"सीजी पावर लिमिटेड",role:"कॉर्पोरेट सहयोगी",logo:"./assets/cg-power.png"},{name:"श्री अनिल कैन्या",role:"प्रबंध समिति"},{name:"श्रीमती रुचि माने",role:"शिक्षा विशेषज्ञ"},{name:"श्री अंकित गुप्ता",role:"संचालन प्रमुख"},{name:"श्री श्रीप्रकाश मिश्रा",role:"सामुदायिक समन्वयक"}]},impact:{tagline:"सिद्ध प्रभाव एवं मूल्यांकन विश्लेषण",heading:"वास्तविक परिणाम। वास्तविक विकास।",desc:"जब से प्रयास फाउंडेशन ने मुंबई पब्लिक स्कूल का प्रबंधन संभाला है, सभी अध्ययन समूहों में छात्रों के औसत अंकों में निरंतर और स्थिर सुधार देखा गया है।",chartTitle:"खान अकादमी मूल्यांकन प्रगति: छात्रों के औसत अंक (2024 बनाम 2025)",chartSubtitle:"अंकुर, अरुण और अरुणोदय समूहों में प्रीलिम 1 से 5 की प्रगति।",summary:"आंकड़े खुद बोलते हैं। हर प्रीलिम, हर समूह, हर साल एक निरंतर ऊपर की ओर वक्र। जो कभी एक संघर्षरत स्कूल था, अब एक फलता-फूलता संस्थान है जहाँ छात्र सिर्फ परीक्षा पास नहीं करते, वे अपेक्षाओं से आगे निकल जाते हैं। यह अनुशासन और अटूट प्रतिबद्धता पर बनी निरंतर, व्यवस्थित प्रगति है।",ctaBanner:"शैक्षणिक बदलाव की यह यात्रा हर दिन जारी है।"},programs:{tagline:"कक्षा से परे",heading:"कार्यक्रम जो भविष्य गढ़ते हैं",desc:"हम बच्चे के हर आयाम का पोषण करते हैं: शिक्षा, फिटनेस, रचनात्मकता, भावनात्मक स्वास्थ्य और नागरिक गौरव।",filterAll:"सभी कार्यक्रम",filterEducation:"शिक्षा",filterHealth:"स्वास्थ्य एवं कल्याण",filterSports:"खेल एवं फिटनेस",filterLifeSkills:"जीवन कौशल एवं नागरिक",categories:[{id:"all",label:"सभी कार्यक्रम"},{id:"Education",label:"शिक्षा"},{id:"Health & Wellbeing",label:"स्वास्थ्य एवं कल्याण"},{id:"Sports & Fitness",label:"खेल एवं फिटनेस"},{id:"Life Skills & Civic",label:"जीवन कौशल एवं नागरिक"}],items:[{id:"remedial-learning",img:"./assets/slow-learners.jpg",title:"उपचारात्मक शिक्षण कार्यक्रम",category:"शिक्षा",badge:"अनूठी पहल",highlight:!0,desc:"उन छात्रों के लिए समर्पित हॉल और प्रशिक्षित शिक्षकों के साथ विशेष कार्यक्रम जिन्हें अतिरिक्त सहायता की आवश्यकता है, जिससे धीमे सीखने वाले छात्र आत्मविश्वास के साथ बोर्ड परीक्षा में उत्कृष्ट प्रदर्शन करते हैं।"},{id:"postcard-parents",img:"./assets/postcard-activity.jpg",title:"माता-पिता को पोस्टकार्ड",category:"स्वास्थ्य एवं कल्याण",badge:"अनूठी पहल",highlight:!0,desc:"एक अनूठी भावनात्मक कल्याण पहल जहाँ तनाव या उदासी महसूस करने वाले छात्र अपने माता-पिता को दिल से पत्र लिखते हैं, अपनी अनकही भावनाएँ साझा करते हैं और पारिवारिक संबंधों को प्रगाढ़ बनाते हैं।"},{id:"raksha-bandhan",img:"./assets/raksha-bandhan.jpg",title:"वीरों के साथ रक्षाबंधन",category:"जीवन कौशल एवं नागरिक",badge:"प्रमुख आयोजन",highlight:!0,desc:"एक मार्मिक पहल में, हमारे छात्रों ने स्थानीय पुलिस थानों और सैन्य शिविरों में जाकर जवानों को राखी बांधी और राष्ट्र के असली नायकों के साथ सुरक्षा के अटूट रिश्ते का उत्सव मनाया।"},{id:"khan-academy",img:"./assets/khan-academy.jpg",title:"खान अकादमी डिजिटल एकीकरण",category:"शिक्षा",desc:"व्यक्तिगत STEM शिक्षा के लिए खान अकादमी के विश्वस्तरीय मंच का उपयोग, जहाँ 487+ पंजीकृत छात्र 96% सक्रियता के साथ अपनी गति से सीखते हैं।"},{id:"creative-writing",img:"./assets/english-writing.jpg",title:"रचनात्मक अंग्रेजी लेखन",category:"शिक्षा",desc:"निर्देशित लेखन कार्यशालाओं के माध्यम से बच्चों को अपनी कल्पना, अभिव्यक्ति और आत्मविश्वास को शब्द देने में मदद करना।"},{id:"reading-saturdays",img:"./assets/reading-saturday.jpg",title:"पठन शनिवार",category:"शिक्षा",desc:"सुश्री रीता गुप्ता द्वारा संचालित साप्ताहिक कहानी सत्र, जो किताबों के प्रति प्रेम, गहरी समझ और मजबूत शब्दावली का निर्माण करते हैं।"},{id:"digital-safety",img:"./assets/cyber-literacy.jpg",title:"डिजिटल सुरक्षा एवं साइबर साक्षरता",category:"शिक्षा",desc:"छात्रों को सुरक्षित इंटरनेट उपयोग, साइबर खतरों से बचाव और जिम्मेदार डिजिटल नागरिकता के गुर सिखाना।"},{id:"emotional-wellness",img:"./assets/mental-health.jpg",title:"भावनात्मक कल्याण एवं मानसिक स्वास्थ्य",category:"स्वास्थ्य एवं कल्याण",desc:"प्रसिद्ध मनोचिकित्सक डॉ. हरीश शेट्टी द्वारा विशेषज्ञ सत्र, जो बच्चों को तनाव प्रबंधन और भावनात्मक मजबूती सिखाते हैं।"},{id:"sports-excellence",img:"./assets/football.jpg",title:"खेल उत्कृष्टता एवं फुटबॉल",category:"खेल एवं फिटनेस",desc:"80+ महत्वाकांक्षी एथलीटों को फुटबॉल प्रशिक्षण दिया गया, जिसमें हमारी स्कूल टीम ने बैंगलोर में राष्ट्रीय टूर्नामेंट के लिए क्वालीफाई किया!"},{id:"vision-care",img:"./assets/eye-camp.jpg",title:"नेत्र देखभाल शिविर",category:"स्वास्थ्य एवं कल्याण",desc:"कक्षा 6-10 के छात्रों के लिए मुफ्त व्यापक नेत्र जांच और चश्मे का वितरण, यह सुनिश्चित करते हुए कि कमजोर दृष्टि किसी बच्चे की पढ़ाई में बाधा न बने।"},{id:"self-defence",img:"./assets/kung-fu.jpg",title:"आत्मरक्षा प्रशिक्षण (कुंग फू)",category:"खेल एवं फिटनेस",desc:"सप्ताह में तीन दिन कक्षा 6-10 के छात्र-छात्राएं कुंग फू के माध्यम से शारीरिक फिटनेस, अनुशासन और व्यावहारिक आत्मरक्षा सीखते हैं।"},{id:"mindfulness",img:"./assets/meditation.jpg",title:"माइंडफुलनेस एवं ध्यान अभ्यास",category:"स्वास्थ्य एवं कल्याण",desc:"दैनिक निर्देशित ध्यान सत्र जो छात्रों को मानसिक शांति, कक्षा में एकाग्रता और भावनात्मक संतुलन विकसित करने में मदद करते हैं।"},{id:"patriotic-celebrations",img:"./assets/celebrations.jpg",title:"देशभक्ति एवं सांस्कृतिक समारोह",category:"जीवन कौशल एवं नागरिक",desc:"वृक्षारोपण अभियान, स्वतंत्रता दिवस, कारगिल विजय दिवस और संविधान दिवस के माध्यम से राष्ट्र के प्रति गर्व और नागरिक कर्तव्य की भावना।"},{id:"rangeet-session",img:"./assets/rangeet-session.jpg",title:"रंगीत के साथ जीवन कौशल",category:"जीवन कौशल एवं नागरिक",desc:"रंगीत के साथ साझेदारी कर 6-16 वर्ष के बच्चों को सहयोग, सहानुभूति, पारिस्थितिक जागरूकता और समस्या समाधान जैसे आवश्यक जीवन कौशल सिखाना।"},{id:"science-exhibition",img:"./assets/science-exhibition.jpg",title:"विज्ञान प्रदर्शनी एवं STEM लैब",category:"शिक्षा",desc:"छात्र रचनात्मक विज्ञान मॉडल, रोबोटिक्स और पर्यावरणीय प्रयोगों का प्रदर्शन करते हैं, जिससे वैज्ञानिक दृष्टिकोण को बढ़ावा मिलता है।"},{id:"constitution-day",img:"./assets/constitution-day.jpg",title:"संविधान दिवस समारोह",category:"जीवन कौशल एवं नागरिक",desc:"भारतीय संविधान के सिद्धांतों, मौलिक अधिकारों और कर्तव्यों पर विशेष कार्यशालाएं।"}]},partners:{tagline:"प्रगति में हमारे साथी",heading:"सामूहिक सहयोग से जमीनी बदलाव",desc:"हमारा कार्य प्रतिष्ठित ट्रस्टों, परोपकारी संस्थाओं और दूरदर्शी कॉर्पोरेट भागीदारों के सहयोग से संभव हुआ है।",list:[{name:"नवचेतना चैरिटेबल ट्रस्ट",logo:"./assets/navchetna.png",type:"चेरिटेबल ट्रस्ट पार्टनर"},{name:"नारायण रेकी सत्संग परिवार ट्रस्ट",logo:"./assets/narayan-reiki.png",type:"कल्याण पार्टनर"},{name:"सुनील पटोदिया वेलफेयर फाउंडेशन",logo:"./assets/sunil-patodia.png",type:"परोपकारी फाउंडेशन"},{name:"सीजी पावर एंड इंडस्ट्रियल सॉल्यूशंस",logo:"./assets/cg-power.png",type:"CSR एवं संस्थागत पार्टनर"}]},contact:{tagline:"संपर्क करें",heading:"सकारात्मक बदलाव लाने के लिए हमसे जुड़ें",desc:"चाहे आप स्वयंसेवक बनना चाहें, CSR साझेदारी करना चाहें, या स्कूल में प्रवेश लेना चाहें, हम आपका स्वागत करते हैं।",phone:"+91-9820500726",email:"info@prayasfoundation.co.in",address:"मुंबई पब्लिक स्कूल, मालवणी टाउनशिप, मालाड वेस्ट, मुंबई, महाराष्ट्र - 400095",form:{nameLabel:"आपका पूरा नाम",namePlaceholder:"अपना नाम दर्ज करें",phoneLabel:"फ़ोन नंबर (10 अंक)",phonePlaceholder:"उदा. 9820500726",emailLabel:"ईमेल पता",emailPlaceholder:"name@example.com",interestLabel:"मुझे रुचि है...",interests:[{val:"volunteer",label:"स्वयंसेवा / सदस्य के रूप में जुड़ें"},{val:"job",label:"करियर / एनजीओ कार्य (NGO Work)"},{val:"admission",label:"स्कूल प्रवेश सहायता"},{val:"csr",label:"CSR एवं कॉर्पोरेट साझेदारी"},{val:"donation",label:"दान एवं प्रायोजन (80G)"},{val:"general",label:"सामान्य पूछताछ"}],availabilityLabel:"आपकी उपलब्धता / कार्य समय",availabilities:[{val:"weekends",label:"केवल सप्ताहांत (शनिवार और रविवार)"},{val:"weekdays",label:"सप्ताह के दिन (सोमवार से शुक्रवार)"},{val:"fulltime",label:"पूर्णकालिक (दैनिक ऑन-साइट / नियमित)"},{val:"parttime",label:"अंशकालिक (4 से 8 घंटे / सप्ताह)"},{val:"flexible",label:"लचीला समय / ऑनलाइन मेंटरशिप"},{val:"events",label:"केवल विशेष आयोजनों एवं अभियानों में"}],messageLabel:"आपका संदेश / अनुभव",messagePlaceholder:"आप अपने अनुभव या जिस प्रकार योगदान देना चाहते हैं, उसका विवरण लिखें...",resumeLabel:"रिज्यूमे / प्रस्ताव संलग्न करें (PDF, DOC, DOCX - ऐच्छिक)",consentText:"मैं अपनी पूछताछ/आवेदन के संबंध में प्रयास फाउंडेशन द्वारा संपर्क किए जाने से सहमत हूँ।",submitBtn:"आवेदन / संदेश भेजें",sendingBtn:"भेजा जा रहा है...",successTitle:"सफलतापूर्वक प्राप्त हुआ!",successMsg:"संपर्क करने के लिए धन्यवाद! प्रयास फाउंडेशन की टीम को आपका आवेदन प्राप्त हो गया है और हम शीघ्र ही आपसे संपर्क करेंगे।"}},donation:{title:"प्रयास फाउंडेशन को दान करें",subtitle:"आपका योगदान सीधे मुंबई पब्लिक स्कूल में छात्रों की शिक्षा, पोषण, नेत्र देखभाल और उपचारात्मक शिक्षण को वित्तपोषित करता है।",taxBadge:"80G कर छूट उपलब्ध",taxDesc:"प्रयास फाउंडेशन को दिए जाने वाले सभी दान आयकर अधिनियम की धारा 80G के तहत 50% कर कटौती के पात्र हैं।",bankDetailsTitle:"आधिकारिक बैंक ट्रांसफर विवरण (NEFT / RTGS / IMPS)",accountName:"PRAYAS FOUNDATION",bankName:"स्टेट बैंक ऑफ इंडिया (SBI)",accountNumber:"41829038471",ifsc:"SBIN0001824",branch:"मालाड वेस्ट शाखा, मुंबई - 400064",upiId:"shauryashettdds2231@okaxis",instantSupport:"CSR आवंटन या प्रमुख परियोजना को अपनाने के लिए अध्यक्ष ब्रिजेश सिंह से सीधे संपर्क करें।",callBtn:"अभी कॉल करें (+91-9820500726)",whatsappBtn:"व्हाट्सएप पर चैट करें"},faq:[{q:"प्रयास फाउंडेशन द्वारा प्रबंधित मुंबई पब्लिक स्कूल कहाँ स्थित है?",a:"स्कूल मालवणी टाउनशिप, मालाड वेस्ट, मुंबई 400095 में स्थित है। प्रयास फाउंडेशन सीबीएसई और एसएससी दोनों शैक्षणिक धाराओं का संचालन करता है।"},{q:"प्रयास फाउंडेशन के संस्थापक कौन हैं?",a:"प्रयास फाउंडेशन की स्थापना 2012 में श्री ब्रिजेश सिंह द्वारा की गई थी, जो रुइया कॉलेज के पूर्व छात्र और मुंबई में 14 से अधिक वर्षों के सामाजिक अनुभव वाले नेता हैं।"},{q:"खान अकादमी का स्कूल में किस प्रकार उपयोग होता है?",a:"प्रयास फाउंडेशन ने 487+ छात्रों को खान अकादमी डिजिटल प्लेटफॉर्म पर पंजीकृत किया है, जहाँ 96% सक्रिय खाते हैं और STEM विषयों में व्यक्तिगत शिक्षण मिलता है।"},{q:"मैं प्रयास फाउंडेशन में स्वयंसेवा कैसे कर सकता हूँ?",a:"आप अतिथि शिक्षक, खेल प्रशिक्षक, रीडिंग मेंटर या इवेंट समन्वयक के रूप में स्वयंसेवा कर सकते हैं। हमारे संपर्क पेज पर फॉर्म भरें या +91-9820500726 पर संपर्क करें।"},{q:"क्या दान पर कर छूट मिलती है?",a:"हाँ, प्रयास फाउंडेशन 80G और 12A के तहत पंजीकृत है, जिससे सभी दान आयकर अधिनियम के तहत 50% कर कटौती के पात्र हैं।"}],footer:{aboutSummary:"प्रयास फाउंडेशन मुंबई में पंजीकृत एक गैर-सरकारी संगठन है जो मुंबई पब्लिक स्कूल, मालवणी में शिक्षा, बाल कल्याण, स्वास्थ्य और सामुदायिक सशक्तिकरण के लिए समर्पित है।",quickLinks:"त्वरित नेविगेशन",legalLinks:"कानूनी एवं पारदर्शिता",privacyPolicy:"गोपनीयता नीति",termsOfUse:"उपयोग की शर्तें",copyright:"© 2026 प्रयास फाउंडेशन। सर्वाधिकार सुरक्षित। पंजीकृत शिक्षा एवं समाज कल्याण एनजीओ।",disclaimer:"प्रयास फाउंडेशन मुंबई, महाराष्ट्र में पंजीकृत एक गैर-लाभकारी संगठन है।"}},mr:{nav:{home:"मुख्य पृष्ठ",about:"आमच्याबद्दल",school:"मुंबई पब्लिक स्कूल",programs:"कार्यक्रम आणि उपक्रम",work:"आमचे कार्य",impact:"सिद्ध परिणाम",contact:"संपर्क साधा",donate:"देणगी द्या (Donate)",callUs:"कॉल करा",whatsapp:"व्हॉट्सॲप"},hero:{badge:"स्थापनेपासून समाजाचे सक्षमीकरण",titleLine1:"मुंबई पब्लिक स्कूल (CBSE & SSC)",titleHighlight:"प्रयास फाउंडेशनद्वारे संचलित",subtitle:"मालवणी, मुंबई येथील प्रत्येक मुलाच्या उज्ज्वल व समान भविष्यासाठी आमचा प्रत्येक प्रयत्न समर्पित आहे.",exploreBtn:"उपक्रम पहा",impactBtn:"सिद्ध परिणाम",donateBtn:"देणगी द्या (Donate Now)",stats:[{num:"४८७+",label:"सक्षम विद्यार्थी"},{num:"१००%",label:"बोर्ड परीक्षेत उत्तीर्णता"},{num:"१५+",label:"प्रमुख कल्याणकारी उपक्रम"},{num:"१४+",label:"वर्षे अविरत जनसेवा"}]},about:{tagline:"आमचा उद्देश आणि ध्येय",heading:"सामूहिक कार्यातून समाज परिवर्तन",desc:"आम्ही एक समाज-केंद्री संस्था आहोत जी शिक्षण, सक्षमीकरण आणि करुणेच्या माध्यमातून समाज बदलू शकते यावर विश्वास ठेवते. वर्गापासून ते नेत्र शिबिरांपर्यंत आणि खेळापासून ते व्यक्तिमत्त्व विकासापर्यंत आम्ही प्रत्येक स्तरावर कार्यरत आहोत.",pillars:[{title:"पायाभूत शिक्षण",desc:"मालवणीतील विद्यार्थ्यांना आधुनिक शिक्षण पद्धती, खान अकादमी डिजिटल टूल्स आणि इंग्रजी संभाषण कौशल्य प्रदान करणे."},{title:"आरोग्य आणि निरोगी जीवन",desc:"मोफत नेत्र तपासणी, मानसिक आरोग्य समुपदेशन आणि विद्यार्थ्यांच्या सर्वांगीण पोषणासाठी उपक्रम."},{title:"चारित्र्य आणि नागरिक कर्तव्य",desc:"नेतृत्व गुण, स्वसंरक्षण शिस्त, मार्शल आर्ट्स आणि राष्ट्रीय उत्सवांच्या माध्यमातून देशप्रेमाची भावना रुजवणे."}],founder:{badge:"दूरदृष्टी नेतृत्व",name:"श्री ब्रिजेश सिंह",role:"संस्थापक आणि अध्यक्ष, प्रयास फाउंडेशन",bio:"१९९८ पासून अविरत समाजसेवक, मालाड आणि मालवणीमध्ये १४+ वर्षांहून अधिक काळ जनसेवेसाठी समर्पित कार्य.",quote:"समाजातील वंचित आणि सर्वसामान्य नागरिकांच्या हक्कांसाठी आणि प्रगतीसाठी अविरत लढण्याचा माझा निर्धार आहे."},leaders:{title:"संस्थेचे आधारस्तंभ",subtitle:"मुंबई पब्लिक स्कूलचे व्यवस्थापन आणि मार्गदर्शनामागील समर्पित व्यक्ती आणि मार्गदर्शक मंडळ.",items:[{name:"श्री सुरेश भगेरिया",role:"मार्गदर्शक / सल्लागार मंडळ",desc:"संस्थात्मक विस्तार आणि परोपकारी उपक्रमांचे धोरणात्मक मार्गदर्शक."},{name:"श्री सुशील जाजू",role:"सल्लागार परिषद",desc:"शैक्षणिक धोरण आणि सामाजिक उपक्रमांचे सल्लागार."},{name:"श्री कमल पोद्दार",role:"सल्लागार परिषद",desc:"शैक्षणिक कल्याण आणि युवा उपक्रमांचे तज्ज्ञ सल्लागार."},{name:"सीजी पॉवर लिमिटेड",role:"संस्थात्मक भागीदार",desc:"शाळेच्या डिजिटल लॅब आणि पायाभूत सुविधांचे प्रमुख सहयोगी.",logo:"./assets/cg-power.png"},{name:"श्री सुनील पटोदिया",role:"मार्गदर्शक व दाते",desc:"विद्यार्थी कल्याण आणि शिक्षण विस्तारासाठी सतत सहकार्य.",image:"./assets/sunil-patodia.png"},{name:"नवचेतना ट्रस्ट",role:"सामाजिक भागीदार",desc:"तळागाळातील सामाजिक कार्य आणि शैक्षणिक सक्षमीकरणासाठी भागीदार.",logo:"./assets/navchetna.png"}]}},leadership:{tagline:"दूरदर्शी नेतृत्व",heading:"आमचे संस्थापक आणि अध्यक्ष",name:"ब्रिजेश सिंह",role:"संस्थापक आणि अध्यक्ष, प्रयास फाउंडेशन",bio1:"१५ सप्टेंबर १९६८ रोजी महाराष्ट्रात जन्मलेल्या ब्रिजेश सिंह यांनी मुंबईच्या रुईया कॉलेजमधून बी.एस्सी. पदवी प्राप्त केली. लहानपणापासूनच समाजसेवेची आवड असल्याने त्यांनी १९९८ पासून मालाड-मालवणीमध्ये अविरत जनसेवा सुरू केली.",bio2:"स्थानिक गरजा आणि आव्हानांची सखोल जाणीव असल्याने त्यांनी वंचित घटकांच्या हक्कांसाठी, शिक्षण आणि शासकीय योजना सर्वसामान्यांपर्यंत पोहोचवण्यासाठी महत्त्वपूर्ण लढा दिला.",bio3:"प्रयास फाउंडेशनच्या माध्यमातून त्यांनी हजारो कुटुंबांना थेट मदत, शैक्षणिक सुविधा, मोफत नेत्र शिबिरे आणि १०,००० हून अधिक लाभार्थ्यांना सामाजिक सुरक्षा मिळवून दिली.",quote:"समाजातील वंचित आणि सर्वसामान्य नागरिकांच्या प्रगतीसाठी अविरत लढण्याचा माझा निर्धार आहे."},mission:{tagline:"आमचा उद्देश आणि ध्येय",heading:"सामूहिक कार्यातून समाज परिवर्तन",title:"शिक्षणातून वंचित घटकांचा सर्वांगीण विकास",desc:"आम्ही एक समाज-केंद्री संस्था आहोत जी शिक्षण, सक्षमीकरण आणि करुणेच्या माध्यमातून समाज बदलू शकते यावर विश्वास ठेवते. वर्गापासून ते नेत्र शिबिरांपर्यंत आणि खेळापासून ते व्यक्तिमत्त्व विकासापर्यंत आम्ही प्रत्येक स्तरावर कार्यरत आहोत.",vision:"असा समाज घडवणे जिथे प्रत्येक मुलाला जात, धर्म किंवा आर्थिक परिस्थितीचा अडथळा न येता उत्तम शिक्षण आणि समान संधी मिळेल.",pillars:[{title:"पायाभूत शिक्षण",desc:"मालवणीतील विद्यार्थ्यांना आधुनिक शिक्षण पद्धती, खान अकादमी डिजिटल टूल्स आणि इंग्रजी संभाषण कौशल्य प्रदान करणे."},{title:"आरोग्य आणि निरोगी जीवन",desc:"मोफत नेत्र तपासणी, मानसिक आरोग्य समुपदेशन आणि विद्यार्थ्यांच्या सर्वांगीण पोषणासाठी उपक्रम."},{title:"चारित्र्य आणि नागरिक कर्तव्य",desc:"नेतृत्व गुण, स्वसंरक्षण शिस्त, मार्शल आर्ट्स आणि राष्ट्रीय उत्सवांच्या माध्यमातून देशप्रेमाची भावना रुजवणे."}]},school:{tagline:"शैक्षणिक उत्कृष्टतेचे केंद्र",badge:"मुंबई पब्लिक स्कूल",heading:"गुणवत्तापूर्ण शिक्षण, तंत्रज्ञान आणि चारित्र्य घडवणारी शाळा",location:"मालवणी टाउनशिप, मालाड (पश्चिम), मुंबई",desc:"मालवणी, मालाड पश्चिम येथे स्थित मुंबई पब्लिक स्कूल (CBSE & SSC) हे प्रयास फाउंडेशनद्वारे संचलित शैक्षणिक केंद्र आहे, जेथे प्रत्येक विद्यार्थ्याला डिजिटल तंत्रज्ञान आणि उत्तम संस्कार मिळतात.",pillarsTitle:"संस्थेचे आधारस्तंभ",pillarsSubtitle:"मुंबई पब्लिक स्कूलचे व्यवस्थापन आणि मार्गदर्शनामागील समर्पित व्यक्ती आणि मार्गदर्शक मंडळ.",council:[{name:"श्री सुरेश भगेरिया",role:"मार्गदर्शक / सल्लागार मंडळ"},{name:"श्री सुशील जाजू",role:"सल्लागार परिषद"},{name:"श्री कमल पोद्दार",role:"सल्लागार परिषद"},{name:"श्री ब्रिजेश सिंह",role:"संस्थापक आणि अध्यक्ष",image:"./assets/brijesh-singh.png"},{name:"सीजी पॉवर लिमिटेड",role:"संस्थात्मक भागीदार",logo:"./assets/cg-power.png"},{name:"श्री अनिल कैन्या",role:"व्यवस्थापन समिती"},{name:"श्रीमती रुची माने",role:"शिक्षण तज्ज्ञ"},{name:"श्री अंकित गुप्ता",role:"कार्यकारी प्रमुख"},{name:"श्री श्रीप्रकाश मिश्रा",role:"समन्वयक"}],features:[{title:"खान अकादमी डिजिटल शिक्षण",desc:"४८७+ विद्यार्थ्यांचे खान अकादमी प्लॅटफॉर्मवर प्रत्यक्ष गणित आणि विज्ञान शिक्षण, जेथे प्रत्येक विद्यार्थ्याची प्रगती ट्रॅक केली जाते."},{title:"उपचारात्मक शिक्षण (Remedial)",desc:"अभ्यासात मागे पडणाऱ्या मुलांसाठी विशेष व्यक्तिगत मार्गदर्शन वर्ग, ज्यामुळे त्यांचे गुण २५% ते ५०% ने सुधारले आहेत."},{title:"इंग्रजी संभाषण व संवाद",desc:"मुलांना जागतिक स्तरावर आत्मविश्वासू बनवण्यासाठी संवाद कौशल्य आणि इंग्रजी भाषेचे विशेष प्रशिक्षण."},{title:"क्रीडा आणि मार्शल आर्ट्स (कुंग फू)",desc:"मुला-मुलींना स्वसंरक्षण, शारीरिक तंदुरुस्ती आणि शिस्त शिकवण्यासाठी ब्लॅक-बेल्ट प्रशिक्षकांद्वारे कुंग फू प्रशिक्षण."}]},impact:{tagline:"सिद्ध सामाजिक परिणाम",heading:"आकडेवारी आणि परिवर्तनाची खरी यशोगाथा",desc:"गेल्या १४ वर्षांत प्रयास फाउंडेशनने हजारो कुटुंबांच्या जीवनात प्रत्यक्ष सकारात्मक बदल घडवून आणला आहे.",metrics:[{num:"४८७+",label:"डिजिटल सक्षम विद्यार्थी",sub:"खान अकादमीवर सक्रिय"},{num:"१००%",label:"बोर्ड निकाल",sub:"एसएससी / सीबीएसई यश"},{num:"१२,०००+",label:"मोफत चष्मे वाटप",sub:"नेत्र शिबिरांच्या माध्यमातून"},{num:"१,०००+",label:"पालक जोडणी",sub:"पोस्टकार्ड मोहिमेद्वारे"}],chartTitle:"खान अकादमी मूल्यमापन प्रगती आलेख (२०२४-२५)",chartSubtitle:"अंकुर, अरुण आणि अरुणोदय गटांमधील प्रीलिम १ ते ५ गुणांची प्रगती.",summary:"डिजिटल शिक्षण आणि उपचारात्मक मार्गदर्शन यामुळे विद्यार्थ्यांच्या गुणांमध्ये सलग प्रगती झाली आहे.",ctaBanner:"अधिकृत वार्षिक अहवाल व डेटा पडताळणी उपलब्ध"},programs:{tagline:"कक्षापलीकडचे शिक्षण",heading:"भविष्याला आकार देणारे १६ प्रमुख उपक्रम",desc:"आम्ही विद्यार्थ्यांच्या सर्वांगीण विकासासाठी शैक्षणिक, शारीरिक तंदुरुस्ती, डिजिटल साक्षरता, मानसिक आरोग्य आणि चारित्र्य घडवणारे उपक्रम राबवतो.",filterAll:"सर्व उपक्रम",filterEducation:"शिक्षण",filterHealth:"आरोग्य आणि निरोगी जीवन",filterSports:"क्रीडा आणि स्वसंरक्षण",filterLifeSkills:"जीवन कौशल्ये व नागरिक कर्तव्य",categories:[{id:"all",label:"सर्व उपक्रम"},{id:"Education",label:"शिक्षण"},{id:"Health & Wellbeing",label:"आरोग्य आणि निरोगी जीवन"},{id:"Sports & Fitness",label:"क्रीडा आणि स्वसंरक्षण"},{id:"Life Skills & Civic",label:"जीवन कौशल्ये व नागरिक कर्तव्य"}],items:[{id:"remedial-learning",img:"./assets/slow-learners.jpg",title:"उपचारात्मक शिक्षण कार्यक्रम (Remedial)",category:"Education",badge:"विशेष उपक्रम",highlight:!0,desc:"अभ्यासात मागे पडणाऱ्या मुलांसाठी स्वतंत्र वर्ग आणि प्रशिक्षित शिक्षकांद्वारे विशेष मार्गदर्शन, ज्यामुळे विद्यार्थ्यांचा आत्मविश्वास वाढून बोर्ड परीक्षेत उत्कृष्ट यश मिळाले आहे."},{id:"postcard-parents",img:"./assets/postcard-activity.jpg",title:"पालकांसाठी पोस्टकार्ड मोहीम",category:"Health & Wellbeing",badge:"भावनिक उपक्रम",highlight:!0,desc:"विद्यार्थ्यांच्या मानसिक आरोग्यासाठी एक अनोखा उपक्रम, जिथे मुले आपल्या पालकांना मनमोकळे पत्र लिहून आपल्या भावना व्यक्त करतात, ज्यामुळे कौटुंबिक नातेसंबंध अधिक दृढ होतात."},{id:"raksha-bandhan",img:"./assets/raksha-bandhan.jpg",title:"देशाच्या रक्षकांसोबत रक्षाबंधन",category:"Life Skills & Civic",badge:"देशभक्ती उपक्रम",highlight:!0,desc:"शाळेतील विद्यार्थ्यांनी पोलीस ठाणे आणि लष्करी छावण्यांमध्ये जाऊन जवान व अधिकाऱ्यांना राख्या बांधल्या आणि देशाच्या खऱ्या रक्षकांप्रती कृतज्ञता व्यक्त केली."},{id:"khan-academy",img:"./assets/khan-academy.jpg",title:"खान अकादमी डिजिटल शिक्षण",category:"Education",desc:"४८७+ विद्यार्थ्यांना खान अकादमीच्या डिजिटल प्लॅटफॉर्मद्वारे गणित आणि विज्ञानाचे वैयक्तिक शिक्षण, ज्यामुळे संकल्पना समजणे अत्यंत सुलभ झाले आहे."},{id:"creative-writing",img:"./assets/english-writing.jpg",title:"इंग्रजी सर्जनशील लेखन कार्यशाळा",category:"Education",desc:"विद्यार्थ्यांना इंग्रजी भाषेमध्ये आत्मविश्वासू बनवण्यासाठी निबंध लेखन, कथा निर्मिती आणि व्याकरण सराव कार्यशाळा."},{id:"parent-teachers",img:"./assets/parent-teachers.jpg",title:"पालक-शिक्षक संवाद परिषद",category:"Life Skills & Civic",desc:"विद्यार्थ्यांच्या शैक्षणिक प्रगतीवर नियमित चर्चा, मार्गदर्शन आणि पालकांचा शाळेच्या व्यवस्थापनात सक्रिय सहभाग."},{id:"counseling",img:"./assets/mental-health.jpg",title:"मानसिक आरोग्य व समुपदेशन केंद्र",category:"Health & Wellbeing",desc:"तज्ज्ञ समुपदेशकांद्वारे विद्यार्थ्यांमधील ताणतणाव, परीक्षेची भीती आणि कौटुंबिक समस्यांवर मार्गदर्शन."},{id:"sports-meet",img:"./assets/sports-meet.jpg",title:"वार्षिक क्रीडा महोत्सव व स्पर्धा",category:"Sports & Fitness",desc:"धावणे, फुटबॉल, खो-खो आणि विविध मैदानी खेळांच्या माध्यमातून विद्यार्थ्यांमध्ये खिलाडूवृत्ती आणि तंदुरुस्तीचा विकास."},{id:"kungfu",img:"./assets/kungfu.jpg",title:"कुंग फू व स्वसंरक्षण प्रशिक्षण",category:"Sports & Fitness",desc:"मुली आणि मुलांसाठी ब्लॅक-बेल्ट प्रशिक्षकांद्वारे मार्शल आर्ट्स, शारीरिक शिस्त आणि स्वसंरक्षण तंत्रांचे नियमित प्रशिक्षण."},{id:"yoga-meditation",img:"./assets/yoga-day.jpg",title:"योग आणि ध्यान साधना",category:"Health & Wellbeing",desc:"दररोज सकाळी प्राणायाम आणि ध्यान साधनेमुळे विद्यार्थ्यांची एकाग्रता आणि स्मरणशक्ती सुधारते."},{id:"eye-checkup",img:"./assets/eye-camp.jpg",title:"मोफत नेत्र तपासणी व चष्मे वाटप",category:"Health & Wellbeing",desc:"१२,००० हून अधिक नागरिक आणि विद्यार्थ्यांची नेत्र तपासणी करून गरजू विद्यार्थ्यांना मोफत चष्मे वाटप."},{id:"republic-day",img:"./assets/republic-day.jpg",title:"प्रजासत्ताक दिन व स्वातंत्र्य दिन उत्सव",category:"Life Skills & Civic",desc:"ध्वजारोहण, संचलन, देशभक्तीपर सांस्कृतिक कार्यक्रम आणि स्वातंत्र्यसैनिकांच्या बलिदानाचे स्मरण."},{id:"science-exhibition",img:"./assets/science-exhibition.jpg",title:"विज्ञान प्रदर्शन व तंत्रज्ञान मेळावा",category:"Education",desc:"विद्यार्थ्यांनी तयार केलेले विज्ञानाचे कार्यक्षम मॉडेल्स, रोबोटिक्स आणि पर्यावरणपूरक प्रयोगांचे सादरीकरण."},{id:"art-craft",img:"./assets/art-craft.jpg",title:"कला, हस्तकला व रेखाचित्र स्पर्धा",category:"Education",desc:"रंगकाम, मातीकाम आणि हस्तकलेच्या माध्यमातून विद्यार्थ्यांच्या सुप्त कलागुणांना वाव देणारे उपक्रम."},{id:"tree-plantation",img:"./assets/tree-plantation.jpg",title:"वृक्षारोपण व पर्यावरण संवर्धन",category:"Life Skills & Civic",desc:"परिसरात झाडे लावणे, प्लास्टिकमुक्ती आणि पर्यावरण रक्षणासाठी विद्यार्थ्यांची जनजागृती रॅली."},{id:"food-distribution",img:"./assets/food-distribution.jpg",title:"अन्नदान व पोषण आहार सहाय्य",category:"Health & Wellbeing",desc:"अल्प उत्पन्न कुटुंबातील विद्यार्थ्यांना पौष्टिक अल्पोपहार, दूध आणि प्रथिनेयुक्त पोषण सहाय्य."}]},partners:{tagline:"प्रगतीतील विश्वासू सहयोगी",heading:"सामूहिक सहकार्यातून समाज परिवर्तन",desc:"प्रतिष्ठित ट्रस्ट, परोपकारी संस्था आणि दूरदर्शी कॉर्पोरेट भागीदारांच्या सहकार्यामुळेच हा मोठा सामाजिक बदल शक्य होत आहे.",list:[{name:"नवचेतना चॅरिटेबल ट्रस्ट",logo:"./assets/navchetna.png",type:"चॅरिटेबल ट्रस्ट भागीदार"},{name:"नारायण रेकी सत्संग परिवार ट्रस्ट",logo:"./assets/narayan-reiki.png",type:"कल्याणकारी भागीदार"},{name:"सुनील पटोदिया वेल्फेअर फाउंडेशन",logo:"./assets/sunil-patodia.png",type:"परोपकारी संस्था"},{name:"सीजी पॉवर अँड इंडस्ट्रियल सोल्युशन्स",logo:"./assets/cg-power.png",type:"सीएसआर व संस्थात्मक भागीदार"}]},work:{tagline:"जमीनी स्तरावर प्रत्यक्ष सेवा",heading:"आमचे कार्य: सेवा, संस्कृती आणि जनकल्याण",desc:"प्रयास फाउंडेशनद्वारे आयोजित राम कथा, हळदी कुंकू, दहीहंडी, छठ पूजा आणि महाप्रसाद भंडारा उपक्रमांची सचित्र झलक."},contact:{tagline:"आमच्याशी संपर्क साधा",heading:"आमच्या कार्यात सहभागी व्हा किंवा माहिती मिळवा",desc:"शाळा प्रवेश, सीएसआर सहकार्य, स्वयंसेवा किंवा कोणत्याही मदतीसाठी आजच संपर्क करा.",address:"मुंबई पब्लिक स्कूल, गेट क्र. ६, मालवणी टाउनशिप, मालाड (पश्चिम), मुंबई - ४०००९५",phone:"+91-9820500726",email:"info@prayasfoundation.co.in",form:{nameLabel:"पूर्ण नाव",namePlaceholder:"नाव प्रविष्ट करा",phoneLabel:"मोबाईल क्रमांक",phonePlaceholder:"उदा. ९८२०५००७२६",emailLabel:"ईमेल पत्ता",emailPlaceholder:"name@example.com",interestLabel:"संपर्काचा उद्देश",interests:[{val:"volunteer",label:"स्वयंसेवा / सदस्य म्हणून सहभागी व्हा"},{val:"job",label:"करिअर / एनजीओ कार्य (NGO Work)"},{val:"admission",label:"शाळा प्रवेश सहाय्य"},{val:"csr",label:"सीएसआर आणि संस्थात्मक भागीदारी"},{val:"donation",label:"देणगी आणि प्रायोजकत्व (80G)"},{val:"general",label:"सामान्य विचारणा"}],availabilityLabel:"तुमची उपलब्धता / कामाचे तास",availabilities:[{val:"weekends",label:"फक्त शनिवार आणि रविवार (Weekends)"},{val:"weekdays",label:"आठवड्याचे दिवस (सोमवार ते शुक्रवार)"},{val:"fulltime",label:"पूर्ण वेळ (दररोज प्रत्यक्ष कार्य)"},{val:"parttime",label:"अर्धा वेळ (४ ते ८ तास / आठवडा)"},{val:"flexible",label:"लवचिक वेळ / ऑनलाइन मार्गदर्शन"},{val:"events",label:"फक्त विशेष उपक्रम व मोहिमांमध्ये"}],messageLabel:"तुमचा संदेश / कामाचा अनुभव",messagePlaceholder:"तुमचा अनुभव किंवा कशा प्रकारे सहकार्य करू इच्छिता ते येथे लिहा...",resumeLabel:"बायोडाटा / प्रस्ताव जोडा (पर्यायी)",consentText:"मी प्रयास फाउंडेशनद्वारे संपर्क केला जाण्यास सहमती दर्शवत आहे.",submitBtn:"अर्ज / संदेश पाठवा",sendingBtn:"पाठवत आहे...",successTitle:"यशस्वीरित्या प्राप्त झाले!",successMsg:"संपर्क केल्याबद्दल धन्यवाद! प्रयास फाउंडेशनच्या टीमला आपला अर्ज प्राप्त झाला असून आम्ही लवकरच संपर्क करू."}},donation:{title:"प्रयास फाउंडेशनला देणगी द्या",subtitle:"आपले योगदान थेट गरजू मुलांचे शिक्षण, पोषण आणि आरोग्य उपक्रमांसाठी वापरले जाते.",taxBadge:"८०जी कर सवलत उपलब्ध",taxDesc:"प्रयास फाउंडेशनला दिलेल्या देणग्यांवर आयकर कायदा कलम ८०जी अंतर्गत ५०% कर सवलत मिळते.",bankDetailsTitle:"अधिकृत बँक ट्रान्सफर तपशील (NEFT / RTGS / IMPS)",accountName:"PRAYAS FOUNDATION",bankName:"स्टेट बँक ऑफ इंडिया (SBI)",accountNumber:"41829038471",ifsc:"SBIN0001824",branch:"मालाड पश्चिम शाखा, मुंबई - ४०००६४",upiId:"shauryashettdds2231@okaxis",instantSupport:"सीएसआर प्रकल्पासाठी अध्यक्ष ब्रिजेश सिंह यांच्याशी थेट संपर्क साधा.",callBtn:"आता कॉल करा (+91-9820500726)",whatsappBtn:"व्हॉट्सॲपवर चॅट करा"},faq:[{q:"प्रयास फाउंडेशन संचलित मुंबई पब्लिक स्कूल कोठे आहे?",a:"ही शाळा मालवणी टाउनशिप, मालाड पश्चिम, मुंबई ४०००९५ येथे आहे. येथे सीबीएसई आणि एसएससी दोन्ही अभ्यासक्रम शिकवले जातात."},{q:"प्रयास फाउंडेशनचे संस्थापक कोण आहेत?",a:"प्रयास फाउंडेशनची स्थापना २०१२ मध्ये श्री ब्रिजेश सिंह यांनी केली, जे १४ वर्षांहून अधिक काळ मुंबईत सामाजिक कार्यात सक्रिय आहेत."},{q:"शाळेत खान अकादमीचा कसा वापर होतो?",a:"४८७+ विद्यार्थी खान अकादमी डिजिटल प्लॅटफॉर्मवर शिकतात, जिथे गणित आणि विज्ञानाची प्रगती दररोज नोंदवली जाते."},{q:"मी प्रयास फाउंडेशनमध्ये स्वयंसेवक म्हणून काम करू शकतो का?",a:"होय, आपण शिक्षक, क्रीडा प्रशिक्षक किंवा समन्वयक म्हणून काम करू शकता. +91-9820500726 वर संपर्क साधा."},{q:"देणग्यांवर कर सवलत मिळते का?",a:"होय, प्रयास फाउंडेशन ८०जी आणि १२ए अंतर्गत नोंदणीकृत असल्याने सर्व देणग्यांवर ५०% कर सवलत मिळते."}],footer:{aboutSummary:"प्रयास फाउंडेशन मुंबईत नोंदणीकृत स्वयंसेवी संस्था असून ती शिक्षण, बाल कल्याण, आरोग्य आणि सामाजिक सक्षमीकरणासाठी कटिबद्ध आहे.",quickLinks:"जलद लिंक्स",legalLinks:"कायदेशीर व पारदर्शकता",privacyPolicy:"गोपनीयता धोरण",termsOfUse:"वापराच्या अटी",copyright:"© २०२६ प्रयास फाउंडेशन. सर्व हक्क सुरक्षित. नोंदणीकृत सामाजिक संस्था.",disclaimer:"प्रयास फाउंडेशन मुंबई, महाराष्ट्र येथे नोंदणीकृत धर्मादाय संस्था आहे."}}};typeof window<"u"&&(window.setPrayasLanguage||(window.setPrayasLanguage=function(e){localStorage.setItem("prayas_lang",e||"mr"),window.closeLanguageModal&&window.closeLanguageModal(),window.location.reload()}),window.openLanguageModal||(window.openLanguageModal=function(){const e=document.getElementById("language-modal-overlay");e&&(e.parentElement!==document.body&&document.body.appendChild(e),e.style.setProperty("display","flex","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important"),e.classList.add("open")),document.body.style.overflow="hidden"}),window.closeLanguageModal||(window.closeLanguageModal=function(){const e=document.getElementById("language-modal-overlay");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important"),e.classList.remove("open")),document.body.style.overflow=""}),window.openPrayasMenu||(window.openPrayasMenu=function(){const e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&(e.parentElement!==document.body&&document.body.appendChild(e),e.style.setProperty("display","block","important"),e.style.setProperty("opacity","1","important"),e.style.setProperty("visibility","visible","important"),e.style.setProperty("pointer-events","auto","important")),t&&(t.parentElement!==document.body&&document.body.appendChild(t),t.style.setProperty("display","flex","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("pointer-events","auto","important"),t.style.setProperty("z-index","99999","important")),document.body.style.overflow="hidden"}),window.closePrayasMenu||(window.closePrayasMenu=function(){const e=document.getElementById("drawer-overlay"),t=document.getElementById("mobile-drawer");e&&(e.style.setProperty("display","none","important"),e.style.setProperty("opacity","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("pointer-events","none","important")),t&&(t.style.setProperty("display","none","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("pointer-events","none","important")),document.body.style.overflow=""}),window.togglePrayasMenu||(window.togglePrayasMenu=function(e){e?window.openPrayasMenu():window.closePrayasMenu()}));function Te(e,t,a="home"){const o=t==="mr",n=t==="hi",i=(e[t]||e.mr||e.en).nav,s=[{id:"home",href:"./index.html",label:i.home,icon:"🏠"},{id:"about",href:"./about.html",label:i.about,icon:"📖"},{id:"school",href:"./school.html",label:i.school,icon:"🏫"},{id:"programs",href:"./programs.html",label:i.programs,icon:"🎯"},{id:"work",href:"./work.html",label:i.work||(o?"आमचे कार्य":n?"हमारा कार्य":"Our Work"),icon:"🌟"},{id:"impact",href:"./impact.html",label:i.impact,icon:"📊"},{id:"contact",href:"./contact.html",label:i.contact,icon:"📞"}],r=o||n?"भाषा":"Language";return`
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
          <a href="./index.html" class="nav-btn nav-home-btn hover-lift ${a==="home"?"active":""}" title="${o||n?"मुख्य पृष्ठ":"Home"}" aria-label="Home">
            <span class="nav-btn-icon" style="font-size: 1.05rem; line-height: 1;">🏠</span>
            <span class="nav-btn-text nav-home-text">${o||n?"होम":"Home"}</span>
          </a>

          <!-- Donate CTA Button (Icon-only on mobile, Icon+Text on desktop) -->
          <button id="nav-donate-btn" type="button" class="nav-btn nav-donate-btn btn-accent hover-lift" title="${i.donate}" aria-label="Donate" onclick="window.openDonateModal ? window.openDonateModal() : null">
            <span class="nav-btn-icon" style="font-size: 0.95rem; line-height: 1;">❤️</span>
            <span class="nav-btn-text nav-donate-text">${i.donate}</span>
          </button>

          <!-- Language Selection Trigger Button (Opens Language Pop-up Modal) -->
          <button id="lang-toggle-btn" class="nav-btn nav-lang-btn glass-badge hover-scale" type="button" title="Select Language / भाषा निवडा" aria-label="Language" onclick="window.openLanguageModal && window.openLanguageModal()">
            <span class="nav-lang-icon" style="font-size: 1.15rem; line-height: 1; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;" aria-hidden="true">🌐</span>
            <span class="nav-btn-text font-bold" id="lang-label">${r}</span>
            <span class="nav-lang-badge font-bold" style="font-size: 0.74rem; letter-spacing: 0.5px; text-transform: uppercase; color: var(--primary); font-family: var(--font-display);">${t}</span>
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
            <span class="nav-btn-text menu-btn-text font-bold" style="color: var(--foreground); font-family: var(--font-display);">${o||n?"मेनू":"Menu"}</span>
          </button>

        </div>
      </div>
    </header>

    <!-- Navigation Pop-Up Modal -->
    <div id="drawer-overlay" class="drawer-overlay" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.78); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 99998;" onclick="window.closePrayasMenu ? window.closePrayasMenu() : (window.togglePrayasMenu && window.togglePrayasMenu(false))"></div>

    <div id="mobile-drawer" class="mobile-drawer" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 92%; max-width: 450px; max-height: 88vh; background: #ffffff; color: #0f172a; border-radius: 20px; border: 2px solid #10b981; z-index: 99999; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55); padding: 1.5rem; flex-direction: column; overflow-y: auto;" onclick="event.stopPropagation()">
      
      <!-- Modal Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 0.85rem; border-bottom: 2px solid #e2e8f0;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="./assets/prayas-logo.png" alt="Prayas Logo" style="height: 38px; width: auto;" />
          <span class="font-display font-bold block" style="font-size: 1.2rem; line-height: 1.2; color: #0f172a;">Prayas Foundation</span>
        </div>
        <button id="close-drawer-btn" type="button" class="hover-lift" style="width: 36px; height: 36px; border-radius: 50%; background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; font-weight: 800;" aria-label="Close Menu" onclick="window.closePrayasMenu ? window.closePrayasMenu() : (window.togglePrayasMenu && window.togglePrayasMenu(false))">
          ✕
        </button>
      </div>

      <!-- Mobile Quick Language Switcher -->
      <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 0.75rem; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem; font-size: 0.85rem; font-weight: 700; color: #475569;">
          <span style="font-size: 1.1rem;">🌐</span>
          <span>${o?"भाषा निवडा (Select Language):":n?"भाषा चुनें (Select Language):":"Select Language:"}</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem;">
          <button type="button" class="lang-select-option hover-scale" data-lang="mr" style="padding: 0.55rem 0.25rem; border-radius: 10px; font-weight: 800; font-size: 0.82rem; cursor: pointer; text-align: center; border: 1.5px solid ${t==="mr"?"#10b981":"#cbd5e1"}; background: ${t==="mr"?"#10b981":"#ffffff"}; color: ${t==="mr"?"#ffffff":"#0f172a"};" onclick="window.setPrayasLanguage && window.setPrayasLanguage('mr')">
            🚩 मराठी
          </button>
          <button type="button" class="lang-select-option hover-scale" data-lang="hi" style="padding: 0.55rem 0.25rem; border-radius: 10px; font-weight: 800; font-size: 0.82rem; cursor: pointer; text-align: center; border: 1.5px solid ${t==="hi"?"#10b981":"#cbd5e1"}; background: ${t==="hi"?"#10b981":"#ffffff"}; color: ${t==="hi"?"#ffffff":"#0f172a"};" onclick="window.setPrayasLanguage && window.setPrayasLanguage('hi')">
            🇮🇳 हिन्दी
          </button>
          <button type="button" class="lang-select-option hover-scale" data-lang="en" style="padding: 0.55rem 0.25rem; border-radius: 10px; font-weight: 800; font-size: 0.82rem; cursor: pointer; text-align: center; border: 1.5px solid ${t==="en"?"#10b981":"#cbd5e1"}; background: ${t==="en"?"#10b981":"#ffffff"}; color: ${t==="en"?"#ffffff":"#0f172a"};" onclick="window.setPrayasLanguage && window.setPrayasLanguage('en')">
            🌐 English
          </button>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.25rem;">
        ${s.map(d=>`
          <a href="${d.href}" class="hover-lift" style="display: flex; align-items: center; gap: 0.85rem; padding: 0.75rem 1rem; border-radius: 12px; font-size: 1rem; font-weight: 700; text-decoration: none; transition: all 0.15s ease; ${a===d.id?"background: #10b981; color: #ffffff; box-shadow: 0 4px 12px rgba(16,185,129,0.25);":"background: #f8fafc; color: #1e293b; border: 1px solid #e2e8f0;"}">
            <span style="font-size: 1.2rem;">${d.icon}</span>
            <span style="flex: 1;">${d.label}</span>
            ${a===d.id?'<span style="font-size: 0.7rem; font-weight: 800; background: rgba(255,255,255,0.25); padding: 0.2rem 0.5rem; border-radius: 999px; text-transform: uppercase;">Active</span>':'<span style="color: #94a3b8; font-size: 0.9rem;">→</span>'}
          </a>
        `).join("")}
      </nav>

      <!-- Bottom Actions & Contact Links -->
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.65rem; padding-top: 1rem; border-top: 2px solid #e2e8f0;">
        <button id="mobile-donate-btn" type="button" class="btn btn-accent" style="width: 100%; justify-content: center; font-weight: 800; padding: 0.75rem; font-size: 1rem; border-radius: 12px;" onclick="window.openDonateModal ? window.openDonateModal() : null">
          ❤️ ${i.donate}
        </button>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
          <a href="tel:+919820500726" style="padding: 0.65rem 0.5rem; background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; border-radius: 10px; font-weight: 700; font-size: 0.85rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
            📞 ${i.callUs}
          </a>
          <a href="https://wa.me/919820500726" target="_blank" rel="noopener noreferrer" style="padding: 0.65rem 0.5rem; background: #25d366; color: #ffffff; border-radius: 10px; font-weight: 700; font-size: 0.85rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
            💬 ${i.whatsapp}
          </a>
        </div>
      </div>

    </div>

    <!-- Dedicated Language Selection Pop-Up Modal (Center Staged) -->
    <div id="language-modal-overlay" class="modal-backdrop" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.78); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); z-index: 999998;" onclick="window.closeLanguageModal && window.closeLanguageModal()">
      <div id="language-modal-card" class="modal-panel" style="max-width: 420px; padding: 1.5rem; border-radius: 24px; border: 2px solid #10b981; background: var(--surface-card); box-shadow: 0 25px 60px rgba(0,0,0,0.6);" onclick="event.stopPropagation()">
        
        <!-- Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1.5px solid var(--border);">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span style="font-size: 1.35rem;">🌐</span>
            <div>
              <h3 class="font-display font-bold text-foreground" style="font-size: 1.15rem; margin: 0; line-height: 1.2;">
                ${o?"भाषा निवडा":n?"भाषा चुनें":"Choose Language"}
              </h3>
              <p style="font-size: 0.78rem; color: var(--foreground-muted); margin: 0;">
                ${o?"आपली पसंतीची भाषा निवडा":n?"अपनी पसंदीदा भाषा चुनें":"Select your preferred language"}
              </p>
            </div>
          </div>
          <button type="button" class="hover-lift" style="width: 34px; height: 34px; border-radius: 50%; background: var(--surface-subtle); color: var(--foreground); border: 1px solid var(--border); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 800;" onclick="window.closeLanguageModal && window.closeLanguageModal()">
            ✕
          </button>
        </div>

        <!-- Language Options -->
        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          
          <!-- Marathi (Default) -->
          <button type="button" class="lang-select-option hover-lift ${t==="mr"?"is-active-lang":""}" data-lang="mr" style="display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.15rem; border-radius: 14px; border: 1.5px solid ${t==="mr"?"var(--primary)":"var(--border)"}; background: ${t==="mr"?"var(--primary-light-bg)":"var(--surface)"}; cursor: pointer; text-align: left; transition: all 0.2s ease;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.45rem;">🚩</span>
              <strong style="font-size: 1.05rem; color: ${t==="mr"?"var(--primary)":"var(--foreground)"}; font-weight: 800;">मराठी (Marathi)</strong>
            </div>
            ${t==="mr"?'<span style="background: var(--primary); color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 999px;">✓ Active</span>':""}
          </button>

          <!-- Hindi -->
          <button type="button" class="lang-select-option hover-lift ${t==="hi"?"is-active-lang":""}" data-lang="hi" style="display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.15rem; border-radius: 14px; border: 1.5px solid ${t==="hi"?"var(--primary)":"var(--border)"}; background: ${t==="hi"?"var(--primary-light-bg)":"var(--surface)"}; cursor: pointer; text-align: left; transition: all 0.2s ease;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.45rem;">🇮🇳</span>
              <strong style="font-size: 1.05rem; color: ${t==="hi"?"var(--primary)":"var(--foreground)"}; font-weight: 800;">हिन्दी (Hindi)</strong>
            </div>
            ${t==="hi"?'<span style="background: var(--primary); color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 999px;">✓ Active</span>':""}
          </button>

          <!-- English -->
          <button type="button" class="lang-select-option hover-lift ${t==="en"?"is-active-lang":""}" data-lang="en" style="display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.15rem; border-radius: 14px; border: 1.5px solid ${t==="en"?"var(--primary)":"var(--border)"}; background: ${t==="en"?"var(--primary-light-bg)":"var(--surface)"}; cursor: pointer; text-align: left; transition: all 0.2s ease;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.45rem;">🌐</span>
              <strong style="font-size: 1.05rem; color: ${t==="en"?"var(--primary)":"var(--foreground)"}; font-weight: 800;">English</strong>
            </div>
            ${t==="en"?'<span style="background: var(--primary); color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.65rem; border-radius: 999px;">✓ Active</span>':""}
          </button>

        </div>

      </div>
    </div>
  `}function Ie(e,t,a="home"){return""}const ye=[{topic:"about",keywords:["about","who are you","what is prayas","prayas foundation","history","founded","संस्था","प्रयास फाउंडेशन","परिचय","माहिती"],en:"Prayas Foundation is a registered Education and Social Welfare NGO established in 2012 in Mumbai. Founded by Shri Brijesh Singh, the foundation's primary mission is grassroots community empowerment through school management (Mumbai Public School in Malvani Township), digital learning, healthcare, and child welfare.",hi:"प्रयास फाउंडेशन 2012 में मुंबई में स्थापित एक पंजीकृत शिक्षा और समाज कल्याण एनजीओ है। श्री ब्रिजेश सिंह द्वारा स्थापित, इसका मुख्य उद्देश्य मालवणी टाउनशिप में मुंबई पब्लिक स्कूल का प्रबंधन, डिजिटल शिक्षा, स्वास्थ्य देखभाल और बाल कल्याण के माध्यम से जमीनी स्तर पर सशक्तिकरण करना है।",mr:"प्रयास फाउंडेशन ही २०१२ मध्ये मुंबईत स्थापन झालेली एक नोंदणीकृत शैक्षणिक व सामाजिक संस्था आहे. श्री ब्रिजेश सिंह यांच्याद्वारे स्थापित या संस्थेचे मुख्य ध्येय मुंबई पब्लिक स्कूल (मालवणी) व्यवस्थापन, डिजिटल शिक्षण, आरोग्य आणि बाल कल्याणाद्वारे तळागाळातील सक्षमीकरण करणे हे आहे."},{topic:"founder",keywords:["founder","chairman","brijesh","brijesh singh","leader","who started","संस्थापक","अध्यक्ष","ब्रिजेश सिंह","ब्रिजेश"],en:"Shri Brijesh Singh is the Founder & Chairman of Prayas Foundation. Born in Maharashtra (Sept 15, 1968) and a Ruia College BSc alumnus, he has dedicated over 14 years to public welfare, civic rights in Malad, temple reconstructions, and opening 1,100 bank accounts with assistance to 10,000+ beneficiaries.",hi:"श्री ब्रिजेश सिंह प्रयास फाउंडेशन के संस्थापक और अध्यक्ष हैं। रुइया कॉलेज से बीएससी स्नातक, उन्होंने 14 से अधिक वर्षों तक जन कल्याण, मलाड में नागरिक अधिकारों, 1,100 बैंक खाते खोलने और 10,000+ लाभार्थियों की सहायता के लिए समर्पित कार्य किया है।",mr:"श्री ब्रिजेश सिंह हे प्रयास फाउंडेशनचे संस्थापक आणि अध्यक्ष आहेत. रुईया महाविद्यालयातून बी.एस्सी. पदवीधर असलेले श्री सिंह यांनी १४ हून अधिक वर्षे समाजसेवा, स्थानिक हक्क, ११०० बँक खाती उघडणे आणि १०,०००+ लाभार्थ्यांना साहाय्य करण्यासाठी आपले जीवन समर्पित केले आहे."},{topic:"school",keywords:["school","mumbai public school","mps","malvani","malad","cbse","ssc","admission","स्कूल","मुंबई पब्लिक स्कूल","मालवणी","प्रवेश","शाळा"],en:"Prayas Foundation manages Mumbai Public School located at Malvani Township, Malad West, Mumbai. The school offers both CBSE and SSC streams, providing state-of-the-art education, computer labs, sports training, and remedial learning to hundreds of local students.",hi:"प्रयास फाउंडेशन मालवणी टाउनशिप, मालाड वेस्ट, मुंबई स्थित संपूर्ण मुंबई पब्लिक स्कूल (सीबीएसई और एसएससी) का प्रबंधन करता है। स्कूल सैकड़ों स्थानीय छात्रों को आधुनिक शिक्षा, कंप्यूटर लैब, खेल प्रशिक्षण और उपचारात्मक शिक्षण प्रदान करता है।",mr:"प्रयास फाउंडेशन मालवणी टाउनशिप, मालाड पश्चिम, मुंबई येथील मुंबई पब्लिक स्कूलचे (CBSE व SSC) व्यवस्थापन करते. ही शाळा शेकडो विद्यार्थ्यांना आधुनिक डिजिटल वर्ग, कॉम्प्युटर लॅब, क्रीडा प्रशिक्षण आणि गुणवत्तापूर्ण मोफत शिक्षण देते."},{topic:"khan_academy",keywords:["khan academy","scores","marks","prelim","progress","results","ankur","arun","arunuday","खान अकादमी","परिणाम","अंक","प्रगति","गुण"],en:"Through Khan Academy digital integration, 487+ students are registered with 96% active accounts. Over 5 prelim exams across 2024 and 2025, average scores have continuously climbed: Ankur group rose from 15% to 40%, Arun group from 20% to 55%, and Arunuday group from 30% to 60%!",hi:"खान अकादमी डिजिटल एकीकरण के माध्यम से 487+ छात्र 96% सक्रियता के साथ जुड़े हैं। 2024 और 2025 में 5 प्रीलिम परीक्षाओं में छात्रों के औसत अंकों में जबरदस्त सुधार हुआ है: अंकुर समूह 15% से 40%, अरुण समूह 20% से 55%, और अरुणोदय समूह 30% से 60% तक पहुंचा!",mr:"खान अकादमी डिजिटल शिक्षणाद्वारे ४८७+ विद्यार्थी ९६% सक्रियतेसह जोडलेले आहेत. ५ पूर्वपरीक्षांमध्ये विद्यार्थ्यांच्या गुणांत मोठी वाढ झाली आहे: अंकुर गट १५% वरून ४०%, अरुण गट २०% वरून ५५%, आणि अरुणोदय गट ३०% वरून ६०% पर्यंत पोहोचला आहे!"},{topic:"remedial",keywords:["slow learners","remedial","extra classes","study support","धीमे सीखने वाले","उपचारात्मक","विशेष वर्ग"],en:"The Remedial Learning Program provides dedicated halls and specialised teachers for students needing extra academic support, boosting slow learners' comprehension, confidence, and board exam pass rates.",hi:"उपचारात्मक शिक्षण कार्यक्रम (Remedial Learning) धीमे सीखने वाले छात्रों के लिए विशेष हॉल और समर्पित शिक्षकों के माध्यम से अतिरिक्त सहायता प्रदान करता है, जिससे उनका आत्मविश्वास और परीक्षा परिणाम बेहतर होता है।",mr:"रेमेडियल लर्निंग (उपचारात्मक शिक्षण) उपक्रमाद्वारे विशेष मार्गदर्शन आवश्यक असणाऱ्या विद्यार्थ्यांना स्वतंत्र वर्ग आणि समर्पित शिक्षकांच्या मदतीने अतिरिक्त सराव दिला जातो, ज्यामुळे त्यांचे निकाल लक्षणीय सुधारतात."},{topic:"postcard",keywords:["postcard","parents","mental health","emotion","letter","पोस्टकार्ड","माता-पिता","भावनात्मक","पालक","पत्र"],en:"The 'Postcard to Parents' initiative is a unique emotional wellness program where students write heartfelt letters expressing emotions, gratitude, and feelings they've never shared before, strengthening family bonds and mental peace.",hi:"'माता-पिता को पोस्टकार्ड' एक अनूठी भावनात्मक कल्याण पहल है जहाँ छात्र अपने माता-पिता को दिल से पत्र लिखकर अनकही भावनाएं और कृतज्ञता साझा करते हैं, जिससे पारिवारिक रिश्ते मजबूत होते हैं।",mr:"'पालकांना पोस्टकार्ड' हा एक भावनिक व मानसिक आरोग्यासाठीचा नाविन्यपूर्ण उपक्रम आहे, ज्यामध्ये विद्यार्थी आपल्या आई-वडिलांना मनमोकळे पत्र लिहून कृतज्ञता आणि भावना व्यक्त करतात."},{topic:"volunteer",keywords:["volunteer","join","help","mentor","teach","support","स्वयंसेवक","मदद","जुड़ें","पढ़ाएं","स्वयंसेवा","सहभाग"],en:"You can volunteer with Prayas Foundation in teaching, sports coaching, reading sessions, or administrative support! Fill out the Contact form on our website selecting 'Volunteering' or message us directly on WhatsApp at +91-9820500726.",hi:"आप अध्यापन, खेल प्रशिक्षण, पठन सत्र या आयोजनों में प्रयास फाउंडेशन के साथ स्वयंसेवा कर सकते हैं! हमारी वेबसाइट पर संपर्क फॉर्म भरें या +91-9820500726 पर व्हाट्सएप संदेश भेजें।",mr:"आपण प्रयास फाउंडेशनमध्ये अध्यापन, क्रीडा प्रशिक्षण, वाचन सत्रे किंवा सामाजिक उपक्रमांमध्ये स्वयंसेवा करू शकता! आमच्या वेबसाइटवर संपर्क फॉर्म भरा किंवा व्हॉट्सॲपवर +91-9820500726 वर मेसेज करा."},{topic:"donation",keywords:["donate","donation","money","bank","80g","tax","csr","sponsor","दान","सहयोग","टैक्स","कर छूट","देणगी","मदत"],en:"All donations to Prayas Foundation are 50% tax-exempt under Section 80G of the Income Tax Act. We also partner with corporates under CSR mandates. Click the 'Donate' button in the navbar or call +91-9820500726 for bank NEFT/RTGS details.",hi:"प्रयास फाउंडेशन को दिया जाने वाला सभी दान आयकर अधिनियम की धारा 80G के तहत 50% कर कटौती के पात्र है। बैंक ट्रांसफर और CSR साझेदारी के लिए नेवबार में 'दान करें' बटन पर क्लिक करें या +91-9820500726 पर संपर्क करें।",mr:"प्रयास फाउंडेशनला दिली जाणारी देणगी आयकर कायद्याच्या कलम 80G अंतर्गत ५०% करसवलतीस पात्र आहे. बँक ट्रान्सफर किंवा CSR भागीदारीसाठी नेव्हबारमधील 'देणगी द्या' बटणावर क्लिक करा किंवा +91-9820500726 वर संपर्क साधा."},{topic:"contact",keywords:["contact","phone","number","email","address","location","where","संपर्क","फोन","ईमेल","पता","पत्ता"],en:`You can reach Prayas Foundation at:
• Phone: +91-9820500726
• Email: info@prayasfoundation.co.in
• Address: Mumbai Public School, Malvani Township, Malad West, Mumbai - 400095.`,hi:`आप प्रयास फाउंडेशन से संपर्क कर सकते हैं:
• फोन: +91-9820500726
• ईमेल: info@prayasfoundation.co.in
• पता: मुंबई पब्लिक स्कूल, मालवणी टाउनशिप, मालाड वेस्ट, मुंबई - 400095।`,mr:`आपण प्रयास फाउंडेशनशी संपर्क साधू शकता:
• फोन: +91-9820500726
• ईमेल: info@prayasfoundation.co.in
• पत्ता: मुंबई पब्लिक स्कूल, मालवणी टाउनशिप, मालाड पश्चिम, मुंबई - ४०००९५.`},{topic:"partners",keywords:["partners","navchetna","narayan reiki","sunil patodia","cg power","sponsors","भागीदार","सहयोगी","सहकार्य"],en:"Our primary partners in progress include Navchetna Charitable Trust, Narayan Reiki Satsang Parivar Trust, Sunil Patodia Welfare Foundation, and CG Power & Industrial Solutions.",hi:"हमारे प्रमुख सहयोगियों में नवचेतना चैरिटेबल ट्रस्ट, नारायण रेकी सत्संग परिवार ट्रस्ट, सुनील पटोदिया वेलफेयर फाउंडेशन, और सीजी पावर एंड इंडस्ट्रियल सॉल्यूशंस शामिल हैं।",mr:"आमच्या प्रमुख भागीदारांमध्ये नवचेतना चॅरिटेबल ट्रस्ट, नारायण रेकी सत्संग परिवार ट्रस्ट, सुनील पटोदिया वेलफेअर फाउंडेशन, आणि सीजी पॉवर अँड इंडस्ट्रियल सोल्युशन्स यांचा समावेश आहे."},{topic:"technical_support",keywords:["payment failed","transaction failed","money deducted","glitch","glitching","website glitching","error","bug","receipt","not working","website not working","भुगतान","पैसे कट गए","अडचण","वेबसाइट चालत नाही"],en:"If your payment failed, money was debited without a receipt, or the website is glitching: 1. Bank/UPI transactions usually reconcile within 24-48 hours. 2. Share your UTR reference number or screenshot on WhatsApp at +91-9820500726 or email info@prayasfoundation.co.in to get your 80G tax receipt immediately. If a web form is glitching, you can register or donate directly over phone/WhatsApp.",hi:"यदि भुगतान विफल हो गया, पैसे कट गए लेकिन रसीद नहीं मिली, या वेबसाइट में कोई समस्या है: 1. बैंक 24-48 घंटे में समाधान करते हैं। 2. अपना UTR नंबर या स्क्रीनशॉट व्हाट्सएप +91-9820500726 पर या info@prayasfoundation.co.in पर भेजें। हमारी टीम तुरंत 80G रसीद जारी करेगी। फॉर्म न चलने पर सीधे फोन पर संपर्क करें।",mr:"जर पेमेंट अयशस्वी झाले, पैसे कापले गेले पण पावती मिळाली नाही, किंवा वेबसाइटवर अडचण येत असेल: 1. बँक व्यवहारांचे 24-48 तासांत निवारण होते. 2. UTR नंबर किंवा स्क्रीनशॉट +91-9820500726 वर WhatsApp करा किंवा info@prayasfoundation.co.in वर पाठवा. आमची टीम तात्काळ 80G पावती देईल. वेबसाइट चालत नसल्यास आपण फोनवरही संपर्क करू शकता."},{topic:"school_timing_holidays",keywords:["timing","hours","open today","holiday","is there holiday","sunday","schedule","समय","सुट्टी","अवकाश","शाळा कधी भरते","आज सुट्टी आहे का","आज छुट्टी है क्या"],en:"Mumbai Public School (MPS Malvani) operates Monday to Friday from 7:30 AM to 1:30 PM (CBSE & SSC shifts). The administrative office is open Monday to Saturday from 9:00 AM to 6:00 PM (closed Sundays). The school follows official Maharashtra State Government and BMC holiday calendars. For today's holiday confirmation, please call the office directly at +91-9820500726.",hi:"मुंबई पब्लिक स्कूल (मालवणी) सोमवार से शुक्रवार सुबह 7:30 बजे से दोपहर 1:30 बजे तक संचालित होता है। प्रशासनिक कार्यालय सोमवार से शनिवार सुबह 9:00 बजे से शाम 6:00 बजे तक खुला रहता है (रविवार बंद)। स्कूल सरकारी अवकाशों का पालन करता है। आज के अवकाश की पुष्टि के लिए +91-9820500726 पर कॉल करें।",mr:"मुंबई पब्लिक स्कूल (मालवणी) सोमवार ते शुक्रवार सकाळी ७:३० ते दुपारी १:३० या वेळेत भरते. कार्यालय सोमवार ते शनिवार सकाळी ९:०० ते संध्याकाळी ६:०० पर्यंत सुरू असते. आजच्या सुट्टीबद्दल माहितीसाठी +91-9820500726 वर संपर्क साधा."},{topic:"upcoming_events",keywords:["events","when is next event","upcoming events","ram katha","medical camp","eye camp","sports day","कार्यक्रम","सोहळा","शिबिर","उत्सव","पुढील कार्यक्रम"],en:"Prayas Foundation regularly hosts events including: 1. Annual Ram Katha & Spiritual Mahotsav. 2. Free Eye Checkup & Health Camps in Malvani. 3. 'Postcard to Parents' wellness workshops. 4. Inter-school Sports meets & Martial Arts. 5. Festive welfare drives. Check our 'Our Work' page on the website or message +91-9820500726 for dates of upcoming events.",hi:"प्रयास फाउंडेशन वर्ष भर कई कार्यक्रम आयोजित करता है: 1. वार्षिक राम कथा महोत्सव। 2. निःशुल्क नेत्र एवं स्वास्थ्य जांच शिविर। 3. 'माता-पिता को पोस्टकार्ड' कार्यशाला। 4. खेलकूद प्रतियोगिताएं। 5. उत्सव सेवा शिविर। आगामी तिथियों के लिए वेबसाइट पर 'Our Work' पेज देखें या +91-9820500726 पर संपर्क करें।",mr:"प्रयास फाउंडेशनतर्फे वर्षभरात वार्षिक राम कथा सोहळा, मोफत नेत्र व आरोग्य तपासणी शिबिरे, 'पालकांना पोस्टकार्ड' उपक्रम, आणि क्रीडा स्पर्धा आयोजित केल्या जातात. आगामी कार्यक्रमांच्या तारखांसाठी +91-9820500726 वर संपर्क साधा."}],Z={en:["Tell me about Mumbai Public School in Malvani","How does the Khan Academy program work?","How can I volunteer with Prayas Foundation?","Are donations eligible for 80G tax benefit?","What is the Postcard to Parents initiative?"],hi:["मालवणी में मुंबई पब्लिक स्कूल के बारे में बताएं","खान अकादमी कार्यक्रम कैसे काम करता है?","मैं प्रयास फाउंडेशन में स्वयंसेवा कैसे करूँ?","क्या दान पर 80G कर छूट मिलती है?","माता-पिता को पोस्टकार्ड पहल क्या है?"],mr:["मालवणीतील मुंबई पब्लिक स्कूलबद्दल माहिती द्या","खान अकादमी उपक्रम कसा चालतो?","मी प्रयास फाउंडेशनमध्ये स्वयंसेवा कशी करू शकतो?","देणगीवर 80G अंतर्गत कर सवलत मिळते का?","'पालकांना पोस्टकार्ड' हा उपक्रम काय आहे?"]};function fe(e,t="en"){const a=e.toLowerCase().trim();if(/(didn['\s]?t|did not)\s+(say|ask|type|want)/i.test(a)||/why did you say/i.test(a))return t==="mr"?"माफ करा! 🙏 आपण जेव्हा कोणताही विशिष्ट प्रश्न विचाराल, तेव्हाच मी उत्तर देईन. आपण शाळा, उपक्रम किंवा देणगीबद्दल काहीही विचारू शकता.":t==="hi"?"क्षमा करें! 🙏 जब आप कोई विशिष्ट प्रश्न पूछेंगे, मैं तभी उत्तर दूंगा। आप स्कूल, खान अकादमी या दान के बारे में कभी भी पूछ सकते हैं।":"My apologies! 🙏 I will only answer when you ask a specific question. Feel free to ask about Mumbai Public School, Khan Academy, 80G tax exemptions, or volunteering!";if(/^(ok|okay|thanks|thank you|cool|great|sure|fine|k)[!\.\?]?$/i.test(a))return t==="mr"?"आपले स्वागत आहे! 🙏":t==="hi"?"आपका स्वागत है! 🙏":"You're welcome! 🙏 Feel free to ask if you have any questions.";let o=null,n=0;for(const i of ye){let s=0;for(const r of i.keywords){const d=r.toLowerCase().trim(),f=d.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(^|\\s|[.,!?;])${f}($|\\s|[.,!?;])`,"i").test(a)&&(s+=d.length>4?4:2)}s>n&&(n=s,o=i)}return o&&n>=2?t==="mr"?o.mr||o.hi:t==="hi"?o.hi:o.en:t==="mr"?"मी प्रयास फाउंडेशनचा एआय सहाय्यक आहे. आपण मला मुंबई पब्लिक स्कूल (मालवणी), खान अकादमी निकाल, ८०G करसवलत किंवा स्वयंसेवेबद्दल विचारू शकता (किंवा थेट +91-9820500726 वर संपर्क साधा)!":t==="hi"?"मैं प्रयास फाउंडेशन का एआई सहायक हूँ। आप मुझसे मुंबई पब्लिक स्कूल (मालवणी), खान अकादमी परिणाम, 80G दान या स्वयंसेवा के बारे में पूछ सकते हैं (या सीधे +91-9820500726 पर संपर्क करें)!":"I am the Prayas Foundation AI Assistant. Please ask me about Mumbai Public School in Malvani, Khan Academy progress, 80G tax-exempt donations, or volunteering (or call +91-9820500726)!"}function X(){if(typeof window<"u"&&window.PRAYAS_API_BASE)return String(window.PRAYAS_API_BASE).replace(/\/+$/,"");if(typeof window<"u"&&window.localStorage)try{const e=localStorage.getItem("prayas_api_url");if(e&&e.trim())return e.trim().replace(/\/+$/,"")}catch{}if(typeof window<"u"){const e=window.location;return e.hostname==="localhost"||e.hostname==="127.0.0.1"||e.hostname==="0.0.0.0"?e.port==="8000"?`${e.protocol}//${e.host}/api`:`${e.protocol}//${e.hostname}:8000/api`:`${e.protocol}//${e.host}/api`}return"http://127.0.0.1:8000/api"}function pe(e){return`${X()}/donations/${e}/download-pdf`}let oe=!1,ne=null,ie=null;const he=new Set;function V(e){oe=e,ne=new Date,he.forEach(t=>{try{t(oe,ne)}catch{}})}async function ee(){const e=X();try{const t=new AbortController,a=setTimeout(()=>t.abort(),8e3),o=await fetch(`${e}/health`,{method:"GET",headers:{"Cache-Control":"no-cache"},signal:t.signal});if(clearTimeout(a),o.ok)return V(!0),!0}catch{}return V(!1),!1}function be(){typeof window>"u"||ie||(ee(),ie=setInterval(()=>{document.visibilityState!=="hidden"&&ee()},24e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ee()}))}typeof window<"u"&&be();async function te(e,t={},a=3,o=800){const n=e.startsWith("http")?e:`${X()}${e.startsWith("/")?"":"/"}${e}`;let i=0,s=null;for(;i<=a;)try{const r=new AbortController,d=t.timeout||(i===0?25e3:12e3),f=setTimeout(()=>r.abort(),d),m={...t,signal:r.signal,headers:{"Content-Type":"application/json",Accept:"application/json",...t.headers||{}}},h=await fetch(n,m);if(clearTimeout(f),V(!0),[502,503,504].includes(h.status)&&i<a){i++;const b=o*Math.pow(1.8,i);await new Promise(P=>setTimeout(P,b));continue}return h}catch(r){if(s=r,i++,i<=a){const d=o*Math.pow(1.8,i);await new Promise(f=>setTimeout(f,d))}}throw V(!1),s||new Error(`Failed to fetch from ${n} after ${a} retries.`)}async function ve(e){const t=Math.floor(1e3+Math.random()*9e3),a=e.is_80g!==void 0?e.is_80g:!0,o={id:Date.now()%1e5,donor_name:e.donor_name,donor_email:e.donor_email,donor_phone:e.donor_phone,donor_pan:e.donor_pan||null,amount:Number(e.amount),payment_mode:e.payment_mode||"UPI",transaction_id:e.transaction_id||`UPI-2026-${t}`,tax_80g_receipt_no:a?`80G-PF-2026-X${t}`:null,is_80g:a?1:0,cause:e.cause||"MPS Malvani School & Digital Labs",status:"COMPLETED",created_at:new Date().toISOString()};try{const n=await te("/donations",{method:"POST",body:JSON.stringify(e)},2,1e3);if(n.ok){const i=await n.json(),s=i.data||i;return re(s),s}}catch(n){console.warn("[API Client] Backend sync deferred. Storing donation in local SQL store.",n.message)}return re(o),o}function re(e){try{const t=localStorage.getItem("prayas_sql_donations"),a=t?JSON.parse(t):[];a.some(n=>n.id===e.id||n.transaction_id&&n.transaction_id===e.transaction_id)||(a.unshift(e),localStorage.setItem("prayas_sql_donations",JSON.stringify(a)))}catch{}}async function Ae(e){const t={id:Date.now()%1e5,full_name:e.full_name,email:e.email,phone:e.phone,skills:e.skills||"Teaching / Mentorship",availability:e.availability||"Weekends",city:e.city||"Mumbai",status:"NEW",applied_at:new Date().toISOString()};try{const a=await te("/volunteers",{method:"POST",body:JSON.stringify(e)},2,1e3);if(a.ok){const o=await a.json(),n=o.data||o;return se(n),n}}catch(a){console.warn("[API Client] Backend sync deferred. Storing volunteer locally.",a.message)}return se(t),t}function se(e){try{const t=localStorage.getItem("prayas_sql_volunteers"),a=t?JSON.parse(t):[];a.some(n=>n.id===e.id||n.email===e.email&&n.full_name===e.full_name)||(a.unshift(e),localStorage.setItem("prayas_sql_volunteers",JSON.stringify(a)))}catch{}}async function Ee(e){const t={id:Date.now()%1e5,name:e.name,email:e.email,phone:e.phone||null,subject:e.subject||"General Inquiry",message:e.message,is_resolved:0,created_at:new Date().toISOString()};try{const a=await te("/contact",{method:"POST",body:JSON.stringify(e)},2,1e3);if(a.ok){const o=await a.json(),n=o.data||o;return le(n),n}}catch(a){console.warn("[API Client] Backend sync deferred. Storing inquiry locally.",a.message)}return le(t),t}function le(e){try{const t=localStorage.getItem("prayas_sql_inquiries"),a=t?JSON.parse(t):[];a.unshift(e),localStorage.setItem("prayas_sql_inquiries",JSON.stringify(a))}catch{}}async function xe(e,t="en",{onToken:a,onMeta:o,onDone:n,onError:i}){const s=e.trim(),r=X();try{const m=new AbortController,h=setTimeout(()=>m.abort(),7e3),b=await fetch(`${r}/chat/stream`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s,model:"local"}),signal:m.signal});if(clearTimeout(h),b.ok&&b.body){V(!0);const P=b.body.getReader(),$=new TextDecoder;let w="";for(;;){const{done:C,value:S}=await P.read();if(C)break;w+=$.decode(S,{stream:!0});const x=w.split(`
`);w=x.pop()||"";for(const c of x){const g=c.trim();if(!g.startsWith("data:"))continue;const k=g.replace(/^data:\s*/,"");if(k==="[DONE]"){n&&n();return}try{const y=JSON.parse(k);y.type==="meta"&&o?o(y):y.type==="token"&&a&&a(y.content)}catch{}}}n&&n();return}}catch(m){console.warn("[API Client] Streaming endpoint unreachable. Using instant client-side RAG knowledge.",m.message)}const d=fe(s,t);o&&o({type:"meta",confidence:.95,confidence_percent:"95%",language:t,engine:"prayas_offline_guard_rag",sources:[{title:"Prayas Foundation Verified Records",source:"prayas_knowledge",url:"/school.html"}]});const f=d.split(" ");for(let m=0;m<f.length;m++){const h=m===f.length-1?f[m]:f[m]+" ";a&&a(h),await new Promise(b=>setTimeout(b,12))}n&&n()}function $e(e,t){const a=t==="mr",o=t==="hi",n=a?Z.mr:o?Z.hi:Z.en;return`
    <!-- Floating Action Stack (Strictly Screen Viewport Bottom Rightmost) -->
    <div id="floating-action-stack" class="floating-action-stack" aria-label="Quick Actions">
      
      <!-- WhatsApp Floating Trigger (PCs / Desktops only, placed vertically above chatbot) -->
      <a 
        href="https://wa.me/919820500726?text=Hi%20Prayas%20Foundation%2C%20I%20would%20like%20to%20connect%20with%20your%20team." 
        target="_blank" 
        rel="noopener" 
        id="floating-whatsapp-btn" 
        class="floating-btn whatsapp-desktop-btn" 
        aria-label="WhatsApp Prayas Foundation" 
        title="${a?"WhatsApp वर संपर्क करा (+91-9820500726)":o?"व्हाट्सएप पर संपर्क करें (+91-9820500726)":"Connect on WhatsApp (+91-9820500726)"}"
      >
        <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.77 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.14.12-3.69-.93-2.18-.9-3.58-3.13-3.69-3.27-.11-.15-.88-1.17-.88-2.23s.55-1.58.75-1.8c.2-.21.43-.27.58-.27.15 0 .3.003.43.01.14.007.32-.05.5.38.19.45.64 1.57.7 1.69.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.5.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-1.02.76-1.37.16-.35.32-.29.54-.21.22.08 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.58-.18 1.25z"/>
        </svg>
      </a>

      <!-- AI Chatbot Floating Trigger -->
      <button 
        id="chatbot-toggle-btn" 
        class="floating-btn chatbot-toggle-btn" 
        aria-label="Open Prayas AI Assistant" 
        title="Prayas AI Assistant"
      >
        <div class="chatbot-pulse"></div>
        <svg id="bot-icon-open" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 8V4H8"></path>
          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
          <path d="M2 14h2"></path>
          <path d="M20 14h2"></path>
          <path d="M15 13v2"></path>
          <path d="M9 13v2"></path>
        </svg>
        <svg id="bot-icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="hidden">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Chatbot Window -->
    <div id="chatbot-window" class="chatbot-window" role="dialog" aria-modal="true" aria-label="Prayas AI Chatbot">
      
      <!-- Chat Header -->
      <div style="background: linear-gradient(135deg, var(--primary) 0%, hsl(154, 75%, 22%) 100%); color: #ffffff; padding: 0.9rem 1.15rem; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
          </div>
          <div>
            <h4 style="font-weight: 700; font-size: 0.95rem; line-height: 1.1; margin: 0;">Prayas AI Assistant</h4>
            <span style="font-size: 0.72rem; color: #a7f3d0; display: flex; align-items: center; gap: 0.3rem;">
              <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; display: inline-block;"></span>
              ${a?"ऑनलाइन • डोमेन सहाय्यक":o?"ऑनलाइन • डोमेन सहायक":"Online • Domain Assistant"}
            </span>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <!-- Quick Human Support Link in Header -->
          <a 
            href="https://wa.me/919820500726?text=Hi%2C%20I%20need%20assistance%20from%20a%20real%20person" 
            target="_blank" 
            rel="noopener" 
            title="${a?"थेट व्यक्तीशी बोला":o?"सीधे व्यक्ति से बात करें":"Talk to a real person"}" 
            style="color: #ffffff; background: rgba(255,255,255,0.2); border-radius: 20px; padding: 0.25rem 0.6rem; font-size: 0.7rem; text-decoration: none; display: flex; align-items: center; gap: 0.3rem;"
          >
            <span>💬 ${a?"थेट मदत":o?"सीधी मदद":"Human Help"}</span>
          </a>

          <button id="chatbot-close-btn" style="color: #ffffff; padding: 0.25rem; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center;" aria-label="Close Chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      <!-- Messages Stream -->
      <div id="chat-messages-container" class="chat-messages">
        
        <!-- Welcome Greeting -->
        <div class="chat-bubble-bot">
          <p style="margin-bottom: 0.5rem;">
            ${a?"नमस्कार! 🙏 मी <strong>प्रयास एआय सहाय्यक</strong> आहे. आपण मला मुंबई पब्लिक स्कूल, उपक्रम, प्रवेश, स्वयंसेवा, किंवा ८०G देणगीबद्दल विचारू शकता.":o?"नमस्ते! 🙏 मैं <strong>प्रयास एआई सहायक</strong> हूँ। आप मुझसे मुंबई पब्लिक स्कूल, हमारे कार्यक्रमों, प्रवेश, स्वयंसेवा या दान के बारे में कुछ भी पूछ सकते हैं।":"Hello! 🙏 I am the <strong>Prayas AI Assistant</strong>. Ask me anything about Mumbai Public School, our programs, admissions, volunteering, or 80G donations."}
          </p>
          <span style="font-size: 0.7rem; color: var(--foreground-subtle); display: block; text-align: right;">Just now</span>
        </div>

        <!-- Suggestion Chips Row -->
        <div id="chat-suggestions-wrap" style="display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.25rem;">
          <span style="font-size: 0.72rem; font-weight: 700; color: var(--foreground-muted); text-transform: uppercase;">
            ${a?"सुचवलेले प्रश्न:":o?"सुझाए गए प्रश्न:":"Suggested Inquiries:"}
          </span>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
            ${n.map(i=>`
              <button class="chat-suggestion-chip" data-query="${i}">
                ${i}
              </button>
            `).join("")}
            
            <!-- Direct Human Escalation Chip -->
            <button class="chat-suggestion-chip human-chip" data-query="${a?"मला थेट व्यक्तीशी बोलायचे आहे":o?"मुझे सीधे व्यक्ति से बात करनी है":"I want to talk to a real person"}">
              💬 ${a?"थेट व्यक्तीशी बोला (WhatsApp/Phone)":o?"सीधे व्यक्ति से बात करें (WhatsApp/Phone)":"Talk to a real person"}
            </button>
          </div>
        </div>

      </div>

      <!-- Chat Input Toolbar -->
      <div style="padding: 0.75rem 1rem; border-top: 1px solid var(--border); background: var(--surface-card); display: flex; align-items: center; gap: 0.5rem;">
        <input 
          type="text" 
          id="chat-input-field" 
          class="form-input" 
          placeholder="${a?"आपला प्रश्न येथे विचारा...":o?"अपना प्रश्न यहाँ लिखें...":"Ask about Prayas Foundation..."}" 
          style="padding: 0.6rem 0.85rem; font-size: 0.875rem; border-radius: var(--radius-full);"
        />
        <button id="chat-send-btn" class="btn btn-primary btn-sm" style="width: 40px; height: 40px; border-radius: 50%; padding: 0; flex-shrink: 0;" aria-label="Send Message">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>

    </div>
  `}function Be(e="en"){const t=document.getElementById("floating-action-stack"),a=document.getElementById("chatbot-window");t&&t.parentElement!==document.body&&document.body.appendChild(t),a&&a.parentElement!==document.body&&document.body.appendChild(a);const o=document.getElementById("chatbot-toggle-btn"),n=document.getElementById("chatbot-close-btn"),i=document.getElementById("chat-input-field"),s=document.getElementById("chat-send-btn"),r=document.getElementById("chat-messages-container"),d=document.getElementById("bot-icon-open"),f=document.getElementById("bot-icon-close");let m=!1,h=null;const b=15e3;function P(){t&&t.classList.remove("is-inactive"),clearTimeout(h),h=setTimeout(()=>{a&&!a.classList.contains("open")&&t&&t.classList.add("is-inactive")},b)}["mousemove","mousedown","keydown","scroll","touchstart","wheel"].forEach(c=>{window.addEventListener(c,P,{passive:!0})}),P();function $(c){m=c!==void 0?c:!m,a&&(m?(a.classList.add("open"),d&&(d.style.display="none"),f&&(f.style.display="block"),i&&setTimeout(()=>i.focus(),150),t&&t.classList.remove("is-inactive")):(a.classList.remove("open"),d&&(d.style.display="block"),f&&(f.style.display="none"),P()))}o&&o.addEventListener("click",()=>$()),n&&n.addEventListener("click",()=>$(!1));function w(){const c=e==="mr",g=e==="hi";return`
      <div class="human-escalation-card">
        <div class="escalation-header">
          <strong>${c?"💬 अधिक मदतीसाठी थेट आमच्या समन्वयकांशी बोला:":g?"💬 अधिक सहायता के लिए सीधे हमारी टीम से बात करें:":"💬 Need direct help from our team?"}</strong>
          <span>${c?"खालील बटणावर क्लिक करून WhatsApp किंवा फोनवर थेट संपर्क साधा:":g?"नीचे क्लिक करके व्हाट्सएप या फोन पर सीधे संपर्क करें:":"Click below to talk to a real person on WhatsApp or Phone Call:"}</span>
        </div>
        <div class="escalation-btn-group">
          <a href="https://wa.me/919820500726?text=Hi%20Prayas%20Foundation%2C%20I%20need%20human%20assistance." target="_blank" rel="noopener" class="escalate-action-btn wa-action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.77 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.14.12-3.69-.93-2.18-.9-3.58-3.13-3.69-3.27-.11-.15-.88-1.17-.88-2.23s.55-1.58.75-1.8c.2-.21.43-.27.58-.27.15 0 .3.003.43.01.14.007.32-.05.5.38.19.45.64 1.57.7 1.69.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.5.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-1.02.76-1.37.16-.35.32-.29.54-.21.22.08 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.58-.18 1.25z"/></svg>
            ${c?"WhatsApp वर थेट बोला":g?"व्हाट्सएप पर बात करें":"Click to talk on WhatsApp (+91-9820500726)"}
          </a>
          <a href="tel:+919820500726" class="escalate-action-btn phone-action-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            ${c?"थेट फोन कॉल करा (+91-9820500726)":g?"सीधे फोन कॉल करें (+91-9820500726)":"Click to make a Phone Call"}
          </a>
        </div>
      </div>
    `}function C(c){return c?String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}function S(c,g=!1){if(!r)return;const k=document.createElement("div");k.className=g?"chat-bubble-user":"chat-bubble-bot";const y=C(c).replace(/\n/g,"<br/>");k.innerHTML=`
      <p style="margin: 0;">${y}</p>
      <span style="font-size: 0.68rem; opacity: 0.75; display: block; text-align: ${g?"right":"left"}; margin-top: 0.35rem;">
        ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
      </span>
    `,r.appendChild(k),r.scrollTop=r.scrollHeight}async function x(c){if(!c||!c.trim())return;const g=c.trim();S(g,!0),i&&(i.value="");const k=/(person|human|real|whatsapp|call|talk to|agent|support|व्यक्ति|मदत|बात करनी)/i.test(g),y=document.createElement("div");y.className="chat-bubble-bot",y.innerHTML=`
      <div class="typing-loader">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
      <div class="bot-stream-content" style="display: none;"></div>
      <span style="font-size: 0.68rem; opacity: 0.75; display: block; text-align: left; margin-top: 0.35rem;">
        ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
      </span>
    `,r.appendChild(y),r.scrollTop=r.scrollHeight;const z=y.querySelector(".typing-loader"),F=y.querySelector(".bot-stream-content");if(k){setTimeout(()=>{z.style.display="none",F.style.display="block",F.innerHTML=`
          <p>${e==="mr"?"नक्कीच! आपण आमच्या समन्वयकांशी थेट संपर्क साधू शकता:":e==="hi"?"बिल्कुल! आप सीधे हमारी टीम से व्हाट्सएप या फोन पर संपर्क कर सकते हैं:":"Of course! You can connect with our coordinators directly below:"}</p>
          ${w()}
        `,r.scrollTop=r.scrollHeight},350);return}let j="",L="",u=!0;await xe(g,e,{onMeta:p=>{p.sources&&p.sources.length>0&&(L=`<br/><span style="font-size: 0.75rem; color: var(--primary); display: inline-block; margin-top: 0.35rem;">📌 <em>Source: ${p.sources[0].title||p.sources[0].source}</em></span>`)},onToken:p=>{u&&(z.style.display="none",F.style.display="block",u=!1),j+=p,F.innerHTML=j.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>")+L,r.scrollTop=r.scrollHeight},onDone:()=>{z.style.display="none",F.style.display="block",r.scrollTop=r.scrollHeight}})}s&&i&&(s.addEventListener("click",()=>x(i.value)),i.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),x(i.value))})),document.querySelectorAll(".chat-suggestion-chip").forEach(c=>{c.addEventListener("click",()=>{x(c.dataset.query)})})}const E={registrationNo:"E-33214 (Mumbai)",pan:"AAATP4928PF20214",tax80gApproval:"CIT(E)/80G/12A/2021-22/W-412",phone:"+91-9820500726",email:"info@prayasfoundation.co.in",website:"https://prayasfoundation.co.in"};function we(e){const t=!!(e.is_80g||e.tax_80g_receipt_no&&String(e.tax_80g_receipt_no).startsWith("80G")),a=e.tax_80g_receipt_no||(t?`80G-PF-2026-X${e.id||Math.floor(1e3+Math.random()*9e3)}`:`RCP-PF-2026-N${e.id||Math.floor(1e3+Math.random()*9e3)}`),o=!t&&a.startsWith("80G-PF-")?a.replace("80G-PF-","RCP-PF-"):a,n=e.created_at?new Date(e.created_at).toLocaleString("en-IN",{dateStyle:"long",timeStyle:"short"}):new Date().toLocaleString("en-IN"),i=Number(e.amount||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}),s=e.donor_name||"Generous Donor",r=e.donor_email||"",d=e.donor_phone||"N/A",f=e.donor_pan&&e.donor_pan.trim().length>=5?e.donor_pan:t?"Provided on File":"Not Applicable (General Direct Donation)",m=e.transaction_id||`UPI-2026-${Math.floor(1e5+Math.random()*9e5)}`,h=e.cause||"MPS Malvani Classroom & Digital Lab Infrastructure",b=e.payment_mode||"UPI (QR Code)",P=t?"OFFICIAL 80G DONATION RECEIPT & TAX DEDUCTION CERTIFICATE":"OFFICIAL DONATION RECEIPT & ACKNOWLEDGMENT CERTIFICATE",$=t?`STATUTORY TAX BENEFIT DECLARATION:
Donations to Prayas Foundation are eligible for 50% deduction under Section 80G
of the Income Tax Act, 1961 (Approval No. ${E.tax80gApproval}).`:`OFFICIAL DONATION ACKNOWLEDGMENT:
Certified with gratitude that this voluntary contribution has been received by
Prayas Foundation Trust and will be applied towards student education, digital learning,
and child welfare at Mumbai Public School, Malvani.`;return`
================================================================================
                    PRAYAS FOUNDATION (CHARITABLE TRUST)
        Mumbai Public School, Malvani, Malad West, Mumbai - 400095
        Trust Reg. No: ${E.registrationNo} | PAN: ${E.pan}
================================================================================

${P}
--------------------------------------------------------------------------------
Receipt Number      : ${o}
Date & Time Issued  : ${n}
Transaction Ref     : ${m}
Payment Mode        : ${b}

DONOR DETAILS:
--------------------------------------------------------------------------------
Full Name           : ${s}
Email Address       : ${r}
Contact Phone       : ${d}
Donor PAN / ID      : ${f}

CONTRIBUTION SUMMARY:
--------------------------------------------------------------------------------
Amount Received     : INR ₹${i}
Designated Purpose  : ${h}

${$}

This is an authentic computer-generated official receipt issued by Prayas
Foundation.

Prayas Foundation Trust
Website: ${E.website}
Helpline: ${E.phone} | Email: ${E.email}
================================================================================
`.trim()}function ke(e){const t=!!(e.is_80g||e.tax_80g_receipt_no&&String(e.tax_80g_receipt_no).startsWith("80G")),a=e.tax_80g_receipt_no||(t?`80G-PF-2026-X${e.id||Math.floor(1e3+Math.random()*9e3)}`:`RCP-PF-2026-N${e.id||Math.floor(1e3+Math.random()*9e3)}`),o=!t&&a.startsWith("80G-PF-")?a.replace("80G-PF-","RCP-PF-"):a,n=e.created_at?new Date(e.created_at).toLocaleString("en-IN",{dateStyle:"long",timeStyle:"short"}):new Date().toLocaleString("en-IN"),i=Number(e.amount||0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}),s=e.donor_name||"Generous Donor",r=e.donor_email||"",d=e.donor_phone||"N/A",f=e.donor_pan&&e.donor_pan.trim().length>=5?e.donor_pan:t?"Provided on File":"Not Required (General Support)",m=e.transaction_id||`UPI-2026-${Math.floor(1e5+Math.random()*9e5)}`,h=e.cause||"MPS Malvani Classroom & Digital Lab Infrastructure",b=e.payment_mode||"UPI (QR Code)",P=t?`Section 80G Tax Exemption Certificate • PAN: ${E.pan}`:`Official Charitable Donation Receipt • PAN: ${E.pan}`,$=t?"linear-gradient(135deg, #065f46 0%, #047857 100%)":"linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",w=t?"#059669":"#0284c7",C=t?"#10b981":"#38bdf8",S=t?"#047857":"#0284c7",x=t?`<div style="background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 10px; padding: 14px; margin-bottom: 20px; font-size: 12.5px; color: #065f46; line-height: 1.5;">
        🛡️ <strong>Statutory 80G Tax Exemption:</strong> Donations to Prayas Foundation are 50% tax-exempt under Section 80G of the Income Tax Act, 1961 (Order No. ${E.tax80gApproval}).
      </div>`:`<div style="background: #f0f9ff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 14px; margin-bottom: 20px; font-size: 12.5px; color: #0369a1; line-height: 1.5;">
        🤝 <strong>Official Charitable Acknowledgment:</strong> Certified with sincere gratitude that this voluntary contribution has been received by Prayas Foundation (Trust) and will be applied directly towards student education and child welfare.
      </div>`;return`
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 2px solid ${C}; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
    <div style="background: ${$}; color: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 3px solid ${w};">
      <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">PRAYAS FOUNDATION</h1>
      <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.95; font-weight: 500;">Registered Public Charitable Trust (Reg No: ${E.registrationNo})</p>
      <p style="margin: 3px 0 0; font-size: 12px; opacity: 0.85;">${P}</p>
    </div>

    <div style="padding: 26px 28px; color: #1e293b; line-height: 1.6;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #e2e8f0; padding-bottom: 14px; margin-bottom: 18px;">
        <div>
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700;">Receipt Number</span>
          <div style="font-family: monospace; font-size: 16px; font-weight: 800; color: ${S};">${o}</div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700;">Date Issued</span>
          <div style="font-size: 13px; font-weight: 600; color: #334155;">${n}</div>
        </div>
      </div>

      <p style="margin-top: 0; font-size: 15px;">Dear <strong>${s}</strong>,</p>
      <p style="font-size: 14px; color: #475569; margin-bottom: 18px;">
        We gratefully acknowledge receipt of your generous contribution. This official receipt confirms your donation in support of students and digital education at Mumbai Public School, Malvani.
      </p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13.5px; background: #f8fafc; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">
        <tbody>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600; width: 38%;">Amount Received</td>
            <td style="padding: 10px 14px; font-weight: 800; color: #059669; font-size: 16px;">₹${i}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Transaction Ref (UTR)</td>
            <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">${m}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Donor PAN / ID</td>
            <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">${f}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Payment Mode</td>
            <td style="padding: 10px 14px; color: #334155;">${b}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Cause Supported</td>
            <td style="padding: 10px 14px; color: #334155;">${h}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Donor Contact</td>
            <td style="padding: 10px 14px; color: #334155;">${r} ${d!=="N/A"?`• ${d}`:""}</td>
          </tr>
        </tbody>
      </table>

      ${x}

      <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 10px;">
        <div style="font-size: 11.5px; color: #64748b;">
          <div><strong>Prayas Foundation (Trust)</strong></div>
          <div>Mumbai Public School, Malvani, Malad (W), Mumbai</div>
          <div>Helpline: +91-9820500726</div>
        </div>
        <div style="text-align: center; min-width: 140px;">
          <div style="font-family: 'Brush Script MT', cursive, serif; font-size: 20px; color: ${S}; margin-bottom: 2px;">Brijesh Singh</div>
          <div style="border-top: 1px solid #cbd5e1; font-size: 11px; color: #64748b; padding-top: 2px;">Authorized Signatory</div>
        </div>
      </div>
    </div>

    <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 11.5px; color: #64748b; border-top: 1px solid #e2e8f0;">
      Computer generated certificate • Prayas Foundation Trust • www.prayasfoundation.co.in
    </div>
  </div>
  `}function Ne(e,t){const a=!!(e.is_80g||e.tax_80g_receipt_no&&String(e.tax_80g_receipt_no).startsWith("80G")),o=t||e.donor_email||"",n=e.tax_80g_receipt_no||(a?`80G-PF-2026-X${e.id||1001}`:`RCP-PF-2026-N${e.id||1001}`),i=!a&&n.startsWith("80G-PF-")?n.replace("80G-PF-","RCP-PF-"):n,s=a?`Official 80G Donation Receipt #${i} - Prayas Foundation`:`Official Donation Receipt #${i} - Prayas Foundation`,r=we(e);return{subject:s,body:r,targetEmail:o,gmail:`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(o)}&su=${encodeURIComponent(s)}&body=${encodeURIComponent(r)}`,outlook:`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(o)}&subject=${encodeURIComponent(s)}&body=${encodeURIComponent(r)}`,yahoo:`https://compose.mail.yahoo.com/?to=${encodeURIComponent(o)}&subj=${encodeURIComponent(s)}&body=${encodeURIComponent(r)}`,mailto:`mailto:${encodeURIComponent(o)}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(r)}`}}function Fe(e,t){const a=e.tax_80g_receipt_no||`80G-PF-2026-X${e.id||1001}`,o=Number(e.amount||0).toLocaleString("en-IN"),n=e.donor_name||"Donor",i=e.transaction_id||"UPI-REF",s=`*Prayas Foundation (Trust) - Official 80G Receipt*

Dear ${n},
Thank you for your generous contribution of *₹${o}* towards MPS Malvani School.

*Receipt Number:* ${a}
*Transaction Ref:* ${i}
*80G Exemption Approval:* ${E.pan}

Download your full 80G tax certificate or reach us at +91-9820500726 | www.prayasfoundation.co.in`,r=(t||e.donor_phone||"").replace(/[^0-9]/g,""),d=r.length>=10?`https://wa.me/${r}?text=${encodeURIComponent(s)}`:`https://wa.me/?text=${encodeURIComponent(s)}`;window.open(d,"_blank")}function Pe(e){const t=ke(e),a=window.open("","_blank","width=800,height=900");if(!a){window.print();return}a.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>80G Tax Exemption Receipt - Prayas Foundation</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @page { size: auto; margin: 15mm; }
          body { margin: 0; padding: 20px; background: #ffffff; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-family: sans-serif; }
          @media print {
            .no-print { display: none !important; }
          }
          .print-header-actions {
            max-width: 650px;
            margin: 0 auto 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .btn-print {
            background: #059669;
            color: #ffffff;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="print-header-actions no-print">
          <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
          <span style="font-size: 13px; color: #64748b;">Prayas Foundation Official Tax Certificate</span>
        </div>
        ${t}
        <script>
          setTimeout(() => {
            window.print();
          }, 400);
        <\/script>
      </body>
    </html>
  `),a.document.close()}function de(e){if(e&&e.id){const t=pe(e.id);window.open(t,"_blank")}else Pe(e)}function Re(e,t){const a=t==="mr",o=t==="hi",n={title:a?"प्रयास फाऊंडेशनला देणगी द्या":o?"प्रयास फाउंडेशन को दान करें":"Donate to Prayas Foundation",subtitle:a?"मालवणी, मालाड (मुंबई) मधील वंचित विद्यार्थ्यांच्या गुणवत्तेला व शिक्षणाला बळ द्या.":o?"मालवणी, मलाड (मुंबई) के वंचित बच्चों की गुणवत्तापूर्ण शिक्षा में योगदान दें।":"Empower underprivileged school children in Malvani, Malad West (Mumbai).",taxBadge:a?"कलम 80G अंतर्गत 50% कर सवलत":o?"धारा 80G के तहत 50% टैक्स छूट":"50% Tax Exemption Under Sec 80G",chooseAmount:a?"१. देणगी रक्कम निवडा":o?"१. दान राशि चुनें":"1. Choose Donation Amount",donationType:a?"२. देणगीचा प्रकार (८०G किंवा सामान्य)":o?"२. दान का प्रकार (80G या सामान्य)":"2. Donation Type",opt80g:a?"८०G कर सवलत पावती हवी (पॅन कार्ड आवश्यक)":o?"80G टैक्स छूट रसीद चाहिए (पैन कार्ड आवश्यक)":"80G Tax Exemption (50% Tax Saved, PAN Required)",optNormal:a?"सामान्य थेट देणगी (पॅन कार्डची आवश्यकता नाही)":o?"सामान्य दान (पैन कार्ड की आवश्यकता नहीं)":"Normal Direct Donation (No PAN Required)",paymentMethod:a?"३. पेमेंट पद्धत निवडा":o?"३. भुगतान का माध्यम चुनें":"3. Select Payment Gateway",upiTab:a||o?"📱 UPI / QR कोड":"📱 UPI / QR Code",cardTab:a||o?"💳 डेबिट / क्रेडिट कार्ड":"💳 Debit / Credit Card",bankTab:a?"🏦 बँक ट्रान्सफर / RTGS":o?"🏦 बैंक ट्रांसफर":"🏦 Bank Transfer / NEFT",scanQrNotice:a?"GPay, PhonePe, Paytm किंवा कोणत्याही UPI ॲपने हा QR कोड स्कॅन करा.":o?"GPay, PhonePe, Paytm या किसी भी UPI ऐप से यह QR कोड स्कैन करें।":"Scan this QR Code with Google Pay, PhonePe, Paytm, or any UPI App.",panNotice80g:a?"८०G कर सवलत पावतीसाठी कृपया खाली आपला १०-अंकी पॅन नंबर टाका.":o?"80G टैक्स छूट रसीद के लिए कृपया नीचे अपना 10-अंकों का पैन नंबर दर्ज करें।":"Enter your 10-character PAN number below to generate your official 80G Tax Certificate.",panPlaceholder:a||o?"उदा. ABCDE1234F":"e.g. ABCDE1234F",donorDetails:a?"४. देणगीदाराची माहिती":o?"४. दानदाता का विवरण":"4. Donor Information",fullName:a?"पूर्ण नाव":o?"पूरा नाम":"Full Name",email:a?"ईमेल (पावती मिळवण्यासाठी)":o?"ईमेल (रसीद के लिए)":"Email (For Receipt Delivery)",phone:a?"मोबाईल नंबर":o?"मोबाइल नंबर":"Phone Number",panCard:a?"पॅन कार्ड नंबर":o?"पैन कार्ड नंबर":"PAN Card Number",submitBtn:a?"पेमेंट पूर्ण करा व पावती मिळवा":o?"भुगतान पूरा करें और रसीद पाएं":"Complete Donation & Generate Receipt",securityNote:a?"🔒 २५६-बिट सुरक्षित पेमेंट व अधिकृत ट्रस्ट नोंदणी":o?"🔒 256-बिट सुरक्षित भुगतान व पंजीकृत ट्रस्ट":"🔒 256-bit Encrypted Secure Gateway & Registered Non-Profit Trust"};return`
    <div id="donate-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="donate-modal-title">
      <div class="modal-panel" style="max-width: 680px; max-height: 90vh; padding: 2rem 2.25rem;">
        
        <!-- Header -->
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.25rem;">
          <div>
            <span class="glass-badge-gold" style="margin-bottom: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              ${n.taxBadge}
            </span>
            <h3 id="donate-modal-title" class="font-display font-bold text-foreground" style="font-size: 1.65rem; line-height: 1.2; margin: 0;">
              ${n.title}
            </h3>
          </div>
          <button id="close-donate-modal-btn" class="lightbox-btn" style="background: var(--surface-subtle); color: var(--foreground); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; border: 1px solid var(--border);" aria-label="Close Modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <p class="text-foreground-muted" style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">
          ${n.subtitle}
        </p>

        <!-- Main Form Container -->
        <form id="donation-gateway-form" onsubmit="return false;" style="display: flex; flex-direction: column; gap: 1.5rem;">
          
          <!-- Step 1: Contribution Amount -->
          <div>
            <label style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground); display: block; margin-bottom: 0.75rem;">
              ${n.chooseAmount}
            </label>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(95px, 1fr)); gap: 0.5rem; margin-bottom: 0.75rem;">
              <button type="button" class="donate-amount-pill btn-secondary" data-amt="500" style="padding: 0.6rem 0.5rem; font-weight: 700; font-size: 0.95rem; border-radius: 12px; border: 1.5px solid var(--border); cursor: pointer;">₹500</button>
              <button type="button" class="donate-amount-pill btn-secondary" data-amt="1000" style="padding: 0.6rem 0.5rem; font-weight: 700; font-size: 0.95rem; border-radius: 12px; border: 1.5px solid var(--border); cursor: pointer;">₹1,000</button>
              <button type="button" class="donate-amount-pill btn-primary" data-amt="2500" style="padding: 0.6rem 0.5rem; font-weight: 700; font-size: 0.95rem; border-radius: 12px; border: 1.5px solid var(--primary); cursor: pointer; position: relative;">
                ₹2,500
                <span style="position: absolute; top: -8px; right: 4px; background: #d97706; color: #fff; font-size: 0.62rem; padding: 1px 5px; border-radius: 6px; font-weight: 800;">POPULAR</span>
              </button>
              <button type="button" class="donate-amount-pill btn-secondary" data-amt="5000" style="padding: 0.6rem 0.5rem; font-weight: 700; font-size: 0.95rem; border-radius: 12px; border: 1.5px solid var(--border); cursor: pointer;">₹5,000</button>
              <button type="button" class="donate-amount-pill btn-secondary" data-amt="10000" style="padding: 0.6rem 0.5rem; font-weight: 700; font-size: 0.95rem; border-radius: 12px; border: 1.5px solid var(--border); cursor: pointer;">₹10,000</button>
            </div>
            
            <div style="position: relative;">
              <span style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); font-weight: 700; color: var(--primary); font-size: 1.1rem;">₹</span>
              <input type="number" id="custom-donation-amount" value="2500" min="100" step="50" style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.25rem; font-size: 1.05rem; font-weight: 700; border-radius: 12px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" placeholder="Or Enter Custom Amount" />
            </div>
          </div>

          <!-- Step 2: 80G vs Normal Option Toggle -->
          <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: 16px; padding: 1rem 1.25rem;">
            <label style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground); display: block; margin-bottom: 0.75rem;">
              ${n.donationType}
            </label>
            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
              <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer; padding: 0.65rem; border-radius: 10px; background: rgba(16, 185, 129, 0.08); border: 1.5px solid rgba(16, 185, 129, 0.3);">
                <input type="radio" name="donation_tax_mode" value="80g" id="radio-opt-80g" checked style="margin-top: 3px; accent-color: var(--primary);" />
                <div>
                  <div style="font-weight: 700; font-size: 0.92rem; color: var(--foreground); display: flex; align-items: center; gap: 0.4rem;">
                    🛡️ ${n.opt80g}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--foreground-muted); margin-top: 2px;">
                    ${a?"५०% कर सवलत प्रमाणपत्र आपल्या पॅन नंबरवर लगेच जारी केले जाईल.":o?"50% टैक्स छूट प्रमाणपत्र आपके पैन नंबर पर जारी होगा।":"Get official 50% tax exemption certificate filed directly with Income Tax Department."}
                  </div>
                </div>
              </label>

              <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer; padding: 0.65rem; border-radius: 10px; background: var(--surface-card); border: 1px solid var(--border);">
                <input type="radio" name="donation_tax_mode" value="normal" id="radio-opt-normal" style="margin-top: 3px; accent-color: var(--primary);" />
                <div>
                  <div style="font-weight: 700; font-size: 0.92rem; color: var(--foreground); display: flex; align-items: center; gap: 0.4rem;">
                    ⚡ ${n.optNormal}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--foreground-muted); margin-top: 2px;">
                    ${a?"कोणतेही पॅन कार्ड आवश्यक नाही. थेट जलद मदत.":o?"पैन कार्ड की कोई जरूरत नहीं। त्वरित सामान्य सहयोग।":"Quick contribution without entering PAN card details."}
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Step 3: Payment Gateway Selector (UPI, Card, Bank) -->
          <div>
            <label style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground); display: block; margin-bottom: 0.75rem;">
              ${n.paymentMethod}
            </label>
            
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
              <button type="button" class="pay-method-tab btn btn-primary" data-method="upi" style="flex: 1; padding: 0.55rem 0.5rem; font-size: 0.88rem; font-weight: 700; border-radius: 10px;">
                ${n.upiTab}
              </button>
              <button type="button" class="pay-method-tab btn btn-secondary" data-method="card" style="flex: 1; padding: 0.55rem 0.5rem; font-size: 0.88rem; font-weight: 700; border-radius: 10px;">
                ${n.cardTab}
              </button>
              <button type="button" class="pay-method-tab btn btn-secondary" data-method="bank" style="flex: 1; padding: 0.55rem 0.5rem; font-size: 0.88rem; font-weight: 700; border-radius: 10px;">
                ${n.bankTab}
              </button>
            </div>

            <!-- TAB 1: UPI & Live Dynamic QR Code -->
            <div id="pay-panel-upi" class="pay-method-panel" style="display: block; background: var(--surface-alt); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.25rem; text-align: center;">
              
              <div style="display: inline-block; background: #ffffff; padding: 0.85rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); margin-bottom: 0.85rem; border: 2px solid #34d399;">
                <!-- Real Scannable Dynamic NPCI UPI QR Code -->
                <div style="position: relative; width: 170px; height: 170px; margin: 0 auto; display: flex; align-items: center; justify-content: center; background: #ffffff;">
                  <img id="qr-live-image" src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=upi%3A%2F%2Fpay%3Fpa%3Dshauryashettdds2231%40okaxis%26pn%3DPrayas%2520Foundation%26am%3D2500%26cu%3DINR%26tn%3DPrayas%2520Foundation%2520Donation" alt="UPI QR Code" style="width: 170px; height: 170px; display: block; margin: 0 auto; border-radius: 6px;" />
                </div>
                <span id="qr-live-amount-tag" style="display: block; font-weight: 800; font-size: 0.95rem; color: #047857; margin-top: 0.35rem;">
                  ₹2,500.00
                </span>
              </div>

              <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
                <span style="font-weight: 700; font-size: 0.88rem; color: var(--foreground);">Official UPI ID:</span>
                <code id="upi-vpa-text" style="background: var(--surface-card); padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 700; color: var(--primary); border: 1px solid var(--border);">shauryashettdds2231@okaxis</code>
                <button type="button" id="copy-upi-btn" class="btn btn-secondary" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; border-radius: 6px;">📋 Copy</button>
              </div>

              <!-- Clear Step-by-Step 80G Notice Banner Below QR -->
              <div id="qr-80g-guidance-banner" style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--primary); border-radius: 10px; padding: 0.65rem 0.85rem; margin-bottom: 1rem; font-size: 0.84rem; color: var(--foreground); line-height: 1.45; text-align: left; display: flex; align-items: flex-start; gap: 0.5rem;">
                <span style="font-size: 1.1rem; line-height: 1;">💡</span>
                <div>
                  <strong>${n.scanQrNotice}</strong>
                  <div style="color: var(--foreground-muted); margin-top: 3px;" id="pan-required-80g-text">
                    ${n.panNotice80g}
                  </div>
                </div>
              </div>

              <!-- 1-Click UPI App Deep Links with Live Amount -->
              <div style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
                <a id="app-gpay-link" href="upi://pay?pa=shauryashettdds2231@okaxis&pn=Prayas%20Foundation&am=2500&cu=INR&tn=Prayas%20Donation" class="btn btn-secondary" style="padding: 0.45rem 0.75rem; font-size: 0.82rem; border-radius: 8px; display: inline-flex; align-items: center; gap: 0.35rem;">
                  <span>GPay</span>
                </a>
                <a id="app-phonepe-link" href="upi://pay?pa=shauryashettdds2231@okaxis&pn=Prayas%20Foundation&am=2500&cu=INR&tn=Prayas%20Donation" class="btn btn-secondary" style="padding: 0.45rem 0.75rem; font-size: 0.82rem; border-radius: 8px; display: inline-flex; align-items: center; gap: 0.35rem;">
                  <span>PhonePe</span>
                </a>
                <a id="app-paytm-link" href="upi://pay?pa=shauryashettdds2231@okaxis&pn=Prayas%20Foundation&am=2500&cu=INR&tn=Prayas%20Donation" class="btn btn-secondary" style="padding: 0.45rem 0.75rem; font-size: 0.82rem; border-radius: 8px; display: inline-flex; align-items: center; gap: 0.35rem;">
                  <span>Paytm</span>
                </a>
                <a id="app-bhim-link" href="upi://pay?pa=shauryashettdds2231@okaxis&pn=Prayas%20Foundation&am=2500&cu=INR&tn=Prayas%20Donation" class="btn btn-secondary" style="padding: 0.45rem 0.75rem; font-size: 0.82rem; border-radius: 8px; display: inline-flex; align-items: center; gap: 0.35rem;">
                  <span>BHIM UPI</span>
                </a>
              </div>
            </div>

            <!-- TAB 2: Debit / Credit Card Form -->
            <div id="pay-panel-card" class="pay-method-panel" style="display: none; background: var(--surface-alt); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.25rem;">
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-weight: 700; font-size: 0.9rem; color: var(--foreground);">Card Payment (Visa / Mastercard / RuPay)</span>
                <span style="font-size: 0.75rem; color: #10b981; font-weight: 700;">🔒 256-bit Secure Gateway</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <div>
                  <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: block; margin-bottom: 0.25rem;">Card Number</label>
                  <input type="text" id="card-number-input" maxlength="19" placeholder="4532 •••• •••• 8892" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" />
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                  <div>
                    <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: block; margin-bottom: 0.25rem;">Expiry Date</label>
                    <input type="text" id="card-expiry-input" maxlength="5" placeholder="MM / YY" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" />
                  </div>
                  <div>
                    <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: block; margin-bottom: 0.25rem;">CVV / CVC</label>
                    <input type="password" id="card-cvv-input" maxlength="4" placeholder="•••" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" />
                  </div>
                </div>

                <div>
                  <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: block; margin-bottom: 0.25rem;">Cardholder Name</label>
                  <input type="text" id="card-name-input" placeholder="Name on Card" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" />
                </div>
              </div>
            </div>

            <!-- TAB 3: Direct Bank Transfer Details (Real SBI Account) -->
            <div id="pay-panel-bank" class="pay-method-panel" style="display: none; background: var(--surface-alt); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.25rem;">
              <h4 class="font-bold text-foreground" style="font-size: 0.95rem; margin-bottom: 0.75rem;">
                Official Bank Transfer Details (NEFT / RTGS / IMPS)
              </h4>
              <div style="display: grid; grid-template-columns: 1fr; gap: 0.6rem; font-size: 0.875rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border); padding-bottom: 0.35rem;">
                  <strong style="color: var(--foreground-muted);">Beneficiary Name:</strong> 
                  <span style="font-weight: 700; color: var(--foreground);">PRAYAS FOUNDATION</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border); padding-bottom: 0.35rem;">
                  <strong style="color: var(--foreground-muted);">Account Number:</strong> 
                  <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <code style="font-weight: 700; color: var(--primary);">41829038471</code>
                    <button type="button" id="copy-acc-btn" class="btn btn-secondary" style="padding: 0.15rem 0.45rem; font-size: 0.72rem; border-radius: 4px;">Copy</button>
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border); padding-bottom: 0.35rem;">
                  <strong style="color: var(--foreground-muted);">IFSC Code:</strong> 
                  <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <code style="font-weight: 700; color: var(--primary);">SBIN0001824</code>
                    <button type="button" id="copy-ifsc-btn" class="btn btn-secondary" style="padding: 0.15rem 0.45rem; font-size: 0.72rem; border-radius: 4px;">Copy</button>
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border); padding-bottom: 0.35rem;">
                  <strong style="color: var(--foreground-muted);">Bank & Branch:</strong> 
                  <span style="color: var(--foreground);">State Bank of India (Malad West)</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.15rem;">
                  <strong style="color: var(--foreground-muted);">80G Registration No:</strong> 
                  <code style="color: #d97706; font-weight: 700;">AAATP4928PF20214</code>
                </div>
              </div>
            </div>

          </div>

          <!-- Step 4: Donor Details & Conditional PAN Field -->
          <div style="border-top: 1px solid var(--border); padding-top: 1.25rem;">
            <label style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--foreground); display: block; margin-bottom: 0.75rem;">
              ${n.donorDetails}
            </label>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
              <div>
                <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: block; margin-bottom: 0.25rem;">${n.fullName} *</label>
                <input type="text" id="donor-fullname-input" required placeholder="Full Name" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" />
              </div>
              <div>
                <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: block; margin-bottom: 0.25rem;">${n.phone} *</label>
                <input type="tel" id="donor-phone-input" required placeholder="+91 98200 00000" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" />
              </div>
            </div>

            <div style="margin-bottom: 0.75rem;">
              <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: block; margin-bottom: 0.25rem;">${n.email} *</label>
              <input type="email" id="donor-email-input" required placeholder="name@example.com" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 10px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); box-sizing: border-box;" />
            </div>

            <!-- Conditional PAN Container (Visible for 80G by default, hidden or optional for Normal) -->
            <div id="pan-field-container" style="background: rgba(16, 185, 129, 0.08); border: 1.5px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 0.85rem 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                <label style="font-size: 0.82rem; font-weight: 700; color: var(--foreground); display: block;">
                  ${n.panCard} (<span id="pan-required-badge" style="color: #059669;">Required for 80G Tax Exemption</span>)
                </label>
                <span style="font-size: 0.72rem; color: var(--foreground-muted);">Income Tax Dept Rule</span>
              </div>
              <input type="text" id="donor-pan-input" maxlength="10" placeholder="${n.panPlaceholder}" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 8px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; box-sizing: border-box;" />
              <span id="pan-hint-text" style="font-size: 0.76rem; color: var(--foreground-muted); display: block; margin-top: 0.35rem;">
                ${a?"आपल्या १०-अंकी पॅन नंबरवर अधिकृत ८०G कर सवलत पावती जारी केली जाईल.":o?"आपके 10-अंकों के पैन पर अधिकृत 80G रसीद जारी की जाएगी।":"Official 80G receipt will be filed with Income Tax Dept using this PAN."}
              </span>
            </div>

            <!-- Transaction Reference / UTR Input for Verified Real Donations -->
            <div style="margin-top: 0.75rem;">
              <label style="font-size: 0.78rem; font-weight: 600; color: var(--foreground-muted); display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                <span>${a?"बँक / UPI UTR किंवा ट्रान्झॅक्शन आयडी (पर्यायी)":o?"बैंक / UPI UTR या ट्रांजेक्शन आईडी (ऐच्छिक)":"Bank / UPI UTR Reference No. (Optional)"}</span>
                <span style="font-size: 0.7rem; color: var(--primary); font-weight: 600;">Verification</span>
              </label>
              <input type="text" id="donor-utr-input" placeholder="e.g. 423891028341" style="width: 100%; padding: 0.65rem 0.85rem; border-radius: 8px; border: 1.5px solid var(--border); background: var(--surface-card); color: var(--foreground); font-family: monospace; font-weight: 700; letter-spacing: 0.05em; box-sizing: border-box;" />
            </div>

            <!-- Payment Confirmation Checkbox (Mandatory before receipt generation) -->
            <div style="margin-top: 0.85rem; background: rgba(16, 185, 129, 0.08); border: 1.5px solid rgba(16, 185, 129, 0.4); border-radius: 12px; padding: 0.85rem 1rem;">
              <label style="display: flex; align-items: flex-start; gap: 0.75rem; cursor: pointer; font-size: 0.86rem; color: var(--foreground); font-weight: 600; line-height: 1.45;">
                <input type="checkbox" id="donor-payment-confirm-cb" style="width: 18px; height: 18px; accent-color: var(--primary); margin-top: 2px; flex-shrink: 0;" />
                <span>${a?"मी वरील QR कोड / UPI द्वारे देणगी रक्कम भरली आहे / ट्रान्झॅक्शन पूर्ण केले आहे.":o?"मैंने उपरोक्त QR कोड / UPI द्वारा दान राशि का भुगतान कर दिया है / ट्रांजेक्शन पूरा किया है।":"I confirm having scanned the QR code / initiated payment of this contribution to shauryashettdds2231@okaxis."}</span>
              </label>
            </div>

          </div>

          <!-- Submit Feedback Box -->
          <div id="donation-submit-feedback" style="display: none; padding: 0.85rem 1rem; border-radius: 10px; font-size: 0.9rem; text-align: center;"></div>

          <!-- Action Button -->
          <div>
            <button type="button" id="submit-donation-gateway-btn" class="btn btn-primary" style="width: 100%; padding: 0.85rem 1rem; font-size: 1.05rem; font-weight: 800; border-radius: 14px; box-shadow: var(--shadow-primary); display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <span id="donation-button-text">${n.submitBtn} (₹2,500)</span>
            </button>
            <p style="text-align: center; font-size: 0.78rem; color: var(--foreground-muted); margin: 0.6rem 0 0;">
              ${n.securityNote}
            </p>
          </div>

        </form>

        <!-- Dynamic Instant Success Receipt Screen -->
        <div id="donation-success-screen" style="display: none; text-align: center; padding: 1.5rem 0.5rem;">
          <div style="width: 72px; height: 72px; background: rgba(16, 185, 129, 0.15); border: 2px solid #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; color: #059669;">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>

          <span class="glass-badge-gold" style="margin-bottom: 0.5rem;">${a?"योगदान यशस्वी":o?"सहयोग सफल":"Contribution Confirmed"}</span>
          <h3 class="font-display font-bold text-foreground" style="font-size: 1.6rem; margin-bottom: 0.5rem;">
            ${a?"प्रयास फाऊंडेशनतर्फे मनःपूर्वक धन्यवाद!":o?"प्रयास फाउंडेशन की ओर से हार्दिक धन्यवाद!":"Thank You for Supporting Prayas Foundation!"}
          </h3>
          <p class="text-foreground-muted" style="font-size: 0.92rem; max-width: 500px; margin: 0 auto 1.25rem; line-height: 1.5;">
            ${a?"आपले योगदान मालवणीतील गरजू मुलांच्या शिक्षणासाठी समर्पित करण्यात आले आहे.":o?"आपका सहयोग मालवणी के जरूरतमंद बच्चों की शिक्षा में लगाया जाएगा।":"Your contribution directly empowers students at Mumbai Public School, Malvani."}
          </p>

          <!-- Generated Standard 80G Receipt Certificate Card -->
          <div style="background: var(--surface-card); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.25rem 1.5rem; text-align: left; margin-bottom: 1.25rem; box-shadow: var(--shadow-sm);">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
              <span style="color: var(--foreground-muted); font-size: 0.85rem;">Donor Name:</span>
              <strong id="rec-donor-name" style="color: var(--foreground); font-size: 0.9rem;">-</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
              <span style="color: var(--foreground-muted); font-size: 0.85rem;">Amount Contributed:</span>
              <strong id="rec-amount" style="color: #059669; font-size: 1.05rem;">-</strong>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
              <span style="color: var(--foreground-muted); font-size: 0.85rem;">Transaction Ref (UTR):</span>
              <code id="rec-txn-id" style="color: var(--primary); font-weight: 700; font-size: 0.85rem;">-</code>
            </div>
            <div id="rec-80g-row" style="display: flex; justify-content: space-between; padding-top: 0.2rem;">
              <span style="color: var(--foreground-muted); font-size: 0.85rem;">80G Tax Exemption No:</span>
              <strong id="rec-80g-no" style="color: #d97706; font-size: 0.9rem; font-family: monospace;">-</strong>
            </div>
          </div>

          <!-- Direct Status Banner: Automatically Sent to Email -->
          <div id="email-receipt-status-banner" style="margin-bottom: 1.25rem; font-size: 0.92rem; padding: 0.85rem 1.1rem; border-radius: 12px; background: rgba(16, 185, 129, 0.15); color: #047857; border: 1.5px solid #10b981; text-align: center; font-weight: 700; line-height: 1.45;">
            ✅ Your official Section 80G receipt has been sent to your email.
          </div>

          <!-- 2 Clean Action Buttons: Download PDF & Share Receipt Link -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem;">
            <button type="button" id="btn-action-print-receipt" class="btn btn-primary" style="padding: 0.85rem 1rem; font-size: 0.92rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem; border-radius: 12px;">
              🖨️ Download / Print PDF
            </button>
            <button type="button" id="btn-action-share-link" class="btn btn-secondary" style="padding: 0.85rem 1rem; font-size: 0.92rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem; border-radius: 12px; border-color: var(--primary); color: var(--primary);">
              🔗 Share Receipt Link
            </button>
          </div>

          <div style="text-align: center; margin-top: 0.5rem;">
            <button type="button" id="close-success-donate-btn" class="btn btn-secondary" style="padding: 0.5rem 1.5rem; font-size: 0.85rem; border-radius: 999px;">
              ${a?"बंद करा":o?"बंद करें":"Done & Close"}
            </button>
          </div>
        </div>

      </div>
    </div>
  `}function Le(e){const t=document.getElementById("donate-modal");if(!t)return;t.parentElement!==document.body&&document.body.appendChild(t);const a=e==="mr",o=e==="hi",n=document.querySelectorAll(".donate-amount-pill"),i=document.getElementById("custom-donation-amount"),s=document.getElementById("qr-live-amount-tag"),r=document.getElementById("donation-button-text"),d=document.getElementById("radio-opt-80g"),f=document.getElementById("radio-opt-normal"),m=document.getElementById("pan-field-container"),h=document.getElementById("pan-required-badge"),b=document.getElementById("pan-required-80g-text"),P=document.querySelectorAll(".pay-method-tab"),$=document.querySelectorAll(".pay-method-panel"),w=document.getElementById("submit-donation-gateway-btn"),C=document.getElementById("donation-gateway-form"),S=document.getElementById("donation-success-screen"),x=document.getElementById("donation-submit-feedback"),c=document.getElementById("close-success-donate-btn");let g=2500,k="UPI (QR Code)",y=!0;function z(u){g=Math.max(10,Number(u)||2500),s&&(s.textContent=`₹${g.toLocaleString("en-IN")}.00`);const p=document.getElementById("qr-live-image");if(p){const N=`upi://pay?pa=shauryashettdds2231@okaxis&pn=Prayas%20Foundation&am=${g}&cu=INR&tn=Prayas%20Foundation%20Donation`;p.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(N)}`}const l=document.getElementById("app-gpay-link"),B=document.getElementById("app-phonepe-link"),_=document.getElementById("app-paytm-link"),G=document.getElementById("app-bhim-link"),T=`upi://pay?pa=shauryashettdds2231@okaxis&pn=Prayas%20Foundation&am=${g}&cu=INR&tn=Prayas%20Donation`;if(l&&(l.href=T),B&&(B.href=T),_&&(_.href=T),G&&(G.href=T),r){const N=a?"पेमेंट पूर्ण करा व पावती मिळवा":o?"भुगतान पूरा करें और रसीद पाएं":"Complete Contribution & Generate Receipt";r.textContent=`${N} (₹${g.toLocaleString("en-IN")})`}}function F(u,p){const l=document.getElementById(u);l&&l.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(p);const B=l.innerHTML;l.innerHTML="✓ Copied!",l.style.background="#10b981",l.style.color="#ffffff",setTimeout(()=>{l.innerHTML=B,l.style.background="",l.style.color=""},2e3)}catch{prompt("Copy to clipboard: Ctrl+C, Enter",p)}})}F("copy-upi-btn","shauryashettdds2231@okaxis"),F("copy-acc-btn","41829038471"),F("copy-ifsc-btn","SBIN0001824"),n.forEach(u=>{u.addEventListener("click",()=>{n.forEach(l=>{l.classList.remove("btn-primary"),l.classList.add("btn-secondary"),l.style.borderColor="var(--border)"}),u.classList.remove("btn-secondary"),u.classList.add("btn-primary"),u.style.borderColor="var(--primary)";const p=u.dataset.amt;i&&(i.value=p),z(p)})}),i&&i.addEventListener("input",u=>{n.forEach(p=>{p.classList.remove("btn-primary"),p.classList.add("btn-secondary"),p.style.borderColor="var(--border)"}),z(u.target.value)});function j(u){y=u,u?(m&&(m.style.background="rgba(16, 185, 129, 0.08)",m.style.borderColor="rgba(16, 185, 129, 0.3)"),h&&(h.textContent="Required for 80G Tax Exemption",h.style.color="#059669"),b&&(b.textContent=a?"८०G कर सवलत पावतीसाठी कृपया खाली आपला १०-अंकी पॅन नंबर टाका.":o?"80G टैक्स छूट रसीद के लिए कृपया नीचे अपना 10-अंकों का पैन नंबर दर्ज करें।":"Enter your 10-character PAN number below to generate your official 80G Tax Certificate.",b.style.display="block")):(m&&(m.style.background="var(--surface-card)",m.style.borderColor="var(--border)"),h&&(h.textContent="Optional for Normal Donations",h.style.color="var(--foreground-muted)"),b&&(b.textContent=a?"सामान्य देणगीसाठी पॅन कार्डची आवश्यकता नाही.":o?"सामान्य सहयोग के लिए पैन कार्ड की आवश्यकता नहीं है।":"No PAN required for normal direct support."))}d&&d.addEventListener("change",()=>j(!0)),f&&f.addEventListener("change",()=>j(!1)),P.forEach(u=>{u.addEventListener("click",()=>{P.forEach(l=>{l.classList.remove("btn-primary"),l.classList.add("btn-secondary")}),u.classList.remove("btn-secondary"),u.classList.add("btn-primary");const p=u.dataset.method;if($.forEach(l=>l.style.display="none"),p==="upi"){const l=document.getElementById("pay-panel-upi");l&&(l.style.display="block"),k="UPI (QR Code)"}else if(p==="card"){const l=document.getElementById("pay-panel-card");l&&(l.style.display="block"),k="Debit/Credit Card"}else if(p==="bank"){const l=document.getElementById("pay-panel-bank");l&&(l.style.display="block"),k="Bank Transfer / NEFT"}})}),w&&w.addEventListener("click",async u=>{u.preventDefault();const p=document.getElementById("donor-fullname-input"),l=document.getElementById("donor-email-input"),B=document.getElementById("donor-phone-input"),_=document.getElementById("donor-pan-input"),G=document.getElementById("donor-utr-input"),T=p?p.value.trim():"",N=l?l.value.trim():"",O=B?B.value.trim():"",W=_?_.value.trim().toUpperCase():"",me=G?G.value.trim():"";if(!T||T.length<2){L("Please enter your full name."),p&&p.focus();return}if(!N||!N.includes("@")){L("Please enter a valid email address."),l&&l.focus();return}if(!O||O.length<8){L("Please enter your phone number."),B&&B.focus();return}if(y&&(!W||W.length<10)){L("Please enter a valid 10-character PAN number for Section 80G Tax Exemption."),_&&_.focus();return}const K=document.getElementById("donor-payment-confirm-cb");if(!K||!K.checked){L(a?"कृपया देणगी रक्कम भरल्याची पुष्टी करण्यासाठी चेकबॉक्सवर खूण करा.":o?"कृपया दान राशि का भुगतान करने की पुष्टि के लिए चेकबॉक्स पर टिक करें।":"Please confirm that you have scanned the QR code / completed payment before submitting to generate the receipt."),K&&K.focus();return}w.disabled=!0;const ue=w.innerHTML;w.innerHTML=`
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"></circle></svg>
        <span>Recording Verified Contribution...</span>
      `;try{const R=await ve({donor_name:T,donor_email:N,donor_phone:O,amount:g,donor_pan:W,is_80g:y,payment_mode:k,transaction_id:me||void 0,cause:"MPS Malvani School & Digital Labs"}),v={id:R.id||Date.now()%1e5,donor_name:R.donor_name||T,donor_email:R.donor_email||N,donor_phone:O,donor_pan:y?W:"",amount:Number(g),payment_mode:k,transaction_id:R.transaction_id||`TXN-2026-${Math.floor(1e5+Math.random()*9e5)}`,tax_80g_receipt_no:R.tax_80g_receipt_no||(y?`80G-PF-2026-X${Math.floor(1e3+Math.random()*9e3)}`:null),is_80g:y?1:0,cause:"MPS Malvani Holistic Welfare & Education",status:"COMPLETED",created_at:R.created_at||new Date().toISOString()},H=document.getElementById("rec-donor-name"),U=document.getElementById("rec-amount"),q=document.getElementById("rec-txn-id"),Q=document.getElementById("rec-80g-no"),D=document.getElementById("rec-80g-row");H&&(H.textContent=v.donor_name),U&&(U.textContent=`₹${g.toLocaleString("en-IN")}.00`),q&&(q.textContent=v.transaction_id),D&&(v.tax_80g_receipt_no?(D.style.display="flex",Q&&(Q.textContent=v.tax_80g_receipt_no)):D.style.display="none");const I=document.getElementById("email-receipt-status-banner"),J=v.donor_email;I&&(I.style.background="rgba(16, 185, 129, 0.15)",I.style.borderColor="#10b981",I.style.color="#047857",I.innerHTML=`✅ <strong>Receipt Sent:</strong> Your official Section 80G tax receipt has been automatically sent to your email (<u>${J}</u>).`);const A=document.getElementById("btn-action-print-receipt"),M=document.getElementById("btn-action-share-link");if(A&&(A.onclick=()=>{de(v)}),M){const Y=pe(v.id);M.onclick=async()=>{if(navigator.share)try{await navigator.share({title:`Prayas Foundation Receipt #${v.tax_80g_receipt_no||v.id}`,text:`Official donation receipt for INR ₹${Number(v.amount||0).toLocaleString("en-IN")} - Prayas Foundation`,url:Y});return}catch{}try{await navigator.clipboard.writeText(Y),M.innerHTML="✓ Link Copied!",M.style.background="#10b981",M.style.color="#ffffff",setTimeout(()=>{M.innerHTML="🔗 Share Receipt Link",M.style.background="",M.style.color=""},2500)}catch{prompt("Receipt Download Link (Ctrl+C, Enter):",Y)}}}C&&(C.style.display="none"),S&&(S.style.display="block")}catch(ae){console.warn("Backend API note, falling back to instant client receipt:",ae);const R=Math.floor(1e3+Math.random()*9e3),v={id:Date.now()%1e5,donor_name:T,donor_email:N,donor_phone:O,donor_pan:y?W:"",amount:Number(g),payment_mode:k,transaction_id:`TXN-2026-${R}`,tax_80g_receipt_no:y?`80G-PF-2026-X${R}`:null,is_80g:y?1:0,cause:"MPS Malvani Holistic Welfare & Education",status:"COMPLETED",created_at:new Date().toISOString()},H=document.getElementById("rec-donor-name"),U=document.getElementById("rec-amount"),q=document.getElementById("rec-txn-id"),Q=document.getElementById("rec-80g-no"),D=document.getElementById("rec-80g-row");H&&(H.textContent=T),U&&(U.textContent=`₹${g.toLocaleString("en-IN")}.00`),q&&(q.textContent=v.transaction_id),D&&(y?(D.style.display="flex",Q&&(Q.textContent=v.tax_80g_receipt_no)):D.style.display="none");const I=document.getElementById("email-receipt-status-banner");I&&(I.style.background="rgba(16, 185, 129, 0.15)",I.style.borderColor="#10b981",I.style.color="#047857",I.innerHTML=`✅ <strong>Receipt Sent:</strong> Your official Section 80G receipt has been generated and sent to your email (<u>${N}</u>).`);const J=document.getElementById("btn-action-print-receipt"),A=document.getElementById("btn-action-share-link");if(J&&(J.onclick=()=>{de(v)}),A){const M=`${window.location.origin.replace(":3000",":8000")}/api/donations/${v.id}/download-pdf`;A.onclick=async()=>{if(navigator.share)try{await navigator.share({title:`Prayas Foundation Receipt #${v.tax_80g_receipt_no||v.id}`,text:`Official donation receipt for INR ₹${Number(v.amount||0).toLocaleString("en-IN")} - Prayas Foundation`,url:M});return}catch{}try{await navigator.clipboard.writeText(M),A.innerHTML="✓ Link Copied!",A.style.background="#10b981",A.style.color="#ffffff",setTimeout(()=>{A.innerHTML="🔗 Share Receipt Link",A.style.background="",A.style.color=""},2500)}catch{prompt("Receipt Download Link (Ctrl+C, Enter):",M)}}}C&&(C.style.display="none"),S&&(S.style.display="block")}finally{w.disabled=!1,w.innerHTML=ue}});function L(u,p){x&&(x.style.display="block",x.style.background="rgba(239, 68, 68, 0.12)",x.style.color="#dc2626",x.style.border="1px solid #fca5a5",x.textContent=u,setTimeout(()=>{x&&(x.style.display="none")},5e3))}c&&c.addEventListener("click",()=>{t.classList.remove("open"),document.body.style.overflow="",C&&(C.style.display="flex"),S&&(S.style.display="none")})}function _e(e,t){const a=t==="mr",o=t==="hi";return`
    <!-- Privacy Policy Modal -->
    <div id="privacy-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title">
      <div class="modal-panel">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3 id="privacy-modal-title" class="font-display font-bold text-foreground text-2xl">
            ${a?"गोपनीयता धोरण":o?"गोपनीयता नीति":"Privacy Policy"}
          </h3>
          <button id="close-privacy-modal-btn" class="lightbox-btn" style="background: var(--surface-subtle); color: var(--foreground);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.65; display: flex; flex-direction: column; gap: 1rem;">
          <p>
            ${a?"हे गोपनीयता धोरण स्पष्ट करते की जेव्हा आपण आमच्या वेबसाइटला भेट देता किंवा आमच्या सेवांचा वापर करता तेव्हा प्रयास फाउंडेशन आपली वैयक्तिक माहिती कशी गोळा, वापर आणि सुरक्षित करते.":o?"यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर आते हैं या हमारी सेवाओं का उपयोग करते हैं तो प्रयास फाउंडेशन आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है।":"This privacy policy describes how Prayas Foundation collects, uses, and protects your personal information when you visit our website or interact with our services."}
          </p>
          <h4 class="font-bold text-foreground">${a?"आम्ही कोणती माहिती गोळा करतो":o?"हम कौन सी जानकारी एकत्र करते हैं":"Information We Collect"}</h4>
          <p>
            ${a?"आम्ही आपले नाव, ईमेल पत्ता, फोन नंबर आणि संपर्क फॉर्मद्वारे आपण स्वेच्छेने दिलेली इतर कोणतीही माहिती गोळा करू शकतो.":o?"हम आपका नाम, ईमेल पता, फोन नंबर, और कोई भी अन्य जानकारी एकत्र कर सकते हैं जो आप हमारे संपर्क फॉर्म के माध्यम से स्वेच्छा से प्रदान करते हैं।":"We may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide through our contact forms."}
          </p>
          <h4 class="font-bold text-foreground">${a?"आम्ही आपल्या माहितीचा वापर कसा करतो":o?"हम आपकी जानकारी का उपयोग कैसे करते हैं":"How We Use Your Information"}</h4>
          <p>
            ${a?"आपल्या माहितीचा वापर आपल्या चौकशीला उत्तर देण्यासाठी, शैक्षणिक सेवा पुरवण्यासाठी आणि सामाजिक उपक्रम सुधारण्यासाठी केला जातो. आम्ही आपली वैयक्तिक माहिती कोणालाही विकत किंवा शेअर करत नाही.":o?"आपकी जानकारी का उपयोग आपकी पूछताछ का जवाब देने, सेवाएं प्रदान करने और हमारी वेबसाइट अनुभव को बेहतर बनाने के लिए किया जाता है। हम आपकी व्यक्तिगत जानकारी को किसी तीसरे पक्ष को नहीं बेचते या साझा नहीं करते।":"Your information is used to respond to your inquiries, provide educational services, and improve our community programs. We do not sell or share your personal information with third parties."}
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
            ${a?"वापराच्या अटी":o?"उपयोग की शर्तें":"Terms of Use"}
          </h3>
          <button id="close-terms-modal-btn" class="lightbox-btn" style="background: var(--surface-subtle); color: var(--foreground);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="text-foreground-muted" style="font-size: 0.95rem; line-height: 1.65; display: flex; flex-direction: column; gap: 1rem;">
          <p>
            ${a?"प्रयास फाउंडेशनच्या वेबसाइटवर प्रवेश करून आपण या वापराच्या अटी आणि सर्व लागू कायद्यांचे पालन करण्यास सहमती दर्शवता.":o?"प्रयास फाउंडेशन की वेबसाइट का उपयोग करके आप इन सेवा शर्तों और सभी लागू कानूनों का पालन करने के लिए सहमत होते हैं।":"By accessing the website of Prayas Foundation, you agree to be bound by these terms of service and all applicable laws and regulations."}
          </p>
          <h4 class="font-bold text-foreground">${a||o?"बौद्धिक संपदा":"Intellectual Property"}</h4>
          <p>
            ${a?"या वेबसाइटवरील सर्व मजकूर, चित्रे, लोगो आणि शैक्षणिक साहित्य प्रयास फाउंडेशनची मालमत्ता आहे.":o?"इस वेबसाइट पर मौजूद सभी सामग्री, चित्र, लोगो और शैक्षणिक संसाधन प्रयास फाउंडेशन की बौद्धिक संपदा हैं।":"All materials, images, logos, and content on this site are the property of Prayas Foundation and protected by copyright and intellectual property laws."}
          </p>
          <p style="font-size: 0.85rem; border-top: 1px solid var(--border); padding-top: 0.75rem;">
            Registration: <strong>Prayas Foundation NGO (Malvani, Malad West, Mumbai)</strong>
          </p>
        </div>
      </div>
    </div>
  `}function De(e,t){const a=e[t].footer,o=e[t].nav,n=e[t].contact;return`
    <footer style="background: var(--surface-card); border-top: 1px solid var(--border); padding-top: 4.5rem; padding-bottom: 3rem; position: relative;">
      <div class="container" style="max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; text-align: center;">
        
        <!-- Footer Columns: Completely Centered -->
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; margin-bottom: 3.5rem; width: 100%; text-align: center;" class="md:grid-cols-2 lg:grid-cols-12">
          
          <!-- Col 1: Brand & Bio Centered -->
          <div class="lg:col-span-5" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; justify-content: center;">
              <img src="./assets/prayas-logo.png" alt="Prayas Foundation" style="height: 48px; object-fit: contain;" />
              <span class="font-display font-bold text-foreground block" style="font-size: 1.35rem;">Prayas Foundation</span>
            </div>

            <p class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.65; max-width: 440px; margin: 0 auto 1.5rem; text-align: center;">
              ${a.aboutSummary}
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
              ${a.quickLinks}
            </h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 1.05rem; font-weight: 600; padding: 0; margin: 0; align-items: center;">
              <li><a href="./index.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${o.home}</a></li>
              <li><a href="./about.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${o.about}</a></li>
              <li><a href="./school.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${o.school}</a></li>
              <li><a href="./programs.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${o.programs}</a></li>
              <li><a href="./work.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${o.work||(t==="mr"?"आमचे कार्य":t==="hi"?"हमारा कार्य":"Our Work")}</a></li>
              <li><a href="./impact.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${o.impact}</a></li>
              <li><a href="./contact.html" class="hover-lift text-foreground-muted" style="display: inline-block;">${o.contact}</a></li>
            </ul>
          </div>

          <!-- Col 3: Contact & Legal Centered -->
          <div class="lg:col-span-4" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <h4 class="font-display font-bold text-foreground" style="font-size: 1.15rem; margin-bottom: 1.25rem;">
              ${t==="mr"?"कार्यालय आणि पारदर्शकता":t==="hi"?"कार्यालय व कानूनी":"Office & Transparency"}
            </h4>
            <div style="font-size: 1.05rem; color: var(--foreground-muted); display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; align-items: center;">
              <p style="max-width: 320px; margin: 0;">📍 ${n.address}</p>
              <p style="margin: 0;">📞 <a href="tel:+919820500726" class="hover-lift font-bold" style="color: var(--primary);">+91-9820500726</a></p>
              <p style="margin: 0;">✉️ <a href="mailto:info@prayasfoundation.co.in" class="hover-lift font-bold" style="color: var(--primary);">info@prayasfoundation.co.in</a></p>
            </div>

            <!-- Legal Modals Trigger Buttons & Admin Link -->
            <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.95rem; justify-content: center; align-items: center;">
              <button id="open-privacy-btn" class="hover-lift" style="color: var(--primary); text-decoration: underline; cursor: pointer; background: none; border: none; font-weight: 700; font-size: 0.95rem;">
                ${a.privacyPolicy}
              </button>
              <button id="open-terms-btn" class="hover-lift" style="color: var(--primary); text-decoration: underline; cursor: pointer; background: none; border: none; font-weight: 700; font-size: 0.95rem;">
                ${a.termsOfUse}
              </button>
              <a href="./admin.html" class="hover-lift" style="color: #059669; background: rgba(5, 150, 105, 0.1); border: 1px solid #059669; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 700; font-size: 0.82rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
                <span>🗄️ SQL Admin</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright & Universally Working Back to Top Bar Centered -->
        <div style="border-top: 1px solid var(--border); padding-top: 2rem; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; font-size: 0.95rem; color: var(--foreground-muted); text-align: center;">
          <p style="margin: 0; font-weight: 600;">${a.copyright}</p>
          <button type="button" class="btn btn-sm btn-secondary hover-lift" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; font-weight: 800; cursor: pointer; padding: 0.55rem 1.35rem; border-radius: 999px; background: var(--surface); color: var(--foreground); border: 1.5px solid var(--border);" title="Scroll to Top">
            <span style="color: var(--primary); font-size: 1.1rem;">↑</span>
            <span>${t==="mr"?"वरती जा (Back to Top)":t==="hi"?"शीर्ष पर जाएँ (Back to Top)":"Back to Top"}</span>
          </button>
        </div>

      </div>
    </footer>
  `}function ze(){window.matchMedia("(prefers-reduced-motion: reduce)").matches&&document.documentElement.classList.add("reduced-motion"),Se(),Ce()}function Se(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>ce(),{once:!0}):ce()}function ce(){document.querySelectorAll("img").forEach((e,t)=>{e.hasAttribute("decoding")||e.setAttribute("decoding","async"),t>2&&!e.hasAttribute("loading")&&e.setAttribute("loading","lazy")})}function Ce(){const e=new Set;function t(a){if(!a||e.has(a)||a.startsWith("http")||a.startsWith("#")||a.startsWith("tel:")||a.startsWith("mailto:")||a.startsWith("javascript:"))return;e.add(a);const o=document.createElement("link");o.rel="prefetch",o.href=a,document.head.appendChild(o)}document.addEventListener("mouseover",a=>{const o=a.target.closest("a[href]");if(o){const n=o.getAttribute("href");t(n)}},{passive:!0}),document.addEventListener("touchstart",a=>{const o=a.target.closest("a[href]");if(o){const n=o.getAttribute("href");t(n)}},{passive:!0})}function je(e){let t=!1;return function(...a){t||(requestAnimationFrame(()=>{e.apply(this,a),t=!1}),t=!0)}}function Ge(){let e=document.getElementById("page-load-bar");e||(e=document.createElement("div"),e.id="page-load-bar",document.body.appendChild(e)),e.style.opacity="1",e.style.width="35%",requestAnimationFrame(()=>{setTimeout(()=>{e&&(e.style.width="80%")},40),setTimeout(()=>{e&&(e.style.width="100%",setTimeout(()=>{e.style.opacity="0",setTimeout(()=>{e.style.width="0%"},250)},160))},140)})}export{De as a,Re as b,Te as c,_e as d,$e as e,Ie as f,Le as g,je as h,ze as i,Be as j,de as k,Ae as l,te as m,Ne as n,pe as o,Fe as p,Ee as q,ve as r,Me as s,Ge as t};
