/* eslint-disable class-methods-use-this */
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import HijriUtils from "@date-io/hijri";

export default class HijriUtilsExtended extends HijriUtils {
  constructor() {
    super();
    // Make it ar-SA to show everything in Arabic
    this.locale = "ar-SA";
  }

  getCalendarHeaderText = date => date.locale(this.locale).format("iMMMM iYYYY");

  getDatePickerHeaderText = date => date.locale(this.locale).format("ddd, iD iMMM");

  // Get the months array in hijri.
  getMonthArray = date => {
    const firstMonth = date.clone().locale(this.locale).startOf("iYear");
    const monthArray = [firstMonth];

    while (monthArray.length < 12) {
      const prevMonth = monthArray[monthArray.length - 1];
      monthArray.push(prevMonth.clone().add(1, "iMonth"));
    }

    return monthArray;
  };

  // Set month in Hijri.
  setMonth = (date, count) => date.clone().iMonth(count);

  format = (date, format) =>
    // This is to show Hijri months instead of Arabic translation of Gregorian months
    // MMM is hardcoded in the uidatepicker library for months, moment-hijri
    // needs in the iMMMM format to show hijri months, we will replace here.
    format === "MMM" ? date.format("iMMM") : date.format(format);

  getYearRange = (start, end) => {
    // moment-hijri only supports dates between 1356-01-01 H and 1499-12-29 H
    // We need to throw if outside min/max bounds, otherwise the while loop below will be infinite.
    if (start.isBefore("1937-03-14")) {
      throw new Error("min date must be on or after 1356-01-01 H (1937-03-14)");
    }
    if (end.isAfter("2076-11-26")) {
      throw new Error("max date must be on or before 1499-12-29 H (2076-11-26)");
    }
    const startDate = this.moment(start).locale(this.locale).startOf("iYear");
    const endDate = this.moment(end).locale(this.locale).endOf("iYear");
    const years: number[] = [];
    let current = startDate;
    while (current.isBefore(endDate)) {
      years.push(current);
      current = current.clone().add(1, "iYear");
    }
    return years;
  };

  getDayText = date => date.locale(this.locale).format("iD");
}
