import React from "react";
import HomePage from "./pages/homePage";
import WishlistPage from "./pages/wishlistPage";
import LoginPage from "./pages/loginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/wishlist" component={WishlistPage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </Router>
  );
};

export default App;
