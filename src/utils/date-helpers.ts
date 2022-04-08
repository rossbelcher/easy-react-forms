import moment from 'moment-timezone';

interface Item {
  value: string;
  text: string;
  adjustedValue: string;
}

export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';

export const ARRIVAL_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const SUPPORTED_DATE_FORMATS = [
  'DD/MM/YYYY',
  'D/M/YYYY',
  'DD.MM.YYYY',
  'DD.MM.YY',
  'D.M.YYYY',
  'D.M.YY',
  'DD. MM. YYYY',
  'DD. MM. YY',
  'D. M. YYYY',
  'D. M. YY',
  'DD MMM YYYY',
  'DD-MM-YY',
  'DD-MM-YYYY',
  'DD/MM/YY',
  'MMM DD YYYY',
  'MMMM DD YYYY',
  'DD MMM YY',
  'DD MMMM YYYY',
  'DD MMMM YY',
  'YYYY-MM-DDTHH:mm:ss.SSSZ',
  'YYYY-MM-DDTHH:mm:ssZ',
  'YYYY-MM-DDTHH:mm:ss',
  'YYYY-MM-DD',
];

export function isValidDateObject(dateObject) {
  if (
    Object.prototype.toString.call(dateObject) === '[object Date]'
    && !Number.isNaN(dateObject.getTime())
  ) {
    return true;
  }
  
  return false;
}

export function toDate(value: string | Date | moment.Moment): Date | undefined {
  const regex = RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$');
  if (typeof value === 'string' && regex.test(value)) {
    const newDate = new Date();
    newDate.setHours(parseInt(value.split(':')[0]));
    newDate.setMinutes(parseInt(value.split(':')[1]));
    value = newDate;
  }

  const momentObject = createMomentFromValue(value);

  if (momentObject.isValid()) {
    return momentObject.toDate();
  }

  return undefined;
}

export function isValidDate(value: any) {
  return createMomentFromValue(value).isValid();
}

export function resetTime(date): moment.Moment {
  return createMomentFromValue(date).startOf('day');
}

export function getTimeRemainingBetweenDateAndNow(expiryDate: string) : number {
  if (!expiryDate || Date.parse(expiryDate) === NaN) {
      return -1;
  }

  const parsedExpiryDate = new Date(expiryDate);

  // @ts-ignore
  let now = getUkTime();
  let milliSecondsDifference = parsedExpiryDate.getTime() - now.getTime();

  let secondsDifference = milliSecondsDifference / 1000;

  return secondsDifference;
}

export function formatDate(date: string | Date | moment.Moment, format?: string) {
  const momentObject = createMomentFromValue(date);
  return momentObject.format(format ? format : DEFAULT_DATE_FORMAT);
}

export function createMomentFromValue(value: any) {
  moment.locale('en-gb');
  // examples for supported formats https://jsfiddle.net/johnhornsby/sL0y3pcm/
  return moment(value, SUPPORTED_DATE_FORMATS, 'L', true);
}

export function getUkTime(date: Date | string = new Date()) {
  return new Date(moment(date).tz('Europe/London').format("YYYY-MM-DD HH:mm:ss"));
}

export function getUKTimeString(date: Date | string = new Date()) {
  let offset = new Date(date).getTimezoneOffset();
  offset = offset < 0 ? Math.abs(offset) : offset * -1;
  return moment(date).add(offset, 'minutes').format("YYYY-MM-DDTHH:mm:ss");
}

export function convertTime(time: string | number) {
  time = time.toString();
  if (time.length === 3) return `0${time.substr(0, 1)}:${time.substr(1, 2)}`;
  if (time.length === 4) return `${time.substr(0, 2)}:${time.substr(2, 2)}`;
}

export function getArrivalTimeSlots(from: string, to: string) : Item[] {
  const items: Item[] = [];
  let startHour = new Date(from).getHours();
  let endHour = new Date(to).getHours();
  const startMinutes = new Date(from).getMinutes();
  const endMinutes = new Date(to).getMinutes();
  if (endHour == 0 && endMinutes == 0) {
      endHour = 24;
  }
  do {
      let startRange = new Date(0);
      startRange.setHours(startHour);
      startRange.setMinutes(startMinutes);
      let endRange = new Date(0);
      endRange.setHours(startHour + 1);
      endRange.setMinutes(startMinutes);

      let selection = `${moment(startRange).format("HH:mm")} - ${moment(endRange).format("HH:mm")}`;
      let value = moment(startRange).format(ARRIVAL_TIME_FORMAT);
      let adjustedValue = moment(startRange).format("HH:mm");

      items.push({ value: value, text: selection, adjustedValue: adjustedValue } as Item);
      startHour++;
  } while (startHour < endHour)
  return items;
}
