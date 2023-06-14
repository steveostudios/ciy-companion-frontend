import {
  TransformComponent,
  TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";
import Page from "../components/Page";

interface Props {
  title: string;
  image: string;
  missingImage?: string;
}

export const ImageTransformPage: React.FC<Props> = (props) => {
  return (
    <Page title={props.title} background="light" data={props.image}>
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
        <p>
          {props.missingImage ||
            "The image will be uploaded soon. Please check back later."}
        </p>
      )}
    </Page>
  );
};