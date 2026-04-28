import React from 'react';

/**
 * Reusable Button Component
 * Supports multiple variants: primary, secondary, outline
 * Sizes: sm, md, lg
 * States: default, hover, disabled
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-orange-600 text-white hover:bg-orange-700 hover:text-white active:bg-orange-800 shadow-md hover:shadow-lg',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-slate-900 active:bg-slate-300 shadow-sm',
    outline:
      'border-2 border-orange-600 text-orange-600 hover:bg-orange-50 hover:text-orange-700 active:bg-orange-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
