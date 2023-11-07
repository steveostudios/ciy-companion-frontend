import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import NoMatch from "./routes/no-match";
import { EventPage } from "./routes/EventPage";
import { EventMenu } from "./routes/EventMenu";
import { ProgramMenu } from "./routes/ProgramMenu";
// import ReactGA from "react-ga4";
// import { data } from "./data.js";
import RootMenu from "./routes/RootMenu";
import { useState } from "react";
import { RouteType } from "./helpers/types";

// ReactGA.initialize("G-G7MLPL3V6N");
// ReactGA.send("pageview");

interface RouteProps {
  slug: string;
  type: string;
  path: string;
  // title?: string;
  data: any;
}

export default function BasicExample() {
  const [data, setData] = useState<any>();

  const onSetData = (data: any) => {
    setData(data);
  };

  console.log(data);

  return (
    <Router>
      <Body>
        <Routes>
          {data &&
            data.pages &&
            data.pages.filter((page: any) => page.type !== RouteType.ROOT)
              .length &&
            data.pages
              .filter((page: any) => page.type !== RouteType.ROOT)
              .map((page: any) => {
                return (
                  <Route key={page.slug} path="/:program/:event/:slug">
                    <Route
                      path="/:program/:event/:slug/:subSlug/:subSubSlug/:subSubSubSlug"
                      element={<EventPage data={data} onSetData={onSetData} />}
                    />
                    <Route
                      path="/:program/:event/:slug/:subSlug/:subSubSlug"
                      element={<EventPage data={data} onSetData={onSetData} />}
                    />
                    <Route
                      path="/:program/:event/:slug/:subSlug"
                      element={<EventPage data={data} onSetData={onSetData} />}
                    />
                    <Route
                      path="/:program/:event/:slug"
                      element={<EventPage data={data} onSetData={onSetData} />}
                    />
                  </Route>
                );
              })}

          <Route
            path="/:program/:event/"
            element={
              <EventMenu
                onSetData={onSetData}
                meta={data?.meta}
                {...data?.pages.find(
                  (item: any) => item.type === RouteType.ROOT
                )}
              />
            }
          />
          <Route path="/:program" element={<ProgramMenu />} />
          <Route path="/" element={<RootMenu />} />
          <Route path="*" element={<NoMatch onSetData={onSetData} />} />
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
