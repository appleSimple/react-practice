import { useCallback, useState } from 'react';
import './App.css';
import Input from './components/Input';
import FunctionInput from './components/FunctionInput';
import Block from './components/Block';

function App() {
  const [count, setCount] = useState(0);

  function handleChange() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleChange}>Increment</button>
        {count}
      </div>
      <p>
        <div>block input</div>
        <Block>
          <Input />
        </Block>
      </p>
      <p>
        <div>input</div>
        <Input />
      </p>
      <p>
        <div>Function input</div>
        <FunctionInput />
      </p>
    </div>
  );
}

export default App;
