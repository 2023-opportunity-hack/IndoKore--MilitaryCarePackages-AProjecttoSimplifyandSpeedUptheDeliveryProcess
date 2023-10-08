// Inventory.js

import { useState } from 'react';
import './styles/Inventory.css';
import Navbar from './Navbar';
function Inventory() {

  const [items, setItems] = useState([
    { 
      name: 'Socks',
      inventory: 50,
      demand: 100
    },{
        name: 'Shampoo',
        inventory: 250, 
        demand: 500
      },
      {
        name: 'Toothbrushes',
        inventory: 150,
        demand: 300
      },
      { 
        name: 'Beef Jerky',
        inventory: 20,
        demand: 50
      },
      {
        name: 'Notebook',
        inventory: 80,
        demand: 100
      },
      {
        name: 'Sunscreen',
        inventory: 10,
        demand: 50
      },
      {
        name: 'Razors',
        inventory: 200,
        demand: 300
      },
      // etc
    // other items
  ]);

  function addItem(name, inventory, demand) {
    setItems([
      ...items,
      {name, inventory, demand}  
    ]);
  }

  return (
    <div>
    <Navbar />
      {items.map(item => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.inventory}/{item.demand}</p>
          
          <progress className="progress-bar"
            value={item.inventory} 
            max={item.demand}
          />
        </div>
      ))}

      <button onClick={() => addItem(/* show form */)}>
        Add Item  
      </button>

    </div>
  );

}
export default Inventory;