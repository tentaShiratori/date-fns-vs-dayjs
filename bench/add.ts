import { bench, run, summary } from "mitata";
import datefns from "../src/add/date-fns";
import dayjs from "../src/add/dayjs";
summary(() => {
	// MEMO: μ=マイクロ(10^-6), n=ナノ(10^-9)
	bench("dayjs", () => {
		dayjs();
	});
	bench("date-fns", () => {
		datefns();
	});
});

run();
