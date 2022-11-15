import Page from "../components/Page";
import ExposedList from "../components/ExposedList";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";

const TournamentRules = (props) => {
  const {slug, rules } = useParams();
  const [event] = useContext(EventContext);
 
  if (rules ) { 
    return (
      <Page title="Tournament Rules" background="dark">
        <div dangerouslySetInnerHTML={{__html: event?.acf?.[`${rules}_content`] || ""}} />
      </Page>
    )
  }

  return (
    <Page title="Tournament Rules" background="dark">
      <ExposedList>
        {event?.acf?.basketball_show && <li><a href={`/move/${slug}/tournament-rules/basketball`}>Basketball</a></li>}
        {event?.acf?.dodgeball_show && <li><a href={`/move/${slug}/tournament-rules/dodgeball`}>Dodgeball</a></li>}
        {event?.acf?.volleyball_show && <li><a href={`/move/${slug}/tournament-rules/volleyball`}>Volleyball</a></li>}
        {event?.acf?.ultimate_frisbee_show && <li><a href={`/move/${slug}/tournament-rules/ultimate_frisbee`}>Ultimate Frisbee</a></li>}
        {event?.acf?.soccer_show && <li><a href={`/move/${slug}/tournament-rules/soccer`}>Soccer</a></li>}
      </ExposedList>
    </Page>
  );
}

export default TournamentRules;