
// Libraries

// Components
import { Button } from '@mui/material';

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Actions
import { CHANGE_FILTERS } from "../../store/filters/types";
import { CLEAR_BLACKLIST } from "../../store/blacklist/types";

// Assets
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Styles
import styles from './styles.module.scss';


const Filters = () => {
  const dispatch = useDispatch();
  const { filters, blacklist } = useSelector(store => store);

  const handleChangeFilters = () => {
    dispatch({ type: CHANGE_FILTERS, payload: { showOnlyLiked: !filters.showOnlyLiked } });
  };

  const handleClearBlacklist = () => {
    dispatch({ type: CLEAR_BLACKLIST });
  };

  return (
    <div className={styles.Filters}>
      <Button
        variant="outlined"
        onClick={handleChangeFilters}
      >
        {filters.showOnlyLiked
          ? <FavoriteIcon />
          : <FavoriteBorderIcon  />
        }
      </Button>
      <Button
        variant="outlined"
        onClick={handleClearBlacklist}
        disabled={blacklist.length === 0}
      >
        <span>Вернуть удаленные</span>
      </Button>
    </div>
  )
};

export default Filters;