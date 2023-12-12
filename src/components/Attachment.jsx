import React from "react";
import commingsoon from "../img/commingsoon.jpg";
import { useNavigate } from "react-router-dom";
import earth from "../img/earth.gif";
export const Attachment = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="onprocess">
      <marquee>
        THIS INFORMATION IS FROM "Chat_
        <img src={earth} />
        n"
      </marquee>

      <div className="commingsoonimg">
        <img src={commingsoon} />

        <div className="button">
          <button onClick={navigateHome} classname="button">
            <span>home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
