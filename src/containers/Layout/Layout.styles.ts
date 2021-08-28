import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "30%",
    },
    [theme.breakpoints.only("sm")]: {
      height: "30%",
    },
  },
  photoContainer: {
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "70%",
    },
    [theme.breakpoints.only("sm")]: {
      height: "70%",
    },
  },
}));

export default useStyles;
