import styled from "@emotion/styled"

const DarkPage = (props) => {
  return (
    <PageWrapper>{props.children}</PageWrapper>
  );
}

export default DarkPage

const PageWrapper = styled("div")({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  padding: "4rem",
  maxHeight: "calc(100% - 18rem)",
  overflowY: "auto",
  width: "100%",
  backgroundColor: "var(--dark-grey)",
  color: "var(--white)",
  maxWidth: "40rem",
})