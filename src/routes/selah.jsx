import SelahAppIcon from "./../img/SelahAppIcon.png";
import ButtonAppleStore from "./../img/ButtonAppleStore.svg";
import ButtonGooglePlay from "./../img/ButtonGooglePlay.svg";
import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { AppButtons, AppHeader } from "../components/AppComponents";
import { StyledDivContent } from "../components/StyledDivContent";

const Selah = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="SELAH"
      background="light"
      data={
        event?.acf?.selah_apple_store_url && event?.acf?.selah_google_play_url
      }
    >
      <div>
        <AppHeader>
          <img src={SelahAppIcon} alt="SELAH" />
          <AppButtons>
            {event?.acf?.selah_apple_store_url && (
              <a href={event.acf.selah_apple_store_url}>
                <img src={ButtonAppleStore} alt="SELAH" />
              </a>
            )}
            {event?.acf?.selah_google_play_url && (
              <a href={event.acf.selah_google_play_url}>
                <img src={ButtonGooglePlay} alt="SELAH" />
              </a>
            )}
          </AppButtons>
        </AppHeader>
        <h1>SELAH</h1>
        <p>By CIY</p>
        <StyledDivContent content={event?.acf?.selah_description} />
      </div>
    </Page>
  );
};

export default Selah;
