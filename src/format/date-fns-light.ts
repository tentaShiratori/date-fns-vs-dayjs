import { lightFormat } from "date-fns/lightFormat";

export default function dateFnsLight(): string {
	const now = new Date();
	return lightFormat(now, "yyyy年MM月dd日HH時mm分ss秒");
}
