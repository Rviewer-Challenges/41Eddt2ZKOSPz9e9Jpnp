import { Container } from "./styles"
import { ContactsSide } from "@/components/ContactsSide"
import { ChatSide } from "@/components/ChatSide"

export default function Home() {
  return (
    <Container>
      <ContactsSide />
      
      <ChatSide />
    </Container>
  )
}
