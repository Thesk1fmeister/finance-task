import { addInfoFromServer } from "../store/customReducer";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");

export const serverInfo = () => {
  return (dispatch) => {
    socket.emit("start");
    socket.on("ticker", (msg) => {
      dispatch(addInfoFromServer(msg));
    });
  };
};
// socket.emit("start");
// socket.on("ticker", function (msg) {
//   console.log(msg);
