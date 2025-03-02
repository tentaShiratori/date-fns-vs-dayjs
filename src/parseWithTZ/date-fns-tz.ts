import { format, lightFormat, parseISO } from "date-fns";
import { tz, TZDateMini } from "@date-fns/tz";

export default function () {
	console.log("調査内容: nowの日付を取得");
	const now = new Date();
	process.env.TZ = "UTC";
	console.log("process.env.TZ:", "date-fns:", format(now, "xxx"));
	console.log("date-fns:", lightFormat(now, "yyyy年MM月dd日HH時mm分ss秒"));
	console.log(
		"date-fns:",
		lightFormat(
			new TZDateMini(now, "Asia/Tokyo"),
			"yyyy年MM月dd日HH時mm分ss秒",
		),
	);
	console.log("結果: tzに合わせて表記が変わる");
	console.log("---------------------------------------------");

	console.log("調査内容: TZ付き(Z)のISO文字列をparseした");
	const isoTZ = "2022-01-01T00:00:00.000Z";
	process.env.TZ = "UTC";
	const utcDate = parseISO(isoTZ);
	console.log("process.env.TZ:", "date-fns:", format(parseISO(isoTZ), "xxx"));
	console.log("date-fns:", lightFormat(utcDate, "yyyy年MM月dd日HH時mm分ss秒"));
	console.log(
		"date-fns:",
		lightFormat(
			new TZDateMini(utcDate, "Asia/Tokyo"),
			"yyyy年MM月dd日HH時mm分ss秒",
		),
	);
	process.env.TZ = "Asia/Tokyo";
	console.log("process.env.TZ:", "date-fns:", format(parseISO(isoTZ), "xxx"));
	console.log("date-fns:", lightFormat(utcDate, "yyyy年MM月dd日HH時mm分ss秒"));
	console.log("結果: tzによって表示が変わる");
	console.log("---------------------------------------------");

	console.log("調査内容: TZなしのISO文字列をparseした");
	const isoNoTZ = "2022-01-01T00:00:00.000";
	process.env.TZ = "UTC";
	console.log("process.env.TZ:", "date-fns:", format(parseISO(isoNoTZ), "xxx"));
	console.log(
		"date-fns(lightFormat):",
		lightFormat(
			new TZDateMini(isoNoTZ, "Asia/Tokyo"),
			"yyyy年MM月dd日HH時mm分ss秒",
		),
	);
	console.log(
		"date-fns(format):",
		format(parseISO(isoNoTZ), "yyyy年MM月dd日HH時mm分ss秒xxx"),
	);
	console.log(
		"結果: process.env.TZの値でDateが生成され、表示するときはtzに合わせて表記が変わる",
	);
	console.log("---------------------------------------------");
}
