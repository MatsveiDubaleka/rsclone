import { Budget, BudgetData, Cast, Distributions, DistributionsData, Person } from "./MovieInfo";

export const filterPersons = (persons: Cast, key : string) => {
	if (key === "ACTOR") {
		return persons.filter((person : Person) => person.professionKey === key).splice(0, 13);
	} else {
		return persons.filter((person : Person) => person.professionKey === key);
	}
}

export const findBudget = (budget: BudgetData, key : string) => {
	const obj =  budget?.items.find((item: Budget) => item.type === key);
	if (obj) {
		return `${obj?.symbol} ${formatMoney(obj?.amount)}`;
	}
}

export const findDWorldPremiere= (distributions: DistributionsData) => {
	const obj =  distributions?.items.find((item: Distributions) => item.type === 'WORLD_PREMIER');
	return obj?.date;
}

export const formatMoney = (money: number | undefined) => {
	if (money) {
		return String(money)
					.split("")
					.reverse()
					.join("")
					.replace(/\d\d\d/g, "$& ")
					.split("")
					.reverse()
					.join("")
	}
}

export const formatAge = (age: string | undefined) => {
	if (age) {
		return age.replace(/[^\d]/g, '') + '+';
	}
}

export const formatData = (date: string | undefined) => {
	const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
	if (date) {
		const month = Number(date.split('-')[1]) - 1;
		const result = date.split('-').reverse();
		result.splice(1, 1, months[month]);
		return result.join(' ');
	}
}
