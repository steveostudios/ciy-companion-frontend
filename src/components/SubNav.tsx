import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon";

interface Props {
  title: string;
  program: string;
}

export const SubNav: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <Container program={props.program}>
      <Content>
        <BackButton onClick={() => navigate(-1)}>
          <Icon
            icon='<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>'
            size={3}
          />
        </BackButton>
        <H2>{props.title}</H2>
      </Content>
    </Container>
  );
};

const Container = styled("div")(
  {
    height: "10rem",
    display: "flex",
    gap: "1rem",
    color: "var(--black)",
    alignContent: "center",
  },
  (props: { program: string }) => ({
    backgroundColor: `var(--${props.program}-primary)`,
  })
);
const Content = styled("div")({
  height: "10rem",
  display: "flex",
  flex: 1,
  gap: "1rem",
  color: "var(--black)",
  alignContent: "center",
  width: "100vw",
  maxWidth: "40rem",
  margin: "0 auto",
});

const BackButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "10rem",
  width: "3rem",
  padding: 0,
});

const H2 = styled("h2")({
  textTransform: "uppercase",
  padding: 0,
  margin: 0,
  fontSize: "24px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  display: "flex",
  alignItems: "center",
});
