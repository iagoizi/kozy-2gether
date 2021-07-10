import styled from "styled-components";
import { colors, fonts } from "../assets/consts";

export const H1 = styled.h1`
  color: ${colors.textEmphasis};
  font-family: ${fonts.family.default};
  font-weight: bold;
  text-align: center;
  font-size: ${fonts.size.biggest};
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  color: ${colors.textEmphasis};
  font-family: ${fonts.family.default};
  text-align: center;
  font-size: ${fonts.size.medium};
  margin: 0;
  padding: 0;
`;
