import React from "react";
import "./css/date.css";
export default function Date({ setDate }) {
  function handleDate(e) {
    // console.log(e.target.value);
    setDate(e.target.value);
  }

  return (
    <div className="date">
      <input
        id="date-input"
        onChange={handleDate}
        type="date"
        name="birthday"
      />
    </div>
  );
}
