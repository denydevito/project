let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: '',
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = +prompt("Во сколько обойдется?", '');

	if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && b != '' && a.length < 50) {
		appData.expenses[a] = b;
	} else {
		console.log('поле не заполнено');
		i--;
	}
}

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay} руб.`);

if (appData.moneyPerDay < 100) {
	console.log('У вас минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('У вас средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('У вас высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}