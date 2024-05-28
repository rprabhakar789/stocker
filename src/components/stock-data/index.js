import React from "react";
import "./index.css";
import { useState } from "react";

export default function StockData() {
  const [date, setDate] = useState("")
  const [stocks, setStocks] = useState([])
  const updateDate = (value) => {
    console.log("hi")
    setDate(value)
  }
  const fetchStocks = () => {
    console.log("fetching stocks")
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
    .then(response => response.json())
    .then(json => setStocks(json["data"]))
    .catch(error => console.error(error))
    console.log(stocks.data)
  }

  // Component to render each item
const StockItem = (stock) => (
  
  <div>
    {
    console.log(stock)
  }
    <p>Date: {stocks[0].date}</p>
    <p>Open: {stocks[0].open}</p>
    <p>High: {stocks[0].high}</p>
    <p>Low: {stocks[0].low}</p>
  </div>
);


  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" value={date} id="app-input" data-testid="app-input" onChange={e=>updateDate(e.target.value)}/>
        <button className="" id="submit-button" data-testid="submit-button" onClick={e=>fetchStocks()}>Search</button>
      </section>
      <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">  {
        console.log(stocks)
      }
      {stocks.length > 0 ? (
        <StockItem stock={stocks[0]} />
    ) : (
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No Result Found</div>
    )}
      </ul>
     
    </div>
  );
}
