import { ContactsPage } from "../pages/ContactsPage";
import { ContactProps } from "../components/Contact";
import { getEvent } from "../helpers/event";

const AttendeeContacts = () => {
  const event = getEvent();

  const data_prefix = event?.acf?.attendee_contact;

  return (
    <ContactsPage
      title="Attendee Contacts"
      contacts={data_prefix.contact.sort((a: ContactProps, b: ContactProps) =>
        a.name > b.name ? 1 : -1
      )}
    />
  );
};

export default AttendeeContacts;
