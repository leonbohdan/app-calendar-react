import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Promo } from './components/Promo';
import { About } from './components/About';

export const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Promo}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </>
  );
}
