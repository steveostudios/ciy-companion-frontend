import { useLocation, useParams } from "react-router-dom";
import { Page } from "../components/Page";

interface Props {}
const NoMatch: React.FC<Props> = (props) => {
  const params = useParams();
  const location = useLocation();

  return (
    <Page>
      <h1>404</h1>
      <p>{JSON.stringify(params)}</p>
      <p>{location.pathname}</p>
    </Page>
  );
};

export default NoMatch;
