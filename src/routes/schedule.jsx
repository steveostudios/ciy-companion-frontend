import styled from "@emotion/styled";
import { useState, useContext } from "react";
import { EventContext } from "../App";
import { Icon } from "../components/Icon";
import { NormalList } from "../components/List";
import Page from "../components/Page";

const Schedule = (props) => {
  const [event] = useContext(EventContext);
  const [currentDay, setCurrentDay] = useState(0);

  return (
    <Page title="Schedule" background="light">
      <DaySelector>
        <span>DAY</span>
        {event?.acf?.schedule.map((day, i) => (
          <DaySelectorButton
            key={i}
            className={currentDay === i ? "active" : ""}
            onClick={() => setCurrentDay(i)}
          >
            {i + 1}
          </DaySelectorButton>
        ))}
      </DaySelector>

      <NormalList>
        {event?.acf?.schedule[currentDay]?.event.map((item, i) => (
          <Event key={i}>
            <EventIcon>
              <Icon slug={item.type} />
            </EventIcon>
            <EventMain>
              <EventName>{item.name}</EventName>
              {!!item.color.length && (
                <EventColors>
                  {item.color.length
                    ? item.color.map((color, i) => (
                        <EventColor color={color}>{color}</EventColor>
                      ))
                    : null}
                </EventColors>
              )}
              <EventLocation>{item.location}</EventLocation>
            </EventMain>
            <EventTime>{item.start_time}</EventTime>
          </Event>
        ))}
      </NormalList>
    </Page>
  );
};

export default Schedule;

const DaySelector = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  textTransform: "uppercase",
  fontSize: "32px",
  fontFamily: "PragmaticaExtended-ExtraBold",
  marginBottom: "2rem",
  span: {
    marginRight: "1rem",
  },
});

const DaySelectorButton = styled("li")({
  width: "6rem",
  height: "6rem",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  "&.active": {
    backgroundColor: "var(--move-secondary)",
  },
});

const Event = styled("li")({
  listStyle: "none",
  display: "flex",
  minHeight: "6rem",
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
  },
  (props) => ({
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
