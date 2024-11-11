import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Regex para permitir apenas números
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Valor digitado: ${inputValue}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Digite um valor numerico" 
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
