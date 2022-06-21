import React from "react";
import { AppBar as MUIAppBar, Box, Toolbar, Typography } from "@mui/material";

type Props = {};

const AppBar = (props: Props) => {
  return (
    <Box flex={1}>
      <MUIAppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Star Wars GUI
          </Typography>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};

export default AppBar;
