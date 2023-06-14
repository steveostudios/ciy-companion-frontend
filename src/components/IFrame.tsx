import styled from "@emotion/styled";
import { Spinner } from "./Spinner";

interface Props {
  url: string;
  title: string;
}

const IFrame: React.FC<Props> = (props) => {
  return (
    <>
      <SpinnerStyled />
      {props.url && (
        <iframe
          className="form"
          frameBorder="0"
          title={props.title}
          src={props.url}
        />
      )}
    </>
  );
};

export default IFrame;

const SpinnerStyled = styled(Spinner)({
  position: "absolute",
});
