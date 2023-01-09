import ConvosAppIcon from "./../img/ConvosAppIcon.png";
import ButtonAppleStore from "./../img/ButtonAppleStore.png";
import ButtonGooglePlay from "./../img/ButtonGooglePlay.png";
import { useContext } from "react";
import { EventContext } from "../App";
import Page from "../components/Page";
import { AppButtons, AppHeader } from "../components/AppComponents";
import { StyledDivContent } from "../components/StyledDivContent";

const Convos = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="Convos"
      background="light"
      data={
        event?.acf?.convos_apple_store_url && event?.acf?.convos_google_play_url
      }
    >
      <div>
        <AppHeader>
          <img src={ConvosAppIcon} alt="Convos" />
          <AppButtons>
            {event?.acf?.convos_apple_store_url && (
              <a href={event.acf.convos_apple_store_url}>
                <img src={ButtonAppleStore} alt="Convos" />
              </a>
            )}
            {event?.acf?.convos_google_play_url && (
              <a href={event.acf.convos_google_play_url}>
                <img src={ButtonGooglePlay} alt="Convos" />
              </a>
            )}
          </AppButtons>
        </AppHeader>
        <h1>Convos</h1>
        <StyledDivContent content={event?.acf?.convos_description} />
      </div>
    </Page>
  );
};

export default Convos;
