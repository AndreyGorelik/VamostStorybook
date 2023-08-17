export const dateConvert = (dateString: string): string => {
  const date = new Date(dateString);
  const [weekDay, month, day] = date
    .toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
    .split(' ');

  const convertedDate = `${weekDay.slice(0, weekDay.length - 1)} ${month} ${day}`;

  return convertedDate;
};
