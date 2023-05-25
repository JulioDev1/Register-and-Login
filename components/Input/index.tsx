import { ChangeEvent } from "react";
import { InputContainer } from "./styled";

interface InputProps {
  type: string;
  value: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  type,
  value,
  label,
  name,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} name={name} />
    </InputContainer>
  );
}
