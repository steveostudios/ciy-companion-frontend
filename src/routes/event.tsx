import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import IconCalendar from "./../img/icons/calendar.svg";
import IconAddressBook from "./../img/icons/address-book.svg";
import IconCloud from "./../img/icons/cloud.svg";
import IconComments from "./../img/icons/comments.svg";
import IconCouch from "./../img/icons/couch.svg";
import IconMap from "./../img/icons/map.svg";
import IconTableTennis from "./../img/icons/table-tennis-solid.svg";
import IconWhistle from "./../img/icons/whistle.svg";
import IconCrown from "./../img/icons/crown.svg";
import IconSignOut from "./../img/icons/sign-out.svg";
import IconShare from "./../img/icons/share.svg";
import IconShirt from "./../img/icons/shirt.svg";
import IconTicket from "./../img/icons/ticket.svg";
import IconUsersFriends from "./../img/icons/user-friends.svg";
import IconMicrophoneStand from "./../img/icons/microphone-stand.svg";
import IconFilm from "./../img/icons/film.svg";
import IconBookOpen from "./../img/icons/book-open.svg";
import IconGlobeStand from "./../img/icons/globe-stand.svg";
import IconMapMarker from "./../img/icons/map-marker.svg";
import IconUserPlus from "./../img/icons/user-plus.svg";
import Page from "../components/Page";
import { fetchEvent, getEvent } from "../helpers/event";

const Event: React.FC = () => {
  const { slug, program } = useParams();
  const [loading, setLoading] = useState(false);

  const event = getEvent();

  useEffect(() => {
    if ((event && event.slug === slug) || slug === undefined) return;
    (async () => {
      console.log("need to fetch");
      setLoading(true);
      const event = await fetchEvent(slug);
      // setEvent(event);

      localStorage.setItem("event", JSON.stringify(event));

      setLoading(false);
    })();
  }, [slug, setLoading, event]);

  return (
    <Page data={!!(!loading && event)} loading={loading}>
      <div>
        <Menu>
          {event?.acf?.schedule.show && (
            <Button
              link={`/${program}/${slug}/schedule`}
              icon={IconCalendar}
              name="Schedule"
            />
          )}
          {event?.acf?.seating_chart.show && (
            <Button
              link={`/${program}/${slug}/seating-chart`}
              icon={IconCouch}
              name="Seating Chart"
            />
          )}
          {event?.acf?.campus_map.show && (
            <Button
              link={`/${program}/${slug}/campus-map`}
              icon={IconMap}
              name="Campus Map"
            />
          )}
          {event?.acf?.event_contact.show && (
            <Button
              link={`/${program}/${slug}/event-contacts`}
              icon={IconAddressBook}
              name="Event Contacts"
            />
          )}
          {event?.acf?.staff_contact.show && (
            <Button
              link={`/${program}/${slug}/staff-contacts`}
              icon={IconAddressBook}
              name="Staff Contacts"
            />
          )}
          {event?.acf?.attendee_contact.show && (
            <Button
              link={`/${program}/${slug}/attendee-contacts`}
              icon={IconAddressBook}
              name="Attendee Contacts"
            />
          )}
          {event?.acf?.on_campus_activities.show && (
            <Button
              link={`/${program}/${slug}/on-campus-activities`}
              icon={IconTableTennis}
              name="On-Campus Activities"
            />
          )}
          {event?.acf?.store.show && (
            <Button
              link={`/${program}/${slug}/store`}
              icon={IconShirt}
              name="Store"
            />
          )}
          {event?.acf?.convos.show && (
            <Button
              link={`/${program}/${slug}/convos`}
              icon={IconComments}
              name="Convos"
            />
          )}
          {event?.acf?.selah.show && (
            <Button
              link={`/${program}/${slug}/selah`}
              icon={IconCloud}
              name="SELAH"
            />
          )}
          {event?.acf?.tournament_rules.show && (
            <Button
              link={`/${program}/${slug}/tournament-rules`}
              icon={IconWhistle}
              name="Tournament Rules"
            />
          )}
          {event?.acf?.where_the_river_divides.show && (
            <Button
              link={`/${program}/${slug}/where-the-river-divides`}
              icon={IconFilm}
              name="Where the River Divides"
            />
          )}
          {event?.acf?.electives.show && (
            <Button
              link={`/${program}/${slug}/electives`}
              icon={IconTicket}
              name="Electives"
            />
          )}
          {event?.acf?.bte.show && (
            <Button
              link={`/${program}/${slug}/beyond-the-event`}
              icon={IconCrown}
              name="Beyond the Event"
            />
          )}
          {event?.acf?.leader_resources.show && (
            <Button
              link={`/${program}/${slug}/leader-resources`}
              icon={IconUsersFriends}
              name="Leader Resources"
            />
          )}
          {event?.acf?.stage_contacts.show && (
            <Button
              link={`/${program}/${slug}/stage`}
              icon={IconMicrophoneStand}
              name="On Stage"
            />
          )}
          {/* Engage Info */}
          {event?.acf?.engage?.about.show && (
            <Button
              link={`/${program}/${slug}/engage/about`}
              icon={IconGlobeStand}
              name="What is Engage?"
            />
          )}

          {event?.acf?.engage?.dates_locations.show && (
            <Button
              link={`/${program}/${slug}/engage/dates-locations`}
              icon={IconMapMarker}
              name="Dates & Locations"
            />
          )}

          {event?.acf?.engage?.join.show && (
            <Button
              link={`/${program}/${slug}/engage/join`}
              icon={IconUserPlus}
              name="Join an Engage Team"
            />
          )}
          {event?.acf?.engage?.youth_leaders.show && (
            <Button
              link={`/${program}/${slug}/engage/youth-leaders`}
              icon={IconUsersFriends}
              name="Youth Leaders"
            />
          )}
          {event?.acf?.engage?.resources.show && (
            <Button
              link={`/${program}/${slug}/engage/resources`}
              icon={IconBookOpen}
              name="Resources"
            />
          )}

          {event?.acf?.connect.show && (
            <Button
              link={`/${program}/${slug}/connect`}
              icon={IconShare}
              name="Connect"
            />
          )}
          <Button link={`/`} icon={IconSignOut} name="Change Event" />
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

interface ButtonProps {
  link: string;
  icon: string;
  name: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
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
    "> div": {
      margin: "0 0.5rem",
    },
  },
});
