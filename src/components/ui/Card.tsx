import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
  dark?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  noPadding = false,
  dark = false,
}) => {
  const baseStyles = 'rounded-2xl overflow-hidden';
  const bgStyles = dark ? 'bg-dark-800 border border-dark-700' : 'bg-white shadow-lg';
  const paddingStyles = noPadding ? '' : 'p-6';
  const hoverStyles = hover ? 'card-hover cursor-pointer' : '';

  return (
    <div className={`${baseStyles} ${bgStyles} ${paddingStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
