export default function formatWholeDate(date: Date | string): string {
  const inputDate = new Date(date);
  const month = inputDate.toLocaleString('en', { month: 'long' });
  const day = inputDate.getDate();
  const year = inputDate.getFullYear();
  const hour = inputDate.getHours() % 12 || 12;
  const minute = inputDate.getMinutes();
  const ampm = inputDate.getHours() < 12 ? 'AM' : 'PM';

  return `${month} ${day}, ${year}, ${hour}:${minute < 10 ? '0' : ''}${minute} ${ampm}`;
}
