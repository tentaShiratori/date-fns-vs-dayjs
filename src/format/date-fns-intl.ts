import { constructFromSymbol } from "date-fns/constants";
import { intlFormat } from "date-fns/intlFormat";
constructFromSymbol.toString();
const now = new Date();
console.log(intlFormat(now, { dateStyle: "full", timeStyle: "full" }));
