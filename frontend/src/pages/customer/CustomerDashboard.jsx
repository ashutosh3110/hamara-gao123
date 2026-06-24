import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  MapPin, 
  ChevronDown, 
  Bell, 
  Search, 
  SlidersHorizontal, 
  ArrowRight, 
  Truck, 
  Percent, 
  ShieldCheck, 
  Heart, 
  Plus, 
  Minus, 
  Trash2, 
  Clipboard, 
  ShoppingCart, 
  User, 
  LogOut, 
  Globe 
} from 'lucide-react';
import { logout } from '@/redux/slices/authSlice';

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
      machinerySub: "कृषि मशीनरी और उपकरण",
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
    products: {
      tomatoes: "ताजा लाल टमाटर",
      dap: "IFFCO DAP खाद",
      nanoUrea: "IFFCO नैनो यूरिया",
      wheat: "शरबती गेहूं"
    },
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
    products: {
      tomatoes: "Fresh Tomatoes",
      dap: "IFFCO DAP Fertilizer",
      nanoUrea: "IFFCO Nano Urea",
      wheat: "Sharbati Wheat"
    },
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
    }
  }
};

export default function CustomerDashboard() {
  const [lang, setLang] = useState('hi');
  const [time, setTime] = useState('09:41');
  const [activeTab, setActiveTab] = useState('home'); // home, orders, cart, wishlist, profile

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
    const existing = cart.find(item => item.id === product.id);
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

  // Product Vector SVG Renderers
  const renderProductImage = (type) => {
    switch (type) {
      case 'tomatoes':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-24 object-contain bg-neutral-50 rounded-xl p-1">
            <circle cx="35" cy="55" r="18" fill="#ea4335" />
            <path d="M35,37 Q37,33 35,35" stroke="#34a853" strokeWidth="3" strokeLinecap="round" />
            <circle cx="65" cy="55" r="18" fill="#ea4335" />
            <path d="M65,37 Q67,33 65,35" stroke="#34a853" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="65" r="20" fill="#c5221f" />
            <path d="M50,45 C48,42 52,42 50,45 Z" fill="#34a853" stroke="#34a85a" strokeWidth="2" />
          </svg>
        );
      case 'dap':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-24 object-contain bg-neutral-50 rounded-xl p-1">
            <path d="M30,20 C30,15 40,12 50,12 C60,12 70,15 70,20 C70,28 66,75 62,85 C58,88 42,88 38,85 C34,75 30,28 30,20 Z" fill="#34a85a" stroke="#1b5730" strokeWidth="1.5" />
            <ellipse cx="50" cy="20" rx="20" ry="4" fill="#fbbc05" />
            <text x="50" y="42" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">IFFCO</text>
            <text x="50" y="55" fontFamily="sans-serif" fontSize="12" fontWeight="extrabold" fill="#fbbc05" textAnchor="middle">DAP</text>
            <text x="50" y="68" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#fff" textAnchor="middle">18-46-0</text>
          </svg>
        );
      case 'nanoUrea':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-24 object-contain bg-neutral-50 rounded-xl p-1">
            <rect x="35" y="32" width="30" height="50" rx="6" fill="#fff" stroke="#ccc" strokeWidth="1.5" />
            <rect x="42" y="22" width="16" height="10" fill="#fff" stroke="#ccc" strokeWidth="1.5" />
            <rect x="40" y="16" width="20" height="7" fill="#34a85a" rx="1.5" />
            <rect x="36" y="42" width="28" height="25" fill="#34a85a" />
            <text x="50" y="52" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#fbbc05" textAnchor="middle">IFFCO</text>
            <text x="50" y="60" fontFamily="sans-serif" fontSize="6" fontWeight="extrabold" fill="#fff" textAnchor="middle">NANO UREA</text>
          </svg>
        );
      case 'wheat':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-24 object-contain bg-neutral-50 rounded-xl p-1">
            <ellipse cx="50" cy="70" rx="35" ry="18" fill="#d2b48c" stroke="#cfae80" strokeWidth="1" />
            <path d="M20,70 Q50,25 80,70 Z" fill="#f4c430" />
            <circle cx="45" cy="55" r="2.5" fill="#fff" opacity="0.6" />
            <circle cx="55" cy="58" r="2.5" fill="#fff" opacity="0.6" />
            <circle cx="38" cy="62" r="2" fill="#fff" opacity="0.6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-neutral-900 p-0 sm:p-4">
      {/* Mobile Device Frame Mockup */}
      <div className="relative flex h-full w-full max-w-md flex-col overflow-hidden bg-neutral-50 shadow-2xl sm:h-[820px] sm:max-h-[95vh] sm:rounded-[40px] sm:border-8 sm:border-neutral-800">
        
        {/* Top Status Bar Mockup - TIME ONLY */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-between px-6 pt-3 text-xs font-semibold text-neutral-800 bg-transparent">
          <span>{time}</span>
        </div>

        {/* Floating Language Switcher */}
        <button
          type="button"
          onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
          className="absolute top-10 right-4 z-20 flex items-center space-x-1 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary-700 shadow-md backdrop-blur-xs transition hover:bg-white"
        >
          <Globe className="h-3.5 w-3.5" />
          <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
        </button>

        {/* Dynamic Inner Tab Rendering Container */}
        <div className="flex-1 flex flex-col pt-12 pb-16 overflow-hidden">
          
          {activeTab === 'home' && (
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
                
                {/* 2-Column Categories Grid */}
                <div className="grid grid-cols-2 gap-3.5">
                  
                  {/* Category: Vegetables */}
                  <div className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-2xs hover:shadow-xs transition">
                    <div>
                      <h3 className="text-sm font-extrabold text-primary-950">{t.categories.vegetables}</h3>
                      <p className="text-[10px] text-neutral-400 font-semibold leading-tight mt-0.5">{t.categories.vegetablesSub}</p>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-800 hover:bg-primary-200 transition active:scale-[0.95]">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <svg viewBox="0 0 120 100" className="w-16 h-12 object-contain">
                        <rect x="20" y="55" width="80" height="30" rx="4" fill="#a05a2c" />
                        <line x1="30" y1="55" x2="30" y2="85" stroke="#783f04" strokeWidth="2.5" />
                        <line x1="50" y1="55" x2="50" y2="85" stroke="#783f04" strokeWidth="2.5" />
                        <line x1="70" y1="55" x2="70" y2="85" stroke="#783f04" strokeWidth="2.5" />
                        <circle cx="40" cy="45" r="14" fill="#ea4335" />
                        <circle cx="43" cy="40" r="3" fill="#34a853" />
                        <path d="M75,30 Q80,50 70,55" stroke="#ff9900" strokeWidth="6" strokeLinecap="round" />
                        <circle cx="60" cy="40" r="15" fill="#34a85a" />
                        <circle cx="70" cy="45" r="12" fill="#fbbc05" />
                      </svg>
                    </div>
                  </div>

                  {/* Category: Tractor */}
                  <div className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-2xs hover:shadow-xs transition">
                    <div>
                      <h3 className="text-sm font-extrabold text-primary-950">{t.categories.tractor}</h3>
                      <p className="text-[10px] text-neutral-400 font-semibold leading-tight mt-0.5">{t.categories.tractorSub}</p>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-800 hover:bg-primary-200 transition active:scale-[0.95]">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <svg viewBox="0 0 120 100" className="w-16 h-12 object-contain">
                        <rect x="50" y="35" width="40" height="25" fill="#34a85a" rx="2" />
                        <rect x="30" y="45" width="30" height="15" fill="#34a85a" />
                        <rect x="60" y="15" width="25" height="20" fill="none" stroke="#333" strokeWidth="2.5" rx="2" />
                        <rect x="63" y="18" width="19" height="10" fill="#e0f7fa" />
                        <line x1="45" y1="45" x2="45" y2="25" stroke="#333" strokeWidth="2.5" />
                        <circle cx="42" cy="70" r="13" fill="#111" />
                        <circle cx="42" cy="70" r="4" fill="#fff" />
                        <circle cx="78" cy="65" r="19" fill="#111" />
                        <circle cx="78" cy="65" r="7" fill="#fff" />
                      </svg>
                    </div>
                  </div>

                  {/* Category: Fertilizer */}
                  <div className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-2xs hover:shadow-xs transition">
                    <div>
                      <h3 className="text-sm font-extrabold text-primary-950">{t.categories.fertilizer}</h3>
                      <p className="text-[10px] text-neutral-400 font-semibold leading-tight mt-0.5">{t.categories.fertilizerSub}</p>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-800 hover:bg-primary-200 transition active:scale-[0.95]">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <svg viewBox="0 0 120 100" className="w-16 h-12 object-contain">
                        <path d="M35,25 C35,20 45,15 60,15 C75,15 85,20 85,25 C85,35 80,75 75,85 C70,90 50,90 45,85 C40,75 35,35 35,25 Z" fill="#ddc5a2" stroke="#bda37e" strokeWidth="1.5" />
                        <ellipse cx="60" cy="25" rx="23" ry="5" fill="#cfae80" />
                        <path d="M60,40 C53,48 60,63 60,63 C60,63 67,48 60,40 Z" fill="#34a85a" />
                        <text x="60" y="75" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#5c4033" textAnchor="middle">FERTILIZER</text>
                      </svg>
                    </div>
                  </div>

                  {/* Category: Animal Food */}
                  <div className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-2xs hover:shadow-xs transition">
                    <div>
                      <h3 className="text-sm font-extrabold text-primary-950">{t.categories.animalFood}</h3>
                      <p className="text-[10px] text-neutral-400 font-semibold leading-tight mt-0.5">{t.categories.animalFoodSub}</p>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-800 hover:bg-primary-200 transition active:scale-[0.95]">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <svg viewBox="0 0 120 100" className="w-16 h-12 object-contain">
                        <rect x="25" y="35" width="28" height="32" rx="14" fill="#f5f5f5" stroke="#ccc" strokeWidth="1" />
                        <ellipse cx="39" cy="52" rx="11" ry="7" fill="#ffc0cb" />
                        <circle cx="34" cy="49" r="1.5" fill="#333" />
                        <circle cx="44" cy="49" r="1.5" fill="#333" />
                        <circle cx="85" cy="55" r="13" fill="#f4b400" />
                        <circle cx="94" cy="46" r="7" fill="#f4b400" />
                        <polygon points="101,44 105,46 101,48" fill="#ff6d00" />
                        <path d="M70,70 L90,70 L87,79 L73,79 Z" fill="#a05a2c" />
                      </svg>
                    </div>
                  </div>

                  {/* Category: Machinery */}
                  <div className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-2xs hover:shadow-xs transition">
                    <div>
                      <h3 className="text-sm font-extrabold text-primary-950">{t.categories.machinery}</h3>
                      <p className="text-[10px] text-neutral-400 font-semibold leading-tight mt-0.5">{t.categories.machinerySub}</p>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-800 hover:bg-primary-200 transition active:scale-[0.95]">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <svg viewBox="0 0 120 100" className="w-16 h-12 object-contain">
                        <line x1="25" y1="50" x2="95" y2="50" stroke="#777" strokeWidth="4" />
                        <path d="M45,50 Q40,75 35,80" stroke="#ea4335" strokeWidth="3" fill="none" />
                        <path d="M60,50 Q55,75 50,80" stroke="#ea4335" strokeWidth="3" fill="none" />
                        <path d="M75,50 Q70,75 65,80" stroke="#ea4335" strokeWidth="3" fill="none" />
                        <path d="M90,50 Q85,75 80,80" stroke="#ea4335" strokeWidth="3" fill="none" />
                        <line x1="75" y1="50" x2="85" y2="25" stroke="#333" strokeWidth="3.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Category: Bulk Order */}
                  <div className="flex flex-col justify-between rounded-2xl bg-primary-50 border border-primary-100 p-3.5 shadow-2xs hover:shadow-xs transition">
                    <div>
                      <h3 className="text-sm font-extrabold text-primary-950">{t.categories.bulkOrder}</h3>
                      <p className="text-[10px] text-neutral-500 font-semibold leading-tight mt-0.5">{t.categories.bulkOrderSub}</p>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <button className="flex h-6.5 px-3 items-center justify-center rounded-full bg-primary-800 text-[10px] font-bold text-white hover:bg-primary-900 transition active:scale-[0.95]">
                        {t.categories.orderNow}
                      </button>
                      <svg viewBox="0 0 120 100" className="w-14 h-11 object-contain">
                        <rect x="25" y="45" width="35" height="30" fill="#d2b48c" stroke="#b5a642" strokeWidth="1" rx="1" />
                        <line x1="25" y1="60" x2="60" y2="60" stroke="#a05a2c" strokeWidth="1" />
                        <rect x="62" y="48" width="30" height="27" fill="#cd853f" stroke="#b5a642" strokeWidth="1" rx="1" />
                        <line x1="62" y1="62" x2="92" y2="62" stroke="#8b4513" strokeWidth="1" />
                        <rect x="45" y="20" width="32" height="26" fill="#deb887" stroke="#b5a642" strokeWidth="1" rx="1" />
                        <path d="M85,25 L98,35 L92,50 L79,40 Z" fill="#34a85a" />
                        <text x="88" y="43" fontFamily="sans-serif" fontSize="10" fill="#fff" fontWeight="bold" textAnchor="middle">%</text>
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Trust Badges Bar */}
                <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white border border-neutral-100 p-3 shadow-3xs">
                  
                  {/* Badge 1: Fast Delivery */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50">
                      <Truck className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-[10px] font-extrabold text-neutral-800 mt-1">{t.badges.delivery}</span>
                    <span className="text-[8px] font-semibold text-neutral-400 mt-0.5">{t.badges.deliverySub}</span>
                  </div>

                  {/* Badge 2: Best Prices */}
                  <div className="flex flex-col items-center text-center border-x border-neutral-100">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50">
                      <Percent className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-[10px] font-extrabold text-neutral-800 mt-1">{t.badges.prices}</span>
                    <span className="text-[8px] font-semibold text-neutral-400 mt-0.5">{t.badges.pricesSub}</span>
                  </div>

                  {/* Badge 3: Trusted Quality */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50">
                      <ShieldCheck className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-[10px] font-extrabold text-neutral-800 mt-1">{t.badges.quality}</span>
                    <span className="text-[8px] font-semibold text-neutral-400 mt-0.5">{t.badges.qualitySub}</span>
                  </div>

                </div>

                {/* Best Selling Products Horizontal Row */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-extrabold text-neutral-900">{t.bestSelling}</h3>
                    <button 
                      type="button"
                      className="text-xs font-bold text-primary-700 hover:underline flex items-center"
                    >
                      <span>{t.viewAll}</span>
                      <ChevronDown className="h-3.5 w-3.5 -rotate-90 ml-0.5" />
                    </button>
                  </div>

                  {/* Horizontal Scroll wrapper */}
                  <div className="flex space-x-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
                    {products.map(product => {
                      const isInWishlist = wishlist.includes(product.id);
                      return (
                        <div key={product.id} className="relative w-36 shrink-0 rounded-2xl bg-white border border-neutral-100 p-2.5 shadow-3xs flex flex-col justify-between">
                          
                          {/* Wishlist Heart Icon */}
                          <button
                            type="button"
                            onClick={() => toggleWishlist(product.id)}
                            className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/90 shadow-3xs text-neutral-400 hover:text-red-500 transition active:scale-[0.9]"
                          >
                            <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-neutral-400'}`} />
                          </button>

                          {/* Product Image */}
                          <div className="mb-2 shrink-0">
                            {renderProductImage(product.imageType)}
                          </div>

                          {/* Product Info */}
                          <div>
                            <h4 className="text-[11px] font-extrabold text-neutral-800 truncate leading-snug">{t.products[product.nameKey]}</h4>
                            <p className="text-[9px] text-neutral-400 font-semibold">{product.unit}</p>
                            <div className="flex items-center justify-between mt-1.5">
                              <span className="text-xs font-black text-neutral-900">₹{product.price}</span>
                              <button
                                type="button"
                                onClick={() => addToCart(product)}
                                className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary-100 text-primary-800 hover:bg-primary-850 hover:text-white transition active:scale-[0.93]"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>

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
                        {renderProductImage(item.imageType)}
                      </div>
                      <div className="flex-1 pl-3.5 pr-1">
                        <h4 className="text-xs font-extrabold text-neutral-800 truncate leading-snug">{t.products[item.nameKey]}</h4>
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
                        {renderProductImage(product.imageType)}
                      </div>
                      <div className="flex-1 pl-3.5 pr-1">
                        <h4 className="text-xs font-extrabold text-neutral-800 truncate leading-snug">{t.products[product.nameKey]}</h4>
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
        <div className="absolute bottom-0 left-0 right-0 z-30 flex h-16 items-center justify-around border-t border-neutral-200 bg-white/95 px-2 pb-1 shadow-md backdrop-blur-md shrink-0">
          
          {/* Nav Tab: Home */}
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 transition ${
              activeTab === 'home' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <User className={`h-5 w-5 ${activeTab === 'home' ? 'stroke-[2.5px]' : ''}`} />
            <span className="text-[10px] font-extrabold mt-0.5">{t.nav.home}</span>
          </button>

          {/* Nav Tab: Orders */}
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 transition ${
              activeTab === 'orders' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <Clipboard className={`h-5 w-5 ${activeTab === 'orders' ? 'stroke-[2.5px]' : ''}`} />
            <span className="text-[10px] font-extrabold mt-0.5">{t.nav.orders}</span>
          </button>

          {/* Nav Tab: Cart with green count badge */}
          <button
            type="button"
            onClick={() => setActiveTab('cart')}
            className={`relative flex flex-col items-center justify-center flex-1 py-1.5 transition ${
              activeTab === 'cart' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <ShoppingCart className={`h-5 w-5 ${activeTab === 'cart' ? 'stroke-[2.5px]' : ''}`} />
            {getCartItemsCount() > 0 && (
              <span className="absolute top-1.5 right-4.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-700 text-[8px] font-black text-white">
                {getCartItemsCount()}
              </span>
            )}
            <span className="text-[10px] font-extrabold mt-0.5">{t.nav.cart}</span>
          </button>

          {/* Nav Tab: Wishlist */}
          <button
            type="button"
            onClick={() => setActiveTab('wishlist')}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 transition ${
              activeTab === 'wishlist' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <Heart className={`h-5 w-5 ${activeTab === 'wishlist' ? 'stroke-[2.5px]' : ''}`} />
            <span className="text-[10px] font-extrabold mt-0.5">{t.nav.wishlist}</span>
          </button>

          {/* Nav Tab: Profile */}
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 transition ${
              activeTab === 'profile' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <User className={`h-5 w-5 ${activeTab === 'profile' ? 'stroke-[2.5px]' : ''}`} />
            <span className="text-[10px] font-extrabold mt-0.5">{t.nav.profile}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
