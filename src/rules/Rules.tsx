import { Separator } from "../spacing/spacing.styled";
import { Box } from "../box/Box";
import { Surface } from "../box/Surface.style";
import { space } from "../assets/consts";
import { RuleItem } from "./RuleItem";
import { H1, H2 } from "../text/Headings";

function Rules() {
  return (
    <Surface margin="0 10%">
      <Separator hspace size={space.large} />

      <Box direction="column" justify="center">
        <Separator vspace size={space.large} />
        <H1>다음의 방법으로 게임을 해 보세요</H1>
        <Separator vspace size={space.small} />
        <H2>Play the game with the following rules</H2>
        <Separator vspace size={space.large} />

        <ul>
          <RuleItem text="주사위를 던져 나온 수만큼 앞으로 갑니다." />
          <RuleItem text="멈춘 곳에 있는 표현으로 문장을 만드세요." />
          <RuleItem text="만일 문장을 만들지 못하면 다음 순서 때 한 번 쉽니다." />
          <RuleItem text="한 바퀴를 돌아 ‘출발’ 자리로 먼저 돌아온 사람이 이깁니다." />
        </ul>

        <Separator vspace size={space.large} />
      </Box>
      <Separator hspace size={space.large} />
    </Surface>
  );
}

export default Rules;
