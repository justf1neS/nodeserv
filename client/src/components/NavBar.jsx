import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

const Container = styled.div.attrs({
  className: "container",
})`
  width: 100%;
  max-width: unset !important;
  padding: 0;
`;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  margin-bottom: 1rem;
  padding: 1rem 2rem;
`;

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo />
          <Links />
        </Nav>
      </Container>
    );
  }
}

export default NavBar;
