import React, { useState, useEffect } from 'react'
import DisplayDay from './components/DisplayDay'
import AddItem from './components/AddItem';
import Header from './components/Header';
import Message from './components/Message';
import './App.css';

// This app is a calorie counter I'm just working on 
// a basic CRUD application using localStorage but will add API's to look up 
// items in the future as well as User logins

function App() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState(null);

  const setFlashMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

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
   
        <Header items={items} />
        {/* Message alerts for errors or attention */}
        <div className='spacer'>{message && <Message type={message} />}</div>
        <div className="content">
        <AddItem setItems={setItems} items={items} setFlashMessage={setFlashMessage} />
        {/* Search component with header */}
        {/* User Name */}
        {/* Items and Calories */}
        <DisplayDay items={items} setItems={setItems} setFlashMessage={setFlashMessage} /> 
        {/* Total daily calories calculations */}
      </div>
    </>
  );
}

export default App;
