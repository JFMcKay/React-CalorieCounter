import React, { useEffect, useState} from 'react'

function Header( {items} ) {
    const [total, setTotal] = useState('0');
    
    useEffect(() => {
        let calTotal = '0';
        for (let i = 0; i < items.length; i++) {
            calTotal = +calTotal + +items[i].cal;
            console.log(items[i].cal);
        }
        setTotal(calTotal);
    }, [items])
    
    

    return (
        <div className="header">
            <h1>Count those calories!</h1>
            <h2> Total Calories: {total}</h2>
        </div>
    )
}

export default Header
