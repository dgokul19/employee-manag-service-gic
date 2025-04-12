// hooks/useNotification.js
import { useState, useCallback } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState({ message: "", type: "" });

  const showNotification = useCallback((message:string, type = "success") => {
    setNotification({ message, type });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  }, []);

  const clearNotification = () => setNotification({ message: "", type: "" });

  return {
    notification,
    showNotification,
    clearNotification,
  };
};
