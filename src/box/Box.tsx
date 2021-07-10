import styled from "styled-components";

interface BoxProps {
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  noGrow?: boolean;
  direction?: "column" | "row";
}

export const Box: any = styled.div<BoxProps>`
  display: flex;
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")}
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : "")}
  flex-grow: ${(props) => (props.noGrow ? 0 : 1)};
`;

Box.Item = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => (props.noGrow ? 0 : 1)};
`;
