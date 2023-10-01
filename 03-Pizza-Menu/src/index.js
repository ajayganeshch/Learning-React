import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };

  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Ajay Ganesh Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // let newProps = {
  //   name: "Pizza Prosciutto",
  //   ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
  //   price: 18,
  //   photoName: "pizzas/prosciutto.jpg",
  // };
  return (
    <main className="menu">
      <PizzaMenuHeader />
      <MenuPizzas />

      {/* Spread operator is also nice but everytime for each element if we spread then rendenring speed will be decrease */}
      {/* Than spread we can also use Destructing this will be useful */}
      {/* <Pizza {...newProps} /> */}

      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={10}
      /> */}
    </main>
  );
}

function PizzaMenuHeader() {
  return <h2>Our Menu</h2>;
}

function MenuPizzas() {
  let howManyThere = pizzasNumber();

  return howManyThere > 0 ? (
    <>
      <p>
        The best pizza restaurant in the universe. The master chef, ‘Ajay
        Ganesh’, has received more than 10 awards for his cooking recipes.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </>
  ) : (
    <p>Please comeback later, We are still preparing Menu :)</p>
  );
}

function pizzasNumber() {
  let pizzas = pizzaData;
  let numPizzas = pizzas.length;

  return numPizzas;
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );

  // props = props.pizzaObj;
  // console.log(props);
  // return (
  //   <div className="pizza">
  //     <img src={props.photoName} alt={props.name} />
  //     <div>
  //       <h3>{props.name}</h3>
  //       <p>{props.ingredients}</p>
  //       <span>{props.price}</span>
  //     </div>
  //   </div>
  // );
}

function Footer() {
  let hour = new Date().getHours();
  let openHour = 10;
  let closeHour = 24;

  let isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  let message =
    hour >= openHour && hour <= closeHour
      ? `We are open until ${closeHour}:00. Come Visit us or Order Online 🕺🏻`
      : `We Are Closed 🥲, Please comeback between ${openHour}:00 and ${closeHour}:00`;

  let objPassed = {
    message: message,
    isOpen: isOpen,
  };

  return (
    <footer className="footer">
      <OrderAcceptOrNot objPassedIn={objPassed} />
    </footer>
  );

  // return React.createElement(
  //   "footer",
  //   null,
  //   `We are open now (${new Date().toLocaleTimeString()})`
  // );
}

function OrderAcceptOrNot({ objPassedIn }) {
  // console.log(props);
  // console.log(props.objPassed);

  console.log(objPassedIn);
  return (
    <div className="order">
      <p>{objPassedIn.message}</p>
      {objPassedIn.isOpen && <button className="btn">Order</button>}
    </div>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
