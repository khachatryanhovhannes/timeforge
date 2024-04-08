
timeforge

Description:
timeforge is a lightweight utility package for manipulating dates, formatting them according to various date formats, and performing common date-related operations.

Installation:
To install timeforge, use npm:

npm install timeforge

Usage:
timeforge provides several functions and types for working with dates.

Functions:

- getCurrentDate(dateType?: DateType): Date | string
  Returns the current date in the specified format or as a Date object if no format is specified.

- getCurrentDateTime(dateType?: DateType): Date | string
  Returns the current date and time in the specified format or as a Date object if no format is specified.

- getCurrentUTCDate(dateType?: DateType): Date | string
  Returns the current UTC date in the specified format or as a Date object if no format is specified.

- getTimezoneDate(timezoneOffset: number, dateFormat: DateType): Date | string
  Returns the date adjusted to a specific timezone in the specified format.

- getCurrentUTCDateTime(dateType?: DateType): Date | string
  Returns the current UTC date and time in the specified format or as a Date object if no format is specified.

- getTimezoneDateTime(timezoneOffset: number, dateFormat: DateType): Date | string
  Returns the date and time adjusted to a specific timezone in the specified format.

- changeDateFormat(inputDate: string, dateFormat: DateType): string
  Converts the input date to the specified format.

- dateDiffInDays(date1: Date, date2: Date): number
  Calculates the difference in days between two dates.

- getDayOfWeek(date: Date): string
  Returns the day of the week for a given date.

- dateDifference(date1: Date, date2: Date): { years: number; months: number; days: number }
  Calculates the difference in years, months, and days between two dates.

- compareDates(date1: Date, date2: Date): number
  Compares two dates and returns -1 if date1 is before date2, 1 if date1 is after date2, and 0 if they are equal.

Types:

- DateType
  A type representing various date formats supported by the package.
  "mm/dd/yyyy", "dd/mm/yyyy", "yyyy/mm/dd", "yyyy/dd/mm", "mm-dd-yyyy", "dd-mm-yyyy", "yyyy-mm-dd", "yyyy-dd-mm", 
  "mm.dd.yyyy", "dd.mm.yyyy", "yyyy.mm.dd", "yyyy.dd.mm"
