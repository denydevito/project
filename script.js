let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD", ''),
	answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
	answer2 = prompt("Во сколько обойдется?"),
	answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
	answer4 = prompt("Во сколько обойдется?"),
	expenses = {};

const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: '',
	income: [],
	savings: false
};

expenses.answer1 = answer2;
expenses.answer3 = answer4;

alert(`бюжет на 1 день ${money / 30}`);
