import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 40rem;
  position: relative;
`;
export const InputLabel = styled.div`
  max-width: 200rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ::before {
    fill: #3366ff;
  }
`;
