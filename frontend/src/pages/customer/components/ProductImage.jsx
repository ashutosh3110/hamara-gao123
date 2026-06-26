import React from 'react';

export default function ProductImage({ type, className = "w-full h-24 object-contain" }) {
  switch (type) {
    case 'tomatoes':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-red-50 rounded-xl p-1`}>
          <circle cx="35" cy="55" r="18" fill="#ea4335" />
          <path d="M35,37 Q37,33 35,35" stroke="#34a853" strokeWidth="3" strokeLinecap="round" />
          <circle cx="65" cy="55" r="18" fill="#ea4335" />
          <path d="M65,37 Q67,33 65,35" stroke="#34a853" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="65" r="20" fill="#c5221f" />
          <path d="M50,45 C48,42 52,42 50,45 Z" fill="#34a853" stroke="#34a85a" strokeWidth="2" />
        </svg>
      );
    case 'potatoes':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-amber-50 rounded-xl p-1`}>
          <ellipse cx="50" cy="55" rx="26" ry="18" fill="#d2b48c" />
          <circle cx="40" cy="48" r="1.5" fill="#8b7355" />
          <circle cx="62" cy="52" r="1.5" fill="#8b7355" />
          <circle cx="52" cy="62" r="1.5" fill="#8b7355" />
        </svg>
      );
    case 'onion':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-pink-50 rounded-xl p-1`}>
          <path d="M50,20 C32,45 32,75 50,80 C68,75 68,45 50,20 Z" fill="#d06080" stroke="#a03050" strokeWidth="1.5" />
          <path d="M50,20 L50,15" stroke="#8b9a47" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'ladyfinger':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-green-50 rounded-xl p-1`}>
          <path d="M30,80 C40,75 75,30 80,25 C80,25 78,28 72,36 C65,45 35,75 30,80 Z" fill="#4caf50" />
          <path d="M30,80 Q25,85 22,83" stroke="#388e3c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'cauliflower':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-emerald-50 rounded-xl p-1`}>
          <circle cx="35" cy="50" r="18" fill="#4caf50" />
          <circle cx="65" cy="50" r="18" fill="#4caf50" />
          <circle cx="50" cy="65" r="18" fill="#388e3c" />
          <circle cx="50" cy="45" r="20" fill="#f5f5f5" />
          <circle cx="43" cy="38" r="8" fill="#e0e0e0" />
          <circle cx="58" cy="40" r="8" fill="#e0e0e0" />
        </svg>
      );
    case 'greenpeas':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-lime-50 rounded-xl p-1`}>
          <path d="M15,50 Q50,70 85,50 Q50,30 15,50 Z" fill="#8bc34a" />
          <circle cx="35" cy="50" r="8" fill="#4caf50" />
          <circle cx="50" cy="50" r="8" fill="#4caf50" />
          <circle cx="65" cy="50" r="8" fill="#4caf50" />
        </svg>
      );
    case 'spinach':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-green-50 rounded-xl p-1`}>
          <path d="M50,80 Q35,45 35,25 Q50,15 65,25 Q65,45 50,80 Z" fill="#4caf50" />
          <line x1="50" y1="80" x2="50" y2="25" stroke="#2e7d32" strokeWidth="2" />
          <line x1="50" y1="60" x2="40" y2="45" stroke="#2e7d32" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="60" y2="35" stroke="#2e7d32" strokeWidth="1.5" />
        </svg>
      );
    case 'carrot':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-orange-50 rounded-xl p-1`}>
          <path d="M50,85 Q65,35 70,25 C70,25 60,22 50,25 Q35,35 50,85 Z" fill="#ff9800" />
          <path d="M60,25 Q65,10 70,12" stroke="#4caf50" strokeWidth="3" fill="none" />
          <path d="M55,25 Q52,8 48,10" stroke="#4caf50" strokeWidth="3" fill="none" />
        </svg>
      );
    case 'dap':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-neutral-50 rounded-xl p-1`}>
          <path d="M30,20 C30,15 40,12 50,12 C60,12 70,15 70,20 C70,28 66,75 62,85 C58,88 42,88 38,85 C34,75 30,28 30,20 Z" fill="#34a85a" stroke="#1b5730" strokeWidth="1.5" />
          <ellipse cx="50" cy="20" rx="20" ry="4" fill="#fbbc05" />
          <text x="50" y="42" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">IFFCO</text>
          <text x="50" y="55" fontFamily="sans-serif" fontSize="12" fontWeight="extrabold" fill="#fbbc05" textAnchor="middle">DAP</text>
          <text x="50" y="68" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#fff" textAnchor="middle">18-46-0</text>
        </svg>
      );
    case 'nanoUrea':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-neutral-50 rounded-xl p-1`}>
          <rect x="35" y="32" width="30" height="50" rx="6" fill="#fff" stroke="#ccc" strokeWidth="1.5" />
          <rect x="42" y="22" width="16" height="10" fill="#fff" stroke="#ccc" strokeWidth="1.5" />
          <rect x="40" y="16" width="20" height="7" fill="#34a85a" rx="1.5" />
          <rect x="36" y="42" width="28" height="25" fill="#34a85a" />
          <text x="50" y="52" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#fbbc05" textAnchor="middle">IFFCO</text>
          <text x="50" y="60" fontFamily="sans-serif" fontSize="6" fontWeight="extrabold" fill="#fff" textAnchor="middle">NANO UREA</text>
        </svg>
      );
    case 'organicKhada':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-neutral-50 rounded-xl p-1`}>
          <path d="M30,20 C30,15 40,12 50,12 C60,12 70,15 70,20 C70,28 66,75 62,85 C58,88 42,88 38,85 C34,75 30,28 30,20 Z" fill="#854d0e" stroke="#451a03" strokeWidth="1.5" />
          <ellipse cx="50" cy="20" rx="20" ry="4" fill="#a3e635" />
          <text x="50" y="42" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">ऑर्गेनिक</text>
          <text x="50" y="55" fontFamily="sans-serif" fontSize="12" fontWeight="extrabold" fill="#a3e635" textAnchor="middle">खाद</text>
          <text x="50" y="68" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#fff" textAnchor="middle">5 KG</text>
        </svg>
      );
    case 'zincSulfate':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-neutral-50 rounded-xl p-1`}>
          <path d="M30,20 C30,15 40,12 50,12 C60,12 70,15 70,20 C70,28 66,75 62,85 C58,88 42,88 38,85 C34,75 30,28 30,20 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
          <ellipse cx="50" cy="20" rx="20" ry="4" fill="#bae6fd" />
          <text x="50" y="42" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#fff" textAnchor="middle">जिंक सल्फेट</text>
          <text x="50" y="55" fontFamily="sans-serif" fontSize="10" fontWeight="extrabold" fill="#bae6fd" textAnchor="middle">ZINC</text>
          <text x="50" y="68" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#fff" textAnchor="middle">33% Zn</text>
        </svg>
      );
    case 'wheat':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-neutral-50 rounded-xl p-1`}>
          <ellipse cx="50" cy="70" rx="35" ry="18" fill="#d2b48c" stroke="#cfae80" strokeWidth="1" />
          <path d="M20,70 Q50,25 80,70 Z" fill="#f4c430" />
          <circle cx="45" cy="55" r="2.5" fill="#fff" opacity="0.6" />
          <circle cx="55" cy="58" r="2.5" fill="#fff" opacity="0.6" />
          <circle cx="38" cy="62" r="2" fill="#fff" opacity="0.6" />
        </svg>
      );
    case 'cp-clutch-plate':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-orange-50 rounded-xl p-1.5`}>
          <circle cx="50" cy="50" r="38" fill="none" stroke="#777" strokeWidth="8" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="#d32f2f" strokeWidth="4" />
          <circle cx="50" cy="50" r="16" fill="#555" />
          <path d="M50,30 L50,70 M30,50 L70,50 M36,36 L64,64 M36,64 L64,36" stroke="#999" strokeWidth="3" />
          <circle cx="50" cy="50" r="8" fill="#111" />
        </svg>
      );
    case 'cp-pressure-plate':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-slate-50 rounded-xl p-1.5`}>
          <circle cx="50" cy="50" r="40" fill="#9e9e9e" stroke="#616161" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="26" fill="#e0e0e0" />
          <path d="M50,24 L50,42 M50,58 L50,76 M24,50 L42,50 M58,50 L76,50 M32,32 L44,44 M56,56 L68,68 M32,68 L44,56 M56,44 L68,32" stroke="#757575" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="50" r="14" fill="#616161" />
        </svg>
      );
    case 'cp-release-bearing':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-blue-50 rounded-xl p-1.5`}>
          <circle cx="50" cy="50" r="30" fill="none" stroke="#b0bec5" strokeWidth="12" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="#90a4ae" strokeWidth="2" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="#78909c" strokeWidth="2" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="#546e7a" strokeWidth="4" />
        </svg>
      );
    case 'cp-clutch-bearing':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-sky-50 rounded-xl p-1.5`}>
          <circle cx="50" cy="50" r="32" fill="none" stroke="#b0bec5" strokeWidth="10" />
          <circle cx="50" cy="24" r="3.5" fill="#78909c" />
          <circle cx="50" cy="76" r="3.5" fill="#78909c" />
          <circle cx="24" cy="50" r="3.5" fill="#78909c" />
          <circle cx="76" cy="50" r="3.5" fill="#78909c" />
          <circle cx="32" cy="32" r="3.5" fill="#78909c" />
          <circle cx="68" cy="68" r="3.5" fill="#78909c" />
          <circle cx="32" cy="68" r="3.5" fill="#78909c" />
          <circle cx="68" cy="32" r="3.5" fill="#78909c" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#cfd8dc" strokeWidth="2" />
        </svg>
      );
    case 'cp-cover-assembly':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-neutral-100 rounded-xl p-1.5`}>
          <circle cx="50" cy="50" r="42" fill="#757575" />
          <circle cx="50" cy="50" r="32" fill="#e0e0e0" />
          <path d="M50,15 L50,85 M15,50 L85,50" stroke="#9e9e9e" strokeWidth="4" />
          <circle cx="50" cy="50" r="18" fill="#424242" />
          <circle cx="16" cy="16" r="3.5" fill="#fff" />
          <circle cx="84" cy="84" r="3.5" fill="#fff" />
          <circle cx="16" cy="84" r="3.5" fill="#fff" />
          <circle cx="84" cy="16" r="3.5" fill="#fff" />
        </svg>
      );
    case 'cp-clutch-fork':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-zinc-50 rounded-xl p-1.5`}>
          <path d="M50,15 L50,55 M50,55 Q50,75 25,75 M50,55 Q50,75 75,75" fill="none" stroke="#424242" strokeWidth="8" strokeLinecap="round" />
          <circle cx="50" cy="20" r="6" fill="#9e9e9e" />
          <circle cx="25" cy="75" r="5" fill="#9e9e9e" />
          <circle cx="75" cy="75" r="5" fill="#9e9e9e" />
        </svg>
      );
    case 'cp-clutch-hub':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-stone-50 rounded-xl p-1.5`}>
          <circle cx="50" cy="50" r="30" fill="#78909c" />
          <circle cx="50" cy="50" r="22" fill="#cfd8dc" stroke="#455a64" strokeWidth="1.5" />
          <path d="M50,22 L50,16 M50,78 L50,84 M22,50 L16,50 M78,50 L84,50" stroke="#37474f" strokeWidth="4" />
          <circle cx="50" cy="50" r="12" fill="#37474f" />
        </svg>
      );
    case 'cp-clutch-lever':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-emerald-50 rounded-xl p-1.5`}>
          <rect x="44" y="15" width="12" height="70" rx="6" fill="#757575" />
          <circle cx="50" cy="25" r="5" fill="#fff" />
          <circle cx="50" cy="50" r="5" fill="#fff" />
          <circle cx="50" cy="75" r="5" fill="#fff" />
        </svg>
      );
    case 'cp-release-sleeve':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-amber-50 rounded-xl p-1.5`}>
          <rect x="36" y="20" width="28" height="60" rx="3" fill="#90a4ae" />
          <rect x="28" y="20" width="44" height="12" fill="#546e7a" />
          <rect x="28" y="68" width="44" height="12" fill="#546e7a" />
          <circle cx="50" cy="50" r="8" fill="#37474f" />
        </svg>
      );
    case 'cp-clutch-cable':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-rose-55 bg-rose-50 rounded-xl p-1.5`}>
          <path d="M15,85 C35,65 35,35 85,15" fill="none" stroke="#212121" strokeWidth="6" strokeLinecap="round" />
          <path d="M15,85 C35,65 35,35 85,15" fill="none" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" />
          <rect x="80" y="8" width="10" height="10" transform="rotate(45 80 8)" fill="#757575" />
          <rect x="10" y="78" width="10" height="10" transform="rotate(45 10 78)" fill="#757575" />
        </svg>
      );
    case 'cp-pedal-bush':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-teal-50 rounded-xl p-1.5`}>
          <circle cx="35" cy="50" r="16" fill="none" stroke="#d84315" strokeWidth="8" />
          <circle cx="35" cy="50" r="12" fill="none" stroke="#ff8a50" strokeWidth="2" />
          <circle cx="65" cy="50" r="12" fill="none" stroke="#d84315" strokeWidth="6" />
        </svg>
      );
    case 'cp-master-cylinder':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-slate-100 rounded-xl p-1.5`}>
          <rect x="25" y="42" width="50" height="20" rx="3" fill="#616161" />
          <rect x="68" y="46" width="14" height="12" fill="#9e9e9e" />
          <rect x="35" y="18" width="22" height="24" fill="#eeeeee" stroke="#9e9e9e" strokeWidth="2" />
          <rect x="42" y="10" width="8" height="8" fill="#424242" />
          <circle cx="82" cy="52" r="3" fill="#424242" />
        </svg>
      );
    case 'cp-slave-cylinder':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-gray-50 rounded-xl p-1.5`}>
          <rect x="20" y="42" width="46" height="18" rx="2" fill="#757575" />
          <rect x="62" y="48" width="22" height="6" fill="#9e9e9e" />
          <circle cx="84" cy="51" r="3" fill="#ff7043" />
        </svg>
      );
    case 'cp-repair-kit':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-cyan-50 rounded-xl p-1.5`}>
          <circle cx="35" cy="35" r="14" fill="none" stroke="#ff1744" strokeWidth="5" />
          <circle cx="65" cy="40" r="10" fill="none" stroke="#3d5afe" strokeWidth="3" />
          <circle cx="45" cy="65" r="6" fill="none" stroke="#00e676" strokeWidth="4" />
          <line x1="20" y1="75" x2="80" y2="75" stroke="#757575" strokeWidth="4" strokeDasharray="3 3" />
        </svg>
      );
    case 'cp-complete-kit':
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-emerald-50 rounded-xl p-1.5`}>
          <circle cx="40" cy="55" r="28" fill="none" stroke="#757575" strokeWidth="6" />
          <circle cx="40" cy="55" r="12" fill="#555" />
          <circle cx="65" cy="40" r="26" fill="#cfd8dc" stroke="#78909c" strokeWidth="2" />
          <circle cx="65" cy="40" r="10" fill="#37474f" />
        </svg>
      );
    default:
      return null;
  }
}
