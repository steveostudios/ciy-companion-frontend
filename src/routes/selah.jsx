import SelahAppIcon from "./../img/SelahAppIcon.png"
import ButtonAppleStore from "./../img/ButtonAppleStore.png"
import ButtonGooglePlay from "./../img/ButtonGooglePlay.png"
import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { AppButtons, AppHeader } from "../components/AppComponents";


const Selah = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page title="SELAH">
      <AppHeader>
        <img src={SelahAppIcon} alt="SELAH" />
        <AppButtons>
          {event?.acf?.selah_apple_store_url && <a href={event.acf.selah_apple_store_url}><img src={ButtonAppleStore} alt="SELAH" /></a>}
          {event?.acf?.selah_google_play_url && <a href={event.acf.selah_google_play_url}><img src={ButtonGooglePlay} alt="SELAH" /></a>}
        </AppButtons>
      </AppHeader>
      <h1>SELAH</h1>
      <p>By CIY</p>
      <p>Selah is a personal devotion experience brought to you by Christ in Youth Æffect. Designed for Kingdom workers looking to set aside time each day to stop, exhale, look, ask, and hear the word, Selah exists to spark the habit of conversing with God. Each experience series is a week long, helping you integrate prayer and scripture into your mobile life. Choose from a growing library of topical and Biblical meditations and start a conversation with God today.</p>
    </Page>
  );
}

export default Selah;
