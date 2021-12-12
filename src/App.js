import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Women from './components/Home/Women/Women';
import Men from './components/Home/Men/Men';
import Kids from './components/Home/Kids/Kids';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ViewCart from './components/ViewCart/ViewCart';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Women />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/women">
              <Women />
            </Route>
            <Route path="/men">
              <Men />
            </Route>
            <Route path="/kids">
              <Kids />
            </Route>
            <Route path="/productDetail/:id" component={<ProductDetail />}>
              <ProductDetail />
            </Route>
            <Route path="/viewCart">
              <ViewCart />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
