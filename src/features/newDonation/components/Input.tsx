import { FC } from "react";
import {
  StyledInput,
  StyledLabel,
} from "../../global/styles/components/FormStyled";

type InputProps = {
  label: string;
  placeholder: string;
  type?: string | "text";
  validation?: Record<string, unknown>;
  value?: string;
  error?: string | null;
  disabled?: boolean;
  inputName: string;
};

const Input: FC<InputProps> = ({
  label,
  type,
  placeholder,
  validation,
  error,
  value,
  disabled = false,
  inputName,
}) => {
  return (
    <>
      <StyledLabel htmlFor={inputName}>{label}</StyledLabel>
      <br />
      <StyledInput
        type={type}
        placeholder={placeholder}
        {...validation}
        value={value}
        disabled={disabled}
        name={inputName}
      />
      <p>{error}</p>
    </>
  );
};

export default Input;
