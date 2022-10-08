import { Container, LeftContainer, LeftTop, NameContainer, Email, Contacts, RightContainer, RightTop, ChatsContainer, ChatActions, ChatInput, ChatButton } from "./styles"
import avatar from "@/assets/Avatar.png"
import { Heading2 } from "@/styled-components"
import { Contact } from "@components/Contact"
import { Chat } from "@components/Chat"
import send from "@/assets/sendMessage.png"

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
          <Chat message="holapes holapes holapesholapes holapes holapes holapes holapes" name="ppe" time="10:10 p.m."/>
          <Chat message="holapes" name="ppe" type="rest" turn="other" time="10:10 p.m."/>
          <Chat message="holapes" name="ppe" type="first" turn="me" time="10:10 p.m."/>
          <Chat message="holapes" name="ppe" type="rest" turn="me" time="10:10 p.m."/>
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
