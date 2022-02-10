import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h3.attrs({
  className: "h3",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 50px;
`;

const Label = styled.label`
  margin: 5px;
`;

const ReqBanner = styled.p`
  margin: 16px 0 16px 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
  width: 400px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 0 0 0 5px;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeInput = async (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onLogin = async () => {
    const { email, password } = this.state;
    const payload = { email, pass: password };

    await api
      .loginUser(payload)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("isLoggedIn", true);
          window.alert(`You are logged in!!!`);
          window.location.replace("/add_movie");
        }
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch((e) => window.alert(e));
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <Wrapper>
        <Title>Login</Title>

        <Label>
          Email: <sup className="text-danger">*</sup>
        </Label>
        <InputText
          type="email"
          name="email"
          value={email}
          onChange={this.handleChangeInput}
        />

        <Label>
          Password: <sup className="text-danger">*</sup>
        </Label>
        <InputText
          type="text"
          name="password"
          style={{ width: "398px" }}
          pattern="[0-9]+([,\.][0-9]+)?"
          value={password}
          onChange={this.handleChangeInput}
          style={{ marginBottom: "16px" }}
        />

        <Button onClick={this.onLogin}>Login</Button>
      </Wrapper>
    );
  }
}

export default LoginPage;
