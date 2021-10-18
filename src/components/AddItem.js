import React, { useState } from 'react'

const AddItem = ( { items, setItems, setFlashMessage }) => {
    const[ item, setItem ] = useState('');
    const[ cal, setCal] = useState('');

    function isNum(val) {
        return !isNaN(val)
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
            setCal('');
            setItem('');
        } else if (item === '') {
            setFlashMessage(`needItem`)
        } else {
            setFlashMessage(`needCalories`);
        }

    }

    return (
        <form className="item-form" onSubmit={handleSubmit}>
            <input type="text" 
                placeholder='Add an item'
                value={item}
                name='item'
                className='item-input'
                onChange={(e) => setItem(e.target.value)}
            />
            <input type="text" name="cal" 
                placeholder='Calories' 
                value={cal}
                className='cal-input'
                onChange={(e) => setCal(e.target.value)}
                />

            <button className='item-button'>Add Item</button>
        </form>
    );
}

export default AddItem;