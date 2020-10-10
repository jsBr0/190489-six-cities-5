import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";

import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Settings = {
  PLACES_COUNT: 333
};

ReactDOM.render(
    <App
      count = {Settings.PLACES_COUNT}
      offers = {offers}
      reviews = {reviews}
    />,
    document.querySelector(`#root`)
);
