import React from "react";
import { Box, Fab, Grid } from "@material-ui/core";
import useStyles from "./Layout.styles";
import abstract from "./abstract.jpg";
import me from "./me.jpeg";
import { Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Layout = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.layoutContainer}>
      <Box
        paddingTop={6}
        paddingLeft={6}
        paddingRight={6}
        paddingBottom={6}
        height={"100vh"}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.contentContainer}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.displaySizeContainer}
          >
            <Box className={classes.abstractBackground}>
              <img
                alt="abstract"
                src={abstract}
                width="100%"
                height="100%"
                className={classes.imgFillContainer}
              />
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                className={classes.contentTextContainer}
                spacing={1}
              >
                <Grid item xs={12}>
                  <Typography variant="h5">Hello, I'm</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3">Lukáš Štipčák</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">FrontEnd Developer</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Fab
                    size="small"
                    variant="circular"
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/lukas-stipcak",
                        "_blank"
                      );
                    }}
                  >
                    <LinkedInIcon fontSize={"medium"} />
                  </Fab>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.photoMeSizeContainer}
          >
            <Box className={classes.meBackground}>
              <img
                alt="me"
                src={me}
                width="100%"
                height="100%"
                className={classes.imgFillContainer}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
