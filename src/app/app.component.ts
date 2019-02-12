import { Component, OnInit } from '@angular/core';
import { Cars, Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars: Car[];

  ngOnInit() {
    this.cars = [
      {name: 'Ford', date: '09.02.19', model: 'Focused', isSold: false, id: 1},
      {name: 'Audi', date: '09.05.18', model: 'A4', isSold: false, id: 2},
      {name: 'Ford', date: '05.02.18', model: 'Focused', isSold: true, id: 3},
      // WTF why isn`t working following code?
      // new Car('Ford', '09.02.19', 'Focused', false, 1),
      // new Car('Audi', '09.05.18', 'A4', false, 2),
      // new Car('Ford', '09.02.19', 'Focused', false, 1),
    ];
  }

  onAdd(car: Car) {
    this.cars.push(car);
  }
}
