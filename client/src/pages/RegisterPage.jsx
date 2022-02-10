import React, { Component } from "react";
import api from "../api";
import { emailPattern } from "../helpers";

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

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  handleChangeInput = async (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onRegisterUser = async () => {
    const { email, password, firstName, lastName } = this.state;
    const payload = {
      email,
      pass: password,
      name: firstName,
      surname: lastName,
    };

    await api
      .registerUser(payload)
      .then((res) => {
        window.alert(`User registered successfully`);
        this.setState({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        });
      })
      .catch((e) => window.alert(e));
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <Wrapper>
        <Title>Register</Title>

        <Label>
          First Name: <sup className="text-danger">*</sup>
        </Label>
        <InputText
          type="text"
          value={firstName}
          name="firstName"
          min={3}
          onChange={this.handleChangeInput}
        />

        <Label>
          Last name: <sup className="text-danger">*</sup>
        </Label>
        <InputText
          type="text"
          value={lastName}
          name="lastName"
          onChange={this.handleChangeInput}
          style={{ width: "404px" }}
        />

        <Label>
          mail: <sup className="text-danger">*</sup>
        </Label>
        <InputText
          type="email"
          value={email}
          name="email"
          min={5}
          onChange={this.handleChangeInput}
          pattern={emailPattern}
        />

        <Label>
          Password: <sup className="text-danger">*</sup>
        </Label>
        <InputText
          type="text"
          style={{ width: "398px" }}
          pattern="[0-9]+([,\.][0-9]+)?"
          value={password}
          name="password"
          min={6}
          onChange={this.handleChangeInput}
        />

        <ReqBanner>
          <span className="text-danger">*</span> - required fields
        </ReqBanner>

        <Button onClick={this.onRegisterUser}>Register</Button>
      </Wrapper>
    );
  }
}

export default RegisterPage;
