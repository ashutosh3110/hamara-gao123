import React from 'react';
import { Truck, Percent, ShieldCheck } from 'lucide-react';

export default function TrustBadges({ t }) {
  return (
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
  );
}
