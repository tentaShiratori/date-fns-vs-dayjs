import { type Duration, add } from "date-fns";

const duration: Duration = {
	seconds: 1000,
};

const now = new Date();
console.log(now);
console.log(add(now, duration));
