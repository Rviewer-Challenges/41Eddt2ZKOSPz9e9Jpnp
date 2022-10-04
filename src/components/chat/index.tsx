import { Paragraph } from "../../styled-components"
import { Container } from "./styles"

type chatProps = {
  type?: "chat" | "first" | "first-chain"
  turn?: "me" | "other"
  name: string
  message: string
  time: string
}

export function Chat(
  {name, message, time, type = 'first-chain', turn = 'other'}: chatProps 
) {
  


  return (
    <Container type={type} turn={turn}>
      <Paragraph color="#000000" type="chat-name">{name}</Paragraph>
      <Paragraph color="#000000cc" type="chat">{message}</Paragraph>
      <Paragraph color="#000000" type="time">{time}</Paragraph>
    </Container>
  )
}
