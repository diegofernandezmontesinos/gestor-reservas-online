import React, { useState } from "react";

const GestorReservas = () => {
  const [message, setMessage] = useState("");
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputSelectValue, setInputSelectValue] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const searchAvailableTable = () => {
    setMessage("Searching disponibility");
    setDisabled(true);

    setTimeout(() => {
      if (parseInt(inputSelectValue, 10) <= 6) {
        setMessage(`Reserved table for ${inputNameValue}`);
      } else {
        setMessage(`No table available for ${inputNameValue}`);
      }
      setDisabled(false);
    }, 2000);
  };

  const validValue = inputNameValue && inputSelectValue;
  return (
    <>
      <h1>Gestor de Reservas Online</h1>
      <input
        type="text"
        placeholder="Client Name"
        value={inputNameValue}
        onChange={(e) => setInputNameValue(e.target.value)}
      />
      <label>
        Number of Guests
        <select
          name="Number of Guests"
          onChange={(e) => setInputSelectValue(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
      <button
        onClick={searchAvailableTable}
        disabled={isDisabled || !validValue}
      >
        Reserve Table
      </button>
      {message && <p>Searching disponibility</p>}
    </>
  );
};

export default GestorReservas;
