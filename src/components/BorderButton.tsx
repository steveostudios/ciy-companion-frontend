import styled from "@emotion/styled";

enum ButtonTarget {
  BLANK = "_blank",
  SELF = "_self",
}

interface ButtonProps {
  title: string;
  href?: string;
  url?: string;
  onClick?: () => void;
  target?: ButtonTarget;
  color?: string;
  hideBorder?: boolean;
}

const BorderButton: React.FC<ButtonProps> = (props) => {
  return (
    <A
      href={props.url || props.href}
      onClick={props.onClick}
      target={props.target || "_self"}
      color={props.color || "black"}
      hideBorder={props.hideBorder || false}
    >
      {props.title}
    </A>
  );
};

export default BorderButton;

const A = styled("a")((props: { color: string; hideBorder: boolean }) => ({
  display: "flex",
  marginBottom: "2rem",
  textDecoration: "none",
  flex: 1,
  minHeight: "3rem",
  padding: "1rem",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily: "PragmaticaExtended-ExtraBold",
  textTransform: "uppercase",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: props.hideBorder ? "transparent" : `var(--${props.color})`,
  color: `var(--${props.color})`,
}));
