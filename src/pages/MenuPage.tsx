import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton from "../components/BorderButton";
import { useLocation } from "react-router-dom";
import { NormalList } from "../components/List";
import { MenuPage as PageProps } from "../helpers/types";

export const MenuPage: React.FC<PageProps> = (props) => {
  const location = useLocation();

  return (
    <>
      {props.data.description && (
        <StyledDivContent pad content={props.data.description} />
      )}
      {props.data.buttons?.length && (
        <NormalList>
          {props.data.buttons.map((item: any, i: number) => (
            <BorderButton
              key={i}
              title={item.label}
              href={item.href}
              url={`${location.pathname}/${item.slug}`}
            />
          ))}
        </NormalList>
      )}
    </>
  );
};
