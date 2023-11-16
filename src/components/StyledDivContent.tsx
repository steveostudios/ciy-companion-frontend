import styled from "@emotion/styled";
import React from "react";

interface Props {
  content?: string;
  pad?: boolean;
  style?: any;
  color?: string;
}

export const StyledDivContent: React.FC<Props> = (props) => {
  return (
    <StyledContent
      style={props.style}
      pad={props.pad || false}
      color={props.color || "black"}
      dangerouslySetInnerHTML={{
        __html: props.content || "",
      }}
    />
  );
};

const StyledContent = styled("div")(
  (props: { pad: boolean; color: string }) => ({
    paddingLeft: props.pad ? "2rem" : 0,
    paddingRight: props.pad ? "2rem" : 0,
    color: `var(--${props.color})`,
    h2: {
      fontSize: "16px",
      textTransform: "uppercase",
      fontFamily: "PragmaticaExtended-ExtraBold",
    },
    h3: {
      fontSize: "12px",
      textTransform: "uppercase",
      fontFamily: "PragmaticaExtended-ExtraBold",
    },
    ul: {
      padding: "1rem 3rem",
    },
    paddingBottom: "3rem",
  })
);
