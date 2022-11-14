import styled from "@emotion/styled"
import IconChevron from "./../img/icons/chevron-left.svg";
import {useNavigate} from "react-router-dom"


const Page = (props) => {
  const navigate = useNavigate()
  return (
    <PageWrapper pageType={props.pageType}>
      <SubNav>
        <BackButton onClick={() => navigate(-1)}>
          <img src={IconChevron} alt="Back" />
          </BackButton>
          <H2>
        {props.title}
        </H2>
        </SubNav>
      <Content>
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
  maxHeight: "calc(100% - 18rem)",
  overflowY: "auto",
  width: "100%",
  color: "var(--black)",
}, props => ({
  backgroundColor: props.pageType === "dark" ? "var(--dark-grey)" : "var(--white)",
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
  maxWidth: "40rem",
  backgroundColor: props => props.pageType === "dark" ? "var(--dark-grey)" : "var(--white)",
  padding: "4rem",
})
