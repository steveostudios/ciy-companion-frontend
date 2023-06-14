import { useParams } from "react-router-dom";
import { Button, ContentWithMenu } from "../pages/ContentWithMenuPage";
import { getEvent } from "../helpers/event";

const Electives: React.FC = () => {
  const { program, slug, elective } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.electives;
  const url_prefix = `/${program}/${slug}/electives`;

  if (elective) {
    return (
      <ContentWithMenu
        title="Electives"
        content={data_prefix[elective].content}
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
    engage_elective: {
      title: "Engage Elective",
      url: `${url_prefix}/engage_elective`,
    },
    how_to_share_your_faith: {
      title: "How to Share Your Faith",
      url: `${url_prefix}/how_to_share_your_faith`,
    },
    next_level: {
      title: "Next Level",
      url: `${url_prefix}/next_level`,
    },
    so_you_wanna_go_into_ministry: {
      title: "So You Wanna Go Into Ministry?",
      url: `${url_prefix}/so_you_wanna_go_into_ministry`,
    },
    top_3_elective: {
      title: "Top 3 Elective",
      url: `${url_prefix}/top_3_elective`,
    },
    worship_101: {
      title: "Worship 101",
      url: `${url_prefix}/worship_101`,
    },
    the_alternative: {
      title: "The Alternative",
      url: `${url_prefix}/the_alternative`,
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

  return <ContentWithMenu title="Electives" buttons={getButtons()} />;
};

export default Electives;
