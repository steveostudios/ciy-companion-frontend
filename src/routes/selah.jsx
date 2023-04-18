import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton, { BorderButtonGroup } from "../components/BorderButton";
import { useParams } from "react-router-dom";

const Selah = (props) => {
  const { program, slug, question } = useParams();

  const [event] = useContext(EventContext);

  if (question) {
    console.log(question);
    return (
      <Page
        title="SELAH"
        background="light"
        data={
          event?.acf?.selah.questions && event?.acf?.selah.questions.length > 0
        }
      >
        <div>
          <h2>{event?.acf?.selah.questions[question].title}</h2>
          <StyledDivContent
            pad
            content={event?.acf?.selah.questions[question].content}
          />
        </div>
      </Page>
    );
  }

  return (
    <Page
      title="SELAH"
      background="light"
      data={
        event?.acf?.selah.questions && event?.acf?.selah.questions.length > 0
      }
    >
      <div>
        {event?.acf?.selah.questions && (
          <BorderButtonGroup>
            {event?.acf?.selah.questions.map((obj, i) => {
              return (
                <BorderButton
                  background="light"
                  key={i}
                  title={obj.title}
                  href={`/${program}/${slug}/selah/${i}`}
                />
              );
            })}
          </BorderButtonGroup>
        )}
      </div>
    </Page>
  );
};

export default Selah;
