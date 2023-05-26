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
import AvatarIcon from "./../img/icons/avatar.svg";
import styled from "@emotion/styled";

const BeyondTheEvent = (props) => {
  const { program, slug, page, resourceId } = useParams();
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

  if (page === "engage-interest" && resourceId) {
    return (
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf?.bte.engage_trip_interest.content &&
          event?.acf?.bte.engage_trip_interest.sections.length > 0 &&
          event?.acf?.bte.engage_trip_interest.sections[resourceId].content
        }
      >
        <div>
          <StyledDivContent
            pad
            content={
              event?.acf?.bte.engage_trip_interest.sections[resourceId].content
            }
          />
          {event?.acf?.bte.engage_trip_interest.sections[resourceId]
            .interest_url && (
            <BorderButtonGroup>
              <BorderButton
                background="light"
                href={`/${program}/${slug}/beyond-the-event/engage-interest-form/${resourceId}`}
                title={
                  event?.acf?.bte.engage_trip_interest.sections[resourceId]
                    .interest_url_name
                }
              />
            </BorderButtonGroup>
          )}
        </div>
      </Page>
    );
  }

  if (page === "engage-interest-form" && resourceId) {
    return (
      <Page
        title="Beyond the Event"
        background="light"
        data={
          event?.acf?.bte.engage_trip_interest.sections[resourceId].interest_url
        }
      >
        <IFrame
          url={
            event?.acf?.bte.engage_trip_interest.sections[resourceId]
              .interest_url
          }
          title={event?.acf?.bte.engage_trip_interest.sections[resourceId].name}
        />
      </Page>
    );
  }

  if (page === "engage-interest") {
    return (
      <Page
        title="Want to go on an Engage mission trip?"
        background="light"
        data={
          event?.acf?.bte.engage_trip_interest.content &&
          event?.acf?.bte.engage_trip_interest.sections.length > 0
        }
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.engage_trip_interest.content}
          />

          <BorderButtonGroup>
            {event?.acf?.bte.engage_trip_interest.sections.length &&
              event?.acf?.bte.engage_trip_interest.sections.map(
                (section, i) => (
                  <BorderButton
                    key={i}
                    background="light"
                    href={`/${program}/${slug}/beyond-the-event/engage-interest/${i}`}
                    title={section.name}
                  />
                )
              )}
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
      <Page
        title="College Partners"
        background="light"
        data={
          event?.acf?.bte.college_partners.college &&
          event?.acf?.bte.college_partners.college.length > 0
        }
      >
        <div>
          {event?.acf.bte.college_partners.description && (
            <StyledDivContent
              pad
              content={event?.acf?.bte.college_partners.description}
            />
          )}
          <CollegeGrid>
            {event?.acf?.bte.college_partners.college.length > 0 &&
              event?.acf?.bte.college_partners.college.map((college, i) => (
                <a href={college.url}>
                  {!college.hideImage &&
                    (college?.image?.sizes?.medium ? (
                      <CollegeImage
                        src={college.image.sizes.medium}
                        alt={college.name}
                      />
                    ) : (
                      <CollegeImage src={AvatarIcon} alt={college.name} />
                    ))}
                </a>
              ))}
          </CollegeGrid>
        </div>
      </Page>
    );
  }

  if (page === "convos-beta") {
    return (
      <Page
        title="Convos for your youth group?"
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

  if (page === "decision") {
    return (
      <Page
        title="I Made a Decision at Move"
        background="light"
        data={
          event?.acf?.bte.decision.first_time_decision.show ||
          event?.acf?.bte.decision.rededication.show ||
          event?.acf?.bte.decision.vocational_ministry.show ||
          event?.acf?.bte.decision.kingdom_worker.show
        }
      >
        <div>
          <BorderButtonGroup>
            {event?.acf?.bte.decision.first_time_decision.show && (
              <BorderButton
                background="light"
                href={`/${program}/${slug}/beyond-the-event/decision-first-time/`}
                title="First Time Decision"
              />
            )}
            {event?.acf?.bte.decision.rededication.show && (
              <BorderButton
                background="light"
                href={`/${program}/${slug}/beyond-the-event/decision-rededication/`}
                title="Rededication"
              />
            )}
            {event?.acf?.bte.decision.vocational_ministry.show && (
              <BorderButton
                background="light"
                href={`/${program}/${slug}/beyond-the-event/decision-vocational-ministry/`}
                title="Vocational Ministry"
              />
            )}
            {event?.acf?.bte.decision.kingdom_worker.show && (
              <BorderButton
                background="light"
                href={`/${program}/${slug}/beyond-the-event/decision-kingdom-worker/`}
                title="Kingdom Worker"
              />
            )}
          </BorderButtonGroup>
        </div>
      </Page>
    );
  }

  if (page === "decision-first-time") {
    return (
      <Page
        title="First Time Decision"
        background="light"
        data={event?.acf?.bte.decision.first_time_decision.content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.decision.first_time_decision.content}
          />
        </div>
      </Page>
    );
  }

  if (page === "decision-rededication") {
    return (
      <Page
        title="Rededication"
        background="light"
        data={event?.acf?.bte.decision.rededication.content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.decision.rededication.content}
          />
        </div>
      </Page>
    );
  }

  if (page === "decision-vocational-ministry") {
    return (
      <Page
        title="Vocational Ministry"
        background="light"
        data={event?.acf?.bte.decision.vocational_ministry.content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.decision.vocational_ministry.content}
          />
        </div>
      </Page>
    );
  }

  if (page === "decision-kingdom-worker") {
    return (
      <Page
        title="Kingdom Worker"
        background="light"
        data={event?.acf?.bte.decision.kingdom_worker.content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.bte.decision.kingdom_worker.content}
          />
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
        event?.acf?.bte.decision.show ||
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
              title="Want to go on an Engage mission trip?
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
              title="Interested in using Convos for your youth group?
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
        {event?.acf?.bte.decision.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/beyond-the-event/decision/`}
              title="I Made a decision at MOVE
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

const CollegeGrid = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "4rem",
  justifyContent: "center",
  paddingBottom: "4rem",
});

const CollegeImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

export default BeyondTheEvent;
