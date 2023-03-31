import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { ExposedList } from "../components/List";
import BorderButton from "../components/BorderButton";

const Store = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="Store"
      background="light"
      data={event?.acf?.store["pick-up_url"] || event.acf.store.ship_url}
    >
      <ExposedList>
        {event?.acf?.store["pick-up_url"] && (
          <li>
            <BorderButton
              background="light"
              href={event.acf.store["pick-up_url"]}
              title="Pick up at Event"
            />
          </li>
        )}
        {event?.acf?.store.ship_url && (
          <li>
            <BorderButton
              background="light"
              href={event.acf.store.ship_url}
              title="Ship to my house"
            />
          </li>
        )}
      </ExposedList>
    </Page>
  );
};

export default Store;
