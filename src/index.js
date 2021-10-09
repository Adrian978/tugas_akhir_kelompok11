import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Mokas from "./Component/mokas/mokas";
import Kasir from "./Component/kasir/kasir";
import Sosial from "./Component/sosial/sosial";
import Header from "./Master/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const data = [
  {
    title:"| HOME |",
    to: "/"
  },
  {
    title:"| MOBIL |",
    to: "mokas"
  },
  {
    title:"| BUY |",
    to: "kasir"
  },
  {
    title:"| HUBUNGI KAMI |",
    to: "sosial"
  }
]

const Routing = () => {
  return (
    <Router>
      <div>
        <Header data={data}/>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/mokas" component={Mokas} />
          <Route path="/kasir" component={Kasir} />
          <Route path="/sosial" component={Sosial} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);