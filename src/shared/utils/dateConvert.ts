export const dateConvert = (
  dateString: string
): {
  convertedDate: string;
  convertedTime: string;
} => {
  const date = new Date(dateString);
  const [weekDay, month, day, ...rest] = date
    .toLocaleString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    .split(' ');

  const convertedDate = `${weekDay.slice(0, weekDay.length - 1)} ${month} ${day.slice(
    0,
    day.length - 1
  )}`;
  const convertedTime = `${rest.join(' ')}`;

  return {
    convertedDate,
    convertedTime,
  };
};
