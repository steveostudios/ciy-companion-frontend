import { NormalList } from "../components/List";
import { useState } from "react";
import { StyledDivContent } from "../components/StyledDivContent";
import { Contact, ContactProps } from "../components/Contact";
import { Bio } from "../components/Bio";

interface Props {
  contacts: ContactProps[];
  description: string;
}

export const ContactsPage: React.FC<Props> = (props) => {
  const [currentContact, setCurrentContact] = useState<ContactProps | null>(
    null
  );

  return (
    <>
      {!currentContact && (
        <>
          {props.description && (
            <StyledDivContent content={props.description} />
          )}
          <NormalList>
            {props.contacts.map((contact, i) => (
              <Contact
                key={i}
                {...contact}
                onCurrentContact={setCurrentContact}
              />
            ))}
          </NormalList>
        </>
      )}
      {currentContact && (
        <Bio contact={currentContact} onClose={() => setCurrentContact(null)} />
      )}
    </>
  );
};
