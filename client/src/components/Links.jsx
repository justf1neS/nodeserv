import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const Button = styled.button.attrs({
  className: "nav-link",
})`
  background-color: transparent;
  border: 0;
`;

function Links() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   localStorage.setItem("isLoggedIn", true);

  useEffect(() => {
    console.log(Boolean(localStorage.getItem("isLoggedIn")));
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  return (
    <React.Fragment>
      <Link to="/" className="navbar-brand">
        QA TEST
      </Link>
      <Collapse>
        <List>
          {!isLoggedIn && (
            <>
              <Item>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </Item>
              <Item>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </Item>
            </>
          )}

          {isLoggedIn && (
            <>
              <Item>
                <Link to="/add_movie" className="nav-link">
                  Add Movie
                </Link>
              </Item>

              <Item>
                <Link to="/get_movies" className="nav-link">
                  Show all movies
                </Link>
              </Item>

              <Item>
                <Button
                  onClick={() => {
                    localStorage.setItem("isLoggedIn", false);
                    window.location.replace("/login");
                  }}
                >
                  Log Out
                </Button>
              </Item>
            </>
          )}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

export default Links;
