import { useParams } from "react-router-dom";
import { ImageTransformPage } from "../pages/ImageTransformPage";
import { ContentWithMenu } from "../pages/ContentWithMenuPage";
import { getEvent } from "../helpers/event";

const SeatingChart: React.FC = () => {
  const { program, slug, chart } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.seating_chart;
  const url_prefix = `/${program}/${slug}/seating-chart`;

  if (event && chart !== undefined) {
    const data = data_prefix.seating_chart[chart];
    return (
      <ImageTransformPage
        title="Seating Chart"
        image={data.image}
        missingImage="Seating charts will be uploaded soon! Check back later."
      />
    );
  }

  return (
    <ContentWithMenu
      title="Seating Chart"
      buttons={
        data_prefix.seating_chart.length > 0 &&
        data_prefix.seating_chart.map((item: any, i: number) => ({
          title: item.label,
          url: `${url_prefix}/${i}`,
        }))
      }
    />
  );
};

export default SeatingChart;
