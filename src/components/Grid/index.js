
// Styles
import styles from './styles.module.scss';


const Grid = ({ children }) => {
  return (
    <div className={styles.Grid}>
      {children}
    </div>
  )
};

export default Grid;