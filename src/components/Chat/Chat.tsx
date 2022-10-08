import { Paragraph } from "@/styled-components"
import { Container, ChatTime, HiddenName, Wrapper } from "./styles"

type chatProps = {
  type?: "rest" | "first"
  turn?: "me" | "other"
  name: string
  message: string
  time: string
}

export function Chat({ 
    name, 
    message, 
    time, 
    type = "first", 
    turn = "other"
}: chatProps ) {

  return (
    <Wrapper turn={turn}>
      <Container type={type} turn={turn}>
        <HiddenName turn={turn} type={type}>
          <Paragraph color="#000000" type="chat-name">{name}</Paragraph>
        </HiddenName>

        <Paragraph color="#000000cc" type="chat">{message}</Paragraph>
        
        <ChatTime>
          <Paragraph color="#000000" type="time">{time}</Paragraph>
        </ChatTime>
      </Container>
    </Wrapper>
  )
}
