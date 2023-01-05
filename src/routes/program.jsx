import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BorderList } from "../components/List";
import {
  api,
  categoryMap,
  environment,
  getHumanReadableDateRange,
  learnMoreURLs,
} from "../helpers/data";
import Page from "../components/Page";
import BorderListButton from "../components/BorderListButton";
import BorderButton from "../components/BorderButton";
import styled from "@emotion/styled";

const Program = (props) => {
  const { program } = useParams();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `${api[environment]}/wp-json/wp/v2/events?program=${categoryMap[program]}&per_page=100&_fields[]=title.rendered&_fields[]=acf.location&_fields[]=acf.start_date&_fields[]=acf.end_date&_fields[]=slug&acf_format=standard&status=publish`;
    console.log(url);

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, [program, setEvents]);

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
            {events.map((event) => (
              <li key={event.slug}>
                <BorderListButton
                  href={`/${program}/${event.slug}`}
                  title={`${event.title.rendered} | ${getHumanReadableDateRange(
                    event.acf.start_date,
                    event.acf.end_date
                  )} | ${event.acf.location}`}
                />
              </li>
            ))}
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
    minHeight: "calc(100vh - 30rem)",
  },
  "> a": {
    margin: "0 4rem",
  },
});
