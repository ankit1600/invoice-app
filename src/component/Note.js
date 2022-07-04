import React, { useState } from "react";

function Note() {
  const [notes, setNotes] = useState("Notes");
  const [note, setNote] = useState("It was great doing business with you.");
  const [condition, setCondition] = useState("Terms & Conditions");
  const [term, setTerm] = useState("Please make the payment by the due date.");

  return (
    <div className="flex">
      <div className="flex flex-col self-end w-full m-3 ">
        <input
          type="text"
          className="input font-bold m-2 focus:bg-blue-100"
          placeholder=""
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <textarea
          className="input w-100 m-2 focus:bg-blue-100"
          placeholder=""
          value={note}
          onChange={(e) => setNote(e.target.value)}
          //   style="height: 48.0317px !important;"
        ></textarea>

        <input
          type="text"
          className="input font-bold m-2 focus:bg-blue-100"
          placeholder=""
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <textarea
          className="input w-100  m-2 focus:bg-blue-100"
          placeholder=""
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          //   style="height: 48.0317px !important;"
        ></textarea>
      </div>
    </div>
  );
}

export default Note;
