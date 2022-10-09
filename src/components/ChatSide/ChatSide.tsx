import { Heading2 } from "@/styled-components/fonts";
import { ChatActions, ChatsContainer, Container, TopContainer } from "./styles";
import avatar from "@/assets/Avatar.png" // * Avatar image for testing
import send from "@/assets/sendMessage.png"
import { Chat } from "../Chat";

// type ChatSideProps = {
//   contactAvatar: string;
//   contactName: string;
//   chatList: chatProps[];
// }

export function ChatSide() {
  // TODO Consume contactAvatar, contactName and chatList from context
  let contactName = "Pedro Picapiedra";

  return (
    <Container>
        <TopContainer>
          <img src={avatar} alt={contactName} />
          <Heading2>{contactName}</Heading2>
        </TopContainer>

        <ChatsContainer>
          {/* TODO Map chatList */}
          <Chat message="holapes holapes holapesholapes holapes holapes holapes holapes" name="ppe" time="10:10 p.m."/>
          <Chat message="holapes" name="ppe" type="rest" turn="other" time="10:10 p.m."/>
          <Chat message="holapes" name="ppe" type="first" turn="me" time="10:10 p.m."/>
          <Chat message="holapes" name="ppe" type="rest" turn="me" time="10:10 p.m."/>
          {/* Testing */}
        </ChatsContainer>

        <ChatActions>
          <input type="text" placeholder="Escribe un mensaje..."/>
          <button type="submit">
            <img src={send} alt="send"/>
          </button>
        </ChatActions>
      </Container>
  )
}
