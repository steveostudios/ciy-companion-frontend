import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
import { ContentWithMenu } from "../pages/ContentWithMenuPage";

const Engage: React.FC = () => {
  const { program, slug, page, resourceId } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.engage;
  const url_prefix = `/${program}/${slug}/engage`;

  // About
  if (page === "about") {
    return (
      <ContentWithMenu
        title="What is Engage?"
        content={data_prefix.about.content}
        buttons={[
          { title: "Learn More", url: data_prefix.about.learn_more_url },
        ]}
      />
    );
  }

  // Dates & Locations => individual
  if (page === "dates-locations" && resourceId) {
    return (
      <ContentWithMenu
        title="Dates & Locations"
        content={data_prefix.dates_locations.buttons[resourceId].content}
      />
    );
  }

  // Dates & Locations
  if (page === "dates-locations") {
    return (
      <ContentWithMenu
        title="Dates & Locations"
        content={data_prefix.dates_locations.content}
        buttons={data_prefix.dates_locations.buttons.map(
          (obj: any, i: never) => ({
            title: obj.name,
            url: `${url_prefix}/dates-locations/${i}`,
            content: obj.description,
          })
        )}
      />
    );
  }

  // Join an Engage Team
  if (page === "join") {
    return (
      <ContentWithMenu
        title="Join an Engage Team"
        content={data_prefix.join.content}
        buttons={[
          { title: data_prefix.join.name, url: data_prefix.join.join_url },
        ]}
      />
    );
  }

  // Engage Team Resources => individual
  if (page === "youth-leaders" && resourceId) {
    let content = "";
    if (resourceId === "mission-trip-training") {
      content = data_prefix.youth_leaders.mission_trip_training.content;
    }
    if (resourceId === "bring-your-group-on-a-trip") {
      content = data_prefix.youth_leaders.bring_your_group_on_a_trip.content;
    }

    return <ContentWithMenu title="Youth Leaders" content={content} />;
  }

  // Engage Team Resources
  if (page === "youth-leaders") {
    return (
      <ContentWithMenu
        title="Youth Leaders"
        content={data_prefix.youth_leaders.content}
        buttons={[
          {
            title: data_prefix.youth_leaders.mission_trip_training.button_label,
            url: `${url_prefix}/youth-leaders/mission-trip-training`,
          },
          {
            title:
              data_prefix.youth_leaders.bring_your_group_on_a_trip.button_label,
            url: `${url_prefix}/youth-leaders/bring-your-group-on-a-trip`,
          },
        ]}
      />
    );
  }

  // Resources => individual
  if (page === "resources" && resourceId) {
    let content = "";
    if (resourceId === "fundraising") {
      content = data_prefix.resources.fundraising.content;
    }
    if (resourceId === "talk-to-parents") {
      content = data_prefix.resources.talk_to_parents.content;
    }
    if (resourceId === "for-parents") {
      content = data_prefix.resources.for_parents.content;
    }

    return <ContentWithMenu title="Resources" content={content} />;
  }

  // Resources
  if (page === "resources") {
    return (
      <ContentWithMenu
        title="Resources"
        content={data_prefix.resources.content}
        buttons={[
          {
            title: "Fundraising",
            url: `${url_prefix}/resources/fundraising`,
          },
          {
            title: "Talk to Parents",
            url: `${url_prefix}/resources/talk-to-parents`,
          },
          {
            title: "For Parents",
            url: `${url_prefix}/resources/for-parents`,
          },
        ]}
      />
    );
  }

  return null;
};

export default Engage;
