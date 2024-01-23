import { Typography } from "../../styles/components/TypographyStyled";
import { StyledHeader, Avatar, Logo, Nav } from "./styles/HeaderStyled";
import { Container } from "../../styles/components/ContainerStyled";
import { Flex } from "../../styles/components/FlexStyled";
import { BoxStyled } from "../../styles/components/BoxStyled";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ixqttd1eFR42CLVzHy9XIRiiPQK9eRiYIWMQc2cwIWFesT7rtxWhGmPWUQ&s"
            alt=""
          />
          <Flex>
            <BoxStyled dir="rtl" direction="column">
              <Typography>יעד: $$$$$$$</Typography>
              <Typography>הושג: $$$$$$</Typography>
            </BoxStyled>
            <Typography>מחלקה: ירושלים</Typography>
          </Flex>
          <Avatar>דר</Avatar>
        </Nav>

        {/* <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
        </Flex> */}
      </Container>
    </StyledHeader>
  );
}
