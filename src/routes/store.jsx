import Page from "../components/Page";
import ExposedList from "../components/ExposedList";
import { useContext } from "react";
import { EventContext } from "../App";

const Store = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page title="Store" background="dark">
      <ExposedList>
        {event?.acf?.selah_apple_store_url && <li><a href={event.acf.selah_apple_store_url}>Pick up at Event</a></li>}
        {event?.acf?.store_ship_url && <li><a href={event.acf.store_ship_url}>Ship to my house</a></li>}
      </ExposedList>
    </Page>
  );
}

export default Store;