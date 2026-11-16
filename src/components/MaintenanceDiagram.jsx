/**
 * Decorative illustration for the computer-maintenance services: a desktop
 * with a service badge next to a panel of hardware/software health checks.
 * Vector, so it stays sharp and adds no image request. Two layouts, matching
 * NetworkDiagram: wide from `sm` up, stacked-and-legible on phones.
 */
const WRENCH_PATH =
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z";

const checks = [
  { label: "CPU", fill: 0.86 },
  { label: "RAM", fill: 0.72 },
  { label: "SSD", fill: 0.9 },
  { label: "OS", fill: 0.78 },
];

// Each layout needs its own paint-server ids: the hidden layout is still first in
// the document, so shared ids would resolve to defs inside a display:none subtree.
function Defs({ suffix }) {
  return (
    <defs>
      <linearGradient id={`mNodeFill-${suffix}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0e1a2f" />
        <stop offset="1" stopColor="#0b1324" />
      </linearGradient>
      <linearGradient id={`mBarFill-${suffix}`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#22d3ee" stopOpacity="0.85" />
        <stop offset="1" stopColor="#3b82f6" stopOpacity="0.85" />
      </linearGradient>
    </defs>
  );
}

function WrenchBadge({ cx, cy, r, scale }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#0e1a2f" stroke="#22d3ee" strokeOpacity="0.45" />
      <g
        transform={`translate(${cx - 12 * scale} ${cy - 12 * scale}) scale(${scale})`}
        fill="none"
        stroke="#22d3ee"
        strokeWidth={1.8 / scale}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={WRENCH_PATH} />
      </g>
    </g>
  );
}

function WideDiagram() {
  return (
    <svg
      viewBox="0 14 640 156"
      role="img"
      aria-label="Diagram: a desktop computer being serviced, with health checks for CPU, RAM, SSD and operating system"
      className="hidden h-auto w-full sm:block"
    >
      <Defs suffix="wide" />

      {/* Monitor */}
      <rect x="40" y="34" width="156" height="92" rx="9" fill="url(#mNodeFill-wide)" stroke="#22d3ee" strokeOpacity="0.35" />
      <rect x="50" y="44" width="136" height="72" rx="5" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.18" />
      <path d="M62 58 H120 M62 70 H104 M62 82 H132 M62 94 H112" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
      <rect x="108" y="126" width="20" height="10" fill="url(#mNodeFill-wide)" stroke="#22d3ee" strokeOpacity="0.3" />
      <rect x="86" y="136" width="64" height="6" rx="3" fill="url(#mNodeFill-wide)" stroke="#22d3ee" strokeOpacity="0.3" />

      {/* Tower */}
      <rect x="208" y="44" width="48" height="92" rx="7" fill="url(#mNodeFill-wide)" stroke="#22d3ee" strokeOpacity="0.35" />
      <rect x="218" y="56" width="28" height="5" rx="2.5" fill="#22d3ee" fillOpacity="0.5" />
      <rect x="218" y="67" width="28" height="5" rx="2.5" fill="#22d3ee" fillOpacity="0.35" />
      <rect x="218" y="78" width="28" height="5" rx="2.5" fill="#22d3ee" fillOpacity="0.25" />
      <circle cx="232" cy="122" r="4" fill="#22d3ee" fillOpacity="0.7" />

      <WrenchBadge cx="196" cy="118" r="18" scale={0.85} />

      {/* Link to the check panel */}
      <path d="M262 92 H286" fill="none" stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />

      {/* Health checks */}
      <rect x="294" y="30" width="306" height="116" rx="12" fill="url(#mNodeFill-wide)" stroke="#22d3ee" strokeOpacity="0.25" />
      {checks.map(({ label, fill }, i) => {
        const y = 52 + i * 24;
        return (
          <g key={label}>
            <text x="310" y={y + 8} fill="#94a3b8" fontSize="11" fontFamily="inherit">{label}</text>
            <rect x="352" y={y} width="212" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.06" />
            <rect x="352" y={y} width={Math.round(212 * fill)} height="7" rx="3.5" fill="url(#mBarFill-wide)" />
          </g>
        );
      })}
    </svg>
  );
}

function CompactDiagram() {
  return (
    <svg
      viewBox="0 0 320 250"
      role="img"
      aria-label="Diagram: a desktop computer being serviced, with health checks for CPU, RAM, SSD and operating system"
      className="h-auto w-full sm:hidden"
    >
      <Defs suffix="compact" />

      {/* Monitor */}
      <rect x="86" y="16" width="148" height="86" rx="8" fill="url(#mNodeFill-compact)" stroke="#22d3ee" strokeOpacity="0.35" />
      <rect x="95" y="25" width="130" height="68" rx="4" fill="#0b1324" stroke="#22d3ee" strokeOpacity="0.18" />
      <path d="M107 40 H160 M107 52 H144 M107 64 H172 M107 76 H152" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
      <rect x="152" y="102" width="16" height="8" fill="url(#mNodeFill-compact)" stroke="#22d3ee" strokeOpacity="0.3" />
      <rect x="134" y="110" width="52" height="5" rx="2.5" fill="url(#mNodeFill-compact)" stroke="#22d3ee" strokeOpacity="0.3" />

      <WrenchBadge cx="234" cy="96" r="16" scale={0.75} />

      <path d="M160 120 V146" fill="none" stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" />

      {/* Health checks */}
      {checks.map(({ label, fill }, i) => {
        const y = 152 + i * 24;
        return (
          <g key={label}>
            <text x="22" y={y + 9} fill="#94a3b8" fontSize="12" fontFamily="inherit">{label}</text>
            <rect x="84" y={y} width="196" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.06" />
            <rect x="84" y={y} width={Math.round(196 * fill)} height="7" rx="3.5" fill="url(#mBarFill-compact)" />
          </g>
        );
      })}
    </svg>
  );
}

export default function MaintenanceDiagram() {
  return (
    <>
      <WideDiagram />
      <CompactDiagram />
    </>
  );
}
