import Page from "../components/Page";
import ExposedList from "../components/ExposedList";

const Store = (props) => {
  return (
    <Page title="Store" pageType="dark">
      <ExposedList>
      <li><a href="#">Pick up at Event</a></li>
      <li><a href="#">Ship to my house</a></li>
        </ExposedList>
    </Page>
  );
}

export default Store;