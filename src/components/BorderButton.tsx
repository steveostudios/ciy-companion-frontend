import styled from "@emotion/styled";

enum ButtonTarget {
  BLANK = "_blank",
  SELF = "_self",
}

export enum ButtonBackground {
  LIGHT = "light",
  DARK = "dark",
}

interface ButtonProps {
  title: string;
  href?: string;
  url?: string;
  onClick?: () => void;
  background?: ButtonBackground;
  target?: ButtonTarget;
}

const BorderButton: React.FC<ButtonProps> = (props) => {
  return (
    <A
      href={props.url || props.href}
      onClick={props.onClick}
      background={props.background}
      target={props.target || "_self"}
    >
      {props.title}
    </A>
  );
};

export default BorderButton;

const A = styled("a")(
  {
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
  },
  (props: { background?: ButtonBackground }) => ({
    border:
      props.background === "light"
        ? "1px solid var(--black)"
        : "1px solid var(--white)",
    color: props.background === "light" ? "var(--black)" : "var(--white)",
    "&:hover": {
      backgroundColor:
        props.background === "light" ? "var(--black)" : "var(--white)",
      color: props.background === "light" ? "var(--white)" : "var(--black)",
    },
  })
);

interface ButtonGroupProps {
  children: React.ReactNode;
}

export const BorderButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return (
    <BorderButtonGroupContainer>{props.children}</BorderButtonGroupContainer>
  );
};

const BorderButtonGroupContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "0 2rem",
});
