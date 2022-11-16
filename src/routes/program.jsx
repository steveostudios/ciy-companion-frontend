import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled"
import BorderList from "../components/BorderList";
import { api, categoryMap, environment, Logo } from "../helpers/data";
import Page from "../components/Page";

const Program = (props) => {
  const {program } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `${api[environment]}/wp-json/wp/v2/events?program=${categoryMap[program]}&per_page=100`;
    console.log(url)
      fetch(url).then(response => response.json()).then(data => setEvents(data))
  }, [program, setEvents])

  return (
    <Page hideHeader>
      {program && <LogoStyled slug={program} />}
      <BorderList>
        {events.map(event => 
          <li key={event.id}>
            <Link to={`/${program}/${event.slug}`}>{event.title.rendered} | {event.acf.start_date}</Link>
          </li>
        )}
      </BorderList>
    </Page>
  );
}

export default Program;

const LogoStyled = styled(Logo)({
    margin: "4rem 4rem 0 4rem",
  maxHeight: "8rem",
  width: "100%",
  maxWidth: "40rem",
})