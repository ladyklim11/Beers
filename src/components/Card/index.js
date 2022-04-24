
// Libraries
import classnames from 'classnames';

// Hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { TOGGLE_LIKED } from "../../store/liked/types";
import { ADD_TO_BLACKLIST } from "../../store/blacklist/types";

// Assets
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// Styles
import styles from './styles.module.scss';


const Card = ({ id, name, description, image_url }) => {
  const dispatch = useDispatch();

  const liked = useSelector(store => store.liked);
  const isLiked = liked.includes(id);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const Favorite = () => {
    const props = {
      className: classnames(styles.Icon, isLiked && styles.Icon_active),
      onClick: () => dispatch({ type: TOGGLE_LIKED, payload: id })
    };

    return isLiked
      ? <FavoriteIcon {...props} />
      : <FavoriteBorderIcon {...props} />
  }

  return (
    <div key={id} className={styles.Card}>
      <div className={styles.Bar}>
        <Favorite />
        <DeleteOutlineIcon
          className={styles.Icon}
          onClick={() => dispatch({ type: ADD_TO_BLACKLIST, payload: id })}
        />
      </div>
      <div className={styles.Image}>
        <img src={image_url} alt='beer_photo' />
      </div>
      <div className={styles.Name}>
        {name}
      </div>
      <div
        className={classnames(styles.Description, !showFullDescription && styles.Description_hide)}
        onClick={() => setShowFullDescription(prev => !prev)}
      >
        {description}
      </div>
    </div>
  )
};

export default Card;