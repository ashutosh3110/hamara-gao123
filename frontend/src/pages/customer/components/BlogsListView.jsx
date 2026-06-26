import React, { useState } from 'react';
import { ArrowLeft, Search, Bookmark, Clock, Calendar, Check, Bell } from 'lucide-react';

export default function BlogsListView({ lang, onBack, onSelectArticle }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { id: 'all', nameHi: 'सभी', nameEn: 'All', icon: '🎛️' },
    { id: 'farming', nameHi: 'खेती की टिप्स', nameEn: 'Farming Tips', icon: '🌱' },
    { id: 'tractor', nameHi: 'ट्रैक्टर गाइड', nameEn: 'Tractor Guide', icon: '🚜' },
    { id: 'animal', nameHi: 'पशु पालन', nameEn: 'Animal Care', icon: '🐄' },
    { id: 'machinery', nameHi: 'मशीनरी', nameEn: 'Machinery', icon: '⚙️' }
  ];

  const featuredArticle = {
    id: 'feat-1',
    category: 'farming',
    categoryNameHi: 'खेती की टिप्स',
    categoryNameEn: 'Farming Tips',
    tagHi: 'फीचर्ड आर्टिकल',
    tagEn: 'Featured Article',
    titleHi: 'मिट्टी की जाँच क्यों जरूरी है और यह कैसे करें?',
    titleEn: 'Why Soil Testing is Essential and How to Do It?',
    descHi: 'मिट्टी की जाँच से आपको पता चलता है कि आपकी मिट्टी में कौन से पोषक तत्व की कमी है और किस फसल के लिए यह उपयुक्त है।',
    descEn: 'Soil testing helps you discover nutrient deficiencies in your soil and determine crop suitability.',
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
  };

  const articles = [
    {
      id: 'blog-1',
      category: 'tractor',
      categoryNameHi: 'PM किसान योजना',
      categoryNameEn: 'PM Kisan Scheme',
      titleHi: 'PM किसान योजना और सरकारी सब्सिडी',
      titleEn: 'PM Kisan Scheme & Govt Subsidies',
      descHi: 'जानें कैसे ट्रैक्टर और आधुनिक कृषि यंत्रों पर पाएं 50% तक की सरकारी सब्सिडी।',
      descEn: 'Learn how to get up to 50% government subsidy on tractors and modern machinery.',
      dateHi: '25 जून 2026',
      dateEn: '25 June 2026',
      readTimeHi: '5 मिनट पढ़ें',
      readTimeEn: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&auto=format&fit=crop&q=80',
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
      id: 'art-1',
      category: 'tractor',
      categoryNameHi: 'ट्रैक्टर गाइड',
      categoryNameEn: 'Tractor Guide',
      titleHi: 'ट्रैक्टर की सर्विस कब और क्यों जरूरी है?',
      titleEn: 'When & Why is Tractor Servicing Needed?',
      descHi: 'समय पर सर्विसिंग से ट्रैक्टर की लाइफ बढ़ती है और डीजल की खपत कम होती है।',
      descEn: 'Regular tractor maintenance increases engine lifespan and saves fuel costs.',
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
      category: 'animal',
      categoryNameHi: 'पशु पालन',
      categoryNameEn: 'Animal Care',
      titleHi: 'पशुओं को गर्मी में क्या खिलाएं?',
      titleEn: 'What to Feed Cattle in Summer?',
      descHi: 'गर्मी के मौसम में दुधारू पशुओं की देखभाल और उनके संतुलित आहार का विशेष ध्यान रखें।',
      descEn: 'Take special care of milking cattle and their balanced nutrition during dry summer months.',
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
      category: 'farming',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'बेहतर उपज के लिए मिट्टी की जाँच कैसे करें?',
      titleEn: 'How to Do Soil Testing for Yield?',
      descHi: 'मिट्टी की जाँच के लिए नमूना लेने की पूरी विधि और लैब रिपोर्ट को समझने की आसान जानकारी।',
      descEn: 'Detailed guide to collecting soil samples and interpreting laboratory test reports.',
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
      category: 'machinery',
      categoryNameHi: 'मशीनरी',
      categoryNameEn: 'Machinery',
      titleHi: 'खेती के लिए सही मशीन का चुनाव कैसे करें?',
      titleEn: 'How to Choose Right Farming Tools?',
      descHi: 'अपनी जरूरत और बजट के हिसाब से रोटावेटर, कल्टीवेटर और सीड ड्रिल मशीन चुनने की टिप्स।',
      descEn: 'Tips on selecting rotavators, cultivators, and seed drills according to your budget.',
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
      category: 'farming',
      categoryNameHi: 'खेती की टिप्स',
      categoryNameEn: 'Farming Tips',
      titleHi: 'कपास की खेती: पूरी जानकारी A से Z तक',
      titleEn: 'Cotton Farming: Complete A to Z Guide',
      descHi: 'कपास की बुवाई, उन्नत किस्मों का चयन, खाद प्रबंधन और कीटों से सुरक्षा के आसान उपाय।',
      descEn: 'Sowing methods, high-yield varieties, fertilizer schedules, and pest control for cotton.',
      dateHi: '8 मई 2024',
      dateEn: '8 May 2024',
      readTimeHi: '7 मिनट पढ़ें',
      readTimeEn: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1594900010992-d6a13c9e6931?w=400&auto=format&fit=crop&q=80',
      contentHi: 'कपास (नरमा) की खेती में खरपतवार नियंत्रण और गुलाबी सुंडी से बचाव के उन्नत उपाय...',
      contentEn: 'Effective weed management and preventive steps against pink bollworm in cotton farming...'
    }
  ];

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(item => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    alert(lang === 'hi' ? 'साप्ताहिक सुझावों के लिए आपका पंजीकरण सफल रहा!' : 'Subscribed successfully for weekly tips!');
  };

  // Filter logic
  const filteredArticles = articles.filter(art => {
    // Category match
    const catMatch = activeCategory === 'all' || art.category === activeCategory;
    // Search match
    const titleText = (lang === 'hi' ? art.titleHi : art.titleEn).toLowerCase();
    const descText = (lang === 'hi' ? art.descHi : art.descEn).toLowerCase();
    const queryText = searchQuery.toLowerCase();
    const searchMatch = titleText.includes(queryText) || descText.includes(queryText);
    
    return catMatch && searchMatch;
  });

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-neutral-50 animate-fade-in">
      
      {/* Styles & Transitions */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @media (max-width: 480px) {
          .list-title {
            font-size: 12px !important;
          }
          .list-desc {
            font-size: 10px !important;
          }
        }
      `}} />

      {/* Search Toggle Header */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 border-b border-neutral-100 bg-white">
        <div className="flex items-center space-x-3 w-full">
          <button
            type="button"
            onClick={onBack}
            className="p-1.5 rounded-xl text-neutral-700 hover:bg-neutral-100 active:scale-90 transition duration-150 shrink-0"
          >
            <ArrowLeft className="h-5 w-5 text-neutral-800" />
          </button>
          {!searchOpen ? (
            <div className="truncate">
              <h2 className="text-sm font-black text-neutral-900 leading-snug truncate">
                {lang === 'hi' ? 'ब्लॉग और टिप्स' : 'Blogs & Tips'}
              </h2>
              <p className="text-[9px] text-neutral-400 font-bold leading-none truncate">
                {lang === 'hi' ? 'कृषि से जुड़ी जानकारी, सुझाव और ताजा अपडेट' : 'Agri info, tips, and latest updates'}
              </p>
            </div>
          ) : (
            <input
              type="text"
              placeholder={lang === 'hi' ? "सर्च करें..." : "Search articles..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-xs px-2.5 py-1 border border-neutral-200 rounded-lg outline-none bg-transparent"
              autoFocus
            />
          )}
        </div>
        
        <button
          type="button"
          onClick={() => {
            setSearchOpen(!searchOpen);
            if (searchOpen) setSearchQuery('');
          }}
          className="p-1.5 rounded-xl text-neutral-700 hover:bg-neutral-100 transition active:scale-95 shrink-0 ml-2"
        >
          <Search className="h-5 w-5 text-neutral-850" />
        </button>
      </div>

      {/* Main Body */}
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-4.5 scrollbar-none">
        
        {/* Categories Tab Scroll */}
        <div className="flex space-x-2.5 overflow-x-auto pb-1.5 -mx-1 px-1 scrollbar-none shrink-0">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            const name = lang === 'hi' ? cat.nameHi : cat.nameEn;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition shrink-0 active:scale-95 duration-150 ${
                  isActive 
                    ? 'bg-emerald-800 text-white shadow-[0_4px_12px_rgba(6,95,70,0.15)]' 
                    : 'bg-white border border-neutral-100 text-neutral-600 hover:border-neutral-200 shadow-3xs'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Article Card */}
        {activeCategory === 'all' && searchQuery === '' && (
          <div className="relative rounded-[24px] overflow-hidden bg-white border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col hover:shadow-xs hover:border-neutral-200/80 transition duration-300">
            {/* Tag */}
            <div className="absolute top-4 left-4 z-10 bg-emerald-800 text-white text-[8px] font-black px-2.5 py-0.5 rounded-lg uppercase tracking-wider">
              {lang === 'hi' ? featuredArticle.tagHi : featuredArticle.tagEn}
            </div>

            {/* Split layout (Text Left, Image Right) */}
            <div className="p-4.5 flex items-start space-x-3.5 mt-2">
              <div className="flex-1 space-y-2.5">
                <h3 
                  onClick={() => onSelectArticle && onSelectArticle(featuredArticle)}
                  className="text-xs font-black text-neutral-850 leading-snug mt-4 cursor-pointer hover:text-emerald-850 hover:underline line-clamp-2"
                >
                  {lang === 'hi' ? featuredArticle.titleHi : featuredArticle.titleEn}
                </h3>
                <p className="text-[10px] text-neutral-450 font-bold leading-relaxed line-clamp-3">
                  {lang === 'hi' ? featuredArticle.descHi : featuredArticle.descEn}
                </p>
                
                {/* Meta details */}
                <div className="flex items-center space-x-3.5 text-[9px] text-neutral-400 font-bold">
                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1 shrink-0" /> {lang === 'hi' ? featuredArticle.dateHi : featuredArticle.dateEn}</span>
                  <span className="flex items-center"><Clock className="h-3 w-3 mr-1 shrink-0" /> {lang === 'hi' ? featuredArticle.readTimeHi : featuredArticle.readTimeEn}</span>
                </div>

                {/* Read Full Article Button */}
                <button
                  type="button"
                  onClick={() => onSelectArticle && onSelectArticle(featuredArticle)}
                  className="inline-flex items-center space-x-1 bg-emerald-800 text-white text-[10px] font-black px-3.5 py-1.5 rounded-xl shadow-xs hover:bg-emerald-900 active:scale-95 transition"
                >
                  <span>{lang === 'hi' ? 'पूरा लेख पढ़ें' : 'Read Full Article'}</span>
                  <span>→</span>
                </button>
              </div>

              {/* Plant Image */}
              <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden mt-4 shadow-3xs border border-neutral-100">
                <img 
                  src={featuredArticle.imageUrl} 
                  alt="Featured" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        {/* Recent Articles Header */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
          <h3 className="text-[10px] font-black text-neutral-900 uppercase tracking-wider">
            {lang === 'hi' ? 'हाल के आर्टिकल' : 'Recent Articles'}
          </h3>
          <span className="text-[9px] text-neutral-400 font-bold">
            {filteredArticles.length} {lang === 'hi' ? 'लेख मिले' : 'articles found'}
          </span>
        </div>

        {/* Articles List */}
        <div className="space-y-3 pb-3">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-8 text-xs text-neutral-400 font-semibold bg-white rounded-2xl border border-neutral-100 p-4">
              {lang === 'hi' ? 'कोई आर्टिकल नहीं मिला!' : 'No articles found!'}
            </div>
          ) : (
            filteredArticles.map(art => {
              const isBookmarked = bookmarkedIds.includes(art.id);
              const title = lang === 'hi' ? art.titleHi : art.titleEn;
              const desc = lang === 'hi' ? art.descHi : art.descEn;
              const tag = lang === 'hi' ? art.categoryNameHi : art.categoryNameEn;
              const date = lang === 'hi' ? art.dateHi : art.dateEn;
              const read = lang === 'hi' ? art.readTimeHi : art.readTimeEn;

              return (
                <div
                  key={art.id}
                  onClick={() => onSelectArticle && onSelectArticle(art)}
                  className="flex items-center rounded-2xl border border-neutral-100 bg-white p-3 shadow-3xs hover:shadow-xs hover:border-neutral-250 hover:scale-[1.01] active:scale-[0.99] cursor-pointer transition-all duration-200"
                >
                  {/* Left Square Image */}
                  <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-100 shadow-3xs">
                    <img 
                      src={art.imageUrl} 
                      alt={title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 pl-3.5 pr-1 flex flex-col justify-between h-16">
                    <div className="flex items-center justify-between">
                      {/* Tag label */}
                      <span className="text-[8px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-lg uppercase tracking-wider">
                        {tag}
                      </span>
                      {/* Bookmark Icon */}
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(art.id, e)}
                        className="text-neutral-400 hover:text-emerald-700 active:scale-90 transition p-0.5"
                      >
                        <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-emerald-800 text-emerald-800' : ''}`} />
                      </button>
                    </div>

                    <h4 className="list-title text-xs font-black text-neutral-800 leading-snug line-clamp-1">
                      {title}
                    </h4>
                    <p className="list-desc text-[10px] text-neutral-440 font-bold leading-normal line-clamp-1">
                      {desc}
                    </p>

                    <div className="flex items-center space-x-2.5 text-[8px] text-neutral-400 font-bold mt-0.5">
                      <span>{date}</span>
                      <span>·</span>
                      <span>{read}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Subscribe Banner Callout */}
        <div className="bg-emerald-50/40 border border-emerald-100/60 rounded-3xl p-4.5 flex flex-col sm:flex-row items-center justify-between shadow-3xs gap-3">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-xs font-black text-neutral-800">
              {lang === 'hi' ? 'साप्ताहिक कृषि सुझाव पाएं' : 'Get Weekly Agri-Tips'}
            </h4>
            <p className="text-[9.5px] text-neutral-500 font-bold leading-normal max-w-xs">
              {lang === 'hi' 
                ? 'हर हफ्ते नए आर्टिकल और खेती से जुड़ी उपयोगी जानकारी अपने मोबाइल पर पाएं।' 
                : 'Get fresh articles and practical farming guides delivered to your phone weekly.'
              }
            </p>
          </div>

          <button
            type="button"
            onClick={handleSubscribe}
            disabled={subscribed}
            className={`flex items-center space-x-1.5 text-[10px] font-black px-4 py-2 rounded-xl shadow-xs transition active:scale-[0.95] shrink-0 ${
              subscribed 
                ? 'bg-neutral-200 text-neutral-500 cursor-default' 
                : 'bg-emerald-800 text-white hover:bg-emerald-900'
            }`}
          >
            {subscribed ? <Check className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
            <span>{subscribed ? (lang === 'hi' ? 'पंजीकृत' : 'Subscribed') : (lang === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe')}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
