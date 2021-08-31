import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    flexGrow: 1,
    height: "100%",
  },
  contentContainer: {
    height: "100%",
  },
  displaySizeContainer: {
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "40%",
    },
    [theme.breakpoints.only("sm")]: {
      height: "30%",
    },
  },
  photoMeSizeContainer: {
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "60%",
    },
    [theme.breakpoints.only("sm")]: {
      height: "70%",
    },
  },
  abstractBackground: {
    height: "100%",
    position: "relative",
  },
  meBackground: {
    height: "100%",
  },
  contentTextContainer: {
    width: "350px",
    height: "170px",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    color: "white",
  },
  imgFillContainer: {
    objectFit: "cover",
  },
  topLeft: {
    color: "white",
    position: "absolute",
    top: "8px",
    left: "16px",
  },
  centered: {
    color: "white",
  },
  bottomLeft: {
    color: "white",
  },
  centeredIcon: {
    "& .MuiCheckbox-root": {
      lineHeight: "normal",
    },
  },
}));

export default useStyles;
