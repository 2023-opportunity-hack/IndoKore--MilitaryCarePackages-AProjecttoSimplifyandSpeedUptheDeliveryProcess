// Shipments.js
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './styles/Shipments.css';
import db from '../firebase';



function Shipments() {
    const shipmentsArr = [
        {
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St, Anytown CA', 
          packageType: 'Girl Scout Cookies',
          serviceType: 'Priority',
          weight: 4.2
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          address: '456 Park Ln, Anytown CA',
          packageType: 'Femminine',
          serviceType: 'Express',
          weight: 2.6
        },
        {
          firstName: 'Jack',
          lastName: 'Hill',
          address: '789 Oak Rd, Boxton MA',
          packageType: 'Masculine',
          serviceType: 'Ground',
          weight: 1.8
        },
        // etc
      ]
 // const [shipments, setShipments] = useState(shipmentsArr);
 const [shipments, setShipments] = useState([]);

 useEffect(() => {
    const unsubscribe = db.collection('customers')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        data.forEach(shipment => {

            const packageType = shipment.packageType.toLowerCase();


            if(packageType === 'feminine') {
              shipment.weight = 5;
              shipment.serviceType = 'Priority';
            } else if(packageType === 'masculine') {
              shipment.weight = 6;
              shipment.serviceType = 'Priority'; 
            } else if(packageType === 'girl scout cookies') {
              shipment.weight = 3;
              shipment.serviceType = 'Express';
            }
            else if(packageType === 'others') {
                shipment.weight = 8;
                shipment.serviceType = 'Ground';
              }
          });
  
          setShipments(data);
        });
      
      return unsubscribe;
  
    }, []);

  return (
    <div>
      <Navbar />

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Package Type</th>
            <th>Service Type</th> 
            <th>Weight</th>
            <th>
              <input type="checkbox" />
            </th>
          </tr>
        </thead>
        
        <tbody>
          {shipments.map(s => (
            <tr>
              <td>{s.firstName}</td> 
              <td>{s.lastName}</td>
              <td>{s.address}</td>
              <td>{s.packageType}</td>
              <td>{s.serviceType}</td>
              <td>{s.weight}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="generate-label-btn">
        Generate Label
      </button>

    </div>
  );
}

export default Shipments;