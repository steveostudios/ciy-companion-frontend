import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { ExposedList, NormalList } from "../components/List";
import { useParams } from "react-router-dom";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton, { BorderButtonGroup } from "../components/BorderButton";
import Vimeo from "../components/Vimeo";
import IFrame from "../components/IFrame";
import Contact from "../components/Contact";

const LeaderResources = (props) => {
  const { program, slug, page, resourceId } = useParams();
  const [event] = useContext(EventContext);
  console.log(page, resourceId);

  if (page === "theme-write-up") {
    return (
      <Page
        title="Leader Resources"
        background="light"
        data={event?.acf?.leader_resources.program_write_up.content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.leader_resources.program_write_up.content}
          />
        </div>
      </Page>
    );
  }

  if (page === "adult-leader-videos" && resourceId) {
    return (
      <Page
        title="Leader Resources"
        background="light"
        padding={0}
        data={
          event?.acf?.leader_resources.adult_leader_videos.videos.length > 0
        }
      >
        <Vimeo id={resourceId} />
      </Page>
    );
  }

  if (page === "adult-leader-videos") {
    return (
      <Page
        title="Leader Resources"
        background="light"
        data={event?.acf?.leader_resources.adult_leader_videos.videos}
      >
        <div>
          {event?.acf?.leader_resources.adult_leader_videos.videos && (
            <BorderButtonGroup>
              {event?.acf?.leader_resources.adult_leader_videos.videos.map(
                (obj, i) => {
                  const urlParts = obj.url.split("/");
                  const id = urlParts[urlParts.length - 1];
                  return (
                    <BorderButton
                      background="light"
                      key={i}
                      title={obj.name}
                      href={`/${program}/${slug}/leader-resources/adult-leader-videos/${id}`}
                    />
                  );
                }
              )}
            </BorderButtonGroup>
          )}
        </div>
      </Page>
    );
  }

  if (page === "amp-up-dance") {
    const urlParts =
      (event?.acf?.leader_resources.amp_up_dance.url &&
        event?.acf?.leader_resources.amp_up_dance.url.split("/")) ||
      "";
    const id = urlParts[urlParts.length - 1];
    return (
      <Page
        padding={0}
        title="Leader Resources"
        background="light"
        data={event?.acf?.leader_resources.amp_up_dance.url}
      >
        <Vimeo id={id} />
      </Page>
    );
  }

  if (page === "four-the-win-rules") {
    const urlParts =
      (event?.acf?.leader_resources.four_the_win_rules.url &&
        event?.acf?.leader_resources.four_the_win_rules.url.split("/")) ||
      "";
    const id = urlParts[urlParts.length - 1];
    return (
      <Page
        padding={0}
        title="Leader Resources"
        background="light"
        data={event?.acf?.leader_resources.four_the_win_rules.url}
      >
        <Vimeo id={id} />
      </Page>
    );
  }

  if (page === "youth-group-questions" && resourceId) {
    console.log(resourceId);
    return (
      <Page
        title="Leader Resources"
        background="light"
        padding={0}
        data={
          event?.acf?.leader_resources.youth_group_questions.question_set
            .length > 0
        }
      >
        <div>
          <h2>
            {
              event?.acf?.leader_resources.youth_group_questions.question_set[
                resourceId
              ].title
            }
          </h2>
          <StyledDivContent
            pad
            content={
              event?.acf?.leader_resources.youth_group_questions.question_set[
                resourceId
              ].content
            }
          />
        </div>
      </Page>
    );
  }

  if (page === "youth-group-questions") {
    return (
      <Page
        title="Leader Resources"
        background="light"
        padding={0}
        data={
          event?.acf?.leader_resources.youth_group_questions.question_set
            .length > 0
        }
      >
        <div>
          {event?.acf?.leader_resources.youth_group_questions.question_set && (
            <BorderButtonGroup>
              {event?.acf?.leader_resources.youth_group_questions.question_set.map(
                (obj, i) => {
                  return (
                    <BorderButton
                      background="light"
                      key={i}
                      title={obj.title}
                      href={`/${program}/${slug}/leader-resources/youth-group-questions/${i}`}
                    />
                  );
                }
              )}
            </BorderButtonGroup>
          )}
        </div>
      </Page>
    );
  }

  if (page === "damage-report") {
    return (
      <Page
        title="Leader Resources"
        background="light"
        padding={0}
        data={event?.acf?.leader_resources.damage_report.url}
      >
        <IFrame
          url={event?.acf?.leader_resources.damage_report.url}
          title="Damage Report"
        />
      </Page>
    );
  }

  if (page === "small-group-locations") {
    return (
      <Page
        title="Leader Resources"
        background="light"
        data={event?.acf?.leader_resources.small_group_locations.content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.leader_resources.small_group_locations.content}
          />
        </div>
      </Page>
    );
  }

  if (page === "worship-playlist") {
    return (
      <Page
        title="Leader Resources"
        background="light"
        data={event?.acf?.leader_resources.worship_playlist.content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.leader_resources.worship_playlist.content}
          />
        </div>
      </Page>
    );
  }

  if (page === "event-contacts") {
    return (
      <Page
        title="Event Contacts"
        background="light"
        data={
          event?.acf?.leader_resources.event_contacts.contact &&
          event?.acf?.leader_resources.event_contacts.contact.length > 0
        }
      >
        <NormalList>
          {event?.acf?.leader_resources.event_contacts.contact.length > 0 &&
            event.acf.leader_resources.event_contacts.contact.map(
              (contact, i) => <Contact key={i} {...contact} />
            )}
        </NormalList>
      </Page>
    );
  }

  return (
    <Page
      title="Leader Resources"
      background="light"
      data={
        event?.acf?.leader_resources.program_write_up.show ||
        event?.acf?.leader_resources.adult_leader_videos.show ||
        event?.acf?.leader_resources.amp_up_dance.show ||
        event?.acf?.leader_resources.youth_group_questions.show ||
        event?.acf?.leader_resources.damage_report.show ||
        event?.acf?.leader_resources.small_group_locations.show ||
        event?.acf?.leader_resources.worship_playlist.show ||
        event?.acf?.leader_resources.event_eval.show ||
        event?.acf?.leader_resources.four_the_win_rules.show
      }
    >
      <ExposedList>
        {event?.acf?.leader_resources.program_write_up.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/theme-write-up/`}
              title="Theme Write Up"
            />
          </li>
        )}
        {event?.acf?.leader_resources.adult_leader_videos.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/adult-leader-videos/`}
              title="Adult Leader Videos
"
            />
          </li>
        )}
        {event?.acf?.leader_resources.amp_up_dance.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/amp-up-dance/`}
              title="Amp-Up Dance
"
            />
          </li>
        )}

        {event?.acf?.leader_resources.four_the_win_rules.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/four-the-win-rules/`}
              title="For the Win Rules
"
            />
          </li>
        )}
        {event?.acf?.leader_resources.photo_scavenger_hunt.show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.leader_resources.photo_scavenger_hunt.url}
              title="Photo Scavenger Hunt
"
              target="_blank"
            />
          </li>
        )}
        {event?.acf?.leader_resources.youth_group_questions.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/youth-group-questions/`}
              title="Youth Group Questions
"
            />
          </li>
        )}
        {event?.acf?.leader_resources.damage_report.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/damage-report/`}
              title="Damage Report
"
            />
          </li>
        )}
        {event?.acf?.leader_resources.event_eval.show && (
          <li>
            <BorderButton
              background="light"
              href={event?.acf?.leader_resources.event_eval.url}
              title="Event Eval
"
            />
          </li>
        )}
        {event?.acf?.leader_resources.small_group_locations.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/small-group-locations/`}
              title="Small Group Locations
"
            />
          </li>
        )}
        {event?.acf?.leader_resources.worship_playlist.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/worship-playlist/`}
              title="Worship Playlist
"
            />
          </li>
        )}
        {event?.acf?.leader_resources.event_contacts.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/leader-resources/event-contacts/`}
              title="Event Contacts
"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default LeaderResources;
