import ConvosAppIcon from "./../img/ConvosAppIcon.png";
import ButtonAppleStore from "./../img/ButtonAppleStore.png";
import ButtonGooglePlay from "./../img/ButtonGooglePlay.png";
import { useContext } from "react";
import { EventContext } from "../App";
import Page from "../components/Page";
import { AppButtons, AppHeader } from "../components/AppComponents";

const Convos = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page title="Convos" background="light">
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
        <p>Guided small group Convos</p>
        <p>By CIY</p>
        <p>
          Convos is an app that helps spark great conversations. It’s developed
          to draw people together through conversations – with games and videos
          and polls and open-ended questions that work perfectly for small
          groups who can look each other in the eye and dig deep into the kinds
          of conversations that come when people trust one another. As your
          group sits face-to-face, the Convos app helps facilitate
          conversations. Just pass the mobile device around to each person in
          the circle and follow along with the prompts to lead the next part of
          the conversation. Built on the idea that everyone wants to be liked,
          to feel safe, to be seen and heard, and ultimately to be known and
          loved – Convos is the app that teaches people that conversations are
          not lectures or debates or arguments. In conversations, people care.
        </p>
      </div>
    </Page>
  );
};

export default Convos;
