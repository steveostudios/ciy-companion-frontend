import { Link } from "react-router-dom";
import BorderList from "../components/BorderList";
import { useContext, useEffect } from "react";
import { EventContext } from "../App";
import { getLogoById } from "../helpers/data";
import Page from "../components/Page";
import styled from "@emotion/styled";

export default function Root() {
  const [event, setEvent] = useContext(EventContext);

  useEffect(() => {
    if (event !== null) {
      setEvent(null)
    }
  }, [event, setEvent])

  return (
    <Page hideHeader>
      <H1>Choose an Event</H1>
      <BorderList>
        <LI><Link to="/move">{getLogoById(4)}</Link></LI>
        <LI><Link to="/mix">{getLogoById(5)}</Link></LI>
        <LI><Link to="/superstart">{getLogoById(6)}</Link></LI>
      </BorderList>
    </Page>
  );
}

const H1 = styled("h1")({
  fontSize: "48px",
  textTransform: "uppercase",
  fontFamily: "PragmaticaExtended-ExtraBold",
})

const LI = styled("li")({
  padding: "2rem 0"
})