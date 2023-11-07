import styled from "@emotion/styled";
import { VideoPage as PageProps } from "../helpers/types";

export const VideoPage: React.FC<PageProps> = (props) => {
  return (
    <Container>
      {props.data.video && (
        <Video
          title="vimeo-player"
          src={`https://player.vimeo.com/video/${props.data.video}`}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></Video>
      )}
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  flex: 1,
  height: "100%",
  padding: "0 !important",
});

const Video = styled("iframe")({
  width: "100%",
  height: "inherit",
});
