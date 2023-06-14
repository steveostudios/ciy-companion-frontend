import { getEvent } from "../helpers/event";
import { AppPage } from "../pages/AppPage";
import ConvosAppIcon from "./../img/ConvosAppIcon.png";

const Convos: React.FC = () => {
  const event = getEvent();

  const data_prefix = event?.acf?.convos;

  return (
    <AppPage
      title="Convos"
      icon={ConvosAppIcon}
      description={data_prefix.description}
      appStoreUrl={data_prefix.apple_store_url}
      googlePlayUrl={data_prefix.google_play_url}
    />
  );
};

export default Convos;
