import { format } from "date-fns/format";

const now = new Date();
console.log(format(now, "yyyy年MM月dd日HH時mm分ss秒"));
