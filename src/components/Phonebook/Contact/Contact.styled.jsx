import styled from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;
  padding: ${p => p.theme.mp(0)};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  &:nth-child(odd) {
    background-color: ${p => p.theme.colors.secondBackground};
  }
`;

export const ContactName = styled.span`
  display: inline-block;

  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ContactNumber = styled.span`
  display: inline-block;
  min-width: 150px;

  font-weight: ${p => p.theme.fontWeights.normal};

  &::before {
    content: 'tel:';
    margin: ${p => p.theme.mp(0, 1, 0, 4)};
  }
`;

export const ContactEditBlock = styled.div`
  justify-self: flex-end;
`;
