import styled from "@emotion/styled";

interface Props {
  title: string;
  id: string;
}

export const VideoPage: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.id && (
        <Video
          title="vimeo-player"
          src={`https://player.vimeo.com/video/${props.id}`}
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
