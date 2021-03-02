let fact = document.getElementById("fact");
const bDay = "04-23-1999";
const bDayDate = new Date(bDay);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
	const now = new Date();
	const difference = Math.floor((now.getTime() - bDayDate.getTime()) / 1000);
	fact.innerText = intlNumberFormatter.format(difference);
}, 1000);

const changeColor = (x) => {
	x.style.color = "#f05454";
};

const resetColor = (x) => {
	x.style.color = "";
};
