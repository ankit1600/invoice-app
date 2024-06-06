import React from "react";

function DownloadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
    >
      Download PDF
    </button>
  );
}

export default DownloadButton;
