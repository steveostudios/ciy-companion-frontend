import Page from "../components/Page";
import ExposedList from "../components/ExposedList";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const SeatingChart = (props) => {
  const [event] = useContext(EventContext);
  const { slug, chart } = useParams();

  if (chart !== undefined) {
    const data = event?.acf?.seating_chart[chart];
    if (!data) return; 
    return (
      <Page title="Seating Chart" background="dark" oversize>
        <PanImage src={data.image} alt={data.label}/> 
      </Page>
    )
  }

  return (
    <Page title="Seating Chart" background="dark">
      <ExposedList>
        {event?.acf?.seating_chart.length && event.acf.seating_chart.map((chart, i) => (
          <li key={i}><a href={`/move/${slug}/seating-chart/${i}`}>{chart.label}</a></li>
        ))}
      </ExposedList>
    </Page>
  );
}

export default SeatingChart;

const PanImage = styled("img")({
  touchAction: "pan-right pinch-zoom"
})