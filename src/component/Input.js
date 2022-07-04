import React, { useState } from "react";
import Item from "./Item";
import Note from "./Note";
import Total from "./Total";

function Input() {
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    price: "",
    amount: "",
    gst: "",
  });

  const [products, setProducts] = useState([]);

  const submitHandler = () => {
    setProducts((prevProps) => {
      return [...prevProps, item];
    });
    setItem({
      name: "",
      quantity: "",
      price: "",
      amount: "",
      gst: "",
    });
  };

  return (
    <>
      {products.map((val, index) => {
        return <Item key={index} val={val} index={index} />;
      })}
      <div className="grid grid-cols-7 justify-center p-3 bg-blue-200 rounded-lg">
        <span></span>
        <input
          value={item.name}
          onChange={(e) =>
            setItem((prevProps) => {
              return { ...prevProps, name: e.target.value };
            })
          }
          className="w-20 p-1"
          type="text"
          placeholder="ItemName"
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
      </div>
      <hr />

      <div className=" flex flex-row">
        <button
          className="text-white border-solid border-2 bg-blue-500 w-24  m-3  rounded-md font-serif hover:bg-gray-400  "
          onClick={submitHandler}
        >
          Add row
        </button>
      </div>
      <Total products={products} />
      <Note />
    </>
  );
}

export default Input;
