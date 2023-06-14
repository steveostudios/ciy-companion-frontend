import { ContactsPage } from "../pages/ContactsPage";
import { getEvent } from "../helpers/event";

const EventContacts = () => {
  const event = getEvent();

  const data_prefix = event?.acf?.event_contact;

  return (
    <ContactsPage title="Event Contacts" contacts={data_prefix?.contact} />
  );
};

export default EventContacts;
