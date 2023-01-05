import Page from "../components/Page";
import { ExposedList } from "../components/List";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import BorderButton from "../components/BorderButton";
import {
  TransformWrapper,
  TransformComponent,
} from "@pronestor/react-zoom-pan-pinch";

const SeatingChart = (props) => {
  const [event] = useContext(EventContext);
  const { program, slug, chart } = useParams();

  if (event && chart !== undefined) {
    const data = event?.acf?.seating_chart[chart];
    return (
      <Page title="Seating Chart" background="dark" data={data}>
        {data.image && (
          <TransformWrapper maxScale={15} minScale={0.5}>
            <TransformComponent>
              <img src={data.image} alt={data.label} />
            </TransformComponent>
          </TransformWrapper>
        )}
        {!data.image && (
          <p>Seating charts will be uploaded soon! Check back later.</p>
        )}
      </Page>
    );
  }

  return (
    <Page
      title="Seating Chart"
      background="dark"
      data={event?.acf?.seating_chart.length > 0}
      noDataContent="Seating charts will be uploaded soon! Check back later."
    >
      <ExposedList>
        {event?.acf?.seating_chart.length &&
          event.acf.seating_chart.map((chart, i) => (
            <li key={i}>
              <BorderButton
                href={`/${program}/${slug}/seating-chart/${i}`}
                title={chart.label}
              />
            </li>
          ))}
      </ExposedList>
    </Page>
  );
};

export default SeatingChart;
