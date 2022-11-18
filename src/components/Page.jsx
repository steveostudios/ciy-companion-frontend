import styled from "@emotion/styled";
import IconChevron from "./../img/icons/chevron-left.svg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Page = (props) => {
  const navigate = useNavigate();
  return (
    <PageWrapper background={props.background}>
      {props.hideHeader === undefined && <Header />}
      {props.title && (
        <SubNav>
          <BackButton onClick={() => navigate(-1)}>
            <img src={IconChevron} alt="Back" />
          </BackButton>
          <H2>{props.title}</H2>
        </SubNav>
      )}
      <Main padding={props.padding}>{props.children}</Main>
    </PageWrapper>
  );
};

export default Page;

const PageWrapper = styled("div")(
  {
    padding: 0,
    alignSelf: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    color: "var(--black)",
  },
  (props) => ({
    backgroundColor:
      props.background === "dark"
        ? "var(--dark-grey)"
        : props.background === "light"
        ? "var(--white)"
        : "transparent",
    color:
      props.background === "dark"
        ? "var(--white)"
        : props.background === "light"
        ? "var(--black)"
        : "var(--white)",
  })
);

const SubNav = styled("div")({
  backgroundColor: "var(--move-primary)",
  height: "10rem",
  display: "flex",
  gap: "1rem",
  color: "var(--black)",
  alignContent: "center",
});

const BackButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "10rem",
  width: "6rem",
});

const H2 = styled("h2")({
  textTransform: "uppercase",
  fontSize: "24px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  marginTop: "3rem",
});

const Main = styled("main")(
  {
    position: "relative",
    overflowY: "auto",
    flex: 1,
    margin: "0 auto",
    width: "100%",
    minWidth: "40rem",
    maxWidth: "56rem",
    "> *": {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    "> div": {
      padding: "2rem",
    },
    "> ul": {},
    iframe: {
      top: 0,
      zIndex: 2,
      position: "absolute",
      width: "100%",
      overflow: "hidden",
      overflowX: "hidden",
      overflowY: "hidden",
      height: "100%",
    },
  },
  (props) => ({})
);
