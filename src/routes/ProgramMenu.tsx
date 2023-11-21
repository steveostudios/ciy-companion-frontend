import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NormalList } from "../components/List";
import { getHumanReadableDateRange, learnMoreURLs } from "../helpers/data";
import BorderButton from "../components/BorderButton";
import styled from "@emotion/styled";
import { fetchEvents, APISimpleEvent } from "../helpers/events";
import { Page } from "../components/Page";
import { Logo } from "../components/Logo";

export const ProgramMenu: React.FC = () => {
  const { program } = useParams<string>();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<APISimpleEvent[] | undefined>([]);

  useEffect(() => {
    setEvents([]);
    setLoading(true);
    if (program !== undefined) {
      (async () => {
        const temp = await fetchEvents(program, 1);
        setLoading(false);
        setEvents(temp?.events);
      })();
    }
  }, [program]);

  return (
    <Page>
      <Head>
        <Logo slug={program} size={12} />
      </Head>
      {loading && (
        <NormalList showBorder>
          <li>
            <Message>Loading...</Message>
          </li>
        </NormalList>
      )}
      {!loading && (!events || events.length === 0) && (
        <NormalList showBorder>
          <li>
            <Message>
              No events found.
              <br />
              Check back later.
            </Message>
          </li>
        </NormalList>
      )}
      {!loading && events && events.length > 0 && (
        <NormalList showBorder>
          {events
            .sort((a: APISimpleEvent, b: APISimpleEvent) =>
              a.acf.start_date > b.acf.start_date ? 1 : -1
            )
            .map((event) => {
              let title = event.acf.title;
              if (event.acf.start_date && event.acf.end_date) {
                title += ` | ${getHumanReadableDateRange(
                  event.acf.start_date,
                  event.acf.end_date
                )}`;
              }
              if (event.acf.location) {
                title += ` | ${event.acf.location}`;
              }
              return (
                <li key={event.slug}>
                  <BorderButton
                    title={title}
                    href={`/${program}/${event.slug}`}
                    color="white"
                    hideBorder
                  />
                </li>
              );
            })}
        </NormalList>
      )}
      <div>
        {program && (
          <BorderButton
            title="Learn More"
            href={learnMoreURLs[program]}
            color="white"
          />
        )}
        <BorderButton title="Back" href="/" color="white" />
      </div>
    </Page>
  );
};

const Head = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "4rem 0",
});

const Message = styled("div")({
  display: "flex",
  marginBottom: "2rem",
  flex: 1,
  minHeight: "6rem",
  padding: "1rem",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "PragmaticaExtended-ExtraBold",
  textTransform: "uppercase",
  color: `var(--white)`,
});
