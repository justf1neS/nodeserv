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

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
  width: 400px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      rating: "",
      time: "",
    };
  }

  handleChangeInput = async (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleChangeInputName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputRating = async (event) => {
    const rating = event.target.validity.valid
      ? event.target.value
      : this.state.rating;

    this.setState({ rating });
  };

  handleChangeInputTime = async (event) => {
    const time = event.target.value;
    this.setState({ time });
  };

  handleUpdateMovie = async () => {
    const { id, name, rating, time } = this.state;
    const payload = { name, rating, time };

    await api
      .addMovie(payload)
      .then((res) => {
        if (res.status === 200) {
          window.alert(`Movie added successfully`);
        }
        this.setState({
          name: "",
          rating: "",
        });
      })
      .catch((e) => window.alert(e));
  };

  //   componentDidMount = async () => {
  //     const { id } = this.state;
  //     const movie = await api.getMovieById(id);

  //     this.setState({
  //       name: movie.data.data.name,
  //       rating: movie.data.data.rating,
  //       time: movie.data.data.time.join("/"),
  //     });
  //   };

  render() {
    const { name, rating, time } = this.state;
    return (
      <Wrapper>
        <Title>Create Movie</Title>

        <Label>Movie Name: </Label>
        <InputText
          type="text"
          value={name}
          name="name"
          onChange={this.handleChangeInput}
        />

        <Label>Rating: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          min="-1"
          max="10"
          pattern="[-][0-9]+([,\.][0-9]+)?"
          value={rating}
          name="rating"
          onChange={this.handleChangeInput}
        />

        <Label>Duration (minutes): </Label>
        <InputText
          type="number"
          name="time"
          value={time}
          step="0.5"
          onChange={this.handleChangeInput}
        />

        <Button onClick={this.handleUpdateMovie}>Create Movie</Button>
        <CancelButton onClick={() => console.log("click")}>Clear</CancelButton>
      </Wrapper>
    );
  }
}

export default AddMovie;
