import styled from "@emotion/styled";

export const StyledDivContent = (props) => {
  return (
    <StyledContent
      pad={props.pad}
      dangerouslySetInnerHTML={{
        __html: props.content || "",
      }}
    />
  );
};

const StyledContent = styled("div")(
  {
    color: "var(--black)",
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
  },
  (props) => ({
    paddingLeft: props.pad ? "2rem" : 0,
    paddingRight: props.pad ? "2rem" : 0,
  })
);
