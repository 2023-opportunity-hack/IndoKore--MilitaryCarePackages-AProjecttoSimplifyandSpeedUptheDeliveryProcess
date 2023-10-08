// Timeline.js

import { useState } from 'react';
import './styles/Timeline.css';
import Navbar from './Navbar';

function Timeline() {

  return (
    <div className="container">
      <Navbar />
      <div className="overlap-group">
            <div className="text-wrapper">Timeline</div>
            <div className="restock" />
            <div className="text-wrapper-2">Restock all items before</div>
            <div className="text-wrapper-3">January 25, 2023</div>
          </div>
          <div className="data-collection" />
          <div className="last-chance-to" />
          <div className="prepare-packages" />
          <img
            className="img"
            alt="Line"
            src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/6522df2e80e7b7946a1dfc7a/img/line-14.svg"
          />
          <img
            className="line-2"
            alt="Line"
            src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/6522df2e80e7b7946a1dfc7a/img/line-14.svg"
          />
          <img
            className="line-3"
            alt="Line"
            src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/6522df2e80e7b7946a1dfc7a/img/line-14.svg"
          />
          <img
            className="line-4"
            alt="Line"
            src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/6522df2e80e7b7946a1dfc7a/img/line-14.svg"
          />
          <div className="line-wrapper">
            <img
              className="line-5"
              alt="Line"
              src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/6522df2e80e7b7946a1dfc7a/img/line-14.svg"
            />
          </div>
          </div>
  );
}

export default Timeline;
