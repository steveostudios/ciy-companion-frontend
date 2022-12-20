import Page from "../components/Page";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import { ExposedList } from "../components/List";
import BorderButton from "../components/BorderButton";
import {
  TransformWrapper,
  TransformComponent,
} from "@pronestor/react-zoom-pan-pinch";

const CampusMap = (props) => {
  const [event] = useContext(EventContext);
  const { program, slug, campusMap } = useParams();

  if (event && campusMap !== undefined) {
    const data = event?.acf?.campus_map[campusMap];
    return (
      <Page title="Campus Map" background="dark" data={data}>
        <TransformWrapper maxScale={15} minScale={0.25}>
          <TransformComponent>
            <img src={data.image} alt={data.label} />
          </TransformComponent>
        </TransformWrapper>
      </Page>
    );
  }

  return (
    <Page
      title="Campus Map"
      background="dark"
      data={event?.acf?.seating_chart.length > 0}
    >
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
