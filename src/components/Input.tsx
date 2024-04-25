import React, { forwardRef, InputHTMLAttributes, useState, memo, useCallback } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props specific to your input component
}

const Input = memo(forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [input, setInput] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('input 렌더링');
    
    setInput(event.target.value)
  }, []);

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   console.log('input 렌더링');
    
  //   setInput(event.target.value)
  // }

  return <input ref={ref} {...props} value={input} onInput={handleChange} />;
}));

export default Input;

Input.displayName = 'Input';