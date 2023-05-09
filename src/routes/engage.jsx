import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton, { BorderButtonGroup } from "../components/BorderButton";

const Engage = (props) => {
  const { program, slug, page, resourceId } = useParams();
  const [event] = useContext(EventContext);
  console.log(page, resourceId);

  if (page === "about") {
    return (
      <Page
        title="What is Engage?"
        background="light"
        data={event?.acf?.engage.about.content}
      >
        <div>
          <StyledDivContent pad content={event?.acf?.engage.about.content} />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              title="Learn More"
              href={event?.acf?.engage.about.learn_more_url}
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "dates-locations" && resourceId) {
    return (
      <Page
        title="Dates & Locations"
        background="light"
        padding={0}
        data={event?.acf?.engage.dates_locations.buttons[resourceId].content}
      >
        <StyledDivContent
          pad
          content={
            event?.acf?.engage.dates_locations.buttons[resourceId].content
          }
        />
      </Page>
    );
  }

  if (page === "dates-locations") {
    return (
      <Page
        title="Dates & Locations"
        background="light"
        data={event?.acf?.engage.dates_locations.buttons.length > 0}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.engage.dates_locations.content}
          />
          {event?.acf?.engage.dates_locations.buttons && (
            <BorderButtonGroup>
              {event?.acf?.engage.dates_locations.buttons.map((obj, i) => {
                // const urlParts = obj.url.split("/");
                // const id = urlParts[urlParts.length - 1];
                return (
                  <div key={i}>
                    <StyledDivContent
                      style={{ paddingBottom: 0 }}
                      content={obj.description}
                    />
                    <BorderButton
                      background="light"
                      key={i}
                      title={obj.name}
                      href={`/${program}/${slug}/engage/dates-locations/${i}`}
                    />
                  </div>
                );
              })}
            </BorderButtonGroup>
          )}
        </div>
      </Page>
    );
  }

  if (page === "join") {
    return (
      <Page
        padding={0}
        title="Join an Engage Team"
        background="light"
        data={
          event?.acf?.engage.join.content && event?.acf?.engage.join.join_url
        }
      >
        <div>
          <StyledDivContent pad content={event?.acf?.engage.join.content} />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              title={event?.acf?.engage.join.name}
              href={event?.acf?.engage.join.join_url}
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "youth-leaders" && resourceId) {
    let content = "";
    if (resourceId === "mission-trip-training") {
      content = event?.acf?.engage.youth_leaders.mission_trip_training.content;
    }
    if (resourceId === "bring-your-group-on-a-trip") {
      content =
        event?.acf?.engage.youth_leaders.bring_your_group_on_a_trip.content;
    }

    return (
      <Page title="Youth Leaders" background="light" padding={0} data={content}>
        <StyledDivContent pad content={content} />
      </Page>
    );
  }

  if (page === "youth-leaders") {
    return (
      <Page
        title="Youth Leaders"
        background="light"
        data={
          event?.acf?.engage.youth_leaders.mission_trip_training.show ||
          event?.acf?.engage.youth_leaders.bring_your_group_on_a_trip.show
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.engage.youth_leaders.content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              title={
                event?.acf?.engage.youth_leaders.mission_trip_training
                  .button_label
              }
              href={`/${program}/${slug}/engage/youth-leaders/mission-trip-training`}
            />
            <BorderButton
              background="light"
              title={
                event?.acf?.engage.youth_leaders.bring_your_group_on_a_trip
                  .button_label
              }
              href={`/${program}/${slug}/engage/youth-leaders/bring-your-group-on-a-trip`}
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "resources" && resourceId) {
    let content = "";
    if (resourceId === "fundraising") {
      content = event?.acf?.engage.resources.fundraising.content;
    }
    if (resourceId === "talk-to-parents") {
      content = event?.acf?.engage.resources.talk_to_parents.content;
    }
    if (resourceId === "for-parents") {
      content = event?.acf?.engage.resources.for_parents.content;
    }

    return (
      <Page title="Resources" background="light" padding={0} data={content}>
        <StyledDivContent pad content={content} />
      </Page>
    );
  }

  if (page === "resources") {
    return (
      <Page
        title="Resources"
        background="light"
        data={
          event?.acf?.engage.resources.fundraising.show ||
          event?.acf?.engage.resources.talk_to_parents.show ||
          event?.acf?.engage.resources.for_parents.show
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.engage.resources.content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              title="Fundraising"
              href={`/${program}/${slug}/engage/resources/fundraising`}
            />
            <BorderButton
              background="light"
              title="Talk to Parents"
              href={`/${program}/${slug}/engage/resources/talk-to-parents`}
            />
            <BorderButton
              background="light"
              title="For Parents"
              href={`/${program}/${slug}/engage/resources/for-parents`}
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  return null;
};

export default Engage;
