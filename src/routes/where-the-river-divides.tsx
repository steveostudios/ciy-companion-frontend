import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
import { Button, ContentWithMenu } from "../pages/ContentWithMenuPage";
import { IFramePage } from "../pages/IFramePage";

const WhereTheRiverDivides: React.FC = () => {
  const { program, slug, page, resourceId } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.where_the_river_divides;
  const url_prefix = `/${program}/${slug}/where-the-river-divides`;

  // Prayers => Individual Prayer
  if (page === "prayers" && resourceId) {
    return (
      <ContentWithMenu
        title="Where the River Divides"
        content={data_prefix.prayers[resourceId].content}
      />
    );
  }

  // Prayers
  if (page === "prayers") {
    return (
      <ContentWithMenu
        title="Where the River Divides"
        buttons={data_prefix.prayers.map((prayer: any, i: number) => ({
          title: prayer.name,
          url: `${url_prefix}/prayers/${i}`,
        }))}
      />
    );
  }

  // Host
  if (page === "host") {
    return <IFramePage title="Where the River Divides" url={data_prefix.url} />;
  }

  // Small Group Discussion
  if (page === "small-group-discussion") {
    return (
      <ContentWithMenu
        title="Where the River Divides"
        content={data_prefix.small_group_discussion_content}
      />
    );
  }

  // Share Your Story
  if (page === "share-your-story") {
    return (
      <IFramePage
        title="Where the River Divides"
        url={data_prefix.share_your_story_url}
      />
    );
  }

  const getButtons = () => {
    let buttons: Button[] = [
      {
        title: "Host",
        url: `${url_prefix}/host`,
      },
      {
        title: "Prayer Prompts",
        url: `${url_prefix}/prayers`,
      },
    ];

    if (data_prefix.small_group_discussion_content)
      buttons.push({
        title: "Group Discussion Questions",
        url: `${url_prefix}/small-group-discussion`,
      });

    if (data_prefix.share_your_story_url)
      buttons.push({
        title: "Share your WTRD Story",
        url: `${url_prefix}/share-your-story`,
      });

    if (data_prefix.soundtrack_url)
      buttons.push({
        title: "WTRD Soundtrack",
        url: data_prefix.soundtrack_url,
      });

    if (data_prefix.rate_and_review_url)
      buttons.push({
        title: "Rate and Review",
        url: data_prefix.rate_and_review_url,
      });

    return buttons;
  };

  return (
    <ContentWithMenu title="Where the River Divides" buttons={getButtons()} />
  );
};

export default WhereTheRiverDivides;
