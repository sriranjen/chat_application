import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { Link } from "react-router-dom";

import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <Link to="/OurTeam" style={{ textDecoration: "none" }}>
            Our_Teams
          </Link>

          <Link to="/Vediocall">
            <img src={Cam} alt="camera profile not found" />
          </Link>
          <Link to="/Addcontact">
            <img src={Add} alt="add contact profile not found" />
          </Link>
          <Link to="/More">
            <img src={More} alt="more profile not found" />
          </Link>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
