export const validateDate = (day: number, month: number, year: number) => {
  const errors = { day: false, month: false, year: false };
  const currentDate = new Date();
  const maxAllowedDate = new Date();
  maxAllowedDate.setFullYear(currentDate.getFullYear() - 150);

  if (day < 1 || day > 31) errors.day = true;
  if (month < 1 || month > 12) errors.month = true;

  if (year > currentDate.getFullYear() || year < currentDate.getFullYear() - 110)
    errors.year = true;

  if (
    (month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12) &&
    day > 31
  ) {
    errors.day = true;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    errors.day = true;
  }

  if (month === 2) {
    const leapYear = isLeapYear(year);
    if (leapYear && day > 29) errors.day = true;
    if (!leapYear && day > 28) errors.day = true;
  }

  return errors;
};

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
