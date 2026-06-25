import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';

export default function VegetablesCategoryView({ vegetableProducts, lang, t, onBack }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-neutral-50">
      
      {/* Category Header */}
      <div className="flex items-center space-x-3 px-4 py-2 shrink-0 border-b border-neutral-100 bg-white">
        <button
          type="button"
          onClick={onBack}
          className="p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100 transition active:scale-[0.95]"
        >
          <ArrowLeft className="h-5 w-5 text-neutral-700" />
        </button>
        <div>
          <h2 className="text-base font-black text-neutral-900 leading-snug">{t.categories.vegetables}</h2>
          <p className="text-[10px] text-emerald-650 font-bold leading-none">{t.categories.vegetablesSub}</p>
        </div>
      </div>

      {/* Search Bar inside Category */}
      <div className="px-4 py-2 shrink-0">
        <div className="flex h-10 items-center rounded-xl border border-neutral-200 bg-white px-3 shadow-3xs">
          <Search className="h-4 w-4 text-neutral-400" />
          <input 
            type="text"
            placeholder={t.searchPlaceholder}
            className="flex-1 pl-2 text-xs font-semibold text-neutral-800 placeholder-neutral-400 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Vegetables Grid Container */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3.5">
        <div className="grid grid-cols-2 gap-3.5 pt-1">
          {vegetableProducts.map(product => (
            <div key={product.id} className="relative rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-3xs flex flex-col items-center justify-center hover:shadow-xs transition">
              
              {/* Product Image (Real Image) */}
              <div className="w-full h-28 overflow-hidden rounded-xl bg-neutral-50 mb-3 flex items-center justify-center shrink-0">
                <img 
                  src={product.imageUrl} 
                  alt={t.products[product.nameKey]} 
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Product Name */}
              <div className="text-center w-full">
                <h4 className="text-xs font-black text-neutral-800 leading-snug truncate">{t.products[product.nameKey]}</h4>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
