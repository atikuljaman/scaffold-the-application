import React, { Component, createRef } from 'react'
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
  // constructor() {
  //   super();
  //   this.state = {
  //     addedProducts: [],
  //     buttonIndex: 0
  //   }
  // }

  // selectedSizeBtnRef = createRef();

  // handleAddToCart = data => {
  //   const { product } = data
  //   const addedProducts = this.state.addedProducts.slice();
  //   let allReadyAddedToCart = false;

  //   addedProducts.forEach(addedProduct => {
  //     if (addedProduct.name === product.name) {
  //       allReadyAddedToCart = true
  //       addedProduct.count++
  //     }
  //   });

  //   if (!allReadyAddedToCart) {
  //     addedProducts.push({ ...product, count: 1 })
  //   }
  //   this.setState({ addedProducts })
  //   console.log(addedProducts);
  // };

  // handleIncrementProductQuantity = (product) => {
  //   const products = this.state.addedProducts;
  //   const added = products.find(pd => pd.name === product.name);
  //   if (added) {
  //     products.map(pd => (
  //       pd.name === product.name && this.setState({ ...added, count: added.count++ })
  //     ))
  //   }
  // }

  // handleDecrementProductQuantity = (product) => {
  //   const products = this.state.addedProducts;
  //   const added = products.find(pd => pd.name === product.name);
  //   if (added) {
  //     products.map(pd => (
  //       pd.name === product.name && this.setState({ ...added, count: added.count-- })
  //     ))

  //     if (added.count <= 0) {
  //       const yoo = products.filter(pd => pd.name !== product.name)
  //       this.setState({ addedProducts: yoo })
  //     }
  //   }
  // }


  // handleTabSizeBtn = buttonIndex => {
  //   this.setState({ buttonIndex: buttonIndex })
  //   const buttons = this.selectedSizeBtnRef.current.children;
  //   for (let i = 0; i < buttons.length; i++) {
  //     buttons[i].className = buttons[i].className.replace("active-btn", "")
  //   }
  //   buttons[buttonIndex].className = "active-btn";
  //   console.log(this.state.buttonIndex);
  // }



  render() {
    return (
      <ButtonFunctionsProvider>
        <Router>
          <Header />
          {/* <Header handleTabSizeBtn={this.handleTabSizeBtn} selectedSizeBtnRef={this.selectedSizeBtnRef} buttonIndex={this.state.buttonIndex} handleDecrementProductQuantity={this.handleDecrementProductQuantity} addedProducts={this.state.addedProducts} handleIncrementProductQuantity={this.handleIncrementProductQuantity} /> */}
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
              {/* <ProductDetail selectedSizeBtnRef={this.selectedSizeBtnRef} onAdd={this.onAdd} handleAddToCart={this.handleAddToCart} handleTabSizeBtn={this.handleTabSizeBtn} /> */}
            </Route>
            <Route path="/viewCart">
              <ViewCart />
              {/* <ViewCart handleDecrementProductQuantity={this.handleDecrementProductQuantity} addedProducts={this.state.addedProducts} handleIncrementProductQuantity={this.handleIncrementProductQuantity} /> */}
            </Route>
          </Switch>
        </Router>
      </ButtonFunctionsProvider>
    )
  }
}

export default App;
