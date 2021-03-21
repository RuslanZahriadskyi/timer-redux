import { INCREMENT, DECREMENT } from './counter-types';
import { combineReducers } from 'redux';

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 15, action) => state;

const counterReducer = combineReducers({
  counterValue: valueReducer,
  step: stepReducer,
});

export default counterReducer;
