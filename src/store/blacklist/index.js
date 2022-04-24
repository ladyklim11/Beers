
// Types
import { ADD_TO_BLACKLIST, CLEAR_BLACKLIST } from './types';


const blacklistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BLACKLIST: {
      if (!state.includes(action.payload))
        return [...state, action.payload]

      return state;
    }

    case CLEAR_BLACKLIST: {
      return [];
    }

    default: {
      return state;
    }
  }
};

export default blacklistReducer;
