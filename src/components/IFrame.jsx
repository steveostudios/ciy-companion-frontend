import styled from "@emotion/styled";
import { Spinner } from "./Spinner";

const IFrame = (props) => {
  return (
    <>
      <SpinnerStyled />
      {props.url && (
        <iframe frameBorder="0" title={props.title} src={props.url} />
      )}
    </>
  );
};

export default IFrame;

const SpinnerStyled = styled(Spinner)({
  position: "absolute",
});
