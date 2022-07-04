import React, { useState, useEffect } from "react";

function Item({ val, index }) {
  const [item, setItem] = useState(val);

  // useEffect(() => {}, []);
  return (
    <div key={index} className="grid grid-cols-7 justify-center">
      <span>{index + 1}</span>
      <input
        value={item.name}
        onChange={(e) =>
          setItem((prevProps) => {
            return { ...prevProps, name: e.target.value };
          })
        }
        className="w-24"
        type="text"
        placeholder="itemName"
      />
      <input
        value={item.quantity}
        onChange={(e) =>
          setItem((prevProps) => {
            return { ...prevProps, quantity: e.target.value };
          })
        }
        className="w-20"
        type="text"
        placeholder="Quantity"
      />
      <input
        value={item.price}
        onChange={(e) =>
          setItem((prevProps) => {
            return { ...prevProps, price: e.target.value };
          })
        }
        className="w-20"
        type="text"
        placeholder="Price"
      />
      <input
        value={item.amount}
        onChange={(e) => {
          setItem((prevProps) => {
            return { ...prevProps, amount: e.target.value };
          });
        }}
        className="w-20"
        type="text"
        placeholder="Amount"
      />
      <input
        value={item.gst}
        onChange={(e) =>
          setItem((prevProps) => {
            return { ...prevProps, gst: e.target.value };
          })
        }
        className="w-20"
        type="text"
        placeholder="GST"
      />
      <button
        // onClick={removeHandler}
        className="text-white border-solid border-2 bg-blue-600 round-xl m-1 w-6 rounded-full font-serif hover:bg-gray-400  "
      >
        X
      </button>
    </div>
  );
}

export default Item;
