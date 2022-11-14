import styled from "@emotion/styled"

const LightPage = (props) => {
  return (
    <PageWrapper>{props.children}</PageWrapper>
  );
}

export default LightPage

const PageWrapper = styled("div")({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  padding: "4rem",
  maxHeight: "calc(100% - 18rem)",
  overflowY: "auto",
  width: "100%",
  backgroundColor: "var(--white)",
  color: "var(--black)",
  maxWidth: "40rem",
})