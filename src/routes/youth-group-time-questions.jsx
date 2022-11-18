import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import { ExposedList } from "../components/List";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton from "../components/BorderButton";

const YouthGroupTimeQuestions = (props) => {
  const { program, slug, set } = useParams();
  const [event] = useContext(EventContext);

  if (set) {
    return (
      <Page title="Youth Group Time Questions" background="dark">
        <StyledDivContent
          content={event?.acf?.youth_group_time_questions_set?.[set].content}
        />
      </Page>
    );
  }

  return (
    <Page title="Youth Group Time Questions" background="dark">
      <ExposedList>
        {event?.acf?.youth_group_time_questions_show &&
          event?.acf?.youth_group_time_questions_set.length &&
          event?.acf?.youth_group_time_questions_set.map((item, i) => (
            <li>
              <BorderButton
                href={`/${program}/${slug}/youth-group-time-questions/${i}`}
                title={item.title}
              />
            </li>
          ))}
      </ExposedList>
    </Page>
  );
};

export default YouthGroupTimeQuestions;
