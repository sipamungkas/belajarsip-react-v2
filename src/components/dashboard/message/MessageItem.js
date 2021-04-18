import PropTypes from "prop-types";
import classes from "./MessageItem.module.css";

export default function MessageItem(props) {
  const { sender, timestamp, content, avatar } = props;
  return (
    <div className={classes.message}>
      <img
        className={classes.image}
        src={avatar ?? "/assets/images/avatars/avatar-1.png"}
        alt="Nisa Sabyan"
      />
      <div className={classes["message-body"]}>
        <div className={`${classes["sender-name"]} text-truncate`}>
          <span>{sender ?? "empty name"}</span>
        </div>
        <div className={`${classes["message-content"]} text-truncate`}>
          {content ?? "no content"}
        </div>

        <div className={`${classes["message-timestamp"]} text-truncate`}>
          {timestamp ?? "00.00 am"}
        </div>
      </div>
    </div>
  );
}

MessageItem.propTypes = {
  sender: PropTypes.string,
  timestamp: PropTypes.string,
  content: PropTypes.string,
  avatar: PropTypes.string,
};
