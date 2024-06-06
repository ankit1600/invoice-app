import React, { useState } from "react";
import Item from "./Item";
import Note from "./Note";
import Total from "./Total";
import DownloadButton from "./DownloadButton";
import jsPDF from "jspdf";

function Input() {
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    price: "",
    amount: "",
    gst: "",
  });

  const [products, setProducts] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [grossAmount, setGrossAmount] = useState(0);
  const [billingDate, setBillingDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [netAmount, setNetAmount] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const submitHandler = () => {
    setProducts((prevProps) => [...prevProps, item]);
    setItem({
      name: "",
      quantity: "",
      price: "",
      amount: "",
      gst: "",
    });
  };

  const removeItem = (indexToRemove) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, index) => index !== indexToRemove)
    );
  };

  const downloadPDF = (
    products,
    customerName,
    grossAmount,
    billingDate,
    dueDate,
    netAmount,
    gstAmount,
    totalAmount
  ) => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set up the initial y position for the content
    let y = 10;

    // Add the header for the bill
    doc.text("Invoice", 10, y);
    y += 10;

    // Loop through the products and add them to the PDF
    products.forEach((product, index) => {
      const { name, quantity, price, amount, gst } = product;
      const text = `${
        index + 1
      }. ${name} - Quantity: ${quantity}, Price: ${price}, Amount: ${amount}, GST: ${gst}`;
      doc.text(text, 10, y);
      y += 10;
    });

    // Add additional fields
    doc.text(`Name: ${customerName}`, 10, y);
    y += 10;

    doc.text(`Gross Amount: ${grossAmount}`, 10, y);
    y += 10;

    doc.text(`Billing Date: ${billingDate}`, 10, y);
    y += 10;

    doc.text(`Due Date: ${dueDate}`, 10, y);
    y += 10;

    doc.text(`Net Amount: ${netAmount}`, 10, y);
    y += 10;

    doc.text(`GST Amount: ${gstAmount}`, 10, y);
    y += 10;

    doc.text(`TOTAL: ${totalAmount}`, 10, y);
    y += 10;

    // Save the PDF with a filename
    doc.save("invoice.pdf");
  };

  return (
    <>
      {products.map((val, index) => (
        <Item
          key={index}
          val={val}
          index={index}
          products={products}
          setProducts={setProducts}
          removeItem={removeItem}
        />
      ))}
      <div className="grid grid-cols-7 justify-center p-3 bg-blue-200 rounded-lg gap-2">
        <span></span>
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
      </div>
      <div className="flex justify-end p-3">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-gray-400"
          onClick={submitHandler}
        >
          Add row
        </button>
      </div>
      <Total products={products} />

      <div className="flex justify-end mb-4">
        <DownloadButton
          onClick={() =>
            downloadPDF(
              products,
              customerName,
              grossAmount,
              billingDate,
              dueDate,
              netAmount,
              gstAmount,
              totalAmount
            )
          }
        />
      </div>
      <Note
        setCustomerName={setCustomerName}
        setGrossAmount={setGrossAmount}
        setBillingDate={setBillingDate}
        setDueDate={setDueDate}
        setNetAmount={setNetAmount}
        setGstAmount={setGstAmount}
        setTotalAmount={setTotalAmount}
      />
    </>
  );
}

export default Input;
