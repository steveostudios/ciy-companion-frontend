import { Button, ContentWithMenu } from "../pages/ContentWithMenuPage";
import { getEvent } from "../helpers/event";

const Store: React.FC = () => {
  const event = getEvent();

  const data_prefix = event?.acf?.store;

  const getButtons = () => {
    const buttons: Button[] = [];
    if (data_prefix["pick-up_url"]) {
      buttons.push({
        title: "Pick up at Event",
        url: data_prefix["pick-up_url"],
      });
    }
    if (data_prefix["ship_url"]) {
      buttons.push({
        title: "Ship to my house",
        url: data_prefix["ship_url"],
      });
    }

    return buttons;
  };

  return <ContentWithMenu title="Store" buttons={getButtons()} />;
};

export default Store;
