import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { startSession } from "./asyncAction";
import { VscArrowDown, VscArrowUp, VscClose } from "react-icons/vsc";

function App() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.info);

  const getStocks = () => {
    dispatch(startSession())
  }

  return (
    <div className="main">
      <button className="start-button" onClick={() => getStocks()}>
        start
      </button>
      <div className="info-container">
        <ul className="info">
          {stocks.map((stock) => (
            <li>
              <div className="info-cart">
                <div>{stock.ticker}</div>
                <div>{stock.exchange}</div>
                <div>{stock.price}$</div>
                {stock.change > 0 ? (
                  <div className="green">
                    +{stock.change}
                    <VscArrowUp />
                  </div>
                ) : (
                  <div className="red">
                    {stock.change}
                    <VscArrowDown />
                  </div>
                )}
                <div>{stock.change_percent}%</div>
                <div>DIVIDEND - {stock.dividend}</div>
                <div>{stock.yield}</div>
                <div>
                  {stock.last_trade_time} <VscClose />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
