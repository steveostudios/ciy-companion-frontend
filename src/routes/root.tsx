import Page from "../components/Page";
import styled from "@emotion/styled";
import { Logo } from "../components/Logo";
import { BorderList } from "../components/List";
import BorderListButton from "../components/BorderListButton";
import { clearColors, clearEvent, getColors, getEvent } from "../helpers/event";
import { useEffect } from "react";

export default function Root() {
  const event = getEvent();
  const colors = getColors();

  useEffect(() => {
    if (event !== null) {
      clearEvent();
    }
    if (colors !== null) {
      clearColors();
    }
  }, [event, colors]);

  return (
    <Page hideHeader data>
      <div>
        <H1>Choose an Event</H1>
        <BorderList>
          <li>
            <BorderListButton
              href="/move"
              title={<Logo slug="move" height={32} />}
            />
          </li>
          {/* <li>
            <BorderListButton href="/yms" title={<Logo slug="yms" />} />
          </li> */}
          <li>
            <BorderListButton href="/mix" title={<Logo slug="mix" />} />
          </li>
          <li>
            <BorderListButton
              href="/superstart"
              title={<Logo slug="superstart" />}
            />
          </li>
          <li>
            <BorderListButton
              href="/engage/engage-info"
              title={<Logo slug="engage" />}
            />
          </li>
        </BorderList>
      </div>
    </Page>
  );
}

const H1 = styled("h1")({
  fontSize: "48px",
  textAlign: "center",
  textTransform: "uppercase",
  fontFamily: "PragmaticaExtended-ExtraBold",
});
