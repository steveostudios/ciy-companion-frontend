import styled from "@emotion/styled";
import { Header } from "./Header";
import { SubNav } from "./SubNav";
// import { SubNav } from "./SubNav";

interface PageProps {
  children: React.ReactNode;
  event?: {
    title: string;
    location: string;
    startDate: string;
    endDate: string;
  };
  page?: {
    title: string;
    program: string;
  };
}

export const Page: React.FC<PageProps> = (props) => {
  return (
    <Container whiteBackground={!!props.page}>
      {props.event && (
        <Header
          title={props.event.title}
          location={props.event.location}
          startDate={props.event.startDate}
          endDate={props.event.endDate}
        />
      )}
      {props.page && (
        <SubNav program={props.page.program} title={props.page.title} />
      )}
      <Content header={!!props.event} subnav={!!props.page}>
        {props.children}
      </Content>
    </Container>
  );
};

const Container = styled("div")((props: { whiteBackground: boolean }) => ({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  backgroundColor: props.whiteBackground ? "var(--white)" : "transparent",
  color: props.whiteBackground ? "var(--black)" : "var(--white)",
}));

const Content = styled("div")(
  (props: { header: boolean; subnav: boolean }) => ({
    gap: "2rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: props.subnav
      ? "calc(100vh - 24rem)"
      : props.header
      ? "calc(100vh - 18rem)"
      : "calc(100vh - 4rem)",
    margin: "2rem auto",
    maxHeight: "calc(100vh - 4rem)",
    maxWidth: "40rem",
    // border: "1px solid red",
    boxSizing: "border-box",
    overflowY: "scroll",
  })
);
