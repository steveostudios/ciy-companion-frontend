import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton from "../components/BorderButton";
import { useLocation } from "react-router-dom";
import { NormalList } from "../components/List";

interface Props {
  buttons?: Button[];
  content?: string;
}

interface Button {
  label: string;
  url: string;
  slug: string;
}

export const MenuPage: React.FC<Props> = (props) => {
  const { content, buttons } = props;
  const location = useLocation();

  return (
    <>
      {content && <StyledDivContent pad content={content} />}
      {buttons?.length && (
        <NormalList>
          {buttons.map((item: any, i: number) => (
            <BorderButton
              key={i}
              title={item.content.label}
              href={item.content.url}
              url={`${location.pathname}/${item.slug}`}
            />
          ))}
        </NormalList>
      )}
    </>
  );
};
