import React, { Component } from "react";

import ReactCountryFlag from "react-country-flag";
import Clock from "react-live-clock";

import "./Clocks.css";

class ClocksContainer extends Component {
  render() {
    return (
      <div className="clocks-container">
        <div className="clocks-col-1">
          <div className="clock-box">
            <ReactCountryFlag code="ph" svg />

            <span
              title="Manila/Malaysia"
              className="clock-item text-primary text-nowrap"
            >
              Manila
            </span>

            <Clock
              className="clock-item text-nowrap"
              format={"ddd h:mm a"}
              ticking={true}
              timezone={"Asia/Manila"}
            />
          </div>

          <div className="clock-box">
            <ReactCountryFlag code="th" svg />

            <span
              title="Thailand/Cambodia"
              className="clock-item text-primary text-nowrap"
            >
              Thailand
            </span>

            <Clock
              className="clock-item text-nowrap"
              format={"ddd h:mm a"}
              ticking={true}
              timezone={"Asia/Bangkok"}
            />
          </div>

          <div className="clock-box">
            <ReactCountryFlag code="za" svg />

            <span
              title="S. Africa/Italy"
              className="clock-item text-primary text-nowrap"
            >
              S. Africa
            </span>

            <Clock
              className="clock-item text-nowrap"
              format={"ddd h:mm a"}
              ticking={true}
              timezone={"Africa/Johannesburg"}
            />
          </div>
        </div>

        <div className="clocks-col-2">
          <div className="clock-box">
            <ReactCountryFlag code="nl" svg />

            <span className="clock-item text-primary text-nowrap">
              Amsterdam
            </span>

            <Clock
              className="clock-item text-nowrap"
              format={"ddd h:mm a"}
              ticking={true}
              timezone={"Europe/Amsterdam"}
            />
          </div>

          <div className="clock-box">
            <ReactCountryFlag code="gb" svg />

            <span className="clock-item text-primary text-nowrap">London</span>

            <Clock
              className="clock-item text-nowrap"
              format={"ddd h:mm a"}
              ticking={true}
              timezone={"Europe/London"}
            />
          </div>

          <div className="clock-box">
            <ReactCountryFlag code="us" svg />

            <span className="clock-item text-primary text-nowrap">
              New York
            </span>

            <Clock
              className="clock-item text-nowrap"
              format={"ddd h:mm a"}
              ticking={true}
              timezone={"America/New_York"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ClocksContainer;
