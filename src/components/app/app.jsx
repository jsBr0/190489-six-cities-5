import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

import {OfferPropTypes, ReviewPropTypes} from "../../utils/prop-types";

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room offers={offers} reviews={reviews} />
        </Route>
        <Route path="*">
          <h1 style={{textAlign: `center`, marginTop: `35%`}}>
            Oops! Seems, this page not found
          </h1>
          <Link
            to="/"
            style={{display: `block`, textAlign: `center`, marginTop: `5%`}}
          >
            Go to main page
          </Link>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default App;
