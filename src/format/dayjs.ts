import dayjs from "dayjs";

export default function dayjsFormat(): string {
	const now = new Date();
	return dayjs(now).format("YYYY年MM月DD日HH時mm分ss秒");
}
