import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { ExposedList, NormalList } from "../components/List";
import { useParams } from "react-router-dom";
import IFrame from "../components/IFrame";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton, { BorderButtonGroup } from "../components/BorderButton";
import FacebookIcon from "./../img/icons/facebook.svg";
import InstagramIcon from "./../img/icons/instagram.svg";
import SpotifyIcon from "./../img/icons/microphone.svg";
import PodcastIcon from "./../img/icons/spotify.svg";
import styled from "@emotion/styled";

const BeyondTheEvent = (props) => {
  const { program, slug, page } = useParams();
  const [event] = useContext(EventContext);
  console.log(page);

  if (page === "ministry-interest") {
    return (
      <Page
        title="Beyond the Event"
        background="light"
        data={event?.acf?.beyond_the_event_ministry_interest_url}
      >
        <IFrame
          url={event?.acf?.beyond_the_event_ministry_interest_url}
          title="Want to go into ministry?"
        />
      </Page>
    );
  }

  if (page === "engage-interest") {
    return (
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf?.beyond_the_event_engage_trip_interest_content &&
          event?.acf?.beyond_the_event_engage_trip_interest_groups_url &&
          event?.acf?.beyond_the_event_engage_trip_interest_individual_url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.beyond_the_event_engage_trip_interest_content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={
                event?.acf?.beyond_the_event_engage_trip_interest_groups_url
              }
              title="Groups"
            />
            <BorderButton
              background="light"
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
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf?.beyond_the_event_move_intern_interest_content &&
          event?.acf?.beyond_the_event_move_intern_interest_learn_more_url &&
          event?.acf?.beyond_the_event_move_intern_interest_signup_url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.beyond_the_event_move_intern_interest_content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={
                event?.acf?.beyond_the_event_move_intern_interest_learn_more_url
              }
              title="Learn More"
            />
            <BorderButton
              background="light"
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
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf
            ?.beyond_the_event_kingdom_worker_crash_nomination_content &&
          event?.acf?.beyond_the_event_kingdom_worker_crash_nomination_url
        }
      >
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
              background="light"
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
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf?.beyond_the_event_kingdom_worker_crash_nomination_content
        }
      >
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
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf?.beyond_the_event_wrkr_gathering_content &&
          event?.acf?.beyond_the_event_wrkr_gathering_interest_url &&
          event?.acf?.beyond_the_event_wrkr_gathering_register_url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.beyond_the_event_wrkr_gathering_content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={event?.acf?.beyond_the_event_wrkr_gathering_interest_url}
              title="Learn More"
            />
            <BorderButton
              background="light"
              href={event?.acf?.beyond_the_event_wrkr_gathering_register_url}
              title="Register"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "convos-beta") {
    return (
      <Page
        title="Convos Creator Beta"
        background="light"
        data={
          event?.acf?.beyond_the_event_convos_beta_content &&
          event?.acf?.beyond_the_event_convos_beta_url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.beyond_the_event_convos_beta_content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={event?.acf?.beyond_the_event_convos_beta_url}
              title="Learn More"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "connect") {
    const icons = {
      facebook: FacebookIcon,
      instagram: InstagramIcon,
      spotify: SpotifyIcon,
      podcast: PodcastIcon,
    };

    console.log(event?.acf?.beyond_the_event_connection_urls);
    const connections =
      event?.acf?.beyond_the_event_connection_urls &&
      Object.entries(event?.acf?.beyond_the_event_connection_urls).map(
        (contact, i) => {
          return { service: contact[0], url: contact[1] };
        }
      );

    return (
      <Page
        title="Connect"
        background="light"
        data={
          event?.acf?.beyond_the_event_connect_show &&
          event?.acf?.beyond_the_event_connection_urls
        }
      >
        <NormalList>
          {connections &&
            connections.map((connection, i) => (
              <Connection key={i}>
                <ConnectionLink href={connection.url}>
                  <ConnectionIcon
                    src={icons[connection.service]}
                    alt={connection.service}
                  />
                  <ConnectionHandle>{connection.service}</ConnectionHandle>
                </ConnectionLink>
              </Connection>
            ))}
        </NormalList>
      </Page>
    );
  }

  return (
    <Page
      title="Beyond the Event"
      background="light"
      data={
        event?.acf?.beyond_the_event_ministry_interest_show ||
        event?.acf?.beyond_the_event_engage_trip_interest_show ||
        event?.acf?.beyond_the_event_move_intern_interest_show ||
        event?.acf?.beyond_the_event_kingdom_worker_crash_nomination_show ||
        event?.acf?.beyond_the_event_college_partners_show ||
        event?.acf?.beyond_the_event_wrkr_gathering_show ||
        event?.acf?.beyond_the_event_youth_ministry_resources_show ||
        event?.acf?.beyond_the_event_convos_beta_show ||
        event?.acf?.beyond_the_event_session_4_resource_show ||
        event?.acf?.beyond_the_event_event_eval_show ||
        event?.acf?.beyond_the_event_preteen_ministry_resources_show ||
        event?.acf?.beyond_the_event_connect_show
      }
    >
      <ExposedList>
        {event?.acf?.beyond_the_event_ministry_interest_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/ministry-interest/`}
              title="Want to go into ministry?"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_engage_trip_interest_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/engage-interest/`}
              title="Want to go on an Engage Trip?
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_move_intern_interest_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/move-intern-interest/`}
              title="Want to intern with MOVE next summer?
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_kingdom_worker_crash_nomination_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/kingdom-worker-crash-nomination/`}
              title="Kingdom Worker Crash Nomination
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_college_partners_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/college-partners/`}
              title="College Partners
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_wrkr_gathering_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/wrkr-gathering/`}
              title="WRKR Gathering
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_youth_ministry_resources_show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.beyond_the_event_youth_ministry_resources_url}
              title="Youth Ministry Resources
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_convos_beta_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/convos-beta/`}
              title="Convos Creator Beta
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_session_4_resource_show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.beyond_the_event_session_4_resource_url}
              title="Session 4 Resource
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_event_eval_show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.beyond_the_event_event_eval_url}
              title="Event Eval
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_preteen_ministry_resources_show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.beyond_the_event_preteen_ministry_resources_url}
              title="Preteen Ministry Resources
"
            />
          </li>
        )}
        {event?.acf?.beyond_the_event_connect_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/connect/`}
              title="Connect
"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

const Connection = styled("li")({
  // marginBottom: "4rem",
  margin: "2rem",
  display: "flex",
});

const ConnectionLink = styled("a")({
  display: "flex",
  gap: "2rem",
  textDecoration: "none",
});

const ConnectionIcon = styled("img")({
  // marginRight: "1rem",
  width: "3rem",
});
const ConnectionHandle = styled("span")({
  color: "var(--black)",
  fontSize: "18px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  display: "flex",
  textTransform: "uppercase",
  textDecoration: "none",
});

export default BeyondTheEvent;
