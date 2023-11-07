import styled from "@emotion/styled";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export interface ContactProps {
  name: string;
  role: string;
  city?: string;
  state?: string;
  phone?: string;
  email?: string;
  description?: string;
  url?: string;
  image: string;
  hideImage?: boolean;
  onCurrentContact?: any;
}

export const Contact: React.FC<ContactProps> = (props) => {
  return (
    <Container>
      <Avatar image={props.image} alt={props.name} />
      <Main>
        <Name>{props.name}</Name>
        <Role>{props.role}</Role>
        {(props.city || props.state) && (
          <Location>
            {props.city}, {props.state}
          </Location>
        )}
      </Main>
      <Methods>
        {props.phone && (
          <a href={`tel:${props.phone}`}>
            <Icon icon={`<i class="fa-solid fa-phone"></i>`} size={2.5} />
          </a>
        )}
        {props.email && (
          <a href={`mailto:${props.email}`}>
            <Icon icon={`<i class="fa-solid fa-envelope"></i>`} size={2.5} />
          </a>
        )}
        {props.description && (
          <div
            className="icon"
            onClick={() => props.onCurrentContact({ ...props })}
          >
            <Icon
              icon={`<i class="fa-solid fa-chevron-right"></i>`}
              size={2.5}
            />
          </div>
        )}
        {props.url && (
          <a href={props.url}>
            <Icon icon={`<i class="fa-solid fa-link"></i>`} size={2.5} />
          </a>
        )}
      </Methods>
    </Container>
  );
};

const Container = styled("li")({
  marginBottom: "2rem",
  display: "flex",
  gap: "2rem",
  alignItems: "flex-start",
  justifyContent: "center",
});

const Main = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

const Name = styled("div")({
  fontSize: "12px",
  fontWeight: "bold",
});

const Role = styled("div")({});

const Location = styled("div")({});

const Methods = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  a: {
    margin: 0,
    padding: 0,
    width: "4rem",
    display: "flex",
    textDecoration: "none",
    color: "var(--dark-grey)",
  },
  ".icon": {
    margin: 0,
    padding: 0,
    width: "4rem",
    display: "flex",
    textDecoration: "none",
    color: "var(--dark-grey)",
  },
});
