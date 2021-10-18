import React, { useState } from 'react'


const DisplayDay = ( {items, setItems, setFlashMessage} ) => {
    const [edit, setEdit] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [editingCal, setEditingCal] = useState("");

    const deleteItem = (id) => {
        let curItems = [...items].filter((item) => item.id !== id);
        setItems(curItems);
        setFlashMessage(`deleted`);
    }

    function updateItem(id) {
        const updatedItem = [...items].map((item) => {
            if (item.id === id) {
                item.item = editingText;
                item.cal = editingCal;
            }
            return item;
        });
        setItems(updatedItem);
        setEditingCal('');
        setEditingText('');
        setFlashMessage(`edited`);
        setEdit(null);
    }

    const editItem = (id, item) => {
        if (editingText === '' ) {
            setFlashMessage(`needItem`);
        } else if (editingCal === '' || isNaN(editingCal)) {
            setFlashMessage(`needCalories`);
        } else {
            updateItem(id);
        };
    }

    return (
        <ul>
            <li className='item item-header'>
                <div className='item-info'><div>ITEM</div><div>Calories</div></div>
                <div className='button-set'>
                </div>
            </li>
            {items.length < 1 && (
                <li key="empty" className="item"><div>No Items Logged Yet!</div><div>...</div></li>
            )}
            {items.map(item =>
            <li key={item.id} className='item'>
                {item.id === edit ? (
                    <div className='item-info'> 
                        <input placeholder={item.item}type="text" onChange={(e) => setEditingText(e.target.value)}/>
                        <input placeholder={item.cal} type="text" onChange={(e) => setEditingCal(e.target.value)}/>
                    </div>
                ) :
                (
                    <div className='item-info'><div>{item.item}</div><div>{item.cal}</div></div>
                )}
                
                {item.id === edit ? (
                    <div className='button-set'>
                        <button  onClick={() => editItem(item.id, item.item)}>Submit</button>
                        <button onClick={() => setEdit(null)}>Cancel</button>
                    </div>
                ) : ( 
                    <div className='button-set'><button onClick={() => setEdit(item.id)}>Edit</button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button></div>
                )}
            </li>
                )}
        </ul>
    )

}

export default DisplayDay;