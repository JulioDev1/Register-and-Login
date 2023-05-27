import { StyledButton } from "../styled";

interface IButton {
  type: "submit";
}
export default function Button({ type }: IButton) {
  return <StyledButton type={type}>Registrar</StyledButton>;
}
