import React from 'react';
import { User, Clipboard, ShoppingCart, Heart } from 'lucide-react';

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
        {cartItemsCount > 0 && (
          <span className="absolute top-1.5 right-4.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-700 text-[8px] font-black text-white">
            {cartItemsCount}
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
  );
}
