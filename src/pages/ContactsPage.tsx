import { NormalList } from "../components/List";
import { useState } from "react";
import { StyledDivContent } from "../components/StyledDivContent";
import { Contact, ContactProps } from "../components/Contact";
import { Bio } from "../components/Bio";
import { ContactsPage as PageProps } from "../helpers/types";

export const ContactsPage: React.FC<PageProps> = (props) => {
  const [currentContact, setCurrentContact] = useState<ContactProps | null>(
    null
  );
  console.log(props);

  return (
    <>
      {!currentContact && (
        <>
          {props.data.description && (
            <StyledDivContent content={props.data.description} />
          )}
          {props.data.contacts.length > 0 && (
            <NormalList>
              {props.data.contacts.map((contact, i) => (
                <Contact
                  key={i}
                  {...contact}
                  onCurrentContact={setCurrentContact}
                />
              ))}
            </NormalList>
          )}
        </>
      )}
      {currentContact && (
        <Bio contact={currentContact} onClose={() => setCurrentContact(null)} />
      )}
    </>
  );
};
