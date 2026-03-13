import React from 'react';
import { StarIcon } from '@/components/icons';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  showValue = true,
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, index) => (
        <StarIcon
          key={index}
          className={`${sizes[size]} ${
            index < Math.floor(value) ? 'text-secondary-400' : 'text-dark-600'
          }`}
          filled={index < Math.floor(value)}
        />
      ))}
      {showValue && (
        <span className={`ml-1 font-semibold text-secondary-400 ${textSizes[size]}`}>
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};
