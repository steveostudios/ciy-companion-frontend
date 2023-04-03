import EmailIcon from "./../img/icons/envelope.svg";
import PhoneIcon from "./../img/icons/phone-dark.svg";
import AvatarIcon from "./../img/icons/avatar.svg";
import ChevronRightIcon from "./../img/icons/chevron-right.svg";

import styled from "@emotion/styled";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Contact = (props) => {
  return (
    <ContactContainer>
      <ConditionalWrapper
        condition={props.href}
        wrapper={(children) => <a href={props.href}>{children}</a>}
      >
        {!props.hideImage &&
          (props?.image?.sizes?.thumbnail ? (
            <ContactImage src={props.image.sizes.thumbnail} alt={props.name} />
          ) : (
            <ContactImage src={AvatarIcon} alt={props.name} />
          ))}
        <ContactMain>
          <ContactName>{props.name}</ContactName>
          <ContactRole>{props.role}</ContactRole>
          {(props.city || props.state) && (
            <ContactLocation>
              {props.city}, {props.state}
            </ContactLocation>
          )}
        </ContactMain>
        <ContactMethods>
          {props.phone_number && (
            <a href={`tel:${props.phone_number}`}>
              <img src={PhoneIcon} alt={`Call ${props.name}`} />
            </a>
          )}
          {props.email && (
            <a href={`mailto:${props.email}`}>
              <img src={EmailIcon} alt={`Email ${props.name}`} />
            </a>
          )}
          {props.bio && props.href && (
            <img src={ChevronRightIcon} alt="See more" />
          )}
        </ContactMethods>
      </ConditionalWrapper>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled("li")({
  marginBottom: "2rem",
  display: "flex",
  gap: "2rem",
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

const ContactRole = styled("div")({
  // textTransform: "uppercase",
});

const ContactLocation = styled("div")({});

const ContactMethods = styled("div")({
  a: {
    marginLeft: "1rem",
  },
  img: {
    height: "2.5rem",
  },
});
