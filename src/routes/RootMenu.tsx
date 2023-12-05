import styled from "@emotion/styled";
import { Logo } from "../components/Logo";
import { NormalList } from "../components/List";
// import { clearEvent, getEvent } from "../helpers/event";
// import { useEffect } from "react";
// import { clearColors, getColors } from "../helpers/colors";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { clearEvent } from "../helpers/event";
import { Page } from "../components/Page";

export default function RootMenu() {
  // const event = getEvent();
  // const colors = getColors();

  useEffect(() => {
    //   if (event !== null) {
    clearEvent();
    //   }
    //   if (colors !== null) {
    //     clearColors();
    //   }
  }, []);

  return (
    <Page>
      <H1>Choose an Event</H1>
      <NormalList showBorder>
        <ListItem>
          <Link to="/move">
            <Logo slug="move" size={12} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/mix">
            <Logo slug="mix" size={12} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/superstart">
            <Logo slug="superstart" size={20} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/engage/engage-info">
            <Logo slug="engage" size={18} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/yms/yms">
            <Logo slug="yms" size={12} />
          </Link>
        </ListItem>
      </NormalList>
    </Page>
  );
}

const H1 = styled("h1")({
  fontSize: "48px",
  textAlign: "center",
  textTransform: "uppercase",
  fontFamily: "PragmaticaExtended-ExtraBold",
  padding: "0",
  margin: "2rem 0",
});

const ListItem = styled("li")({
  height: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  a: {
    textDecoration: "none",
    color: "var(--white)",
  },
});
