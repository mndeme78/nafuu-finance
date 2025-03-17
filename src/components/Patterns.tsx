export const CirclePattern = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circles)" />
  </svg>
);

export const DotsPattern = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

export const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 0 L40 0 M0 0 L0 40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export const WavePattern = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
        <path d="M0 10 Q25 0, 50 10 T100 10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#waves)" />
  </svg>
);

export const HexagonPattern = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
        <path d="M25 0 L50 14.4 L50 28.8 L25 43.2 L0 28.8 L0 14.4 Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
); 