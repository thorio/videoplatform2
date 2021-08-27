import moment from "moment";

export function date(date: Date) {
	return moment(date).format("DD.MM.YYYY");
}
