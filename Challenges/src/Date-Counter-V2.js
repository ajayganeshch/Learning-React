import React, { useState } from "react";

export function App() {
  return <CounterV2 />;
}
function CounterV2() {
  let styleObj = { margin: "4px", fontSize: "20px" };
  let buttonStyle = { fontSize: "15px", padding: "10px 20px" };
  let inputStyle = { fontSize: "20px", padding: "5px", margin: "5px" };

  const [counterState, setCounterState] = useState({
    range: 1,
    valueEnterd: 0,
  });

  let date = new Date();
  date.setDate(date.getDate() + counterState.valueEnterd);

  // date.setDate()
  // react is all about immutabity.
  function handleRange(e) {
    setCounterState((prevState) => ({ ...prevState, range: +e.target.value }));
  }

  function handleValue(e) {
    setCounterState((prevState) => ({
      ...prevState,
      valueEnterd: +e.target.value,
    }));
  }

  function handleBtn(sign) {
    setCounterState((prevState) => ({
      ...prevState,
      valueEnterd:
        sign === "neg"
          ? prevState.valueEnterd - prevState.range
          : prevState.valueEnterd + prevState.range,
    }));
  }

  function resetFun() {
    setCounterState({
      range: 1,
      valueEnterd: 0,
    });
  }

  return (
    <div style={{ margin: "20px" }}>
      <input
        style={{ ...inputStyle, marginLeft: "18px" }}
        type="range"
        min={1}
        max={10}
        value={counterState.range}
        onChange={handleRange}
      />
      <span>{counterState.range}</span>

      <div style={{ margin: "10px" }}>
        <button style={buttonStyle} onClick={() => handleBtn("neg")}>
          -
        </button>
        <input
          style={inputStyle}
          type="text"
          value={counterState.valueEnterd}
          onChange={handleValue}
        />
        <button style={buttonStyle} onClick={() => handleBtn("pos")}>
          +
        </button>
      </div>

      <div style={{ margin: "20px" }}>
        <span style={styleObj}>
          {counterState.valueEnterd === 0
            ? "Today is "
            : counterState.valueEnterd > 0
            ? `${counterState.valueEnterd} ${
                counterState.valueEnterd === 1 ? "day" : "days"
              } from today is `
            : `${Math.abs(counterState.valueEnterd)} ${
                counterState.valueEnterd === -1 ? "day" : "days"
              } ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>

      {counterState.valueEnterd !== 0 || counterState.range !== 1 ? (
        <div>
          <button style={buttonStyle} onClick={resetFun}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
