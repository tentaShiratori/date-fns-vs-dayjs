import { type Day, getMonth, parseISO } from "date-fns";
import { ja } from "date-fns/locale/ja";
import dayjs from "dayjs";

// process.env.TZ = "UTC"
const date = "2021-01-01T20:00:00.000Z";
let now = new Date();
// date-fns
function pad0(num: number): string {
	return num.toString().padStart(2, "0");
}
function format(date: Date): string {
	return `${date.getFullYear()}年${pad0(date.getMonth() + 1)}月${pad0(date.getDate())}日(${ja.localize.day(date.getDay() as Day, { width: "short" })})${pad0(date.getHours())}時${pad0(date.getMinutes())}分${pad0(date.getSeconds())}秒`;
}
console.log("date-fns");
console.log(format(parseISO(date)));
console.log(format(now));
console.log("dayjs");
console.log(dayjs(date).format("YYYY年MM月DD日HH時mm分ss秒"));
console.log(dayjs(now).format("YYYY年MM月DD日HH時mm分ss秒"));
console.log("UTC");
process.env.TZ = "UTC";
now = new Date();
console.log("date-fns");
console.log(format(parseISO(date)));
console.log(format(now));
console.log("dayjs");
console.log(dayjs(date).format("YYYY年MM月DD日HH時mm分ss秒"));
console.log(dayjs(now).format("YYYY年MM月DD日HH時mm分ss秒"));
