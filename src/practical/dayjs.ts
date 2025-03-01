import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(isLeapYear);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(utc);

const dayjsFunctionDemo = (dateString: string) => {
	const date = dayjs.utc(dateString);

	// 日付操作系
	const addedDays = date.add(10, "day");
	const subtractedDays = date.subtract(10, "day");
	const addedMonths = date.add(3, "month");
	const subtractedMonths = date.subtract(3, "month");
	const addedYears = date.add(1, "year");
	const subtractedYears = date.subtract(1, "year");

	// 日付比較系
	const diffInDays = addedDays.diff(subtractedDays, "day");
	const diffInMonths = addedMonths.diff(subtractedMonths, "month");
	const diffInYears = addedYears.diff(subtractedYears, "year");

	// 開始・終了系
	const startOfDayResult = date.startOf("day");
	const endOfDayResult = date.endOf("day");
	const startOfWeekResult = date.startOf("week");
	const endOfWeekResult = date.endOf("week");
	const startOfMonthResult = date.startOf("month");
	const endOfMonthResult = date.endOf("month");
	const startOfYearResult = date.startOf("year");
	const endOfYearResult = date.endOf("year");

	// 取得系
	const dayOfWeek = date.day();
	const month = date.month();
	const year = date.year();
	const dayOfMonth = date.date();
	const hours = date.hour();
	const minutes = date.minute();
	const seconds = date.second();

	// 設定系
	const modifiedDate = date
		.set("year", year + 2)
		.set("hour", 15)
		.set("minute", 30)
		.set("second", 45);

	// 曜日判定系
	const isWeekendResult = date.day() === 0 || date.day() === 6;
	const isMondayResult = date.day() === 1;
	const isTuesdayResult = date.day() === 2;
	const isWednesdayResult = date.day() === 3;
	const isThursdayResult = date.day() === 4;
	const isFridayResult = date.day() === 5;
	const isSaturdayResult = date.day() === 6;
	const isSundayResult = date.day() === 0;

	// 期間系
	const intervalDays = [];
	for (
		let d = startOfMonthResult;
		d.isBefore(endOfMonthResult, "day");
		d = d.add(1, "day")
	) {
		intervalDays.push(d);
	}

	const intervalMonths = [];
	for (
		let d = startOfYearResult;
		d.isBefore(endOfYearResult, "month");
		d = d.add(1, "month")
	) {
		intervalMonths.push(d);
	}

	// その他
	const isLeap = date.isLeapYear();
	const daysInMonth = date.daysInMonth();
	const weekNumber = date.week();
	const isoWeekNumber = date.isoWeek();
	const isValidDate = date.isValid();
	const formattedDate = date.format("YYYY-MM-DD HH:mm:ss");
	const formattedISODate = date.toISOString();

	return {
		addedDays,
		subtractedDays,
		addedMonths,
		subtractedMonths,
		addedYears,
		subtractedYears,
		diffInDays,
		diffInMonths,
		diffInYears,
		startOfDayResult,
		endOfDayResult,
		startOfWeekResult,
		endOfWeekResult,
		startOfMonthResult,
		endOfMonthResult,
		startOfYearResult,
		endOfYearResult,
		dayOfWeek,
		month,
		year,
		dayOfMonth,
		hours,
		minutes,
		seconds,
		modifiedDate,
		isWeekendResult,
		isMondayResult,
		isTuesdayResult,
		isWednesdayResult,
		isThursdayResult,
		isFridayResult,
		isSaturdayResult,
		isSundayResult,
		intervalDays,
		intervalMonths,
		isLeap,
		daysInMonth,
		weekNumber,
		isoWeekNumber,
		isValidDate,
		formattedDate,
		formattedISODate,
	};
};

// 実行例
console.log(dayjsFunctionDemo("2025-03-01T00:00:00Z"));
