import React, { useState } from "react";

function Top() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="p-3">
      <h1 className="font-bold mb-3 text-xl">Bill to:</h1>
      <div className="mb-3">
        <span>Name: </span>
        <input
          value={name}
          type="text"
          className="border border-gray-300 p-2 rounded-md w-64"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <span>Gross Amount: </span>
        <input
          type="number"
          value={amount}
          className="border border-gray-300 p-2 rounded-md w-64"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <span>Billing Date: </span>
        <input type="date" className="border border-gray-300 p-2 rounded-md" />
      </div>
      <div className="mb-3">
        <span>Due Date: </span>
        <input type="date" className="border border-gray-300 p-2 rounded-md" />
      </div>
    </div>
  );
}

export default Top;
