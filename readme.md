# Timeforge

Timeforge is a lightweight utility package for manipulating dates, formatting them according to various date formats, and performing common date-related operations.

## Installation

To install timeforge, use npm:

```bash
npm install timeforge
```

## Usage

Timeforge provides several functions and types for working with dates.

---

```typescript
import timeforge from 'timeforge'

getCurrentDate(dateType?: DateType)
```

Returns the current date in the specified format or as a Date object if no format is specified.

---

```typescript
import timeforge from 'timeforge'

getCurrentDateTime(dateType?: DateType)
```

Returns the current date and time in the specified format or as a Date object if no format is specified.

---

```typescript
import timeforge from 'timeforge'

getCurrentUTCDate(dateType?: DateType)
```

Returns the current UTC date in the specified format or as a Date object if no format is specified.

---

```typescript
import timeforge from 'timeforge'

getTimezoneDate(timezoneOffset: number, dateFormat: DateType)
```

Returns the date adjusted to a specific timezone in the specified format.

---

```typescript
import timeforge from 'timeforge'

getCurrentUTCDateTime(dateType?: DateType)
```

Returns the current UTC date and time in the specified format or as a Date object if no format is specified.

---

```typescript
import timeforge from 'timeforge'

getTimezoneDateTime(timezoneOffset: number, dateFormat: DateType)
```

Returns the date and time adjusted to a specific timezone in the specified format.

---

```typescript
import timeforge from 'timeforge'

changeDateFormat(inputDate: string, dateFormat: DateType)
```

Converts the input date to the specified format.

---

```typescript
import timeforge from 'timeforge'

dateDiffInDays(date1: Date, date2: Date)
```

Calculates the difference in days between two dates.

---

```typescript
import timeforge from 'timeforge'
getDayOfWeek(date: Date)
```

Returns the day of the week for a given date.

---

```typescript
import timeforge from 'timeforge'

dateDifference(date1: Date, date2: Date)
```

Calculates the difference in years, months, and days between two dates.

---

```typescript
import timeforge from 'timeforge'

compareDates(date1: Date, date2: Date)
```

Compares two dates and returns -1 if date1 is before date2, 1 if date1 is after date2, and 0 if they are equal.

---

## Parameters

- mm/dd/yyyy
- dd/mm/yyyy
- yyyy/mm/dd
- yyyy/dd/mm
- mm-dd-yyyy
- dd-mm-yyyy
- yyyy-mm-dd
- yyyy-dd-mm
- mm.dd.yyyy
- dd.mm.yyyy
- yyyy.mm.dd
- yyyy.dd.mm
