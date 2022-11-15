import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";

const DamageReport = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page padding={0} title="Damage Report">
      {event?.acf?.damage_report_url && <iframe frameborder="0" title="damage-report" src={event.acf.damage_report_url}/>}
    </Page>
  );
}

export default DamageReport;
