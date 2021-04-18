import React from "react";
import "./MessageList.css";
import MessageItem from "./MessageItem";
import PropTypes from "prop-types";

export default function DashboardMessage(props) {
  const messages = [
    {
      sender: "Nisa sabyan",
      timestamp: "10.01 pm",
      content: "How about number 3?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Sasa",
      timestamp: "23.23 pm",
      content: "How about number 9?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko",
      timestamp: "10.04 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko Mangku Bumi Noto Langit",
      timestamp: "00.00 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Nisa sabyan",
      timestamp: "10.01 pm",
      content: "How about number 3?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Sasa",
      timestamp: "23.23 pm",
      content: "How about number 9?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko",
      timestamp: "10.04 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko Mangku Bumi Noto Langit",
      timestamp: "00.00 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Sasa",
      timestamp: "23.23 pm",
      content: "How about number 9?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko",
      timestamp: "10.04 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko Mangku Bumi Noto Langit",
      timestamp: "00.00 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Sasa",
      timestamp: "23.23 pm",
      content: "How about number 9?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko",
      timestamp: "10.04 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
    {
      sender: "Joko Mangku Bumi Noto Langit",
      timestamp: "00.00 pm",
      content:
        "How are you today? are you okay? can you give me the answer of number 10?",
      avatar: "/assets/images/avatars/avatar-1.png",
    },
  ];

  const { showMessage, onShowMessage } = props;
  return (
    <div
      className={`overlay-right-bg-black ${
        showMessage ? "show-overlay-right" : ""
      }`}
      onClick={onShowMessage()}
    >
      <aside className={`message-container card ${showMessage ? "show" : ""}`}>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h5 className="title">Message</h5>

          <img
            src="/assets/images/icons/circle-plus-icon.svg"
            alt="add message"
            className={"circle-plus touchable"}
          />
        </div>
        <div className="search-box">
          <img
            src="/assets/images/icons/search-icon.svg"
            alt="search icon"
            className={"search-icon"}
          />
          <input type="text" placeholder="Search" />
        </div>
        <div className="message-list">
          {messages.map((message, index) => (
            <MessageItem
              key={index}
              sender={message.sender}
              content={message.content}
              timestamp={message.timestamp}
              avatar={message.avatar}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}

DashboardMessage.propTypes = {
  showMessage: PropTypes.bool,
};
