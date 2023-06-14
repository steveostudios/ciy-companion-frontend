import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import BorderButton, { ButtonBackground } from "./BorderButton";

interface Props {
  noDataContent?: JSX.Element;
  title: string;
  background?: ButtonBackground;
}

export const NoData: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Message>
        {props.noDataContent || (
          <p>{`Missing ${props.title} data. Please check back later.`}</p>
        )}
      </Message>
      <BorderButton
        title="Back"
        onClick={() => navigate(-1)}
        background={props.background}
      />
    </div>
  );
};

export default NoData;

const Message = styled("div")({
  margin: "2rem",
  lineHeight: 1.5,
  minHeight: "calc(100vh - 44rem)",
  display: "flex",
  p: {
    fontSize: "2rem",
    marginBottom: "4rem",
  },
});
