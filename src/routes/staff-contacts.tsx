import { ContactsPage } from "../pages/ContactsPage";
import { ContactProps } from "../components/Contact";
import { getEvent } from "../helpers/event";

const StaffContacts = () => {
  const event = getEvent();

  const data_prefix = event?.acf?.staff_contact;

  return (
    <ContactsPage
      title="Staff Contacts"
      contacts={data_prefix?.contact.sort((a: ContactProps, b: ContactProps) =>
        a.name > b.name ? 1 : -1
      )}
    />
  );
};

export default StaffContacts;
