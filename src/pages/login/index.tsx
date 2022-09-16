import { Paragraph } from "../../styled-components";
import { Container, LoginButton, LoginContainer } from "./styles";
import Logo from "../../assets/logo";
import LogoGoogle from "../../assets/logoGoogle";
import { Wrapper } from "../../styled-components/utils";

export default function Login() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Paragraph align="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est atque labore aliquam?
        </Paragraph>
        
        <LoginContainer>
          <Paragraph>Para empezar a Chatear...</Paragraph>
          <LoginButton onClick={() => console.log("holamuno")}>
            <LogoGoogle />
            Entre con google
          </LoginButton>
        </LoginContainer>
      </Container>
    </Wrapper>
  )
}
