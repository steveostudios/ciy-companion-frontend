import { Icon } from "./Icon";

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
      <Icon
        icon={`<i class="fa-kit fa-logo-yms"></i>`}
        size={size || 3}
        color={color || "var(--yms-primary)"}
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
