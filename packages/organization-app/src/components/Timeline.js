// Timeline.js

import { useState } from 'react';
import Navbar from './Navbar';
import './styles/Timeline.css';

function Timeline() {

  return (
    <div>
      <Navbar />

      <h1>Shipment Timeline</h1>

      <div className="timeline">


        <div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-date">June 1</div>

  <div className="timeline-content">
    <p>Data Collection Completed</p>
  </div>

</div>

<div className="timeline-item">

  <div className="timeline-dot"></div>
  
  <div className="timeline-date">June 15</div>

  <div className="timeline-content">
    <p>Last Chance for Updates</p> 
  </div>

</div>

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-date">June 20</div>

  <div className="timeline-content">
    <p>Due Date to Restock Items</p>
  </div>

</div>

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-date">June 25</div>
  
  <div className="timeline-content">
    <p>Packages Prepared</p>
  </div>

</div>

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-date">June 30</div>

  <div className="timeline-content">
    <p>Packages Shipped</p>
  </div>

</div>

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-date">July 10</div>

  <div className="timeline-content">
    <p>Estimated Delivery Date</p>
  </div>

</div>

      </div>

    </div>
  );

}

export default Timeline;