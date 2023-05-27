import { ChangeEvent } from "react";
import { InputContainer, InputLabel } from "./styled";
import { InputStyled, Label, StyledButton } from "../styled";

interface InputProps {
  type: string;
  value: string;
  label: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  type,
  value,
  label,
  name,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <InputLabel>
      <Label>{label}</Label>
      <InputContainer>
        <InputStyled
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
        />
      </InputContainer>
    </InputLabel>
  );
}
