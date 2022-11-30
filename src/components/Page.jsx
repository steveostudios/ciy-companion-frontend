import styled from "@emotion/styled";
import IconChevron from "./../img/icons/chevron-left.svg";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const Page = (props) => {
  const navigate = useNavigate();
  const { program } = useParams();

  return (
    <PageWrapper background={props.background}>
      {props.hideHeader === undefined && <Header />}
      {props.title && (
        <SubNav program={program}>
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

const SubNav = styled("div")(
  {
    height: "10rem",
    display: "flex",
    gap: "1rem",
    color: "var(--black)",
    alignContent: "center",
  },
  (props) => ({
    backgroundColor: `var(--${props.program}-primary)`,
  })
);

const BackButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "10rem",
  width: "6rem",
});

const H2 = styled("h2")({
  textTransform: "uppercase",
  padding: 0,
  margin: 0,
  fontSize: "24px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  display: "flex",
  alignItems: "center",
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
    touchAction: "manipulation",
    ".react-transform-wrapper": {
      width: "100%",
      height: "100%",
      padding: 0,
    },
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
