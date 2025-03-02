import { bench, run, summary } from "mitata";
import date from "../src/format/date";
import datefnsFormat from "../src/format/date-fns-format";
import datefnsIntl from "../src/format/date-fns-intl";
import datefnsLight from "../src/format/date-fns-light";
import dayjs from "../src/format/dayjs";
summary(() => {
	// MEMO: μ=マイクロ(10^-6), n=ナノ(10^-9)
	bench("date", () => {
		date();
	});
	bench("dayjs", () => {
		dayjs();
	});
	bench("date-fns-format", () => {
		datefnsFormat();
	});
	bench("date-fns-intl", () => {
		datefnsIntl();
	});
	bench("date-fns-light", () => {
		datefnsLight();
	});
});

run();
