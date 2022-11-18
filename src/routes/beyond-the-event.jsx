import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { ExposedList } from "../components/List";
import { useParams } from "react-router-dom";
import IFrame from "../components/IFrame";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton, { BorderButtonGroup } from "../components/BorderButton";

const BeyondTheEvent = (props) => {
  const { program, slug, page } = useParams();
  const [event] = useContext(EventContext);
  console.log(page);

  if (page === "ministry-interest") {
    return (
      <Page title="Beyond the Event" background="dark">
        <IFrame
          url={event?.acf?.beyond_the_event_ministry_interest_url}
          title="Want to go into ministry?"
        />
      </Page>
    );
  }

  if (page === "engage-interest") {
    return (
      <Page title="Beyond the Event" background="dark">
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.beyond_the_event_engage_trip_interest_content}
          />
          <BorderButtonGroup>
            <BorderButton
              href={
                event?.acf?.beyond_the_event_engage_trip_interest_groups_url
              }
              title="Groups"
            />
            <BorderButton
              href={
                event?.acf?.beyond_the_event_engage_trip_interest_individual_url
              }
              title="Individuals"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "move-intern-interest") {
    return (
      <Page title="Beyond the Event" background="dark">
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.beyond_the_event_move_intern_interest_content}
          />
          <BorderButtonGroup>
            <BorderButton
              href={
                event?.acf?.beyond_the_event_move_intern_interest_learn_more_url
              }
              title="Learn More"
            />
            <BorderButton
              href={
                event?.acf?.beyond_the_event_move_intern_interest_signup_url
              }
              title="Interested?"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "kingdom-worker-crash-nomination") {
    return (
      <Page title="Beyond the Event" background="dark">
        <div>
          <StyledDivContent
            pad
            content={
              event?.acf
                ?.beyond_the_event_kingdom_worker_crash_nomination_content
            }
          />
          <BorderButtonGroup>
            <BorderButton
              href={
                event?.acf?.beyond_the_event_kingdom_worker_crash_nomination_url
              }
              title="Learn More"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "college-partners") {
    return (
      <Page title="Beyond the Event" background="dark">
        <div>
          <StyledDivContent
            pad
            content={
              event?.acf
                ?.beyond_the_event_kingdom_worker_crash_nomination_content
            }
          />
        </div>
      </Page>
    );
  }

  if (page === "wrkr-gathering") {
    return (
      <Page title="Beyond the Event" background="dark">
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.beyond_the_event_wrkr_gathering_content}
          />
          <BorderButtonGroup>
            <BorderButton
              href={event?.acf?.beyond_the_event_wrkr_gathering_interest_url}
              title="Learn More"
            />
            <BorderButton
              href={event?.acf?.beyond_the_event_wrkr_gathering_register_url}
              title="Register"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  return (
    <Page title="Beyond the Event" background="dark">
      <ExposedList>
        {event?.acf?.beyond_the_event_ministry_interest_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/beyond-the-event/ministry-interest/`}
              title="Want to go into ministry?"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_engage_trip_interest_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/beyond-the-event/engage-interest/`}
              title="Want to go on an Engage Trip?
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_move_intern_interest_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/beyond-the-event/move-intern-interest/`}
              title="Want to intern with MOVE next summer?
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_kingdom_worker_crash_nomination_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/beyond-the-event/kingdom-worker-crash-nomination/`}
              title="Kingdom Worker Crash Nomination
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_college_partners_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/beyond-the-event/college-partners/`}
              title="College Partners
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_wrkr_gathering_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/beyond-the-event/wrkr-gathering/`}
              title="WRKR Gathering
"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default BeyondTheEvent;
