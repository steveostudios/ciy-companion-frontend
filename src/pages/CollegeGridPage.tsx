import styled from "@emotion/styled";
import Page from "../components/Page";
import AvatarIcon from "./../img/icons/avatar.svg";
import { StyledDivContent } from "../components/StyledDivContent";

interface College {
  url: string;
  name: string;
  hideImage: boolean;
  image?: {
    sizes?: {
      medium?: string;
    };
  };
}

interface Props {
  title: string;
  content?: string;
  colleges: College[];
}

export const CollegeGridPage: React.FC<Props> = (props) => {
  return (
    <Page
      padding={0}
      title={props.title}
      background="light"
      data={props.colleges && props.colleges.length > 0}
    >
      <div>
        {props.content && <StyledDivContent pad content={props.content} />}
        <CollegeGrid>
          {props.colleges.length > 0 &&
            props.colleges.map((college, i) => (
              <a key={i} href={college.url}>
                {!college.hideImage &&
                  (college?.image?.sizes?.medium ? (
                    <CollegeImage
                      src={college.image.sizes.medium}
                      alt={college.name}
                    />
                  ) : (
                    <CollegeImage src={AvatarIcon} alt={college.name} />
                  ))}
              </a>
            ))}
        </CollegeGrid>
      </div>
    </Page>
  );
};

const CollegeGrid = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "4rem",
  justifyContent: "center",
  paddingBottom: "4rem",
});

const CollegeImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
});
