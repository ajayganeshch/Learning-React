// import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

// Task Accordion Component

// ---------------------------------------------------------------------

// Profle-Card

// import "./Profile-Card.css";
// import { App } from "./Profile-Card";

// ---------------------------------------------------------------------

// Date-Counter-V1

// import { App } from "./Date-Counter-V1";

// ---------------------------------------------------------------------

//Exercise 1 [FlashCards]:

// import "./Flash-Cards.css";
// import { App } from "./Flash-Cards";

// ---------------------------------------------------------------------

// Date Counter [V2]

// import { App } from "./Date-Counter-V2";

// ---------------------------------------------------------------------

// Exercise : [Accordion Component V-1]

// import "./accordioncss.css";
// import App from "./Accordion-V1";

// ---------------------------------------------------------------------

// Exercise 2 : Accordion Component V-2

// import "./accordioncss.css";
// import App from "./Accordion-V2";

// ---------------------------------------------------------------------

// Tip Calculator

// import { App } from "./Tip-Calculator";

// ---------------------------------------------------------------------

function App() {
  return <h1>Hello React!</h1>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
