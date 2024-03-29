import { useState } from "react";
import './App.css';

const NumberSelector = () => {
  const [selectedNumber, setSelectedNumber] = useState(50);

  // 数字が変更されたときの処理
  const handleNumberChange = (event) => {
    setSelectedNumber(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <label htmlFor = "numberSelector">数字を選択してください：</label>
      <input
        type="number"
        id="numberSelector"
        value={selectedNumber}
        onChange={handleNumberChange}
        min="1"
        max="100" 
      />
      <p>{selectedNumber}</p>
    </div>

  );
};

export default NumberSelector;
