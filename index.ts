import { Transport } from "./Transport";

const owner = new Transport.OwnerImpl(
  "Иван",
  "Иванов",
  "Иванович",
  new Date(1990, 1, 15),
  "Паспорт",
  "AB",
  "123456"
);

const car = new Transport.CarImpl(
  "Toyota",
  "Camry",
  2020,
  "1HGBH41JXMN109186",
  "А123ВЕ",
  owner,
  Transport.CarType.Sedan,
  Transport.CarClass.Business
);

car.printVehicleInfo();
owner.printOwnerInfo();