import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { RootPage as PageProps } from "../helpers/types";

export const RootPage: React.FC<PageProps> = (props) => {
  return (
    <Menu>
      {props?.data?.buttons
        .filter((item: any) => item.enabled)
        .map((item, index) => (
          <Button
            key={index}
            url={item.url}
            slug={item.slug}
            icon={
              item.icon || '<i class="fa-solid fa-star" aria-hidden="true">'
            }
            name={item.label}
            external={item.type === "external"}
          />
        ))}
      <Button
        slug={`/`}
        icon='<i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i>'
        name="Change Event"
        external={false}
      />
    </Menu>
  );
};

const Menu = styled("ul")({
  padding: 0,
  margin: 0,
  alignSelf: "center",
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(3, 13rem)",
  gridAutoRows: "13rem",
  gap: "2px",
  overflowY: "scroll",
});

interface ButtonProps {
  url?: string;
  slug?: string;
  icon: string;
  name: string;
  external: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonWrapper>
      {props.external && (
        <a href={props.url}>
          <Icon icon={props.icon} size={3} />
          <div>{props.name}</div>
        </a>
      )}
      {!props.external && props.slug && (
        <Link to={props.slug}>
          <Icon icon={props.icon} size={3} />
          <div>{props.name}</div>
        </Link>
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled("li")({
  backgroundColor: "rgba(0,0,0,0.2)",
  width: "100%",
  height: "100%",
  "> *": {
    width: "inherit",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
  },
  a: {
    color: "var(--white)",
    textDecoration: "none",
    ".icon": {
      fontSize: "3rem",
    },
    "> div": {
      margin: "0 0.5rem",
    },
  },
});
