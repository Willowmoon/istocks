import React from "react";
import { Link } from 'react-router-dom'

const Stocks = props => {
  // console.log("Stocks", props);

  const stockData = props.stockData.filter(stock => stock.name === props.match.params.name)[0];
  // console.log("stockData", stockData);

  return (
    <div>
      <Link to='/stocks'><p style ={{paddingBottom:'20px',fontSize: '3vw', textAlign: 'left'}}>back to stocks</p></Link>
      <h1> {stockData.name}</h1>
      <h3 style={{fontWeight:'700', color:'gray'}}>{stockData.symbol}</h3>
      <h3  id ="small">Currently:</h3>
      <h3 id="bigNum">{stockData.lastPrice}</h3>
      <h3>High: {stockData.high}</h3>
      <h3>Low: {stockData.low}</h3>
      <h3>Open: {stockData.open}</h3>
      <h3> Change: {stockData.change}</h3>
    </div>
  );
};

export default Stocks;
