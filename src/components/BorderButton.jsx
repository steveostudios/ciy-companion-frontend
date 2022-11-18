import styled from "@emotion/styled";

const BorderButton = (props) => {
  return <A href={props.href}>{props.title}</A>;
};

export default BorderButton;

const A = styled("a")({
  display: "flex",
  border: "1px solid var(--white)",
  marginBottom: "2rem",
  textDecoration: "none",
  flex: 1,
  minHeight: "3rem",
  padding: "1rem",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily: "PragmaticaExtended-ExtraBold",
  textTransform: "uppercase",
  color: "var(--white)",

  "&:hover": {
    backgroundColor: "var(--white)",
    color: "var(--black)",
  },
});

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
