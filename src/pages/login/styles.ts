import styled from "styled-components";

export const Container = styled.div`
  width: 27em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.stroke};
  padding: 2em 5rem;
  margin: 2em;
  background: ${props => props.theme.colors.bgWhite};
`

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: left;
  margin-top: 2em;
`

export const LoginButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.main};
  border-radius: .75em;
  font-size: ${props => props.theme.fontsSizes.chat};
  color: ${props => props.theme.colors.main};
  padding: 1em 1.5em;
  font-weight: 500;

  svg {
    position: absolute;
    left: 1.5em;
  }

  &:hover {
    background: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.bgWhite};
  }
`