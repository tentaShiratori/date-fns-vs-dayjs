import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(timezone);
dayjs.extend(utc);
export default function () {
	console.log("調査内容: nowの日付を取得");
	process.env.TZ = "UTC";
	const now = new Date();
	console.log("process.env.TZ:", "dayjs:", dayjs(now).format("xxx"));
	console.log("dayjs:", dayjs(now).format());
	console.log("dayjs:", dayjs.tz(now, "Asia/Tokyo").format());
	console.log("結果: tzに合わせて表記が変わる");
	console.log("---------------------------------------------");

	console.log("調査内容: TZ付き(Z)のISO文字列をparseした");
	const isoTZ = "2022-01-01T00:00:00.000Z";
	process.env.TZ = "UTC";
	const utcDate = dayjs(isoTZ);
	console.log("process.env.TZ:", "dayjs:", dayjs(isoTZ).format("xxx"));
	console.log("dayjs:", dayjs(utcDate).format());
	console.log("dayjs:", dayjs.tz(utcDate, "Asia/Tokyo").format());
	process.env.TZ = "Asia/Tokyo";
	console.log("process.env.TZ:", "dayjs:", dayjs(isoTZ).format("xxx"));
	console.log("dayjs:", dayjs(utcDate).format());
	console.log("結果: tzによって表示が変わる");
	console.log("---------------------------------------------");

	console.log("調査内容: TZなしのISO文字列をparseした");
	const isoNoTZ = "2022-01-01T00:00:00.000";
	process.env.TZ = "UTC";
	console.log("process.env.TZ:", "dayjs:", dayjs(isoNoTZ).format("xxx"));
	console.log("dayjs(dayjs):", dayjs(isoNoTZ).locale("de").format());
	console.log("dayjs(format):");
	console.log(
		"結果: process.env.TZの値でDateが生成され、表示するときはtzに合わせて表記が変わる",
	);
	console.log("---------------------------------------------");
}
