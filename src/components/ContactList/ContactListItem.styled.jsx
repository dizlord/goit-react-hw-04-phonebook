import styled from "@emotion/styled";

export const Contact = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
  margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Dot = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes[0]}px;
  height: ${p => p.theme.sizes[0]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.img};
`;