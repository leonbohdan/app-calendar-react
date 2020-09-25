import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Calendar } from './components/Calendar';
import { Promo } from './components/Promo';

export const App = () => {
  return (
    <>
      <Header />
      <div class="main">
        <div className="container">
          <Promo />
          <Calendar />
        </div>
      </div>
    </>
  );
}
