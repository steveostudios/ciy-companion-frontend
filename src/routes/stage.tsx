import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
import { ContactsPage } from "../pages/ContactsPage";
import { ContactProps } from "../components/Contact";
import { BioPage } from "../pages/BioPage";

const Stage = () => {
  const { program, slug, page } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.stage_contacts;
  const url_prefix = `/${program}/${slug}/stage`;

  const contact =
    data_prefix?.contact && page !== undefined
      ? data_prefix?.contact.sort((a: ContactProps, b: ContactProps) =>
          a.name > b.name ? 1 : -1
        )[parseInt(page)]
      : null;

  if (contact) {
    return (
      <BioPage
        title={contact.name}
        name={contact.name}
        role={contact.role}
        bio={contact.bio}
        image={contact?.image?.sizes?.medium}
      />
    );
  }

  return (
    <ContactsPage
      title="On Stage"
      contacts={data_prefix.contact
        .sort((a: ContactProps, b: ContactProps) => (a.name > b.name ? 1 : -1))
        .map((item: any, i: number) => ({
          ...item,
          href: `${url_prefix}/${i}`,
        }))}
    />
  );
};

export default Stage;
