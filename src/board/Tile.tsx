import { TileProps, TileStyled } from "./Tile.style";
import { Separator } from "../spacing/spacing.styled";
import { space, colors } from "../assets/consts";
import { Box } from "../box/Box";
import { Paragraph } from "../text/Paragraph";

export function Tile(props: TileProps) {
  const isStart = props.card.order === 0;
  const startArrow = (
    <i style={{ color: "red" }} className="fas fa-arrow-up start"></i>
  );
  return (
    <TileStyled height="7em" background={colors.shape} card={props.card}>
      <Separator hspace size={space.medium} />
      <Box direction="column" justify="center">
        <Separator vspace size={space.medium} />
        <Paragraph bold={isStart} textAlign="center">
          {isStart && startArrow}
          {props.card.text}
        </Paragraph>
        <Separator vspace size={space.medium} />
      </Box>
      <Separator hspace size={space.medium} />
    </TileStyled>
  );
}
