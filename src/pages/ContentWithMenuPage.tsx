import BorderButton, {
  BorderButtonGroup,
  ButtonBackground,
} from "../components/BorderButton";
import Page from "../components/Page";
import { StyledDivContent } from "../components/StyledDivContent";

interface Props {
  title: string;
  heading?: string;
  content?: string;
  buttons?: Button[];
}

export interface Button {
  title: string;
  url: string;
  content?: string;
}

export const ContentWithMenu: React.FC<Props> = (props) => {
  return (
    <Page
      title={props.title}
      background="light"
      data={props.content || (props.buttons && props.buttons.length > 0)}
    >
      <div>
        {props.heading && <h2>{props.heading}</h2>}
        {props.content && <StyledDivContent pad content={props.content} />}
        {props.buttons && props.buttons.length > 0 && (
          <BorderButtonGroup>
            {props.buttons.map((button, i) => (
              <div key={i}>
                {button.content && (
                  <StyledDivContent pad content={button.content} />
                )}
                <BorderButton
                  background={ButtonBackground.LIGHT}
                  title={button.title}
                  href={button.url}
                  url={button.url}
                />
              </div>
            ))}
          </BorderButtonGroup>
        )}
      </div>
    </Page>
  );
};
