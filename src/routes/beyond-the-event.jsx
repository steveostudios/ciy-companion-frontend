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
import SpotifyIcon from "./../img/icons/spotify.svg";
import PodcastIcon from "./../img/icons/microphone.svg";
import TiktokIcon from "./../img/icons/tiktok.svg";
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
        data={event?.acf?.bte.ministry_interest.url}
      >
        <IFrame
          url={event?.acf?.bte.ministry_interest.url}
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
          event?.acf?.bte.engage_trip_interest.content &&
          event?.acf?.bte.engage_trip_interest.groups_url &&
          event?.acf?.bte.engage_trip_interest.individual_url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.engage_trip_interest.content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={event?.acf?.bte.engage_trip_interest.groups_url}
              title="Groups"
            />
            <BorderButton
              background="light"
              href={event?.acf?.bte.engage_trip_interest.individual_url}
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
          event?.acf?.bte.move_intern_interest.content &&
          event?.acf?.bte.move_intern_interest.learn_more_url &&
          event?.acf?.bte.move_intern_interest.signup_url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.move_intern_interest.content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={event?.acf?.bte.move_intern_interest.learn_more_url}
              title="Learn More"
            />
            <BorderButton
              background="light"
              href={event?.acf?.bte.move_intern_interest.signup_url}
              title="Interested?"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "mix-intern-interest") {
    return (
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf?.bte.mix_intern_interest.content &&
          event?.acf?.bte.mix_intern_interest.learn_more_url &&
          event?.acf?.bte.mix_intern_interest.signup_url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.mix_intern_interest.content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={event?.acf?.bte.mix_intern_interest.learn_more_url}
              title="Learn More"
            />
            <BorderButton
              background="light"
              href={event?.acf?.bte.mix_intern_interest.signup_url}
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
          event?.acf?.bte.kingdom_worker_crash_nomination.content &&
          event?.acf?.bte.kingdom_worker_crash_nomination.url
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.kingdom_worker_crash_nomination.content}
          />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={event?.acf?.bte.kingdom_worker_crash_nomination.url}
              title="Learn More"
            />
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "college-partners") {
    return (
      <Page title="Beyond the Event" background="light" data={false}>
        <div></div>
      </Page>
    );
  }

  if (page === "convos-beta") {
    return (
      <Page
        title="Convos Creator Beta"
        background="light"
        data={
          event?.acf?.bte.convos_beta.content &&
          event?.acf?.bte.convos_beta.beta_url
        }
      >
        <div>
          <StyledDivContent pad content={event?.acf?.bte.convos_beta.content} />
          <BorderButtonGroup>
            <BorderButton
              background="light"
              href={event?.acf?.bte.convos_beta.beta_url}
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
      tiktok: TiktokIcon,
    };

    console.log(event?.acf?.bte.connection_urls);
    const connections =
      event?.acf?.bte.connect.service &&
      Object.entries(event?.acf?.bte.connect.service).map((contact, i) => {
        return { service: contact[0], url: contact[1] };
      });

    return (
      <Page
        title="Connect"
        background="light"
        data={event?.acf?.bte.connect.show && event?.acf?.bte.connect.service}
      >
        <NormalList>
          {connections &&
            connections
              .filter((connection) => connection.url)
              .map((connection, i) => (
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
        event?.acf?.bte.ministry_interest.show ||
        event?.acf?.bte.engage_trip_interest.show ||
        event?.acf?.bte.move_intern_interest.show ||
        event?.acf?.bte.mix_intern_interest.show ||
        event?.acf?.bte.kingdom_worker_crash_nomination.show ||
        event?.acf?.bte.college_partners.show ||
        event?.acf?.bte.youth_ministry_resources.show ||
        event?.acf?.bte.convos_beta.show ||
        event?.acf?.bte.session_4.show ||
        event?.acf?.bte.preteen_ministry_resources.show ||
        event?.acf?.bte.connect.show
      }
    >
      <ExposedList>
        {event?.acf?.bte.ministry_interest.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/ministry-interest/`}
              title="Want to go into ministry?"
            />
          </li>
        )}
        {event?.acf?.bte.engage_trip_interest.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/engage-interest/`}
              title="Want to go on an Engage Trip?
"
            />
          </li>
        )}
        {event?.acf?.bte.move_intern_interest.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/move-intern-interest/`}
              title="Want to intern with MOVE next summer?
"
            />
          </li>
        )}
        {event?.acf?.bte.mix_intern_interest.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/mix-intern-interest/`}
              title="Want to intern with MIX next summer?
"
            />
          </li>
        )}
        {event?.acf?.bte.kingdom_worker_crash_nomination.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/kingdom-worker-crash-nomination/`}
              title="Kingdom Worker Crash Nomination
"
            />
          </li>
        )}
        {event?.acf?.bte.college_partners.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/college-partners/`}
              title="College Partners
"
            />
          </li>
        )}
        {event?.acf?.bte.youth_ministry_resources.show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.bte.youth_ministry_resources.url}
              title="Youth Ministry Resources
"
            />
          </li>
        )}
        {event?.acf?.bte.convos_beta.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/convos-beta/`}
              title="Convos Creator Beta
"
            />
          </li>
        )}
        {event?.acf?.bte.session_4.show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.bte.session_4.resource_url}
              title="SuperStart ReCap Session
"
            />
          </li>
        )}
        {event?.acf?.bte.preteen_ministry_resources.show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.bte.preteen_ministry_resources.url}
              title="Preteen Ministry Resources
"
            />
          </li>
        )}
        {event?.acf?.bte.connect.show && (
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
