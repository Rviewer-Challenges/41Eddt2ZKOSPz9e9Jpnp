import styled from "styled-components";

export const ContactCont = styled.div`
  position: relative;
  padding: 0.625em 0.75em;
  display: flex;
  gap: .75em;
  width: calc(100% - .25em);
  background: ${props => props.theme.colors.bgWhite};
  
  &:hover {
    background: ${props => props.theme.colors.bgWhite}dd;
  }

  img {
    height: 2.875em;
    width: 2.875em;
    border-radius: 100px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContentTime = styled.span`
  position: absolute;
  right: .75em;
`