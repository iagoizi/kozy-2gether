import styled from "styled-components";
import { Box } from "./Box";
import { colors, borderRadius } from "../assets/consts";

export interface SurfaceProps {
  background?: string;
  color?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}

export const Surface = styled(Box)<SurfaceProps>`
  background: ${(props) =>
    props.background ? props.background : colors.shape2};
  color: ${(props) => (props.color ? props.color : colors.text)};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : borderRadius};
  ${(props) => (props.height ? `height: ${props.height};` : ``)};
  margin: ${(props) => (props.margin ? props.margin : ` 0 0`)};

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
