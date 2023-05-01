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
        data={event?.acf?.tournament_rules?.[rules]?.content}
      >
        <StyledDivContent
          content={event?.acf?.tournament_rules?.[rules]?.content}
        />
      </Page>
    );
  }

  return (
    <Page
      title="Tournament Rules"
      background="light"
      data={
        event?.acf?.tournament_rules.basketball.show ||
        event?.acf?.tournament_rules.dodgeball.show ||
        event?.acf?.tournament_rules.volleyball.show ||
        event?.acf?.tournament_rules.ultimate_frisbee.show ||
        event?.acf?.tournament_rules.soccer.show ||
        event?.acf?.tournament_rules.super_smash_bros.show ||
        event?.acf?.tournament_rules.kajabi.show
      }
    >
      <ExposedList>
        {event?.acf?.tournament_rules.basketball.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/basketball`}
              title="Basketball"
            />
          </li>
        )}
        {event?.acf?.tournament_rules.dodgeball.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/dodgeball`}
              title="Dodgeball"
            />
          </li>
        )}
        {event?.acf?.tournament_rules.volleyball.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/volleyball`}
              title="Volleyball"
            />
          </li>
        )}
        {event?.acf?.tournament_rules.ultimate_frisbee.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/ultimate_frisbee`}
              title="Ultimate Frisbee"
            />
          </li>
        )}
        {event?.acf?.tournament_rules.soccer.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/soccer`}
              title="Soccer"
            />
          </li>
        )}
        {event?.acf?.tournament_rules.super_smash_bros.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/super_smash_bros`}
              title="Super Smash Bros"
            />
          </li>
        )}
        {event?.acf?.tournament_rules.kajabi.show && (
          <li>
            <BorderButton
              background="light"
              href={`/${program}/${slug}/tournament-rules/kajabi`}
              title="Kajabi"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default TournamentRules;
