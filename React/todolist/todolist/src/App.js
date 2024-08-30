import React, { useState } from 'react';
 
const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];
 
export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false);
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' NNNNNN') + ' tasty!');
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <select value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                {fruits.map( (fruit, idx) => 
                    <option key={idx} value={fruit}>{fruit}</option>
                )}
            </select>
            <label>
                <input type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)}/> Is it tasty?
            </label>
            <button>Take a bite!</button>
        </form>
    );
}
