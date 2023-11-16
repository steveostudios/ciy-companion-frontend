import styled from "@emotion/styled";
import { StyledDivContent } from "../components/StyledDivContent";
import ButtonAppleStore from "./../img/ButtonAppleStore.svg";
import ButtonGooglePlay from "./../img/ButtonGooglePlay.svg";
import { AppPage as PageProps } from "../helpers/types";

export const AppPage: React.FC<PageProps> = (props) => {
  return (
    <>
      <AppHeader>
        <img src={props.data.icon} alt={props.data.name} />
        <AppButtons>
          {props.data.appleStoreUrl && (
            <a href={props.data.appleStoreUrl}>
              <img src={ButtonAppleStore} alt={props.data.name} />
            </a>
          )}
          {props.data.googlePlayStoreUrl && (
            <a href={props.data.googlePlayStoreUrl}>
              <img src={ButtonGooglePlay} alt={props.data.name} />
            </a>
          )}
        </AppButtons>
      </AppHeader>
      <H1>{props.data.name}</H1>
      <StyledDivContent content={props.data.description} />
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
