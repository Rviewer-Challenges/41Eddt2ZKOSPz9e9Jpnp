import styled from "styled-components";
import bgPattern from "@/assets/bgpattern.png";

export const Container = styled.div`
  background: ${props => props.theme.colors.stroke};
  height: 100vh;
  margin: auto;
  width: min(100%, 1660px);
  display: flex;
  gap: 0.2rem;
  
  @media (min-width: 1441px) {
    padding: .5em 1.5em;
  }
`

// RIGHT SIDE
export const RightContainer = styled.div`
  height: 100%;
  width: calc(100% - 25rem);
  background: #fff;
  display: flex;
  flex-direction: column;
` 

export const RightTop = styled.div`
  padding: 0.5em 0.875em 0.75em 0.875em;
  display: flex;
  gap: 1em;
  align-items: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 2.25em;
    height: 2.25em;
    border-radius: 100px;
  }
`

export const ChatsContainer = styled.div`
  display: table;
  padding: 2.25em 4.25em 3.75em 4.25em;
  background: url(${bgPattern});
  height: 100%;
`


export const ChatActions = styled.form`
  padding: 0.75em 1.25em 0.75em 2.5em;
  background: ${props => props.theme.colors.bgWhite};
  display: flex;
  gap: 1em; 
` 

export const ChatInput = styled.input`
  border: none;
  outline: none;
  border: 2px solid #000;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  width: 100%;
`

export const ChatButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 1em;
`