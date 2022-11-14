import styled from "@emotion/styled"
import ConvosAppIcon from "./../img/ConvosAppIcon.png"
import ButtonAppleStore from "./../img/ButtonAppleStore.png"
import ButtonGooglePlay from "./../img/ButtonGooglePlay.png"
import Page from "../components/Page";

const Convos = (props) => {
  return (
    <Page pagetype="light" title="Convos">
      <AppHeader>
        <img src={ConvosAppIcon} alt="Convos" />
        <AppButtons>
          <img src={ButtonAppleStore} alt="Convos" />
          <img src={ButtonGooglePlay} alt="Convos" />
        </AppButtons>
      </AppHeader>
      <h1>Convos</h1>
      <p>Guided small group Convos</p>
      <p>By CIY</p>
      <p>Convos is an app that helps spark great conversations. It’s developed to draw people together through conversations – with games and videos and polls and open-ended questions that work perfectly for small groups who can look each other in the eye and dig deep into the kinds of conversations that come when people trust one another. As your group sits face-to-face, the Convos app helps facilitate conversations. Just pass the mobile device around to each person in the circle and follow along with the prompts to lead the next part of the conversation. Built on the idea that everyone wants to be liked, to feel safe, to be seen and heard, and ultimately to be known and loved – Convos is the app that teaches people that conversations are not lectures or debates or arguments. In conversations, people care.</p>
      </Page>
  );
}

export default Convos;

const AppHeader = styled("div")({
  display: "flex",
  width: "inherit"
})

const AppButtons = styled("div")({
  flex: 1,
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
})
