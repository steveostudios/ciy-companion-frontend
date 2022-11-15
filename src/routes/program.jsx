import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled"
import BorderList from "../components/BorderList";
import { api, categoryMap, environment } from "../helpers/data";
import LogoMove from "./../img/logos/move.svg"
import LogoMix from "./../img/logos/mix.svg"
import LogoSuperStart from "./../img/logos/superstart.svg"

const Program = (props) => {
  const {program } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `${api[environment]}/wp-json/wp/v2/events?per_page=100&categories=${categoryMap[program]}`;
    console.log(url)
      fetch(url).then(response => response.json()).then(data => setEvents(data))
  }, [program, setEvents])

  const getImage = () => {
    if (program === "move") return LogoMove; 
    if (program === "mix") return LogoMix; 
    if (program === "superstart") return LogoSuperStart; 
  }

  return (
    <>
      <Logo src={getImage()} alt={program} />
      <BorderList>
        {events.map(event => 
          <li key={event.id}>
            <Link to={`/${program}/${event.slug}`}>{event.title.rendered} | {event.acf.start_date}</Link>
          </li>
        )}
      </BorderList>
    </>
  );
}

export default Program;

const Logo = styled("img")({
  margin: "4rem 4rem 0 4rem",
  maxHeight: "8rem",
  width: "100%",
  maxWidth: "40rem",
})