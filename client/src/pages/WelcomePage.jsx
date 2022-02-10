import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const SubTitle = styled.h5.attrs({
  className: "h5",
})``;

const Text = styled.p.attrs({
  className: "p",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      rating: "",
      time: "",
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      localStorage.setItem("isLoggedIn", false);
      window.location.reload();
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Welcome to QA Test!</Title>
        <SubTitle>Please, Register and Log In for using our App.</SubTitle>
        <Text>
          After that you will be able to Submit couple of forms with some
          issues. Your aim is evaluating this issues.
        </Text>
      </Wrapper>
    );
  }
}

export default WelcomePage;
