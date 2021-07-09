import styled from "styled-components";
import { fonts } from "../assets/consts";

interface ParagraphProps {
  bold?: boolean;
  textAlign?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-family: ${fonts.family.default};
  margin: 0;
  padding: 0;
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.default};
  ${(props) => (props.bold ? `font-weight: bold;` : ``)};
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : ``)};
`;
