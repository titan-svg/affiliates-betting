import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  dark?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  dark = true,
  className = '',
  ...props
}) => {
  const bgStyles = dark
    ? 'bg-dark-800 border-dark-600 text-white placeholder-dark-400 focus:border-primary-500 focus:ring-primary-500'
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500';

  return (
    <div className={className}>
      {label && (
        <label className={`block text-sm font-medium mb-2 ${dark ? 'text-dark-200' : 'text-gray-700'}`}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-dark-400">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-3 rounded-xl border ${bgStyles} focus:outline-none focus:ring-2 transition-all duration-200 ${
            icon ? 'pl-12' : ''
          } ${error ? 'border-red-500' : ''}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
