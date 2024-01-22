import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Avatar(props) {

    const photoUrl = props.photoURL;
    const userName = props.userName;

  return (
    <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
      <img
        src={photoUrl}
        className="rounded-circle shadow-4"
        style={{ width: "150px" }}
        alt="Avatar"
      />

      <h5 className="mb-2">
        <strong>{userName}</strong>
      </h5>
      <p className="text-muted">
        User <span className="badge bg-primary">PRO</span>
      </p>
    </MDBContainer>
  );
}

export default Avatar;