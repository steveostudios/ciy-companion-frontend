import Bed from "./../img/event_icons/bed.svg";
import Check from "./../img/event_icons/check.svg";
import Convos from "./../img/event_icons/convos.svg";
import DoorsOpen from "./../img/event_icons/doors_open.svg";
import Fork from "./../img/event_icons/fork.svg";
import KingdomWorker from "./../img/event_icons/kingdom_worker.svg";
import Star from "./../img/event_icons/star.svg";
import MainProgram from "./../img/event_icons/main_program.svg";
import Paper from "./../img/event_icons/paper.svg";
import YouthGroupTime from "./../img/event_icons/youth_group_time.svg";
import Selah from "./../img/event_icons/selah.svg";

export const Icon = (props) => {
  if (props.slug === "bed") return <img src={Bed} alt="bed" />;
  if (props.slug === "check") return <img src={Check} alt="check" />;
  if (props.slug === "convos") return <img src={Convos} alt="convos" />;
  if (props.slug === "doors_open")
    return <img src={DoorsOpen} alt="doorsopen" />;
  if (props.slug === "fork") return <img src={Fork} alt="fork" />;
  if (props.slug === "kingdom_worker")
    return <img src={KingdomWorker} alt="kingdom worker" />;
  if (props.slug === "free_time") return <img src={Star} alt="star" />;
  if (props.slug === "main_program")
    return <img src={MainProgram} alt="main program" />;
  if (props.slug === "paper") return <img src={Paper} alt="paper" />;
  if (props.slug === "youth_group_time")
    return <img src={YouthGroupTime} alt="youth group time" />;
  if (props.slug === "selah") return <img src={Selah} alt="selah" />;

  return null;
};
