import React, { useState } from 'react';
import { Heart, ChevronRight } from 'lucide-react';

export default function LatestBlogsView({ lang, onSelectBlog, onViewAll }) {
  // Local state for toggling liked/bookmarked blogs
  const [bookmarked, setBookmarked] = useState({});

  const blogsData = [
    {
      id: 'blog-1',
      titleHi: 'PM किसान योजना और सरकारी सब्सिडी',
      titleEn: 'PM Kisan Scheme & Govt Subsidies',
      dateHi: '25 जून 2026',
      dateEn: '25 June 2026',
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80',
      descriptionHi: 'जानें कैसे ट्रैक्टर और आधुनिक कृषि यंत्रों पर पाएं 50% तक की सरकारी सब्सिडी।',
      descriptionEn: 'Learn how to get up to 50% government subsidy on tractors and modern machinery.',
      contentHi: `पीएम किसान सम्मान निधि और अन्य सरकारी योजनाएं भारत के छोटे और सीमांत किसानों के लिए एक वरदान हैं। 

इस योजना के मुख्य लाभ:
1. वित्तीय सहायता: हर साल किसानों को ₹6,000 की राशि सीधे उनके बैंक खाते में ट्रांसफर की जाती है।
2. कृषि यंत्रों पर 50% सब्सिडी: इसके अतिरिक्त, सब-मिशन ऑन एग्रीकल्चरल मैकेनाइजेशन (SMAM) के तहत किसानों को नए ट्रैक्टर, रोटावेटर और सीड ड्रिल खरीदने पर 50% तक की सब्सिडी मिलती है।
3. कस्टम हायरिंग सेंटर: यदि आप उपकरण नहीं खरीद सकते, तो सरकार आपको बहुत कम किराए पर मशीनें दिलाने में मदद करती है।`,
      contentEn: `PM Kisan Samman Nidhi and other government subsidy schemes are a boon for small and marginal Indian farmers.

Key Benefits of the Scheme:
1. Financial Support: Farmers receive ₹6,000 annually directly in their bank accounts.
2. 50% Subsidy on Machinery: Under the Sub-Mission on Agricultural Mechanization (SMAM), you can get up to 50% subsidy to buy tractors, rotavators, and seed drills.
3. Custom Hiring Centers: If you cannot afford to purchase machinery, the government helps you rent it at highly subsidized rates.`
    },
    {
      id: 'blog-2',
      titleHi: 'मिट्टी की जांच (Soil Test) के बड़े फायदे',
      titleEn: 'Benefits of Soil Testing for Crop Yield',
      dateHi: '22 जून 2026',
      dateEn: '22 June 2026',
      imageUrl: 'https://images.unsplash.com/photo-1464225226614-760ff27a6721?w=400&auto=format&fit=crop&q=80',
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
2. कीड़ों के चक्र को तोड़ना: फसल बदलने से विशिष्ट कीटों को भोजन मिलना बंद हो जाता है, जिससे उनकी संख्या कम होती है।
3. मिट्टी की संरचना में सुधार: अलग-अलग गहराई वाली जड़ें मिट्टी को भुरभुरा और उपजाऊ बनाए रखती हैं।`,
      contentEn: `Sowing the same crop continuously depletes soil nutrients and increases pest attacks.

Benefits of Crop Rotation:
1. Nitrogen Fixation: Growing legumes (pulses) after cereal crops naturally restores soil nitrogen levels.
2. Pest Cycle Disruption: Changing the crop deprives specific pests of their preferred host, controlling populations.
3. Better Soil Structure: Crops with different root depths improve soil aeration and water retention.`
    },
    {
      id: 'blog-6',
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
    }
  ];

  const toggleBookmark = (id) => {
    setBookmarked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBlogClick = (blog) => {
    if (onSelectBlog) {
      onSelectBlog(blog);
    }
  };

  return (
    <div className="pt-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-black text-neutral-900">
          {lang === 'hi' ? 'लेटेस्ट ब्लॉग और टिप्स' : 'Latest Blogs & Tips'}
        </h3>
        <button 
          type="button"
          onClick={() => onViewAll && onViewAll()}
          className="text-xs font-black text-emerald-700 hover:text-emerald-800 flex items-center transition"
        >
          <span>{lang === 'hi' ? 'सभी देखें' : 'View All'}</span>
          <ChevronRight className="h-4 w-4 ml-0.5" />
        </button>
      </div>

      {/* Horizontal Scroll wrapper */}
      <div className="flex space-x-3.5 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-none">
        {blogsData.map(blog => {
          const isLiked = !!bookmarked[blog.id];
          const title = lang === 'hi' ? blog.titleHi : blog.titleEn;
          const date = lang === 'hi' ? blog.dateHi : blog.dateEn;
          const desc = lang === 'hi' ? blog.descriptionHi : blog.descriptionEn;

          return (
            <div 
              key={blog.id} 
              onClick={() => handleBlogClick(blog)}
              className="relative w-48 shrink-0 rounded-2xl bg-white border border-neutral-100 p-2 shadow-3xs flex flex-col justify-between cursor-pointer hover:shadow-xs hover:border-neutral-200 transition duration-200"
            >
              {/* Blog Image */}
              <div className="relative w-full h-24 overflow-hidden rounded-xl bg-neutral-50 shrink-0">
                <img 
                  src={blog.imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a general agricultural photo if the keyword load fails
                    e.target.src = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80';
                  }}
                />
                
                {/* Wishlist Heart Icon */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark(blog.id);
                  }}
                  className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/90 shadow-3xs text-neutral-400 hover:text-red-500 transition active:scale-[0.9]"
                >
                  <Heart className={`h-3.5 w-3.5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-neutral-400'}`} />
                </button>
              </div>

              {/* Blog Info */}
              <div className="pt-2 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-black text-neutral-800 leading-snug line-clamp-2">
                    {title}
                  </h4>
                  <p className="text-[10px] text-neutral-400 font-bold mt-1 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-neutral-50 text-[9px] text-neutral-400 font-bold">
                  {date}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
