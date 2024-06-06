import React, { useState } from "react";
import jsPDF from "jspdf";

function Note({
  setCustomerName,
  setGrossAmount,
  setBillingDate,
  setDueDate,
  setNetAmount,
  setGstAmount,
  setTotalAmount,
  products, // Add products as a prop
}) {
  const [notes, setNotes] = useState("Notes");
  const [note, setNote] = useState("It was great doing business with you.");
  const [condition, setCondition] = useState("Terms & Conditions");
  const [term, setTerm] = useState("Please make the payment by the due date.");

  const downloadPDF = () => {
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
    doc.text(`Notes: ${notes}`, 10, y);
    y += 10;

    doc.text(`Note: ${note}`, 10, y);
    y += 10;

    doc.text(`Condition: ${condition}`, 10, y);
    y += 10;

    doc.text(`Term: ${term}`, 10, y);
    y += 10;

    // Save the PDF with a filename
    doc.save("invoice.pdf");
  };

  return (
    <div className="flex flex-col p-3">
      <input
        type="text"
        className="font-bold p-2 mb-2 border border-gray-300 rounded-md focus:bg-blue-100"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <textarea
        className="p-2 mb-2 border border-gray-300 rounded-md focus:bg-blue-100"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={2}
      />
      <input
        type="text"
        className="font-bold p-2 mb-2 border border-gray-300 rounded-md focus:bg-blue-100"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />
      <textarea
        className="p-2 mb-2 border border-gray-300 rounded-md focus:bg-blue-100"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        rows={2}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={downloadPDF}
      >
        Download PDF
      </button>
    </div>
  );
}

export default Note;
