import { Container, LeftContainer, LeftTop, NameContainer, Email, Contacts } from "./styles"
import avatar from "../../assets/Avatar.png"
import { Heading2 } from "../../styled-components"
import { Contact } from "../../components/contact"

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
    </Container>
  )
}
