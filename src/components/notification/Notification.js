import React from "react";
import "./Notification.css";

export default function Notification(props) {
  const { onNotificationClick, addClass } = props;

  return (
    <div className={`notification-container ${addClass || ""}`}>
      <h3>Notification</h3>
      <img
        onClick={onNotificationClick()}
        src="/assets/images/icons/close-icon.svg"
        className={"close-icon"}
        alt="close"
      />
      <div className={`notification-body`}>
        <h4>Today</h4>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">2 min</div>
        </div>
        <h4>Yesterday</h4>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">Yesterday</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">Yesterday</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">Yesterday</div>
        </div>
        <h4>This Week</h4>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">8/10</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">8/10</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">8/10</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">8/10</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">8/10</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">8/10</div>
        </div>
        <div className="notification-item">
          <div className="avatar">
            <img src="/assets/images/avatars/avatar-1.png" alt="avatar" />
          </div>
          <div className="notification-content">
            There are 10 news update for today. Don’t miss it!
          </div>
          <div className="notification-time">8/10</div>
        </div>
      </div>
    </div>
  );
}
