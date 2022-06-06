import { addInfoFromServer } from "../store/customReducer";
import { io } from "socket.io-client";

const serverHost = "http://localhost:4000";
const socket = io.connect(serverHost);

export const startSession = () => {
  return (dispatch) => {
    socket.emit("start");
    socket.on("ticker", (msg) => {
      dispatch(addInfoFromServer(msg));
    });
  };
};
