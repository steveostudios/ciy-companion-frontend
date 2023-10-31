import styled from "@emotion/styled";

export const NormalList = styled("ul")(
  (props: { color?: string; showBorder?: boolean }) => ({
    padding: 0,
    margin: 0,
    listStyle: "none",
    alignSelf: "center",
    flex: 1,
    height: "inherit",
    overflowY: "auto",
    width: "100%",
    boxSizing: "border-box",
    borderSize: "1px",
    borderStyle: "solid",
    borderColor: props.showBorder ? "var(--white)" : "transparent",
  })
);
