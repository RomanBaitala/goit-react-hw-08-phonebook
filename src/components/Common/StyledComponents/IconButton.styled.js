import styled from 'styled-components';
import { StyledButton } from '.';

export const IconButton = styled(StyledButton)`
  width: 32px;
  height: 32px;

  margin: ${p => p.theme.mp(1)};
  padding: ${p => p.theme.mp(1)};

  background-color: transparent;

  &:hover,
  &:focus {
    box-shadow: ${p => p.theme.shadow.default};
    background-color: ${p => p.theme.colors.buttonColorAccent};
  }

  &:active {
    box-shadow: inset ${p => p.theme.shadow.default};
    background-color: ${p => p.theme.colors.buttonColorActive};
  }
`;
