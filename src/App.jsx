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


export const EventContext = createContext()

export default function BasicExample() {
  const [event, setEvent] = useState();

  useEffect(() => {
    const eventLocal = JSON.parse(localStorage.getItem('event'))

    if (eventLocal) {
      setEvent(eventLocal)
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

            <Route path="/move/:slug/convos" element={<Convos />} />
            <Route path="/move/:slug/selah" element={<Selah />} />
            <Route path="/move/:slug/store" element={<Store />} />
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
