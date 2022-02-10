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

function Links() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const status = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    setIsLoggedIn(Boolean(status));
  }, [status]);
  return (
    <React.Fragment>
      <Link to="/" className="navbar-brand">
        QA TEST
      </Link>
      <Collapse>
        <List>
          <Item>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Item>
          {!isLoggedIn && (
            <Item>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Item>
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
                <Link to="/" className="nav-link">
                  Log Out
                </Link>
              </Item>
            </>
          )}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

export default Links;
