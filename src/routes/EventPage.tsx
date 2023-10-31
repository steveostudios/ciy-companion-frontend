import { useParams } from "react-router-dom";
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

interface Props {
  slug: string;
  type: string;
  title?: string;
  data: any;
  event: {
    title: string;
    location: string;
    startDate: string;
    endDate: string;
  };
}

export const EventPage: React.FC<Props> = (props) => {
  const { program } = useParams();

  return (
    <Page
      event={props.event}
      page={{ program: program || "", title: props.title || "" }}
    >
      {props.type === "contacts" && (
        <ContactsPage
          contacts={props.data.contacts}
          description={props.data.description}
        />
      )}
      {props.type === "schedule" && <SchedulePage days={props.data.days} />}
      {props.type === "menu" && (
        <MenuPage
          content={props.data.description}
          buttons={props.data.buttons}
        />
      )}
      {props.type === "connect" && (
        <ConnectPage connections={props.data.connections} />
      )}
      {props.type === "embedded" && (
        <EmbeddedPage title={props.title || ""} url={props.data.url} />
      )}
      {props.type === "video" && (
        <VideoPage title={props.title || ""} id={props.data.id} />
      )}
      {props.type === "image" && (
        <ImagePage title={props.title || ""} image={props.data.image} />
      )}
      {props.type === "grid" && (
        <GridPage
          title={props.title || ""}
          images={props.data.images}
          content={props.data.description}
        />
      )}
      {props.type === "app" && (
        <AppPage
          title={props.title || ""}
          name={props.data.name}
          icon={props.data.icon}
          description={props.data.description}
          apple_store_url={props.data.apple_store_url}
          google_play_store_url={props.data.google_play_store_url}
        />
      )}
    </Page>
  );
};
