import styled from "@emotion/styled";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../App";
import { getHumanReadableDateRange } from "../helpers/data";
import { Logo } from "./Logo";

const Header = () => {
  const eventContext = useContext(EventContext);
  const { program } = useParams();
  const event = eventContext ? eventContext[0] : null;

  return (
    <Nav>
      {program && <Logo slug={program} />}
      {program !== "engage" && (
        <p>{event && `${event?.title?.rendered} | ${event?.acf?.location}`}</p>
      )}
      {program !== "engage" && (
        <p>
          {event &&
            getHumanReadableDateRange(
              event?.acf?.start_date,
              event?.acf?.end_date
            )}
        </p>
      )}
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
  img: {
    marginBottom: "1rem",
    height: "3rem",
  },
  p: {
    margin: 0,
    fontSize: "14px",
  },
});
