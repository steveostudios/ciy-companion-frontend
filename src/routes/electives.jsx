import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import { ExposedList } from "../components/List";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton from "../components/BorderButton";

const Electives = (props) => {
  const { program, slug, elective } = useParams();
  const [event] = useContext(EventContext);

  if (elective) {
    return (
      <Page
        title="Electives"
        background="light"
        data={event?.acf?.electives?.[elective]?.content}
      >
        <StyledDivContent
          content={event?.acf?.electives?.[elective]?.content}
        />
      </Page>
    );
  }

  return (
    <Page
      title="Electives"
      background="light"
      data={
        event?.acf?.electives.engage_elective.show ||
        event?.acf?.electives.how_to_share_your_faith.show ||
        event?.acf?.electives.next_level.show ||
        event?.acf?.electives.so_you_wanna_go_into_ministry.show ||
        event?.acf?.electives.top_3_elective.show ||
        event?.acf?.electives.worship_101 ||
        event?.acf?.electives.the_alternative
      }
    >
      <ExposedList>
        {event?.acf?.electives.engage_elective.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/electives/engage_elective`}
              title="Engage Elective"
            />
          </li>
        )}
        {event?.acf?.electives.how_to_share_your_faith.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/electives/how_to_share_your_faith`}
              title="How to Share Your Faith"
            />
          </li>
        )}
        {event?.acf?.electives.next_level.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/electives/next_level`}
              title="Next Level"
            />
          </li>
        )}
        {event?.acf?.electives.so_you_wanna_go_into_ministry.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/electives/so_you_wanna_go_into_ministry`}
              title="So You Want to Go into Ministry?"
            />
          </li>
        )}
        {event?.acf?.electives.top_3_elective.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/electives/top_3_elective`}
              title="Top 3 Elective"
            />
          </li>
        )}
        {event?.acf?.electives.worship_101.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/electives/worship_101`}
              title="Worship 101"
            />
          </li>
        )}
        {event?.acf?.electives.the_alternative.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/electives/the_alternative`}
              title="The Alternative"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default Electives;
