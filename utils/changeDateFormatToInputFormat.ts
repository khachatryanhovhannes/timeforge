import { DateType } from "../models/types";

function changeDateFormatToInputFormat(
  dateFormat: DateType,
  date: Date
): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateT = date.getDate();

  switch (dateFormat) {
    case "mm/dd/yyyy":
      return `${month}/${dateT}/${year}`;
    case "dd/mm/yyyy":
      return `${dateT}/${month}/${year}`;
    case "yyyy/mm/dd":
      return `${year}/${month}/${dateT}`;
    case "yyyy/dd/mm":
      return `${year}/${dateT}/${month}`;
    case "mm-dd-yyyy":
      return `${month}-${dateT}-${year}`;
    case "dd-mm-yyyy":
      return `${dateT}-${month}-${year}`;
    case "yyyy-mm-dd":
      return `${year}-${month}-${dateT}`;
    case "yyyy-dd-mm":
      return `${year}-${dateT}-${month}`;
    case "mm.dd.yyyy":
      return `${month}.${dateT}.${year}`;
    case "dd.mm.yyyy":
      return `${dateT}.${month}.${year}`;
    case "yyyy.mm.dd":
      return `${year}.${month}.${dateT}`;
    case "yyyy.dd.mm":
      return `${year}.${dateT}.${month}`;
    default:
      return "";
  }
}

function changeDateTimeFormatToInputFormat(
  dateFormat: DateType,
  date: Date
): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateT = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  switch (dateFormat) {
    case "mm/dd/yyyy":
      return `${month}/${dateT}/${year} ${hours}:${minutes}:${seconds}`;
    case "dd/mm/yyyy":
      return `${dateT}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    case "yyyy/mm/dd":
      return `${year}/${month}/${dateT} ${hours}:${minutes}:${seconds}`;
    case "yyyy/dd/mm":
      return `${year}/${dateT}/${month} ${hours}:${minutes}:${seconds}`;
    case "mm-dd-yyyy":
      return `${month}-${dateT}-${year} ${hours}:${minutes}:${seconds}`;
    case "dd-mm-yyyy":
      return `${dateT}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    case "yyyy-mm-dd":
      return `${year}-${month}-${dateT} ${hours}:${minutes}:${seconds}`;
    case "yyyy-dd-mm":
      return `${year}-${dateT}-${month} ${hours}:${minutes}:${seconds}`;
    case "mm.dd.yyyy":
      return `${month}.${dateT}.${year} ${hours}:${minutes}:${seconds}`;
    case "dd.mm.yyyy":
      return `${dateT}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    case "yyyy.mm.dd":
      return `${year}.${month}.${dateT} ${hours}:${minutes}:${seconds}`;
    case "yyyy.dd.mm":
      return `${year}.${dateT}.${month} ${hours}:${minutes}:${seconds}`;
    default:
      return "";
  }
}

export { changeDateFormatToInputFormat, changeDateTimeFormatToInputFormat };
