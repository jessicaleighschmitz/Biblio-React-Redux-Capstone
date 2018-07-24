import constants from './../constants';
const { initialState, types } = constants;


const modalToggleReducer = (state = initialState.modalToggle, action) => {

  switch (action.type) {
  case 'TOGGLE_MODAL':
    let newState = !state;
    console.log(newState);
    return newState;
  default:
    return state;
  }
};

export default modalToggleReducer;
