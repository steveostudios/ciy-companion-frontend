import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled"
import BorderList from "../components/BorderList";
import { api, categoryMap, environment } from "../helpers/data";
import LogoMove from "./../img/logos/move.svg"
import LogoMix from "./../img/logos/mix.svg"
import LogoSuperStart from "./../img/logos/superstart.svg"

const Program = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `${api[environment]}/wp-json/wp/v2/events?per_page=100&categories=${categoryMap[props.program]}`;
    console.log(url)
      fetch(url).then(response => response.json()).then(data => setEvents(data))
  }, [])

  const getImage = () => {
    if (props.program === "move") return LogoMove; 
    if (props.program === "mix") return LogoMix; 
    if (props.program === "superstart") return LogoSuperStart; 
  }

  return (
    <>
      <Logo src={getImage()} alt={props.program} />
      <BorderList>
        {events.map(event => 
          <li key={event.id}>
            <Link to={`/${props.program}/${event.slug}`}>{event.title.rendered} | {event.acf.start_date}</Link>
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