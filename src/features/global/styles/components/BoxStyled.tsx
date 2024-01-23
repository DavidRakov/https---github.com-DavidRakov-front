import { CSSProperties } from "react";
import styled from "styled-components";

type BoxProps = {
  variant?: string;
  disabled?: boolean;
  direction?: string;
  sx?: CSSProperties;
};

export const BoxStyled = styled.div<BoxProps>`
  background-color: ${({ disabled, theme }) => {
    if (disabled) return theme.backgroundColor.secondary;
    return "inherit";
  }};

  color: ${({ disabled, theme }) => {
    if (disabled) return theme.color.light;
    return theme.color.secondary;
  }};

  border: ${({ variant, disabled, theme }) => {
    if (disabled) return "none";
    if (variant === "outline") return "2px solid " + theme.color.secondary;
    return "none";
  }};

  /* font-weight: ${({ variant }) => {
    if (variant === "basic" || !variant) return "bolder";
    return;
  }}; */

  border-radius: 5px;
  padding: 6px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 10px;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  border: 0.5px solid;
  flex: 1;
  margin: 3px;
  /* transition: 0.2s all ease-out; */

  /* &:hover {
    background-color: ${({ variant, disabled, theme }) => {
    if (disabled) return theme.backgroundColor.secondary;
    if (variant === "outline") return theme.color.primary;
    return theme.backgroundColor.secondary;
  }};
    color: ${({ theme }) => theme.color.light};
  } */

  /* &:active {
    transform: ${({ disabled }) => {
    if (disabled) return null;
    return "scale(0.95)";
  }};
  } */
`;
