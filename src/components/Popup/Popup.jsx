import React from 'react';
import './Popup.scss';
import CN from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../redux/store';

export const Popup = () => {
  const dispatch = useDispatch();
  const daysInWeek = useSelector(selectors.getDaysInWeek);
  const selectedDate = useSelector(selectors.getSelectedDate);
  const monthNames = useSelector(selectors.getMonthNames);
  const popupShow = useSelector(selectors.getPopupShow);
  console.log(daysInWeek, selectedDate, monthNames, popupShow);

  return (
    <section className={CN({ popup: true, active: popupShow })}>
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
            placeholder={
              selectedDate === null
                ? '' : monthNames[selectedDate.getMonth()]
            }
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
            placeholder={
              selectedDate === null
                ? ""
                : `${selectedDate.getDate()}th ${
                    daysInWeek[selectedDate.getDay()]
                  }`
            }
            readOnly
          />
        </div>

        <button
          type="button"
          className="popup__button"
          onClick={() => dispatch(actions.setPopupShow())}
        >
          &#10005;
        </button>
      </form>
    </section>
  );
}
