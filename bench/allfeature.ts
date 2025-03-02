import { bench, run, summary } from "mitata";
import datefns from "../src/allfeature/date-fns";
import dayjs from "../src/allfeature/dayjs";
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
