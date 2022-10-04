import styled from "styled-components";

type chatProps = {
  type: "chat" | "first" | "first-chain"
  turn: "me" | "other"
}

export const Container = styled.div<chatProps>`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.bgMain};
  padding: .5em 2.5em .5em .5em;
  border-radius: 0.5em;
  /* width: min(100%, 24em); */
  width: 100%;
  /* align-self: baseline; */
  text-overflow: clip;
`

