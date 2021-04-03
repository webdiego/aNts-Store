import Navbar from "./Components/Nav";
import NavbarStore from "./Components/NavStore";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GlobalStyle from "./Style/GlobalStyle";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222121",
    },
    secondary: {
      main: "#484848",
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
          <Navbar />
            <Home />
          </Route>
          <Route path="/store">
            <NavbarStore />
            <Store />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
