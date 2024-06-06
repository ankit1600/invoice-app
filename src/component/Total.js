import React, { useState } from "react";

function Total({ products }) {
  const [net, setNet] = useState("");
  const [gst, setGst] = useState("");
  const [total, setTotal] = useState("");

  return (
    <div className="flex flex-col p-3 self-end">
      <div className="mb-3">
        <span>Net Amount: </span>
        <input
          value={net}
          onChange={(e) => setNet(e.target.value)}
          type="number"
          className="border border-gray-300 p-2 rounded-md w-64"
        />
      </div>
      <div className="mb-3">
        <span>GST Amount: </span>
        <input
          value={gst}
          onChange={(e) => setGst(e.target.value)}
          type="number"
          className="border border-gray-300 p-2 rounded-md w-64"
        />
      </div>
      <div className="bg-blue-400 p-3 rounded-md">
        <span className="text-white">TOTAL: </span>
        <input
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          type="number"
          className="ml-2 p-2 rounded-md"
        />
      </div>
    </div>
  );
}

export default Total;
