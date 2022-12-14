import styled from "@emotion/styled";

const Vimeo = (props) => {
  return (
    <>
      {props.id && (
        <Container
          title="vimeo-player"
          src={`https://player.vimeo.com/video/${props.id}`}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></Container>
      )}
    </>
  );
};

export default Vimeo;

const Container = styled("iframe")({
  margin: "0 2rem",
  width: "calc(100% - 4rem) !important",
  height: "calc(100vh - 24rem) !important",
});
