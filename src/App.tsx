import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { DynamicRoute } from "./routes/DynamicRoute";
import RootMenu from "./routes/RootMenu";
import NoMatch from "./routes/no-match";
import { ProgramMenu } from "./routes/ProgramMenu";

// ReactGA.initialize("G-G7MLPL3V6N");
// ReactGA.send("pageview");

export default function BasicExample() {
  return (
    <Router>
      <Body>
        <Routes>
          {/* <Route
            path="/:program/:event/:slug/:subSlug/:subSubSlug/:subSubSubSlug"
            element={<DynamicRoute />}
          />
          <Route
            path="/:program/:event/:slug/:subSlug/:subSubSlug"
            element={<DynamicRoute />}
          /> */}
          <Route
            path="/:program/:event/:slug/:subSlug/*"
            element={<DynamicRoute />}
          />
          <Route path="/:program/:event/:slug" element={<DynamicRoute />} />
          <Route path="/:program/:event" element={<DynamicRoute />} />
          <Route path="/:program" element={<ProgramMenu />} />
          <Route path="/" element={<RootMenu />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Body>
    </Router>
  );
}

const Body = styled("div")({
  height: "100svh",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  overflow: "hidden",
});
