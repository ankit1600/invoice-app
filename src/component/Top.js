import React, { useState } from "react";

function Top() {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  return (
    <div>
      <div className=" p-3 ">
        <h1 className="font-bold m-1 p-1 text-xl">Bill to :-)</h1>
        <div className="name m-3 ">
          <span>Name- </span>
          <input
            value={name}
            type="text"
            className="border-solid border-2 border-sky-500 w-36 rounded-md"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="Amount m-3">
          <span>Gross Amount-</span>
          <input
            type="number"
            value={amount}
            className="border-solid border-2 border-sky-500 m-3 w-20 rounded-md"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="billing m-3">
          <span>Billing Date-</span>
          <input
            type="Date"
            className="border-solid border-2 border-sky-500 m-3 rounded-md"
          />
        </div>
        <div className="due m-3">
          <span> Due Date-</span>
          <input
            type="Date"
            className="border-solid border-2 border-sky-500 m-3 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
