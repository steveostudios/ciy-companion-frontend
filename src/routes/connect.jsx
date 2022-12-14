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
    <Page
      title="Connect"
      background="light"
      data={connections.filter((item) => item.url).length > 0}
    >
      <NormalList>
        {connections.length &&
          connections.map((connection, i) => (
            <Connection key={i}>
              <ConnectionLink href={connection.url}>
                <ConnectionIcon
                  src={icons[connection.service]}
                  alt={connection.service}
                />
                <ConnectionHandle>{connection.service}</ConnectionHandle>
              </ConnectionLink>
            </Connection>
          ))}
      </NormalList>
    </Page>
  );
};

export default Connect;

const Connection = styled("li")({
  // marginBottom: "4rem",
  margin: "2rem",
  display: "flex",
});

const ConnectionLink = styled("a")({
  display: "flex",
  gap: "2rem",
  textDecoration: "none",
});

const ConnectionIcon = styled("img")({
  // marginRight: "1rem",
  width: "3rem",
});
const ConnectionHandle = styled("a")({
  color: "var(--black)",
  fontSize: "18px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  display: "flex",
  textTransform: "uppercase",
  textDecoration: "none",
});
