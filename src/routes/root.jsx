import { Link } from "react-router-dom";
import BorderList from "../components/BorderList";
import { useContext, useEffect } from "react";
import { EventContext } from "../App";
import { getLogo } from "../helpers/data";

export default function Root() {
  const [event, setEvent] = useContext(EventContext);

  useEffect(() => {
    setEvent(null)
  }, [])

  return (
    <>
    <h1>Choose an Event</h1>
      <BorderList>
        <li><Link to="/move">{getLogo(4)}</Link></li>
        <li><Link to="/mix">{getLogo(5)}</Link></li>
        <li><Link to="/superstart">{getLogo(6)}</Link></li>
      </BorderList>
    </>
  );
}
