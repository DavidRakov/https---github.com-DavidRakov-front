import styled from "styled-components";

export const FormWrapper = styled.div`
  direction: rtl;
  font-family: "Arial", sans-serif;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5em;
`;

export const StyledInput = styled.input`
  margin-bottom: 1em;
  padding: 0.5em;
`;

export const StyledButton = styled.button`
  padding: 0.5em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
