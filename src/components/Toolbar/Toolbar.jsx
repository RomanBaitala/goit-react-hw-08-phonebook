import { StyledToolbar, ToolbarContents } from './Toolbar.styled';

export const Toolbar = ({ children }) => {
  return (
    <StyledToolbar>
      <ToolbarContents>{children}</ToolbarContents>
    </StyledToolbar>
  );
};
