import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [{
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoPath: "pizzas/focaccia.jpg",
    soldOut: false,
}, {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoPath: "pizzas/margherita.jpg",
    soldOut: false,
}, {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoPath: "pizzas/spinaci.jpg",
    soldOut: false,
}, {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoPath: "pizzas/funghi.jpg",
    soldOut: false,
}, {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoPath: "pizzas/salamino.jpg",
    soldOut: true,
}, {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoPath: "pizzas/prosciutto.jpg",
    soldOut: false,
},];


function App() {
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>;
}


function Header() {
    // const style = {color: "red", fontSize: "42px", textTransform: "uppercase"};
    const style = {};

    return (<h1 className="header">
        Fast React Pizza Co.
    </h1>);
}

function Menu() {
    return (<main className="menu">
        <h2>Our menu</h2>

        <ul className="pizzas">
            {pizzaData.map((pizza => (
                <Pizza pizzaOpj={pizza} key={pizza.name}/>
            )))}
        </ul>

        {/*<Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese'*/}
        {/*       photoPath='pizzas/spinaci.jpg' price={10}/>*/}

        {/*<Pizza name='Pizza Funghai' ingredients='Tomato, mozarella, spinach, and ricotta cheese'*/}
        {/*       photoPath={'pizzas/funghi.jpg'} price={23}/>*/}
    </main>)
}

function Pizza(props) {
    return (
        <li className='pizza'>
            <img src={props.pizzaOpj.photoPath} alt={props.pizzaOpj.name}/>
            <div>
                <h3>{props.pizzaOpj.name}</h3>
                <p>{props.pizzaOpj.ingredients}</p>
                <span>{props.pizzaOpj.price}</span>
            </div>
        </li>);
}


function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("we're currently open!")
    // else alert("Sorry we're closed!");


    return (<footer className="footer">
        {isOpen && (
            <div className="order">

                <p>We're open until {closeHour}:00. Come visit us or order online.</p>
                <button className="btn">Order</button>
            </div>
        )}
    </footer>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);
