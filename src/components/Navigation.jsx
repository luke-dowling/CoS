// bootstrap
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/cos">Curse of Strahd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cos/">Home</Nav.Link>

            <Nav.Link href="/cos/start/">Start</Nav.Link>

            <NavDropdown title="Episode" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cos/episode-one/">
                Episode One
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
