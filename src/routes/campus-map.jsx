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
    const data = event?.acf?.campus_map.campus_map[campusMap];
    return (
      <Page title="Campus Map" background="light" data={data}>
        {data.image && (
          <TransformWrapper
            maxScale={15}
            minScale={0.15}
            centerOnInit={true}
            centerZoomedOut={true}
            initialScale={0.15}
          >
            <TransformComponent>
              <img src={data.image} alt={data.label} />
            </TransformComponent>
          </TransformWrapper>
        )}
        {!data.image && (
          <p>Campus maps will be uploaded soon! Check back later.</p>
        )}
      </Page>
    );
  }

  return (
    <Page
      title="Campus Map"
      background="light"
      data={
        event?.acf?.campus_map.campus_map &&
        event?.acf?.campus_map.campus_map.length > 0
      }
      noDataContent="Campus maps will be uploaded soon! Check back later."
    >
      <ExposedList>
        {event?.acf?.campus_map.campus_map.length > 0 &&
          event.acf.campus_map.campus_map.map((campusMap, i) => (
            <li key={i}>
              <BorderButton
                background="light"
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
