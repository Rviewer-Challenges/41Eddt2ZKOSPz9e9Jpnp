import styled from "styled-components";

type ParagraphProps = {
  type?: "time" | "chat" | "chat-name"
  align?: "left" | "right" | "center"
  color?: string
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => 
    props.type === "time" 
      ? props.theme.fontsSizes.time
      : props.type === "chat" || props.type === "chat-name" 
      ? props.theme.fontsSizes.chat
      : props.theme.fontsSizes.default
  };
  text-align: ${props => 
    props.align === "center"
      ? "center"
      : props.align === "right"
      ? "right"
      : "left"
  };
  font-weight: ${props => 
    props.type === "chat-name" 
      ? 600
      : 500
  };
  color: ${props => props.color ? props.color : props.theme.colors.main};
  word-wrap: break-word;
`

export const Heading2 = styled.h2`
  font-size: ${props => props.theme.fontsSizes.large};
  font-weight: 700;
`

export const Heading4 = styled.h4`
  font-size: ${props => props.theme.fontsSizes.large};
  font-weight: 400;
`

export const Heading5 = styled.h5`
  font-size: ${props => props.theme.fontsSizes.small};
  font-weight: 400;
`
