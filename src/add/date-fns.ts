import { constructFromSymbol } from "date-fns/constants";
import {
	addMilliseconds,
	addSeconds,
	addMinutes,
	addHours,
	addDays,
	addWeeks,
	addMonths,
	addYears,
} from "date-fns";
constructFromSymbol.toString();

export default function dateFnsLight(): Date {
	return addYears(
		addMonths(
			addWeeks(
				addDays(
					addHours(
						addMinutes(
							addSeconds(
								addMilliseconds(new Date(2000, 0, 1, 0, 0, 0, 0), 1),
								1,
							),
							1,
						),
						1,
					),
					1,
				),
				1,
			),
			1,
		),
		1,
	);
}
