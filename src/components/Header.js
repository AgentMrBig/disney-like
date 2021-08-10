import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>
            <NavLink activeClassName="is-active" to="/">
              HOME
            </NavLink>
          </span>
        </a>

        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>
            <NavLink activeClassName="is-active" to="/search">
              SEARCH
            </NavLink>
          </span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>
            <NavLink activeClassName="is-active" to="/watchlist">
              WATCHLIST
            </NavLink>
          </span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>
            <NavLink activeClassName="is-active" to="/movies">
              MOVIES
            </NavLink>
          </span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>
            <NavLink activeClassName="is-active" to="/series">
              SERIES
            </NavLink>
          </span>
        </a>
      </NavMenu>
      <UserImg src="https://randomuser.me/api/portraits/men/27.jpg" alt="" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  justify-content: space-around;

  .is-active {
    font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: white;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;

        left: 0;
        right: 0;
        bottom: -6px;

        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
