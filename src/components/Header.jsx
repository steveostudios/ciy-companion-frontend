import styled from "@emotion/styled"
import { useContext } from "react";
import { EventContext } from "../App";
import { getLogo } from "../helpers/data";

const Header = () => {
  const eventContext = useContext(EventContext);
  const event = eventContext ? eventContext[0] : null;
  // const event = eventContext?.[0];

  console.log(event)
  return (
    <Nav>
      {event && getLogo(event.program[0])}
      {event && `${event?.title?.rendered} | ${event?.acf?.location} | ${event?.acf?.start_date}` }
      </Nav>
  );
}

export default Header;

const Nav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--black)",
  height: "10rem",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  gap: "1rem",
  "img": {
    height: "3rem"
  }
})
