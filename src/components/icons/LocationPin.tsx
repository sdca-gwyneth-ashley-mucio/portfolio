import React from 'react';

interface LocationPinProps {
  className?: string;
  size?: number;
}

export const LocationPin: React.FC<LocationPinProps> = ({
  className = 'w-4 h-4 text-[#7A5C12]',
  size = 16,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 21c-4.5-5.5-7-9.5-7-13a7 7 0 1 1 14 0c0 3.5-2.5 7.5-7 13z" />
    <circle cx="12" cy="8" r="2.5" fill="currentColor" opacity="0.25" />
  </svg>
);
