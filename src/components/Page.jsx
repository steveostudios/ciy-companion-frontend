import styled from "@emotion/styled"
import IconChevron from "./../img/icons/chevron-left.svg";
import {useNavigate} from "react-router-dom"


const Page = (props) => {
  const navigate = useNavigate()
  return (
    <PageWrapper background={props.background}>
      <SubNav>
        <BackButton onClick={() => navigate(-1)}><img src={IconChevron} alt="Back" /></BackButton>
        <H2>{props.title}</H2>
      </SubNav>
      <Content padding={props.padding}>
        {props.children}
      </Content>
    </PageWrapper>
  );
}

export default Page

const PageWrapper = styled("div")({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  width: "100%",
  height: "100%",
  color: "var(--black)",
}, props => ({
  backgroundColor: props.background === "dark" ? "var(--dark-grey)" : "var(--white)",
}))

const SubNav = styled("div")({
  backgroundColor: "var(--move-primary)",
  height: "10rem",
  display: "flex",
  gap: "1rem",
  alignContent: "center"
})

const BackButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "10rem",
  width: "6rem"
}) 

const H2 = styled("h2")({
  textTransform: "uppercase",
  fontSize: "24px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  marginTop: "3rem"
})

const Content = styled("main")({
  overflowY: "auto",
  margin: "0 auto",
  maxWidth: "48rem",
  minWidth: "40rem",
  flex: 1,
  "iframe": {
    width: "100%",
    overflow:"hidden",
    overflowX:"hidden",
    overflowY:"hidden",
    height:"100%",
  }
}, props => ({
  width: props.padding  === 0 ? "100%" : "unset",
  padding: props.padding !== undefined ? props.padding : "4rem",
}))

