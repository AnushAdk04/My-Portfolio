import React from 'react';

/**
 * Badge Component
 * Small label component for tags, statuses, or categories
 * Variants: primary, secondary, success, warning
 */
export const Badge = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200';

  const variants = {
    primary: 'bg-orange-100 text-orange-800',
    secondary: 'bg-slate-100 text-slate-800',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
