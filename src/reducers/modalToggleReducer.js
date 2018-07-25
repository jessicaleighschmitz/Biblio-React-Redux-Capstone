import constants from './../constants';
const { initialState} = constants;


const modalToggleReducer = (state = initialState.modalToggle, action) => {

  switch (action.type) {
  case 'TOGGLE_MODAL_ON':
    let newState = true;
    return newState;
  case 'TOGGLE_MODAL_OFF':
    let openModal = false;
    return openModal;
  default:
    return state;
  }
};

export default modalToggleReducer;
