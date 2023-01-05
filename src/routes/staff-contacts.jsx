import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import EmailIcon from "./../img/icons/envelope.svg";
import PhoneIcon from "./../img/icons/phone-dark.svg";
import AvatarIcon from "./../img/icons/avatar.svg";
import styled from "@emotion/styled";
import { NormalList } from "../components/List";

const StaffContacts = (props) => {
  const [event] = useContext(EventContext);

  return (
    <Page
      title="Staff Contacts"
      background="light"
      data={event?.acf?.staff_contact.length > 0}
    >
      <NormalList>
        {event?.acf?.staff_contact.length &&
          event.acf.staff_contact
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contact, i) => (
              <Contact key={i}>
                {contact?.image?.sizes?.thumbnail ? (
                  <ContactImage
                    src={contact.image.sizes.thumbnail}
                    alt={contact.name}
                  />
                ) : (
                  <ContactImage src={AvatarIcon} alt={contact.name} />
                )}
                <ContactMain>
                  <ContactName>{contact.name}</ContactName>
                  <ContactRole>{contact.role}</ContactRole>
                </ContactMain>
                <ContactMethods>
                  {contact.phone_number && (
                    <a href={`tel:${contact.phone_number}`}>
                      <img src={PhoneIcon} alt={`Call ${contact.name}`} />
                    </a>
                  )}
                  {contact.email && (
                    <a href={`mailto:${contact.email}`}>
                      <img src={EmailIcon} alt={`Email ${contact.name}`} />
                    </a>
                  )}
                </ContactMethods>
              </Contact>
            ))}
      </NormalList>
    </Page>
  );
};

export default StaffContacts;

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

const ContactMethods = styled("div")({
  a: {
    marginLeft: "1rem",
  },
  img: {
    height: "2.5rem",
  },
});
