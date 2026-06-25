import React from 'react';

export default function TractorBrandsView({ tractorProducts, lang, onSelectBrand }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-neutral-50 pt-3">
      {/* Tractor Grid Container */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3.5 scrollbar-none">
        <div className="grid grid-cols-2 gap-3.5 pt-1">
          {tractorProducts.map(product => (
            <div 
              key={product.id} 
              onClick={() => onSelectBrand(product)}
              className="relative cursor-pointer rounded-2xl bg-white border border-neutral-100 p-3 shadow-3xs flex flex-col items-center justify-between hover:shadow-xs hover:border-emerald-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              
              {/* Tractor Image (Real Studio Shot) */}
              <div className="w-full h-24 overflow-hidden rounded-xl bg-white mt-4 mb-2 flex items-center justify-center shrink-0">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-contain rounded-xl p-0.5"
                  loading="lazy"
                />
              </div>

              {/* Tractor Name */}
              <div className="text-center w-full pt-1 border-t border-neutral-50">
                <h4 className="text-xs font-black text-neutral-800 leading-snug truncate">{product.name}</h4>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
