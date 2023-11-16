import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { getHumanReadableDateRange } from "../helpers/data";
import { Logo } from "./Logo";

interface Props {
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}
export const Header: React.FC<Props> = (props) => {
  const { program, event } = useParams();
  console.log(program);

  return (
    <Container>
      <a href={`/${program}/${event}`}>
        <Logo slug={program} size={6} />
      </a>
      <p>
        <a href={`/${program}/${event}`}>
          {props.title} {props.location && `| ${props.location}`}
        </a>
      </p>
      {props.startDate && props.endDate && (
        <p>
          <a href={`/${program}/${event}`}>
            {getHumanReadableDateRange(props.startDate, props.endDate)}
          </a>
        </p>
      )}
    </Container>
  );
};

const Container = styled("nav")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--black)",
  height: "10rem",
  maxHeight: "10rem",
  margin: 0,
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
  color: "var(--white)",
  fontFamily: "PragmaticaExtended-ExtraBold",
  p: {
    margin: 0,
    fontSize: "14px",
    a: {
      color: "var(--white)",
      textDecoration: "none",
    },
  },
});
