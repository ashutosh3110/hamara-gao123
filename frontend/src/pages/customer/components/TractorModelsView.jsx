import React from 'react';
import { getTractorModels } from '../../../data/tractorModels';

export default function TractorModelsView({ selectedBrand, lang, onSelectModel }) {
  const models = getTractorModels(selectedBrand.name, selectedBrand.imageUrl);

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3.5 scrollbar-none">
      <div className="grid grid-cols-2 gap-3.5 pt-3">
        {models.map(model => (
          <div 
            key={model.id} 
            onClick={() => onSelectModel(model)}
            className="relative cursor-pointer rounded-2xl bg-white border border-neutral-100 p-3 shadow-3xs flex flex-col items-center justify-between hover:shadow-xs hover:border-emerald-200 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
          >
            
            {/* Tractor Model Image */}
            <div className="w-full h-24 overflow-hidden rounded-xl bg-white mt-4 mb-2 flex items-center justify-center shrink-0">
              <img 
                src={model.imageUrl} 
                alt={model.name} 
                className="w-full h-full object-contain rounded-xl p-0.5"
                loading="lazy"
              />
            </div>

            {/* Tractor Model Name */}
            <div className="text-center w-full pt-1 border-t border-neutral-50">
              <h4 className="text-xs font-black text-neutral-800 leading-snug truncate">{model.name}</h4>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
