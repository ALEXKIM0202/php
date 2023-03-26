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
            "id_1": "Екатерина",
            "id_2": "Елизавета",
            "id_3": "Виткория",
            "id_4": "Галина",
            "id_5": "Анна",
            "id_6": "Ирина",
            "id_7": "Татьяна",
            "id_8": "Ксения",
            "id_9": "Валентина",
            "id_10": "Юлия"
        }
    }`,

    middleNameJson: `{
        "count": 12,
        "list": {     
            "id_1": "Борисо",
            "id_2": "Анатолье",
            "id_3": "Владимиро",
            "id_4": "Артуро",
            "id_5": "Денисо",
            "id_6": "Петро",
            "id_7": "Семёно",
            "id_8": "Ивано",
            "id_9": "Андрее",
            "id_10": "Дмитрие",
            "id_11": "Владиславо",
            "id_12": "Максимо"
        }
    }`,

    professionJson: `{
        "count": 24,
        "list": {     
            "id_1": "Инженер",
            "id_2": "Сантехник",
            "id_3": "Сварщик",
            "id_4": "Учитель",
            "id_5": "Водитель",
            "id_6": "Крановщик",
            "id_7": "Программист",
            "id_8": "Воспитатель",
            "id_9": "Хореограф",
            "id_10": "Грузчик",
            "id_11": "Администратор",
            "id_12": "Полицейский",
            "id_13": "Юрист",
            "id_14": "Судья",
            "id_15": "Продавец",
            "id_16": "Искусствовед",
            "id_17": "Плотник",
            "id_18": "Гончар",
            "id_19": "Визажист",
            "id_20": "Парикмахер",
            "id_21": "Разнорабочий",
            "id_22": "Врач",
            "id_23": "Психолог",
            "id_24": "Каскадер"
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

    GENDER_MALE: 'мужской',
    GENDER_FEMALE: 'женский',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json, checkGender = 1, outputMiddleName = 0, outputProfession = 0, monthNumber = 0) {

        const obj = JSON.parse(json);
        if (monthNumber === 0) {
            const prop = (outputProfession === 0) ? `id_${this.randomIntNumber(obj.count, 1)}` : outputProfession === 1 ? `id_${this.randomIntNumber(12, 1)}` : `id_${this.randomIntNumber(24, 13)}`; 
            if (outputMiddleName === 0)
                return (checkGender === 1) ? obj.list[prop] : obj.list[prop] = obj.list[prop] + "а"; 
            else
                return (this.person.gender === this.GENDER_MALE) ? obj.list[prop] = obj.list[prop] + "вич" : obj.list[prop] = obj.list[prop] + "вна"; 
        } 
        else {
            const prop = `id_${monthNumber}`;
            return obj.list[prop];
        }
        
    },

    randomGender: function () {

        let genderRandom = this.randomIntNumber(); 
        return (genderRandom === 1) ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    randomFirstName: function () {
        return (this.person.gender === this.GENDER_MALE) ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function () {
        return (this.person.gender === this.GENDER_MALE) ? this.randomValue(this.surnameJson, 1) : this.randomValue(this.surnameJson, 0);
    },

    randomMiddleName: function () {
        return this.randomValue(this.middleNameJson, 1, 1)
    },

    randomProfession: function () {
        return (this.person.gender === this.GENDER_MALE) ? this.randomValue(this.professionJson, 1, 0, 1) : this.randomValue(this.professionJson, 1, 0, 2)
    },

    randomDateBirth: function () {
        let monthNumber = this.randomIntNumber(12, 1); 
        let monthValue = this.randomValue(this.dateBirthJson, 1, 0, 0, monthNumber); 
        let dayBirth = (monthNumber === 2) ? this.randomIntNumber(28, 1) : (monthNumber === 4 || monthNumber  === 6 || monthNumber === 9 || monthNumber === 11) ? this.randomIntNumber(30, 1) : this.randomIntNumber(31, 1); 
        let yearBirth = this.randomIntNumber(2005, 1970); 
        let outputFullDate = `${dayBirth} ${monthValue} ${yearBirth}`; 
        return outputFullDate;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        this.person.dateBirth = this.randomDateBirth();
        return this.person;
    }
};

     
