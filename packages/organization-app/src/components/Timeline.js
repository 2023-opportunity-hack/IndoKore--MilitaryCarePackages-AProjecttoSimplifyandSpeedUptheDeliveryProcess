// Timeline.js

import { useState } from 'react';
import Navbar from './Navbar';
import './styles/Timeline.css';

export const Timeline = () => {
  return (
    <div>
      <Navbar />
    <div className="timeline">
        <div className="text-wrapper">Timeline</div>
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="image"
              alt="Image"
              src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/6521e7d71b684ce9e47f36f6/img/image-3.png"
            />
            <div className="overlap-group-2">
              <div className="restock-items-before">
                <div className="frame">
                  <div className="text-wrapper-2">Restock all items before</div>
                  <div className="text-wrapper-3">January 25, 2023</div>
                </div>
                <div className="div-2" />
              </div>
              <div className="last-day-to-update">
                <div className="frame-2">
                  <p className="p">Last day to update form</p>
                  <div className="text-wrapper-4">January 20, 2023</div>
                </div>
                <div className="div-1" />
              </div>
              <div className="prepare-packages">
                <div className="frame-3">
                  <div className="text-wrapper-5">Prepare Packages</div>
                  <div className="text-wrapper-4">January 30, 2023</div>
                </div>
                <div className="div-2" />
              </div>
              <div className="data-collection">
                <div className="frame-4">
                  <div className="text-wrapper-5">Data Collection</div>
                  <div className="text-wrapper-4">January 12, 2023</div>
                </div>
                <div className="div-2" />
              </div>
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/652300e54d85e2d83d7fd10b/img/line-75.svg"
              />
              <img
                className="img"
                alt="Line"
                src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/652300e54d85e2d83d7fd10b/img/line-76.svg"
              />
              <img
                className="line-2"
                alt="Line"
                src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/652300e54d85e2d83d7fd10b/img/line-77.svg"
              />
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/652300e54d85e2d83d7fd10b/img/line-74.svg"
              />
            </div>
          </div>
          <div className="overlap-2">
            <div className="ship-through-usps">
              <div className="div-2" />
              <div className="frame-5">
                <div className="text-wrapper-5">Ship through USPS</div>
                <div className="text-wrapper-4">February 7, 2023</div>
              </div>
            </div>
            <div className="order-arrived">
              <div className="div-2" />
              <div className="frame-5">
                <div className="text-wrapper-5">Order Arrived</div>
                <div className="text-wrapper-4">February 23, 2023</div>
              </div>
            </div>
            <img
              className="line-4"
              alt="Line"
              src="https://cdn.animaapp.com/projects/6521e77762f75e9352093c93/releases/652300e54d85e2d83d7fd10b/img/line-78.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;