import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component />
      </HashRouter>
    </AppContainer>,
    document.getElementById("react-app-root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
