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
  abstractContainer: {
    height: "100%",
    position: "relative",
  },
  topLeft: {
    color: "white",
    position: "absolute",
    top: "8px",
    left: "16px",
  },
  centered: {
    color: "white",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
  },
  bottomLeft: {
    color: "white",
    position: "absolute",
    bottom: "8px",
    left: "16px",
  },
}));

export default useStyles;
