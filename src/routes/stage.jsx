import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import AvatarIcon from "./../img/icons/avatar.svg";
import Contact from "../components/Contact";

import styled from "@emotion/styled";
import { NormalList } from "../components/List";
import { useParams } from "react-router-dom";
import { StyledDivContent } from "../components/StyledDivContent";

const Stage = (props) => {
  const [event] = useContext(EventContext);
  const { program, slug, page } = useParams();
  const contact = event?.acf?.stage_contacts?.contact
    ? event?.acf?.stage_contacts?.contact.sort((a, b) =>
        a.name > b.name ? 1 : -1
      )[parseInt(page)]
    : null;

  if (contact) {
    return (
      <Page title={contact.name} background="light" data={true}>
        <IndContact>
          <IndContactHeader>
            {contact?.image?.sizes?.medium ? (
              <IndContactImageContainer>
                <IndContactImage
                  src={contact.image.sizes.medium}
                  alt={contact.name}
                />
              </IndContactImageContainer>
            ) : (
              <IndContactImageContainer>
                <IndContactImage src={AvatarIcon} alt={contact.name} />
              </IndContactImageContainer>
            )}
            <div>
              <IndContactName>{contact.name}</IndContactName>
              <IndContactRole>{contact.role}</IndContactRole>
            </div>
          </IndContactHeader>

          <IndContactMain>
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
      data={
        event?.acf?.stage_contacts.contact &&
        event?.acf?.stage_contacts.contact.length > 0
      }
    >
      <NormalList>
        {event?.acf?.stage_contacts.contact.length > 0 &&
          event.acf.stage_contacts.contact
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((contact, i) => (
              <Contact
                key={i}
                {...contact}
                href={`/${program}/${slug}/stage/${i}`}
              />
            ))}
      </NormalList>
    </Page>
  );
};

export default Stage;

const IndContact = styled("div")({
  marginBottom: "2rem",
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
});
const IndContactImageContainer = styled("div")({
  display: "flex",
});
const IndContactHeader = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
});
const IndContactImage = styled("img")({
  width: "24rem",
  height: "24rem",
  objectFit: "cover",
});
const IndContactMain = styled("div")({
  display: "flex",
  flex: 1,
  padding: "0rem",
  flexDirection: "column",
});

const IndContactName = styled("div")({
  fontSize: "18px",
  fontWeight: "bold",
});

const IndContactRole = styled("div")({
  fontSize: "14px",
});
