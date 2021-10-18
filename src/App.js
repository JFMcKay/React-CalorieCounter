import React, { useState, useEffect } from 'react'
import DisplayDay from './components/DisplayDay'
import AddItem from './components/AddItem';
import Header from './components/Header';
import './App.css';

// This app is a calorie counter I'm just working on 
// a basic CRUD application using localStorage but will add API's to look up 
// items in the future as well as User logins

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const json = localStorage.getItem("items");
    const loadedItems = JSON.parse(json);
    if (loadedItems) {
      setItems(loadedItems);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("items", json);
  }, [items]);

  return (
    <>
      <div className="main">
        <Header items={items} />
        {/* May make into a Modal */}
        <AddItem setItems={setItems} items={items} />
        {/* Search component with header */}
        {/* User Name */}
        {/* Items and Calories */}
        <DisplayDay items={items} setItems={setItems}/> 
        {/* Total daily calories calculations */}
      </div>
    </>
  );
}

export default App;
