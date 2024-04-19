
import { Route, Routes } from "react-router-dom";

import './App.css'
import Base from './components/Base'
import Header from './components/Header'
import Home from './components/Home'
import Order from './components/Order'
import Topings from './components/Topings'
import { useState } from "react";
function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />

        <Route path="/toppings" element={<Topings addTopping={addTopping} pizza={pizza} />} />


        <Route path="/order" element={<Order pizza={pizza} />} />


        <Route path="/" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
