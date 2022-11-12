/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable complexity */
import moment from "moment";

// import { ArabicMonth } from "~/Models/enums";

// const timeString = (type, value) => {
//   const text = type === "hours" ? "ساع" : "دقيق";
//   switch (true) {
//     case value === 1:
//       return `منذ ${text}ة`;
//     case value === 2:
//       return `منذ ${text}تين`;
//     case value > 2 && value < 11:
//       return `منذ ${value}  ${type === "hours" ? "ساعات" : "دقائق"}`;
//     default:
//       return `منذ ${value} ${text}ة`;
//   }
// };

// export const dateTimeFormat = date => {
//   const momentDate = moment(date);
//   if (momentDate.diff(moment(), "days") < 0) return moment(date).format("YYYY-MM-DD HH:mm:ss");
//   const ksaNow = moment().utcOffset("+0300").format("YYYY-MM-DD HH:mm:ss");
//   const hours = Math.abs(momentDate.diff(ksaNow, "hours"));
//   if (hours < 1) {
//     const minutes = Math.abs(momentDate.diff(ksaNow, "minutes"));
//     if (minutes < 1) return "منذ ثواني";
//     return timeString("minutes", minutes);
//   }
//   return timeString("hours", hours);
// };

// // export const convertUTCToLocal = date => moment.utc(date).local().format("a hh:mm:ss yyyy-MM-DD") || "-";
// export const convertToLocal = date => moment(date).local().format("yyyy-MM-DD HH:mm:ss") || "-";

// export const arabicdateString = date => {
//   if (!date) return "";
//   const dateObj = new Date(date.replace(/ /g, "T"));
//   return `${dateObj.getDate()}  ${ArabicMonth[dateObj.getMonth()]}  ${dateObj.getFullYear()} `;
// };

export const dateTreatement = (date: string) => (moment(date).isValid() ? moment(date).format("DD-MM-YYYY") : "-");
