import styled from "styled-components";
import { colors } from "../assets/consts";
import { Surface, SurfaceProps } from "../box/Surface.style";
import { Card } from "./data/boardData";

export interface TileProps {
  card: Card;
}

interface TileStyledProps extends SurfaceProps, TileProps {}

export const TileStyled = styled(Surface)<TileStyledProps>`
  flex: 0 0 14%;
  height: 7em;
  background: ${(props) =>
    props.card.special
      ? colors.green
      : props.card.order % 2 === 0
      ? colors.shapeHover
      : colors.shape};
  ${(props) => (props.card.special ? `color: black` : colors.text)};

  @media screen and (max-width: 768px) {
    flex-basis: 25%;
    height: 10em;
  }
`;
