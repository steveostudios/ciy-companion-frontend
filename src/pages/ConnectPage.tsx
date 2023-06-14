import styled from "@emotion/styled";
import { NormalList } from "../components/List";
import Page from "../components/Page";
import FacebookIcon from "./../img/icons/facebook.svg";
import InstagramIcon from "./../img/icons/instagram.svg";
import SpotifyIcon from "./../img/icons/spotify.svg";
import PodcastIcon from "./../img/icons/microphone.svg";
import TiktokIcon from "./../img/icons/tiktok.svg";

export interface ConnectionProps {
  url: string;
  service: string;
}

interface Props {
  title: string;
  connections: ConnectionProps[];
}

export const ConnectPage: React.FC<Props> = (props) => {
  const icons: any = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    spotify: SpotifyIcon,
    podcast: PodcastIcon,
    tiktok: TiktokIcon,
  };

  return (
    <Page
      padding={0}
      title={props.title}
      background="light"
      data={props.connections && props.connections.length > 0}
    >
      <NormalList>
        {props.connections.length &&
          props.connections
            .filter((connection) => connection.url)
            .map((connection, i) => (
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

const Connection = styled("li")({
  margin: "2rem",
  display: "flex",
});

const ConnectionLink = styled("a")({
  display: "flex",
  gap: "2rem",
  textDecoration: "none",
});

const ConnectionIcon = styled("img")({
  width: "3rem",
});
const ConnectionHandle = styled("div")({
  color: "var(--black)",
  fontSize: "18px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  display: "flex",
  textTransform: "uppercase",
  textDecoration: "none",
});
