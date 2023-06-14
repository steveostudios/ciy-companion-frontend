import Page from "../components/Page";
import { AppButtons, AppHeader } from "../components/AppComponents";
import { StyledDivContent } from "../components/StyledDivContent";
import ButtonAppleStore from "./../img/ButtonAppleStore.svg";
import ButtonGooglePlay from "./../img/ButtonGooglePlay.svg";

interface Props {
  title: string;
  icon: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  description: string;
}

export const AppPage: React.FC<Props> = (props) => {
  return (
    <Page
      padding={0}
      title={props.title}
      background="light"
      data={props.title && props.description && props.icon}
    >
      <div>
        <AppHeader>
          <img src={props.icon} alt={props.title} />
          <AppButtons>
            {props.appStoreUrl && (
              <a href={props.appStoreUrl}>
                <img src={ButtonAppleStore} alt={props.title} />
              </a>
            )}
            {props.googlePlayUrl && (
              <a href={props.googlePlayUrl}>
                <img src={ButtonGooglePlay} alt={props.title} />
              </a>
            )}
          </AppButtons>
        </AppHeader>
        <h1>{props.title}</h1>
        <StyledDivContent content={props.description} />
      </div>{" "}
    </Page>
  );
};
