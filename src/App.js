
// Libraries
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Components
import { Provider } from "react-redux";
import Beers from "./components/Beers";

// Store
import store from "./store/store";

// Colors
import { deepOrange } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: deepOrange['500'],
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Beers />
      </ThemeProvider>
    </Provider>
  )
}

export default App;
