// Homepage component
/*
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


*/
export default function Homepage() {

  const nextShipmentDate = 'March 15, 2023';

  return (
    <div className="homepage">
      <div>
      <img
          className="line"
          alt="Line"
          src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/6521e7d71b684ce9e47f36f6/img/line-1.svg"
        />
        <div className="text-wrapper-2">Next Shipment</div>
        <div className="text-wrapper-3">{nextShipmentDate}</div>

        <div className="button-container">
      <Navbar />
      <h1>Next Shipment Date: {nextShipmentDate}</h1>
      <Link to="/inventory">
        <button className="button">Inventory and Demand</button>
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
</div>
    
  );

}

