export function SkylineSvgFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 select-none">
      <svg
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[500px] object-contain drop-shadow-[0_0_25px_rgba(168,123,52,0.2)]"
      >
        <defs>
          <linearGradient id="goldSkyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#A87B34" />
            <stop offset="50%" stop-color="#F5DE9C" />
            <stop offset="100%" stop-color="#E3C27A" />
          </linearGradient>
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#E3C27A" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#1A1A1A" stop-opacity="0" />
          </linearGradient>
          <radialGradient id="skylineAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#E3C27A" stop-opacity="0.15" />
            <stop offset="100%" stop-color="#1A1A1A" stop-opacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Back Glow */}
        <ellipse cx="350" cy="270" rx="260" ry="180" fill="url(#skylineAura)" />

        {/* Ground Plane & Perspective Grid */}
        <polygon points="100,380 600,380 680,480 20,480" fill="url(#groundGrad)" />
        <g stroke="#E3C27A" stroke-opacity="0.25" stroke-width="1">
          <line x1="100" y1="380" x2="600" y2="380" />
          <line x1="75" y1="410" x2="625" y2="410" />
          <line x1="50" y1="440" x2="650" y2="440" />
          <line x1="20" y1="480" x2="680" y2="480" />
          
          <line x1="350" y1="380" x2="350" y2="480" />
          <line x1="280" y1="380" x2="230" y2="480" />
          <line x1="210" y1="380" x2="110" y2="480" />
          <line x1="420" y1="380" x2="470" y2="480" />
          <line x1="490" y1="380" x2="590" y2="480" />
        </g>

        {/* 5 Stylised Charcoal & Gold Towers */}
        
        {/* Tower 5 (Left-Back) */}
        <g>
          <rect x="180" y="210" width="60" height="170" fill="#181818" stroke="url(#goldSkyGrad)" stroke-width="1.5" />
          <line x1="210" y1="180" x2="210" y2="210" stroke="url(#goldSkyGrad)" stroke-width="2" />
          {/* Windows */}
          <g fill="#F5DE9C" fill-opacity="0.75">
            <rect x="190" y="230" width="10" height="6" rx="1" />
            <rect x="220" y="230" width="10" height="6" rx="1" />
            <rect x="190" y="250" width="10" height="6" rx="1" />
            <rect x="220" y="250" width="10" height="6" rx="1" />
            <rect x="190" y="280" width="10" height="6" rx="1" />
            <rect x="220" y="300" width="10" height="6" rx="1" />
            <rect x="190" y="330" width="10" height="6" rx="1" />
            <rect x="220" y="350" width="10" height="6" rx="1" />
          </g>
        </g>

        {/* Tower 2 (Left Mid) */}
        <g>
          <rect x="235" y="150" width="85" height="230" fill="#1C1C1C" stroke="url(#goldSkyGrad)" stroke-width="1.8" />
          <polygon points="235,150 277,110 320,150" fill="#24201A" stroke="url(#goldSkyGrad)" stroke-width="1.5" />
          {/* Windows */}
          <g fill="#F5DE9C" fill-opacity="0.8">
            <rect x="250" y="170" width="14" height="8" rx="1" />
            <rect x="275" y="170" width="14" height="8" rx="1" />
            <rect x="295" y="170" width="14" height="8" rx="1" />
            <rect x="250" y="200" width="14" height="8" rx="1" />
            <rect x="295" y="200" width="14" height="8" rx="1" />
            <rect x="275" y="230" width="14" height="8" rx="1" />
            <rect x="250" y="260" width="14" height="8" rx="1" />
            <rect x="295" y="260" width="14" height="8" rx="1" />
            <rect x="250" y="300" width="14" height="8" rx="1" />
            <rect x="275" y="300" width="14" height="8" rx="1" />
            <rect x="275" y="340" width="14" height="8" rx="1" />
          </g>
        </g>

        {/* Tower 1 (Center Marquee Icon) */}
        <g>
          <rect x="310" y="80" width="105" height="300" fill="#1E1E1E" stroke="url(#goldSkyGrad)" stroke-width="2.2" />
          {/* Stepped Crown & Spire */}
          <rect x="330" y="55" width="65" height="25" fill="#26221C" stroke="url(#goldSkyGrad)" stroke-width="1.8" />
          <line x1="362" y1="20" x2="362" y2="55" stroke="url(#goldSkyGrad)" stroke-width="3" />
          <circle cx="362" cy="18" r="3" fill="#F5DE9C" />
          {/* Architectural Vertical Accents */}
          <line x1="345" y1="80" x2="345" y2="380" stroke="#E3C27A" stroke-opacity="0.4" stroke-width="1.2" />
          <line x1="380" y1="80" x2="380" y2="380" stroke="#E3C27A" stroke-opacity="0.4" stroke-width="1.2" />
          {/* Windows Matrix */}
          <g fill="#F5DE9C" fill-opacity="0.85">
            <rect x="325" y="105" width="12" height="7" rx="1" />
            <rect x="357" y="105" width="12" height="7" rx="1" />
            <rect x="388" y="105" width="12" height="7" rx="1" />
            <rect x="325" y="135" width="12" height="7" rx="1" />
            <rect x="388" y="135" width="12" height="7" rx="1" />
            <rect x="357" y="165" width="12" height="7" rx="1" />
            <rect x="325" y="195" width="12" height="7" rx="1" />
            <rect x="388" y="195" width="12" height="7" rx="1" />
            <rect x="325" y="235" width="12" height="7" rx="1" />
            <rect x="357" y="235" width="12" height="7" rx="1" />
            <rect x="388" y="235" width="12" height="7" rx="1" />
            <rect x="357" y="275" width="12" height="7" rx="1" />
            <rect x="325" y="315" width="12" height="7" rx="1" />
            <rect x="388" y="315" width="12" height="7" rx="1" />
          </g>
        </g>

        {/* Tower 3 (Right Mid) */}
        <g>
          <rect x="405" y="130" width="85" height="250" fill="#1A1A1A" stroke="url(#goldSkyGrad)" stroke-width="1.8" />
          <polygon points="405,130 447,95 490,130" fill="#24201A" stroke="url(#goldSkyGrad)" stroke-width="1.5" />
          {/* Windows */}
          <g fill="#F5DE9C" fill-opacity="0.8">
            <rect x="420" y="155" width="14" height="8" rx="1" />
            <rect x="460" y="155" width="14" height="8" rx="1" />
            <rect x="440" y="185" width="14" height="8" rx="1" />
            <rect x="420" y="215" width="14" height="8" rx="1" />
            <rect x="460" y="215" width="14" height="8" rx="1" />
            <rect x="420" y="255" width="14" height="8" rx="1" />
            <rect x="440" y="295" width="14" height="8" rx="1" />
            <rect x="460" y="335" width="14" height="8" rx="1" />
          </g>
        </g>

        {/* Tower 4 (Right-Fore) */}
        <g>
          <rect x="480" y="230" width="70" height="150" fill="#171717" stroke="url(#goldSkyGrad)" stroke-width="1.5" />
          {/* Windows */}
          <g fill="#F5DE9C" fill-opacity="0.75">
            <rect x="495" y="255" width="12" height="7" rx="1" />
            <rect x="525" y="255" width="12" height="7" rx="1" />
            <rect x="495" y="285" width="12" height="7" rx="1" />
            <rect x="525" y="315" width="12" height="7" rx="1" />
            <rect x="495" y="345" width="12" height="7" rx="1" />
          </g>
        </g>

        {/* Water Reflection Fade Accent */}
        <rect x="180" y="380" width="370" height="40" fill="url(#groundGrad)" opacity="0.3" />
      </svg>
    </div>
  );
}
