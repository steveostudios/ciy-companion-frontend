import styled from "@emotion/styled";
import { StyledDivContent } from "../components/StyledDivContent";
import ButtonAppleStore from "./../img/ButtonAppleStore.svg";
import ButtonGooglePlay from "./../img/ButtonGooglePlay.svg";

interface Props {
  title: string;
  icon: string;
  apple_store_url?: string;
  google_play_store_url?: string;
  description: string;
  name: string;
}

export const AppPage: React.FC<Props> = (props) => {
  return (
    <>
      <AppHeader>
        <img src={props.icon} alt={props.name} />
        <AppButtons>
          {props.apple_store_url && (
            <a href={props.apple_store_url}>
              <img src={ButtonAppleStore} alt={props.name} />
            </a>
          )}
          {props.google_play_store_url && (
            <a href={props.google_play_store_url}>
              <img src={ButtonGooglePlay} alt={props.name} />
            </a>
          )}
        </AppButtons>
      </AppHeader>
      <H1>{props.name}</H1>
      <StyledDivContent content={props.description} />
    </>
  );
};

const AppHeader = styled("div")({
  display: "flex",
  marginBottom: "2rem",
  img: {
    width: "120px",
  },
});

const AppButtons = styled("div")({
  flex: 1,
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  a: {
    img: {
      width: "180px",
    },
  },
});

const H1 = styled("h1")({
  padding: 0,
  margin: 0,
});
