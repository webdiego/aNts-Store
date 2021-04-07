import Navbar from "./Components/Navs/Nav";
import NavbarStore from "./Components/Navs/NavStore";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import Label from './Pages/Label'
import Footer from './Components/Navs/Footer'
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
          <Route exact path="/label">
           <Navbar />
            <Label />
          </Route>
          <Route path="/store">
            <NavbarStore />
            <Store />
          </Route>
        </Switch>
        <Footer/>
      </ThemeProvider>
    </Router>
  );
};

export default App;
