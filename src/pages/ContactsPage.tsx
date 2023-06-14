import Contact, { ContactProps } from "../components/Contact";
import { NormalList } from "../components/List";
import Page from "../components/Page";

interface Props {
  title: string;
  contacts: ContactProps[];
}

export const ContactsPage: React.FC<Props> = (props) => {
  return (
    <Page
      padding={0}
      title={props.title}
      background="light"
      data={props.contacts && props.contacts.length > 0}
    >
      <NormalList>
        {props.contacts.map((contact, i) => (
          <Contact key={i} {...contact} />
        ))}
      </NormalList>
    </Page>
  );
};
