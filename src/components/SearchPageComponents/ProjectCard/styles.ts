import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    minHeight: 400,
  },
  media: {
    minHeight: 350,
  },
  lowerPart: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },
});
