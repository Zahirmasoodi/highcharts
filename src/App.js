import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Cannibas from "./components/Cannibas";
import Cocaine from "./components/Cocaine";
import Inhalants from "./components/Inhalants";
import InjectDrugs from "./components/InjectDrugs";
import Sedatives from "./components/Sedatives";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [selected, setSelected] = useState(1);

  return (
    <HashRouter>
      <Container
        fluid
        className="App pr-0 pl-0 pt-5"
        style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}
      >
        <Switch>
          <Route exact path="/" component={Cannibas} />
          <Route exact path="/cocaine" component={Cocaine} />
          <Route exact path="/inhalants" component={Inhalants} />
          <Route exact path="/injectdrugs" component={InjectDrugs} />
          <Route exact path="/sedatives" component={Sedatives} />
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;
