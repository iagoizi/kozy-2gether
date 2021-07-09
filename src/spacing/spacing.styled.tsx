import styled from "styled-components";
interface SeparatorProps {
  vspace?: boolean;
  hspace?: boolean;
  size: string;
}
export const Separator = styled.div<SeparatorProps>`
  ${(props) => (props.vspace ? `height:${props.size}` : ``)}
  ${(props) => (props.hspace ? `flex: 0 0 ${props.size}` : ``)}
`;
