import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

function NavbarComponent() {
  return (
    <header>
      <Navbar
        color="dark"
        dark
        expand="sm"
        fixed="top"
        className="navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 rounded shadow-lg"
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            CRUD Operations with React.js + Vite.js + ASP.NET Core 8 Backend API
            + MSSQL
          </NavbarBrand>
          <ul className="navbar-nav flex-grow">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="text-uppercase font-weight-bold"
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="text-uppercase font-weight-bold px-3"
                  to="/view"
                >
                  View
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="text-uppercase font-weight-bold px-3"
                  to="/create"
                >
                  Create
                </NavLink>
              </NavItem>
            </Nav>
          </ul>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarComponent;
