let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD", ''),
	answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
	answer2 = prompt("Во сколько обойдется?"),
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

alert(`бюжет на 1 день ${money / 30}`);

// Вопросы к этому заданию

// Сколько типов данных существует в JS?
// 7
// Как вывести информацию в консоль?
// console.log(object);
// Какая функция операторов || и &&?
// условие или, и