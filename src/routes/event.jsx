import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import IconCalendar from "./../img/icons/calendar.svg"
import IconAddressBook from "./../img/icons/address-book.svg"
import IconCloud from "./../img/icons/cloud.svg"
import IconComments from "./../img/icons/comments.svg"
import IconPhone from "./../img/icons/phone.svg"
import IconQuestionBox from "./../img/icons/question-box.svg"
import IconCouch from "./../img/icons/couch.svg"
import IconMap from "./../img/icons/map.svg"
import IconWhistle from "./../img/icons/whistle.svg"
import IconCrown from "./../img/icons/crown.svg"
import IconSignOut from "./../img/icons/sign-out.svg"
import IconShare from "./../img/icons/share.svg"
import IconShirt from "./../img/icons/shirt.svg"
import IconTools from "./../img/icons/tools.svg"
import { EventContext } from "../App";
import {api } from "./../helpers/data"



const Event = (props) => {
  const { slug } = useParams()
  const [event, setEvent] = useContext(EventContext);

  useEffect(() => {
      const url = `${api.production}/wp-json/wp/v2/events?slug=${slug}`;
      fetch(url).then(response => response.json()).then(data => setEvent(data[0]));
  }, [])

  return (
    
      <Menu>
        {event?.acf?.schedule && <Button link="/" icon={IconCalendar} name="Schedule" />}
        {event?.acf?.seating_chart && <Button link="/" icon={IconCouch} name="Seating Chart" />}
        {event?.acf?.campus_map && <Button link="/" icon={IconMap} name="Campus Map" />}
        {event?.acf?.event_contacts && <Button link="/" icon={IconAddressBook} name="Event Contacts" />}
        {event?.acf?.damage_report && <Button link="/" icon={IconTools} name="Damage Report" />}
        {event?.acf?.store && <Button link={`/move/${slug}/store`} icon={IconShirt} name="Store" />}
        {event?.acf?.campus_contact && <Button link="/" icon={IconPhone} name="Campus Contact" />}
        {event?.acf?.convos && <Button link={`/move/${slug}/convos`} icon={IconComments} name="Convos" />}
        {event?.acf?.selah && <Button link={`/move/${slug}/selah`} icon={IconCloud} name="SELAH" />}
        {event?.acf?.youth_group_time_questions && <Button link="/" icon={IconQuestionBox} name="Youth Group Time Questions" />}
        {event?.acf?.tournament_rules && <Button link="/" icon={IconWhistle} name="Tournament Rules" />}
        {event?.acf?.beyond_the_event && <Button link="/" icon={IconCrown} name="Beyond the Event" />}
        <Button link="/" icon={IconSignOut} name="Sign Out" />
        {event?.acf?.connect && <Button link="/" icon={IconShare} name="Connect" />}
      </Menu>
  );
}

export default Event;

const Menu = styled("ul")({
  alignSelf: "center",
  listStyle: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(3, 13rem)",
  gridAutoRows: "13rem",
  gap: "1rem",
  margin: "4rem",
  maxHeight: "calc(100% - 18rem)",
  width: "100%",
  maxWidth: "40rem",

})

const Button = (props) => {
  return (
    <ButtonWrapper>
      {props.link && <Link to={props.link}>
        <img src={props.icon} alt={props.name} />
        <div>{props.name}</div>
      </Link>}
      {props.onClick && <div onClick={props.onClick}>
        
        </div>}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled("li")({
  padding: "1rem",
  backgroundColor: "rgba(0,0,0,0.5)",
  width: "10rem",
  height: "10rem",
  "> *": {
    width: "inherit",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
  },
  "a": {
    color: "var(--white)",
    textDecoration: "none"
  }
})