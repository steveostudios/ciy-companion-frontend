const Vimeo = (props) => {
  return (
    <>
      {props.id && (
        <iframe
          title="vimeo-player"
          src={`https://player.vimeo.com/video/${props.id}`}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default Vimeo;
