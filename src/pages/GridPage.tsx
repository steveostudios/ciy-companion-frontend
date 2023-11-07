import { StyledDivContent } from "../components/StyledDivContent";
import { NormalList } from "../components/List";
import styled from "@emotion/styled";
import { GridPage as PageProps } from "../helpers/types";

export const GridPage: React.FC<PageProps> = (props) => {
  return (
    <>
      {props.data.description && (
        <StyledDivContent pad content={props.data.description} />
      )}
      {props.data.images?.length && (
        <NormalList>
          {props.data.images.map((item: any, i: number) => (
            <ImageLink href={item.url} key={i}>
              <img width="100%" src={item.image} alt={item.label} />
            </ImageLink>
          ))}
        </NormalList>
      )}
    </>
  );
};

const ImageLink = styled("a")({
  display: "flex",
  margin: "0 auto 4rem auto",
  width: "80%",
  img: {},
});
