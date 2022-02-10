import React, { Component } from "react";
import styled from "styled-components";

import logo from "../logo.svg";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})`
  background-color: #fff;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 2rem;
`;

class Logo extends Component {
  render() {
    return (
      <Wrapper
        style={{
          cursor: "pointer",
        }}
        href="https://www.devit.com"
      >
        {/* NO ALT attr */}
        <img src={logo} width="40" height="40" />
      </Wrapper>
    );
  }
}

export default Logo;
