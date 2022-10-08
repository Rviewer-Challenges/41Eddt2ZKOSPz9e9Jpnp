import styled, {css} from "styled-components";

type chatProps = {
  type?: "rest" | "first"
  turn: "me" | "other"
}

const leftLash = css`
  left: -1.1em;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
`

const rightLash = css`
  right: -1.1em;
  clip-path: polygon(100% 0, 0 0, 0 100%);
`

export const Container = styled.div<chatProps>`
  position: relative;
  background: ${props => props.theme.colors.bgMain};
  padding: .75em 4.5em .75em .75em;
  margin-bottom: .25em;
  border-radius: 0.5em;
  max-width: 32em;

  ${props => props.type === "first" && `
    margin-top: 1.5em;

    &::before {
      content: "";
      position: absolute;
      width: 1.5em;
      height: 1em;
      background:`+props.theme.colors.bgMain+`;
      top: 0;
      
    `+(props.turn === "other" ? leftLash : rightLash)
  }


`

export const Wrapper = styled.div<chatProps>`
  display: inherit;
  margin-left: ${props => props.turn === "other" ? "0" : "auto"};
`

export const HiddenName = styled.div<chatProps>`
  display: ${props => props.turn === "me" || props.type === "rest" ? "none" : "block"};
`

export const ChatTime = styled.span`
  position: absolute;
  right: 1em;
  bottom: 0.5em;
`