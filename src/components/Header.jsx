import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { getHumanReadableDateRange } from "../helpers/data";
import { Logo } from "./Logo";
import { getEvent } from "../helpers/event";

const Header = () => {
  const { program } = useParams();
  const event = getEvent(true);

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
