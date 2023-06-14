import { useLocation, useParams } from "react-router-dom";
import Page from "../components/Page";

const NoMatch: React.FC = () => {
  const params = useParams();
  const location = useLocation();

  return (
    <Page title="Oh no!" background="light">
      <h1>404</h1>
      <p>{JSON.stringify(params)}</p>
      <p>{location.pathname}</p>
    </Page>
  );
};

export default NoMatch;
