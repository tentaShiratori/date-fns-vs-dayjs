import dayjs, { type Dayjs } from "dayjs";

export default function dayjsFormat(): Dayjs {
	return dayjs(new Date(2000, 0, 1, 0, 0, 0, 0))
		.add(1, "ms")
		.add(1, "s")
		.add(1, "m")
		.add(1, "h")
		.add(1, "d")
		.add(1, "w")
		.add(1, "M")
		.add(1, "y");
}
