'use client';

import { useState } from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  popular = false,
  cta
}: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        popular
          ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
          : 'bg-white text-gray-900 shadow-lg hover:shadow-2xl border border-gray-200'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          MOST POPULAR
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <div className="flex items-end justify-center gap-2">
          <span className={`text-5xl font-extrabold ${popular ? 'text-white' : 'text-gray-900'}`}>
            {price}
          </span>
          <span className={`text-lg mb-2 ${popular ? 'text-blue-100' : 'text-gray-500'}`}>
            {period}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-start gap-3 transition-all duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <svg
              className={`w-6 h-6 flex-shrink-0 ${popular ? 'text-blue-200' : 'text-green-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={popular ? 'text-blue-50' : 'text-gray-700'}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          popular
            ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-xl'
        }`}
      >
        {cta}
      </button>
    </div>
  );
}