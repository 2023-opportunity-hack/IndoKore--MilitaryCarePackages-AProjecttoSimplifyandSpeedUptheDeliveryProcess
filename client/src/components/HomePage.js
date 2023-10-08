// Homepage component

import { Link } from 'react-router-dom';
import './styles/Homepage.css';
import Navbar from './Navbar.js';

export default function Homepage() {

  const nextShipmentDate = 'March 15, 2023';

  return (
    <div>
      <Navbar />
      <h1>Next Shipment Date: {nextShipmentDate}</h1>
      <div className="button-container">
      <Link to="/inventory">
        <button className="button">Inventory & Demand</button>
      </Link>

      <Link to="/customers">
        <button className="button">Customer Data</button>
      </Link>

      <Link to="/shipments">  
        <button className="button">Shipments</button>
      </Link>

      <Link to="/timeline">
        <button className="button">Timeline</button>
      </Link>
</div>
    </div>
  );

}

