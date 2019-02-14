export class Car {
  constructor(
    name: string,
    date: string,
    model: string,
    isSold: boolean = false,
    id?: number,
  ) {

  }
}

export interface Car {
  name: string;
  date: string;
  model: string;
  isSold: boolean;
  id?: number;
}

export class Cars {
  cars: Car[];
}
