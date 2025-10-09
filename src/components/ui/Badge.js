import { forwardRef } from 'react';

const badgeVariants = {
  default: 'bg-primary-50 text-primary-700 border-primary-200',
  primary: 'bg-primary-50 text-primary-700 border-primary-200',
  secondary: 'bg-secondary-50 text-secondary-700 border-secondary-200',
};

const Badge = forwardRef(({ 
  className = '', 
  variant = 'default', 
  children, 
  ...props 
}, ref) => (
  <span
    ref={ref}
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeVariants[variant]} ${className}`}
    {...props}
  >
    {children}
  </span>
));

Badge.displayName = 'Badge';

export default Badge;