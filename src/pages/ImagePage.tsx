import styled from "@emotion/styled";
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";

interface Props {
  title: string;
  image: string;
}

export const ImagePage: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.image && (
        <TransformWrapper
          maxScale={15}
          minScale={0.15}
          centerOnInit={true}
          centerZoomedOut={true}
          initialScale={0.15}
        >
          <TransformComponent>
            <img src={props.image} alt={props.title} />
          </TransformComponent>
        </TransformWrapper>
      )}
      {!props.image && (
        <p>"The image will be uploaded soon. Please check back later."</p>
      )}
    </Container>
  );
};

const Container = styled("div")({
  width: "100%",
});
