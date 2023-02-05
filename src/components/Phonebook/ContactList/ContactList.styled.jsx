import styled from 'styled-components';

export const StyledContactList = styled.ul`
  display: inline-block;
  margin: ${p => p.theme.mp(3, 4, 0, 4)};
  padding: 0;

  min-width: 400px;
  list-style: none;
  border: 1px solid ${p => p.theme.colors.secondBackground};
`;
