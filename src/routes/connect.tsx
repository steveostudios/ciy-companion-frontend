import { ConnectPage } from "../pages/ConnectPage";
import { getEvent } from "../helpers/event";

const Connect: React.FC = () => {
  const event = getEvent();

  const data_prefix = event?.acf?.connect;

  const connections: any = Object.entries(data_prefix.service).map(
    (contact, i) => {
      return { service: contact[0], url: contact[1] };
    }
  );

  return <ConnectPage title="Connect" connections={connections} />;
};

export default Connect;
