import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paperRoot: {
    width: "100%",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: { margin: theme.spacing(1), marginLeft: theme.spacing(0) },
  projectWrapper: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  image: { width: "100%", height: "200px", objectFit: "cover" },
  leftPadding: {
    marginLeft: theme.spacing(1),
  },
}));
