import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import {Spinner} from "./../components/Spinner"
import styled from "@emotion/styled";

const DamageReport = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page padding={0} title="Damage Report" background="dark">
      <SpinnerStyled />
      {event?.acf?.damage_report_url && <iframe frameborder="0" title="Damage Report" src={event.acf.damage_report_url}/>}
    </Page>
  );
}

export default DamageReport;

const SpinnerStyled = styled(Spinner)({
  position: "absolute",
})