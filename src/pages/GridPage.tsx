import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton from "../components/BorderButton";
import { useLocation } from "react-router-dom";
import { NormalList } from "../components/List";
import styled from "@emotion/styled";

interface Props {
  title: string;
  images?: Images[];
  content?: string;
}

interface Images {
  label: string;
  url: string;
  image: string;
}

export const GridPage: React.FC<Props> = (props) => {
  const { content, images } = props;

  return (
    <>
      {content && <StyledDivContent pad content={content} />}
      {images?.length && (
        <NormalList>
          {images.map((item: any, i: number) => (
            <ImageLink href={item.url} key={i}>
              <img width="100%" src={item.image.url} alt={item.label} />
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
