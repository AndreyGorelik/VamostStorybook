export function getSavedBirthday(birthdate: string) {
  const savedDate = new Date(birthdate);

  const [month1, month2] = `${savedDate.getMonth()}`.padStart(2, '0').split('');
  const [day1, day2] = `${savedDate.getDate()}`.padStart(2, '0').split('');
  const [year1, year2, year3, year4] = `${savedDate.getFullYear()}`.split('');

  return {
    month1,
    month2: `${+month2 + 1}`,
    day1,
    day2,
    year1,
    year2,
    year3,
    year4,
  };
}
