import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import PhoneIcon from "./../img/icons/phone-dark.svg"
import styled from "@emotion/styled";

const CampusContacts = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page title="Campus Contacts">
      <Contacts>
        {event?.acf?.campus_contact.length && event.acf.campus_contact.map((contact, i) => (
          <Contact key={i}>
            <ContactMain>
              <ContactTitle>{contact.title}</ContactTitle>
              <ContactDescription>{contact.description}</ContactDescription>
              <ContactPhone>{contact.phone_number}</ContactPhone>
            </ContactMain>
            <ContactMethods><a href={`tel:${contact.phone_number}`}><img src={PhoneIcon} alt={`Email ${contact.name}`}/></a></ContactMethods>
          </Contact>
          ))}
      </Contacts>
    </Page>
  );
}

export default CampusContacts;

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

const ContactMain = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "column",
})

const ContactTitle = styled("div")({
  fontSize: "12px",
  fontWeight: "bold",
})

const ContactDescription = styled("div")({
})

const ContactPhone = styled("div")({
  fontSize: "12px",
  fontWeight: "bold",
})

const ContactMethods = styled("div")({

})