import styled from "@emotion/styled";
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

import { ImagePage as PageProps } from "../helpers/types";
import React, { useRef } from "react";

export const ImagePage: React.FC<PageProps> = (props) => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  // const zoomToImage = () => {
  //   if (transformComponentRef.current) {
  //     const { zoomToElement } = transformComponentRef.current;
  //     zoomToElement("imgExample");
  //   }
  // };

  return (
    <Container>
      {props.data.image && (
        <TransformWrapper
          ref={transformComponentRef}
          // centerOnInit={true}
          // centerZoomedOut={true}
          initialScale={1}
          minScale={0.5}
          limitToBounds={true}
          // maxScale={15}
          // minScale={0.15}
          // centerOnInit={true}
          // centerZoomedOut={true}
          // initialScale={0.5}
        >
          {(utils) => (
            <>
              <Controls>
                <Control onClick={() => utils.zoomIn()}>+</Control>
                <Control onClick={() => utils.zoomOut()}>-</Control>
                <Control onClick={() => utils.resetTransform()}>x</Control>
              </Controls>
              <TransformComponent>
                <img
                  src={props.data.image}
                  alt={props.data.title}
                  style={{ width: "100%" }}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      )}
      {!props.data.image && (
        <p>"The image will be uploaded soon. Please check back later."</p>
      )}
    </Container>
  );
};

const Container = styled("div")({
  backgroundColor: "#eee",
  height: "100%",
  overflow: "hidden",
  ".react-transform-wrapper": {
    width: "calc(100% -2rem)",
    height: "calc(100% - 4rem)",
  },
  "> *": {},
});

const Controls = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  width: "100%",
  height: "4rem",
  backgroundColor: "rgba(0,0,0,0.1)",
});

const Control = styled("button")({
  backgroundColor: "transparent",
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  color: "black",
  cursor: "pointer",
  fontSize: "2rem",
  fontWeight: "bold",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
