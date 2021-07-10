import { Tile } from "./Tile";
import { Card } from "./data/boardData";
import { Box } from "../box/Box";
interface RowProps {
  cards: Card[];
  isBorder: boolean;
}
export function Row(props: RowProps) {
  return (
    <Box justify="space-between">
      {props.cards.map((card) => (
        <Tile key={card.order} card={card} />
      ))}
    </Box>
  );
}
