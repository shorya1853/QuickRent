import { signOut } from 'firebase/auth';
import { auth } from '../pages/Auth/firebase.config';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user-context';
import { useContext, useEffect} from 'react';


function Navbarlog() {
  const {userAuth, fetchData, fetchUserPost} = useContext(UserContext);

  const nav = useNavigate();

  useEffect(()=> {
    fetchData();
    fetchUserPost();
  })

  const LogOut = async () => {
    try {
      await signOut(auth)
      alert("signOut successfully")
      nav("/")
    } catch (err) {
      console.error(err)
    }
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
                    <NavDropdown
                      title="Profile"
                      id={`offcanvasNavbarDropdown-expand-xxl`}
                    >
                      <NavDropdown.Item href="/profile">
                        Your Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={LogOut}>
                        SignOut
                      </NavDropdown.Item>
                    </NavDropdown>
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