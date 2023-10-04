import { useState } from "react";

//[Date Counter V1]

// Mine

export function App() {
  return <Counter />;
}

function Counter() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  let buttonStyle = { fontSize: "20px", padding: "10px 20px" };
  let styleObj = { marginBottom: "15px" };

  function dateFun(valueToAdd) {
    let date = new Date();
    date.setDate(date.getDate() + valueToAdd);
    return date.toDateString();

    // let options = {
    //   month: "long",
    //   day: "numeric",
    //   year: "numeric",
    //   weekday: "short",
    // };
    // let displayDate = new Intl.DateTimeFormat("en-In", options).format(date);
    // displayDate = displayDate.split(",").join(" ");
    // return displayDate;
  }

  let [message, setMessage] = useState(`Today ${dateFun(0)}`);

  function negativeBtn(namePassed) {
    if (namePassed === "step" && step > 1) {
      setStep((s) => s - 1);
    } else {
      setCount((s) => {
        const newCount = s - step;
        messageSet(newCount, newCount);
        return newCount;
      });
    }
  }

  function plusBtn(namePassed) {
    if (namePassed === "step") {
      setStep((s) => s + 1);
    } else if (namePassed === "count") {
      setCount((s) => {
        const newCount = s + step;
        messageSet(newCount, Math.abs(newCount));
        return newCount;
      });
    }
  }

  function messageSet(count, dateValue) {
    if (count === 0) {
      setMessage(`Today ${dateFun(0)}`);
    } else {
      let option = count < 1 ? "ago was" : "from today is";
      count = Math.abs(count);
      let dayVar = count === 1 ? "day" : "days";
      setMessage(() => `${count} ${dayVar} ${option}  ${dateFun(dateValue)}`);
    }
  }

  return (
    <div style={{ fontSize: "30px", margin: "25px" }}>
      <div style={styleObj}>
        <button style={buttonStyle} onClick={() => negativeBtn("step")}>
          -
        </button>

        <span style={{ padding: "10px" }}>Step: {step}</span>

        <button style={buttonStyle} onClick={() => plusBtn("step")}>
          +
        </button>
      </div>

      <div style={styleObj}>
        <button style={buttonStyle} onClick={() => negativeBtn("count")}>
          -
        </button>

        <span style={{ padding: "10px" }}>Count: {count}</span>

        <button style={buttonStyle} onClick={() => plusBtn("count")}>
          +
        </button>
      </div>

      <p>{message}</p>
    </div>
  );
}

// Jonas

/*

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
*/
