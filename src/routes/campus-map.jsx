import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { ExposedList } from "../components/List";
import BorderButton from "../components/BorderButton";

const CampusMap = (props) => {
  const [event] = useContext(EventContext);
  const { program, slug, campusMap } = useParams();

  if (campusMap !== undefined) {
    const data = event?.acf?.campus_map[campusMap];
    if (!data) return;
    return (
      <Page title="Campus Map" background="dark">
        <PanImage src={data.image} alt={data.label} />
      </Page>
    );
  }

  return (
    <Page title="Campus Map" background="dark">
      <ExposedList>
        {event?.acf?.campus_map.length &&
          event.acf.campus_map.map((campusMap, i) => (
            <li key={i}>
              <BorderButton
                href={`/${program}/${slug}/campus-map/${i}`}
                title={campusMap.label}
              />
            </li>
          ))}
      </ExposedList>
    </Page>
  );
};

export default CampusMap;

const PanImage = styled("img")({
  touchAction: "pan-right pinch-zoom",
});
