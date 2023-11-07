import styled from "@emotion/styled";
import { Header } from "./Header";
import { SubNav } from "./SubNav";
import { Event } from "../helpers/types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
// import { SubNav } from "./SubNav";

interface PageProps {
  children: React.ReactNode;
  meta?: Event;
  page?: {
    title: string;
  };
  onSetData?: (data: any) => void;
}

export const Page: React.FC<PageProps> = (props) => {
  const { program, event } = useParams();

  useEffect(() => {
    console.log(event);
    if (event !== undefined) {
      (async () => {
        if (props.onSetData === undefined) return;
        const fetchedData = await getEvent(event);
        await props.onSetData(fetchedData);
      })();
    }
  }, []);

  return (
    <Container whiteBackground={!!props.page}>
      {props.meta && (
        <Header
          title={props.meta.title}
          location={props.meta.location}
          startDate={props.meta.startDate}
          endDate={props.meta.endDate}
        />
      )}
      {props.page && (
        <SubNav program={program || ""} title={props.page.title} />
      )}
      <Content header={!!props.meta} subnav={!!props.page}>
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
