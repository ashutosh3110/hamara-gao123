import React from 'react';
import { User, Clipboard, ShoppingCart, Heart, Home } from 'lucide-react';

export default function BottomNavigation({ 
  activeTab, 
  setActiveTab, 
  onHomeClick, 
  cartItemsCount, 
  t 
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 flex h-16 items-center justify-around border-t border-neutral-200 bg-white/95 px-2 pb-1 shadow-md backdrop-blur-md shrink-0">
      
      {/* Nav Tab: Home */}
      <button
        type="button"
        onClick={onHomeClick}
        className={`relative flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 duration-150 ${
          activeTab === 'home' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        <Home className={`h-5 w-5 ${activeTab === 'home' ? 'stroke-[2.5px]' : ''}`} />
        <span className="text-[10px] font-extrabold mt-0.5">{t.nav.home}</span>
        {activeTab === 'home' && <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-primary-800" />}
      </button>

      {/* Nav Tab: Orders */}
      <button
        type="button"
        onClick={() => setActiveTab('orders')}
        className={`relative flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 duration-150 ${
          activeTab === 'orders' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        <Clipboard className={`h-5 w-5 ${activeTab === 'orders' ? 'stroke-[2.5px]' : ''}`} />
        <span className="text-[10px] font-extrabold mt-0.5">{t.nav.orders}</span>
        {activeTab === 'orders' && <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-primary-800" />}
      </button>

      {/* Nav Tab: Cart with green count badge */}
      <button
        type="button"
        onClick={() => setActiveTab('cart')}
        className={`relative flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 duration-150 ${
          activeTab === 'cart' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        <ShoppingCart className={`h-5 w-5 ${activeTab === 'cart' ? 'stroke-[2.5px]' : ''}`} />
        {cartItemsCount > 0 && (
          <span className="absolute top-1 right-3.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-700 text-[8px] font-black text-white">
            {cartItemsCount}
          </span>
        )}
        <span className="text-[10px] font-extrabold mt-0.5">{t.nav.cart}</span>
        {activeTab === 'cart' && <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-primary-800" />}
      </button>

      {/* Nav Tab: Wishlist */}
      <button
        type="button"
        onClick={() => setActiveTab('wishlist')}
        className={`relative flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 duration-150 ${
          activeTab === 'wishlist' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        <Heart className={`h-5 w-5 ${activeTab === 'wishlist' ? 'stroke-[2.5px]' : ''}`} />
        <span className="text-[10px] font-extrabold mt-0.5">{t.nav.wishlist}</span>
        {activeTab === 'wishlist' && <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-primary-800" />}
      </button>

      {/* Nav Tab: Profile */}
      <button
        type="button"
        onClick={() => setActiveTab('profile')}
        className={`relative flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 duration-150 ${
          activeTab === 'profile' ? 'text-primary-800' : 'text-neutral-400 hover:text-neutral-600'
        }`}
      >
        <User className={`h-5 w-5 ${activeTab === 'profile' ? 'stroke-[2.5px]' : ''}`} />
        <span className="text-[10px] font-extrabold mt-0.5">{t.nav.profile}</span>
        {activeTab === 'profile' && <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-primary-800" />}
      </button>

    </div>
  );
}
