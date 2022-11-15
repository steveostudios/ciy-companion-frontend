import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import EmailIcon from "./../img/icons/envelope.svg"
import styled from "@emotion/styled";

const EventContacts = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page title="Event Contacts">
      <Contacts>
        {event?.acf?.event_contact.length && event.acf.event_contact.map((contact, i) => (
          <Contact key={i}>
            <ContactImage src={contact.image} alt={contact.name} />
            <ContactMain>
              <ContactName>{contact.name}</ContactName>
              <ContactRole>{contact.role}</ContactRole>
            </ContactMain>
            <ContactMethods><a href={`mailto:${contact.email}`}><img src={EmailIcon} alt={`Email ${contact.name}`}/></a></ContactMethods>
          </Contact>
          ))}
      </Contacts>
    </Page>
  );
}

export default EventContacts;

const Contacts = styled("ul")({
  padding: 0,
  alignSelf: "center",
  flex: 1,
  margin: 0,
  maxHeight: "calc(100% - 18rem)",
  overflowY: "auto",
  width: "100%",
  maxWidth: "40rem",
  gap: "2rem",
})

const Contact = styled("li")({
  marginBottom: "2rem",
  display: "flex",
  gap: "2rem",
})

const ContactImage = styled("img")({
  width: "8rem",
  height: "8rem",
})

const ContactMain = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "column",
})

const ContactName = styled("div")({
  fontSize: "12px",
  fontWeight: "bold",
})

const ContactRole = styled("div")({
  textTransform: "uppercase",
})


const ContactMethods = styled("div")({

})