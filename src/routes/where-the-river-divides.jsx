import IFrame from "../components/IFrame";
import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";

const WhereTheRiverDivides = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="Where the River Divides"
      background="light"
      data={event?.acf?.where_the_river_divides.url}
    >
      <IFrame
        url={event?.acf?.where_the_river_divides.url}
        title="Where the River Divides"
      />{" "}
    </Page>
  );
};

export default WhereTheRiverDivides;
