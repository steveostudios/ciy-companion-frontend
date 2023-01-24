import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import ChevronRightIcon from "./../img/icons/chevron-right.svg";
import AvatarIcon from "./../img/icons/avatar.svg";

import styled from "@emotion/styled";
import { NormalList } from "../components/List";
import { useParams } from "react-router-dom";
import { StyledDivContent } from "../components/StyledDivContent";

const Stage = (props) => {
  const [event] = useContext(EventContext);
  const { program, slug, page } = useParams();
  const contact = event?.acf?.stage_contacts[parseInt(page)];

  if (contact) {
    return (
      <Page title={contact.name} background="light" data={true}>
        <IndContact>
          {contact?.image?.sizes?.medium ? (
            <IndContactImage
              src={contact.image.sizes.medium}
              alt={contact.name}
            />
          ) : (
            <IndContactImage src={AvatarIcon} alt={contact.name} />
          )}
          <IndContactMain>
            <IndContactName>{contact.name}</IndContactName>
            {<StyledDivContent content={contact.bio} />}
          </IndContactMain>
        </IndContact>
      </Page>
    );
  }

  return (
    <Page
      title="On Stage"
      background="light"
      data={event?.acf?.stage_contacts.length > 0}
    >
      <NormalList>
        {event?.acf?.stage_contacts.length &&
          event.acf.stage_contacts
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contact, i) => (
              <Contact key={i}>
                <a href={`/${program}/${slug}/stage/${i}`}>
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
                    <ContactRole>{contact.title}</ContactRole>
                  </ContactMain>
                  <ContactMethods>
                    {contact.bio && (
                      <img src={ChevronRightIcon} alt="See more" />
                    )}
                  </ContactMethods>
                </a>
              </Contact>
            ))}
      </NormalList>
    </Page>
  );
};

export default Stage;

const Contact = styled("li")({
  display: "flex",
  a: {
    width: "100%",
    marginBottom: "2rem",
    gap: "2rem",
    display: "flex",
    textDecoration: "none",
    color: "var(--dark-grey)",
  },
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

const ContactRole = styled("div")({});

const ContactMethods = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  a: {
    marginLeft: "1rem",
  },
  img: {
    height: "2.5rem",
  },
});

const IndContact = styled("div")({
  marginBottom: "2rem",
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
});
const IndContactImage = styled("img")({
  maxWidth: "56rem",
  height: "auto",
});
const IndContactMain = styled("div")({
  display: "flex",
  flex: 1,
  padding: "2rem",
  flexDirection: "column",
});

const IndContactName = styled("div")({
  fontSize: "18px",
  fontWeight: "bold",
});
