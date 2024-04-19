export function randomDate(
  start: number,
  end: number,
  startHour: number,
  endHour: number
) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  console.log(date.toLocaleDateString());
  return date.toLocaleDateString();
}
