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
    this.cars = [];
    // this.cars = [
    //   {name: 'Ford', date: '09.02.19', model: 'Focused', isSold: false, id: 1},
    //   {name: 'Audi', date: '09.05.18', model: 'A4', isSold: false, id: 2},
    //   {name: 'Ford', date: '05.02.18', model: 'Focused', isSold: true, id: 3},
    // ];
  }

  onAdd(car: Car) {
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(carItem => carItem.id !== car.id);
  }
}
