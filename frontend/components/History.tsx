import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TimelineUI from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import { Event } from "../src/apis/events";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "640px",
      maxWidth: "90%",
      margin: "32px auto",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
  })
);

export default function Timeline(props: { events: Event[] }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TimelineUI>
        {props.events.map((event) => {
          return (
            <TimelineItem key={event.url}>
              <TimelineOppositeContent>
                <Typography color="textSecondary">
                  {event.date.toLocaleDateString()}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>
                  <a href={event.url}>{event.text}</a>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </TimelineUI>
    </Paper>
  );
}
