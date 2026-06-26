import React from 'react';
import { clutchPartsData } from '../../../data/tractorModels';
import ProductImage from './ProductImage';

export default function ClutchPartsView({ lang, model, onSelectPart }) {
  // Logic to determine compatibility of the model
  const isHydraulicModel = (model) => {
    if (!model) return false;
    const name = model.name.toLowerCase();
    return model.hp >= 50 || name.includes('novo') || name.includes('arjun') || name.includes('gearpro') || name.includes('powerhouse') || name.includes('magna') || name.includes('powermaxx') || model.id.startsWith('nh') || model.id.startsWith('jd');
  };

  const hasClutchCable = (model) => {
    if (!model) return false;
    const name = model.name.toLowerCase();
    return model.hp <= 30 || name.includes('mini') || name.includes('jivo') || name.includes('yuvraj') || name.includes('orchard') || name.includes('target') || name.includes('compact') || name.includes('188') || name.includes('717');
  };

  const isHydraulic = isHydraulicModel(model);
  const isCable = hasClutchCable(model);

  // Filter clutch parts based on compatibility
  const filteredParts = clutchPartsData.filter(part => {
    if (part.id === 'cp-clutch-cable') {
      return isCable;
    }
    if (part.id === 'cp-master-cylinder' || part.id === 'cp-slave-cylinder') {
      return isHydraulic;
    }
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3.5 scrollbar-none">
      {/* Model Compatibility Info Banner */}
      {model && (
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-3.5 mt-2 flex flex-col space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider">
              {lang === 'hi' ? 'मॉडल की जानकारी' : 'Model Specifications'}
            </span>
            <span className="text-[10px] font-black text-neutral-500">
              {model.hp} HP
            </span>
          </div>
          <h4 className="text-xs font-black text-neutral-800">{model.name}</h4>
          <p className="text-[10px] text-neutral-500 font-bold leading-normal">
            {isHydraulic 
              ? (lang === 'hi' ? 'यह मॉडल हाइड्रोलिक क्लच सिस्टम का उपयोग करता है।' : 'This model uses a Hydraulic Clutch system.')
              : isCable
                ? (lang === 'hi' ? 'यह मॉडल केबल-संचालित क्लच सिस्टम का उपयोग करता है।' : 'This model uses a Cable-operated Clutch system.')
                : (lang === 'hi' ? 'यह मॉडल मैकेनिकल लिंकेज क्लच सिस्टम का उपयोग करता है।' : 'This model uses a Mechanical Linkage Clutch system.')
            }
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3.5 pt-1">
        {filteredParts.map(part => (
          <div 
            key={part.id} 
            onClick={() => onSelectPart && onSelectPart(part)}
            className="relative cursor-pointer rounded-2xl bg-white border border-neutral-100 p-3 shadow-3xs flex flex-col items-center justify-between hover:shadow-xs hover:border-emerald-250 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
          >
            {/* Part Image */}
            <div className="w-full h-24 overflow-hidden rounded-xl bg-neutral-50 mt-4 mb-2 flex items-center justify-center shrink-0 border border-neutral-100">
              <ProductImage 
                type={part.imageType} 
                className="w-full h-full object-contain rounded-xl p-1"
              />
            </div>

            {/* Part Name */}
            <div className="text-center w-full pt-1.5 border-t border-neutral-50">
              <h4 className="text-xs font-black text-neutral-800 leading-snug truncate">
                {lang === 'hi' ? part.nameHi : part.nameEn}
              </h4>
              <p className="text-[10px] text-primary-750 font-black mt-0.5">
                ₹{part.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
