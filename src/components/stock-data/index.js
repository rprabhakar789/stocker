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
  const fetchStock = (value) => {
    console.log("fetching stocks")
    fetch('https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000')
    .then(reponse => response.json())
    .then(json => setStocks(json))
    .catch(error => console.error(error))
    setStocks(stocks.push("123"))
  }
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" value={date} id="app-input" data-testid="app-input" onChange={e=>updateDate(e.target.value)}/>
        <button className="" id="submit-button" data-testid="submit-button" onSubmit={e=>fetchStocks(e.target.value)}>Search</button>
      </section>
      <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10"></li> {
          stocks.map(
            stock => (
              <li className="py-10">stock</li>
            )
          )
        }
      </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
    </div>
  );
}
