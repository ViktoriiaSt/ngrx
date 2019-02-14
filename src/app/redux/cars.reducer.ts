import { Action } from '@ngrx/store';
import { CAR_ACTION } from './cars.action';

const initialState = {
  cars: [{name: 'Ford', date: '09.02.19', model: 'Focused', isSold: false, id: 1},
  {name: 'Audi', date: '09.05.18', model: 'A4', isSold: false, id: 2},
  {name: 'Ford', date: '05.02.18', model: 'Focused', isSold: true, id: 3}]
};

export function carsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload], // we dont have payload in new interface
      }
    default:
    return state
  }
}
