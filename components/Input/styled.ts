import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 40rem;
  ::placeholder {
    padding: 20px;
  }
`;
export const InputLabel = styled.div`
  max-width: 200rem;
  width: 100%;
`;
