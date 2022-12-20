import styled from "@emotion/styled";

const BorderButton = (props) => {
  return (
    <A href={props.href} onClick={props.onClick} background={props.background}>
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
  (props) => ({
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

export const BorderButtonGroup = (props) => {
  return (
    <BorderButtonGroupContainer>{props.children}</BorderButtonGroupContainer>
  );
};

const BorderButtonGroupContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "0 2rem",
});
