import { board } from "./data/boardData";
import { Row } from "./Row";
import { space } from "../assets/consts";
import { Separator } from "../spacing/spacing.styled";
import { Box } from "../box/Box";
import { useState, useEffect } from "react";

function getBoardStructure() {
  const { innerWidth: width } = window;
  return width > 768 ? board.desktop : board.mobile;
}

export function Board() {
  const [boardStructure, setBoardStructure] = useState(getBoardStructure());

  useEffect(() => {
    function handleResize() {
      setBoardStructure(getBoardStructure());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardRows = boardStructure.map((row) => {
    return board.cards.filter((card) => {
      return row.cardIds.includes(card.order);
    });
  });
  const rowViews = cardRows.map((row, index) => (
    <Row
      key={boardStructure[index].key}
      cards={row}
      isBorder={index === 0 || index === cardRows.length}
    />
  ));

  return (
    <div id="board">
      <Separator vspace size={space.large} />
      <Box justify="space-between">
        <Separator hspace size={space.small} />
        <Box.Item>{rowViews}</Box.Item>
        <Separator hspace size={space.small} />
      </Box>
      <Separator vspace size={space.large} />
    </div>
  );
}
