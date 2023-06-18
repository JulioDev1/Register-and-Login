import { styled } from "styled-components";

export const Label = styled.label`
  color: #000000;
  font-weight: regular;
`;
export const StyledButton = styled.button`
  height: 20px;
  width: 90%;
  border: none;
  font-weight: regular;
  background-color: #3366ff;
  color: #ffff;
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover {
    background-color: #0040ff;
  }
  border-radius: 5px;
  height: 40px;
`;
export const LabelContent = styled.div`
  width: 90%;
`;
export const InputStyled = styled.input`
  border: none;
  height: 40px;
  width: 26rem;
  background-color: #0000;
  padding-left: 30px;
  font-family: Roboto;
  border-radius: 8px;
  border: 1px solid #0000002a;
  transition: 0.2s ease 0s;

  &:focus {
    outline: none;
    border-color: #3366ff;
    ::-webkit-input-placeholder {
      color: #3366ff;
    }
  }
`;
