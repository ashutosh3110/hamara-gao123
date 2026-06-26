import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, ChevronRight, Heart, Bookmark, TrendingUp, Sprout, BookOpen } from 'lucide-react';
import ProductImage from './ProductImage';

const ExpertAvatar = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 shrink-0">
    {/* Background */}
    <circle cx="50" cy="50" r="50" fill="#e2e8f0" />
    
    {/* Shirt */}
    <path d="M20,90 Q50,70 80,90 L80,100 L20,100 Z" fill="#15803d" />
    <path d="M42,75 L50,90 L58,75 Z" fill="#1d4ed8" />
    
    {/* Head/Face */}
    <circle cx="50" cy="50" r="22" fill="#fed7aa" />
    
    {/* Beard & Mustache */}
    <path d="M35,50 Q50,75 65,50 Q50,85 35,50 Z" fill="#7c2d12" />
    <path d="M40,55 Q50,62 60,55 Q50,68 40,55 Z" fill="#451a03" />
    
    {/* Eyes */}
    <circle cx="43" cy="46" r="2" fill="#1e293b" />
    <circle cx="57" cy="46" r="2" fill="#1e293b" />
    
    {/* Nose */}
    <path d="M49,46 L51,46 L50,52 Z" fill="#fdba74" />
    
    {/* Straw Hat */}
    <path d="M25,38 Q50,30 75,38 L72,43 Q50,38 28,43 Z" fill="#ca8a04" />
    <path d="M35,36 Q50,15 65,36 Z" fill="#eab308" />
    <rect x="35" y="32" width="30" height="4" fill="#a16207" />
  </svg>
);

const TrowelSVG = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto">
    {/* Soil Mound */}
    <path d="M15,80 Q50,55 85,80 Z" fill="#5c4033" />
    <path d="M25,78 Q50,62 75,78 Z" fill="#3d2b1f" />
    
    {/* Trowel Metal Blade */}
    <path d="M45,45 L70,70 L55,75 Z" fill="#94a3b8" />
    <path d="M45,45 L55,75 L40,65 Z" fill="#cbd5e1" />
    
    {/* Trowel Handle */}
    <path d="M20,25 L40,45" stroke="#ca8a04" strokeWidth="6" strokeLinecap="round" />
    <path d="M40,45 L45,40" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

const BucketSVG = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto">
    {/* Bucket Body */}
    <path d="M30,35 L70,35 L62,85 L38,85 Z" fill="#3b82f6" />
    {/* Bucket Rim */}
    <ellipse cx="50" cy="35" rx="20" ry="5" fill="#60a5fa" />
    {/* Handle */}
    <path d="M30,35 Q50,10 70,35" fill="none" stroke="#94a3b8" strokeWidth="3" />
    {/* Dirt inside */}
    <ellipse cx="50" cy="36" rx="18" ry="4" fill="#5c4033" />
  </svg>
);

const ReportSVG = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto">
    {/* Sheet of paper */}
    <rect x="25" y="15" width="50" height="70" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
    {/* Folded corner */}
    <path d="M65,15 L75,25 L65,25 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
    
    {/* Graph illustration */}
    <circle cx="40" cy="40" r="12" fill="#fef08a" />
    <circle cx="40" cy="40" r="8" fill="#eab308" />
    <circle cx="40" cy="40" r="5" fill="#ffffff" />
    
    {/* Mini charts */}
    <rect x="58" y="32" width="10" height="4" rx="1" fill="#15803d" />
    <rect x="58" y="40" width="10" height="4" rx="1" fill="#ca8a04" />
    
    {/* Text Lines */}
    <line x1="35" y1="62" x2="65" y2="62" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
    <line x1="35" y1="70" x2="55" y2="70" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SackSVG = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto">
    {/* Sack body */}
    <path d="M30,30 Q50,25 70,30 L65,85 Q50,90 35,85 Z" fill="#d97706" />
    <path d="M32,32 Q50,28 68,32 L63,83 Q50,88 37,83 Z" fill="#b45309" />
    
    {/* Sack tie */}
    <ellipse cx="50" cy="30" rx="18" ry="4" fill="#ca8a04" />
    
    {/* Leaf label on sack */}
    <rect x="42" y="45" width="16" height="22" rx="2" fill="#f0fdf4" />
    <path d="M50,49 Q55,55 50,63 Q45,55 50,49 Z" fill="#16a34a" />
  </svg>
);

const RupeeDownSVG = () => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50/70 shadow-3xs shrink-0">
    <svg viewBox="0 0 100 100" className="w-7 h-7">
      {/* Down arrow in dark green */}
      <path d="M35,15 L65,15 L65,55 L80,55 L50,90 L20,55 L35,55 Z" fill="#15803d" />
      {/* White Rupee symbol on the arrow */}
      <text x="50" y="54" fontFamily="sans-serif" fontSize="24" fontWeight="black" fill="#ffffff" textAnchor="middle">₹</text>
    </svg>
  </div>
);

  // Full articles data to filter and show other recommendations at the bottom
  const allArticles = [
    {
      id: 'blog-1',
      categoryNameHi: 'PM किसान योजना',
      categoryNameEn: 'PM Kisan Scheme',
      titleHi: 'PM किसान योजना और सरकारी सब्सिडी',
      titleEn: 'PM Kisan Scheme & Govt Subsidies',
      dateHi: '25 जून 2026',
      dateEn: '25 June 2026',
      readTimeHi: '5 मिनट पढ़ें',
      readTimeEn: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80',
      descriptionHi: 'जानें कैसे ट्रैक्टर और आधुनिक कृषि यंत्रों पर पाएं 50% तक की सरकारी सब्सिडी।',
      descriptionEn: 'Learn how to get up to 50% government subsidy on tractors and modern machinery.',
      contentHi: `पीएम किसान सम्मान निधि और अन्य सरकारी योजनाएं भारत के छोटे और सीमांत किसानों के लिए एक वरदान हैं। 

इस योजना के मुख्य लाभ:
1. वित्तीय सहायता: हर साल किसानों को ₹6,000 की राशि सीधे उनके बैंक खाते में ट्रांसफर की जाती है।
2. कृषि यंत्रों पर 50% सब्सिडी: इसके अतिरिक्त, सब-मिशन ऑन एग्रीकल्चरल मैकेनाइजेशन (SMAM) के तहत किसानों को नए ट्रैक्टर, रोटावेटर और सी ड्रिल खरीदने पर 50% तक की सब्सिडी मिलती है।
3. कस्टम हायरिंग सेंटर: यदि आप उपकरण नहीं खरीद सकते, तो सरकार आपको बहुत कम किराए पर मशीनें दिलाने में मदद करती है।`,
      contentEn: `PM Kisan Samman Nidhi and other government subsidy schemes are a boon for small and marginal Indian farmers.

Key Benefits of the Scheme:
1. Financial Support: Farmers receive ₹6,005 annually directly in their bank accounts.
2. 50% Subsidy on Machinery: Under the Sub-Mission on Agricultural Mechanization (SMAM), you can get up to 50% subsidy to buy tractors, rotavators, and seed drills.
3. Custom Hiring Centers: If you cannot afford to purchase machinery, the government helps you rent it at highly subsidized rates.`
    },
    {
      id: 'blog-2',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'मिट्टी की जांच (Soil Test) के बड़े फायदे',
      titleEn: 'Benefits of Soil Testing for Crop Yield',
      dateHi: '22 जून 2026',
      dateEn: '22 June 2026',
      imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&auto=format&fit=crop&q=80',
      descriptionHi: 'बुवाई से पहले मिट्टी की सेहत जांचने का सही तरीका ताकि अनावश्यक खाद का खर्च बचे।',
      descriptionEn: 'The correct way to check soil health before sowing to save on fertilizer costs.',
      contentHi: `मिट्टी की जाँच (Soil Testing) हर किसान भाई के लिए खेती की शुरुआत का सबसे महत्वपूर्ण कदम है। 

क्यों जरूरी है मिट्टी की जाँच?
1. पोषक तत्वों की सटीक जानकारी: इससे पता चलता है कि मिट्टी में नाइट्रोजन, फास्फोरस, पोटाश और सूक्ष्म पोषक तत्वों की क्या मात्रा है।
2. खाद के खर्च में बचत: ज़रूरत के हिसाब से ही खाद डालने से लागत कम होती है।
3. सही फसल का चयन: आप जान सकते हैं कि आपके खेत के लिए कौन सी फसल सबसे उत्तम रहेगी।`,
      contentEn: `Soil testing is the most crucial step for any farmer before starting a new crop season.

Why is Soil Testing Important?
1. Exact Nutrient Mapping: Understand levels of Nitrogen, Potassium, and micronutrients.
2. Saving Fertilizer Costs: Use fertilizers efficiently rather than wasting money on excessive amounts.
3. Crop Suitability: Choose crops that will naturally thrive in your soil conditions.`
    },
    {
      id: 'blog-3',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'ड्रिप सिंचाई: कम पानी में दोगुनी पैदावार',
      titleEn: 'Drip Irrigation: Less Water, More Yield',
      dateHi: '18 मई 2024',
      dateEn: '18 May 2024',
      imageUrl: 'https://images.unsplash.com/photo-1563514227147-6d2ff66de3c3?w=400&auto=format&fit=crop&q=80',
      descriptionHi: 'टपक सिंचाई पद्धति अपनाकर पानी और मजदूरी दोनों की बचत करें और अधिक फल पाएं।',
      descriptionEn: 'Save both water and labor costs while boosting crop yields using drip irrigation.',
      contentHi: `ड्रिप सिंचाई (टपक सिंचाई) शुष्क और कम पानी वाले क्षेत्रों के लिए सबसे उत्तम सिंचाई पद्धति है।

ड्रिप सिंचाई के लाभ:
1. 70% तक पानी की बचत: पानी सीधे पौधों की जड़ों में बूंद-बूंद करके गिरता है, जिससे वाष्पीकरण और बर्बादी नहीं होती।
2. खरपतवार पर नियंत्रण: पानी केवल फसल को मिलता है, जिससे खाली जगह में अनावश्यक खरपतवार नहीं उगते।
3. फर्टिगेशन (Fertigation): आप पानी के साथ ही खाद भी घोलकर सीधे जड़ों तक पहुंचा सकते हैं।`,
      contentEn: `Drip irrigation is the most efficient watering method, especially for dry and water-scarce regions.

Benefits of Drip Irrigation:
1. Up to 70% Water Savings: Water drops directly at the plant root zone, eliminating evaporation and wastage.
2. Weed Control: Water is targeted only at crops, preventing wild weeds from growing in empty spaces.
3. Fertigation: Water-soluble fertilizers can be directly delivered to the root system through the tubes.`
    },
    {
      id: 'blog-4',
      categoryNameHi: 'खाद प्रबंधन',
      categoryNameEn: 'Fertilizer Guide',
      titleHi: 'गोबर से कंपोस्ट खाद बनाने की सही विधि',
      titleEn: 'How to Make Fertilizer Compost at Home',
      dateHi: '15 मई 2024',
      dateEn: '15 May 2024',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&auto=format&fit=crop&q=80',
      descriptionHi: 'गोबर और खेत के सूखे पत्तों से तैयार करें प्राकृतिक खाद जो खेत की ताकत बढ़ाए।',
      descriptionEn: 'Prepare natural organic compost from cow dung and dry leaves to boost soil strength.',
      contentHi: `रासायनिक खादों के अत्यधिक उपयोग से मिट्टी बंजर हो रही है। ऐसे में घर पर तैयार कंपोस्ट खाद ही खेत का असली अमृत है।

बनाने की आसान विधि:
1. 3x3x3 फीट का एक गड्ढा तैयार करें।
2. पहली परत सूखे पत्तों, भूसे और खेत के कचरे की डालें।
3. दूसरी परत ताजे गोबर और पानी के घोल की डालें।
4. इस प्रक्रिया को दोहराएं और गड्ढे को मिट्टी से ढक दें।
5. 60-90 दिनों में आपकी गंध-रहित, उपजाऊ जैविक खाद तैयार हो जाएगी।`,
      contentEn: `Excessive chemical fertilizers are depleting soil health. Home-made organic compost is the best way to restore it.

Step-by-Step Method:
1. Dig a compost pit of size 3x3x3 feet.
2. Put a first layer of dry leaves, straw, and crop residue.
3. Put a second layer of fresh cow dung mixed with water.
4. Repeat the layers and cover the pit with soil.
5. In 60-90 days, your highly fertile, odorless organic compost is ready.`
    },
    {
      id: 'blog-5',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'फसल चक्र (Crop Rotation) क्यों है जरूरी?',
      titleEn: 'Why Crop Rotation is Essential',
      dateHi: '10 मई 2024',
      dateEn: '10 May 2024',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&auto=format&fit=crop&q=80',
      descriptionHi: 'फसलों को अदल-बदल कर बोने से खेतों में नाइट्रोजन की मात्रा और उर्वरा शक्ति बढ़ती है।',
      descriptionEn: 'Learn how rotating crops boosts nitrogen content, soil fertility and reduces pests.',
      contentHi: `लगातार एक ही फसल बोने से मिट्टी के विशेष पोषक तत्व समाप्त हो जाते हैं और कीड़ों का प्रकोप बढ़ जाता है।

फसल चक्र के लाभ:
1. नाइट्रोजन स्थिरीकरण (Nitrogen Fixation): अनाज वाली फसलों के बाद दलहन (दालें) बोने से मिट्टी को प्राकृतिक रूप से नाइट्रोजन मिलती है।
2. कीड़ों के चक्र को तोड़ना: फसल बदलने से विशिष्ट कीटों को भोजन मिलना बंद हो जाता, जिससे उनकी संख्या कम होती है।
3. मिट्टी की संरचना में सुधार: अलग-अलग गहराई वाली जड़ें मिट्टी को भुरभुरा और उपजाऊ बनाए रखती हैं।`,
      contentEn: `Sowing the same crop continuously depletes soil nutrients and increases pest attacks.

Benefits of Crop Rotation:
1. Nitrogen Fixation: Growing legumes (pulses) after cereal crops naturally restores soil nitrogen levels.
2. Pest Cycle Disruption: Changing the crop deprives specific pests of their preferred host, controlling populations.
3. Better Soil Structure: Crops with different root depths improve soil aeration and water retention.`
    },
    {
      id: 'blog-6',
      categoryNameHi: 'कीट नियंत्रण',
      categoryNameEn: 'Pest Control',
      titleHi: 'फसलों को बचाने के जैविक कीटनाशक',
      titleEn: 'Organic Pesticides for Crop Safety',
      dateHi: '05 मई 2024',
      dateEn: '05 May 2024',
      imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=80',
      descriptionHi: 'नीम तेल और पत्तियों से बनाएं विष-मुक्त प्राकृतिक घोल जो फसल को कीड़ों से बचाए।',
      descriptionEn: 'Make toxin-free natural spray from neem oil and leaves to protect crops from pests.',
      contentHi: `घर पर नीम तेल से बना जैविक कीटनाशक रसायनों से 100 गुना बेहतर और पूरी तरह सुरक्षित है।

बनाने की विधि:
1. 1 लीटर पानी में 5-10 मिलीलीटर शुद्ध नीम का तेल लें।
2. इसमें 2-3 बूंदें लिक्विड सोप (जैसे बर्तन धोने वाला जेल) की मिलाएं ताकि तेल पानी में घुल सके।
3. इस घोल को अच्छी तरह हिलाएं और सुबह या शाम के समय फसलों पर स्प्रे करें।
4. यह रस चूसने वाले कीटों और इल्लियों से फसल की पूरी रक्षा करता है।`,
      contentEn: `Home-made neem oil pesticide is 100 times safer than toxic chemicals and extremely cost-effective.

Preparation Method:
1. Take 5-10 ml of pure neem oil in 1 liter of water.
2. Add 2-3 drops of liquid dish soap to emulsify the oil.
3. Mix thoroughly and spray on crops during early morning or late evening.
4. This effectively repels sap-sucking pests, aphids, and caterpillars.`
    },
    {
      id: 'feat-1',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'मिट्टी की जाँच क्यों जरूरी है और यह कैसे करें?',
      titleEn: 'Why Soil Testing is Essential and How to Do It?',
      dateHi: '20 मई 2024',
      dateEn: '20 May 2024',
      readTimeHi: '5 मिनट पढ़ें',
      readTimeEn: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&auto=format&fit=crop&q=80',
      contentHi: `मिट्टी की जाँच (Soil Testing) हर किसान भाई के लिए खेती की शुरुआत का सबसे महत्वपूर्ण कदम है। 

क्यों जरूरी है मिट्टी की जाँच?
1. पोषक तत्वों की सटीक जानकारी: इससे पता चलता है कि मिट्टी में नाइट्रोजन, फास्फोरस, पोटाश और सूक्ष्म पोषक तत्वों की क्या मात्रा है।
2. खाद के खर्च में बचत: ज़रूरत के हिसाब से ही खाद डालने से लागत कम होती है।
3. सही फसल का चयन: आप जान सकते हैं कि आपके खेत के लिए कौन सी फसल सबसे उत्तम रहेगी।

मिट्टी का नमूना कैसे लें?
- खेत में अंग्रेजी के 'V' आकार का 6 इंच गहरा गड्ढा बनाएं।
- गड्ढे की दीवार से मिट्टी की एक पतली परत खुरचें।
- खेत के अलग-अलग 8-10 हिस्सों से ऐसे नमूने लें और उन्हें अच्छी तरह मिलाएं।
- 500 ग्राम मिट्टी सुखाकर पास की सरकारी या निजी प्रयोगशाला में भेजें।`,
      contentEn: `Soil testing is the most crucial step for any farmer before starting a new crop season.

Why is Soil Testing Important?
1. Exact Nutrient Mapping: Understand levels of Nitrogen, Phosphorus, Potassium, and micronutrients.
2. Saving Fertilizer Costs: Use fertilizers efficiently rather than wasting money on excessive amounts.
3. Crop Suitability: Choose crops that will naturally thrive in your soil conditions.

How to Collect Soil Samples?
- Dig a V-shaped hole (about 6 inches deep) at multiple points in your farm.
- Scrape a thin slice of soil from the sides of the hole.
- Mix samples from 8-10 different spots together.
- Pack 500g of the mixed soil, dry it, and send it to the nearest agricultural lab.`
    },
    {
      id: 'art-1',
      categoryNameHi: 'ट्रैक्टर गाइड',
      categoryNameEn: 'Tractor Guide',
      titleHi: 'ट्रैक्टर की सर्विस कब और क्यों जरूरी है?',
      titleEn: 'When & Why is Tractor Servicing Needed?',
      dateHi: '18 मई 2024',
      dateEn: '18 May 2024',
      readTimeHi: '4 मिनट पढ़ें',
      readTimeEn: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80',
      contentHi: 'समय पर इंजन ऑयल बदलना, एयर फ़िल्टर की सफाई और ग्रीसिंग करना आपके ट्रैक्टर को सालों-साल नया बनाए रखता है...',
      contentEn: 'Changing engine oil on time, cleaning air filters, and regular greasing keeps your tractor in peak performance...'
    },
    {
      id: 'art-2',
      categoryNameHi: 'पशु पालन',
      categoryNameEn: 'Animal Care',
      titleHi: 'पशुओं को गर्मी में क्या खिलाएं?',
      titleEn: 'What to Feed Cattle in Summer?',
      dateHi: '15 मई 2024',
      dateEn: '15 May 2024',
      readTimeHi: '3 मिनट पढ़ें',
      readTimeEn: '3 min read',
      imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&auto=format&fit=crop&q=80',
      contentHi: 'गर्मियों में हरा चारा, पर्याप्त मात्रा में पानी और खनिज मिश्रण (mineral mixture) पशुओं को लू और कमजोरी से बचाता है...',
      contentEn: 'Providing green fodder, plenty of clean drinking water, and essential mineral mixtures prevents heat stroke...'
    },
    {
      id: 'art-3',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'बेहतर उपज के लिए मिट्टी की जाँच कैसे करें?',
      titleEn: 'How to Do Soil Testing for Yield?',
      dateHi: '12 मई 2024',
      dateEn: '12 May 2024',
      readTimeHi: '6 मिनट पढ़ें',
      readTimeEn: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1464225226614-760ff27a6721?w=400&auto=format&fit=crop&q=80',
      contentHi: 'मिट्टी की जाँच के लिए सही गहराई से मिट्टी निकालना और उसे धूप में सुखाना पहला कदम है...',
      contentEn: 'Digging at the right depth and properly shade-drying the sample are key steps in soil testing...'
    },
    {
      id: 'art-4',
      categoryNameHi: 'मशीनरी',
      categoryNameEn: 'Machinery',
      titleHi: 'खेती के लिए सही मशीन का चुनाव कैसे करें?',
      titleEn: 'How to Choose Right Farming Tools?',
      dateHi: '10 मई 2024',
      dateEn: '10 May 2024',
      readTimeHi: '5 मिनट पढ़ें',
      readTimeEn: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&auto=format&fit=crop&q=80',
      contentHi: 'मशीनों की खरीद करते समय उनके एचपी (HP) मैच, वारंटी और सब्सिडी की जानकारी जरूर लें...',
      contentEn: 'Check tractor HP compatibility, manufacturer warranty, and subsidies before buying implements...'
    },
    {
      id: 'art-5',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'कपास की खेती: पूरी जानकारी A से Z तक',
      titleEn: 'Cotton Farming: Complete A to Z Guide',
      dateHi: '8 मई 2024',
      dateEn: '8 May 2024',
      readTimeHi: '7 मिनट पढ़ें',
      readTimeEn: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1594900010992-d6a13c9e6931?w=400&auto=format&fit=crop&q=80',
      contentHi: 'कपास (नरमा) की खेती में खरपतवार नियंत्रण और गुलाबी सुंडी से बचाव के उन्नत उपाय...',
      contentEn: 'Effective weed management and preventive steps against pink bollworm in cotton farming...'
    }
  ];



export default function BlogDetailView({ lang, article, onBack, onSelectArticle, addToCart }) {
  // Find matched article from database/mock definition, match by ID or title
  const matchedArticle = allArticles.find(art => 
    art.id === article.id || 
    (article.titleHi && art.titleHi === article.titleHi) || 
    (article.titleEn && art.titleEn === article.titleEn)
  ) || article;

  const [showFullContent, setShowFullContent] = useState(false);
  const [saved, setSaved] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setShowFullContent(false);
    setSaved(false);
    setBookmarked(false);
  }, [matchedArticle.id]);

  const title = lang === 'hi' ? matchedArticle.titleHi : matchedArticle.titleEn;
  const date = lang === 'hi' ? matchedArticle.dateHi : matchedArticle.dateEn;
  const readTime = lang === 'hi' ? matchedArticle.readTimeHi || '5 मिनट पढ़ें' : matchedArticle.readTimeEn || '5 min read';
  const tag = lang === 'hi' ? matchedArticle.categoryNameHi || matchedArticle.tagHi || 'खेती की टिप्स' : matchedArticle.categoryNameEn || matchedArticle.tagEn || 'Farming Tips';
  const content = lang === 'hi' ? matchedArticle.contentHi || matchedArticle.descriptionHi : matchedArticle.contentEn || matchedArticle.descriptionEn;

  // Filter out current article to get recommendations
  const recommendedList = allArticles.filter(art => art.id !== matchedArticle.id).slice(0, 4);

  const handleReadFull = () => {
    setShowFullContent(true);
  };



  let summary = '';
  let subheading = '';
  let subdesc = '';
  let stepsHeading = '';
  let steps = [];
  let benefitsHeading = '';
  let benefits = [];

  const articleId = matchedArticle.id;

  if (articleId === 'feat-1' || articleId === 'blog-2' || articleId === 'art-3') {
    summary = lang === 'hi' 
      ? 'मिट्टी की जांच से आपको पता चलता है कि आपकी मिट्टी में कौन से पोषक तत्व की कमी है और किस फसल के लिए यह उपयुक्त है। इससे उत्पादन बढ़ता है और लागत कम होती है।'
      : 'Soil testing helps you identify which nutrients are lacking in your soil and determine the most suitable crops, boosting yields and saving costs.';
    subheading = lang === 'hi' 
      ? 'मिट्टी की जांच क्यों जरूरी है?' 
      : 'Why is Soil Testing Important?';
    subdesc = lang === 'hi' 
      ? 'मिट्टी में अलग-अलग पोषक तत्वों की मात्रा अलग होती है। ज्यादा या कम पोषक तत्व फसल की उपज को प्रभावित करते हैं। सही समय पर मिट्टी की जांच करने से आप उचित खाद और उर्वरक का उपयोग कर सकते हैं।'
      : 'Different soils contain varying levels of essential nutrients. Excess or deficiency directly affects crop yield. Timely soil testing allows you to use appropriate fertilizers and compost efficiently.';
    
    stepsHeading = lang === 'hi' ? 'मिट्टी की जांच कैसे करें? (चरण दर चरण)' : 'How to do Soil Testing? (Step by Step)';
    steps = [
      {
        step: lang === 'hi' ? 'चरण 1' : 'Step 1',
        title: lang === 'hi' ? 'मिट्टी का नमूना लें' : 'Take Sample',
        desc: lang === 'hi' ? 'खेत के अलग-अलग हिस्सों से 0-15 सेमी गहराई तक मिट्टी लें।' : 'Collect soil from different spots up to 0-15 cm depth.',
        icon: 'trowel'
      },
      {
        step: lang === 'hi' ? 'चरण 2' : 'Step 2',
        title: lang === 'hi' ? 'लैब में भेजें' : 'Send to Lab',
        desc: lang === 'hi' ? 'मिट्टी को साफ थैली में अच्छे से मिलाएं और लैब में भेजें।' : 'Mix in a clean bag thoroughly and send to the nearest lab.',
        icon: 'bucket'
      },
      {
        step: lang === 'hi' ? 'चरण 3' : 'Step 3',
        title: lang === 'hi' ? 'रिपोर्ट प्राप्त करें' : 'Get Report',
        desc: lang === 'hi' ? 'कुछ दिनों में आपको मिट्टी परीक्षण की रिपोर्ट मिल जाएगी।' : 'Get the detailed soil health card report in a few days.',
        icon: 'report'
      },
      {
        step: lang === 'hi' ? 'चरण 4' : 'Step 4',
        title: lang === 'hi' ? 'सही खाद डालें' : 'Apply Fertilizer',
        desc: lang === 'hi' ? 'रिपोर्ट के अनुसार सही खाद और उर्वरक का उपयोग करें।' : 'Apply the correct fertilizer quantity based on the report.',
        icon: 'sack'
      }
    ];
    benefitsHeading = lang === 'hi' ? 'मिट्टी जांच के फायदे' : 'Benefits of Soil Testing';
    benefits = [
      { label: lang === 'hi' ? 'उत्पादन बढ़ेगा' : 'Yield Increases', icon: 'trending-up' },
      { label: lang === 'hi' ? 'लागत कम होगी' : 'Costs Reduced', icon: 'rupee-down' },
      { label: lang === 'hi' ? 'सही खाद मिलेगी' : 'Right Fertilizer', icon: 'sprout' },
      { label: lang === 'hi' ? 'अच्छी फसल होगी' : 'Healthy Crops', icon: 'leaf' }
    ];
  } else if (articleId === 'blog-1' || articleId === 'art-1' || articleId === 'art-4') {
    summary = lang === 'hi'
      ? 'जानें कैसे ट्रैक्टर और आधुनिक कृषि यंत्रों पर पाएं 50% तक की सरकारी सब्सिडी।'
      : 'Learn how to get up to 50% government subsidy on tractors and modern machinery.';
    subheading = lang === 'hi' 
      ? 'पीएम किसान योजना के मुख्य लाभ' 
      : 'Key Benefits of PM Kisan Scheme';
    subdesc = lang === 'hi'
      ? 'पीएम किसान सम्मान निधि और अन्य सरकारी सब्सिडी योजनाएं भारत के छोटे और सीमांत किसानों के लिए एक वरदान हैं। इस योजना के तहत किसानों को हर साल ₹6,000 की वित्तीय सहायता के साथ-साथ नए कृषि उपकरणों पर 50% तक की सब्सिडी दी जाती है।'
      : 'PM Kisan Samman Nidhi and government subsidy schemes are a major support system for Indian farmers, offering Rs. 6000 financial assistance annually and up to 50% subsidies on buying tractors or implements.';
    
    stepsHeading = lang === 'hi' ? 'सब्सिडी पाने की प्रक्रिया (चरण दर चरण)' : 'How to Claim Subsidy? (Step by Step)';
    steps = [
      {
        step: lang === 'hi' ? 'चरण 1' : 'Step 1',
        title: lang === 'hi' ? 'ऑनलाइन आवेदन करें' : 'Apply Online',
        desc: lang === 'hi' ? 'पीएम किसान पोर्टल या डीबीटी कृषि विभाग की वेबसाइट पर जाएं।' : 'Register online at the official PM Kisan or DBT Agriculture portal.',
        icon: 'report'
      },
      {
        step: lang === 'hi' ? 'चरण 2' : 'Step 2',
        title: lang === 'hi' ? 'दस्तावेज अपलोड करें' : 'Upload Docs',
        desc: lang === 'hi' ? 'जमीन की खतौनी, आधार कार्ड और बैंक खाते की जानकारी अपलोड करें।' : 'Upload land ownership records, Aadhaar card, and bank passbook details.',
        icon: 'trowel'
      },
      {
        step: lang === 'hi' ? 'चरण 3' : 'Step 3',
        title: lang === 'hi' ? 'सत्यापन करवाएं' : 'Verify Details',
        desc: lang === 'hi' ? 'स्थानीय पटवारी या कृषि अधिकारी द्वारा जमीन और पात्रता का सत्यापन होगा।' : 'Wait for land verification by local authorities and patwari.',
        icon: 'bucket'
      },
      {
        step: lang === 'hi' ? 'चरण 4' : 'Step 4',
        title: lang === 'hi' ? 'सीधे बैंक में फंड पाएं' : 'Receive Funds',
        desc: lang === 'hi' ? 'सफलतापूर्वक सत्यापन के बाद योजना की राशि सीधे आपके बैंक खाते में आएगी।' : 'Get direct bank transfer of cash installments and machinery subsidies.',
        icon: 'sack'
      }
    ];
    benefitsHeading = lang === 'hi' ? 'सब्सिडी योजना के बड़े लाभ' : 'Benefits of Government Subsidy';
    benefits = [
      { label: lang === 'hi' ? 'आर्थिक मदद' : 'Financial Aid', icon: 'rupee-down' },
      { label: lang === 'hi' ? 'आधुनिक उपकरण' : 'Modern Tools', icon: 'trending-up' },
      { label: lang === 'hi' ? 'खेती आसान होगी' : 'Easier Farming', icon: 'sprout' },
      { label: lang === 'hi' ? 'आमदनी दोगुनी' : 'Income Doubles', icon: 'leaf' }
    ];
  } else {
    // Generics for other blogs
    summary = lang === 'hi'
      ? matchedArticle.descriptionHi || matchedArticle.descHi || 'इस लेख में आधुनिक खेती और ग्रामीण विकास से जुड़ी महत्वपूर्ण जानकारियां दी गई हैं।'
      : matchedArticle.descriptionEn || matchedArticle.descEn || 'This article provides key agricultural insights and tips for rural development.';
    
    subheading = lang === 'hi'
      ? 'उन्नत कृषि विधि क्यों आवश्यक है?'
      : 'Why are Modern Methods Essential?';
      
    subdesc = lang === 'hi'
      ? matchedArticle.contentHi || 'सही जानकारी और उन्नत तकनीकों का उपयोग करके किसान भाई लागत को कम कर सकते हैं और मुनाफा बढ़ा सकते हैं।'
      : matchedArticle.contentEn || 'By utilising correct guidance and advanced methods, farmers can minimize input costs and maximize profits.';
    
    stepsHeading = lang === 'hi' ? 'उन्नत कृषि कार्य विधि (चरण दर चरण)' : 'Advanced Farming Steps (Step by Step)';
    steps = [
      {
        step: lang === 'hi' ? 'चरण 1' : 'Step 1',
        title: lang === 'hi' ? 'तैयारी करें' : 'Preparation',
        desc: lang === 'hi' ? 'खेत की जुताई करें और सही बीज का चयन करें।' : 'Till the land and select high-quality seeds.',
        icon: 'trowel'
      },
      {
        step: lang === 'hi' ? 'चरण 2' : 'Step 2',
        title: lang === 'hi' ? 'बुवाई करें' : 'Sowing Seeds',
        desc: lang === 'hi' ? 'नमी का ध्यान रखकर सही गहराई पर बीज डालें।' : 'Sow seeds at correct depth with adequate moisture.',
        icon: 'bucket'
      },
      {
        step: lang === 'hi' ? 'चरण 3' : 'Step 3',
        title: lang === 'hi' ? 'उचित सिंचाई' : 'Irrigation',
        desc: lang === 'hi' ? 'फसल की आवश्यकता अनुसार ड्रिप या छिड़काव सिंचाई करें।' : 'Provide targeted water via drip or sprinkler.',
        icon: 'report'
      },
      {
        step: lang === 'hi' ? 'चरण 4' : 'Step 4',
        title: lang === 'hi' ? 'कटाई और बिक्री' : 'Harvest & Sale',
        desc: lang === 'hi' ? 'फसल पकने पर कटाई करें और मंडी में सही मूल्य पर बेचें।' : 'Harvest mature crop and sell at best market price.',
        icon: 'sack'
      }
    ];
    benefitsHeading = lang === 'hi' ? 'उन्नत विधि के लाभ' : 'Benefits of Advanced Methods';
    benefits = [
      { label: lang === 'hi' ? 'बंपर पैदावार' : 'Bumper Yield', icon: 'trending-up' },
      { label: lang === 'hi' ? 'कम लागत' : 'Low Input Cost', icon: 'rupee-down' },
      { label: lang === 'hi' ? 'पानी की बचत' : 'Water Savings', icon: 'sprout' },
      { label: lang === 'hi' ? 'बेहतर मुनाफा' : 'Higher Profit', icon: 'leaf' }
    ];
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-neutral-50 animate-fade-in">
      
      {/* Dynamic Slide-in CSS Animation & Media Queries */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Media Queries for responsive card scaling */
        @media (max-width: 480px) {
          .overlay-card-title {
            font-size: 15px !important;
          }
          .overlay-image-card {
            height: 220px !important;
          }
        }
        @media (max-width: 360px) {
          .overlay-card-title {
            font-size: 13.5px !important;
          }
          .overlay-image-card {
            height: 190px !important;
          }
        }
      `}} />

      {/* Header (Top Navigation Bar) */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 border-b border-neutral-100 bg-white/95 backdrop-blur-md z-20">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => {
              if (showFullContent) {
                setShowFullContent(false);
              } else {
                onBack();
              }
            }}
            className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 active:scale-90 transition duration-150"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5 text-neutral-800" />
          </button>
          <div>
            <h2 className="text-xs font-black text-neutral-900 leading-snug tracking-wide uppercase">
              {showFullContent ? (lang === 'hi' ? 'पूरा लेख' : 'Full Article') : (lang === 'hi' ? 'लेख पढ़ें' : 'Read Article')}
            </h2>
            <p className="text-[9px] text-neutral-400 font-bold leading-none">
              {lang === 'hi' ? 'ब्लॉग और टिप्स' : 'Blogs & Tips'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => alert(lang === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link copied to clipboard!')}
          className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 active:scale-90 transition duration-150"
          aria-label="Share"
        >
          <Share2 className="h-5 w-5 text-neutral-850" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 scrollbar-none space-y-5">
        {showFullContent ? (
          /* Card-style Layout: Image is its own card, title is below it */
          <div className="mx-4 mt-4 space-y-4">
            {/* Image Card */}
            <div className="rounded-3xl overflow-hidden bg-white border border-neutral-100 shadow-3xs">
              <img 
                src={article.imageUrl} 
                alt={title} 
                className="w-full h-52 sm:h-60 object-cover"
              />
            </div>

            {/* Heading (Dark Title below the image) */}
            <div className="px-1 pt-0.5 space-y-3">
              <h1 className="text-base sm:text-lg font-black text-neutral-900 leading-snug tracking-tight">
                {title}
              </h1>

              {/* Author / Publisher Profile and Metadata Info */}
              <div className="flex items-center space-x-3 pt-2 border-t border-neutral-100/60">
                {/* Expert Avatar */}
                <ExpertAvatar />

                {/* Author Info */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center space-x-1">
                    <span className="text-[11px] font-black text-neutral-850">
                      {lang === 'hi' ? 'कृषि विशेषज्ञ' : 'Agriculture Expert'}
                    </span>
                    <span className="inline-flex items-center justify-center bg-emerald-600 text-white rounded-full w-3.5 h-3.5 shrink-0">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </div>
                  
                  <div className="flex items-center text-[10px] text-neutral-400 font-bold mt-0.5 space-x-1.5">
                    <span>{date}</span>
                    <span>-</span>
                    <span className="flex items-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 mr-0.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-neutral-100/60">
                {/* Save Button */}
                <button
                  type="button"
                  onClick={() => setSaved(!saved)}
                  className="flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl border border-neutral-200/80 bg-white text-neutral-700 hover:bg-neutral-50 active:scale-95 transition duration-150 shadow-3xs"
                >
                  <Heart className={`h-4 w-4 ${saved ? 'text-red-500 fill-red-500 scale-110' : 'text-neutral-500'}`} />
                  <span className="text-[10px] font-black tracking-tight">
                    {lang === 'hi' ? 'सेव करें' : 'Save'}
                  </span>
                </button>

                {/* Share Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: title,
                        text: lang === 'hi' ? `Hamara Gaon ब्लॉग पढ़ें: ${title}` : `Read Hamara Gaon Blog: ${title}`,
                        url: window.location.href
                      }).catch(() => {});
                    } else {
                      alert(lang === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link copied to clipboard!');
                    }
                  }}
                  className="flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl border border-neutral-200/80 bg-white text-neutral-700 hover:bg-neutral-50 active:scale-95 transition duration-150 shadow-3xs"
                >
                  <Share2 className="h-4 w-4 text-neutral-500" />
                  <span className="text-[10px] font-black tracking-tight">
                    {lang === 'hi' ? 'शेयर करें' : 'Share'}
                  </span>
                </button>

                {/* Bookmark Button */}
                <button
                  type="button"
                  onClick={() => setBookmarked(!bookmarked)}
                  className="flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl border border-neutral-200/80 bg-white text-neutral-700 hover:bg-neutral-50 active:scale-95 transition duration-150 shadow-3xs"
                >
                  <Bookmark className={`h-4 w-4 ${bookmarked ? 'text-primary-700 fill-primary-700' : 'text-neutral-500'}`} />
                  <span className="text-[10px] font-black tracking-tight">
                    {lang === 'hi' ? 'बुकमार्क' : 'Bookmark'}
                  </span>
                </button>
              </div>

              {/* Summary Description Box (Light green-grey tinted card) */}
              <div className="bg-[#f4f7f5] rounded-2xl p-4 border border-[#e8efe9] mt-3 shadow-3xs">
                <p className="text-xs font-semibold text-neutral-700 leading-relaxed">
                  {summary}
                </p>
              </div>

              {/* Subheading (Bold Title) */}
              <div className="pt-2">
                <h2 className="text-sm sm:text-base font-black text-neutral-900 leading-snug tracking-tight">
                  {subheading}
                </h2>
              </div>

              {/* Sub-description (Second Summary/Paragraph text) */}
              <div className="pb-2">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-semibold whitespace-pre-line">
                  {subdesc}
                </p>
              </div>

              {/* How to Test / Steps Section */}
              <div className="space-y-4 pt-4 border-t border-neutral-100/60">
                {/* Section Heading */}
                <h2 className="text-sm sm:text-base font-black text-neutral-900 leading-snug tracking-tight">
                  {stepsHeading}
                </h2>

                {/* Horizontal Scrollable Step Cards Row */}
                <div className="flex overflow-x-auto space-x-3.5 scrollbar-none pb-2 -mx-1 px-1">
                  {steps.map((st, index) => (
                    <React.Fragment key={index}>
                      <div className="w-[125px] shrink-0 flex flex-col space-y-2">
                        <div className="bg-white border border-neutral-200/80 rounded-2xl p-3 shadow-3xs flex flex-col items-center justify-between h-[125px]">
                          <span className="text-[10px] font-black text-emerald-700">
                            {st.step}
                          </span>
                          <span className="text-[9px] font-black text-neutral-800 text-center line-clamp-1">
                            {st.title}
                          </span>
                          {st.icon === 'trowel' && <TrowelSVG />}
                          {st.icon === 'bucket' && <BucketSVG />}
                          {st.icon === 'report' && <ReportSVG />}
                          {st.icon === 'sack' && <SackSVG />}
                        </div>
                        <span className="text-[9px] font-semibold text-neutral-500 text-center leading-normal">
                          {st.desc}
                        </span>
                      </div>

                      {/* Connection arrow (do not show for the last step) */}
                      {index < steps.length - 1 && (
                        <div className="flex items-center pt-12 shrink-0">
                          <ChevronRight className="h-4 w-4 text-emerald-600" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="space-y-4 pt-4 border-t border-neutral-100/60 pb-2">
                {/* Section Heading */}
                <h2 className="text-sm sm:text-base font-black text-neutral-900 leading-snug tracking-tight">
                  {benefitsHeading}
                </h2>

                {/* Grid of circular benefit badges */}
                <div className="grid grid-cols-4 gap-2.5">
                  {benefits.map((bf, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1.5">
                      {bf.icon === 'trending-up' && (
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 shrink-0 shadow-3xs">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                      )}
                      {bf.icon === 'rupee-down' && <RupeeDownSVG />}
                      {bf.icon === 'sprout' && (
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 shrink-0 shadow-3xs">
                          <Sprout className="h-5 w-5" />
                        </div>
                      )}
                      {bf.icon === 'leaf' && (
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 shrink-0 shadow-3xs">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 11l2 2 4-4" />
                          </svg>
                        </div>
                      )}
                      <span className="text-[9px] font-black text-neutral-800 text-center leading-tight">
                        {bf.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Products Section */}
              <div className="space-y-4 pt-4 border-t border-neutral-100/60">
                <h2 className="text-sm sm:text-base font-black text-neutral-900 leading-snug tracking-tight">
                  {lang === 'hi' ? 'इस लेख से जुड़े प्रोडक्ट' : 'Products Related to this Article'}
                </h2>

                <div className="flex justify-between items-start pb-2">
                  {[
                    { id: 'rel-1', nameRaw: lang === 'hi' ? 'IFFCO DAP (18-46-0)' : 'IFFCO DAP (18-46-0)', price: 1350, unit: '50 kg', imageUrl: '/products/iffco_dap.png' },
                    { id: 'rel-2', nameRaw: lang === 'hi' ? 'IFFCO Nano Urea (500 ml)' : 'IFFCO Nano Urea (500 ml)', price: 220, unit: '500 ml', imageUrl: '/products/nano_urea.png' },
                    { id: 'rel-3', nameRaw: lang === 'hi' ? 'ऑर्गेनिक खाद (5 KG)' : 'Organic Compost (5 KG)', price: 180, unit: '5 KG', imageUrl: '/products/organic_compost.png' },
                    { id: 'rel-4', nameRaw: lang === 'hi' ? 'जिंक सल्फेट (33% Zn)' : 'Zinc Sulfate (33% Zn)', price: 250, unit: '5 KG', imageUrl: '/products/zinc_sulfate.png' }
                  ].map((prod, index) => (
                    <React.Fragment key={prod.id}>
                      <div className="w-[72px] shrink-0 flex flex-col space-y-1.5">
                        <div className="bg-white border border-neutral-200/80 rounded-xl p-1.5 flex items-center justify-center h-[72px] shadow-3xs overflow-hidden">
                          <img src={prod.imageUrl} alt={prod.nameRaw} className="w-full h-full object-contain" />
                        </div>

                        <div className="flex flex-col flex-1 justify-between">
                          <span className="text-[7.5px] font-black text-neutral-800 text-center leading-tight line-clamp-2 min-h-[22px]">
                            {prod.nameRaw}
                          </span>
                          <span className="text-[9.5px] font-black text-neutral-900 text-center mt-0.5">
                            ₹{prod.price}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              if (addToCart) {
                                addToCart(prod);
                                alert(lang === 'hi' ? `${prod.nameRaw} कार्ट में जोड़ा गया!` : `${prod.nameRaw} added to cart!`);
                              }
                            }}
                            className="w-full mt-1 py-1 px-0.5 bg-emerald-800 hover:bg-emerald-950 active:scale-95 transition text-[7.5px] font-black text-white rounded-lg text-center shadow-3xs"
                          >
                            {lang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'}
                          </button>
                        </div>
                      </div>

                      {/* Connection arrow (do not show for the last product) */}
                      {index < 3 && (
                        <div className="flex items-center justify-center shrink-0 self-center h-[72px] text-emerald-500 font-extrabold text-[8px] mx-0.5">
                          &gt;
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Related Articles Section */}
              <div className="space-y-4 pt-4 border-t border-neutral-100/60 pb-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm sm:text-base font-black text-neutral-900 leading-snug tracking-tight">
                    {lang === 'hi' ? 'संबंधित लेख' : 'Related Articles'}
                  </h2>
                  <button 
                    onClick={onBack}
                    className="flex items-center space-x-1.5 border border-emerald-600/70 text-emerald-700 text-[10px] font-black px-3.5 py-2 rounded-xl hover:bg-emerald-50 active:scale-95 transition shadow-3xs"
                  >
                    <span>{lang === 'hi' ? 'सभी लेख देखें' : 'View All Articles'}</span>
                    <BookOpen className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  </button>
                </div>

                <div className="space-y-3.5 mt-2.5">
                  {[
                    { title: lang === 'hi' ? 'ट्रेक्टर की सर्विस कब और क्यों जरूरी है?' : 'When & Why is Tractor Servicing Needed?', targetId: 'art-1' },
                    { title: lang === 'hi' ? 'यूरिया का सही समय और मात्रा' : 'Urea: Correct Time & Dosage', targetId: 'blog-4' },
                    { title: lang === 'hi' ? 'जैविक खेती के फायदे और तरीके' : 'Organic Farming Benefits & Methods', targetId: 'blog-6' }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => {
                        let matched = allArticles.find(a => a.id === item.targetId);
                        if (matched && onSelectArticle) {
                          onSelectArticle(matched);
                        } else {
                          alert(lang === 'hi' ? `यह लेख जल्द ही उपलब्ध होगा!` : `This article will be available soon!`);
                        }
                      }}
                      className="flex items-center space-x-2 text-xs font-black text-neutral-800 hover:text-emerald-800 cursor-pointer active:scale-[0.99] transition"
                    >
                      <span className="text-emerald-600 font-extrabold text-[10px] shrink-0">▶</span>
                      <span className="line-clamp-1 hover:underline">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Featured Image Overlay Card (Second Image Style) */
          <div className="mx-4 mt-4 relative rounded-3xl overflow-hidden bg-neutral-900 shadow-md h-60 overlay-image-card shrink-0">
            {/* Background Photo */}
            <img 
              src={article.imageUrl} 
              alt={title} 
              className="w-full h-full object-cover opacity-85"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25" />

            {/* Tag, Title, Date and Button overlayed */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
              <div>
                {/* Category tag */}
                <span className="inline-block text-[9px] font-extrabold text-white bg-primary-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Bold Title */}
                <h1 className="overlay-card-title text-base sm:text-lg font-black text-white leading-snug tracking-tight">
                  {title}
                </h1>

                {/* Date & Time */}
                <div className="flex items-center space-x-3.5 text-[9px] text-neutral-300 font-bold">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-neutral-300 shrink-0" />
                    {date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-neutral-300 shrink-0" />
                    {readTime}
                  </span>
                </div>

                {/* Green Action Button */}
                <button
                  type="button"
                  onClick={handleReadFull}
                  className="bg-primary-800 text-white text-[11px] font-black px-4.5 py-2.5 rounded-xl shadow-md hover:bg-primary-900 active:scale-95 transition flex items-center space-x-1.5 self-start mt-1"
                >
                  <span>{lang === 'hi' ? 'पूरा लेख पढ़ें' : 'Read Full Article'}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Articles Section (Only shown when not in full-text view) */}
        {!showFullContent && (
          <div className="pt-2 px-4 space-y-3.5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
              <h3 className="text-xs font-black text-neutral-800 uppercase tracking-wider">
                {lang === 'hi' ? 'अन्य महत्वपूर्ण लेख' : 'More Helpful Articles'}
              </h3>
              <span className="text-[10px] text-neutral-400 font-bold">
                {recommendedList.length} {lang === 'hi' ? 'लेख' : 'articles'}
              </span>
            </div>
            
            <div className="space-y-3">
              {recommendedList.map(rec => {
                const recTitle = lang === 'hi' ? rec.titleHi : rec.titleEn;
                const recTag = lang === 'hi' ? rec.categoryNameHi : rec.categoryNameEn;
                const recDate = lang === 'hi' ? rec.dateHi : rec.dateEn;
                const recRead = lang === 'hi' ? rec.readTimeHi : rec.readTimeEn;
                
                return (
                  <div
                    key={rec.id}
                    onClick={() => onSelectArticle && onSelectArticle(rec)}
                    className="flex items-center rounded-2xl border border-neutral-100 bg-white p-3 shadow-3xs hover:shadow-xs hover:border-neutral-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer transition duration-200"
                  >
                    {/* Left Side Image */}
                    <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-100 shadow-3xs">
                      <img 
                        src={rec.imageUrl} 
                        alt={recTitle} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Right Side Content */}
                    <div className="flex-1 pl-3.5 pr-1 flex flex-col justify-between h-16">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-lg uppercase tracking-wider">
                          {recTag}
                        </span>
                        <ChevronRight className="h-4 w-4 text-neutral-400" />
                      </div>
                      
                      <h4 className="text-xs font-black text-neutral-800 leading-snug line-clamp-1">
                        {recTitle}
                      </h4>
                      
                      <div className="flex-1 flex items-end">
                        <div className="flex items-center space-x-2 text-[8px] text-neutral-400 font-bold mt-0.5">
                          <span>{recDate}</span>
                          <span>·</span>
                          <span>{recRead}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
