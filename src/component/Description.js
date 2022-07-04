import React, { useState } from "react";
import Input from "./Input";

function Description() {
  return (
    <div className="flex flex-col w-full px-3">
      <div className="grid grid-cols-7 justify-center p-3 bg-blue-400 text-white rounded-lg">
        <div className="col-span-1">
          <span>S.No.</span>
        </div>
        <div className="col-span-1">
          <span>Product Name</span>
        </div>
        <div className="col-span-1">
          <span> Quantity </span>
        </div>
        <div className="col-span-1">
          <span> Price </span>
        </div>
        <div className="col-span-1">
          <span> Amount</span>{" "}
        </div>
        <div className="col-span-1">
          <span>GST Rate</span>{" "}
        </div>
        <span></span>
      </div>
      <Input />
    </div>
  );
}

export default Description;
