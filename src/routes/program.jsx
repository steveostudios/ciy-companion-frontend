import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BorderList } from "../components/List";
import {
  api,
  categoryMap,
  getHumanReadableDateRange,
  learnMoreURLs,
} from "../helpers/data";
import Page from "../components/Page";
import BorderListButton from "../components/BorderListButton";
import BorderButton from "../components/BorderButton";
import styled from "@emotion/styled";

const Title = (props) => {
  return (
    <div>
      <div>
        {props.title} | {props.dates}
      </div>
      <div>{props.location}</div>
    </div>
  );
};

const Program = (props) => {
  const { program } = useParams();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async (page) => {
      const url = `${
        api[process.env.REACT_APP_ENV]
      }/wp-json/wp/v2/events?program=${
        categoryMap[program]
      }&per_page=10&_fields[]=title.rendered&_fields[]=acf.location&_fields[]=acf.start_date&_fields[]=acf.end_date&_fields[]=slug&acf_format=standard&status=publish&page=${page}`;

      // console.log(url);

      const response = await fetch(url);
      const data = await response.json();
      const pages = await response.headers.get("X-WP-TotalPages");

      // console.log(data);
      setEvents((events) => [...events, ...data]);

      if (page < pages) {
        fetchEvents(page + 1);
      } else {
        setLoading(false);
      }
    };

    setEvents([]);
    setLoading(true);
    fetchEvents(1);
  }, [program]);

  return (
    <Page
      data={!loading && events.length > 0}
      loading={loading}
      noDataContent={
        <div>
          <p>There are no active events yet. Please check back later.</p>
          <BorderButton title="Learn More" href={learnMoreURLs[program]} />
        </div>
      }
    >
      {events.length > 0 && (
        <Main>
          <BorderList>
            {events
              .sort((a, b) => (a.acf.start_date > b.acf.start_date ? 1 : -1))
              .map((event) => {
                return (
                  <li key={event.slug}>
                    <BorderListButton
                      href={`/${program}/${event.slug}`}
                      title={
                        <Title
                          title={event.title.rendered}
                          dates={getHumanReadableDateRange(
                            event.acf.start_date,
                            event.acf.end_date
                          )}
                          location={event.acf.location}
                        />
                      }
                    />
                  </li>
                );
              })}
          </BorderList>
          <BorderButton title="Learn More" href={learnMoreURLs[program]} />
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
