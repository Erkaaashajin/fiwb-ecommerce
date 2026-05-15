"use client";

import { motion } from "framer-motion";

// Light-visible prism — vibrant synthwave gradient background
export default function HeroPrism() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493]/8 via-[#FF6EB4]/5 via-50% to-[#FF6347]/8" />
      <svg
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px]"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="prismL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1493" stopOpacity="0.35" />
            <stop offset="25%" stopColor="#FF6EB4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FF6347" stopOpacity="0.25" />
            <stop offset="75%" stopColor="#FFD700" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF1493" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="prismR" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6347" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FF1493" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glowL">
            <feGaussianBlur stdDeviation="32" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowR">
            <feGaussianBlur stdDeviation="24" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Main prism triangle */}
        <polygon points="250,40 460,360 40,360" fill="url(#prismL)" filter="url(#glowL)">
          <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="360 250 200" dur="20s" repeatCount="indefinite" />
        </polygon>
        {/* Secondary prism triangle */}
        <polygon points="250,70 430,330 70,330" fill="url(#prismR)" filter="url(#glowR)" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" from="0 250 200" to="-360 250 200" dur="30s" repeatCount="indefinite" />
        </polygon>
        {/* Center accent glow */}
        <ellipse cx="250" cy="200" rx="120" ry="80" fill="url(#prismL)" opacity="0.15" filter="url(#glowL)">
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      {/* Perspective grid lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1493]/20 to-transparent"
          style={{
            top: `${120 + i * 4}px`,
            transform: `perspective(600px) rotateX(${-20 + i * 5}deg)`,
            transformOrigin: "center top",
          }}
        />
      ))}
      {/* Animated floating orbs */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-[#FF1493]/10 blur-2xl"
        style={{ top: "30%", left: "15%" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-[#FF6347]/10 blur-xl"
        style={{ top: "60%", right: "15%" }}
        animate={{ x: [0, -20, 0], y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-[#FFD700]/5 blur-3xl"
        style={{ top: "20%", right: "35%" }}
        animate={{ x: [0, 15, 0], y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}