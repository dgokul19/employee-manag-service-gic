import { NotificationProps } from "../../utils/types";

import classes from "./index.module.scss";

const Toast = ({ message, type, onClose }: NotificationProps) => {
  if (!message) return null;

  return (
    <div className={`${classes.notificationElem} ${type === "success" ? classes.success : classes.error}`}>
      <span>{ message }</span>
      <button onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default Toast;


// const { notification, showNotification, clearNotification } = useNotification();
