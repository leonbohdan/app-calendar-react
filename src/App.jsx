import React from 'react';
import './App.scss';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <div class="container">
        <div>
          <h1 class="title">Hello World</h1>
          <p class="subtitle">
            My first website with <strong>Bootstrap</strong>!
          </p>
        </div>
      </div>
    </>
  );
}
