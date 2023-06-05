import IFrame from "../components/IFrame";
import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import BorderButton, { BorderButtonGroup } from "../components/BorderButton";
import { useParams } from "react-router-dom";
import { StyledDivContent } from "../components/StyledDivContent";

const WhereTheRiverDivides = (props) => {
  const [event] = useContext(EventContext);
  const { program, slug, page, resourceId } = useParams();

  if (page === "prayers" && resourceId) {
    return (
      <Page
        title={event?.acf?.where_the_river_divides.prayers[resourceId].name}
        background="light"
        data={event?.acf?.where_the_river_divides.prayers[resourceId].content}
      >
        <StyledDivContent
          pad
          content={
            event?.acf?.where_the_river_divides.prayers[resourceId].content
          }
        />
      </Page>
    );
  }

  if (page === "prayers") {
    return (
      <Page
        title="Where the River Divides"
        background="light"
        data={event?.acf?.where_the_river_divides.prayers.length > 0}
      >
        <BorderButtonGroup>
          {event?.acf?.where_the_river_divides.prayers.length &&
            event?.acf?.where_the_river_divides.prayers.map((prayer, i) => (
              <BorderButton
                key={i}
                background="light"
                href={`/${program}/${slug}/where-the-river-divides/prayers/${i}`}
                title={prayer.name}
              />
            ))}
        </BorderButtonGroup>
      </Page>
    );
  }

  if (page === "host") {
    return (
      <Page
        title="Where the River Divides"
        background="light"
        data={event?.acf?.where_the_river_divides.url}
      >
        <IFrame
          url={event?.acf?.where_the_river_divides.url}
          title="Where the River Divides"
        />
      </Page>
    );
  }

  return (
    <Page
      title="Where the River Divides"
      background="light"
      data={
        event?.acf?.where_the_river_divides.url ||
        event?.acf?.where_the_river_divides.prayers.length > 0
      }
    >
      <BorderButtonGroup>
        <BorderButton
          background="light"
          href={`/${program}/${slug}/where-the-river-divides/host`}
          title="Recreate the WTRD Experience"
        />
        <BorderButton
          background="light"
          href={`/${program}/${slug}/where-the-river-divides/prayers`}
          title="Prayers"
        />
      </BorderButtonGroup>
    </Page>
  );
};

export default WhereTheRiverDivides;
