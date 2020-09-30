import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";

const Settings = {
  PLACES_COUNT: 333
};

ReactDOM.render(
    <App
      count = {Settings.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
