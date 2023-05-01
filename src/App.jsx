import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Program from "./routes/program";
import styled from "@emotion/styled";
import Event from "./routes/event";
import Convos from "./routes/convos";
import Selah from "./routes/selah";
import Store from "./routes/store";
import Schedule from "./routes/schedule";
import SeatingChart from "./routes/seating-chart";
import EventContacts from "./routes/event-contacts";
import Connect from "./routes/connect";
import TournamentRules from "./routes/tournament-rules";
import CampusMap from "./routes/campus-map";
import BeyondTheEvent from "./routes/beyond-the-event";
import NoMatch from "./routes/no-match";
import { api } from "./helpers/data";
import StaffContacts from "./routes/staff-contacts";
import AttendeeContacts from "./routes/attendee-contacts";
import LeaderResources from "./routes/leader-resources";
import Stage from "./routes/stage";
import OnCampusActivities from "./routes/on-campus-activities";
import Electives from "./routes/electives";
import WhereTheRiverDivides from "./routes/where-the-river-divides";

import ReactGA from "react-ga4";

ReactGA.initialize("G-G7MLPL3V6N");
ReactGA.send("pageview");

export const EventContext = createContext();
export const ColorsContext = createContext();
// export const ProgramsContext = createContext();

export default function BasicExample() {
  const [event, setEvent] = useState();
  const [colors, setColors] = useState([]);
  // const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const eventLocal = localStorage.getItem("event");

    try {
      if (eventLocal && JSON.parse(eventLocal)) {
        setEvent(JSON.parse(eventLocal));
      }
    } catch (e) {
      // return false;
    }
  }, []);

  useEffect(() => {
    const url = `${
      api[process.env.REACT_APP_ENV]
    }/wp-json/wp/v2/colors?_fields[]=id&_fields[]=acf.color&_fields[]=title.rendered`;
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setColors(
          data.map((item) => {
            return {
              id: item.id,
              color: item.acf.color,
              name: item.title.rendered,
            };
          })
        )
      );
  }, []);

  useEffect(() => {
    const url = `${
      api[process.env.REACT_APP_ENV]
    }/wp-json/wp/v2/colors?_fields[]=id&_fields[]=acf.color&_fields[]=title.rendered`;
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setColors(
          data.map((item) => {
            return {
              id: item.id,
              color: item.acf.color,
              name: item.title.rendered,
            };
          })
        )
      );
  }, []);

  useEffect(() => {
    localStorage.setItem("event", JSON.stringify(event));
  }, [event]);

  return (
    <Router>
      {/* <ProgramsContext.Provider value={[programs, setPrograms]}> */}
      <EventContext.Provider value={[event, setEvent]}>
        <ColorsContext.Provider value={[colors, setColors]}>
          <Body>
            <Routes>
              <Route exact path="/" element={<Root />} />
              <Route exact path="/:program" element={<Program />} />
              <Route exact path="/:program/:slug" element={<Event />} />
              <Route
                exact
                path="/:program/:slug/schedule"
                element={<Schedule />}
              />
              <Route
                exact
                path="/:program/:slug/seating-chart"
                element={<SeatingChart />}
              />
              <Route
                exact
                path="/:program/:slug/seating-chart/:chart"
                element={<SeatingChart />}
              />
              <Route
                exact
                path="/:program/:slug/campus-map"
                element={<CampusMap />}
              />
              <Route
                exact
                path="/:program/:slug/campus-map/:campusMap"
                element={<CampusMap />}
              />
              <Route
                exact
                path="/:program/:slug/event-contacts"
                element={<EventContacts />}
              />
              <Route
                exact
                path="/:program/:slug/on-campus-activities"
                element={<OnCampusActivities />}
              />
              <Route
                exact
                path="/:program/:slug/staff-contacts"
                element={<StaffContacts />}
              />
              <Route
                exact
                path="/:program/:slug/attendee-contacts"
                element={<AttendeeContacts />}
              />

              <Route exact path="/:program/:slug/store" element={<Store />} />
              <Route exact path="/:program/:slug/convos" element={<Convos />} />
              <Route exact path="/:program/:slug/selah" element={<Selah />} />
              <Route
                exact
                path="/:program/:slug/selah/:question"
                element={<Selah />}
              />
              <Route
                exact
                path="/:program/:slug/where-the-river-divides"
                element={<WhereTheRiverDivides />}
              />
              <Route
                exact
                path="/:program/:slug/tournament-rules"
                element={<TournamentRules />}
              />
              <Route
                exact
                path="/:program/:slug/tournament-rules/:rules"
                element={<TournamentRules />}
              />
              <Route
                exact
                path="/:program/:slug/electives"
                element={<Electives />}
              />
              <Route
                exact
                path="/:program/:slug/electives/:elective"
                element={<Electives />}
              />
              <Route
                exact
                path="/:program/:slug/beyond-the-event"
                element={<BeyondTheEvent />}
              />
              <Route
                exact
                path="/:program/:slug/beyond-the-event/:page"
                element={<BeyondTheEvent />}
              />
              <Route exact path="/:program/:slug/stage" element={<Stage />} />
              <Route
                exact
                path="/:program/:slug/stage/:page"
                element={<Stage />}
              />
              <Route
                exact
                path="/:program/:slug/leader-resources"
                element={<LeaderResources />}
              />
              <Route
                exact
                path="/:program/:slug/leader-resources/:page"
                element={<LeaderResources />}
              />
              <Route
                exact
                path="/:program/:slug/leader-resources/:page/:resourceId"
                element={<LeaderResources />}
              />
              <Route
                exact
                path="/:program/:slug/connect"
                element={<Connect />}
              />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Body>
        </ColorsContext.Provider>
      </EventContext.Provider>
      {/* </ProgramsContext.Provider> */}
    </Router>
  );
}

const Body = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  overflow: "hidden",
});
