import React, { Component } from 'react';
import ProductListContainer from './containers/ProductListContainer'
import AddProductContainer from "./containers/AddProductContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageFrame from "./components/PageFrame";

class App extends Component {
  render() {
    return (
      <Router>
        <PageFrame>
       <Route exact path="/" component={ProductListContainer} /> 
       <Route path="/add-product" component={AddProductContainer} /> 
       </PageFrame>
      </Router>      
    );
  }
}

export default App;
