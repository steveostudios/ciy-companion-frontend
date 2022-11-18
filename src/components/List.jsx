import styled from "@emotion/styled";

const shared = {
  padding: "0 4rem",
  marginTop: "4rem",
  listStyle: "none",
  alignSelf: "center",
  flex: 1,
  height: "inherit",
  // maxHeight: "calc(100% - 8rem)",
  overflowY: "auto",
  width: "100%",
  boxSizing: "border-box",
  // li: {
  //   a: {
  //     color: "var(--white)",
  //     textDecoration: "none",
  //     display: "flex",
  //     width: "inherit",
  //     height: "inherit",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     minHeight: "3rem",
  //     padding: "1rem",
  //     fontFamily: "PragmaticaExtended-ExtraBold",
  //     textTransform: "uppercase",
  //   },
  //   "a:hover": {
  //     backgroundColor: "var(--white)",
  //     color: "var(--black)",
  //   },
  // },
};

export const BorderList = styled("ul")({
  ...shared,
  border: "1px solid var(--white)",
  margin: "0 4rem",
  width: "calc(100% - 8rem)",
  padding: 0,
});

export const ExposedList = styled("ul")({
  ...shared,
});

export const NormalList = styled("ul")({
  ...shared,
  marginTop: "2rem",
  padding: "0 2rem",
  maxHeight: "calc(100% - 2rem)",
});
