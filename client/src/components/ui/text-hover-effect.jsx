// client/src/components/ui/text-hover-effect.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const TextHoverEffect = ({ text, duration }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 600 100" // Adjusted for longer text like "Welcome to My Portfolio"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration || 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>

        {/* Define the animation for mobile view */}
        <style>
          {`
            @keyframes gradientShift {
              0% { stroke: url(#textGradient); }
              25% { stroke: #ef4444; }
              50% { stroke: #3b82f6; }
              75% { stroke: #06b6d4; }
              100% { stroke: url(#textGradient); }
            }
            .mobile-animation {
              animation: gradientShift 3s infinite;
            }
            @media (min-width: 768px) {
              .mobile-animation {
                animation: none;
              }
            }
          `}
        </style>
      </defs>

      {/* Base text layer */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.9"
        className={cn(
          "fill-transparent stroke-neutral-200 font-sans text-5xl font-bold dark:stroke-neutral-800",
          { "opacity-70": hovered }
        )}
      >
        {text}
      </text>

      {/* Animated outline text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-sans text-5xl font-bold dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Text with gradient and mobile animation */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1"
        mask="url(#textMask)"
        className={cn(
          "fill-transparent font-sans text-5xl font-bold mobile-animation",
          { "md:stroke-[url(#textGradient)]": hovered }
        )}
      >
        {text}
      </text>
    </svg>
  );
};
