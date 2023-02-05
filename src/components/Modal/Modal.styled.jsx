import { IconButton } from 'components/Common/StyledComponents/IconButton.styled';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 30px;
  padding: 0;

  max-width: 80%;
  max-height: 70%;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.7);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  min-width: 300px;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h2`
  margin: 10px 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalCloseButton = styled(IconButton)`
  margin: 0;
  padding: 0;

  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 20px 30px 30px;
  width: 100%;
  min-width: 300px;
  min-height: 100px;
`;
