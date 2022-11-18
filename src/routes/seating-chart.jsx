import Page from "../components/Page";
import { ExposedList } from "../components/List";
import { useContext } from "react";
import { EventContext } from "../App";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import BorderButton from "../components/BorderButton";

const SeatingChart = (props) => {
  const [event] = useContext(EventContext);
  const { program, slug, chart } = useParams();

  if (chart !== undefined) {
    const data = event?.acf?.seating_chart[chart];
    if (!data) return;
    return (
      <Page title="Seating Chart" background="dark">
        <PanImage src={data.image} alt={data.label} />
      </Page>
    );
  }

  return (
    <Page title="Seating Chart" background="dark">
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

const PanImage = styled("img")({
  touchAction: "pan-right pinch-zoom",
});
