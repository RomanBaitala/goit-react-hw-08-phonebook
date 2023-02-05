import { theme } from 'components/Common';
import styled from 'styled-components';
import arrow from '../../img/right-arrow.svg';
import pinSet from '../../img/push_pin_set.svg';

const toolbarWidth = 400;
const toolbarHeight = 50;
const toolbarHandleWidth = 30;

export const ToolbarCheckbox = styled.input`
  width: 0px;
  opacity: 0;
`;

export const ToolbarHandle = styled.label`
  display: block;
  width: ${toolbarHandleWidth}px;
  height: 100%;
  min-height: 50px;

  margin: ${theme.mp(0, 0, 0, 1)};

  background-color: #ffffff;
  background-image: url(${arrow});
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom-right-radius: ${p => p.theme.radii.normal};

  &:has(${ToolbarCheckbox}:checked) {
    background-image: url(${pinSet});
    background-color: ${p => p.theme.colors.pageBackgroundAccent};
  }
`;

export const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${p => p.theme.mp(0, 0, 0, 2)};

  // position: absolute;
  // top: 80px;
  // left: 0px;
  width: ${toolbarWidth + toolbarHandleWidth}px;
  height: ${toolbarHeight}px;

  background-color: #ffffff;
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  border: none;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);

  &:hover,
  &:focus-within,
`;

export const ToolbarContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;
  padding: ${p => p.theme.mp(10)};

  width: 100%;
  height: 100%;
`;
