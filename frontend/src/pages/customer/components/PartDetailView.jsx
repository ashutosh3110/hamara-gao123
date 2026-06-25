import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, ShieldCheck, CheckCircle } from 'lucide-react';

export default function PartDetailView({ 
  part, 
  brand, 
  model, 
  lang, 
  addToCart, 
  onBuyNow 
}) {
  const [quantity, setQuantity] = useState(1);

  const incrementQty = () => {
    if (quantity < part.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Call parent addToCart with selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: part.id,
        nameKey: null,
        nameRaw: lang === 'hi' ? part.nameHi : part.nameEn,
        price: part.price,
        unit: '1 unit',
        imageType: null,
        imageUrl: part.imageUrl,
        isCustomPart: true
      });
    }
    alert(
      lang === 'hi' 
        ? `${part.nameHi} (${quantity} आइटम) कार्ट में जोड़े गए!` 
        : `${part.nameEn} (${quantity} items) added to cart!`
    );
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(part, quantity);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-4 scrollbar-none bg-neutral-50 pt-3">
      {/* Product Image Card */}
      <div className="relative rounded-2xl bg-white border border-neutral-100 p-4 shadow-3xs flex justify-center items-center">
        <div className="w-full h-48 overflow-hidden rounded-xl bg-white flex items-center justify-center shrink-0">
          <img 
            src={part.imageUrl} 
            alt={lang === 'hi' ? part.nameHi : part.nameEn} 
            className="w-full h-full object-contain p-2"
          />
        </div>
        <span className="absolute top-3 right-3 rounded bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[9px] font-black text-emerald-800 uppercase tracking-wider">
          {lang === 'hi' ? '100% असली' : '100% Genuine'}
        </span>
      </div>

      {/* Product Information */}
      <div className="rounded-2xl bg-white border border-neutral-100 p-4 shadow-3xs space-y-3">
        <div>
          <h3 className="text-base font-black text-neutral-850 leading-snug">
            {lang === 'hi' ? part.nameHi : part.nameEn}
          </h3>
          <div className="flex items-center space-x-1.5 mt-1">
            <CheckCircle className="h-4.5 w-4.5 text-emerald-600" />
            <span className="text-[10px] font-bold text-emerald-700">
              {lang === 'hi' 
                ? `स्टॉक में (${part.stock} इकाइयां उपलब्ध)` 
                : `In Stock (${part.stock} units available)`
              }
            </span>
          </div>
        </div>

        <div className="flex items-baseline justify-between pt-2 border-t border-neutral-50">
          <span className="text-xs text-neutral-450 font-bold">{lang === 'hi' ? 'मूल्य (Price)' : 'Price'}</span>
          <span className="text-lg font-black text-neutral-900">₹{part.price}</span>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="rounded-2xl bg-white border border-neutral-100 p-4 shadow-3xs space-y-2.5">
        <h4 className="text-xs font-black text-neutral-800 uppercase tracking-wider">
          {lang === 'hi' ? 'विवरण (Details)' : 'Specifications'}
        </h4>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between py-1 border-b border-neutral-50">
            <span className="text-neutral-450 font-bold">{lang === 'hi' ? 'ब्रांड (Brand)' : 'Brand'}</span>
            <span className="font-extrabold text-neutral-800">{brand.name}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-neutral-50">
            <span className="text-neutral-450 font-bold">{lang === 'hi' ? 'संगत मॉडल' : 'Compatible Model'}</span>
            <span className="font-extrabold text-neutral-800 text-right max-w-[180px] truncate">{model.name}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-neutral-450 font-bold">{lang === 'hi' ? 'वारंटी (Warranty)' : 'Warranty'}</span>
            <span className="font-extrabold text-emerald-700">{lang === 'hi' ? '6 महीने की वारंटी' : '6 Months Warranty'}</span>
          </div>
        </div>
      </div>

      {/* Quantity & Actions Layout */}
      <div className="rounded-2xl bg-white border border-neutral-100 p-4 shadow-3xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-neutral-600">{lang === 'hi' ? 'मात्रा (Quantity)' : 'Quantity'}</span>
          
          <div className="flex items-center space-x-3.5">
            <button
              type="button"
              onClick={decrementQty}
              className={`flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={quantity === 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-sm font-black text-neutral-800 w-4 text-center">{quantity}</span>
            <button
              type="button"
              onClick={incrementQty}
              className={`flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition ${quantity === part.stock ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={quantity === part.stock}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex h-11 items-center justify-center rounded-xl border border-primary-700 bg-white text-xs font-extrabold text-primary-700 shadow-2xs hover:bg-neutral-50 transition active:scale-[0.97]"
        >
          <ShoppingCart className="h-4.5 w-4.5 mr-2" />
          <span>{lang === 'hi' ? 'कार्ट में जोड़ें' : 'Add to Cart'}</span>
        </button>
        
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex h-11 items-center justify-center rounded-xl bg-primary-800 text-xs font-extrabold text-white shadow-xs hover:bg-primary-900 transition active:scale-[0.97]"
        >
          <span>{lang === 'hi' ? 'अभी खरीदें' : 'Buy Now'}</span>
        </button>
      </div>

      {/* Safe & Secure Shopping Indicator */}
      <div className="flex items-center justify-center space-x-1.5 py-1 text-2xs text-neutral-450 font-bold">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
        <span>{lang === 'hi' ? 'सुरक्षित भुगतान | आसान वापसी' : 'Secure Payment | Easy Returns'}</span>
      </div>
    </div>
  );
}
