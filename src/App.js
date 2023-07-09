import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import FloatIcon from './components/FloatIcon/FloatIcon';
import products from './data/data';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  const firstProductId = products.length > 0 ? products[0].productId : null;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header productId={firstProductId} />
            <Carousel productId={firstProductId} />
            <Body productId={firstProductId} />
            <FloatIcon productId={firstProductId} />
            <Footer productId={firstProductId}/>
          </Route>
          <Route exact path="/404">
            <Header />
            <Error />
            <Footer />
          </Route>
          <Route path="/product/:productId">
            {({ match }) => {
              const { productId } = match.params;
              return (
                <>
                  <Header productId={productId} />
                  <Carousel productId={productId} />
                  <Body productId={productId} />
                  <FloatIcon productId={productId} />
                  <Footer productId={productId} />
                </>
              );
            }}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
