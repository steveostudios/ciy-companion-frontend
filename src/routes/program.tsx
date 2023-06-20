import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BorderList } from "../components/List";
import { getHumanReadableDateRange, learnMoreURLs } from "../helpers/data";
import Page from "../components/Page";
import BorderListButton from "../components/BorderListButton";
import BorderButton from "../components/BorderButton";
import styled from "@emotion/styled";
import {
  fetchEvents,
  APISimpleEvent,
  fetchColors,
  getColors,
} from "../helpers/event";

interface TitleProps {
  title: string;
  dates: string;
  location: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <div>
      <div>
        {props.title} | {props.dates}
      </div>
      <div>{props.location}</div>
    </div>
  );
};

const Program: React.FC = () => {
  const { program } = useParams<string>();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<APISimpleEvent[] | undefined>([]);

  const colors = getColors();

  useEffect(() => {
    if (program !== undefined) {
      (async () => {
        setEvents([]);
        setLoading(true);
        const temp = await fetchEvents(program, 1);
        setLoading(false);
        setEvents(temp?.events);
      })();
    }
  }, [program]);

  useEffect(() => {
    if (!colors) {
      (async () => {
        await fetchColors();
      })();
    }
  }, [colors]);

  return (
    <Page
      data={!loading && events && events.length > 0}
      loading={loading}
      noDataContent={
        <div>
          <p>There are no active events yet. Please check back later.</p>
          {program && (
            <BorderButton title="Learn More" href={learnMoreURLs[program]} />
          )}
        </div>
      }
    >
      {events && events.length > 0 && (
        <Main>
          <BorderList>
            {events
              .sort((a: APISimpleEvent, b: APISimpleEvent) =>
                a.acf.start_date > b.acf.start_date ? 1 : -1
              )
              .map((event) => {
                return (
                  <li key={event.slug}>
                    <BorderListButton
                      href={`/${program}/${event.slug}`}
                      title={
                        <Title
                          title={event.title.rendered}
                          dates={
                            getHumanReadableDateRange(
                              event.acf.start_date,
                              event.acf.end_date
                            ) || ""
                          }
                          location={event.acf.location}
                        />
                      }
                    />
                  </li>
                );
              })}
          </BorderList>
          {program && (
            <BorderButton title="Learn More" href={learnMoreURLs[program]} />
          )}
          <BorderButton title="Back" href="/" />
        </Main>
      )}
    </Page>
  );
};

export default Program;

const Main = styled("div")({
  gap: "2rem",
  p: {
    fontSize: "2rem",
  },
  "> ul": {
    minHeight: "calc(100vh - 40rem)",
  },
  "> a": {
    margin: "0 4rem",
  },
});
