import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import styled from "@emotion/styled";
import { NormalList } from "../components/List";

const AttendeeContacts = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="Attendee Contacts"
      background="light"
      data={event?.acf?.attendee_contact.length > 0}
    >
      <NormalList>
        {event?.acf?.attendee_contact.length &&
          event.acf.attendee_contact
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contact, i) => (
              <Contact key={i}>
                <ContactMain>
                  <ContactName>{contact.name}</ContactName>
                  <ContactRole>
                    {contact.role} at {contact.church}
                  </ContactRole>
                  <ContactLocation>
                    {contact.city}, {contact.state}
                  </ContactLocation>
                </ContactMain>
              </Contact>
            ))}
      </NormalList>
    </Page>
  );
};

export default AttendeeContacts;

const Contact = styled("li")({
  marginBottom: "2rem",
  display: "flex",
  gap: "2rem",
});

const ContactMain = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

const ContactName = styled("div")({
  fontSize: "12px",
  fontWeight: "bold",
});

const ContactRole = styled("div")({
  textTransform: "uppercase",
});

const ContactLocation = styled("div")({
  textTransform: "uppercase",
});
