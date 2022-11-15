import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Root from "./routes/root"
import Program from "./routes/program"
import styled from "@emotion/styled";
import BackgroundImage from "./img/bg.png"
import Event from "./routes/event";
import Convos from "./routes/convos"
import Selah from "./routes/selah";
import Store from "./routes/store";
import DamageReport from "./routes/damage-report";
import Schedule from "./routes/schedule";
import SeatingChart from "./routes/seating-chart";
import EventContacts from "./routes/event-contacts";
import CampusContacts from "./routes/campus-contacts";
import Connect from "./routes/connect";
import TournamentRules from "./routes/tournament-rules";
import CampusMap from "./routes/campus-map";
import YouthGroupTimeQuestions from "./routes/youth-group-time-questions";
import BeyondTheEvent from "./routes/beyond-the-event";


export const EventContext = createContext()

export default function BasicExample() {
  const [event, setEvent] = useState();

  useEffect(() => {
    const eventLocal = localStorage.getItem('event')

    try {
      if (eventLocal && JSON.parse(eventLocal)) {
        setEvent(JSON.parse(eventLocal))
      }
    }
    catch(e) {
      // return false;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('event', JSON.stringify(event))
  }, [event])

  return (
    <Router>
      <EventContext.Provider value={[event, setEvent]}>
        <Body>
          <Header />
            <Routes>
              <Route exact path="/" element={<Root />} />
              <Route exact path="/move" element={<Program program="move" />} />
              <Route exact path="/mix" element={<Program program="mix" />} />
              <Route exact path="/superstart" element={<Program program="superstart" />} />
              <Route path="/move/:slug" element={<Event />} />
              <Route path="/move/:slug/schedule" element={<Schedule />} />
              <Route path="/move/:slug/seating-chart" element={<SeatingChart />} />
              <Route path="/move/:slug/seating-chart/:chart" element={<SeatingChart />} />
              <Route path="/move/:slug/campus-map" element={<CampusMap />} />
              <Route path="/move/:slug/campus-map/:campusMap" element={<CampusMap />} />
              <Route path="/move/:slug/event-contacts" element={<EventContacts />} />
              <Route path="/move/:slug/damage-report" element={<DamageReport />} />
              <Route path="/move/:slug/store" element={<Store />} />
              <Route path="/move/:slug/campus-contacts" element={<CampusContacts />} />
              <Route path="/move/:slug/convos" element={<Convos />} />
              <Route path="/move/:slug/selah" element={<Selah />} />
              <Route path="/move/:slug/tournament-rules" element={<TournamentRules />} />
              <Route path="/move/:slug/tournament-rules/:rules" element={<TournamentRules />} />
              <Route path="/move/:slug/youth-group-time-questions" element={<YouthGroupTimeQuestions />} />
              <Route path="/move/:slug/beyond-the-event" element={<BeyondTheEvent />} />
              <Route path="/move/:slug/connect" element={<Connect />} />
            </Routes>
        </Body>
      </EventContext.Provider>
    </Router>
  );
}

const Body = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  overflow: "hidden",
  backgroundColor: "var(--dark-grey)",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover"
})
