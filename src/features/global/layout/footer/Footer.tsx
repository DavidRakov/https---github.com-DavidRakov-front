import { Container } from "../../styles/components/ContainerStyled";
import { StyledFooter } from "./styles/Footer.styled";
import { Flex } from "../../styles/components/FlexStyled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <p>&copy; 2024 Rakov. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
