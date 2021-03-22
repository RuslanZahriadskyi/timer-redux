import actions from './counter-actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case INCREMENT:
//       return state + payload;

//     case DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

const valueReducer = createReducer(0, {
  [actions.increment.type]: (state, { payload }) => state + payload,
  [actions.decrement.type]: (state, { payload }) => state - payload,
});

const stepReducer = (state = 15, _) => state;

const counterReducer = combineReducers({
  counterValue: valueReducer,
  step: stepReducer,
});

export default counterReducer;
