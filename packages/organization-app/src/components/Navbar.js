// Navbar.js

import { Link } from 'react-router-dom';
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/shipments">Shipments</Link> 
      <Link to="/timeline">Timeline</Link>
    </nav>
  );
}

