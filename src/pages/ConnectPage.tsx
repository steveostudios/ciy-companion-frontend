import styled from "@emotion/styled";
import { NormalList } from "../components/List";
import { Icon } from "../components/Icon";
import { ConnectPage as PageProps } from "../helpers/types";

export const ConnectPage: React.FC<PageProps> = (props) => {
  return (
    <NormalList>
      {props.data.connections.length &&
        props.data.connections
          .filter((connection) => connection.url)
          .map((connection, i) => (
            <Connection key={i}>
              <ConnectionLink href={connection.url}>
                <Icon icon={connection.icon} size={4} />

                <ConnectionHandle>{connection.title}</ConnectionHandle>
              </ConnectionLink>
            </Connection>
          ))}
    </NormalList>
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
  color: "var(--black)",
  alignItems: "center",
});

const ConnectionHandle = styled("div")({
  color: "var(--black)",
  fontSize: "18px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  display: "flex",
  textTransform: "uppercase",
  textDecoration: "none",
});
