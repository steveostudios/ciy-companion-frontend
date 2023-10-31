import styled from "@emotion/styled";
import { Icon } from "../components/Icon";
import { StyledDivContent } from "../components/StyledDivContent";
import { Avatar } from "../components/Avatar";
import { ContactProps } from "../components/Contact";

interface Props {
  contact: ContactProps;
  onClose: () => void;
}

export const Bio: React.FC<Props> = (props) => {
  return (
    <Container>
      <Header>
        <Avatar
          size={16}
          image={props.contact.image?.sizes?.thumbnail}
          alt={props.contact.name}
        />
        <HeaderRight>
          <div
            onClick={props.onClose}
            style={{ justifySelf: "flex-end", textAlign: "right" }}
          >
            <Icon icon={`<i class="fa-solid fa-xmark"></i>`} size={2.5} />
          </div>
          <Name>{props.contact.name}</Name>
          <Role>{props.contact.role}</Role>
        </HeaderRight>
      </Header>
      <Main>{<StyledDivContent content={props.contact.description} />}</Main>
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
  backgroundColor: "var(--white)",
});
const Header = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
});

const HeaderRight = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  "> *": {
    display: "flex",
    ":first-child": {
      justifyContent: "flex-end",
    },
  },
});
const Main = styled("div")({
  display: "flex",
  flex: 1,
  padding: "0rem",
  flexDirection: "column",
});

const Name = styled("div")({
  fontSize: "18px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-between",
});

const Role = styled("div")({
  fontSize: "14px",
});
