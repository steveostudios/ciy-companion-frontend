import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
import { ContentWithMenu } from "../pages/ContentWithMenuPage";

const Selah: React.FC = () => {
  const { program, slug, question } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.selah;
  const url_prefix = `/${program}/${slug}/selah`;

  if (question) {
    console.log(question);
    return (
      <ContentWithMenu
        title="SELAH"
        heading={data_prefix.questions[question].title}
        content={data_prefix.questions[question].content}
      />
    );
  }

  return (
    <ContentWithMenu
      title="SELAH"
      buttons={data_prefix.questions.map((item: any, i: number) => ({
        title: item.title,
        url: `${url_prefix}/${i}`,
      }))}
    />
  );
};

export default Selah;
