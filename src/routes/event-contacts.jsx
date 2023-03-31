import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { NormalList } from "../components/List";
import Contact from "../components/Contact";

const EventContacts = (props) => {
  const [event] = useContext(EventContext);
  return (
    <Page
      title="Event Contacts"
      background="light"
      data={event?.acf?.event_contact.contact.length > 0}
    >
      <NormalList>
        {event?.acf?.event_contact.contact.length > 0 &&
          event.acf.event_contact.contact
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contact, i) => <Contact key={i} {...contact} />)}
      </NormalList>
    </Page>
  );
};

export default EventContacts;
