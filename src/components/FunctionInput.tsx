import React, { InputHTMLAttributes, useState, memo } from 'react';

interface FunctionInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props specific to your input component
}

const FunctionInput =  memo((props) => {
  const [input, setInput] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  return <input {...props} value={input} onInput={handleChange} />;
});

export default FunctionInput;