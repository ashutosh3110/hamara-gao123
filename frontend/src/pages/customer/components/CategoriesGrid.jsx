import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoriesGrid({ lang, t, onSelectCategory }) {
  return (
    <div className="grid grid-cols-2 gap-3.5">
      
      {/* Category: Vegetables (Clickable) */}
      <div 
        onClick={() => onSelectCategory('vegetables')}
        className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-2xs hover:shadow-xs transition cursor-pointer"
      >
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
            <circle cx="43" cy="40" r="3" fill="#34a85a" />
            <path d="M75,30 Q80,50 70,55" stroke="#ff9900" strokeWidth="6" strokeLinecap="round" />
            <circle cx="60" cy="40" r="15" fill="#34a85a" />
            <circle cx="70" cy="45" r="12" fill="#fbbc05" />
          </svg>
        </div>
      </div>

      {/* Category: Tractor */}
      <div 
        onClick={() => onSelectCategory('tractor')}
        className="flex flex-col justify-between rounded-2xl bg-white border border-neutral-100 p-3.5 shadow-2xs hover:shadow-xs transition cursor-pointer"
      >
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
            <circle cx="60" cy="65" r="22" fill="#8d6e63" />
            <circle cx="60" cy="65" r="16" fill="#d7ccc8" />
            <path d="M60,20 C50,20 40,30 40,45 C40,60 60,80 60,80 C60,80 80,60 80,45 C80,30 70,20 60,20 Z" fill="#b0bec5" />
            <circle cx="60" cy="45" r="6" fill="#cfd8dc" />
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
          <p className="text-[10px] text-neutral-505 font-semibold leading-tight mt-0.5">{t.categories.bulkOrderSub}</p>
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
  );
}
