'use client';

import { useState } from 'react';

interface CTAButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  text,
  variant = 'primary',
  className = '',
  onClick
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group";

  const variantClasses = variant === 'primary'
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-2xl"
    : "bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-500 shadow-md hover:shadow-xl";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
}
