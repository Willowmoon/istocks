import React from "react";

function Home() {

  return (
    <div>
        <img src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="iStock"/>
        <p style = {{padding: '20px', letterSpacing:"10px", borderBottom: '1px dotted lightgray'}}>Welcome to iStocks</p>
        <p style={{fontSize:'14px'}}>we <a href="https://reactjs.org/" style ={{textDecoration:"none", textTransform: "uppercase", fontWeight: "bold", color:"darkgray"}} target="_">react</a> to the market so you dont have to</p>
    </div>
  );
}

export default Home