import React, { useState } from "react";

function App() {
  const [InputText, setInputText] = useState("");
  const [Items, setItems] = useState([]);
  function handleChange(event) {
    const newvalue = event.target.value;
    setInputText(newvalue);
  }
  function addItem() {
    setItems((previtems) => {
      return [...previtems, InputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={InputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Items.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
