import { useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  window.addEventListener("online", (event) => {
    setOnlineStatus(true);
  });
  window.addEventListener("offline", (event) => {
    setOnlineStatus(false);
  });
  return onlineStatus;
}

export default useOnlineStatus;