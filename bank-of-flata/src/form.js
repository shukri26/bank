import React, { useState } from "react";

function Form({ onSubmit }) {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ date, category, description, amount });
      setDate("");
      setCategory("");
      setDescription("");
      setAmount("");
    };
    
    return (
      <div className="form-div">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Date:
        <input
          className="date-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        </label>
        <label>
          Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        </label>
        <label>
          Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </label>
        <label>
          Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
      </div>
);
}

export default Form;