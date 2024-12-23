export namespace Transport {
    export interface Owner {
      firstName: string;
      lastName: string;
      middleName: string;
      dateOfBirth: Date;
      documentType: string;
      documentSeries: string;
      documentNumber: string;
  
      printOwnerInfo(): void;
    }
  
    export class OwnerImpl implements Owner {
      constructor(
        public firstName: string,
        public lastName: string,
        public middleName: string,
        public dateOfBirth: Date,
        public documentType: string,
        public documentSeries: string,
        public documentNumber: string
      ) {}
  
      printOwnerInfo(): void {
        console.log(`Владелец:
          ФИО: ${this.lastName} ${this.firstName} ${this.middleName}
          Дата рождения: ${this.dateOfBirth.toDateString()}
          Документ: ${this.documentType} ${this.documentSeries} ${this.documentNumber}`);
      }
    }
  
    export interface Vehicle {
      brand: string;
      model: string;
      year: number;
      vin: string;
      registrationNumber: string;
      owner: Owner;
  
      printVehicleInfo(): void;
    }
  
    export interface Car extends Vehicle {
      carType: CarType;
      carClass: CarClass;
    }
  
    export enum CarType {
      Sedan = "Седан",
      SUV = "внедорожник",
    }
  
    export enum CarClass {
      Economy = "Эконом",
      Business = "Бизнес",
    }
  
    export class CarImpl implements Car {
      constructor(
        public brand: string,
        public model: string,
        public year: number,
        public vin: string,
        public registrationNumber: string,
        public owner: Owner,
        public carType: CarType,
        public carClass: CarClass
      ) {}
  
      printVehicleInfo(): void {
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
  }  