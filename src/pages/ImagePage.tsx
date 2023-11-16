import styled from "@emotion/styled";
import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";

import { ImagePage as PageProps } from "../helpers/types";

export const ImagePage: React.FC<PageProps> = (props) => {
  return (
    <Container>
      {props.data.image && (
        <TransformWrapper
          maxScale={15}
          minScale={0.15}
          centerOnInit={true}
          centerZoomedOut={true}
          initialScale={0.15}
        >
          <TransformComponent>
            <img src={props.data.image} alt={props.data.title} />
          </TransformComponent>
        </TransformWrapper>
      )}
      {!props.data.image && (
        <p>"The image will be uploaded soon. Please check back later."</p>
      )}
    </Container>
  );
};

const Container = styled("div")({
  width: "100%",
});
