import Page from "../components/Page";
import ExposedList from "../components/ExposedList";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const CampusMap = (props) => {
  const [event] = useContext(EventContext);
  const { slug, campusMap } = useParams();

  if (campusMap !== undefined) {
    const data = event?.acf?.campus_map[campusMap];
    if (!data) return; 
    return (
      <Page title="Campus Map" background="dark" oversize>
        <PanImage src={data.image} alt={data.label}/> 
      </Page>
    )
  }

  return (
    <Page title="Campus Map" background="dark">
      <ExposedList>
        {event?.acf?.campus_map.length && event.acf.campus_map.map((campusMap, i) => (
          <li key={i}><a href={`/move/${slug}/campus-map/${i}`}>{campusMap.label}</a></li>
        ))}
      </ExposedList>
    </Page>
  );
}

export default CampusMap;

const PanImage = styled("img")({
  touchAction: "pan-right pinch-zoom"
})