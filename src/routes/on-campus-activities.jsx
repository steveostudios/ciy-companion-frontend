import { useContext } from "react";
import { EventContext } from "../App";
import Page from "../components/Page";
import { StyledDivContent } from "../components/StyledDivContent";

const OnCampusActivities = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="On-Campus Activities"
      background="light"
      data={event?.acf?.on_campus_activities.content}
    >
      <div>
        <StyledDivContent content={event?.acf?.on_campus_activities.content} />
      </div>
    </Page>
  );
};

export default OnCampusActivities;
