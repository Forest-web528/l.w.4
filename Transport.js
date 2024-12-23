"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    class OwnerImpl {
        constructor(firstName, lastName, middleName, dateOfBirth, documentType, documentSeries, documentNumber) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.middleName = middleName;
            this.dateOfBirth = dateOfBirth;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        printOwnerInfo() {
            console.log(`Владелец:
          ФИО: ${this.lastName} ${this.firstName} ${this.middleName}
          Дата рождения: ${this.dateOfBirth.toDateString()}
          Документ: ${this.documentType} ${this.documentSeries} ${this.documentNumber}`);
        }
    }
    Transport.OwnerImpl = OwnerImpl;
    let CarType;
    (function (CarType) {
        CarType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        CarType["SUV"] = "\u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    })(CarType = Transport.CarType || (Transport.CarType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    class CarImpl {
        constructor(brand, model, year, vin, registrationNumber, owner, carType, carClass) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
            this.carType = carType;
            this.carClass = carClass;
        }
        printVehicleInfo() {
            console.log(`Автомобиль:
          Марка: ${this.brand}
          Модель: ${this.model}
          Год: ${this.year}
          VIN: ${this.vin}
          Регистрационный номер: ${this.registrationNumber}
          Тип кузова: ${this.carType}
          Класс: ${this.carClass}`);
        }
    }
    Transport.CarImpl = CarImpl;
})(Transport || (exports.Transport = Transport = {}));
