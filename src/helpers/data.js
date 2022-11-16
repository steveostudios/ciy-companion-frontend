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

export const getLogoById = (id) => {
  if (id === 4) return <img src={MoveLogo} alt="Move" />
  if (id === 5) return <img src={MixLogo} alt="Mix" />
  if (id === 6) return <img src={SuperStartLogo} alt="SuperStart" />
  return null;
}

export const getLogoBySlug = slug => {
  if (slug === 'move') return <img src={MoveLogo} alt="Move" />
  if (slug === 'mix') return <img src={MixLogo} alt="Mix" />
  if (slug === 'superstart') return <img src={SuperStartLogo} alt="SuperStart" />
  return null;
}

export const Logo = props => {
  if (props.id === 4) return <img src={MoveLogo} alt="Move" />
  if (props.id === 5) return <img src={MixLogo} alt="Mix" />
  if (props.id === 6) return <img src={SuperStartLogo} alt="SuperStart" />

  if (props.slug === 'move') return <img src={MoveLogo} alt="Move" />
  if (props.slug === 'mix') return <img src={MixLogo} alt="Mix" />
  if (props.slug === 'superstart') return <img src={SuperStartLogo} alt="SuperStart" />
  
  return null;
}