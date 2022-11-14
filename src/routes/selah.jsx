import styled from "@emotion/styled"
import SelahAppIcon from "./../img/SelahAppIcon.png"
import ButtonAppleStore from "./../img/ButtonAppleStore.png"
import ButtonGooglePlay from "./../img/ButtonGooglePlay.png"
import Page from "../components/Page";

const Selah = (props) => {
  return (
      <Page pageType="light" title="SELAH">
      <AppHeader>
        <img src={SelahAppIcon} alt="SELAH" />
        <AppButtons>
          <img src={ButtonAppleStore} alt="Selah" />
          <img src={ButtonGooglePlay} alt="Selah" />
        </AppButtons>
      </AppHeader>
      <h1>SELAH</h1>
      <p>By CIY</p>
      <p>Selah is a personal devotion experience brought to you by Christ in Youth Æffect. Designed for Kingdom workers looking to set aside time each day to stop, exhale, look, ask, and hear the word, Selah exists to spark the habit of conversing with God. Each experience series is a week long, helping you integrate prayer and scripture into your mobile life. Choose from a growing library of topical and Biblical meditations and start a conversation with God today.</p>
      </Page>
  );
}

export default Selah;

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
