import Page from "../components/Page";
import Vimeo from "../components/Vimeo";

interface Props {
  title: string;
  videoId: string;
}

export const VideoPage: React.FC<Props> = (props) => {
  return (
    <Page
      padding={0}
      title={props.title}
      background="light"
      data={props.videoId}
    >
      <Vimeo id={props.videoId} />
    </Page>
  );
};
