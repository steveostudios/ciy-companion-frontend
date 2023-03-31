import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { NormalList } from "../components/List";
import Contact from "../components/Contact";

const StaffContacts = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="Staff Contacts"
      background="light"
      data={event?.acf?.staff_contact.contact.length > 0}
    >
      <NormalList>
        {event?.acf?.staff_contact.contact.length > 0 &&
          event.acf.staff_contact.contact
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contact, i) => <Contact key={i} {...contact} />)}
      </NormalList>
    </Page>
  );
};

export default StaffContacts;
