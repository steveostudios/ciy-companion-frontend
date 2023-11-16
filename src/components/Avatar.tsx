import styled from "@emotion/styled";
import { Icon } from "./Icon";

interface AvatarProps {
  image: string | undefined;
  alt: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <Container size={props.size}>
      {props.image ? (
        <Image src={props.image} alt={props.alt} />
      ) : (
        <Icon icon={`<i class="fa-solid fa-user"></i>`} size={6} />
      )}
    </Container>
  );
};

const Container = styled("div")((props: { size?: number }) => ({
  display: "flex",
  width: props.size ? `${props.size}rem` : "8rem",
  height: props.size ? `${props.size}rem` : "8rem",
  minWidth: props.size ? `${props.size}rem` : "8rem",
  minHeight: props.size ? `${props.size}rem` : "8rem",
  maxWidth: props.size ? `${props.size}rem` : "8rem",
  maxHeight: props.size ? `${props.size}rem` : "8rem",
  backgroundColor: "var(--grey)",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--dark-grey)",
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
});
