import styled from "@emotion/styled";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../App";
import { Logo } from "./Logo";

const Header = () => {
  const eventContext = useContext(EventContext);
  const { program } = useParams();
  const event = eventContext ? eventContext[0] : null;

  console.log(event);
  return (
    <Nav>
      {program && <Logo slug={program} />}
      {event &&
        `${event?.title?.rendered} | ${event?.acf?.location} | ${event?.acf?.start_date}`}
    </Nav>
  );
};

export default Header;

const Nav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--black)",
  height: "10rem",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
  color: "var(--white)",
  fontFamily: "PragmaticaExtended-ExtraBold",
  gap: "1rem",
  img: {
    height: "3rem",
  },
});
