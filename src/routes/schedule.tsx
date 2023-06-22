import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "../components/Icon";
import { NormalList } from "../components/List";
import Page from "../components/Page";
import { getEvent } from "../helpers/event";
import { IColor, getColors } from "../helpers/colors";

const Schedule: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const { program } = useParams();

  const event = getEvent();

  useEffect(() => {
    (async () => {
      await getColors();
    })();
  });
  const colors: IColor[] = getColors();

  const data_prefix = event?.acf?.schedule;

  return (
    <Page
      title="Schedule"
      background="light"
      data={data_prefix.schedule.length > 0}
    >
      <Container>
        {event?.acf?.schedule.schedule.length && (
          <DaySelector>
            <span>DAY</span>
            <ul>
              {event?.acf?.schedule.schedule.map((day: any, i: number) => (
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
        )}

        {event?.acf?.schedule.schedule.length && (
          <EventList>
            {event?.acf?.schedule.schedule[currentDay]?.event.map(
              (item: any, i: number) => (
                <Event key={i}>
                  <EventIcon>
                    <Icon slug={item.type} />
                  </EventIcon>
                  <EventMain>
                    <EventName>{item.name}</EventName>
                    {!!item.colors.length && (
                      <EventColors>
                        {item.colors && item.colors.length
                          ? item.colors.map((colorId: any, i: number) => {
                              const thisColor = colors.find(
                                (item: IColor) => item.id === colorId
                              ) || { name: "", color: "" };

                              return (
                                <EventColor key={i} color={thisColor.color}>
                                  {thisColor.name}
                                </EventColor>
                              );
                            })
                          : null}
                      </EventColors>
                    )}
                    <EventLocation>{item.location}</EventLocation>
                  </EventMain>
                  <EventTime>{item.start_time}</EventTime>
                </Event>
              )
            )}
          </EventList>
        )}
      </Container>
    </Page>
  );
};

export default Schedule;

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
});

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
  maxHeight: "calc(100% - 13rem)",
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
