const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Ирина",
            "id_3": "Александра",
            "id_4": "Валентина",
            "id_5": "Ксения",
            "id_6": "Анна",
            "id_7": "Татьяна",
            "id_8": "Елена",
            "id_9": "Алёна",
            "id_10": "Юлия"
        }
    }`,

    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Денисович",
            "id_2": "Артурович",
            "id_3": "Владиславович",
            "id_4": "Артёмович",
            "id_5": "Викторович",
            "id_6": "Петорвич",
            "id_7": "Степанович",
            "id_8": "Валерьевич",
            "id_9": "Иванович",
            "id_10": "Витальевич"
        }
    }`,
    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Никитична",
            "id_2": "Фёдоровна",
            "id_3": "Николаевна",
            "id_4": "Станиславовна",
            "id_5": "Леонидовна",
            "id_6": "Семёновна",
            "id_7": "Валентиновна",
            "id_8": "Сергеевна",
            "id_9": "Ивановна",
            "id_10": "Алексеевна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Военный",
            "id_2": "Полицейский",
            "id_3": "Пожарный",
            "id_4": "Системный администратор",
            "id_5": "Электрик",
            "id_6": "Преподаватель",
            "id_7": "Водитель",
            "id_8": "Крановщик",
            "id_9": "Охранник",
            "id_10": "Повар"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Танцовщица",
            "id_2": "Медсестра",
            "id_3": "Стилист",
            "id_4": "Продавец",
            "id_5": "Администратор",
            "id_6": "Воспитатель",
            "id_7": "Графический дизайнер",
            "id_8": "Хостес",
            "id_9": "Музыкант",
            "id_10": "Модель"
        }
    }`,


    dateBirthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

 

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        return this.randomIntNumber() > 0 ? this.GENDER_MALE : this.GENDER_FEMALE; //генерация пола
    },

    randomBirthYear: function () {
        let monthNumber = this.randomIntNumber(12, 1); 
        let monthValue = this.randomValue(this.dateBirthJson, 1, 0, 0, monthNumber); 
        let dayBirth = (monthNumber === 2) ? this.randomIntNumber(28, 1) : (monthNumber === 4 || monthNumber  === 6 || monthNumber === 9 || monthNumber === 11) ? this.randomIntNumber(30, 1) : this.randomIntNumber(31, 1); 
        let yearBirth = this.randomIntNumber(2005, 1970); 
        let outputFullDate = `${dayBirth} ${monthValue} ${yearBirth}`; 
        return outputFullDate;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {                                                //генерация имени
            return this.randomValue(this.firstNameFemaleJson); 
        }
    },

     randomSurname: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {                                               //генерация фамилии
            return `${this.randomValue(this.surnameJson)}a`;
        }
        

    },

    randomMiddleName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.middleNameMaleJson);
        } else {                                               //генерация отчества
            return this.randomValue(this.middleNameFemaleJson);
        }
    },

    randomProf: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {                                               //генерация профессии
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.birthYear = this.randomBirthYear();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.prof = this.randomProf();
        return this.person;
    }
};
