interface Props {
  title: string;
  url: string;
}

export const EmbeddedPage: React.FC<Props> = (props) => {
  const { url, title } = props;
  return (
    <>
      {url && (
        <iframe
          className="form"
          frameBorder="0"
          title={title}
          src={url}
          style={{ height: "100%" }}
        />
      )}
    </>
  );
};
