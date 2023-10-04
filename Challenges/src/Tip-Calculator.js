import React, { useState } from "react";

export function App() {
  return <TipCalc />;
}

function TipCalc() {
  let styleObj = { margin: "4px", fontSize: "20px" };

  const [bill, setBill] = useState("");

  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const percentageTotalValue = (percentage1 + percentage2) / 2 / 100;

  const tip = bill * percentageTotalValue;

  function handelResetBtn() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div style={{ ...styleObj, marginTop: "40px" }}>
      <TotalBill bill={bill} onSetBill={setBill} />

      <PercentageValue
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How you liked our service
      </PercentageValue>

      <PercentageValue
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How your friend liked our service
      </PercentageValue>

      <FinalOutput bill={bill} tip={tip} />

      <ResetBtn onResetBtn={handelResetBtn} />
    </div>
  );
}

function TotalBill({ bill, onSetBill }) {
  let inputStyle = { margin: "4px", fontSize: "20px" };

  function handleInputBill(e) {
    if (!isNaN(e.target.value)) {
      onSetBill(+e.target.value);
    }
  }

  return (
    <div style={{ margin: "20px" }}>
      <label style={{ marginRight: "10px" }}>How much was the bill?</label>
      <input
        style={inputStyle}
        type="text"
        placeholder="Total Bill"
        value={bill}
        onChange={(e) => handleInputBill(e)}
      />
    </div>
  );
}

function PercentageValue({ children, percentage, onSetPercentage }) {
  let inputStyle = { margin: "4px", fontSize: "20px" };

  return (
    <div style={{ margin: "20px" }}>
      <label style={{ marginRight: "10px" }}>{children}</label>
      <select
        style={inputStyle}
        value={percentage}
        onChange={(e) => onSetPercentage(+e.target.value)}
      >
        <option value="0">Not Satisfied (0%)</option>
        <option value="5">Good (5%)</option>
        <option value="10">Excellent (10%)</option>
        <option value="20">Satisfied (20%)</option>
      </select>
    </div>
  );
}

function FinalOutput({ bill, tip }) {
  function toFixedFunc(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(3);
  }

  return bill > 0 ? (
    <>
      <h3 style={{ margin: "20px" }}>
        You have to pay : $ {toFixedFunc(bill + tip)} (${toFixedFunc(bill)} Bill
        + ${toFixedFunc(tip)} Tip)
      </h3>
      <p style={{ margin: "20px" }}>
        *We calculate the tip as the average percentage of both values that you
        entered 😊*
      </p>
    </>
  ) : null;
}

function ResetBtn({ onResetBtn }) {
  return (
    <button
      style={{ marginLeft: "20px", fontSize: "20px" }}
      onClick={onResetBtn}
    >
      Reset
    </button>
  );
}
