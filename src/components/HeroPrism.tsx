"use client";

// Light prism — SVG-based animated triangle mesh on white/cream background
export default function HeroPrism() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/40 via-pink-50/30 to-amber-50/40" />
      <svg
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px]"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="prismL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5F5" stopOpacity="0.7" />
            <stop offset="25%" stopColor="#F0C6E8" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FFB3D9" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#FFD9B3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFE8CC" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glowL">
            <feGaussianBlur stdDeviation="28" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <polygon points="250,30 470,370 30,370" fill="url(#prismL)" filter="url(#glowL)">
          <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
        </polygon>
        <polygon points="250,60 440,340 60,340" fill="url(#prismL)" filter="url(#glowL)" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="-360 250 200" dur="30s" repeatCount="indefinite" />
        </polygon>
      </svg>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200/30 to-transparent"
          style={{ bottom: `${160 + i * 22}px`, transform: `perspective(400px) rotateX(${-15 + i * 3}deg)`, transformOrigin: "center bottom" }}
        />
      ))}
    </div>
  );
}