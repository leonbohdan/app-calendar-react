import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../redux/store';
import CN from 'classnames';
import './Calendar.scss';
import * as calendar from './utils';

export const Calendar = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectors.getCurrentDate);
  const monthNames = useSelector(selectors.getMonthNames);
  const weekDayNames = useSelector(selectors.getWeekDayNames);
  const selectedDate = useSelector(selectors.getSelectedDate);
  const [chosenDate, setChosenDate] = useState(currentDate);

  const getYear = () => {
    return chosenDate.getFullYear();
  };

  const getMonth = () => {
    return chosenDate.getMonth();
  };

  const monthData = calendar.getMonthData(getYear(), getMonth());

  const handlePrevMonthButtonClick = () => {
    const date = new Date(getYear(), getMonth() - 1);

    setChosenDate(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(getYear(), getMonth() + 1);
    console.log(date);
    setChosenDate(date);
  };

  const handleDayClick = (date) => {
    console.log(date);
    dispatch(actions.setSelectedDate(date));
    dispatch(actions.setOnChange(date));
    dispatch(actions.setPopupShow());
  };

  return (
    <div className="calendar">
      <header className="calendar__header">
        <button
          onClick={handlePrevMonthButtonClick}
          className="calendar__button"
        >
          &#8249;
        </button>

        <span className="calendar__heading">
          {monthNames[getMonth()]} {getYear()}
        </span>

        <button
          onClick={handleNextMonthButtonClick}
          className="calendar__button"
        >
          &#8250;
        </button>
      </header>

      <table className="calendar__table">
        <tbody className="calendar__tbody">
          {monthData.map((week, i) => (
            <tr key={week}>
              {week.map((date) =>
                date[0] ? (
                  <td
                    key={date}
                    onClick={() => handleDayClick(date[1])}
                    className={CN("calendar__day", {
                      calendar__today: calendar.areEqual(date[1], currentDate),
                      calendar__selected: calendar.areEqual(
                        date[1],
                        selectedDate,
                      ),
                    })}
                  >
                    {`0${date[1].getDate()}`.slice(-2)}
                  </td>
                ) : (
                  <td key={date} className="calendar__disabledDay">
                    {`0${date[1].getDate()}`.slice(-2)}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>

        <thead className="calendar__thead">
          <tr>
            {weekDayNames.map((name, i) => (
              <th key={name + i}>{name}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};
