import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { serverInfo } from "./asyncAction";
import { io } from "socket.io-client";
import { VscArrowDown, VscArrowUp, VscClose } from 'react-icons/vsc'

function App() {
  const dispatch = useDispatch();
  const infos = useSelector((state) => state.info);
  const some = 1;

  return (
    <div className="main">
      <button className="start-button" onClick={() => dispatch(serverInfo())}>
        start
      </button>
      <div className="info-container">
        <ul className="info">
          {infos.map((info) => (
            <li>
              <div className="info-cart">
                <div>{info.ticker}</div>
                <div>{info.exchange}</div>
                <div>{info.price}$</div>
                {info.change > 0 ? (
                  <div className="green">+{info.change}<VscArrowUp/></div>
                ) : (
                  <div className="red">{info.change}<VscArrowDown/></div>
                )}
                <div>{info.change_percent}%</div>
                <div>DIVIDEND - {info.dividend}</div>
                <div>{info.yield}</div>
                <div>{info.last_trade_time} <VscClose/></div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
