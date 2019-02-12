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

export class Cars {
  cars: Car[];
}
