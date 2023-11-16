import { EmbeddedPage as PageProps } from "../helpers/types";

export const EmbeddedPage: React.FC<PageProps> = (props) => {
  return (
    <>
      {props.data.url && (
        <iframe
          className="form"
          frameBorder="0"
          title={props.data.title}
          src={props.data.url}
          style={{ height: "100%" }}
        />
      )}
    </>
  );
};
