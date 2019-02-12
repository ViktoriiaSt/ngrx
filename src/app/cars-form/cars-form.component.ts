import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  carName = '';
  carModel = '';
  id = 2;
  @Output() carArr = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if (!this.carModel || !this.carName) {
      return;
    }
    this.id++;
    const car = {
      name: this.carName,
      date: moment().format('DD.MM.YY'),
      model: this.carModel,
      isSold: false,
      id: this.id,
    };

    this.carArr.emit(car);
    this.carModel = '';
    this.carName = '';
  }

  onLoad() {

  }

}
