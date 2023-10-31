import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  matchPath,
  useLocation,
} from "react-router-dom";
import styled from "@emotion/styled";
import NoMatch from "./routes/no-match";
import { EventPage } from "./routes/EventPage";
import { EventMenu } from "./routes/EventMenu";
import { ProgramMenu } from "./routes/ProgramMenu";
// import ReactGA from "react-ga4";
// import { data } from "./data.js";
import RootMenu from "./routes/RootMenu";
import { useEffect, useMemo, useState } from "react";

// ReactGA.initialize("G-G7MLPL3V6N");
// ReactGA.send("pageview");

interface EventMetaProps {
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}

interface RouteProps {
  type: string;
  title?: string;
  slug: string;
  data: any;
  path: string;
}

interface DataProps {
  id: number;
  program: number[];
  slug: string;
  acf: {
    content: any[];
  };
  title: {
    rendered: string;
  };

  type: string;
}

export default function BasicExample() {
  const [dynamicRoutes, setDynamicRoutes] = useState<RouteProps[]>([]);
  const [data, setData] = useState<DataProps>();
  const [event, setEvent] = useState<EventMetaProps>({
    location: "",
    startDate: "",
    endDate: "",
    title: "",
  });
  const [test, setTest] = useState("default");

  const onSetData = (data: any) => {
    setData(data);
    if (data) {
      setEvent({
        location: data.acf.location || "",
        startDate: data.acf.start_date || "",
        endDate: data.acf.end_date || "",
        title: data.title.rendered || "",
      });

      const temp: RouteProps[] = [];
      if (data.acf.content.length !== 0) {
        data.acf.content.forEach((item: any) => {
          const pageData = item[item.data.type];
          console.log(pageData);
          temp.push({
            type: item.data.type,
            title: pageData?.title,
            slug: item.slug,
            data: pageData,
            path: `/:program/:event/${item.slug}`,
          });
          if (item.data.type === "menu" && item.menu.buttons.length > 0) {
            item.menu.buttons.forEach((subItem: any) => {
              const pageData = subItem.content[subItem.content.type];
              console.log(pageData);
              temp.push({
                type: subItem.content.type,
                title: subItem.content[subItem.content.type]?.title,
                slug: subItem.slug,
                data: pageData,
                path: `/:program/:event/${item.slug}/${subItem.slug}`,
              });
            });
          }
        });
      }
      setTest("changed");

      setDynamicRoutes(temp);
    }
  };

  console.table(test);

  return (
    <Router>
      <Body>
        <Routes>
          {dynamicRoutes.length &&
            dynamicRoutes.map((item) => {
              return (
                <Route
                  key={item.slug}
                  path={item.path}
                  element={
                    <EventPage
                      event={event}
                      type={item.type}
                      title={item.title}
                      slug={item.slug}
                      data={item.data}
                    />
                  }
                />
              );
            })}
          <Route
            path={`/:program/:event/`}
            element={
              <EventMenu
                onSetData={onSetData}
                data={data}
                event={event}
                items={
                  data?.acf?.content.map((item) => ({
                    icon: item.data.icon,
                    label: item.data.label,
                    slug: item.slug,
                    url:
                      item.data.type === "external"
                        ? item.external.url
                        : undefined,
                  })) || []
                }
              />
            }
          />
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
