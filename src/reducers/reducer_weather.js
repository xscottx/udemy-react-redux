import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]); // this creates a new version of state
      return [ action.payload.data, ...state ]; // take array, put inside new state array
      // return state.push(action.payload.data);  <-- never update state directly
  }
  return state;
}
