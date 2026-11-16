/**
 * Two smaller network illustrations for the services gallery: a switch cabinet
 * being patched, and a Wi-Fi coverage plan. Same vector style as NetworkDiagram
 * — no image requests, legible from phone width up.
 */

export function RackDiagram() {
  const ports = (x, y, count, gap, w = 9) =>
    Array.from({ length: count }, (_, i) => (
      <rect key={i} x={x + i * gap} y={y} width={w} height="9" rx="2" fill="#38bdf8" fillOpacity="0.45" />
    ));

  return (
    <svg
      viewBox="0 0 320 160"
      role="img"
      aria-label="Illustration: a network cabinet with a router, switch and patch panel, with patch cords leading out to wall outlets"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="rFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0e1a2f" />
          <stop offset="1" stopColor="#0b1324" />
        </linearGradient>
      </defs>

      {/* Cabinet */}
      <rect x="26" y="14" width="150" height="132" rx="8" fill="url(#rFill)" stroke="#22d3ee" strokeOpacity="0.3" />

      {/* Router unit */}
      <rect x="34" y="24" width="134" height="22" rx="4" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.25" />
      <rect x="40" y="31" width="26" height="8" rx="2" fill="#22d3ee" fillOpacity="0.5" />
      <circle cx="150" cy="35" r="3" fill="#22d3ee" />
      <circle cx="160" cy="35" r="3" fill="#22d3ee" fillOpacity="0.5" />

      {/* Switch unit */}
      <rect x="34" y="52" width="134" height="22" rx="4" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.25" />
      {ports(42, 58, 8, 11)}

      {/* Patch panel */}
      <rect x="34" y="80" width="134" height="22" rx="4" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.25" />
      {ports(42, 86, 10, 9, 7)}
      <rect x="34" y="108" width="134" height="26" rx="4" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.15" />
      <path d="M44 118 H158 M44 126 H132" stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />

      {/* Patch cords leaving the panel */}
      <g fill="none" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round">
        <path d="M176 90 C 208 90, 214 52, 244 52" />
        <path d="M176 96 C 212 96, 218 92, 244 92" />
        <path d="M176 102 C 210 102, 216 128, 244 128" />
      </g>

      {/* Wall outlets */}
      {[44, 84, 120].map((y) => (
        <g key={y}>
          <rect x="244" y={y} width="52" height="18" rx="4" fill="url(#rFill)" stroke="#3b82f6" strokeOpacity="0.28" />
          <circle cx="254" cy={y + 9} r="2.5" fill="#22d3ee" fillOpacity="0.7" />
          <path d={`M262 ${y + 9} H286`} stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

export function WifiDiagram() {
  return (
    <svg
      viewBox="0 0 320 160"
      role="img"
      aria-label="Illustration: a Wi-Fi access point covering a floor plan, reaching a laptop and a phone"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="wFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0e1a2f" />
          <stop offset="1" stopColor="#0b1324" />
        </linearGradient>
      </defs>

      {/* Floor plan */}
      <rect x="18" y="18" width="168" height="124" rx="8" fill="url(#wFill)" stroke="#22d3ee" strokeOpacity="0.25" />
      <path d="M96 18 V84 M96 84 H18 M120 84 V142" stroke="#22d3ee" strokeOpacity="0.16" strokeWidth="1.6" />

      {/* Access point */}
      <circle cx="70" cy="52" r="12" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.45" />
      <circle cx="70" cy="52" r="3" fill="#22d3ee" />
      <g fill="none" stroke="#22d3ee" strokeLinecap="round">
        <path d="M58 40 a17 17 0 0 0 0 24" strokeOpacity="0.5" strokeWidth="1.8" />
        <path d="M50 32 a28 28 0 0 0 0 40" strokeOpacity="0.32" strokeWidth="1.6" />
        <path d="M42 24 a39 39 0 0 0 0 56" strokeOpacity="0.18" strokeWidth="1.4" />
        <path d="M82 40 a17 17 0 0 1 0 24" strokeOpacity="0.5" strokeWidth="1.8" />
        <path d="M90 32 a28 28 0 0 1 0 40" strokeOpacity="0.32" strokeWidth="1.6" />
        <path d="M98 24 a39 39 0 0 1 0 56" strokeOpacity="0.18" strokeWidth="1.4" />
      </g>

      {/* Laptop */}
      <g>
        <rect x="196" y="46" width="86" height="52" rx="5" fill="url(#wFill)" stroke="#3b82f6" strokeOpacity="0.3" />
        <rect x="204" y="54" width="70" height="36" rx="3" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.18" />
        <path d="M188 106 H290 L282 116 H196 Z" fill="url(#wFill)" stroke="#3b82f6" strokeOpacity="0.3" />
        <circle cx="239" cy="111" r="2.5" fill="#22d3ee" fillOpacity="0.6" />
      </g>

      {/* Phone */}
      <g>
        <rect x="200" y="122" width="26" height="30" rx="5" fill="url(#wFill)" stroke="#3b82f6" strokeOpacity="0.3" />
        <rect x="204" y="127" width="18" height="17" rx="2" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.18" />
        <path d="M234 132 h8 M234 137 h8 M234 142 h5" stroke="#22d3ee" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
