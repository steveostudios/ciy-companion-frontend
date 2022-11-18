import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import IFrame from "../components/IFrame";

const DamageReport = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page padding={0} title="Damage Report" background="dark">
      <IFrame url={event?.acf?.damage_report_url} title="Damage Report" />
    </Page>
  );
};

export default DamageReport;
