import styled from "@emotion/styled";
import Page from "../components/Page";
import AvatarIcon from "./../img/icons/avatar.svg";

import { StyledDivContent } from "../components/StyledDivContent";

interface Props {
  title: string;
  name: string;
  role: string;
  image?: string;
  bio: string;
}

export const BioPage: React.FC<Props> = (props) => {
  return (
    <Page title={props.name} background="light" data={true}>
      <IndContact>
        <IndContactHeader>
          {props?.image ? (
            <IndContactImageContainer>
              <IndContactImage src={props.image} alt={props.name} />
            </IndContactImageContainer>
          ) : (
            <IndContactImageContainer>
              <IndContactImage src={AvatarIcon} alt={props.name} />
            </IndContactImageContainer>
          )}
          <div>
            <IndContactName>{props.name}</IndContactName>
            <IndContactRole>{props.role}</IndContactRole>
          </div>
        </IndContactHeader>

        <IndContactMain>
          {<StyledDivContent content={props.bio} />}
        </IndContactMain>
      </IndContact>
    </Page>
  );
};

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
