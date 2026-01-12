import { forwardRef } from 'react';

const Card = forwardRef(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
));

const CardHeader = forwardRef(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`px-6 py-4 border-b border-gray-100 ${className}`}
    {...props}
  >
    {children}
  </div>
));

const CardContent = forwardRef(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`px-3 py-4 ${className}`}
    {...props}
  >
    {children}
  </div>
));

const CardFooter = forwardRef(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`px-6 py-4 border-t border-gray-100 ${className}`}
    {...props}
  >
    {children}
  </div>
));

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };