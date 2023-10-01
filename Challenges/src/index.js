// import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/*
// CHALLENGE 1,2 [Profile Card]
import "./style1.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

let emojies = { beginner: "👶", intermediate: "👍", advanced: "💪" };

function App() {
  return (
    <div>
      <Challenge1 />
    </div>
  );
}

function Challenge1() {
  return (
    <div>
      <h1>Challenge 1</h1>
      <div className="card">
        <Avatar name="boy-img.jpg" />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.name} alt="Kid-Img" />;
}

function Intro() {
  return (
    <div>
      <h1>This is Ajay Ganesh</h1>
      <p>
        This is Ajay Ganesh, Student at VIT, Vellore.Pursuing BTECH. I like to
        learn WEB Development
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>
        {skillObj.skill} {emojies[skillObj.level]}
      </span>
    </div>
  );
}
*/

// CHALLENGE 3 [Date Counter V1]

// Mine

/*
function App() {
  return <Counter />;
}

function Counter() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

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
    <div>
      <div style={styleObj}>
        <button onClick={() => negativeBtn("step")}>-</button>
        <span style={{ padding: "4px" }}>Step: {step}</span>
        <button onClick={() => plusBtn("step")}>+</button>
      </div>

      <div style={styleObj}>
        <button onClick={() => negativeBtn("count")}>-</button>
        <span style={{ padding: "4px" }}>Count: {count}</span>
        <button onClick={() => plusBtn("count")}>+</button>
      </div>

      <p>{message}</p>
    </div>
  );
}


*/

// Jonas
/*
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

function App() {
  return <p>Hello React!</p>;
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
