import { Paragraph } from "../../styled-components";
import { Container, LoginButton, LoginContainer } from "./styles";
import { Wrapper } from "../../styled-components/utils";
import { useState } from "react";
import { Loader } from "../../components/loader";
import Logo from "../../assets/logo";
import LogoGoogle from "../../assets/logoGoogle";

export default function Login() {
  const [loading, setLoading] = useState(false);

  if(!loading) {
    return (
      <Wrapper>
        <Container>
          <Logo />
          <Paragraph align="center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est atque labore aliquam?
          </Paragraph>
          
          <LoginContainer>
            <Paragraph>Para empezar a Chatear...</Paragraph>
            <LoginButton onClick={() => setLoading(!loading)}>
              <LogoGoogle />
              Entre con google
            </LoginButton>
          </LoginContainer>
        </Container>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    )
  }
}
