"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transport_1 = require("./Transport");
const owner = new Transport_1.Transport.OwnerImpl("Иван", "Иванов", "Иванович", new Date(1990, 1, 15), "Паспорт", "AB", "123456");
const car = new Transport_1.Transport.CarImpl("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "А123ВЕ", owner, Transport_1.Transport.CarType.Sedan, Transport_1.Transport.CarClass.Business);
car.printVehicleInfo();
owner.printOwnerInfo();
