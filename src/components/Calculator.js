import React, { useState } from 'react';

import './Calculator.css'

export default function Calculator() {

  const [binaryValue, setBinaryValue] = useState('');
  const [decimalValue, setDecimalValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleConversion() {
    if(binaryValue.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Entre apenas com os valores 0 ou 1!");
      return
    } 

    setDecimalValue(parseInt(binaryValue, 2))
    setErrorMessage('');
  }

  return (
    <>
      <div className="container">
        <h1>Conversor de binário para decimal</h1>
        <div className="errorContainer">
          <p>{errorMessage}</p>
        </div>

        <form 
          onSubmit={
            (e) => {
              e.preventDefault();
              handleConversion();
            }}>
          <input 
            type="text" 
            placeholder="Digite 0 ou 1"
            name="value"
            onChange={event => setBinaryValue(event.target.value)}
            maxLength="8"
            value={binaryValue}/>
          <button type="submit">Converter</button>
        </form>

        <h1>Resultado: {decimalValue}</h1>
      </div>
    </>
  );
}

