import styled from "@emotion/styled";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "../components/Icon";
import { NormalList } from "../components/List";
import { Day, Days, SchedulePage as PageProps } from "../helpers/types";

export const SchedulePage: React.FC<PageProps> = (props) => {
  const [currentDay, setCurrentDay] = useState(0);
  const { program } = useParams();

  return (
    <>
      {
        <DaySelector>
          <span>DAY</span>
          <ul>
            {props.data.days.map((day: Days, i: number) => (
              <DaySelectorButton
                program={program || ""}
                key={i}
                className={currentDay === i ? "active" : ""}
                onClick={() => setCurrentDay(i)}
              >
                {i + 1}
              </DaySelectorButton>
            ))}
          </ul>
        </DaySelector>
      }

      {
        <EventList>
          {props.data.days[currentDay].day.map((item: any, i: number) => (
            <Event key={i}>
              {/* <EventIcon>
                <Icon icon={item.icon} />
              </EventIcon> */}
              <EventMain>
                <EventName>{item.name}</EventName>
                {/* <EventColors>
                  {item.color.length &&
                    item.color.map((color: any, i: number) => (
                      <EventColor key={i} color={color.post_excerpt}>
                        {color.post_title}
                      </EventColor>
                    ))}
                </EventColors> */}
                <EventLocation>{item.location}</EventLocation>
              </EventMain>
              <EventTime>{item.time}</EventTime>
            </Event>
          ))}
        </EventList>
      }
    </>
  );
};

const DaySelector = styled("div")({
  margin: 0,
  marginBottom: "2rem",
  padding: 0,
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  textTransform: "uppercase",
  fontSize: "32px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  span: {
    marginRight: "1rem",
  },
  ul: {
    margin: 0,
    padding: 0,
    display: "flex",

    flexDirection: "row",
  },
});

const DaySelectorButton = styled("li")(
  {
    width: "6rem",
    height: "6rem",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  (props: { program: string }) => ({
    "&.active": {
      backgroundColor: `var(--${props.program}-secondary)`,
    },
  })
);

const EventList = styled(NormalList)({
  margin: 0,
});

const Event = styled("li")({
  padding: "2rem 0",
  listStyle: "none",
  display: "flex",
  boxSizing: "border-box",
  borderBottom: "1px solid var(--trim)",
});

const EventIcon = styled("div")({
  marginTop: "0.5rem",
  marginRight: "2rem",
  width: "2rem",
  display: "flex",
  height: "inherit",
  alignItems: "flex-start",
  justifyContent: "center",
});

const EventMain = styled("div")({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "0.5rem",
});

const EventName = styled("div")({
  fontSize: "12px",
  fontWeight: "bold",
  display: "flex",
});

const EventColors = styled("div")({
  display: "flex",
  gap: "1rem",
});

const EventColor = styled("div")(
  {
    padding: "0.5rem 1rem",
    textTransform: "uppercase",
    fontSize: "9px",
    fontWeight: "normal",
    display: "flex",
  },
  (props: { color: string }) => ({
    backgroundColor: props.color,
    color:
      props.color === "yellow" || props.color === "orange"
        ? "var(--black)"
        : "var(--white)",
  })
);

const EventLocation = styled("div")({
  display: "flex",
});

const EventTime = styled("div")({
  display: "flex",
  textTransform: "uppercase",
});
