// import { signOut } from 'firebase/auth';
// import { auth } from '../pages/Auth/firebase.config';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user-context';
import { useContext} from 'react';
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";



function Navbarlog() {
  const {userAuth, LogOut} = useContext(UserContext);
  // const [userAuth, setUserAuth] = useState(false);


  const nav = useNavigate();



  const SingOut = () => {
    LogOut();
    nav("/")
  }

  return (
    <>
     <Navbar key="xxl" expand="xxl" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Quick Rent</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                Profile
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/Cart">Cart</Nav.Link>
                {
                  userAuth ? (
                    <MDBDropdown>
                      <MDBDropdownToggle
                        tag="a"
                        className="nav-link d-flex align-items-center"
                        href="#"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
                          className="rounded-circle"
                          height="22"
                          alt="Avatar"
                          loading="lazy"
                        />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>
                          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <NavDropdown.Item onClick={SingOut}>SignOut</NavDropdown.Item>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                        <NavDropdown.Item href="#">Products</NavDropdown.Item>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  ) : (
                    <NavDropdown
                      title="Profile"
                      id={`offcanvasNavbarDropdown-expand-xxl`}
                    >
                      <NavDropdown.Item href="/signin">SignIn</NavDropdown.Item>
                      <NavDropdown.Item href="/signup">
                        SignUp
                      </NavDropdown.Item>
                    </NavDropdown>
                  )
                }
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  
    
  );
}

export default Navbarlog;