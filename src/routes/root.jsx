import { useContext, useEffect } from "react";
import { EventContext } from "../App";
import Page from "../components/Page";
import styled from "@emotion/styled";
import { Logo } from "../components/Logo";
import { BorderList } from "../components/List";
import BorderListButton from "../components/BorderListButton";

export default function Root() {
  const [event, setEvent] = useContext(EventContext);

  useEffect(() => {
    if (event !== null) {
      setEvent(null);
    }
  }, [event, setEvent]);

  return (
    <Page hideHeader>
      <div>
        <H1>Choose an Event</H1>
        <BorderList>
          <li>
            <BorderListButton href="/move" title={<Logo slug="move" />} />
          </li>
          <li>
            <BorderListButton href="/mix" title={<Logo slug="mix" />} />
          </li>
          <li>
            <BorderListButton
              href="/superstart"
              title={<Logo slug="superstart" />}
            />
          </li>
        </BorderList>
      </div>
    </Page>
  );
}

const H1 = styled("h1")({
  fontSize: "48px",
  textTransform: "uppercase",
  fontFamily: "PragmaticaExtended-ExtraBold",
});
