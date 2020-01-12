let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: '',
	income: [],
	savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

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

function checkSevings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?'),
			percent = +prompt('Под какой процент?');

		appData.monthIncome = save / 100 / 12 * percent;
		alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
	}
}
checkSevings();

function detectDayBudget() {
	// Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию
}
detectDayBudget();

function detectLevel() {
	// Оформить блок кода с расчетом уровня достатка как отдельную функцию
}
detectLevel();

function chooseOptExpenses() {
// 	Создать функцию для определения необязательных расходов (chooseOptExpenses):

// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

// Записать ответы в объект optionalExpenses в формате Номер - Ответ.

//     optionalExpenses: {
//     1 : “ответ на вопрос”
//     }

// Вызывать функции не обязательно.
}
chooseOptExpenses();