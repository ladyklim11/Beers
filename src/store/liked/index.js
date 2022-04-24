
// Types
import {TOGGLE_LIKED} from './types';


const likedReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_LIKED: {
      if (state.includes(action.payload)) {
        return state.filter(item => item !== action.payload);
      }

      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
};

export default likedReducer;
