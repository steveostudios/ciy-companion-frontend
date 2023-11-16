import styled from "@emotion/styled";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "../components/Icon";
import { NormalList } from "../components/List";
import { Day, Days, SchedulePage as PageProps } from "../helpers/types";

interface Color {
  slug: string;
  label: string;
  value: string;
  text: "black" | "white";
}

export const SchedulePage: React.FC<PageProps> = (props) => {
  const [currentDay, setCurrentDay] = useState(0);
  const { program } = useParams();

  const colors: Color[] = [
    { slug: "blue", label: "Blue", value: "#007fff", text: "white" },
    { slug: "pink", label: "Pink", value: "#db32b9", text: "white" },
    { slug: "purple", label: "Purple", value: "#9056a9", text: "white" },
    { slug: "green", label: "Green", value: "#00b44d", text: "white" },
    { slug: "yellow", label: "Yellow", value: "#ffdc00", text: "black" },
    { slug: "orange", label: "Orange", value: "#ff8600", text: "black" },
    { slug: "red", label: "Red", value: "#ff4136", text: "white" },
    { slug: "black", label: "Black", value: "#3f2f2f", text: "white" },
    { slug: "white", label: "White", value: "#ffe0e0", text: "black" },
    { slug: "gray", label: "Gray", value: "#999999", text: "black" },
    { slug: "brown", label: "Brown", value: "#87541b", text: "white" },
    { slug: "gold", label: "Gold", value: "#f7d331", text: "black" },
    { slug: "silver", label: "Silver", value: "#c9c9c9", text: "black" },
  ];

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
              <EventIcon>
                <Icon icon={item.icon} />
              </EventIcon>
              <EventMain>
                <EventName>{item.name}</EventName>
                <EventColors>
                  {item.color.length > 0 &&
                    item.color.map((color: any, i: number) => {
                      const colorObj = colors.find(
                        (item) => item.slug === color
                      );
                      if (colorObj)
                        return (
                          <EventColor
                            key={i}
                            color={colorObj.value}
                            text={colorObj.text}
                          >
                            {colorObj.label}
                          </EventColor>
                        );
                    })}
                </EventColors>
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
  (props: { color: string; text: "black" | "white" }) => ({
    padding: "0.5rem 1rem",
    textTransform: "uppercase",
    fontSize: "9px",
    fontWeight: "normal",
    display: "flex",
    backgroundColor: props.color,
    color: `var(--${props.text})`,
  })
);

const EventLocation = styled("div")({
  display: "flex",
});

const EventTime = styled("div")({
  display: "flex",
  textTransform: "uppercase",
});
