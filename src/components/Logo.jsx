import MoveLogo from "./../img/logos/move.svg";
import MixLogo from "./../img/logos/mix.svg";
import SuperStartLogo from "./../img/logos/superstart.svg";

export const Logo = (props) => {
  if (props.id === 4 || props.slug === "move")
    return <img src={MoveLogo} alt="Move" />;
  if (props.id === 5 || props.slug === "mix")
    return <img src={MixLogo} alt="Mix" />;
  if (props.id === 6 || props.slug === "superstart")
    return <img src={SuperStartLogo} alt="SuperStart" />;

  return null;
};