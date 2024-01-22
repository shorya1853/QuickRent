import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem>
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
                  <MDBDropdownLink href="#">Action</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">Another action</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">
                    Something else here
                  </MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default App;






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
</MDBDropdown>