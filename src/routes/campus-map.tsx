import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
import { ImageTransformPage } from "../pages/ImageTransformPage";
import { ContentWithMenu } from "../pages/ContentWithMenuPage";

const CampusMap: React.FC = () => {
  const { program, slug, campusMap } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.campus_map;
  const url_prefix = `/${program}/${slug}/campus-map`;

  if (event && campusMap !== undefined) {
    const data = data_prefix.campus_map[campusMap];
    console.log(data);
    return (
      <ImageTransformPage
        title="Campus Map"
        image={data.image}
        missingImage="Campus maps will be uploaded soon! Check back later."
      />
    );
  }

  return (
    <ContentWithMenu
      title="Campus Map"
      buttons={
        data_prefix.campus_map.length > 0 &&
        data_prefix.campus_map.map((item: any, i: number) => ({
          title: item.label,
          url: `${url_prefix}/${i}`,
        }))
      }
    />
  );
};

export default CampusMap;
