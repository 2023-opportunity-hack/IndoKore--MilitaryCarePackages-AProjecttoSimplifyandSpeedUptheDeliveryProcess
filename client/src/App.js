import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import Inventory from './components/Inventory';
import Customers from './components/Customers';
import Shipments from './components/Timeline';
import Timeline from './components/Timeline';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route exact path="/" element={<Homepage />} />
      
        <Route path="/inventory" element={<Inventory />} />
        
        <Route path="/customers" element={<Customers />} />

        <Route path="/shipments" element={<Shipments />} />

        <Route path="/timeline" element={<Timeline />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
