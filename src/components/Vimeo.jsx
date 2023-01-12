import styled from "@emotion/styled";

const Vimeo = (props) => {
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

export default Vimeo;

const Container = styled("div")({
  display: "flex",
  flex: 1,
  height: "100%",
  padding: "0 !important",
});

const Video = styled("iframe")({
  margin: "0 2rem",
  width: "calc(100% - 4rem) !important",
  height: "inherit",
  // height: "calc(100vh - 24rem) !important",
});
