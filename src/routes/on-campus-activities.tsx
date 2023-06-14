import { getEvent } from "../helpers/event";
import { ContentWithMenu } from "../pages/ContentWithMenuPage";

const OnCampusActivities: React.FC = () => {
  const event = getEvent();

  const data_prefix = event?.acf?.on_campus_activities;

  return (
    <ContentWithMenu
      title="On-Campus Activities"
      content={data_prefix.content}
    />
  );
};

export default OnCampusActivities;
