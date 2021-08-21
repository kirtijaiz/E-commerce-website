import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Payment from "./Payment";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JDNR1SICyEzBPHd0SRbMCxAputWJnpLsGBShuc6ugnyuQHXl6sbH8a4MMowAdVbYZXiPa9I1nMGPctbfA2aZg1t00fg3ttZgg");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
  <Router>
    <div className="app">
    <Switch>
    <Route path="/login">
      <Login />
</Route>
<Route path="/checkout">
  <Header />
  <Checkout />
  </Route>
  <Route path="/payment">
  <Header />
  <Elements stripe={promise}>
  <Payment />
  </Elements>
  
 { /*<h1>I am the payment route</h1>*/}
  </Route>
                  <Route path="/">
            <Header />
          <Home />
         
        </Route>    
      </Switch>
    
  </div>
  </Router> 
 
);
}
export default App;


