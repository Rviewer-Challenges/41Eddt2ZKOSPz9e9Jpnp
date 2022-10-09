import { Paragraph } from "@/styled-components/fonts";
import { Container, LoginButton, LoginContainer } from "./styles";
import Logo from "@/assets/logo";
import LogoGoogle from "@/assets/logoGoogle";
import { signInWithGoogle } from "@/auth/google";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "@/styled-components/utils";

export default function Login() {
  let navigate = useNavigate();
  
  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle();
    
    if(user) {
      navigate("/");
    }
  }

  return (
    <Wrapper>
      <Container>
        <Logo />
        <Paragraph align="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est atque labore aliquam?
        </Paragraph>
        
        <LoginContainer>
          <Paragraph>Para empezar a Chatear...</Paragraph>
          <LoginButton onClick={handleGoogleSignIn}>
            <LogoGoogle />
            Entre con google
          </LoginButton>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
}
