import dayjs from "dayjs";

export default function dayJs() {
	const date = dayjs("2022-01-01T00:00:00.000+09:00");
	const now = date.clone();

	return {
		comparisons: {
			isSameSecond: date.isSame(now, "s"),
			isSameMinute: date.isSame(now, "m"),
			isSameHour: date.isSame(now, "h"),
			isSameDay: date.isSame(now, "D"),
			isSameWeek: date.isSame(now, "w"),
			isSameMonth: date.isSame(now, "M"),
			isSameYear: date.isSame(now, "y"),
			isAfter: date.isAfter(now),
			isBefore: date.isBefore(now),
		},
		timestamps: {
			unix: date.unix(),
		},
		startOf: {
			startOfSecond: date.startOf("s").toISOString(),
			startOfMinute: date.startOf("m").toISOString(),
			startOfHour: date.startOf("h").toISOString(),
			startOfDay: date.startOf("D").toISOString(),
			startOfWeek: date.startOf("w").toISOString(),
			startOfMonth: date.startOf("M").toISOString(),
			startOfYear: date.startOf("y").toISOString(),
		},
		endOf: {
			endOfSecond: date.endOf("s").toISOString(),
			endOfMinute: date.endOf("m").toISOString(),
			endOfHour: date.endOf("h").toISOString(),
			endOfDay: date.endOf("D").toISOString(),
			endOfWeek: date.endOf("w").toISOString(),
			endOfMonth: date.endOf("M").toISOString(),
			endOfYear: date.endOf("y").toISOString(),
		},
		set: {
			setMilliseconds: date.set("ms", 500).toISOString(),
			setSeconds: date.set("s", 30).toISOString(),
			setMinutes: date.set("m", 15).toISOString(),
			setHours: date.set("h", 10).toISOString(),
			setDay: date.set("D", 2).toISOString(),
			setMonth: date.set("M", 6).toISOString(),
			setYear: date.set("y", 2025).toISOString(),
		},
		get: {
			milliseconds: date.get("ms"),
			seconds: date.get("s"),
			minutes: date.get("m"),
			hours: date.get("h"),
			day: date.get("d"),
			month: date.get("M"),
			year: date.get("y"),
		},
		add: {
			addMilliseconds: date.add(1000, "millisecond").toISOString(),
			addSeconds: date.add(10, "s").toISOString(),
			addMinutes: date.add(5, "m").toISOString(),
			addHours: date.add(2, "h").toISOString(),
			addDays: date.add(7, "D").toISOString(),
			addWeeks: date.add(1, "w").toISOString(),
			addMonths: date.add(3, "M").toISOString(),
			addYears: date.add(1, "y").toISOString(),
		},
		subtract: {
			subMilliseconds: date.subtract(1000, "millisecond").toISOString(),
			subSeconds: date.subtract(10, "s").toISOString(),
			subMinutes: date.subtract(5, "m").toISOString(),
			subHours: date.subtract(2, "h").toISOString(),
			subDays: date.subtract(7, "D").toISOString(),
			subWeeks: date.subtract(1, "w").toISOString(),
			subMonths: date.subtract(3, "M").toISOString(),
			subYears: date.subtract(1, "y").toISOString(),
		},
		diff: {
			diffMilliseconds: date.diff(now, "millisecond"),
			diffSeconds: date.diff(now, "s"),
			diffMinutes: date.diff(now, "m"),
			diffHours: date.diff(now, "h"),
			diffDays: date.diff(now, "D"),
			diffWeeks: date.diff(now, "w"),
			diffMonths: date.diff(now, "M"),
			diffYears: date.diff(now, "y"),
		},
		others: {
			format: date.format("YYYY-MM-DD HH:mm:ss"),
			utcOffset: date.utcOffset(),
			valueOf: date.valueOf(),
			toDate: date.toDate(),
			toJSON: date.toJSON(),
			toISOString: date.toISOString(),
			toString: date.toString(),
		},
	};
}
