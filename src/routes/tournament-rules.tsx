import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
import { Button, ContentWithMenu } from "../pages/ContentWithMenuPage";

const TournamentRules: React.FC = () => {
  const { program, slug, rules } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.tournament_rules;
  const url_prefix = `/${program}/${slug}/tournament-rules`;

  if (rules) {
    return (
      <ContentWithMenu
        title="Tournament Rules"
        content={data_prefix?.[rules]?.content}
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
    basketball: {
      title: "Basketball",
      url: `${url_prefix}/basketball`,
    },
    dodgeball: {
      title: "Dodgeball",
      url: `${url_prefix}/dodgeball`,
    },
    volleyball: {
      title: "Volleyball",
      url: `${url_prefix}/volleyball`,
    },
    ultimate_frisbee: {
      title: "Ultimate Frisbee",
      url: `${url_prefix}/ultimate_frisbee`,
    },
    soccer: {
      title: "Soccer",
      url: `${url_prefix}/soccer`,
    },
    super_smash_bros: {
      title: "Super Smash Bros",
      url: `${url_prefix}/super_smash_bros`,
    },
    kajabi: {
      title: "Kajabi",
      url: `${url_prefix}/kajabi`,
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

  return <ContentWithMenu title="Tournament Rules" buttons={getButtons()} />;
};

export default TournamentRules;
