import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './components/Home/Home';
import Women from './components/Home/Women/Women';
import Men from './components/Home/Men/Men';
import Kids from './components/Home/Kids/Kids';

const client = new ApolloClient({ uri: 'http://localhost:4000/' });

class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
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
            </Switch>
          </Router>
        </ApolloProvider>
      </div>
    )
  }
}


export default App;
