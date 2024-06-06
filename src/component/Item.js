import React, { useState } from "react";

// function Item({ val, index }) {
//   const [item, setItem] = useState(val);
function Item({ val, index, products, setProducts, removeItem }) {
  const [item, setItem] = useState(val);
  return (
    <div key={index} className="grid grid-cols-7 justify-center p-2 gap-2">
      <span className="text-center">{index + 1}</span>
      <input
        value={item.name}
        onChange={(e) =>
          setItem((prevProps) => ({ ...prevProps, name: e.target.value }))
        }
        className="w-24 p-1"
        type="text"
        placeholder="Item Name"
      />
      <input
        value={item.quantity}
        onChange={(e) =>
          setItem((prevProps) => ({ ...prevProps, quantity: e.target.value }))
        }
        className="w-24 p-1"
        type="text"
        placeholder="Quantity"
      />
      <input
        value={item.price}
        onChange={(e) =>
          setItem((prevProps) => ({ ...prevProps, price: e.target.value }))
        }
        className="w-24 p-1"
        type="text"
        placeholder="Price"
      />
      <input
        value={item.amount}
        onChange={(e) =>
          setItem((prevProps) => ({ ...prevProps, amount: e.target.value }))
        }
        className="w-24 p-1"
        type="text"
        placeholder="Amount"
      />
      <input
        value={item.gst}
        onChange={(e) =>
          setItem((prevProps) => ({ ...prevProps, gst: e.target.value }))
        }
        className="w-24 p-1"
        type="text"
        placeholder="GST"
      />
      <button
        onClick={() => removeItem(index)}
        className="text-white bg-blue-600 rounded-full px-2 hover:bg-gray-400"
      >
        X
      </button>
    </div>
  );
}

export default Item;
