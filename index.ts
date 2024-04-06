import type { DateType } from "./models/types";
import {
  changeDateFormatToInputFormat,
  changeDateTimeFormatToInputFormat,
} from "./utils/changeDateFormatToInputFormat";

function getCurrentDate(dateType?: DateType): Date | string {
  if (dateType) {
    return changeDateFormatToInputFormat(dateType, new Date());
  }
  return new Date();
}

function getCurrentDateTime(dateType?: DateType): Date | string {
  if (dateType) {
    return changeDateTimeFormatToInputFormat(dateType, new Date());
  }
  return new Date();
}

function getCurrentUTCDate(dateType?: DateType): Date | string {
  const currentDate = new Date();
  const utcDate = new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth(),
    currentDate.getUTCDate()
  );
  if (dateType) {
    return changeDateFormatToInputFormat(dateType, utcDate);
  }
  return utcDate;
}

function getCurrentUTCDateTime(dateType?: DateType): Date | string {
  const currentDate = new Date();
  const utcDate = new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth(),
    currentDate.getUTCDate()
  );
  if (dateType) {
    return changeDateTimeFormatToInputFormat(dateType, utcDate);
  }
  return utcDate;
}

function getTimezoneDate(
  timezoneOffset: number,
  dateFormat: DateType
): Date | string {
  const currentDate = new Date();
  const offsetInMilliseconds = timezoneOffset * 60000;
  const timezoneDate = new Date(currentDate.getTime() + offsetInMilliseconds);
  if (dateFormat) {
    return changeDateFormatToInputFormat(dateFormat, timezoneDate);
  }
  return timezoneDate;
}

function getTimezoneDateTime(
  timezoneOffset: number,
  dateFormat: DateType
): Date | string {
  const currentDate = new Date();
  const offsetInMilliseconds = timezoneOffset * 60000;
  if (dateFormat) {
  }
  const timezoneDateTime = new Date(
    currentDate.getTime() + offsetInMilliseconds
  );
  if (dateFormat) {
    return changeDateTimeFormatToInputFormat(dateFormat, timezoneDateTime);
  }
  return timezoneDateTime;
}

function changeDateFormat(inputDate: string, dateFormat: DateType): string {
  const dateParts = inputDate.split(/[\-\/\.]/);
  const [year, month, day] = dateParts.map((part) => parseInt(part));

  let date: Date;
  switch (dateFormat) {
    case "mm/dd/yyyy":
      date = new Date(year, month - 1, day);
      break;
    case "dd/mm/yyyy":
      date = new Date(year, day - 1, month);
      break;
    case "yyyy/mm/dd":
      date = new Date(year, month - 1, day);
      break;
    case "yyyy/dd/mm":
      date = new Date(year, day - 1, month);
      break;
    case "mm-dd-yyyy":
      date = new Date(year, month - 1, day);
      break;
    case "dd-mm-yyyy":
      date = new Date(year, day - 1, month);
      break;
    case "yyyy-mm-dd":
      date = new Date(year, month - 1, day);
      break;
    case "yyyy-dd-mm":
      date = new Date(year, day - 1, month);
      break;
    case "mm.dd.yyyy":
      date = new Date(year, month - 1, day);
      break;
    case "dd.mm.yyyy":
      date = new Date(year, day - 1, month);
      break;
    case "yyyy.mm.dd":
      date = new Date(year, month - 1, day);
      break;
    case "yyyy.dd.mm":
      date = new Date(year, day - 1, month);
      break;
    default:
      throw new Error("Invalid date format");
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDate;
}

function dateDiffInDays(date1: Date, date2: Date): number {
  const diffInMs = date2.getTime() - date1.getTime();
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

function getDayOfWeek(date: Date): string {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
}

function dateDifference(
  date1: Date,
  date2: Date
): { years: number; months: number; days: number } {
  const diffInMs = date2.getTime() - date1.getTime();
  const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );
  return { years, months, days };
}

function compareDates(date1: Date, date2: Date): number {
  if (date1 < date2) {
    return -1;
  } else if (date1 > date2) {
    return 1;
  } else {
    return 0;
  }
}

export {
  getCurrentDate,
  getCurrentDateTime,
  getCurrentUTCDate,
  getTimezoneDate,
  getCurrentUTCDateTime,
  getTimezoneDateTime,
  changeDateFormat,
  dateDiffInDays,
  getDayOfWeek,
  dateDifference,
  compareDates,
};
