import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  fieldset {
    margin: 10px;
  }
  input {
    margin: 10px;
  }
  button {
    width: 50px;
  }
`;
export const AcceptRequisition = styled.p`
  color: lightGreen;
`;
export const DeniedRequisition = styled.p`
  color: red;
`;
