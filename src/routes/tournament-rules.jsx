import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import { ExposedList } from "../components/List";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton from "../components/BorderButton";

const TournamentRules = (props) => {
  const { program, slug, rules } = useParams();
  const [event] = useContext(EventContext);

  if (rules) {
    return (
      <Page
        title="Tournament Rules"
        background="light"
        data={event?.acf?.[`${rules}_content`]}
      >
        <StyledDivContent content={event?.acf?.[`${rules}_content`]} />
      </Page>
    );
  }

  return (
    <Page
      title="Tournament Rules"
      background="light"
      data={
        event?.acf?.basketball_show ||
        event?.acf?.dodgeball_show ||
        event?.acf?.volleyball_show ||
        event?.acf?.ultimate_frisbee_show ||
        event?.acf?.soccer_show
      }
    >
      <ExposedList>
        {event?.acf?.basketball_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/basketball`}
              title="Basketball"
            />
          </li>
        )}
        {event?.acf?.dodgeball_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/dodgeball`}
              title="Dodgeball"
            />
          </li>
        )}
        {event?.acf?.volleyball_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/volleyball`}
              title="Volleyball"
            />
          </li>
        )}
        {event?.acf?.ultimate_frisbee_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/ultimate_frisbee`}
              title="Ultimate Frisbee"
            />
          </li>
        )}
        {event?.acf?.soccer_show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/soccer`}
              title="Soccer"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default TournamentRules;
