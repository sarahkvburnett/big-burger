import { fetch } from "./fetch";
import { validateBooking } from "./validateBooking";
import { createDate } from "./createDate";

export const setParams = () => {
	const form = document.querySelector("#bookForm");
	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	const restaurant = form.elements["restaurant"].value;
	const day = form.elements["day"].value;
	const time = form.elements["time"].value;
	const party = form.elements["party"].value;
	const message = form.elements["message"].value;
	const date = createDate(day, time);
	return { name, email, restaurant, day, date, time, party, message };
};

export const handleSubmit = (e, type, button) => {
	e.preventDefault();
	const err = validateBooking();
	if (!err) {
		const params = setParams();
		sessionStorage.setItem("booking", JSON.stringify(params));
		document.querySelector(button).disabled = true;
		fetch(type, params);
	}
};
