const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_SUNDAY = [0, 1, 2, 3, 4, 5, 6];

const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  Novermber: 10,
  December: 11,
};

export function areEqual(a, b) {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year) && month === Month.February) {
    return daysInMonth + 1;
  } else {
    return daysInMonth;
  }
}

export function getDayOfWeek(date) {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_SUNDAY[dayOfWeek];
}
// 
  // const date = new Date();
  // console.log('date', date);

  // const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  // console.log('lastDay', lastDay);

  // const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  // console.log('prevLastDay', prevLastDay);

  // const firstDayIndex = date.getDay();
  // console.log('firstDayIndex', firstDayIndex);

  // const lastDayIndex = new Date(
  //   date.getFullYear(),
  //   date.getMonth() + 1,
  //   0,
  // ).getDay();
  // console.log('lastDayIndex', lastDayIndex);

  // const nextDays = 7 - lastDayIndex - 1;
  // console.log('nextDays', nextDays);
// 
export function getMonthData(year, month) {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const monthStartsOn = date.getDay();
  let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  let begin = prevLastDay - monthStartsOn + 1;
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = new Date(year, month - 1, begin++);
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  return result;
}
