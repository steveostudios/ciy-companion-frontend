import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import FacebookIcon from "./../img/icons/facebook.svg"
import InstagramIcon from "./../img/icons/instagram.svg"
import SpotifyIcon from "./../img/icons/microphone.svg"
import PodcastIcon from "./../img/icons/spotify.svg"
import styled from "@emotion/styled";


const Connect = (props) => {
  const [event] = useContext(EventContext);

  const icons = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    spotify: SpotifyIcon,
    podcast: PodcastIcon
  }

  const connections = Object.entries(event.acf.connect).map((contact, i) => {return {service: contact[0], url: contact[1]}})

  return (
    <Page title="Connect">
      <Connections>
        {connections.length && connections.map((connection, i) => (
          <Connection key={i}>
            <a href={connection.url}><img src={icons[connection.service]} alt={connection.service} /></a>
          </Connection>
          ))}
      </Connections>
    </Page>
  );
}

export default Connect;

const Connections = styled("ul")({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  margin: 0,
  display: "flex",
  justifyContent: "space-evenly",
  maxHeight: "calc(100% - 18rem)",
  overflowY: "auto",
  width: "100%",
  maxWidth: "40rem",
  gap: "2rem",
})

const Connection = styled("li")({
  marginBottom: "2rem",
  display: "flex",
  gap: "2rem",
})

