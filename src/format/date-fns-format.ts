import { format } from "date-fns/format";

export default function dateFnsFormat(): string {
	const now = new Date();
	return format(now, "yyyy年MM月dd日HH時mm分ss秒");
}
