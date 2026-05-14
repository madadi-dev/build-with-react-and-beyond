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
    soldOut: false,
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

    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (<main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
            <ul className="pizzas">
                {pizzas.map((pizza => (
                    <Pizza pizzaOpj={pizza} key={pizza.name}/>
                )))}
            </ul>) : <p>We're still working on our menu. Please come back later :</p>}


        {/*<Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese'*/}
        {/*       photoPath='pizzas/spinaci.jpg' price={10}/>*/}

        {/*<Pizza name='Pizza Funghai' ingredients='Tomato, mozarella, spinach, and ricotta cheese'*/}
        {/*       photoPath={'pizzas/funghi.jpg'} price={23}/>*/}
    </main>)
}

function Pizza({pizzaOpj}) {

    console.log(pizzaOpj);

    if (pizzaOpj.soldOut) return null;

    return (
        <li className='pizza'>
            <img src={pizzaOpj.photoPath} alt={pizzaOpj.name}/>
            <div>
                <h3>{pizzaOpj.name}</h3>
                <p>{pizzaOpj.ingredients}</p>
                <span>{pizzaOpj.price}</span>
            </div>
        </li>);
}


function Footer(props) {
    console.log(props);

    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("we're currently open!")
    // else alert("Sorry we're closed!");

    // if (!isOpen)
    //     return (
    //         <p>CLOSED!</p>
    //     );

    return (
        <footer className="footer">
            {isOpen ? <Order openHour={openHour} closeHour={closeHour}/> :
                <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
        </footer>);
}

function Order({openHour, closeHour}) {
    return (
        <div className="order">
            <p>We're open from {openHour}:00 to until {closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);
