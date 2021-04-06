import React from "react";

export default function Date({ setDate }) {
  function handleDate(e) {
    // console.log(e.target.value);
    setDate(e.target.value);
  }

  return (
    <div>
      <input onChange={handleDate} type="date" id="birthday" name="birthday" />
    </div>
  );
}
