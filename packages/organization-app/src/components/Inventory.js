// Inventory.js

import { useState, useEffect } from 'react';
import './styles/Inventory.css';
import Navbar from './Navbar';
import db from '../firebase';
import Modal from './Modal';

function Inventory() {
/*
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
*/

const [items, setItems] = useState([]);
const [showModal, setShowModal] = useState(false);


useEffect(() => {
  const unsubscribe = db.collection('inventory')
    .onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()  
      }));
      
      setItems(data);
    });

  return unsubscribe;

}, []);


  function addItem(itemName, quantity, demand) {
    setItems([
      ...items,
      {itemName, quantity, demand}  
    ]);
  }

  return (
    <div>
    <Navbar />
      {items.map(item => (
        <div key={item.itemName}>
          <h2>{item.itemName}</h2>
          <p>{item.quantity}/{item.demand}</p>
          
          <progress className="progress-bar"
            value={item.quantity} 
            max={item.demand}
          />
        </div>
      ))}

<>
      <button onClick={() => setShowModal(true)}>Add Item</button> 

      {showModal && (
        <Modal>
          <form>
            <label>
              Name:
              <input name="itemName" />
            </label>

            <label>
              Quantity:
              <input name="quantity" type="number" />
            </label>

            <label>
              Demand:
              <input name="demand" type="number" />
            </label>

            <label>
              Type:
              <input name="type" type="string" />
            </label>
            <button type="submit">Add Item</button>
          </form>
        </Modal>
      )}
    </>
    </div>
    
  );




}
export default Inventory;