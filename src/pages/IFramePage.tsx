import IFrame from "../components/IFrame";
import Page from "../components/Page";

interface Props {
  title: string;
  url: string;
}

export const IFramePage: React.FC<Props> = (props) => {
  return (
    <Page padding={0} title={props.title} background="light" data={props.url}>
      <IFrame url={props.url} title={props.title} />
    </Page>
  );
};
