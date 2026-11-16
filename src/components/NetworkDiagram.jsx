/**
 * Decorative network topology illustration for the services section.
 * Vector, so it stays sharp on any screen and adds no image request.
 * Two layouts: a wide left-to-right chain for `sm` and up, and a shorter
 * stacked chain for phones, where the wide one would scale down past legibility.
 */
const nodeFill = "url(#nodeFill)";

function Definitions() {
  return (
    <defs>
      <linearGradient id="nodeFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0e1a2f" />
        <stop offset="1" stopColor="#0b1324" />
      </linearGradient>
      <linearGradient id="linkStroke" x1="0" y1="0" x2="640" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#22d3ee" stopOpacity="0.55" />
        <stop offset="1" stopColor="#3b82f6" stopOpacity="0.55" />
      </linearGradient>
    </defs>
  );
}

function WideDiagram() {
  return (
    <svg
      viewBox="0 10 640 160"
      role="img"
      aria-label="Diagram: an internet link feeding a router and a switch, which serve a Wi-Fi access point, a workstation and a server"
      className="hidden h-auto w-full sm:block"
    >
      <Definitions />

      <g fill="none" stroke="url(#linkStroke)" strokeWidth="2" strokeLinecap="round">
        <path d="M100 110 H166" strokeDasharray="5 6" />
        <path d="M278 110 H328" />
        <path d="M440 110 H456 V60 H470" />
        <path d="M440 110 H470" />
        <path d="M440 110 H456 V160 H470" />
      </g>

      {/* Internet */}
      <circle cx="70" cy="110" r="30" fill={nodeFill} stroke="#22d3ee" strokeOpacity="0.35" />
      <ellipse cx="70" cy="110" rx="12" ry="30" fill="none" stroke="#22d3ee" strokeOpacity="0.22" />
      <path d="M40 96 H100 M40 124 H100" stroke="#22d3ee" strokeOpacity="0.22" fill="none" />
      <text x="70" y="152" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="inherit">
        Internet
      </text>

      {/* Router */}
      <rect x="168" y="86" width="110" height="48" rx="12" fill={nodeFill} stroke="#22d3ee" strokeOpacity="0.35" />
      <rect x="182" y="104" width="26" height="12" rx="3" fill="#22d3ee" fillOpacity="0.55" />
      <circle cx="258" cy="110" r="3.5" fill="#22d3ee" />
      <text x="223" y="152" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontFamily="inherit">
        Router
      </text>

      {/* Switch */}
      <rect x="330" y="86" width="110" height="48" rx="12" fill={nodeFill} stroke="#22d3ee" strokeOpacity="0.35" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={344 + i * 14} y={104} width="8" height="12" rx="2" fill="#38bdf8" fillOpacity="0.5" />
      ))}
      <text x="385" y="152" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontFamily="inherit">
        Switch
      </text>

      {/* Endpoints */}
      {[
        { y: 43, label: "Wi-Fi AP", icon: "wifi" },
        { y: 93, label: "Workstation", icon: "screen" },
        { y: 143, label: "Server", icon: "server" },
      ].map(({ y, label, icon }) => (
        <g key={label}>
          <rect x="470" y={y} width="150" height="34" rx="9" fill={nodeFill} stroke="#3b82f6" strokeOpacity="0.28" />
          <circle cx="490" cy={y + 17} r="3" fill="#22d3ee" fillOpacity="0.7" />
          {icon === "wifi" && (
            <path
              d="M501 21 a12 12 0 0 1 14 0 M505 25 a6 6 0 0 1 6 0"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.6"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
          {icon === "screen" && (
            <rect x="501" y={y + 11} width="13" height="10" rx="1.5" fill="none" stroke="#22d3ee" strokeOpacity="0.6" />
          )}
          {icon === "server" && (
            <>
              <rect x="501" y={y + 10} width="13" height="5" rx="1.5" fill="#22d3ee" fillOpacity="0.5" />
              <rect x="501" y={y + 18} width="13" height="5" rx="1.5" fill="#22d3ee" fillOpacity="0.5" />
            </>
          )}
          <text x="522" y={y + 21} fill="#cbd5e1" fontSize="12" fontFamily="inherit">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CompactDiagram() {
  return (
    <svg
      viewBox="0 0 320 250"
      role="img"
      aria-label="Diagram: an internet link feeding a router and a switch, which serve a Wi-Fi access point, a desktop and a server"
      className="h-auto w-full sm:hidden"
    >
      <defs>
        <linearGradient id="nodeFillMobile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0e1a2f" />
          <stop offset="1" stopColor="#0b1324" />
        </linearGradient>
      </defs>

      {/* Spine */}
      <g fill="none" stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round">
        <path d="M40 60 V80" strokeDasharray="4 5" />
        <path d="M40 122 V142" />
        <path d="M40 184 V200 H286 V214" />
        <path d="M160 200 V214" />
      </g>

      {/* Internet */}
      <circle cx="40" cy="36" r="22" fill="url(#nodeFillMobile)" stroke="#22d3ee" strokeOpacity="0.35" />
      <ellipse cx="40" cy="36" rx="9" ry="22" fill="none" stroke="#22d3ee" strokeOpacity="0.22" />
      <path d="M19 27 H61 M19 45 H61" stroke="#22d3ee" strokeOpacity="0.22" fill="none" />
      <text x="74" y="41" fill="#94a3b8" fontSize="13" fontFamily="inherit">Internet</text>

      {/* Router */}
      <rect x="16" y="80" width="48" height="42" rx="10" fill="url(#nodeFillMobile)" stroke="#22d3ee" strokeOpacity="0.35" />
      <rect x="28" y="95" width="20" height="11" rx="3" fill="#22d3ee" fillOpacity="0.55" />
      <text x="74" y="106" fill="#cbd5e1" fontSize="13" fontFamily="inherit">Router</text>

      {/* Switch */}
      <rect x="16" y="142" width="48" height="42" rx="10" fill="url(#nodeFillMobile)" stroke="#22d3ee" strokeOpacity="0.35" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={25 + i * 8} y={157} width="5" height="11" rx="1.5" fill="#38bdf8" fillOpacity="0.5" />
      ))}
      <text x="74" y="168" fill="#cbd5e1" fontSize="13" fontFamily="inherit">Switch</text>

      {/* Endpoints */}
      {[
        { cx: 40, label: "Wi-Fi" },
        { cx: 160, label: "Desktop" },
        { cx: 286, label: "Server" },
      ].map(({ cx, label }) => (
        <g key={label}>
          <rect x={cx - 38} y="214" width="76" height="30" rx="8" fill="url(#nodeFillMobile)" stroke="#3b82f6" strokeOpacity="0.28" />
          <circle cx={cx - 26} cy="229" r="2.5" fill="#22d3ee" fillOpacity="0.7" />
          <text x={cx - 16} y="233" fill="#cbd5e1" fontSize="11" fontFamily="inherit">{label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function NetworkDiagram() {
  return (
    <>
      <WideDiagram />
      <CompactDiagram />
    </>
  );
}
