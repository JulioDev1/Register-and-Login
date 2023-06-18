import { ChangeEvent, ReactNode } from "react";
import { InputContainer, InputLabel } from "./styled";
import { InputStyled, Label, LabelContent } from "../styled";

interface InputProps {
  type: string;
  value: string;
  label: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icons: ReactNode;
  lock?: ReactNode;
}
export default function Input({
  type,
  value,
  label,
  name,
  onChange,
  placeholder,
  icons,
  lock,
}: InputProps) {
  return (
    <InputLabel>
      <LabelContent>
        <Label>{label}</Label>
      </LabelContent>
      <InputContainer>
        {icons}
        <InputStyled
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
        />
        {lock}
      </InputContainer>
    </InputLabel>
  );
}
