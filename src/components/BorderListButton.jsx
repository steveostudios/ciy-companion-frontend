import styled from "@emotion/styled";

const BorderListButton = (props) => {
  return <A href={props.href}>{props.title}</A>;
};

export default BorderListButton;

const A = styled("a")({
  display: "flex",
  textDecoration: "none",
  flex: 1,
  minHeight: "3rem",
  padding: "2rem",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily: "PragmaticaExtended-ExtraBold",
  textTransform: "uppercase",
  color: "var(--white)",
  img: {
    margin: "0 auto",
  },
  "&:hover": {
    backgroundColor: "var(--white)",
    color: "var(--black)",
  },
});
