'use client';

import { forwardRef } from 'react';

const buttonVariants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white border-transparent shadow-lg shadow-primary-500/25',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white border-transparent shadow-lg shadow-secondary-500/25',
  outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border-primary-500',
  ghost: 'bg-transparent hover:bg-gray-50 text-gray-900 border-transparent',
  danger: 'bg-red-500 hover:bg-red-600 text-white border-transparent shadow-lg shadow-red-500/25',
  success: 'bg-green-500 hover:bg-green-600 text-white border-transparent shadow-lg shadow-green-500/25',
};

const buttonSizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-13 px-8 text-lg',
  xl: 'h-16 px-10 text-xl',
};

const Button = forwardRef(({ 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  loading = false,
  children, 
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold micro-transition button-click focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border';
  
  const classes = `${baseClasses} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg 
          className="mr-2 h-4 w-4 animate-spin" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;