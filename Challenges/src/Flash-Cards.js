import React, { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
function FlashCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((fs) => (
        <Flashcard
          fs={fs}
          key={fs.id}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      ))}
    </div>
  );
}
function Flashcard({ fs, selectedCard, setSelectedCard }) {
  function handleClick(id) {
    setSelectedCard(id !== selectedCard ? id : null);
  }

  return (
    <div
      className={selectedCard === fs.id ? "selected" : ""}
      onClick={() => handleClick(fs.id)}
    >
      <p>{selectedCard === fs.id ? fs.answer : fs.question}</p>
    </div>
  );
}
export function App() {
  return <FlashCards />;
}
