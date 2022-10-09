import styled from "styled-components";
import background from "@/assets/LeftBg.svg";
import { Heading5 } from "@/styled-components/fonts";

export const Container = styled.div`
  width: 25rem;
  height: 100%;
  background: blue;
`

export const Top = styled.div`
  padding: 0.625em 0.75em;
  display: flex;
  align-items: center;
  gap: 0.75em;
  background: ${props => props.theme.colors.bgWhite};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;

  img {
    height: 2.25em;
    width: 2.25em;
    border-radius: 100px;
  }
`

export const TopNameContainer = styled.div`
  position: relative;
`

export const EmailPlus = styled(Heading5)`
  position: absolute;
  top: 1.5em;
  left: calc(100% + .5em);
`

export const ContactsContainer = styled.div`
  height: calc(100% - 3.5em);
  background: url(${background});
  z-index: -1;
`