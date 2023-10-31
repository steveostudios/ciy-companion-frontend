import styled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import { useEffect, useState } from "react";
import { fetchEvent, getEvent } from "../helpers/event";
import { Page } from "../components/Page";

interface Props {
  items: Items[];
  event: {
    title: string;
    location: string;
    startDate: string;
    endDate: string;
  };
  onSetData: (data: any) => void;
  data: any;
  // onSetRoutes: (data: any) => void;
}

interface Items {
  slug: string;
  label: string;
  icon: string;
  url?: string;
}

export const EventMenu: React.FC<Props> = (props) => {
  const { program, event } = useParams();

  useEffect(() => {
    if (event !== undefined) {
      (async () => {
        const fetchedData = await getEvent(event);
        await props.onSetData(fetchedData);
      })();
    }
  }, []);

  return (
    <Page event={props.event}>
      <Menu>
        {props.items.map((item, index) => (
          <Button
            key={index}
            link={!item.url ? `/${program}/${event}/${item.slug}` : undefined}
            icon={item.icon}
            name={item.label}
            externalUrl={item?.url}
          />
        ))}
        <Button
          link={`/`}
          icon='<i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i>'
          name="Change Event"
        />
      </Menu>
    </Page>
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
  // maxHeight: "calc(100% - 18rem)",
  // width: "100%",
  // maxWidth: "40rem",
});

interface ButtonProps {
  link?: string;
  icon: string;
  name: string;
  externalUrl?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonWrapper>
      {props.link && (
        <Link to={props.link}>
          <Icon icon={props.icon} size={3} />
          <div>{props.name}</div>
        </Link>
      )}
      {!!props.externalUrl && (
        <a href={props.externalUrl}>
          <Icon icon={props.icon} size={3} />
          <div>{props.name}</div>
        </a>
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
