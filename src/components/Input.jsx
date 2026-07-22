import React from 'react';
import './Input.css';

const Input = React.forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <input 
        ref={ref}
        className={`custom-input ${error ? 'input-error' : ''}`} 
        {...props} 
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
