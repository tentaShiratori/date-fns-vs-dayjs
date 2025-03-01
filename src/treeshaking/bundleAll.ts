import * as dateFns from "date-fns";

export default function lightFormat(): string {
	const bundleAll = { ...dateFns };
	bundleAll.toString();
	const now = new Date();
	return dateFns.lightFormat(now, "yyyy年MM月dd日HH時mm分ss秒");
}
