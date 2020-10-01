import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux/store";
import CN from "classnames";
import "./Calendar.scss";
import * as calendar from "./utils";

export const Calendar = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectors.getCurrentDate);
  // const years = useSelector(selectors.getYears);
  const monthNames = useSelector(selectors.getMonthNames);
  const weekDayNames = useSelector(selectors.getWeekDayNames);
  const selectedDate = useSelector(selectors.getSelectedDate);
  // const onChange = useSelector(selectors.getOnChange);
  // const popupShow = useSelector(selectors.getPopupShow);
  const [chosenDate, setChosenDate] = useState(currentDate);
  // console.log(chosenDate);
  // console.log(onChange);

  const year = () => {
    return chosenDate.getFullYear();
  };

  const month = () => {
    return chosenDate.getMonth();
  };

  // const day = () => {
  //   return chosenDate.getDate();
  // };
  // console.log(year(), month(), day(), chosenDate.getDay());

  const monthData = calendar.getMonthData(year(), month());

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year(), month() - 1);
    console.log(date);

    setChosenDate(date);
    // this.setState({ date });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year(), month() + 1);
    console.log(date);
    setChosenDate(date);
  };

  // const handleSelectChange = () => {
  //     const year = yearSelect.value;
  //     const month = monthSelect.value;

  //     const date = new Date(year, month);
  //     console.log(date);
  //     // dispatch(actions.setSelectedDate(date));
  //     setChosenDate(date);
  //     // this.setState({ date });
  // };

  const handleDayClick = (date) => {
    console.log(date);
    dispatch(actions.setSelectedDate(date));
    dispatch(actions.setOnChange(date));
    dispatch(actions.setPopupShow());
  };

  return (
    <div className="calendar">
      <header>
        <button onClick={handlePrevMonthButtonClick}>&#8249;</button>

        <span className="heading">
          {monthNames[month()]} {year()}
        </span>

        {/* <select 
          onChange={handleSelectChange}
        >
          {monthNames.map((name, i) => (
            <option key={name} value={i}>{name}</option>
          ))}
        </select> */}

        {/* <select 
          onChange={handleSelectChange}
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select> */}

        <button onClick={handleNextMonthButtonClick}>&#8250;</button>
      </header>

      <table>
        {/* <thead>
          <tr>
            {weekDayNames.map((name, i) => (
              <th key={i}>{name}</th>
            ))}
          </tr>
        </thead> */}

        <tbody>
          {monthData.map((week, i) => (
            <tr key={i} className="week">
              {week.map((date, i) =>
                date ? (
                  <td
                    key={i}
                    className={CN("day", {
                      today: calendar.areEqual(date, currentDate),
                      selected: calendar.areEqual(date, selectedDate),
                      other: !date,
                    })}
                    onClick={() => handleDayClick(date)}
                  >
                    {`0${date.getDate()}`.slice(-2)}
                  </td>
                ) : (
                  <td key={i} />
                ),
              )}
            </tr>
          ))}
        </tbody>

        {/* <thead> */}
          <tr>
            {weekDayNames.map((name, i) => (
              <th key={i}>{name}</th>
            ))}
          </tr>
        {/* </thead> */}
      </table>
    </div>
  );
};
