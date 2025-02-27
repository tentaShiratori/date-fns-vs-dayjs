import { constructFromSymbol } from "date-fns/constants";
import { intlFormat } from "date-fns/intlFormat";
constructFromSymbol.toString();
export default function format(): string {
	const now = new Date();
	return intlFormat(now, {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
}
