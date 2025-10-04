import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import "../../style.css";

export default function MyNav() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      fixed="top"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex flex-row align-items-center">
            <img src="./profile_ico.png" className="img-fluid logo" alt="brand" />
            <h5
              id="navhead"
              style={{
                marginLeft: "21px",
                paddingTop: "6px",
                color: "#fbd9ad",
                marginBottom: "0"
              }}
            >
              VISHESH YADAV
            </h5>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}