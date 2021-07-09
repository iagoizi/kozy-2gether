import { Separator } from "../spacing/spacing.styled";
import { space } from "../assets/consts";
import { Paragraph } from "../text/Paragraph";
interface RuleItemProps {
  text: string;
}
export function RuleItem(props: RuleItemProps) {
  return (
    <li>
      <Paragraph>{props.text}</Paragraph>
      <Separator vspace size={space.large} />
    </li>
  );
}
