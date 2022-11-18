import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BorderList } from "../components/List";
import { api, categoryMap, environment } from "../helpers/data";
import Page from "../components/Page";
import BorderListButton from "../components/BorderListButton";

const Program = (props) => {
  const { program } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `${api[environment]}/wp-json/wp/v2/events?program=${categoryMap[program]}&per_page=100`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, [program, setEvents]);

  return (
    <Page>
      <div>
        <BorderList>
          {events.map((event) => (
            <li key={event.id}>
              <BorderListButton
                href={`/${program}/${event.slug}`}
                title={`${event.title.rendered} | ${event.acf.start_date}`}
              />
            </li>
          ))}
        </BorderList>
      </div>
    </Page>
  );
};

export default Program;
