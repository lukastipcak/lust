import React from "react";
import { Box, Grid } from "@material-ui/core";

import abstract from "./abstract.jpg";

const Layout = (): JSX.Element => {
  return (
    <div style={{ flexGrow: 1 }}>
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
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Grid xs={12} sm={6}>
            <Box style={{ backgroundColor: "grey", height: "100%" }}>
              <img alt="abstract" src={abstract} width="100%" height="auto" />
            </Box>
          </Grid>
          <Grid xs={12} sm={6}>
            <Box style={{ backgroundColor: "lightgrey", height: "100%" }}></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
