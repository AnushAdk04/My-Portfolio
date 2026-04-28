import React from 'react';

/**
 * Reusable Card Component
 * Provides consistent card styling with shadow elevation
 * Variants: default, hover-lift
 */
export const Card = ({
  children,
  className = '',
  variant = 'default',
  hoverable = false,
  ...props
}) => {
  const baseStyles =
    'bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300';

  const hoverStyles = hoverable
    ? 'hover:shadow-lg hover:border-slate-300 hover:-translate-y-1'
    : 'shadow-md';

  const variants = {
    default: 'shadow-md',
    elevated: 'shadow-lg',
    flat: 'shadow-none border-slate-100',
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverable ? hoverStyles : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
