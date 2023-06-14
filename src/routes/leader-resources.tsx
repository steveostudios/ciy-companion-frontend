import { getUrlId } from "../helpers/getUrlId";
import { useParams } from "react-router-dom";
import { IFramePage } from "../pages/IFramePage";
import { VideoPage } from "../pages/VideoPage";
import { Button, ContentWithMenu } from "../pages/ContentWithMenuPage";
import { ContactsPage } from "../pages/ContactsPage";
import { getEvent } from "../helpers/event";

const LeaderResources: React.FC = () => {
  const { program, slug, page, resourceId } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.leader_resources;
  const url_prefix = `/${program}/${slug}/leader-resources`;

  // Theme Write Up
  if (page === "theme-write-up") {
    return (
      <ContentWithMenu
        title="Theme Write Up"
        content={data_prefix?.program_write_up.content}
      />
    );
  }

  // Adult Leader Videos => VideoPage
  if (page === "adult-leader-videos" && resourceId) {
    return <VideoPage title="Adult Leader Videos" videoId={resourceId} />;
  }

  // Adult Leader Videos
  if (page === "adult-leader-videos") {
    const buttons: Button[] = data_prefix?.adult_leader_videos.videos.map(
      (obj: any) => ({
        title: obj.name,
        url: `${url_prefix}/adult-leader-videos/${getUrlId(obj.url)}`,
      })
    );

    return <ContentWithMenu title="Adult Leader Videos" buttons={buttons} />;
  }

  // Outer Realm Videos => VideoPage
  if (page === "outer-realm-videos" && resourceId) {
    return <VideoPage title="Outer Realm Videos" videoId={resourceId} />;
  }

  // Outer Realm Videos
  if (page === "outer-realm-videos") {
    const buttons: Button[] = data_prefix?.outer_realm_videos.videos.map(
      (obj: any) => ({
        title: obj.name,
        url: `${url_prefix}/outer-realm-videos/${getUrlId(obj.url)}`,
      })
    );
    return <ContentWithMenu title="Outer Realm Videos" buttons={buttons} />;
  }

  // Amp Up Dance => VideoPage
  if (page === "amp-up-dance") {
    return (
      <VideoPage
        title="Amp Up Dance"
        videoId={getUrlId(data_prefix?.amp_up_dance.url)}
      />
    );
  }

  // Four the Win Rules
  if (page === "four-the-win-rules") {
    return (
      <VideoPage
        title="Four the Win Rules"
        videoId={getUrlId(data_prefix?.four_the_win_rules?.url)}
      />
    );
  }

  // Youth Group Questions => Question Page
  if (page === "youth-group-questions" && resourceId) {
    const resource =
      data_prefix?.youth_group_questions?.question_set[resourceId];

    return (
      <ContentWithMenu
        title="Youth Group Questions"
        heading={resource.title}
        content={resource.content}
      />
    );
  }

  // Youth Group Questions
  if (page === "youth-group-questions") {
    const buttons: Button[] =
      data_prefix?.youth_group_questions.question_set.map(
        (obj: any, i: number) => ({
          title: obj.title,
          url: `${url_prefix}/youth-group-questions/${i}`,
        })
      );

    return <ContentWithMenu title="Youth Group Questions" buttons={buttons} />;
  }

  // Damage Report
  if (page === "damage-report") {
    return (
      <IFramePage title="Damage Report" url={data_prefix?.damage_report.url} />
    );
  }

  // Event Eval
  if (page === "event-eval") {
    return (
      <IFramePage title="Event Evaluation" url={data_prefix?.event_eval.url} />
    );
  }

  // Small Group Locations
  if (page === "small-group-locations") {
    return (
      <ContentWithMenu
        title="Small Group Locations"
        content={data_prefix?.small_group_locations.content}
      />
    );
  }

  // Worship Playlist
  if (page === "worship-playlist") {
    return (
      <ContentWithMenu
        title="Worship Playlist"
        content={data_prefix?.worship_playlist.content}
      />
    );
  }

  // Event Contacts
  if (page === "event-contacts") {
    return (
      <ContactsPage
        title="Event Contacts"
        contacts={data_prefix?.event_contacts.contact}
      />
    );
  }

  interface MainMenuItem {
    [key: string]: {
      title: string;
      url: string;
    };
  }

  const mainMenu: MainMenuItem = {
    program_write_up: {
      title: "Theme Write Up",
      url: `${url_prefix}/theme-write-up/`,
    },
    adult_leader_videos: {
      title: "Adult Leader Videos",
      url: `${url_prefix}/adult-leader-videos/`,
    },
    outer_realm_videos: {
      title: "Outer Realm Videos",
      url: `${url_prefix}/outer-realm-videos/`,
    },
    amp_up_dance: {
      title: "Amp Up Dance",
      url: `${url_prefix}/amp-up-dance/`,
    },
    four_the_win_rules: {
      title: "Four the Win Rules",
      url: `${url_prefix}/four-the-win-rules/`,
    },
    photo_scavenger_hunt: {
      title: "Photo Scavenger Hunt",
      url: data_prefix?.photo_scavenger_hunt.url,
    },
    youth_group_questions: {
      title: "Youth Group Questions",
      url: `${url_prefix}/youth-group-questions/`,
    },
    damage_report: {
      title: "Damage Report",
      url: `${url_prefix}/damage-report/`,
    },
    event_eval: {
      title: "Event Eval",
      url: `${url_prefix}/event-eval/`,
    },
    small_group_locations: {
      title: "Small Group Locations",
      url: `${url_prefix}/small-group-locations/`,
    },
    worship_playlist: {
      title: "Worship Playlist",
      url: `${url_prefix}/worship-playlist/`,
    },
    event_contacts: {
      title: "Event Contacts",
      url: `${url_prefix}/event-contacts/`,
    },
  };

  const getButtons = () => {
    const buttons: Button[] = [];
    Object.keys(mainMenu).forEach((key) => {
      if (data_prefix[key].show) {
        buttons.push(mainMenu[key]);
      }
    });

    return buttons;
  };

  return <ContentWithMenu title="Leader Resources" buttons={getButtons()} />;
};

export default LeaderResources;
