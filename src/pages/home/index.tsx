import { Container, LeftContainer, LeftTop, NameContainer, Email, Contacts, RightContainer, RightTop, ChatsContainer, ChatActions, ChatInput, ChatButton } from "./styles"
import avatar from "../../assets/Avatar.png"
import { Heading2 } from "../../styled-components"
import { Contact } from "../../components/contact"
import { Chat } from "../../components/chat"
import send from "../../assets/sendMessage.png"

export default function Home() {
  return (
    <Container>
      <LeftContainer>
          <LeftTop>
            <img src={avatar} alt="alterego"/>
            <NameContainer>
              <Heading2>Felix Criollo</Heading2>
              <Email>@fabrizio</Email>
            </NameContainer>
          </LeftTop>
          <Contacts>
            <Contact />
            <Contact />
          </Contacts>
      </LeftContainer>

      <RightContainer>
        <RightTop>
          <img src={avatar} alt="pepito"/>
          <Heading2>Persona con la que se chatea</Heading2>
        </RightTop>

        <ChatsContainer>
          <Chat message="holapesdawdwdadawdawdwadwawadwadwadwdwadawdawdawdwad" name="ppe" time="10:10"/>
          <Chat message="holapes" name="ppe" time="10:10"/>
        </ChatsContainer>

        <ChatActions>
          <ChatInput placeholder="Escribe un mensaje..."/>
          <ChatButton type="submit">
            <img src={send} alt="send"/>
          </ChatButton>
        </ChatActions>
      </RightContainer>
    </Container>
  )
}
