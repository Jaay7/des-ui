import React, {FC} from "react";
import {ButtonProps} from "./Button.types";

import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  border: none;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  display: inline-block;
  padding: ${props => props.size === "small" ? "5px 10px" : props.size === "medium" ? "10px 15px" : "15px 20px"};
  background-color: ${props => props.primary ? "#0070f3" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#0070f3"};
  opacity: ${props => props.disabled ? 0.5 : 1};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${props => props.primary ? "#0060e9" : "#0060e930"};
  }
  &:active {
    border: solid 1px #0070f3;
    padding: ${props => props.size === "small" ? "4px 9px" : props.size === "medium" ? "9px 14px" : "14px 19px"};
  }
`;

const Button: FC<ButtonProps> = ({text, primary, disabled, size, onClick, ...props}) => {
  return (
    <StyledButton
      {...props}
      primary={primary}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

export default Button;