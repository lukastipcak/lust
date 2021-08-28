import React from "react";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./Layout.styles";
import abstract from "./abstract.jpg";
import me from "./me.jpeg";
import { Typography } from "@material-ui/core";

const Layout = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div style={{ flexGrow: 1, height: "100%" }}>
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
          style={{ height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.infoContainer}
          >
            <Box className={classes.abstractContainer}>
              <img
                alt="abstract"
                src={abstract}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
              <Typography variant="h5" className={classes.topLeft}>
                Hello, I'm
              </Typography>
              <Typography variant="h3" className={classes.centered}>
                Lukáš Štipčák
              </Typography>
              <Typography variant="h5" className={classes.bottomLeft}>
                FrontEnd Developer
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={classes.photoContainer}
          >
            <Box style={{ height: "100%" }}>
              <img
                alt="me"
                src={me}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
