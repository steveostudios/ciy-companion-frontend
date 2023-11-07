import { ConnectPage } from "../pages/ConnectPage";
import { EmbeddedPage } from "../pages/EmbeddedPage";
import { ContactsPage } from "../pages/ContactsPage";
import { MenuPage } from "../pages/MenuPage";
import { SchedulePage } from "../pages/SchedulePage";
import { VideoPage } from "../pages/VideoPage";
import { ImagePage } from "../pages/ImagePage";
import { GridPage } from "../pages/GridPage";
import { AppPage } from "../pages/AppPage";
import { Page } from "../components/Page";
import { Event } from "../helpers/types";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface Props {
  onSetData: (data: any) => void;
  data: any;
}

export const EventPage: React.FC<Props> = (props) => {
  const { data, onSetData } = props;
  console.log(data);
  const location = useLocation();
  const navigate = useNavigate();
  const { program, event } = useParams();

  const match = data.pages.find((item: any) => location.pathname === item.path);

  if (!match) {
    navigate(`/${program}/${event}`);
  }

  return (
    <Page
      onSetData={onSetData}
      meta={data.meta}
      page={{ title: match?.data.title || "" }}
    >
      {match.type === "app" && <AppPage {...match} />}
      {match.type === "connect" && <ConnectPage {...match} />}
      {match.type === "contacts" && <ContactsPage {...match} />}
      {match.type === "embedded" && <EmbeddedPage {...match} />}
      {match.type === "grid" && <GridPage {...match} />}
      {match.type === "image" && <ImagePage {...match} />}
      {match.type === "schedule" && <SchedulePage {...match} />}
      {match.type === "menu" && <MenuPage {...match} />}
      {match.type === "video" && <VideoPage {...match} />}
    </Page>
  );
};
