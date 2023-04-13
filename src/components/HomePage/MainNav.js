import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNav() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
      <Container>
        <Navbar.Brand href="#home">Tour diben</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Packages</Nav.Link>
            <NavDropdown title="Tour Plan" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">With Tour Plan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Customized Plan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Blog</Nav.Link>
          </Nav>
          
          <Nav>
          <Nav.Link href="#deets">Registration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MainNav