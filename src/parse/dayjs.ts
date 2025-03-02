import dayjs, { type Dayjs } from "dayjs";

export default function dayjsFormat(): Dayjs {
	const isoTZ2 = "2022-01-01T00:00:00.000+09:00";
	return dayjs(isoTZ2);
}
