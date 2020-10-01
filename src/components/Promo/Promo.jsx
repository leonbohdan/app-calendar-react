import React from 'react';
import './Promo.scss';
import { Calendar } from '../../components/Calendar';
import { Popup } from '../../components/Popup';
import promoImg from '../../images/Artboard.jpg';

export const Promo = () => {
  return (
    <>
      <Popup />
      <div className="promo d-flex">
        <div className="promo__left">
          {/* <img className="img" src={promoImg} alt="Artboard" /> */}
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

        <div class="promo__calendar">
          <Calendar />
        </div>
      </div>
    </>
  );
}
