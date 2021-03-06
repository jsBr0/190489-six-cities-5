import React from "react";
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import OfferPage from "../offer-page/offer-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id" component={OfferPage} />
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

export default App;
