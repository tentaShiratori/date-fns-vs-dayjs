import {
	addDays,
	subDays,
	addMonths,
	subMonths,
	addYears,
	subYears,
	differenceInDays,
	differenceInMonths,
	differenceInYears,
	format,
	parseISO,
	isBefore,
	isAfter,
	isEqual,
	startOfDay,
	endOfDay,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	startOfYear,
	endOfYear,
	getDay,
	getMonth,
	getYear,
	getDate,
	getHours,
	getMinutes,
	getSeconds,
	setHours,
	setMinutes,
	setSeconds,
	setMilliseconds,
	setYear,
	isWeekend,
	isMonday,
	isTuesday,
	isWednesday,
	isThursday,
	isFriday,
	isSaturday,
	isSunday,
	eachDayOfInterval,
	eachMonthOfInterval,
	eachYearOfInterval,
	isLeapYear,
	getDaysInMonth,
	getWeek,
	getISOWeek,
	isValid,
	formatISO,
	toDate,
} from "date-fns";

const dateFnsFunctionDemo = (dateString: string) => {
	const date = parseISO(dateString);

	// 日付操作系
	const addedDays = addDays(date, 10);
	const subtractedDays = subDays(date, 10);
	const addedMonths = addMonths(date, 3);
	const subtractedMonths = subMonths(date, 3);
	const addedYears = addYears(date, 1);
	const subtractedYears = subYears(date, 1);

	// 日付比較系
	const diffInDays = differenceInDays(addedDays, subtractedDays);
	const diffInMonths = differenceInMonths(addedMonths, subtractedMonths);
	const diffInYears = differenceInYears(addedYears, subtractedYears);

	// 開始・終了系
	const startOfDayResult = startOfDay(date);
	const endOfDayResult = endOfDay(date);
	const startOfWeekResult = startOfWeek(date);
	const endOfWeekResult = endOfWeek(date);
	const startOfMonthResult = startOfMonth(date);
	const endOfMonthResult = endOfMonth(date);
	const startOfYearResult = startOfYear(date);
	const endOfYearResult = endOfYear(date);

	// 取得系
	const dayOfWeek = getDay(date);
	const month = getMonth(date);
	const year = getYear(date);
	const dayOfMonth = getDate(date);
	const hours = getHours(date);
	const minutes = getMinutes(date);
	const seconds = getSeconds(date);

	// 設定系
	const modifiedDate = setYear(
		setHours(setMinutes(setSeconds(date, 45), 30), 15),
		year + 2,
	);

	// 曜日判定系
	const isWeekendResult = isWeekend(date);
	const isMondayResult = isMonday(date);
	const isTuesdayResult = isTuesday(date);
	const isWednesdayResult = isWednesday(date);
	const isThursdayResult = isThursday(date);
	const isFridayResult = isFriday(date);
	const isSaturdayResult = isSaturday(date);
	const isSundayResult = isSunday(date);

	// 期間系
	const intervalDays = eachDayOfInterval({
		start: startOfMonthResult,
		end: endOfMonthResult,
	});
	const intervalMonths = eachMonthOfInterval({
		start: startOfYearResult,
		end: endOfYearResult,
	});

	// その他
	const isLeap = isLeapYear(date);
	const daysInMonth = getDaysInMonth(date);
	const weekNumber = getWeek(date);
	const isoWeekNumber = getISOWeek(date);
	const isValidDate = isValid(date);
	const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");
	const formattedISODate = formatISO(date);

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
console.log(dateFnsFunctionDemo("2025-03-01T00:00:00Z"));
