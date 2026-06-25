import React from 'react';
import { Heart, Plus, ChevronDown } from 'lucide-react';
import ProductImage from './ProductImage';

export default function BestSellingProducts({ 
  products, 
  wishlist, 
  toggleWishlist, 
  addToCart, 
  t 
}) {
  return (
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
                <ProductImage type={product.imageType} className="w-full h-24 object-contain" />
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
  );
}
