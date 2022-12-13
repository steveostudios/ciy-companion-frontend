import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import EmailIcon from "./../img/icons/envelope.svg";
import styled from "@emotion/styled";
import { NormalList } from "../components/List";

const AttendeeContacts = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page title="Attendee Contacts" background="light">
      <NormalList>
        {event?.acf?.attendee_contact.length &&
          event.acf.attendee_contact.map((contact, i) => (
            <Contact key={i}>
              <ContactImage
                src={contact.image.sizes.thumbnail}
                alt={contact.name}
              />
              <ContactMain>
                <ContactName>{contact.name}</ContactName>
                <ContactRole>{contact.role}</ContactRole>
              </ContactMain>
              <ContactMethods>
                <a href={`mailto:${contact.email}`}>
                  <img src={EmailIcon} alt={`Email ${contact.name}`} />
                </a>
              </ContactMethods>
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

const ContactImage = styled("img")({
  width: "8rem",
  height: "8rem",
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

const ContactMethods = styled("div")({});
