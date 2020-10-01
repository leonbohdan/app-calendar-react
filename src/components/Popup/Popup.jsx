import React from 'react';
import './Popup.scss';
// import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../redux/store';

export const Popup = () => {
  return (
    <section className="popup">
      <div className="popup__back"></div>
      <form action="" className="popup__form">
        <div className="popup__left">
          <div className="popup__month">
            <label htmlFor="month">Month</label>
          </div>
          <input
            type="text"
            id="month"
            className="popup__input"
            placeholder="July"
            readOnly
          />
        </div>

        <div className="popup__right">
          <div className="popup__day">
            <label htmlFor="day">Day</label>
          </div>
          <input
            type="text"
            id="day"
            className="popup__input"
            placeholder='18th Friday'
            readOnly
          />
        </div>

        <button
          type="button"
          className="popup__button"
          onClick={() => { }}
        >
          &#10005;
        </button>
      </form>
    </section>
  );
}
