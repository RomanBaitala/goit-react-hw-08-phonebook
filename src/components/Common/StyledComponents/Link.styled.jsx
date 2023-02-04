import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: black;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  &.active::after {
    content: '';
    position: absolute;
    height: 5px;
    width: 80%;
    left: 10%;
    bottom: -10px;
    background-color: blue;
  }
`;
