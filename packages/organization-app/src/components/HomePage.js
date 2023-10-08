import { Link } from 'react-router-dom';
import './styles/Homepage.css';
import Navbar from './Navbar.js';

export default function Homepage() {
  const nextShipmentDate = 'March 15, 2023';

  return (
    <div className="homepage-container">
      <Navbar />
      <header className="homepage-header">
        <h1>Next Shipment Date</h1>
        <h2>{nextShipmentDate}</h2>
      </header>
      <div className="homepage-buttons">
        <Link to="/inventory">
          <button className="homepage-button">Inventory & Demand</button>
        </Link>

        <Link to="/customers">
          <button className="homepage-button">Customer Data</button>
        </Link>

        <Link to="/shipments">
          <button className="homepage-button">Shipments</button>
        </Link>

        <Link to="/timeline">
          <button className="homepage-button">Timeline</button>
        </Link>
      </div>
    </div>
  );
}