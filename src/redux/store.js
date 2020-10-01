import { createStore } from 'redux';

const initialState = {
  currentDate: new Date(),
  years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekDayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  daysInWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  selectedDate: null,
  onChange: Function.prototype,
  popupShow: false,
};

export const selectors = {
  getCurrentDate: state => state.currentDate,
  getYears: state => state.years,
  getMonthNames: state => state.monthNames,
  getWeekDayNames: state => state.weekDayNames,
  getSelectedDate: state => state.selectedDate,
  getOnChange: state => state.onChange,
  getDaysInWeek: state => state.daysInWeek,
  getPopupShow: state => state.popupShow,
};

const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
const SET_ON_CHANGE = 'SET_ON_CHANGE';
const SET_POPUP_SHOW = 'SET_POPUP_SHOW';

export const actions = {
  setSelectedDate: date => ({
    type: SET_SELECTED_DATE,
    date,
  }),

  setOnChange: date => ({
    type: SET_ON_CHANGE,
    date,
  }),

  setPopupShow: () => ({
    type: SET_POPUP_SHOW,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.date,
      };

    case SET_ON_CHANGE:
      return {
        ...state,
        onChange: action.date,
      };

    case SET_POPUP_SHOW:
      return {
        ...state,
        popupShow: !state.popupShow,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
