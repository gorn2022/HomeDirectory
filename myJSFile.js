/**
 * Created by Роман on 06.08.2022.
 */

var exam1 = {
    name: "История Беларуси",
    mark: 9
};

var exam2 = {
    name: "Философия",
    mark: 10
};

var exam3 = {
    name: "Экономика",
    mark: 10
};

var exam4 = {
    name: "Английский язык",
    mark: 10
};

var exam5 = {
    name: "Математический анализ",
    mark: 10
};

var sumOfTheMarksOfTheFirstFiveExams = exam1.mark+exam2.mark+exam3.mark+exam4.mark+exam5.mark;
console.log(sumOfTheMarksOfTheFirstFiveExams/5);

var exam6 = {
    name: "Функциональный анализ и интегральные уравнения",
    mark: 9
};

var exam7 = {
    name: "Геометрия и алгебра (аналитическая геометрия и высшая алгебра)",
    mark: 7
};

var exam8 = {
    name: "Геометрия и алгебра (матричный анализ)",
    mark: 10
};

var exam9 = {
    name: "Дискретная математика и математическая логика",
    mark: 7
};

var exam10 = {
    name: "Дифференциальные уравнения",
    mark: 10
};

var sumOfTheMarksOfTheSecondGroupOfFiveExams = exam6.mark+exam7.mark+exam8.mark+exam9.mark+exam10.mark;
console.log(sumOfTheMarksOfTheSecondGroupOfFiveExams/5);

var exam11 = {
    name: "Уравнения математической физики",
    mark: 10
};

var exam12 = {
    name: "Физика ЭВМ",
    mark: 10
};

var exam13 = {
    name: "Программирование",
    mark: 10
};

var exam14 = {
    name: "Теория вероятностей и математическая статистика",
    mark: 9
};

var exam15 = {
    name: "Методы оптимизации",
    mark: 10
};

var sumOfTheMarksOfTheThirdGroupOfFiveExams = exam11.mark+exam12.mark+exam13.mark+exam14.mark+exam15.mark;
console.log((sumOfTheMarksOfTheFirstFiveExams + sumOfTheMarksOfTheSecondGroupOfFiveExams + sumOfTheMarksOfTheThirdGroupOfFiveExams)/15);

var exam16 = {
    name: "Исследование операций",
    mark: 10
};

var exam17 = {
    name: "Вычислительные методы алгебры",
    mark: 10
};

var exam18 = {
    name: "Методы численного анализа",
    mark: 10
};

var exam19 = {
    name: "Компьютерные сети",
    mark: 10
};

var exam20 = {
    name: "Избранные главы физики: теоретическая механика",
    mark: 10
};

var sumOfTheMarksOfTheFourthGroupOfFiveExams = exam16.mark+exam17.mark+exam18.mark+exam19.mark+exam20.mark;
console.log((sumOfTheMarksOfTheFirstFiveExams + sumOfTheMarksOfTheSecondGroupOfFiveExams + sumOfTheMarksOfTheThirdGroupOfFiveExams + sumOfTheMarksOfTheFourthGroupOfFiveExams)/20);

var exam21 = {
    name: "Имитационное и статистическое моделирование",
    mark: 9
};

var exam22 = {
    name: "Избранные главы информатики: Компьютерный сервис вычислительного эксперимента",
    mark: 10
};

var exam23 = {
    name: "Математическое моделирование",
    mark: 8
};

var exam24 = {
    name: "Численные методы математической физики",
    mark: 10
};

var exam25 = {
    name: "Многомерный статистический анализ данных",
    mark: 9
};

var sumOfTheMarksOfTheFifthGroupOfFiveExams = exam21.mark+exam22.mark+exam23.mark+exam24.mark+exam25.mark;
console.log((sumOfTheMarksOfTheFirstFiveExams + sumOfTheMarksOfTheSecondGroupOfFiveExams + sumOfTheMarksOfTheThirdGroupOfFiveExams
    + sumOfTheMarksOfTheFourthGroupOfFiveExams + sumOfTheMarksOfTheFifthGroupOfFiveExams)/25);

var exam26 = {
    name: "Арифметические основы криптографии",
    mark: 10
};

var exam27 = {
    name: "Модели и методы теории прогнозорования",
    mark: 9
};

var exam28 = {
    name: "Статистический анализ случайных последовательностей",
    mark: 9
};

var exam29 = {
    name: "Теория алгоритмов и конечных автоматов",
    mark: 10
};

var exam30 = {
    name: "Основы цифровой обработки изображений",
    mark: 10
};

var exam31 = {
    name: "Распознование образов",
    mark: 9
};
var sumOfTheMarksOfTheSixthGroupOfFiveExams = exam26.mark+exam27.mark+exam28.mark+exam29.mark+exam30.mark;
console.log((sumOfTheMarksOfTheFirstFiveExams + sumOfTheMarksOfTheSecondGroupOfFiveExams + sumOfTheMarksOfTheThirdGroupOfFiveExams
    + sumOfTheMarksOfTheFourthGroupOfFiveExams + sumOfTheMarksOfTheFifthGroupOfFiveExams + sumOfTheMarksOfTheSixthGroupOfFiveExams)/30);


var byExamNumberOne = {
    name: "Курсовая работа (3 курс)",
    mark: 10
};

var byExamNumberTwo = {
    name: "Курсовая работа (4 курс)",
    mark: 9
};

var byExamNumberThree = {
    name: "Преддипломная практика",
    mark: 10
};

var byExamNumberFour = {
    name: "Государственный экзамен",
    mark: 10
};

var byExamNumberFive = {
    name: "Дипломная работа",
    mark: 10
};

var sumOfTheMarksForFiveByExams = byExamNumberOne.mark+byExamNumberTwo.mark+byExamNumberThree.mark+byExamNumberFour.mark+byExamNumberFive.mark;
console.log((sumOfTheMarksOfTheFirstFiveExams + sumOfTheMarksOfTheSecondGroupOfFiveExams + sumOfTheMarksOfTheThirdGroupOfFiveExams
    + sumOfTheMarksOfTheFourthGroupOfFiveExams + sumOfTheMarksOfTheFifthGroupOfFiveExams + sumOfTheMarksOfTheSixthGroupOfFiveExams + exam31.mark + sumOfTheMarksForFiveByExams)/36);