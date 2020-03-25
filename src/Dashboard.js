import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  // console.log("Dash", props);
  let stockData = props.stockData.map((stock, key) => {
    //console.log('stockData', stockData)
    return (
      <Link key={key} to={`/stocks/${stock.name}`}>
        <p style ={{padding: '20px', textTransform:"uppercase", textDecoration:'none' }}>{stock.name}</p>
      </Link>
    );
  });
  return (
  <div >
    <p style = {{textAlign: 'left', fontSize: '4vw',borderBottom: '1px dotted lightgray', marginBottom:'40px'}}>Companies we monitor</p>
    {stockData}
  </div>);
}

export default Dashboard;

//if stock goes below 20 show a giant dinosaur on the page