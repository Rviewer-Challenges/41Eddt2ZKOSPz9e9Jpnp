import styled from "styled-components";
import { Heading5 } from "../../styled-components";
import leftbg from "../../assets/LeftBg.svg";

export const Container = styled.div`
  background: red;
  height: 500px;
  /* width: 100vw; */
  width: 1280px;
  overflow: hidden;
`

export const LeftContainer = styled.div`
  width: 25em;
  height: 100%;
  background: blue;
`

export const LeftTop = styled.div`
  padding: 0.625em 0.75em;
  display: flex;
  align-items: center;
  gap: 0.75em;
  background: ${props => props.theme.colors.bgWhite};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  img {
    height: 2.25em;
    width: 2.25em;
    border-radius: 100px;
  }
`

export const NameContainer = styled.div`
  position: relative;
`

export const Email = styled(Heading5)`
  position: absolute;
  top: 1.5em;
  left: calc(100% + .5em);
`

export const Contacts = styled.div`
  background: url(${leftbg});
  height: 100%;
`