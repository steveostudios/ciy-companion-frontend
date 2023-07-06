import { useParams } from "react-router-dom";
import { getEvent } from "../helpers/event";
import { IFramePage } from "../pages/IFramePage";
import { Button, ContentWithMenu } from "../pages/ContentWithMenuPage";
import { ConnectPage } from "../pages/ConnectPage";
import { CollegeGridPage } from "../pages/CollegeGridPage";

const BeyondTheEvent: React.FC = () => {
  const { program, slug, page, resourceId } = useParams();

  const event = getEvent();

  const data_prefix = event?.acf?.bte;
  const url_prefix = `/${program}/${slug}/beyond-the-event`;

  // Ministry Interest
  if (page === "ministry-interest") {
    return (
      <IFramePage
        title="Want to go into ministry?"
        url={data_prefix.ministry_interest.url}
      />
    );
  }

  // Engage Interest => individual resource
  if (page === "engage-interest" && resourceId) {
    const section = data_prefix.engage_trip_interest.sections[resourceId];
    return (
      <ContentWithMenu
        title="Beyond the Event"
        content={section.content}
        buttons={
          section.interest_url && [
            {
              title: section.interest_url_name,
              url: `${url_prefix}/engage-interest-form/${resourceId}`,
            },
          ]
        }
      />
    );
  }

  // Engage Interest => individual resource
  if (page === "engage-interest-form" && resourceId) {
    return (
      <IFramePage
        title={data_prefix.engage_trip_interest.sections[resourceId].name}
        url={data_prefix.engage_trip_interest.sections[resourceId].interest_url}
      />
    );
  }

  // Engage Interest
  if (page === "engage-interest") {
    return (
      <ContentWithMenu
        title="Want to go on an Engage trip?"
        content={data_prefix.engage_trip_interest.content}
        buttons={data_prefix.engage_trip_interest.sections.map(
          (item: any, i: number) => ({
            title: item.name,
            url: item.content
              ? `${url_prefix}/engage-interest/${i}`
              : item.interest_url,
          })
        )}
      />
    );
  }

  // Move Intern Interest
  if (page === "move-intern-interest") {
    return (
      <ContentWithMenu
        title="Want to intern with MOVE next summer?"
        content={data_prefix.move_intern_interest.content}
        buttons={[
          {
            title: "Learn More",
            url: data_prefix.move_intern_interest.learn_more_url,
          },
          {
            title: "Interested?",
            url: data_prefix.move_intern_interest.signup_url,
          },
        ]}
      />
    );
  }

  // Mix Intern Interest
  if (page === "mix-intern-interest") {
    return (
      <ContentWithMenu
        title="Want to intern with MIX next summer?"
        content={data_prefix.mix_intern_interest.content}
        buttons={[
          {
            title: "Learn More",
            url: data_prefix.mix_intern_interest.learn_more_url,
          },
          {
            title: "Interested?",
            url: data_prefix.mix_intern_interest.signup_url,
          },
        ]}
      />
    );
  }

  // Kingdom Worker Crash Nomination
  if (page === "kingdom-worker-crash-nomination") {
    return (
      <ContentWithMenu
        title="Kingdom Worker Crash Nomination"
        content={data_prefix.kingdom_worker_crash_nomination.content}
        buttons={[
          {
            title: "Learn More",
            url: data_prefix.kingdom_worker_crash_nomination.url,
          },
        ]}
      />
    );
  }

  // College Partners
  if (page === "college-partners") {
    return (
      <CollegeGridPage
        title="College Partners"
        colleges={data_prefix.college_partners.college}
        content={data_prefix.college_partners.description}
      />
    );
  }

  // Convos Beta
  if (page === "convos-beta") {
    return (
      <ContentWithMenu
        title="Convos for your youth group?"
        content={data_prefix.convos_beta.content}
        buttons={[
          {
            title: "Learn More",
            url: data_prefix.convos_beta.beta_url,
          },
        ]}
      />
    );
  }

  interface MainMenuItem {
    [key: string]: {
      title: string;
      url: string;
    };
  }

  const decisionMenu: MainMenuItem = {
    first_time_decision: {
      title: "First Time Decision",
      url: `${url_prefix}/decision-first-time/`,
    },
    rededication: {
      title: "Rededication",
      url: `${url_prefix}/decision-rededication/`,
    },

    vocational_ministry: {
      title: "Vocational Ministry",
      url: `${url_prefix}/decision-vocational-ministry/`,
    },
    kingdom_worker: {
      title: "Kingdom Worker",
      url: `${url_prefix}/decision-kingdom-worker/`,
    },
  };

  const getDecisionButtons = () => {
    const buttons: Button[] = [];
    Object.keys(decisionMenu).forEach((key) => {
      if (data_prefix.decision[key].show) {
        buttons.push(decisionMenu[key]);
      }
    });

    return buttons;
  };

  if (page === "decision") {
    return (
      <ContentWithMenu
        title="I Made a Decision at Move"
        buttons={getDecisionButtons()}
      />
    );
  }

  // Decision First Time
  if (page === "decision-first-time") {
    return (
      <ContentWithMenu
        title="First Time Decision"
        content={data_prefix.decision.first_time_decision.content}
      />
    );
  }

  // Decision Rededication
  if (page === "decision-rededication") {
    return (
      <ContentWithMenu
        title="Rededication"
        content={data_prefix.decision.rededication.content}
      />
    );
  }

  // Decision Vocational Ministry
  if (page === "decision-vocational-ministry") {
    return (
      <ContentWithMenu
        title="Vocational Ministry"
        content={data_prefix.decision.vocational_ministry.content}
      />
    );
  }

  // Decision Kingdom Worker
  if (page === "decision-kingdom-worker") {
    return (
      <ContentWithMenu
        title="Kingdom Worker"
        content={data_prefix.decision.kingdom_worker.content}
      />
    );
  }

  // Connect
  if (page === "connect") {
    const connections =
      data_prefix.connect.service &&
      Object.entries(data_prefix.connect.service).map((contact, i) => {
        return { service: contact[0], url: contact[1] };
      });

    return <ConnectPage title="Connect" connections={connections} />;
  }

  // Offering
  if (page === "offering") {
    return (
      <ContentWithMenu
        title="Offering"
        content={data_prefix.offering.content}
        buttons={data_prefix.offering.buttons.map((item: any, i: number) => ({
          title: item.label,
          url: item.url,
        }))}
      />
    );
  }

  const mainMenu: MainMenuItem = {
    ministry_interest: {
      title: "Want to go into ministry?",
      url: `${url_prefix}/ministry-interest/`,
    },
    engage_trip_interest: {
      title: "Want to go on an Engage trip?",
      url: `${url_prefix}/engage-interest/`,
    },
    move_intern_interest: {
      title: "Want to intern with MOVE next summer?",
      url: `${url_prefix}/move-intern-interest/`,
    },
    mix_intern_interest: {
      title: "Want to intern with MIX next summer?",
      url: `${url_prefix}/mix-intern-interest/`,
    },
    kingdom_worker_crash_nomination: {
      title: "Kingdom Worker Crash Nomination",
      url: `${url_prefix}/kingdom-worker-crash-nomination/`,
    },
    college_partners: {
      title: "College Partners",
      url: `${url_prefix}/college-partners/`,
    },
    youth_ministry_resources: {
      title: "Youth Ministry Resources",
      url: data_prefix.youth_ministry_resources.url,
    },
    convos_beta: {
      title: "Interested in using Convos for your youth group?",
      url: `${url_prefix}/convos-beta/`,
    },
    session_4: {
      title: "SuperStart ReCap Session",
      url: data_prefix.session_4.resource_url,
    },
    preteen_ministry_resources: {
      title: "Preteen Ministry Resources",
      url: data_prefix.preteen_ministry_resources.url,
    },
    decision: {
      title: "I Made a Decision at MOVE",
      url: `${url_prefix}/decision/`,
    },
    connect: {
      title: "Connect",
      url: `${url_prefix}/connect/`,
    },
    offering: {
      title: "Offering",
      url: `${url_prefix}/offering/`,
    },
  };

  const getButtons = () => {
    const buttons: Button[] = [];
    Object.keys(mainMenu).forEach((key) => {
      if (data_prefix[key].show) {
        buttons.push(mainMenu[key]);
      }
    });

    return buttons;
  };

  return <ContentWithMenu title="Beyond the Event" buttons={getButtons()} />;
};

export default BeyondTheEvent;
