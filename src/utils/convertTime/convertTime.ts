function convertTime(time: string | Date) {
  const object = new Date(time);
  const hours =
    object.getHours() < 10 ? '0' + object.getHours().toString() : object.getHours().toString();
  const minutes =
    object.getMinutes() < 10
      ? '0' + object.getMinutes().toString()
      : object.getMinutes().toString();
  return hours + ':' + minutes;
}

export default convertTime;
