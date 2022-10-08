import styled, { css, keyframes } from "styled-components";

export const LoaderCOntainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SpinContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
`

type SpinProps = {
  type?: "default" | "focus"
}

export const Spin = styled.span<SpinProps>`
  background: ${props => props.type === "focus" ? props.theme.colors.main : "transparent"};
  border: 1px solid ${props => props.theme.colors.stroke};
  width: .8em;
  height: .8em;
  border-radius: 100px;
  
  ${props => 
    props.type === "focus" 
      ? spinningAnimation 
      : null
  }
`

const spinning = keyframes`
  0% {left: 21px;}
  20% {left: 55px;}
  40% {left: 89px;}
  60% {left: 123px;}
  80% {left: 157px;}
  100% {left: 191px;}
`

const spinningAnimation = css`
  position: absolute;
  animation: ${spinning} 3s infinite;
`