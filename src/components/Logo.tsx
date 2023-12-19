import { Icon } from "./Icon";
import yms from "./../img/Logo_YMS.svg";

interface Props {
  id?: number;
  slug?: string;
  size?: number;
  color?: string;
}

export const Logo: React.FC<Props> = (props) => {
  const { id, slug, color, size } = props;
  if (id === 4 || slug === "move")
    return (
      <Icon
        icon={`<i class="fa-kit fa-logo-move"></i>`}
        size={size || 3}
        color={color || "var(--move-primary)"}
      />
    );
  if (id === 5 || slug === "mix")
    return (
      <Icon
        icon={`<i class="fa-kit fa-logo-mix"></i>`}
        size={size || 3}
        color={color || "var(--mix-primary)"}
      />
    );
  if (id === 6 || slug === "superstart")
    return (
      <Icon
        icon={`<i class="fa-kit fa-logo-superstart"></i>`}
        size={size || 3}
        color={color || "var(--superstart-primary)"}
      />
    );
  if (id === 11 || slug === "yms")
    return (
      <img
        src={yms}
        alt="yms"
        style={{
          width: size + "rem" || "3rem",
          height: (size && size * 0.5 + "rem") || "3rem",
        }}
      />
    );
  if (id === 12 || slug === "engage")
    return (
      <Icon
        icon={`<i class="fa-kit fa-logo-engage"></i>`}
        size={size || 3}
        color={color || "var(--engage-primary)"}
      />
    );

  return null;
};
