import React from 'react';
import { enginePartsData } from '../../../data/tractorModels';

export default function EnginePartsView({ lang, onSelectPart }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3.5 scrollbar-none">
      <div className="grid grid-cols-2 gap-3.5 pt-3">
        {enginePartsData.map(part => (
          <div 
            key={part.id} 
            onClick={() => onSelectPart && onSelectPart(part)}
            className="relative cursor-pointer rounded-2xl bg-white border border-neutral-100 p-3 shadow-3xs flex flex-col items-center justify-between hover:shadow-xs hover:border-emerald-250 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
          >
            {/* Part Image */}
            <div className="w-full h-24 overflow-hidden rounded-xl bg-neutral-50 mt-4 mb-2 flex items-center justify-center shrink-0 border border-neutral-100">
              <img 
                src={part.imageUrl} 
                alt={lang === 'hi' ? part.nameHi : part.nameEn} 
                className="w-full h-full object-contain rounded-xl p-1"
                loading="lazy"
              />
            </div>

            {/* Part Name */}
            <div className="text-center w-full pt-1.5 border-t border-neutral-50">
              <h4 className="text-xs font-black text-neutral-800 leading-snug truncate">
                {lang === 'hi' ? part.nameHi : part.nameEn}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
