import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Women from './components/Home/Women/Women';
import Men from './components/Home/Men/Men';
import Kids from './components/Home/Kids/Kids';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ViewCart from './components/ViewCart/ViewCart';
import Header from './components/SharedPage/Header/Header';
import { ButtonFunctionsProvider } from './contexts/ButtonFunctions';


class App extends Component {

  render() {
    return (
      <ButtonFunctionsProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Women />
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
            <Route path="/productDetail/:id">
              <ProductDetail />
            </Route>
            <Route path="/viewCart">
              <ViewCart />
            </Route>
          </Switch>
        </Router>
      </ButtonFunctionsProvider>
    )
  }
}

export default App;
