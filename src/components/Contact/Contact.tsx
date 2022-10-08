import avatar from "@/assets/Avatar.png";
import { Heading4, Paragraph } from "@/styled-components";
import { ContactCont, Content, ContentTime } from "./styles";

export function Contact() {
  return (
    <ContactCont>
      <img src={avatar} alt="alterego"/>
      
      <Content>
        <Heading4>Nombre del chat</Heading4>
        <Paragraph type="chat" color="#000">Nombre: Mensaje</Paragraph>  
      </Content>
      
      <ContentTime>
        <Paragraph type="time" color="#000">10:10 p.m.</Paragraph>
      </ContentTime>
    </ContactCont>
  )
}
