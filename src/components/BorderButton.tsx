import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
    <Container
      color={props.color || "black"}
      hideBorder={props.hideBorder || false}
    >
      {props.url && !props.href && (
        <Link to={props.url}>
          <Content>{props.title}</Content>
        </Link>
      )}
      {props.onClick && (
        <div onClick={props.onClick}>
          <Content>{props.title}</Content>
        </div>
      )}
      {props.href && (
        <a href={props.href} target={props.target || "_self"}>
          <Content>{props.title}</Content>
        </a>
      )}
    </Container>
  );
};

export default BorderButton;

const Container = styled("div")(
  (props: { color: string; hideBorder: boolean }) => ({
    display: "flex",
    marginBottom: "2rem",
    flex: 1,
    minHeight: "3rem",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: props.hideBorder ? "transparent" : `var(--${props.color})`,
    "*": {
      fontFamily: "PragmaticaExtended-ExtraBold",
      textTransform: "uppercase",
      color: `var(--${props.color})`,
      textDecoration: "none",
    },
  })
);

const Content = styled("div")({
  display: "flex",
  flex: 1,
});
