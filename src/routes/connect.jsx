import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import FacebookIcon from "./../img/icons/facebook.svg";
import InstagramIcon from "./../img/icons/instagram.svg";
import SpotifyIcon from "./../img/icons/microphone.svg";
import PodcastIcon from "./../img/icons/spotify.svg";
import styled from "@emotion/styled";
import { NormalList } from "../components/List";

const Connect = (props) => {
  const [event] = useContext(EventContext);

  const icons = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    spotify: SpotifyIcon,
    podcast: PodcastIcon,
  };

  const connections = Object.entries(event.acf.connect).map((contact, i) => {
    return { service: contact[0], url: contact[1] };
  });

  return (
    <Page title="Connect" background="light">
      <NormalList>
        {connections.length &&
          connections.map((connection, i) => (
            <Connection key={i}>
              <a href={connection.url}>
                <ConnectionIcon
                  src={icons[connection.service]}
                  alt={connection.service}
                />
                <ConnectionHandle>{connection.service}</ConnectionHandle>
              </a>
            </Connection>
          ))}
      </NormalList>
    </Page>
  );
};

export default Connect;

const Connection = styled("li")({
  marginBottom: "2rem",
  display: "flex",
  gap: "2rem",
});

const ConnectionIcon = styled("img")({
  marginRight: "2rem",
  width: "3rem",
});
const ConnectionHandle = styled("div")({
  color: "var(--black)",
  fontSize: "18px",
});
