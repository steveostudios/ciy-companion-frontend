import { ComingSoonPage as PageProps } from "../helpers/types";
import { StyledDivContent } from "../components/StyledDivContent";
import BorderButton from "../components/BorderButton";
import { NormalList } from "../components/List";

export const ComingSoon: React.FC<PageProps> = (props) => {
  return (
    <>
      <StyledDivContent pad content={props.data.message} color="white" />
      <NormalList>
        <BorderButton
          title={props.data.label}
          href={props.data.url}
          color="white"
        />
        <BorderButton title="Back" href="/" color="white" />
      </NormalList>
    </>
  );
};
