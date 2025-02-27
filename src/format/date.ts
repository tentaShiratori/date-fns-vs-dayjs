function addLeadingZero(value: number) {
	return value.toString().padStart(2, "0");
}
function format(date: Date) {
	return `${date.getFullYear()}年${addLeadingZero(date.getMonth() + 1)}月${addLeadingZero(date.getDate())}日${addLeadingZero(date.getHours())}時${addLeadingZero(date.getMinutes())}分${addLeadingZero(date.getSeconds())}秒`;
}

export default function dateFormat(): string {
	const now = new Date();
	return format(now);
}
