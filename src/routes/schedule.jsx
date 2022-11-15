import styled from "@emotion/styled"
import { useState, useContext } from "react";
import { EventContext } from "../App";
import CheckEventIcon from "./../img/event_icons/check.svg"
// import ButtonAppleStore from "./../img/ButtonAppleStore.png"
// import ButtonGooglePlay from "./../img/ButtonGooglePlay.png"
import Page from "../components/Page";

const Schedule = (props) => {
  const [event] = useContext(EventContext);
  const [currentDay, setCurrentDay] = useState(1);

  return (
    <Page title="Schedule">
      <DaySelector>
        DAY {event?.acf?.schedule.map((day, i) => <DaySelectorButton key={i} className={currentDay === i ? "active" : ""} onClick={() => setCurrentDay(i)}>{i + 1}</DaySelectorButton>)}
      </DaySelector>

      <Events>
        {event?.acf?.schedule[currentDay]?.event.map((item, i) => (
          <Event key={i}>
            <EventIcon><img src={CheckEventIcon} alt="check" /></EventIcon>
            <EventMain>
              <EventName>
                {item.name}
              </EventName>
              <EventLocation>
                {item.location}
              </EventLocation>
            {item.color ? item.color.map((color, i) => <div key={i}>{color}</div>) : null}
            </EventMain>
            <EventTime>
              {item.start_time}
            </EventTime>
          </Event>))}
      </Events>
      </Page>
  );
}

export default Schedule;

const DaySelector = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  gap: "1rem",
  textTransform: "uppercase",
  fontSize: "24px",
  fontFamily: "PragmaticaExtended-ExtraBold",

})

const DaySelectorButton = styled("li")({
  padding: "1rem",
  "&.active": {
    backgroundColor: "red"
  }
})

const Events = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

const Event = styled("li")({
  listStyle: "none",
  display: "flex",
  minHeight: "6rem"
})

const EventIcon = styled("div")({
  width: "4rem",
  display: "flex",
  height: "inherit",
  alignItems: "center",
  justifyContent: "center",
})

const EventMain = styled("div")({
  flex: 1
})

const EventName = styled("div")({
  fontSize: "12px",
  fontWeight: "bold"
})

const EventLocation = styled("div")({
  display: "flex"
})

const EventTime = styled("div")({
  display: "flex"
})
