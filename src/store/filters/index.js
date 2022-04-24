
// Types
import { CHANGE_FILTERS } from './types';


const DEFAULT_FILTERS = {
  showOnlyLiked: false
}


const filtersReducer = (state = DEFAULT_FILTERS, action) => {
  switch (action.type) {
    case CHANGE_FILTERS: {
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export default filtersReducer;
