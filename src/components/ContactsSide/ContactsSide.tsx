import { Heading2 } from "@/styled-components/fonts"
import { 
	Container, EmailPlus, 
	Top, TopNameContainer, 
	ContactsContainer 
} from "./style"
import avatarLay from "@/assets/Avatar.png"
import { Contact } from "../Contact"

export function ContactsSide() {
	// TODO Consume name, email and avatar from context
	let name = "Felix Criollo" 
	let email = "@fabrizio"
	let avatar = avatarLay
	// TODO Consume contactList from context

	return (
		<Container>
			<Top>
				<img src={avatar} alt={name}/>
				<TopNameContainer>
					<Heading2>{name}</Heading2>
					<EmailPlus>{email}</EmailPlus>
				</TopNameContainer>
			</Top>

			<ContactsContainer>
				{/* TODO Map ContactList */}
				<Contact avatar={avatarLay} name="Pedro" time="10:15 p.m." lastMessage="Hola."/>
				{/* Testing */}
			</ContactsContainer>
		</Container>
	)
}