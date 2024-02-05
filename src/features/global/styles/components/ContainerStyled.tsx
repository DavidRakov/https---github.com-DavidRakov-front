import styled from "styled-components";

type Container = {
  maxHeight?: string;
  height?: string;
  maxWidth?: string;
  width?: string;
};

export const Container = styled.div<Container>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  /* padding: 0 100px; */

  @media (max-width: 768px) {
    display: none;
  }
`;
