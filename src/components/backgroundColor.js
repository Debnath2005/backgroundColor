import React, { useState } from "react";

function Tempapp() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "red";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
    }
  };
  return (
    <div className="classBtn">
      <button className="btn" onClick={toggleMode}>
        Click here to change the background Color
      </button>
    </div>
  );
}
export default Tempapp;
