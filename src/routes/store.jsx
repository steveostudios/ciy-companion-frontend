import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { ExposedList } from "../components/List";
import BorderButton from "../components/BorderButton";

const Store = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page title="Store" background="dark">
      <ExposedList>
        {event?.acf?.selah_apple_store_url && (
          <li>
            <BorderButton
              href={event.acf["store_pick-up_url"]}
              title="Pick up at Event"
            />
          </li>
        )}
        {event?.acf?.store_ship_url && (
          <li>
            <BorderButton
              href={event.acf.store_ship_url}
              title="Ship to my house"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default Store;
