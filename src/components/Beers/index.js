
// Components
import Filters from "../Filters";
import Grid from "../Grid";
import Card from "../Card";

// Hooks
import { useEffect, useState, useCallback } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { CHANGE_DATA } from "../../store/data/types";

// Styles
import styles from './styles.module.scss';


const Beers = () => {
  const dispatch = useDispatch();
  const { blacklist, liked, filters, data } = useSelector(store => store);
  const [beers, setBeers] = useState(data);
  const [loading, setLoading] = useState(beers.length < 1);

  const Empty = useCallback(() => (
    <div className={styles.Empty}>
      {loading ? (
        <CircularProgress />
      ) : 'Пива не найдено'}
    </div>
  ), [loading]);

  useEffect(() => {
    if (beers.length < 1) {
      fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012')
        .then(res => res.json())
        .then(fetchedBeers => dispatch({ type: CHANGE_DATA, payload: fetchedBeers }))
        .finally(() => setLoading(false))
    }
  }, []);

  useEffect(() => {
    setBeers(() => data.filter(({ id }) => {
      return !blacklist.includes(id) && (!filters.showOnlyLiked || liked.includes(id))
    }))
  }, [blacklist, liked, filters, data]);

  return (
    <>
      <Filters />
      {beers.length > 0 ? (
        <Grid>
          {beers.map(beer => <Card key={beer.id} {...beer} />)}
        </Grid>
      ) : <Empty />}
    </>
  );
};

export default Beers;