import React, { useState, useRef, useEffect } from 'react'

const AddItem = ( { items, setItems, setFlashMessage, setShowAdd }) => {
    const[ item, setItem ] = useState('');
    const[ cal, setCal] = useState('');
    const addItemRef = useRef(null);
    const addCaloriesRef = useRef(null);
    const submitRef = useRef(null);

    function isNum(val) {
        return !isNaN(val)
    }
    useEffect (() => {
        addItemRef.current.focus();
    }, []);

    const itemKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addCaloriesRef.current.focus();
        }
    }
    const calorieKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            submitRef.current.focus();
        }
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNum(cal) && (item !== '') && (cal !== '')) {
            const newItem = {
                id: new Date(),
                item: item,
                cal: cal
            };
            setItems([newItem, ...items]);
            // setShowAdd(false);
            setCal('');
            setItem('');
            addItemRef.current.focus();
        } else if (item === '') {
            setFlashMessage(`needItem`)
            addItemRef.current.focus();
        } else {
            setFlashMessage(`needCalories`);
            addCaloriesRef.current.focus();
        }

    }

    return (
        <form className="item-form">
            <input 
                type="text" ref={addItemRef}
                placeholder='Add an item'
                value={item}
                name='item'
                className='item-input'
                onKeyDown={itemKeyDown} 
                onChange={(e) => setItem(e.target.value)}
            />
            <input 
                type="text" ref={addCaloriesRef}     
                name="cal" 
                placeholder='Calories' 
                value={cal}
                className='cal-input'
                onKeyDown={calorieKeyDown} 
                onChange={(e) => setCal(e.target.value)}
                />

            <button onClick={handleSubmit} ref={submitRef} className='item-button'>Add Item</button>
        </form>
    );
}

export default AddItem;