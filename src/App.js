import React from "react";
import stockData from "./stock-data";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header />
      <Main stockData={stockData} />
    </div>
  );
}

export default App;

// Instructions
// - Install the react-router-dom dependency
// - Import BrowserRouter as Router in index
// - Wrap the App in the Router
// - Create a Main and Header comopnent and move content
// - Import the Route component  add routes in Main
// - Import the Link component in Header
// - replace <a> tags with <Link to=...
