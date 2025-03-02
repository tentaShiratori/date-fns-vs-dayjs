import { bench, run, summary } from "mitata";
import datefns from "../src/parse/date-fns";
import dayjs from "../src/parse/dayjs";
import date from "../src/parse/date";
summary(() => {
	// MEMO: μ=マイクロ(10^-6), n=ナノ(10^-9)
	bench("dayjs", () => {
		dayjs();
	});
	bench("date-fns", () => {
		datefns();
	});
	bench("date", () => {
		date();
	});
});

run();
