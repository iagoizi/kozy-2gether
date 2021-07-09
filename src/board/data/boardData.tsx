export interface Card {
  order: number;
  special: boolean;
  text: string;
}

export interface Board {
  desktop: RowIds[];
  mobile: RowIds[];
  cards: Card[];
}
export interface RowIds {
  key: string;
  cardIds: number[];
}
export const board: Board = {
  desktop: [
    { key: "desk1", cardIds: [10, 9, 8, 7, 6, 5, 4] },
    { key: "desk2", cardIds: [11, 3] },
    { key: "desk3", cardIds: [12, 2] },
    { key: "desk4", cardIds: [13, 1] },
    { key: "desk5", cardIds: [14, 15, 16, 17, 18, 19, 0] },
  ],
  mobile: [
    { key: "mobile1", cardIds: [10, 9, 8, 7] },
    { key: "mobile2", cardIds: [11, 6] },
    { key: "mobile3", cardIds: [12, 5] },
    { key: "mobile4", cardIds: [13, 4] },
    { key: "mobile5", cardIds: [14, 3] },
    { key: "mobile6", cardIds: [15, 2] },
    { key: "mobile7", cardIds: [16, 1] },
    { key: "mobile8", cardIds: [17, 18, 19, 0] },
  ],
  cards: [
    { order: 19, special: false, text: "목표" },
    { order: 18, special: true, text: "‘출발’로 돌아가세요." },
    { order: 17, special: false, text: "-냐고" },
    { order: 16, special: false, text: "이상형" },
    { order: 15, special: false, text: "-게 되다" },
    { order: 14, special: false, text: "관심이 있다/많다" },
    { order: 13, special: true, text: "한 번 더!" },
    { order: 12, special: false, text: "특기" },
    { order: 11, special: false, text: "-(으)라고" },
    { order: 10, special: true, text: "한 번쉬세요!" },
    { order: 9, special: false, text: "-ㄴ/는다고" },
    { order: 8, special: false, text: "첫인상" },
    { order: 7, special: false, text: "-자고" },
    { order: 6, special: true, text: "두 칸 앞으로 가세요!" },
    { order: 5, special: false, text: "(이)든지" },
    { order: 4, special: false, text: "노력하다" },
    { order: 3, special: true, text: "두 칸 뒤로 가세요!" },
    { order: 2, special: false, text: "-기 위해서" },
    { order: 1, special: false, text: "-다가" },
    { order: 0, special: false, text: "출발" },
  ],
};
