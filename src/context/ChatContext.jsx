import {
  createContext,
  useContext,
  useReducer,
} from "react";

import { UserContext } from "./user-context";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { userdata } = useContext(UserContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            userdata.uid > action.payload.uid
              ? userdata.uid + action.payload.uid
              : action.payload.uid + userdata.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
