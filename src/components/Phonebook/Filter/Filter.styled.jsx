import { IconButton } from 'components/Common/StyledComponents/IconButton.styled';
import styled from 'styled-components';

export const FilterSearch = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 332px;
  height: 32px;

  border-bottom: 2px solid #000000;
`;

export const FilterFieldInput = styled.input`
  width: 300px;
  border: none;
  outline: none;
`;

export const FilterLabel = styled.p`
  margin: ${p => p.theme.mp(0, 1, 0)};
`;

export const ClearButton = styled(IconButton)``;
