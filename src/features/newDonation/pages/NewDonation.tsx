import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormWrapper,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../../global/styles/components/FormStyled";

type FormData = {
  firstName: string;
  lastName: string;
};

const Form = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel htmlFor="firstName">שם פרטי</StyledLabel>
        <StyledInput type="text" id="firstName" {...register("firstName")} />

        <StyledLabel htmlFor="lastName">שם משפחה</StyledLabel>
        <StyledInput type="text" id="lastName" {...register("lastName")} />

        <StyledButton type="submit">שלח</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
