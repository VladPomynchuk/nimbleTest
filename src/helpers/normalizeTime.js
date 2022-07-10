import moment from 'moment';

export default function normalizeTime(value) {
  const time = { h: 0, m: 0, s: 0 };

  time.s = moment.duration(value).seconds();
  time.m = moment.duration(value).minutes();
  time.h = Math.trunc(moment.duration(value).asHours());

  const timeString =
    String(time.h).padStart(2, '0') +
    ':' +
    String(time.m).padStart(2, '0') +
    ':' +
    String(time.s).padStart(2, '0');

  return timeString;
}
