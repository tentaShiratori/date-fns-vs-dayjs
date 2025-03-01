import { format, lightFormat, parseISO } from "date-fns";
import "dayjs/locale/en";
import "dayjs/locale/ja";
import dayjs from "dayjs";

export default function () {
	console.log("調査内容: nowの日付を取得");
	const now = new Date();
	process.env.TZ = "UTC";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(now, "X"),
		",",
		"dayjs:",
		dayjs(now).locale(),
	);
	console.log("date-fns:", lightFormat(now, "yyyy年MM月dd日HH時mm分ss秒"));
	console.log("dayjs:", dayjs(now).format("YYYY年MM月DD日HH時mm分ss秒"));
	process.env.TZ = "Asia/Tokyo";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(now, "X"),
		",",
		"dayjs:",
		dayjs(now).locale(),
	);
	console.log("date-fns:", lightFormat(now, "yyyy年MM月dd日HH時mm分ss秒"));
	console.log("dayjs:", dayjs(now).format("YYYY年MM月DD日HH時mm分ss秒"));
	console.log("結果: process.env.TZによって表示が変わる");
	console.log("---------------------------------------------");

	console.log("調査内容: TZ付き(Z)のISO文字列をparseした");
	const isoTZ = "2022-01-01T00:00:00.000Z";
	process.env.TZ = "UTC";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(parseISO(isoTZ), "X"),
		",",
		"dayjs:",
		dayjs(isoTZ).locale(),
	);
	console.log(
		"date-fns:",
		lightFormat(parseISO(isoTZ), "yyyy年MM月dd日HH時mm分ss秒"),
	);
	console.log("dayjs:", dayjs(isoTZ).format("YYYY年MM月DD日HH時mm分ss秒"));
	process.env.TZ = "Asia/Tokyo";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(parseISO(isoTZ), "X"),
		",",
		"dayjs:",
		dayjs(isoTZ).locale(),
	);
	console.log(
		"date-fns:",
		lightFormat(parseISO(isoTZ), "yyyy年MM月dd日HH時mm分ss秒"),
	);
	console.log("dayjs:", dayjs(isoTZ).format("YYYY年MM月DD日HH時mm分ss秒"));
	console.log("結果: process.env.TZによって表示が変わる");
	console.log("---------------------------------------------");

	console.log("調査内容: TZ(+9:00)ありのISO文字列をparseした");
	const isoTZ2 = "2022-01-01T00:00:00.000+09:00";
	process.env.TZ = "UTC";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(parseISO(isoTZ2), "X"),
		",",
		"dayjs:",
		dayjs(isoTZ2).locale(),
	);
	console.log(
		"date-fns:",
		lightFormat(parseISO(isoTZ2), "yyyy年MM月dd日HH時mm分ss秒"),
	);
	console.log("dayjs:", dayjs(isoTZ2).format("YYYY年MM月DD日HH時mm分ss秒"));
	process.env.TZ = "Asia/Tokyo";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(parseISO(isoTZ2), "X"),
		",",
		"dayjs:",
		dayjs(isoTZ2).locale(),
	);
	console.log(
		"date-fns:",
		lightFormat(parseISO(isoTZ2), "yyyy年MM月dd日HH時mm分ss秒"),
	);
	console.log("dayjs:", dayjs(isoTZ2).format("YYYY年MM月DD日HH時mm分ss秒"));
	console.log("結果: process.env.TZによって表示が変わる");
	console.log("---------------------------------------------");

	console.log("調査内容: TZなしのISO文字列をparseした");
	const isoNoTZ = "2022-01-01T00:00:00.000";
	process.env.TZ = "UTC";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(parseISO(isoNoTZ), "X"),
		",",
		"dayjs:",
		dayjs(isoNoTZ).locale(),
	);
	console.log(
		"date-fns(lightFormat):",
		lightFormat(parseISO(isoNoTZ), "yyyy年MM月dd日HH時mm分ss秒"),
	);
	console.log(
		"date-fns(format):",
		format(parseISO(isoNoTZ), "yyyy年MM月dd日HH時mm分ss秒xxx"),
	);
	console.log(
		"dayjs:",
		dayjs(isoNoTZ).locale("ja").format("YYYY年MM月DD日HH時mm分ss秒Z"),
	);
	process.env.TZ = "Asia/Tokyo";
	console.log(
		"process.env.TZ:",
		"date-fns:",
		format(parseISO(isoNoTZ), "X"),
		",",
		"dayjs:",
		dayjs(isoNoTZ).locale(),
	);
	console.log(
		"date-fns(lightFormat):",
		lightFormat(parseISO(isoNoTZ), "yyyy年MM月dd日HH時mm分ss秒"),
	);
	console.log(
		"date-fns(format):",
		format(parseISO(isoNoTZ), "yyyy年MM月dd日HH時mm分ss秒xxx"),
	);
	console.log(
		"dayjs:",
		dayjs(isoNoTZ).locale("ja").format("YYYY年MM月DD日HH時mm分ss秒Z"),
	);
	console.log("結果: process.env.TZの値がlocaleとして使われる");
	console.log("---------------------------------------------");
}
