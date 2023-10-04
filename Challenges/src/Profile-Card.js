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

export function App() {
  return (
    <div>
      <Challenge1 />
    </div>
  );
}

function Challenge1() {
  return (
    <div>
      <div className="card">
        <h1 style={{ textAlign: "center" }}>Profile Card</h1>
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
  return <img className="avatar" src={props.name} alt="My-Img" />;
}

function Intro() {
  return (
    <div>
      <h1>Ajay Ganesh</h1>
      <p>
        This is Ajay Ganesh, Student at VIT, Vellore. I like to learn WEB
        Development
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, i) => (
        <Skill skillObj={skill} key={i} />
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
