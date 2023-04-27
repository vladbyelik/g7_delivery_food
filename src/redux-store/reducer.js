const STORE_USER = 'delivery_food_user';

const initialState = localStorage.getItem(STORE_USER);
const initialStateToObject = JSON.parse(initialState);

const currState = {
  login: initialStateToObject ? initialStateToObject.login : null
};

const reducer = (state = currState, action) => {
  switch(action.type) {
    case 'LOG_IN': {
      localStorage.setItem(STORE_USER, JSON.stringify(action.payload))
      return state.login = action.payload;
    }
    case 'LOG_OUT': {
      localStorage.removeItem(STORE_USER);
      return state.login = action.payload;
    }
    default:
      return state;
  }
}

export default reducer;