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
import Cannibas from "./components/Cannibas";
import Cocaine from "./components/Cocaine";
import Inhalants from "./components/Inhalants";
import InjectDrugs from "./components/InjectDrugs";
import Sedatives from "./components/Sedatives";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [selected, setSelected] = useState(1);

  const show = () => {
    if (selected == 1) {
      return <Cannibas />;
    } else if (selected == 2) {
      return <Sedatives />;
    } else if (selected == 3) {
      return <Cocaine />;
    } else if (selected == 4) {
      return <Inhalants />;
    } else if (selected == 5) {
      return <InjectDrugs />;
    }
  };
  return (
    <Container
      fluid
      className="App pr-0 pl-0"
      style={{ backgroundColor: "#D3D3D3", minHeight: "100vh" }}
    >
      <Navbar color="dark" dark expand="md" className="shadow">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Aabid Sofi</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="ml-5">
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => setSelected(1)}>
                  Cannabis
                </DropdownItem>
                <DropdownItem onClick={() => setSelected(2)}>
                  Sedatives
                </DropdownItem>
                <DropdownItem onClick={() => setSelected(3)}>
                  Cocaine
                </DropdownItem>
                <DropdownItem onClick={() => setSelected(4)}>
                  Inhalants
                </DropdownItem>
                <DropdownItem onClick={() => setSelected(5)}>
                  Inject Drugs
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText
            style={{ color: "white", fontWeight: "bold" }}
            className="mr-5"
          >
            HighCharts
          </NavbarText>
        </Collapse>
      </Navbar>

      {show()}
    </Container>
  );
};

export default App;
