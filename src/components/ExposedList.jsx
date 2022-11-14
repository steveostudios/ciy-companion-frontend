import styled from "@emotion/styled"

const ExposedList = (props) => {
  return (
    <UL>{props.children}</UL>
  );
}

export default ExposedList

const UL = styled("ul")({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  margin: 0,
  maxHeight: "calc(100% - 18rem)",
  overflowY: "auto",
  width: "100%",
  maxWidth: "40rem",
  gap: "2rem",
  "li": {
    border: "1px solid var(--white)",
    marginBottom: "2rem",
    "a": {
      color: "var(--white)",
      textDecoration: "none",
      display: "flex",
      width: "inherit",
      height: "inherit",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "3rem",
      padding: "1rem",
      fontFamily: "PragmaticaExtended-ExtraBold",
      textTransform: "uppercase"
    },
    "a:hover": {
      backgroundColor: "var(--white)",
      color: "var(--black)",
    }
  }
})