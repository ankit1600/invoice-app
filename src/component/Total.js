import React, { useState } from "react";

function Total({ products }) {
  //   console.log(products[0].quantity);
  //   products.map((product) => {
  //     console.log(product);
  //   });
  const [net, setNet] = useState();
  const [gst, setGst] = useState();
  const [total, setTotal] = useState();

  return (
    <div className="flex flex-col ">
      <div className="self-end flex flex-col ">
        <div className=" name m-3 ">
          <span>Net Amount : </span>
          <input
            value={net}
            onChange={(e) => setNet(e.target.value)}
            type="number"
            className="border-solid border-2 border-sky-500 m-3 w-25 rounded-md"
          />
        </div>
        <div className="Amount m-3">
          <span>Gst Amount :</span>
          <input
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            type="number"
            className="border-solid border-2 border-sky-500 m-3 w-25 rounded-md"
          />
        </div>
        <hr className="h-6" />
        <div className="bg-blue-400 px-6 rounded-md">
          <span className="m-4">TOTAL :</span>
          <input
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            type="number"
            className="m-3 w-25 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Total;
