class Timeforge {
  static getCurrentDateTime(): Date {
    return new Date();
  }

  static getCurrentUTCDateTime(): Date {
    const currentDate = new Date();
    const utcDate = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDate(),
      currentDate.getUTCHours(),
      currentDate.getUTCMinutes(),
      currentDate.getUTCSeconds()
    );
    return utcDate;
  }

  static getTimezoneDate(timezoneOffset: number): Date {
    const currentDate = new Date();
    const offsetInMilliseconds = timezoneOffset * 60000;
    const timezoneDate = new Date(currentDate.getTime() + offsetInMilliseconds);
    return timezoneDate;
  }
}

console.log(Timeforge.getCurrentDateTime());
console.log(Timeforge.getCurrentUTCDateTime());

module.exports = Timeforge;
