import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  MapPin, 
  ChevronDown, 
  Bell, 
  Search, 
  SlidersHorizontal, 
  Plus, 
  Minus, 
  Trash2, 
  User, 
  LogOut, 
  Globe,
  ArrowLeft
} from 'lucide-react';
import { logout } from '@/redux/slices/authSlice';

// Import modular sub-components
import ProductImage from './components/ProductImage';
import TractorBrandsView from './components/TractorBrandsView';
import TractorModelsView from './components/TractorModelsView';
import TractorPartsView from './components/TractorPartsView';
import EnginePartsView from './components/EnginePartsView';
import ClutchPartsView from './components/ClutchPartsView';
import PartDetailView from './components/PartDetailView';
import VegetablesCategoryView from './components/VegetablesCategoryView';
import CategoriesGrid from './components/CategoriesGrid';
import TrustBadges from './components/TrustBadges';
import BestSellingProducts from './components/BestSellingProducts';
import LatestBlogsView from './components/LatestBlogsView';
import BlogsListView from './components/BlogsListView';
import BlogDetailView from './components/BlogDetailView';
import BottomNavigation from './components/BottomNavigation';

const localTranslations = {
  hi: {
    locationLabel: "मेरा गाँव, हरदा",
    greeting: "नमस्ते, ",
    fallbackName: "रमेश",
    subgreeting: "आज आप क्या खरीदना चाहेंगे?",
    searchPlaceholder: "उत्पादों, ब्रांडों और अधिक के लिए खोजें...",
    categories: {
      vegetables: "सब्जियां",
      vegetablesSub: "ताजा और जैविक सब्जियां",
      tractor: "ट्रैक्टर",
      tractorSub: "ट्रैक्टर और स्पेयर पार्ट्स",
      fertilizer: "खाद",
      fertilizerSub: "सभी प्रकार की खाद",
      animalFood: "पशु आहार",
      animalFoodSub: "आपके पशुओं के लिए पौष्टिक भोजन",
      machinery: "मशीनरी",
      machinerySub: "कृषि मशीनरी & उपकरण",
      bulkOrder: "थोक आर्डर",
      bulkOrderSub: "थोक ऑर्डर करें और शानदार छूट पाएं",
      orderNow: "अभी आर्डर करें"
    },
    badges: {
      delivery: "तेज़ डिलीवरी",
      deliverySub: "आपके घर तक",
      prices: "सर्वोत्तम मूल्य",
      pricesSub: "अधिक बचत करें",
      quality: "विश्वसनीय गुणवत्ता",
      qualitySub: "100% असली उत्पाद"
    },
    bestSelling: "सबसे ज्यादा बिकने वाले उत्पाद",
    viewAll: "सभी देखें",
    nav: {
      home: "होम",
      orders: "ऑर्डर",
      cart: "कार्ट",
      wishlist: "विशलिस्ट",
      profile: "प्रोफ़ाइल"
    },
    cart: {
      title: "आपका कार्ट",
      empty: "आपका कार्ट खाली है!",
      checkout: "ऑर्डर सबमिट करें",
      total: "कुल राशि",
      itemsCount: "उत्पाद"
    },
    orders: {
      title: "आपके ऑर्डर्स",
      empty: "कोई ऑर्डर नहीं मिला!",
      orderId: "ऑर्डर संख्या",
      status: "स्थिति",
      delivered: "पहुंचाया गया",
      pending: "लंबित",
      shipping: "रास्ते में"
    },
    profile: {
      title: "प्रोफ़ाइल विवरण",
      email: "ईमेल आईडी",
      phone: "मोबाइल नंबर",
      role: "भूमिका",
      logoutBtn: "लॉगआउट करें"
    },
    products: {
      tomatoes: "ताजा लाल टमाटर",
      dap: "IFFCO DAP खाद",
      nanoUrea: "IFFCO नैनो यूरिया",
      wheat: "शरबती गेहूं",
      potatoes: "आलू (नई फसल)",
      onion: "लाल प्याज़",
      ladyfinger: "हरी भिंडी",
      cauliflower: "फूलगोभी",
      greenpeas: "ताजी हरी मटर",
      spinach: "पालक भाजी",
      carrot: "लाल गाजर"
    }
  },
  en: {
    locationLabel: "Mera Gaon, Harda",
    greeting: "Namaste, ",
    fallbackName: "Ramesh",
    subgreeting: "What would you like to order today?",
    searchPlaceholder: "Search for products, brands and more...",
    categories: {
      vegetables: "Vegetables",
      vegetablesSub: "Fresh & Organic Vegetables",
      tractor: "Tractor",
      tractorSub: "Tractor & Spare Parts",
      fertilizer: "Fertilizer",
      fertilizerSub: "All Types of Fertilizers",
      animalFood: "Animal Food",
      animalFoodSub: "Nutritious Food for Your Animals",
      machinery: "Machinery",
      machinerySub: "Agriculture Machinery & Tools",
      bulkOrder: "Bulk Order",
      bulkOrderSub: "Place bulk order and get exciting discounts",
      orderNow: "Order Now"
    },
    badges: {
      delivery: "Fast Delivery",
      deliverySub: "At Your Doorstep",
      prices: "Best Prices",
      pricesSub: "Save More",
      quality: "Trusted Quality",
      qualitySub: "100% Genuine"
    },
    bestSelling: "Best Selling Products",
    viewAll: "View All",
    nav: {
      home: "Home",
      orders: "Orders",
      cart: "Cart",
      wishlist: "Wishlist",
      profile: "Profile"
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty!",
      checkout: "Checkout Now",
      total: "Total",
      itemsCount: "items"
    },
    orders: {
      title: "Your Orders",
      empty: "No orders found!",
      orderId: "Order ID",
      status: "Status",
      delivered: "Delivered",
      pending: "Pending",
      shipping: "Shipping"
    },
    profile: {
      title: "Profile Details",
      email: "Email Address",
      phone: "Phone Number",
      role: "User Role",
      logoutBtn: "Log Out"
    },
    products: {
      tomatoes: "Fresh Tomatoes",
      dap: "IFFCO DAP Fertilizer",
      nanoUrea: "IFFCO Nano Urea",
      wheat: "Sharbati Wheat",
      potatoes: "Fresh Potato",
      onion: "Red Onion",
      ladyfinger: "Lady Finger (Okra)",
      cauliflower: "Cauliflower",
      greenpeas: "Green Peas",
      spinach: "Fresh Spinach",
      carrot: "Fresh Carrot"
    }
  }
};

export default function CustomerDashboard() {
  const [lang, setLang] = useState('hi');
  const [time, setTime] = useState('09:41');
  const [activeTab, setActiveTab] = useState('home'); // home, orders, cart, wishlist, profile
  const [currentCategory, setCurrentCategory] = useState(null); // null or 'vegetables'
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPartCategory, setSelectedPartCategory] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Cart & Wishlist States
  const [cart, setCart] = useState([
    { id: 'prod-1', nameKey: 'tomatoes', price: 40, unit: '1 kg', quantity: 1, imageType: 'tomatoes' },
    { id: 'prod-3', nameKey: 'nanoUrea', price: 225, unit: '500 ml', quantity: 2, imageType: 'nanoUrea' }
  ]);
  const [wishlist, setWishlist] = useState(['prod-1', 'prod-2']);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const t = localTranslations[lang];

  // Helper products data
  const products = [
    { id: 'prod-1', nameKey: 'tomatoes', price: 40, unit: '1 kg', imageType: 'tomatoes' },
    { id: 'prod-2', nameKey: 'dap', price: 1350, unit: '50 kg', imageType: 'dap' },
    { id: 'prod-3', nameKey: 'nanoUrea', price: 225, unit: '500 ml', imageType: 'nanoUrea' },
    { id: 'prod-4', nameKey: 'wheat', price: 1600, unit: '50 kg', imageType: 'wheat' }
  ];

  // Vegetable subpage products
  const vegetableProducts = [
    { id: 'veg-1', nameKey: 'tomatoes', price: 40, unit: '1 kg', imageType: 'tomatoes', imageUrl: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&auto=format&fit=crop&q=80' },
    { id: 'veg-2', nameKey: 'potatoes', price: 30, unit: '1 kg', imageType: 'potatoes', imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&auto=format&fit=crop&q=80' },
    { id: 'veg-3', nameKey: 'onion', price: 35, unit: '1 kg', imageType: 'onion', imageUrl: 'https://images.unsplash.com/photo-1508747703725-719ae2c13d4b?w=400&auto=format&fit=crop&q=80' },
    { id: 'veg-4', nameKey: 'ladyfinger', price: 50, unit: '1 kg', imageType: 'ladyfinger', imageUrl: 'https://images.unsplash.com/photo-1627702812089-8d14878a83d3?w=400&auto=format&fit=crop&q=80' },
    { id: 'veg-5', nameKey: 'cauliflower', price: 45, unit: '1 piece', imageType: 'cauliflower', imageUrl: 'https://images.unsplash.com/photo-1568584711291-75041598f652?w=400&auto=format&fit=crop&q=80' },
    { id: 'veg-6', nameKey: 'greenpeas', price: 60, unit: '1 kg', imageType: 'greenpeas', imageUrl: 'https://images.unsplash.com/photo-1592394533824-9440e5d68530?w=400&auto=format&fit=crop&q=80' },
    { id: 'veg-7', nameKey: 'spinach', price: 20, unit: '1 bunch', imageType: 'spinach', imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop&q=80' },
    { id: 'veg-8', nameKey: 'carrot', price: 40, unit: '1 kg', imageType: 'carrot', imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&auto=format&fit=crop&q=80' }
  ];

  // Tractor subpage products
  const tractorProducts = [
    { id: 'trac-1', name: 'Mahindra & Mahindra', imageUrl: '/tractors/mahindra_tractor.png', tagHi: '50% सब्सिडी', tagEn: '50% Subsidy' },
    { id: 'trac-2', name: 'TAFE', imageUrl: '/tractors/tafe_tractor.png', tagHi: 'सर्वोत्तम माइलेज', tagEn: 'Best Mileage' },
    { id: 'trac-3', name: 'Sonalika', imageUrl: '/tractors/sonalika_tractor.png', tagHi: 'सबसे लोकप्रिय', tagEn: 'Most Popular' },
    { id: 'trac-4', name: 'Escorts Kubota', imageUrl: '/tractors/escorts_kubota_tractor.png', tagHi: 'किराये पर उपलब्ध', tagEn: 'Available for Rent' },
    { id: 'trac-5', name: 'John Deere India', imageUrl: '/tractors/john_deere_tractor.png', tagHi: 'हैवी ड्यूटी', tagEn: 'Heavy Duty' },
    { id: 'trac-6', name: 'New Holland Agriculture', imageUrl: '/tractors/new_holland_tractor.png', tagHi: 'नया मॉडल', tagEn: 'New Model' },
    { id: 'trac-7', name: 'Massey Ferguson', imageUrl: '/tractors/massey_ferguson_tractor.png', tagHi: 'सदाबहार पिक', tagEn: 'Classic Pick' },
    { id: 'trac-8', name: 'Swaraj Tractors', imageUrl: '/tractors/swaraj_tractor.png', tagHi: 'लोकल सपोर्ट', tagEn: 'Local Support' },
    { id: 'trac-9', name: 'Eicher Tractors', imageUrl: '/tractors/eicher_tractor.png', tagHi: 'किफायती', tagEn: 'Affordable' },
    { id: 'trac-10', name: 'Powertrac', imageUrl: '/tractors/powertrac_tractor.png', tagHi: 'सुपर पावर', tagEn: 'Super Power' },
    { id: 'trac-11', name: 'Farmtrac', imageUrl: '/tractors/mahindra_tractor.png', tagHi: 'सब्सिडी योग्य', tagEn: 'Subsidy Eligible' },
    { id: 'trac-12', name: 'Kubota', imageUrl: '/tractors/tafe_tractor.png', tagHi: 'जापानी तकनीक', tagEn: 'Japanese Tech' },
    { id: 'trac-13', name: 'Captain Tractors', imageUrl: '/tractors/sonalika_tractor.png', tagHi: 'छोटा ट्रैक्टर', tagEn: 'Mini Tractor' },
    { id: 'trac-14', name: 'ACE Tractors', imageUrl: '/tractors/escorts_kubota_tractor.png', tagHi: 'मल्टीपर्पस', tagEn: 'Multipurpose' },
    { id: 'trac-15', name: 'Preet Tractors', imageUrl: '/tractors/john_deere_tractor.png', tagHi: 'भारतीय तकनीक', tagEn: 'Indian Tech' },
    { id: 'trac-16', name: 'VST Tillers Tractors', imageUrl: '/tractors/new_holland_tractor.png', tagHi: 'टेलर स्पेशल', tagEn: 'Tiller Special' },
    { id: 'trac-17', name: 'Indo Farm Equipment', imageUrl: '/tractors/massey_ferguson_tractor.png', tagHi: 'दमदार इंजन', tagEn: 'Strong Engine' },
    { id: 'trac-18', name: 'Force Motors', imageUrl: '/tractors/swaraj_tractor.png', tagHi: 'भरोसेमंद', tagEn: 'Reliable' },
    { id: 'trac-19', name: 'HMT Tractors', imageUrl: '/tractors/eicher_tractor.png', tagHi: 'पारंपरिक', tagEn: 'Traditional' },
    { id: 'trac-20', name: 'Same Deutz-Fahr', imageUrl: '/tractors/powertrac_tractor.png', tagHi: 'जर्मन तकनीक', tagEn: 'German Tech' },
    { id: 'trac-21', name: 'Valtra', imageUrl: '/tractors/mahindra_tractor.png', tagHi: 'आधुनिक', tagEn: 'Modern' },
    { id: 'trac-22', name: 'CLAAS', imageUrl: '/tractors/tafe_tractor.png', tagHi: 'हैवी मशीनरी', tagEn: 'Heavy Machinery' },
    { id: 'trac-23', name: 'Fendt', imageUrl: '/tractors/sonalika_tractor.png', tagHi: 'प्रीमियम', tagEn: 'Premium' },
    { id: 'trac-24', name: 'Case IH', imageUrl: '/tractors/escorts_kubota_tractor.png', tagHi: 'ग्लोबल पावर', tagEn: 'Global Power' },
    { id: 'trac-25', name: 'Lovol', imageUrl: '/tractors/john_deere_tractor.png', tagHi: 'कुशल प्रदर्शन', tagEn: 'Efficient' },
    { id: 'trac-26', name: 'Yanmar', imageUrl: '/tractors/new_holland_tractor.png', tagHi: 'स्मार्ट टेक', tagEn: 'Smart Tech' },
    { id: 'trac-27', name: 'Mitsubishi Agricultural Machinery', imageUrl: '/tractors/massey_ferguson_tractor.png', tagHi: 'जापानी गुणवत्ता', tagEn: 'Japanese Quality' },
    { id: 'trac-28', name: 'Kioti', imageUrl: '/tractors/swaraj_tractor.png', tagHi: 'मजबूत बिल्ड', tagEn: 'Strong Build' },
    { id: 'trac-29', name: 'LS Tractor', imageUrl: '/tractors/eicher_tractor.png', tagHi: 'स्मूथ ड्राइव', tagEn: 'Smooth Drive' },
    { id: 'trac-30', name: 'Branson Tractors', imageUrl: '/tractors/powertrac_tractor.png', tagHi: 'सर्वश्रेष्ठ वारंटी', tagEn: 'Best Warranty' }
  ];

  // Mock past orders
  const [ordersList, setOrdersList] = useState([
    { id: 'HG-8931', date: '2026-06-23', items: 'IFFCO DAP Fertilizer x 1', total: 1350, status: 'shipping' },
    { id: 'HG-8410', date: '2026-06-20', items: 'Fresh Tomatoes 1kg x 2', total: 80, status: 'delivered' }
  ]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleWishlist = (prodId) => {
    if (wishlist.includes(prodId)) {
      setWishlist(wishlist.filter(id => id !== prodId));
    } else {
      setWishlist([...wishlist, prodId]);
    }
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id || (product.isCustomPart && item.id === product.id));
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, amount) => {
    const existing = cart.find(item => item.id === itemId);
    if (!existing) return;
    const newQty = existing.quantity + amount;
    if (newQty <= 0) {
      setCart(cart.filter(item => item.id !== itemId));
    } else {
      setCart(cart.map(item => item.id === itemId ? { ...item, quantity: newQty } : item));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-neutral-900 p-0 sm:p-4">
      {/* Mobile Device Frame Mockup */}
      <div className="relative flex h-full w-full max-w-md flex-col overflow-hidden bg-neutral-50 shadow-2xl sm:h-[820px] sm:max-h-[95vh] sm:rounded-[40px] sm:border-8 sm:border-neutral-800">
        
        {/* Top Status Bar Mockup - TIME & LANGUAGE */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 pt-3 text-xs font-semibold text-neutral-800 bg-transparent">
          <span>{time}</span>
          
          {/* Floating Language Switcher */}
          <button
            type="button"
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="flex items-center space-x-1 rounded-full bg-white border border-neutral-200 px-2.5 py-0.5 text-[10px] font-bold text-primary-700 shadow-3xs transition hover:bg-neutral-50"
          >
            <Globe className="h-3.5 w-3.5 text-primary-700" />
            <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
          </button>
        </div>

        {/* Dynamic Inner Tab Rendering Container */}
        <div className="flex-1 flex flex-col pt-12 pb-16 overflow-hidden">
          
          {activeTab === 'home' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              
              {/* Conditional rendering for Vegetables category view vs Tractor category view vs Main dashboard */}
              {currentCategory === 'vegetables' ? (
                <VegetablesCategoryView
                  vegetableProducts={vegetableProducts}
                  lang={lang}
                  t={t}
                  onBack={() => setCurrentCategory(null)}
                />
              ) : currentCategory === 'blogs' ? (
                selectedArticle ? (
                  <BlogDetailView
                    lang={lang}
                    article={selectedArticle}
                    onBack={() => setSelectedArticle(null)}
                    onSelectArticle={setSelectedArticle}
                    addToCart={addToCart}
                  />
                ) : (
                  <BlogsListView
                    lang={lang}
                    onBack={() => setCurrentCategory(null)}
                    onSelectArticle={setSelectedArticle}
                  />
                )
              ) : currentCategory === 'tractor' ? (
                <div className="flex-1 flex flex-col overflow-hidden bg-neutral-50">
                  
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 px-4 py-2 shrink-0 border-b border-neutral-100 bg-white">
                    <button
                      type="button"
                      onClick={() => {
                        if (selectedPart) {
                          setSelectedPart(null);
                        } else if (selectedPartCategory) {
                          setSelectedPartCategory(null);
                        } else if (selectedModel) {
                          setSelectedModel(null);
                        } else if (selectedBrand) {
                          setSelectedBrand(null);
                        } else {
                          setCurrentCategory(null);
                        }
                      }}
                      className="p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100 transition active:scale-[0.95]"
                    >
                      <ArrowLeft className="h-5 w-5 text-neutral-700" />
                    </button>
                    <div>
                      <h2 className="text-base font-black text-neutral-900 leading-snug">
                        {selectedPart
                          ? (lang === 'hi' ? `${selectedPart.nameHi}` : `${selectedPart.nameEn}`)
                          : selectedPartCategory
                            ? (lang === 'hi' ? `${selectedPartCategory.nameHi}` : `${selectedPartCategory.nameEn}`)
                            : selectedModel
                              ? (lang === 'hi' ? `${selectedModel.name} के पार्ट्स` : `${selectedModel.name} Parts`)
                              : selectedBrand 
                                ? (lang === 'hi' ? `${selectedBrand.name} के मॉडल` : `${selectedBrand.name} Models`)
                                : (lang === 'hi' ? 'ट्रैक्टर केंद्र (Tractor Hub)' : 'Tractor Hub')
                        }
                      </h2>
                      <p className="text-[10px] text-emerald-650 font-bold leading-none">
                        {selectedPart
                          ? (lang === 'hi' ? 'पार्ट्स विवरण' : 'Spare Part Details')
                          : selectedPartCategory
                            ? (lang === 'hi' ? 'उपलब्ध स्पेयर पार्ट्स' : 'Available Spare Parts')
                            : selectedModel
                              ? (lang === 'hi' ? 'स्पेयर पार्ट्स श्रेणियां' : 'Spare Parts Categories')
                              : selectedBrand
                                ? (lang === 'hi' ? 'शीर्ष 10 मॉडल' : 'Top 10 Models')
                                : (lang === 'hi' ? 'आपके खेत के लिए सर्वश्रेष्ठ ट्रैक्टर' : 'Best Tractors for Your Farming Needs')
                        }
                      </p>
                    </div>
                  </div>

                  {selectedPart ? (
                    <PartDetailView
                      part={selectedPart}
                      brand={selectedBrand}
                      model={selectedModel}
                      lang={lang}
                      addToCart={addToCart}
                      onBuyNow={(part, qty) => {
                        const isHi = lang === 'hi';
                        alert(
                          isHi 
                            ? `ऑर्डर सफलतापूर्वक सबमिट किया गया! धन्यवाद!` 
                            : `Order submitted successfully! Thank you for buying!`
                        );
                        // Add to ordersList
                        const newOrder = {
                          id: `HG-${Math.floor(1000 + Math.random() * 9000)}`,
                          date: new Date().toISOString().split('T')[0],
                          items: `${isHi ? part.nameHi : part.nameEn} x ${qty}`,
                          total: part.price * qty,
                          status: 'pending'
                        };
                        setOrdersList([newOrder, ...ordersList]);
                        setSelectedPart(null);
                        setSelectedPartCategory(null);
                        setActiveTab('orders');
                      }}
                    />
                  ) : selectedPartCategory ? (
                    selectedPartCategory.id === 'part-engine' ? (
                      <EnginePartsView 
                        lang={lang} 
                        onSelectPart={setSelectedPart}
                      />
                    ) : selectedPartCategory.id === 'part-clutch' ? (
                      <ClutchPartsView 
                        lang={lang} 
                        model={selectedModel}
                        onSelectPart={setSelectedPart}
                      />
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white rounded-2xl m-4 border border-neutral-100 shadow-3xs">
                        <span className="text-4xl mb-3">{selectedPartCategory.emoji}</span>
                        <h3 className="text-sm font-black text-neutral-800">
                          {lang === 'hi' ? `${selectedPartCategory.nameHi} जल्द आ रहा है!` : `${selectedPartCategory.nameEn} Coming Soon!`}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1 font-semibold">
                          {lang === 'hi' ? 'हम जल्द ही इन स्पेयर पार्ट्स को जोड़ रहे हैं।' : 'We are adding these spare parts very soon.'}
                        </p>
                      </div>
                    )
                  ) : selectedModel ? (
                    <TractorPartsView 
                      lang={lang} 
                      onSelectPartCategory={setSelectedPartCategory}
                    />
                  ) : selectedBrand ? (
                    <TractorModelsView
                      selectedBrand={selectedBrand}
                      lang={lang}
                      onSelectModel={setSelectedModel}
                    />
                  ) : (
                    <TractorBrandsView
                      tractorProducts={tractorProducts}
                      lang={lang}
                      onSelectBrand={setSelectedBrand}
                    />
                  )}
                </div>
              ) : (
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Location & Notification Bar */}
                  <div className="flex items-center justify-between px-4 py-2 shrink-0">
                    <div className="flex items-center space-x-1 text-neutral-800 cursor-pointer">
                      <MapPin className="h-5 w-5 text-primary-700 fill-current" />
                      <span className="text-sm font-bold">
                        {user?.pincode ? `${lang === 'hi' ? 'पिनकोड' : 'Pincode'}: ${user.pincode}` : t.locationLabel}
                      </span>
                      <ChevronDown className="h-4 w-4 text-neutral-500" />
                    </div>
                    <div className="relative p-1 bg-white rounded-full shadow-xs cursor-pointer hover:bg-neutral-100 transition">
                      <Bell className="h-5.5 w-5.5 text-neutral-700" />
                      <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[9px] font-extrabold text-white">
                        2
                      </span>
                    </div>
                  </div>

                  {/* Greeting & Welcome */}
                  <div className="flex items-center space-x-3 px-4 py-3 shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 border-2 border-primary-500">
                      <User className="h-6 w-6 text-primary-800" />
                    </div>
                    <div>
                      <h2 className="text-base font-extrabold text-neutral-900 leading-snug">
                        {t.greeting}{user?.firstName || t.fallbackName} 👋
                      </h2>
                      <p className="text-xs text-neutral-500 font-semibold">{t.subgreeting}</p>
                    </div>
                  </div>

                  {/* Search Bar Row */}
                  <div className="flex items-center space-x-2.5 px-4 pb-3 shrink-0">
                    <div className="flex-1 flex h-11 items-center rounded-xl border border-neutral-200 bg-white px-3 shadow-3xs focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500">
                      <Search className="h-5 w-5 text-neutral-400" />
                      <input 
                        type="text"
                        placeholder={t.searchPlaceholder}
                        className="flex-1 pl-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 outline-none bg-transparent"
                      />
                    </div>
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-800 text-white shadow-xs hover:bg-primary-950 transition active:scale-[0.97]"
                    >
                      <SlidersHorizontal className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Scrollable Dashboard Body */}
                  <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
                    
                    {/* Categories Grid Component */}
                    <CategoriesGrid
                      lang={lang}
                      t={t}
                      onSelectCategory={(category) => {
                        setCurrentCategory(category);
                        setSelectedBrand(null);
                        setSelectedModel(null);
                        setSelectedPartCategory(null);
                        setSelectedPart(null);
                      }}
                    />

                    {/* Trust Badges Component */}
                    <TrustBadges t={t} />

                    {/* Best Selling Products Component */}
                    <BestSellingProducts
                      products={products}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                      addToCart={addToCart}
                      t={t}
                    />

                    {/* Latest Blogs and Tips Component */}
                    <LatestBlogsView 
                       lang={lang} 
                       onSelectBlog={(blog) => {
                         setCurrentCategory('blogs');
                         setSelectedArticle(blog);
                       }}
                       onViewAll={() => {
                         setCurrentCategory('blogs');
                         setSelectedArticle(null);
                       }}
                     />

                  </div>

                </div>
              )}

            </div>
          )}

          {/* Tab 2: Orders View */}
          {activeTab === 'orders' && (
            <div className="flex-1 flex flex-col overflow-hidden px-4">
              <h2 className="text-lg font-black text-neutral-900 my-3">{t.orders.title}</h2>
              
              <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 pb-4">
                {ordersList.length === 0 ? (
                  <p className="text-center text-sm font-semibold text-neutral-400 py-8">{t.orders.empty}</p>
                ) : (
                  ordersList.map(order => (
                    <div key={order.id} className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-3xs">
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                        <span className="text-xs font-bold text-neutral-800">{t.orders.orderId}: <strong className="text-primary-800">{order.id}</strong></span>
                        <span className="text-[10px] text-neutral-400 font-bold">{order.date}</span>
                      </div>
                      <div className="py-2.5">
                        <p className="text-xs text-neutral-600 font-bold leading-relaxed">{order.items}</p>
                        <p className="text-sm font-black text-neutral-900 mt-1">₹{order.total}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-500/10">
                        <span className="text-[10px] font-bold text-neutral-500">{t.orders.status}</span>
                        <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${
                          order.status === 'delivered' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                        }`}>
                          {t.orders[order.status]}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          )}

          {/* Tab 3: Cart View */}
          {activeTab === 'cart' && (
            <div className="flex-1 flex flex-col overflow-hidden px-4">
              <h2 className="text-lg font-black text-neutral-900 my-3">{t.cart.title}</h2>

              <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 pb-4">
                {cart.length === 0 ? (
                  <p className="text-center text-sm font-semibold text-neutral-400 py-8">{t.cart.empty}</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-3 shadow-3xs">
                      <div className="h-14 w-14 shrink-0 rounded-xl bg-neutral-50 p-1 flex items-center justify-center">
                        {item.imageUrl ? (
                          <img src={item.imageUrl} alt={item.nameRaw || ""} className="w-full h-full object-contain rounded-lg" />
                        ) : (
                          <ProductImage type={item.imageType} className="w-full h-full object-contain" />
                        )}
                      </div>
                      <div className="flex-1 pl-3.5 pr-1">
                        <h4 className="text-xs font-extrabold text-neutral-800 truncate leading-snug">
                          {item.nameRaw || t.products[item.nameKey]}
                        </h4>
                        <p className="text-[10px] text-neutral-400 font-semibold">{item.unit}</p>
                        <span className="text-xs font-black text-primary-800">₹{item.price * item.quantity}</span>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition active:scale-[0.9]"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs font-extrabold text-neutral-800 w-4 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition active:scale-[0.9]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer Summary */}
              {cart.length > 0 && (
                <div className="border-t border-neutral-200 bg-white p-3.5 rounded-t-3xl shadow-lg -mx-4 shrink-0">
                  <div className="flex items-center justify-between text-xs font-extrabold text-neutral-500 mb-2">
                    <span>{t.cart.itemsCount} ({getCartItemsCount()}):</span>
                    <span className="text-neutral-900 text-sm font-black">₹{getCartTotal()}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      alert(lang === 'hi' ? 'ऑर्डर सफलतापूर्वक भेजा गया!' : 'Order submitted successfully!');
                      setCart([]);
                      setActiveTab('orders');
                    }}
                    className="w-full flex h-11 items-center justify-center rounded-xl bg-primary-800 text-sm font-bold text-white shadow-md transition hover:bg-primary-900 active:scale-[0.99]"
                  >
                    {t.cart.checkout}
                  </button>
                </div>
              )}

            </div>
          )}

          {/* Tab 4: Wishlist View */}
          {activeTab === 'wishlist' && (
            <div className="flex-1 flex flex-col overflow-hidden px-4">
              <h2 className="text-lg font-black text-neutral-900 my-3">{t.nav.wishlist}</h2>

              <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 pb-4">
                {wishlist.length === 0 ? (
                  <p className="text-center text-sm font-semibold text-neutral-400 py-8">{t.cart.empty}</p>
                ) : (
                  products.filter(p => wishlist.includes(p.id)).map(product => (
                    <div key={product.id} className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-3 shadow-3xs">
                      <div className="h-14 w-14 shrink-0 rounded-xl bg-neutral-50 p-1 flex items-center justify-center">
                        {product.imageUrl ? (
                          <img src={product.imageUrl} alt={product.nameRaw || ""} className="w-full h-full object-contain rounded-lg" />
                        ) : (
                          <ProductImage type={product.imageType} className="w-full h-full object-contain" />
                        )}
                      </div>
                      <div className="flex-1 pl-3.5 pr-1">
                        <h4 className="text-xs font-extrabold text-neutral-800 truncate leading-snug">
                          {product.nameRaw || t.products[product.nameKey]}
                        </h4>
                        <p className="text-[10px] text-neutral-400 font-semibold">{product.unit}</p>
                        <span className="text-xs font-black text-primary-800">₹{product.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.id)}
                          className="p-1.5 rounded-full text-red-500 hover:bg-red-50 transition active:scale-[0.9]"
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => addToCart(product)}
                          className="flex h-8 px-2.5 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary-800 hover:bg-primary-850 hover:text-white transition active:scale-[0.9]"
                        >
                          <Plus className="h-3.5 w-3.5 mr-1" />
                          <span>{t.nav.cart}</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          )}

          {/* Tab 5: Profile View */}
          {activeTab === 'profile' && (
            <div className="flex-1 flex flex-col overflow-hidden px-4">
              <h2 className="text-lg font-black text-neutral-900 my-3">{t.profile.title}</h2>

              <div className="flex-1 overflow-y-auto space-y-4 pr-1 pb-4">
                
                {/* User avatar display */}
                <div className="flex flex-col items-center py-4 bg-white rounded-2xl border border-neutral-100 shadow-3xs">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 border-4 border-primary-500 mb-2">
                    <User className="h-10 w-10 text-primary-800" />
                  </div>
                  <h3 className="text-base font-extrabold text-neutral-800">{user?.firstName || 'Ramesh'} {user?.lastName || 'Kumar'}</h3>
                  <span className="rounded-full bg-primary-50 px-3 py-0.5 text-2xs font-extrabold text-primary-700 mt-1 uppercase tracking-wider">
                    {user?.role || 'Customer'}
                  </span>
                </div>

                {/* Profile Information List */}
                <div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-3xs space-y-3">
                  <div>
                    <label className="text-[10px] text-neutral-400 font-extrabold uppercase">{t.profile.email}</label>
                    <p className="text-sm font-semibold text-neutral-700 mt-0.5">{user?.email || 'ramesh.kumar@gmail.com'}</p>
                  </div>
                  <div className="border-t border-neutral-100 pt-3">
                    <label className="text-[10px] text-neutral-400 font-extrabold uppercase">{t.profile.phone}</label>
                    <p className="text-sm font-semibold text-neutral-700 mt-0.5">{user?.phone || '+91 9876543210'}</p>
                  </div>
                  <div className="border-t border-neutral-100 pt-3">
                    <label className="text-[10px] text-neutral-400 font-extrabold uppercase">{t.profile.role}</label>
                    <p className="text-sm font-semibold text-neutral-700 mt-0.5">{user?.role || 'Customer'}</p>
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex h-11 items-center justify-center rounded-xl bg-red-50 text-sm font-bold text-red-600 border border-red-200 transition hover:bg-red-100 active:scale-[0.99]"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  <span>{t.profile.logoutBtn}</span>
                </button>

              </div>

            </div>
          )}

        </div>

        {/* Sticky Bottom Navigation Bar */}
        <BottomNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onHomeClick={() => {
            setActiveTab('home');
            setCurrentCategory(null);
            setSelectedBrand(null);
            setSelectedModel(null);
            setSelectedPartCategory(null);
            setSelectedPart(null);
          }}
          cartItemsCount={getCartItemsCount()}
          t={t}
        />

      </div>
    </div>
  );
}
