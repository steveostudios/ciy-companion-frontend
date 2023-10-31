import styled from "@emotion/styled";
interface Props {
  icon: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<Props> = (props) => {
  return (
    <Container
      size={props.size}
      color={props.color}
      dangerouslySetInnerHTML={{
        __html: props.icon || "",
      }}
    />
  );
};

const Container = styled("span")(
  (props: { size?: number; color?: string }) => ({
    fontSize: props.size + "rem" || "inherit",
    color: props.color || "inherit",
    display: "flex",
    ".fa-kit": {
      lineHeight: "3rem",
    },
  })
);
