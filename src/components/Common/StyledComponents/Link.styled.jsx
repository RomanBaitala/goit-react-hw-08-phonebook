import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: ${p => p.theme.mp(1, 3)};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  color: ${p => p.theme.colors.defaultText};
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: ${p => p.theme.mp(1, 3)};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  color: ${p => p.theme.colors.defaultText};

  &.active::after {
    content: '';
    position: absolute;
    height: 5px;
    width: 80%;
    left: 10%;
    bottom: -10px;
    background-color: ${p => p.theme.colors.accentText};
  }
`;
