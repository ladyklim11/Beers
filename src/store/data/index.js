
// Types
import { CHANGE_DATA } from './types';


const dataReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_DATA: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
