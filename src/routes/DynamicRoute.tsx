// import { ConnectPage } from "../pages/ConnectPage";
// import { EmbeddedPage } from "../pages/EmbeddedPage";
// import { ContactsPage } from "../pages/ContactsPage";
// import { MenuPage } from "../pages/MenuPage";
// import { SchedulePage } from "../pages/SchedulePage";
// import { VideoPage } from "../pages/VideoPage";
// import { ImagePage } from "../pages/ImagePage";
// import { GridPage } from "../pages/GridPage";
import { AppPage } from "../pages/AppPage";
// import { Page } from "../components/Page";
// import { Event } from "../helpers/types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEvent } from "../helpers/event";
import styled from "@emotion/styled";
import { Header } from "../components/Header";
import { SubNav } from "../components/SubNav";
import { RouteType } from "../helpers/types";
import { RootPage } from "./EventMenu";
import { ConnectPage } from "../pages/ConnectPage";
import { ContactsPage } from "../pages/ContactsPage";
import { EmbeddedPage } from "../pages/EmbeddedPage";
import { GridPage } from "../pages/GridPage";
import { ImagePage } from "../pages/ImagePage";
import { SchedulePage } from "../pages/SchedulePage";
import { MenuPage } from "../pages/MenuPage";
import { VideoPage } from "../pages/VideoPage";

interface Props {
  //   onSetData: (data: any) => void;
  //   data: any;
}

export const DynamicRoute: React.FC<Props> = (props) => {
  const { program, event, slug } = useParams();
  // const { data, onSetData } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    if (!data && event !== undefined) {
      setLoading(true);
      (async () => {
        // if (props.onSetData === undefined) return;
        const fetchedData = await getEvent(event);
        await setData(fetchedData);
        setLoading(false);
      })();
    }
  }, []);

  useEffect(() => {
    if (!data) {
      return;
      // return navigate(`/`);
    }
    const match = data.pages.find(
      (item: any) => location.pathname === item.path
    );
    setPage(match);

    if (!match) {
      console.log("no matcxh");
      return navigate(`/${program}/${event}`);
    }
  }, [data, location.pathname]);

  if (!data) return null;
  if (!page) return null;
  // if (!page && data) navigate(`/${program}/${event}/`);
  if (loading) return <div>Loading...</div>;
  return (
    <Container whiteBackground={!!slug}>
      {data.meta && (
        <Header
          title={data.meta.title}
          location={data.meta.location}
          startDate={data.meta.startDate}
          endDate={data.meta.endDate}
        />
      )}
      {slug && <SubNav program={program || ""} title={page.data.title || ""} />}
      <Content header={!!data.meta} subnav={!!page}>
        {page && page.type === RouteType.ROOT && <RootPage {...page} />}
        {page && page.type === RouteType.APP && <AppPage {...page} />}
        {page && page.type === RouteType.CONNECT && <ConnectPage {...page} />}
        {page && page.type === "contacts" && <ContactsPage {...page} />}
        {page && page.type === "embedded" && <EmbeddedPage {...page} />}
        {page && page.type === "grid" && <GridPage {...page} />}
        {page && page.type === "image" && <ImagePage {...page} />}
        {page && page.type === "schedule" && <SchedulePage {...page} />}
        {page && page.type === "menu" && <MenuPage {...page} />}
        {page && page.type === "video" && <VideoPage {...page} />}
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
    boxSizing: "border-box",
    overflowY: "scroll",
  })
);
