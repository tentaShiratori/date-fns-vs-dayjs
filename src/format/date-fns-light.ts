import { lightFormat } from "date-fns/lightFormat";
const now = new Date();
console.log(lightFormat(now, "yyyy年MM月dd日HH時mm分ss秒"));
