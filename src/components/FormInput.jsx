import React from 'react';

/**
 * FormInput Component
 * Reusable form input with validation states
 * Supports text, email, phone, textarea types
 */
export const FormInput = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'w-full px-4 py-2.5 border rounded-lg transition-all duration-200 font-body text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0';

  const stateStyles = error
    ? 'border-red-500 bg-red-50'
    : 'border-slate-300 bg-white hover:border-slate-400 focus:border-orange-500';

  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Component
        type={type !== 'textarea' ? type : undefined}
        className={`${baseStyles} ${stateStyles} ${
          type === 'textarea' ? 'resize-none min-h-[120px]' : ''
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
