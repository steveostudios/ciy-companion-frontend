import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { ExposedList } from "../components/List";
import { useParams } from "react-router-dom";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton, { BorderButtonGroup } from "../components/BorderButton";

const LeaderResources = (props) => {
  const { program, slug, page, resourceId } = useParams();
  const [event] = useContext(EventContext);
  console.log(page);

  if (page === "theme-write-up") {
    return (
      <Page
        title="Leader Resources"
        background="dark"
        data={event?.acf?.leader_resources_program_write_up_content}
      >
        <div>
          <StyledDivContent
            pad
            content={event?.acf?.leader_resources_program_write_up_content}
          />
        </div>
      </Page>
    );
  }

  if (page === "adult-leader-videos" && resourceId) {
    return (
      <Page
        title="Leader Resources"
        background="dark"
        data={event?.acf?.leader_resources_amp_up_dance_video_url}
      >
        <div>
          <iframe
            title="vimeo-player"
            src={`https://player.vimeo.com/video/${resourceId}`}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Page>
    );
  }

  if (page === "adult-leader-videos") {
    return (
      <Page
        title="Leader Resources"
        background="dark"
        data={event?.acf?.leader_resources_adult_leader_videos_objects}
      >
        <div>
          {event?.acf?.leader_resources_adult_leader_videos_objects && (
            <BorderButtonGroup>
              {event?.acf?.leader_resources_adult_leader_videos_objects.map(
                (obj, i) => {
                  const urlParts = obj.url.split("/");
                  const id = urlParts[urlParts.length - 1];
                  return (
                    <BorderButton
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
      (event?.acf?.leader_resources_amp_up_dance_video_url &&
        event?.acf?.leader_resources_amp_up_dance_video_url.split("/")) ||
      "";
    const id = urlParts[urlParts.length - 1];
    return (
      <Page
        title="Leader Resources"
        background="dark"
        data={event?.acf?.leader_resources_amp_up_dance_video_url}
      >
        <div>
          <iframe
            title="vimeo-player"
            src={`https://player.vimeo.com/video/${id}`}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Page>
    );
  }

  return (
    <Page
      title="Leader Resources"
      background="dark"
      data={
        event?.acf?.leader_resources_program_write_up_show ||
        event?.acf?.leader_resources_adult_leader_videos_show ||
        event?.acf?.leader_resources_amp_up_dance_show
      }
    >
      <ExposedList>
        {event?.acf?.leader_resources_program_write_up_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/leader-resources/theme-write-up/`}
              title="Theme Write Up"
            />
          </li>
        )}
        {event?.acf?.leader_resources_adult_leader_videos_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/leader-resources/adult-leader-videos/`}
              title="Adult Leader Videos
"
            />
          </li>
        )}
        {event?.acf?.leader_resources_amp_up_dance_show && (
          <li>
            <BorderButton
              href={`/${program}/${slug}/leader-resources/amp-up-dance/`}
              title="Amp-Up Dance
"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default LeaderResources;
