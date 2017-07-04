// state argument is not an application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  // action type and payload is defined in the action's index.js
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
