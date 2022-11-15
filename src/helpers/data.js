import MoveLogo from "./../img/logos/move.svg"
import MixLogo from "./../img/logos/mix.svg"
import SuperStartLogo from "./../img/logos/superstart.svg"

export const environment = "production";

export const api = {
  dev: `http://ciy-companion.local/`,
  production: `https://ciy-companion.flywheelsites.com/`
}

export const categoryMap = {
  "move": 4,
  "mix": 5,
  "superstart": 6
}

export const getLogo = (programId) => {
  if (programId === 4) return <img src={MoveLogo} alt="Move" />
  if (programId === 5) return <img src={MixLogo} alt="Mix" />
  if (programId === 6) return <img src={SuperStartLogo} alt="SuperStart" />
  return null;
}