import { useState } from 'react';
import "./styles/Shipments.css";
import { Checkbox } from "./icons/Checkbox";
import { Checkbox1 } from "./icons/Checkbox1";
import { Checkbox2 } from "./icons/Checkbox2";
import { Checkbox3 } from "./icons/Checkbox3";
import { Checkbox4 } from "./icons/Checkbox4";


export const Shipments = () => {
  return (
    <div className="SHIPMENT">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="data">
            <div className="title">
              <div className="text-wrapper">Shipment</div>
            </div>
            <div className="table">
              <div className="name">
                <div className="header-cell">
                  <div className="text">Name</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
              </div>
              <div className="package-type">
                <div className="header-cell">
                  <div className="text">Package Type</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
              </div>
              <div className="service-type">
                <div className="header-cell">
                  <div className="text">Service Type</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
              </div>
              <div className="package-weight">
                <div className="header-cell">
                  <div className="text">Package Weight</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
                <div className="item-cell">
                  <div className="text">Customer</div>
                </div>
              </div>
              <div className="status">
                <div className="header" />
                <div className="checkbox-wrapper">
                  <Checkbox className="icon-instance-node" />
                </div>
                <div className="checkbox-wrapper">
                  <Checkbox1 className="icon-instance-node" />
                </div>
                <div className="checkbox-wrapper">
                  <Checkbox2 className="icon-instance-node" />
                </div>
                <div className="checkbox-wrapper">
                  <Checkbox3 className="icon-instance-node" />
                </div>
                <div className="checkbox-wrapper">
                  <Checkbox4 className="icon-instance-node" />
                </div>
              </div>
            </div>
          </div>
          <button className="back-button">
            <div className="div-wrapper">
              <div className="div">Back</div>
            </div>
          </button>
          <button className="edit-button">
            <div className="div-wrapper">
              <div className="div">Edit</div>
            </div>
          </button>
          <div className="generate-label">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Generate Label</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shipments;