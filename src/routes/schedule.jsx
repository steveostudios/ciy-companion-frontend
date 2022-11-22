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
        <ul>
          {event?.acf?.schedule.map((day, i) => (
            <DaySelectorButton
              key={i}
              className={currentDay === i ? "active" : ""}
              onClick={() => setCurrentDay(i)}
            >
              {i + 1}
            </DaySelectorButton>
          ))}
        </ul>
      </DaySelector>

      <EventList>
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
      </EventList>
    </Page>
  );
};

export default Schedule;

const DaySelector = styled("div")({
  margin: 0,
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

const EventList = styled(NormalList)({
  maxHeight: "calc(100% - 13rem)",
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
  (props) => ({
    backgroundColor: `var(--${props.color})`,
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
