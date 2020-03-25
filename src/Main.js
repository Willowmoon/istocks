import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";
import Stocks from "./Stocks";
import stockData from "./stock-data";

function Main(props) {
  // console.log("Mprops", props);
  // console.log("Mspread", { ...props });
  // console.log("Mstock", stockData);
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route
          path="/stocks/:name"
          render={data => <Stocks {...data} stockData={stockData}/>}
        />
        <Route
          path="/stocks"
          render={data => <Dashboard {...data} stockData={stockData}/>}
        />
      </Switch>
    </main>
  );
}
//THE TRAINYARD
export default Main;
