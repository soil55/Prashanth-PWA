import React,{createContext,useContext,useState} from "react";

const NotificationContext = createContext();

export function NotificationProvider(props) {
    const [notificationEnabled, setNotificationEnabled] = useState(false);
  
    const toggleNotification = () => {
      setNotificationEnabled(prevState => !prevState);
      
    }
    return (
      <NotificationContext.Provider
        value={{
          notificationEnabled,
          toggleNotification
        }}
      >
        {props.children}
      </NotificationContext.Provider>
    );
  }
  
  export function useNotification() {
    return useContext(NotificationContext);
  }