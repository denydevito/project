let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

const appData = {
	budget : money,
	timeData : time,
	expenses : {},
	optionalExpenses : '',
	income : [],
	savings : false
};
