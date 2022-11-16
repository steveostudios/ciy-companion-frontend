import { useLocation, useParams } from "react-router-dom";
import Page from "../components/Page";
// import { useContext } from "react";
// import { EventContext } from "../App";

const NoMatch = (props) => {
  const params = useParams()
  const location = useLocation()
  // const [event] = useContext(EventContext);

  return (
    <Page title="Oh no!" background="dark">
      <h1>404</h1>
      <p>
        {JSON.stringify(params)}
        </p>
      <p>
        {location.pathname}
        </p>
    </Page>
  );
}

export default NoMatch;
