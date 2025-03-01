import dayjs from "dayjs";

export default function dayjsFormat(): string {
	return dayjs().format("YYYY年MM月DD日HH時mm分ss秒");
}
