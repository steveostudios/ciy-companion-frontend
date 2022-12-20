import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import IconCalendar from "./../img/icons/calendar.svg";
import IconAddressBook from "./../img/icons/address-book.svg";
import IconCloud from "./../img/icons/cloud.svg";
import IconComments from "./../img/icons/comments.svg";
import IconPhone from "./../img/icons/phone.svg";
import IconQuestionBox from "./../img/icons/question-box.svg";
import IconCouch from "./../img/icons/couch.svg";
import IconMap from "./../img/icons/map.svg";
import IconWhistle from "./../img/icons/whistle.svg";
import IconCrown from "./../img/icons/crown.svg";
import IconSignOut from "./../img/icons/sign-out.svg";
import IconShare from "./../img/icons/share.svg";
import IconShirt from "./../img/icons/shirt.svg";
import IconTools from "./../img/icons/tools.svg";
import { EventContext } from "../App";
import { api, environment } from "./../helpers/data";
import Page from "../components/Page";

const Event = (props) => {
  const { slug, program } = useParams();
  const [event, setEvent] = useContext(EventContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `${api[environment]}/wp-json/wp/v2/events?slug=${slug}&acf_format=standard`;

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) setEvent(data[0]);
        setLoading(false);
      });
  }, [slug, setEvent]);

  return (
    <Page data={!!(!loading && event)} loading={loading}>
      <div>
        <Menu>
          {event?.acf?.schedule_show && (
            <Button
              link={`/${program}/${slug}/schedule`}
              icon={IconCalendar}
              name="Schedule"
            />
          )}
          {event?.acf?.seating_chart_show && (
            <Button
              link={`/${program}/${slug}/seating-chart`}
              icon={IconCouch}
              name="Seating Chart"
            />
          )}
          {event?.acf?.campus_map_show && (
            <Button
              link={`/${program}/${slug}/campus-map`}
              icon={IconMap}
              name="Campus Map"
            />
          )}
          {event?.acf?.event_contact_show && (
            <Button
              link={`/${program}/${slug}/event-contacts`}
              icon={IconAddressBook}
              name="Event Contacts"
            />
          )}
          {event?.acf?.staff_contact_show && (
            <Button
              link={`/${program}/${slug}/staff-contacts`}
              icon={IconAddressBook}
              name="Staff Contacts"
            />
          )}
          {event?.acf?.attendee_contact_show && (
            <Button
              link={`/${program}/${slug}/attendee-contacts`}
              icon={IconAddressBook}
              name="Attendee Contacts"
            />
          )}
          {event?.acf?.damage_report_show && (
            <Button
              link={`/${program}/${slug}/damage-report`}
              icon={IconTools}
              name="Damage Report"
            />
          )}
          {event?.acf?.store_show && (
            <Button
              link={`/${program}/${slug}/store`}
              icon={IconShirt}
              name="Store"
            />
          )}
          {event?.acf?.campus_contact_show && (
            <Button
              link={`/${program}/${slug}/campus-contacts`}
              icon={IconPhone}
              name="Campus Contacts"
            />
          )}
          {event?.acf?.convos_show && (
            <Button
              link={`/${program}/${slug}/convos`}
              icon={IconComments}
              name="Convos"
            />
          )}
          {event?.acf?.selah_show && (
            <Button
              link={`/${program}/${slug}/selah`}
              icon={IconCloud}
              name="SELAH"
            />
          )}
          {event?.acf?.youth_group_time_questions_show && (
            <Button
              link={`/${program}/${slug}/youth-group-time-questions`}
              icon={IconQuestionBox}
              name="Youth Group Time Questions"
            />
          )}
          {event?.acf?.tournament_rules_show && (
            <Button
              link={`/${program}/${slug}/tournament-rules`}
              icon={IconWhistle}
              name="Tournament Rules"
            />
          )}
          {event?.acf?.beyond_the_event_show && (
            <Button
              link={`/${program}/${slug}/beyond-the-event`}
              icon={IconCrown}
              name="Beyond the Event"
            />
          )}
          {event?.acf?.leader_resources_show && (
            <Button
              link={`/${program}/${slug}/leader-resources`}
              icon={IconCrown}
              name="Leader Resources"
            />
          )}
          {event?.acf?.connect_show && (
            <Button
              link={`/${program}/${slug}/connect`}
              icon={IconShare}
              name="Connect"
            />
          )}
          <Button link={`/`} icon={IconSignOut} name="Sign Out" />
        </Menu>
      </div>
    </Page>
  );
};

export default Event;

const Menu = styled("ul")({
  alignSelf: "center",
  listStyle: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(3, 13rem)",
  gridAutoRows: "13rem",
  gap: "2px",
  maxHeight: "calc(100% - 18rem)",
  width: "100%",
  maxWidth: "40rem",
});

const Button = (props) => {
  return (
    <ButtonWrapper>
      {props.link && (
        <Link to={props.link}>
          <img src={props.icon} alt={props.name} />
          <div>{props.name}</div>
        </Link>
      )}
      {props.onClick && <div onClick={props.onClick}></div>}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled("li")({
  backgroundColor: "rgba(0,0,0,0.2)",
  width: "100%",
  height: "100%",
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
  a: {
    color: "var(--white)",
    textDecoration: "none",
    img: {
      width: "3rem",
      height: "3rem",
    },
  },
});
