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
    default:
      return null;
  }
}
