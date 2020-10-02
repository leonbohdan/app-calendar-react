import React from 'react';
import './Promo.scss';
import { Calendar } from '../../components/Calendar';
import { Popup } from '../../components/Popup';

export const Promo = () => {
  return (
    <>
      <Popup />
      <div className="promo d-flex">
        <div className="promo__left">
          <h1 className="promo__title">
            Choose the day
            <br /> for the meeting
          </h1>
          <p className="promo__info">
            We encourage you to book your
            <br /> appointment online.
            <br /> This will save you time.
          </p>
        </div>

        <div className="promo__container">
          <div className="promo__calendar">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
