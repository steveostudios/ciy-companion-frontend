import styled from "@emotion/styled"

const BorderList = (props) => {
  return (
    <UL>{props.children}</UL>
  );
}

export default BorderList

const UL = styled("ul")({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  margin: "4rem",
  border: "1px solid var(--white)",
  maxHeight: "calc(100% - 18rem)",
  overflowY: "auto",
  width: "100%",
  maxWidth: "40rem",
  "li": {
    "a": {
      color: "var(--white)",
      textDecoration: "none",
      display: "flex",
      width: "inherit",
      height: "inherit",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "3rem",
      padding: "1rem"
    },
    "a:hover": {
      backgroundColor: "var(--white)",
      color: "var(--black)"
    }
  }
})