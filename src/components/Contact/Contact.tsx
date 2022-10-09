import { Heading4, Paragraph } from "@/styled-components/fonts";
import { ContactCont, Content, ContentTime } from "./styles";

export type ContactProps = {
  lastMessage?: string;
  name: string;
  time: string;
  avatar: string;
}

export function Contact(props: ContactProps) {
  return (
    <ContactCont>
      <img src={props.avatar} alt={props.name}/>

      <Content>
        <Heading4>{props.name}</Heading4>
        <Paragraph type="chat" color="#000">{props.lastMessage}</Paragraph>  
      </Content>
      
      <ContentTime>
        <Paragraph type="time" color="#000">{props.time}</Paragraph>
      </ContentTime>
    </ContactCont>
  )
}
